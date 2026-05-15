/** Contact info — single source of truth */
export const CONTACT = {
  email: "libuse@stunova.cz",
  dokladyEmail: "doklady@stunova.cz",
  phone: "+420728000000",
  phoneDisplay: "+420 728 ••• •••",
  whatsappUrl:
    "https://wa.me/420728000000?text=Dobr%C3%BD%20den%2C%20zaj%C3%ADm%C3%A1m%20se%20o%20%C3%BA%C4%8Detn%C3%AD%20slu%C5%BEby.",
  address: "Praha 4 · Nusle",
  hours: "Po–Pá 9:00–17:00",
} as const;

/** Brand */
export const BRAND = {
  name: "Libuše Stuňová",
  title: "Libuše Stuňová · Účetnictví",
  tagline: "Účetní jako parťák, ne jen servis ke konci roku.",
  url: "https://stunova.qawave.ai",
  logo: "/stunova-logo.jpg",
  logoTransparent: "/stunova-logo-transparent.png",
  year: 2026,
} as const;

/** Blog articles — used in index, RSS, sitemap */
export const ARTICLES = [
  {
    slug: "co-potrebuji-od-ucetni",
    title: "Co potřebuji od účetní? Průvodce pro OSVČ a malé firmy",
    excerpt:
      "Nevíš, co od účetní čekat? Sepsal jsem seznam věcí, které by měla řešit — a které ne.",
    date: "2026-05-15",
    readTime: "5 min",
  },
  {
    slug: "datove-schranky-2026",
    title: "Datové schránky v roce 2026: co se změnilo a co musíš vědět",
    excerpt:
      "Od ledna 2023 mají datovky i OSVČ. Co to znamená pro tebe a jak s tím pracovat?",
    date: "2026-05-10",
    readTime: "4 min",
  },
  {
    slug: "prechod-k-nove-ucetni",
    title: "Jak bezbolestně přejít k nové účetní",
    excerpt:
      "Měníš účetní a bojíš se chaosu? Tady je návod krok za krokem, co připravit a na co si dát pozor.",
    date: "2026-05-05",
    readTime: "6 min",
  },
] as const;
