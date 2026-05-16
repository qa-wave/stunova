import { test, expect } from "@playwright/test";

const publicRoutes = [
  ["/", "Libuše Stuňová"],
  ["/v4-warm", "Warm"],
  ["/v5-galerie", "Galerie"],
  ["/prihlaseni", "Vítej zpět"],
  ["/blog", "Blog"],
  ["/blog/co-potrebuji-od-ucetni", "Co potřebuji"],
  ["/blog/datove-schranky-2026", "Datové schránky"],
  ["/blog/prechod-k-nove-ucetni", "přejít"],
  ["/ochrana-udaju", "Ochrana"],
] as const;

const protectedRoutes = [
  ["/portal", "Přehled"],
  ["/portal/dokumenty", "Dokumenty"],
  ["/portal/faktury", "Faktury"],
  ["/portal/schuzky", "Schůzky"],
  ["/admin", "Přehled"],
  ["/admin/klienti", "Klienti"],
  ["/admin/schuzky", "Kalendář"],
  ["/admin/faktury", "Fakturace"],
] as const;

test.describe("Smoke tests — all routes return 200", () => {
  for (const [path, text] of publicRoutes) {
    test(`GET ${path} → 200 + contains "${text}"`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      await expect(page.locator("body")).toContainText(text);
    });
  }

  for (const [path, text] of protectedRoutes) {
    test(`GET ${path} → 200 (no auth)`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      await expect(page.locator("body")).toContainText(text);
    });
  }
});

test.describe("API endpoints", () => {
  test("GET /api/health → JSON", async ({ request }) => {
    const res = await request.get("/api/health");
    expect(res.status()).toBe(200);
    const json = await res.json();
    expect(json.app).toBe("stunova");
  });

  test("GET /api/rss → XML", async ({ request }) => {
    const res = await request.get("/api/rss");
    expect(res.status()).toBe(200);
    const text = await res.text();
    expect(text).toContain("<rss");
  });

  test("GET /sitemap.xml", async ({ request }) => {
    const res = await request.get("/sitemap.xml");
    expect(res.status()).toBe(200);
  });

  test("GET /robots.txt", async ({ request }) => {
    const res = await request.get("/robots.txt");
    expect(res.status()).toBe(200);
    const text = await res.text();
    expect(text).toContain("Disallow: /portal/");
  });
});
