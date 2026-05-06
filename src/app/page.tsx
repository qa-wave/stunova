import Image from "next/image";
import Link from "next/link";

const variants = [
  {
    href: "/v1-imperial",
    nazev: "Imperial",
    podtitulek: "Tmavá luxusní · privátní bankovní pocit",
    popis:
      "Hluboké černo-zlaté pozadí, klasický serif (Playfair), pomalé fade-in animace, hairlinové zlaté oddělovače. Vhodné pro: privátní bankovnictví, advokátní kancelář, exkluzivní klub.",
    paleta: ["#0e0c0a", "#c8a867", "#bcae93", "#f4efe6"],
    pismo: "Playfair Display + Inter",
    naladaClass: "bg-[#0e0c0a] text-[#c8a867]",
  },
  {
    href: "/v2-editorial",
    nazev: "Editorial",
    podtitulek: "Magazínový luxus · oversized serif",
    popis:
      "Ivory pozadí, gigantické Cormorant nadpisy v italice, asymetrický 12sloupcový grid, čísla stránek, pull-quoty. Vhodné pro: značky pracující s úvahou, esejemi, intelektuálním obsahem.",
    paleta: ["#faf7f1", "#1c1814", "#8e6f3f", "#c8a867"],
    pismo: "Cormorant Garamond + Inter",
    naladaClass: "bg-[#faf7f1] text-[#1c1814]",
  },
  {
    href: "/v3-brutalist",
    nazev: "Brutalist",
    podtitulek: "Vysoký kontrast · žádný fluff",
    popis:
      "Čistá bílá / černá, Archivo Black v gigantické velikosti, silné rámečky, zlatý jako akcent v blocích. Vhodné pro: značky, které chtějí signalizovat „neztrácíme čas\".",
    paleta: ["#ffffff", "#000000", "#c8a867", "#f5f5f5"],
    pismo: "Archivo Black + Inter",
    naladaClass: "bg-white text-black border-2 border-black",
  },
  {
    href: "/v4-warm",
    nazev: "Warm",
    podtitulek: "Soft contemporary · radiální gradienty",
    popis:
      "Krémově-zlaté radiální pozadí, Fraunces (variabilní serif), zaoblené karty s blur efektem, jemné stíny v zlaté. Vhodné pro: značky, co chtějí být prémiové, ale přístupné.",
    paleta: ["#fbf5e9", "#c8a867", "#8e6f3f", "#2a1f12"],
    pismo: "Fraunces + Inter",
    naladaClass: "bg-gradient-to-br from-[#fbf5e9] to-[#f4e6c9] text-[#2a1f12]",
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
                Návrhy webu · interní review
              </p>
              <h1
                className="text-4xl md:text-5xl"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Stunova
              </h1>
            </div>
          </div>
          <div className="text-sm text-[#1c1814]/70 max-w-sm">
            Čtyři vizuální směry pro značku Stunova, postavené kolem stejného
            loga a stejné struktury obsahu. Klikni na variantu pro plný náhled.
          </div>
        </div>
      </header>

      {/* Brand foundation */}
      <section className="px-6 md:px-12 py-16 border-b border-[#1c1814]/10">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl mb-12"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Brand foundation
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#8e6f3f] mb-3">
                Pracovní positioning
              </p>
              <p className="text-base leading-relaxed">
                Prémiové poradenství pro zakladatele a majitele firem. Hodnoty:
                <strong> síla, jasnost, diskrétnost</strong>. Tón: tichý,
                rozvážný, bez marketingu. Tykání jako u kolegy, ke kterému máš
                respekt.
              </p>
              <p className="mt-3 text-xs text-[#1c1814]/60">
                Hypotéza — upřesni a copy přepíšu napříč variantami.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[#8e6f3f] mb-3">
                Paleta z loga
              </p>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { c: "#0e0c0a", n: "Jet" },
                  { c: "#1c1814", n: "Graphite" },
                  { c: "#8e6f3f", n: "Gold dark" },
                  { c: "#c8a867", n: "Gold" },
                  { c: "#e0c890", n: "Gold light" },
                  { c: "#e5d5b6", n: "Sand" },
                  { c: "#f4efe6", n: "Cream" },
                  { c: "#faf7f1", n: "Ivory" },
                ].map((s) => (
                  <div key={s.c} className="text-[10px]">
                    <div
                      className="aspect-square rounded mb-1 border border-[#1c1814]/10"
                      style={{ background: s.c }}
                    />
                    <p className="font-medium">{s.n}</p>
                    <p className="text-[#1c1814]/60">{s.c}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[#8e6f3f] mb-3">
                Typografie napříč variantami
              </p>
              <ul className="space-y-3 text-sm">
                <li>
                  <span style={{ fontFamily: "var(--font-playfair)" }}>
                    Playfair Display
                  </span>{" "}
                  — Imperial
                </li>
                <li>
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontStyle: "italic",
                    }}
                  >
                    Cormorant Garamond
                  </span>{" "}
                  — Editorial
                </li>
                <li>
                  <span
                    style={{
                      fontFamily: "var(--font-archivo-black)",
                      textTransform: "uppercase",
                    }}
                  >
                    Archivo Black
                  </span>{" "}
                  — Brutalist
                </li>
                <li>
                  <span style={{ fontFamily: "var(--font-fraunces)" }}>
                    Fraunces
                  </span>{" "}
                  — Warm
                </li>
                <li className="text-[#1c1814]/60">Inter (body napříč všemi)</li>
              </ul>
            </div>
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
                className="group block rounded-xl overflow-hidden border border-[#1c1814]/10 bg-white hover:shadow-2xl hover:-translate-y-1 transition"
              >
                <div
                  className={`${v.naladaClass} aspect-[16/9] flex items-center justify-center relative overflow-hidden`}
                >
                  <span
                    className="text-5xl md:text-6xl"
                    style={{
                      fontFamily:
                        v.nazev === "Imperial"
                          ? "var(--font-playfair)"
                          : v.nazev === "Editorial"
                            ? "var(--font-cormorant)"
                            : v.nazev === "Brutalist"
                              ? "var(--font-archivo-black)"
                              : "var(--font-fraunces)",
                      letterSpacing:
                        v.nazev === "Brutalist" ? "-0.04em" : "-0.02em",
                      textTransform:
                        v.nazev === "Brutalist" ? "uppercase" : "none",
                      fontStyle: v.nazev === "Editorial" ? "italic" : "normal",
                    }}
                  >
                    Stunova
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3
                      className="text-2xl"
                      style={{ fontFamily: "var(--font-cormorant)" }}
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
