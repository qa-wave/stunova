import { test, expect } from "@playwright/test";

test.describe("Portal", () => {
  test("dashboard shows greeting and KPI", async ({ page }) => {
    await page.goto("/portal");
    await expect(page.locator("h1")).toContainText("Dobré ráno");
    await expect(page.locator("text=Faktury vystavené")).toBeVisible();
  });

  test("documents page has filter buttons", async ({ page }) => {
    await page.goto("/portal/dokumenty");
    await expect(page.locator("h1")).toContainText("Dokumenty");
    await expect(page.locator('button[aria-pressed="true"]')).toContainText("Vše");
  });

  test("document filter works", async ({ page }) => {
    await page.goto("/portal/dokumenty");
    await page.click('button:has-text("Mzdy")');
    await expect(page.locator('button[aria-pressed="true"]')).toContainText("Mzdy");
  });

  test("invoices table is visible with splatnost column", async ({ page }) => {
    await page.goto("/portal/faktury");
    await expect(page.locator("h1")).toContainText("Faktury");
    await expect(page.locator("th", { hasText: "Splatnost" })).toBeVisible();
  });

  test("invoice detail shows QR code for unpaid", async ({ page }) => {
    await page.goto("/portal/faktury/2026-04-01");
    await expect(page.locator("text=K úhradě")).toBeVisible();
    await expect(page.locator("text=Platební údaje")).toBeVisible();
    await expect(page.locator('img[alt*="QR"]')).toBeVisible();
  });

  test("invoice detail 404 for unknown", async ({ page }) => {
    await page.goto("/portal/faktury/9999-99-99");
    await expect(page.locator("text=Faktura nenalezena")).toBeVisible();
  });

  test("breadcrumbs show on subpages", async ({ page }) => {
    await page.goto("/portal/faktury");
    await expect(page.locator('nav[aria-label="Breadcrumb"]')).toBeVisible();
  });

  test("sidebar nav has badge counts", async ({ page }) => {
    await page.goto("/portal");
    // Badge for Dokumenty (2) or Faktury (1)
    const badges = page.locator("aside .rounded-full.w-5.h-5");
    await expect(badges.first()).toBeVisible();
  });
});

test.describe("Admin", () => {
  test("dashboard shows KPI", async ({ page }) => {
    await page.goto("/admin");
    await expect(page.locator("text=Aktivní klienti")).toBeVisible();
  });

  test("client detail page loads", async ({ page }) => {
    await page.goto("/admin/klienti/acme-sro");
    await expect(page.locator("h1")).toContainText("Acme s.r.o.");
    await expect(page.locator("text=Interní poznámky")).toBeVisible();
  });

  test("new client form loads", async ({ page }) => {
    await page.goto("/admin/klienti/novy");
    await expect(page.locator("h1")).toContainText("Nový klient");
    await expect(page.locator('input[name="nazev"]')).toBeVisible();
  });

  test("invoice progress bar visible", async ({ page }) => {
    await page.goto("/admin/faktury");
    await expect(page.locator("text=35 % splněno")).toBeVisible();
  });
});
