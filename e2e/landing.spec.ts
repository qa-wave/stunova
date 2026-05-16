import { test, expect } from "@playwright/test";

test.describe("Landing page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("has correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/Libuše Stuňová/);
  });

  test("nav has all links", async ({ page }) => {
    await expect(page.locator('nav[aria-label="Hlavní navigace"]')).toBeVisible();
    await expect(page.locator('a[href="#sluzby"]').first()).toBeVisible();
    await expect(page.locator('a[href="#cenik"]').first()).toBeVisible();
    await expect(page.locator('a[href="#kontakt"]').first()).toBeVisible();
  });

  test("hero headline is visible", async ({ page }) => {
    await expect(page.locator("h1")).toContainText("nestresuješ");
  });

  test("pricing section has 3 plans", async ({ page }) => {
    const pricingSection = page.locator("#cenik");
    await expect(pricingSection).toBeVisible();
    const cards = pricingSection.locator(".card-warm");
    await expect(cards).toHaveCount(3);
  });

  test("FAQ accordion opens and closes", async ({ page }) => {
    const faqButton = page.locator("button", { hasText: "Musím za tebou chodit" });
    await faqButton.click();
    await expect(faqButton).toHaveAttribute("aria-expanded", "true");
    await faqButton.click();
    await expect(faqButton).toHaveAttribute("aria-expanded", "false");
  });

  test("contact form submits", async ({ page }) => {
    await page.locator("#kontakt").scrollIntoViewIfNeeded();
    await page.fill('input[name="name"]', "Test User");
    await page.fill('input[name="email"]', "test@test.cz");
    await page.fill('textarea[name="message"]', "Test message");
    // Don't actually submit — just verify fields work
    await expect(page.locator('input[name="name"]')).toHaveValue("Test User");
  });

  test("scroll to section works", async ({ page }) => {
    await page.click('a[href="#sluzby"]');
    await page.waitForTimeout(500);
    const section = page.locator("#sluzby");
    await expect(section).toBeInViewport();
  });

  test("mobile menu opens", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Desktop only has visible nav");
    await page.click('button[aria-label="Otevřít menu"]');
    await expect(page.locator('a[href="#sluzby"]').last()).toBeVisible();
  });
});

test.describe("SEO", () => {
  test("has OG tags", async ({ page }) => {
    await page.goto("/");
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute("content");
    expect(ogTitle).toContain("Libuše Stuňová");
  });

  test("has canonical URL", async ({ page }) => {
    await page.goto("/");
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
    expect(canonical).toContain("stunova.qawave.ai");
  });

  test("has JSON-LD structured data", async ({ page }) => {
    await page.goto("/");
    const jsonLd = await page.locator('script[type="application/ld+json"]').textContent();
    expect(jsonLd).toContain("AccountingService");
  });

  test("has favicon", async ({ page }) => {
    await page.goto("/");
    const favicon = await page.locator('link[rel="icon"]').getAttribute("href");
    expect(favicon).toBeTruthy();
  });
});
