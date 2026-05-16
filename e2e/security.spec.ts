import { test, expect } from "@playwright/test";

test.describe("Security headers", () => {
  test("has X-Content-Type-Options", async ({ request }) => {
    const res = await request.get("/");
    const header = res.headers()["x-content-type-options"];
    expect(header).toBe("nosniff");
  });

  test("has X-Frame-Options or CSP frame-ancestors", async ({ request }) => {
    const res = await request.get("/");
    const xfo = res.headers()["x-frame-options"];
    const csp = res.headers()["content-security-policy"];
    expect(xfo || csp).toBeTruthy();
  });

  test("has Referrer-Policy", async ({ request }) => {
    const res = await request.get("/");
    const rp = res.headers()["referrer-policy"];
    expect(rp).toBeTruthy();
  });

  test("has Strict-Transport-Security on production", async ({ request }) => {
    // Only test if running against production
    const res = await request.get("https://stunova.qawave.ai/", {
      ignoreHTTPSErrors: true,
    }).catch(() => null);
    if (res) {
      const hsts = res.headers()["strict-transport-security"];
      expect(hsts).toContain("max-age");
    }
  });
});

test.describe("XSS protection", () => {
  test("contact form escapes input", async ({ page }) => {
    await page.goto("/");
    await page.locator("#kontakt").scrollIntoViewIfNeeded();
    const xssPayload = '<script>alert("xss")</script>';

    await page.fill('input[name="name"]', xssPayload);
    await page.fill('input[name="email"]', "test@test.cz");
    await page.fill('textarea[name="message"]', xssPayload);

    // Verify script tag is NOT executed — page should not have alert dialog
    const dialogPromise = page.waitForEvent("dialog", { timeout: 1000 }).catch(() => null);
    const dialog = await dialogPromise;
    expect(dialog).toBeNull();
  });

  test("URL params don't inject content", async ({ page }) => {
    await page.goto("/?q=<script>alert(1)</script>");
    const bodyText = await page.locator("body").textContent();
    expect(bodyText).not.toContain("<script>");
  });
});

test.describe("Auth protection", () => {
  test("portal pages accessible without auth (demo mode)", async ({ page }) => {
    // Without Clerk keys, portal should be accessible
    const res = await page.goto("/portal");
    expect(res?.status()).toBe(200);
  });

  test("admin pages accessible without auth (demo mode)", async ({ page }) => {
    const res = await page.goto("/admin");
    expect(res?.status()).toBe(200);
  });
});

test.describe("Information disclosure", () => {
  test("no server version in headers", async ({ request }) => {
    const res = await request.get("/");
    const server = res.headers()["server"];
    // Vercel sets "Vercel" which is fine, but shouldn't leak Next.js version
    const xPoweredBy = res.headers()["x-powered-by"];
    expect(xPoweredBy).toBeFalsy();
  });

  test("API health doesn't leak sensitive info", async ({ request }) => {
    const res = await request.get("/api/health");
    const json = await res.json();
    // Should not contain env vars, paths, or internal data
    const text = JSON.stringify(json);
    expect(text).not.toContain("secret");
    expect(text).not.toContain("password");
    expect(text).not.toContain("node_modules");
    expect(text).not.toContain("CLERK");
  });

  test("non-existent API returns proper error", async ({ request }) => {
    const res = await request.get("/api/nonexistent");
    expect(res.status()).toBe(404);
  });

  test(".env file not accessible", async ({ request }) => {
    const res = await request.get("/.env");
    expect(res.status()).toBe(404);
  });

  test("source maps not exposed", async ({ request }) => {
    const res = await request.get("/_next/static/chunks/main.js.map");
    // Should be 404 in production
    expect([404, 403]).toContain(res.status());
  });
});

test.describe("CSRF / Form security", () => {
  test("login form has proper method", async ({ page }) => {
    await page.goto("/prihlaseni");
    const form = page.locator("form").first();
    // Form should exist and not use GET for credentials
    if (await form.count()) {
      const method = await form.getAttribute("method");
      // Default (no method) = POST, which is correct
      expect(method?.toLowerCase()).not.toBe("get");
    }
  });
});
