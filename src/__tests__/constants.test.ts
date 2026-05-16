import { describe, it, expect } from "vitest";
import { CONTACT, BRAND, ARTICLES } from "@/lib/constants";

describe("CONTACT constants", () => {
  it("has valid email format", () => {
    expect(CONTACT.email).toMatch(/^[^@]+@[^@]+\.[^@]+$/);
    expect(CONTACT.dokladyEmail).toMatch(/^[^@]+@[^@]+\.[^@]+$/);
  });

  it("has valid phone format", () => {
    expect(CONTACT.phone).toMatch(/^\+420\d{9}$/);
  });

  it("has phone display with masking", () => {
    expect(CONTACT.phoneDisplay).toContain("•••");
  });

  it("has valid WhatsApp URL", () => {
    expect(CONTACT.whatsappUrl).toMatch(/^https:\/\/wa\.me\//);
  });

  it("has address with Praha", () => {
    expect(CONTACT.address).toContain("Praha");
  });

  it("has business hours", () => {
    expect(CONTACT.hours).toMatch(/Po.*Pá/);
  });
});

describe("BRAND constants", () => {
  it("has valid URL", () => {
    expect(BRAND.url).toMatch(/^https:\/\//);
  });

  it("has logo paths starting with /", () => {
    expect(BRAND.logo).toMatch(/^\//);
    expect(BRAND.logoTransparent).toMatch(/^\//);
  });

  it("has name and title", () => {
    expect(BRAND.name).toBeTruthy();
    expect(BRAND.title).toContain(BRAND.name);
  });
});

describe("ARTICLES constants", () => {
  it("has at least 1 article", () => {
    expect(ARTICLES.length).toBeGreaterThan(0);
  });

  it("each article has required fields", () => {
    ARTICLES.forEach((a) => {
      expect(a.slug).toMatch(/^[a-z0-9-]+$/);
      expect(a.title).toBeTruthy();
      expect(a.excerpt).toBeTruthy();
      expect(a.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(a.readTime).toMatch(/\d+ min/);
    });
  });

  it("slugs are unique", () => {
    const slugs = ARTICLES.map((a) => a.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
