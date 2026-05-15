import { BRAND, ARTICLES } from "@/lib/constants";

const BASE = BRAND.url;

const articles = ARTICLES.map((a) => ({
  slug: a.slug,
  title: a.title,
  description: a.excerpt,
  date: a.date,
}));

function escapeXml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function GET() {
  const items = articles
    .map(
      (a) => `    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${BASE}/blog/${a.slug}</link>
      <description>${escapeXml(a.description)}</description>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
      <guid>${BASE}/blog/${a.slug}</guid>
    </item>`,
    )
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Libuše Stuňová · Blog</title>
    <link>${BASE}/blog</link>
    <description>Praktické tipy k účetnictví, daním a podnikání.</description>
    <language>cs</language>
    <atom:link href="${BASE}/api/rss" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
