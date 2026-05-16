import { describe, it, expect } from "vitest";

const BASE = "https://stunova.qawave.ai";

describe("API endpoints (production)", () => {
  it("GET /api/health returns 200 with correct app name", async () => {
    const res = await fetch(`${BASE}/api/health`);
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.status).toBe("ok");
    expect(data.app).toBe("stunova");
    expect(data.timestamp).toBeTruthy();
  });

  it("GET /api/rss returns valid RSS XML", async () => {
    const res = await fetch(`${BASE}/api/rss`);
    expect(res.status).toBe(200);
    const contentType = res.headers.get("content-type");
    expect(contentType).toContain("application/rss+xml");
    const text = await res.text();
    expect(text).toContain("<rss");
    expect(text).toContain("<channel>");
    expect(text).toContain("<item>");
  });

  it("GET /sitemap.xml returns valid XML", async () => {
    const res = await fetch(`${BASE}/sitemap.xml`);
    expect(res.status).toBe(200);
    const text = await res.text();
    expect(text).toContain("<urlset");
    expect(text).toContain("stunova.qawave.ai");
  });

  it("GET /robots.txt blocks portal and admin", async () => {
    const res = await fetch(`${BASE}/robots.txt`);
    expect(res.status).toBe(200);
    const text = await res.text();
    expect(text).toContain("Disallow: /portal/");
    expect(text).toContain("Disallow: /admin/");
    expect(text).toContain("Disallow: /api/");
  });
});
