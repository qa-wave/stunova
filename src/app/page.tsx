import Image from "next/image";
import Link from "next/link";

const variants = [
  {
    href: "/v4-warm",
    nazev: "Warm",
    znacka: "Favorit",
    podtitulek: "Soft contemporary · radiální gradienty",
    popis:
      "Krémově-zlaté radiální pozadí, Fraunces (variabilní serif), zaoblené karty s blur efektem, jemné stíny. Prémiové, ale přístupné — uvolněný klid s hloubkou.",
    paleta: ["#fbf5e9", "#c8a867", "#8e6f3f", "#2a1f12"],
    pismo: "Fraunces + Inter",
    naladaClass:
      "bg-gradient-to-br from-[#fbf5e9] via-[#f4e6c9] to-[#e5d5b6] text-[#2a1f12]",
    fontVar: "var(--font-fraunces)",
    italic: false,
  },
  {
    href: "/v1-aurora",
    nazev: "Aurora",
    znacka: "Nový směr",
    podtitulek: "Tmavá tech-luxury · gradient mesh + glass",
    popis:
      "Hluboké černé pozadí s animovanými zlatými gradient blobs, glass karty s blur, Inter v tight tracking. Vibe Linear / Vercel přepsaný do zlata. Pro značky, co chtějí cítit modernost a klid současně.",
    paleta: ["#0b0a09", "#c8a867", "#e0c890", "#bcae93"],
    pismo: "Inter (medium tracking-tight)",
    naladaClass:
      "bg-[#0b0a09] text-[#f4efe6] [background:radial-gradient(ellipse_at_15%_20%,rgba(200,168,103,0.35),transparent_60%),radial-gradient(ellipse_at_85%_80%,rgba(142,111,63,0.4),transparent_60%),#0b0a09]",
    fontVar: "var(--font-sans)",
    italic: false,
  },
  {
    href: "/v2-atelier",
    nazev: "Atelier",
    znacka: "Nový směr",
    podtitulek: "Swiss minimal · hairlines + zlatá nit",
    popis:
      "Bílé pozadí, 12sloupcový tight grid, hairline lajny, čísla ve zlatě, sekce číslované §01-§04. Pentagram / Aesop precizí. Pro značky, které prémii dělají odčítáním, ne přidáváním.",
    paleta: ["#ffffff", "#0e0c0a", "#c8a867", "#8e6f3f"],
    pismo: "Inter (tracking-tight)",
    naladaClass: "bg-white text-[#0e0c0a]",
    fontVar: "var(--font-sans)",
    italic: false,
  },
  {
    href: "/v3-cinematic",
    nazev: "Cinematic",
    znacka: "Nový směr",
    podtitulek: "Filmová dramaturgie · Akt I-III",
    popis:
      "Plnoplošný stage hero s vinětou, gigantický Instrument Serif, obsah strukturovaný do aktů I-III. Pro značky, které vědí, že prémie je zážitek, ne feature list.",
    paleta: ["#1a1410", "#c8a867", "#bcae93", "#0e0a08"],
    pismo: "Instrument Serif + Inter",
    naladaClass: "bg-gradient-to-b from-[#0e0a08] via-[#1a1410] to-[#2a1f12] text-[#f4efe6]",
    fontVar: "var(--font-instrument)",
    italic: true,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf7f1] text-[#1c1814]">
      {/* Hlavička */}
      <header className="px-6 md:px-12 py-12 border-b border-[#1c1814]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image src="/logo.jpg" alt="Stunova" width={64} height={64} />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#8e6f3f]">
                Návrhy webu · iterace 2
              </p>
              <h1
                className="text-4xl md:text-5xl"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Stunova
              </h1>
            </div>
          </div>
          <div className="text-sm text-[#1c1814]/70 max-w-sm">
            Warm zůstává jako favorit. Tři nové směry pro porovnání — záměrně
            odlišné sázky, ne malé variace na warm.
          </div>
        </div>
      </header>

      {/* Brand foundation — kompaktní */}
      <section className="px-6 md:px-12 py-12 border-b border-[#1c1814]/10 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#8e6f3f] mb-3">
              Pracovní positioning
            </p>
            <p className="text-sm leading-relaxed">
              Prémiové poradenství pro zakladatele a majitele firem. Hodnoty:
              <strong> síla, jasnost, diskrétnost</strong>. Tón: tichý,
              rozvážný, bez marketingu. Tykání jako u kolegy, ke kterému máš
              respekt.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#8e6f3f] mb-3">
              Paleta z loga
            </p>
            <div className="grid grid-cols-8 gap-1">
              {[
                "#0e0c0a",
                "#1c1814",
                "#8e6f3f",
                "#c8a867",
                "#e0c890",
                "#e5d5b6",
                "#f4efe6",
                "#faf7f1",
              ].map((c) => (
                <div
                  key={c}
                  className="aspect-square rounded border border-[#1c1814]/10"
                  style={{ background: c }}
                  title={c}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#8e6f3f] mb-3">
              Typografie napříč variantami
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <span style={{ fontFamily: "var(--font-fraunces)" }}>
                  Fraunces
                </span>{" "}
                — Warm
              </li>
              <li>
                <span style={{ fontFamily: "var(--font-sans)" }}>Inter</span> —
                Aurora & Atelier
              </li>
              <li>
                <span
                  style={{
                    fontFamily: "var(--font-instrument)",
                    fontStyle: "italic",
                  }}
                >
                  Instrument Serif
                </span>{" "}
                — Cinematic
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Variant grid */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {variants.map((v) => (
              <Link
                key={v.href}
                href={v.href}
                className="group block rounded-xl overflow-hidden border border-[#1c1814]/10 bg-white hover:shadow-2xl hover:-translate-y-1 transition relative"
              >
                {v.znacka === "Favorit" && (
                  <span className="absolute top-4 right-4 z-10 bg-[#c8a867] text-[#2a1f12] text-[10px] tracking-widest uppercase px-3 py-1 rounded-full font-medium">
                    Favorit
                  </span>
                )}
                <div
                  className={`${v.naladaClass} aspect-[16/9] flex items-center justify-center relative overflow-hidden`}
                >
                  <span
                    className="text-5xl md:text-6xl font-medium"
                    style={{
                      fontFamily: v.fontVar,
                      fontStyle: v.italic ? "italic" : "normal",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    Stunova
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3
                      className="text-2xl"
                      style={{ fontFamily: "var(--font-fraunces)" }}
                    >
                      {v.nazev}
                    </h3>
                    <span className="text-xs text-[#1c1814]/60 group-hover:text-[#8e6f3f] transition">
                      Otevřít →
                    </span>
                  </div>
                  <p className="text-sm text-[#8e6f3f] mb-3">{v.podtitulek}</p>
                  <p className="text-sm leading-relaxed text-[#1c1814]/80 mb-4">
                    {v.popis}
                  </p>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex gap-1.5">
                      {v.paleta.map((c) => (
                        <span
                          key={c}
                          className="size-5 rounded-full border border-[#1c1814]/10"
                          style={{ background: c }}
                          title={c}
                        />
                      ))}
                    </div>
                    <span className="text-[#1c1814]/60">{v.pismo}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-12 py-8 border-t border-[#1c1814]/10 flex justify-between text-xs text-[#1c1814]/60">
        <span>Stunova — interní review návrhů · {new Date().getFullYear()}</span>
        <a href="/api/health" className="hover:text-[#8e6f3f] transition">
          /api/health
        </a>
      </footer>
    </main>
  );
}
