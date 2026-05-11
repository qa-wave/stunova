import type { MetadataRoute } from "next";

const BASE = "https://stunova.qawave.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/v4-warm`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/v5-galerie`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/prihlaseni`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];
}
