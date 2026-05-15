const BASE = "https://stunova.qawave.ai";

const articles = [
  {
    slug: "co-potrebuji-od-ucetni",
    title: "Co potřebuji od účetní? Průvodce pro OSVČ a malé firmy",
    description: "Nevíš, co od účetní čekat? Seznam věcí, které by měla řešit — a které ne.",
    date: "2026-05-15",
  },
  {
    slug: "datove-schranky-2026",
    title: "Datové schránky v roce 2026: co se změnilo a co musíš vědět",
    description: "Od ledna 2023 mají datovky i OSVČ. Co to znamená a jak s tím pracovat?",
    date: "2026-05-10",
  },
  {
    slug: "prechod-k-nove-ucetni",
    title: "Jak bezbolestně přejít k nové účetní",
    description: "Měníš účetní a bojíš se chaosu? Návod krok za krokem.",
    date: "2026-05-05",
  },
];

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
