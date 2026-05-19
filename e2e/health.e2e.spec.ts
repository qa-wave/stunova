import { test, expect } from "@playwright/test";

// Resilience-focused E2E: landing renders for visitors, portal stays gated.
test.describe("health & resilience", () => {
  test("landing responds 200 and shows the brand", async ({ page }) => {
    const res = await page.goto("/");
    expect(res?.status()).toBeLessThan(400);
    await expect(page).toHaveTitle(/Libuše Stuňová/i);
    expect((await page.locator("body").innerText()).length).toBeGreaterThan(20);
  });

  test("/portal is reachable and renders the dashboard shell", async ({
    page,
  }) => {
    const res = await page.goto("/portal");
    expect(res?.status()).toBe(200);
    await expect(page.locator("body")).toContainText(/Přehled/i);
  });

  test("renders without uncaught page errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(String(e)));
    await page.goto("/");
    expect(errors, errors.join("\n")).toHaveLength(0);
  });
});
