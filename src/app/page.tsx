import Link from "next/link";
import { Logo } from "@/components/Logo";

const variants = [
  {
    href: "/v4-warm",
    nazev: "Warm",
    znacka: "Favorit",
    podtitulek: "Cream paper · radiální gradienty",
    popis:
      "Krémově-zlaté pozadí v duchu papíru z loga, Fraunces serif, zaoblené karty s blur efektem. Domácký, prémiový, přístupný — jak kafe, co si dáš s účetní.",
    paleta: ["#fbf5e9", "#c8a867", "#5a3825", "#2a1f12"],
    pismo: "Fraunces + Inter",
    naladaClass:
      "bg-gradient-to-br from-[#fbf5e9] via-[#f4e6c9] to-[#e8dcb8] text-[#2a1f12]",
    fontVar: "var(--font-fraunces)",
    italic: false,
  },
  {
    href: "/v5-galerie",
    nazev: "Galerie",
    znacka: "Druhý směr",
    podtitulek: "Čistá bílá · v duchu pozadí loga",
    popis:
      "Logo jako exponát na čisté bílé. Hodně dechu, tenké zlaté linky, kroky procesu řazené jako exponáty č. 01–04. Pro klienty, co preferují klid a strukturu.",
    paleta: ["#ffffff", "#c8a867", "#5a3825", "#1c1814"],
    pismo: "Fraunces (light) + Inter",
    naladaClass: "bg-white text-[#1c1814] border border-[#1c1814]/10",
    fontVar: "var(--font-fraunces)",
    italic: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf7f1] text-[#1c1814]">
      {/* Hlavička */}
      <header className="px-6 md:px-12 py-12 border-b border-[#1c1814]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex items-start gap-6">
            <Logo size="lg" />
            <div className="pt-2">
              <p className="text-xs uppercase tracking-[0.3em] text-[#8e6f3f]">
                Návrhy webu · iterace 3
              </p>
              <p className="text-sm text-[#5a4a32] mt-2 max-w-md">
                Logo · cream paper + brown ink. Pasuje do warm i galerie
                varianty bez úprav.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:items-end gap-3">
            <div className="text-sm text-[#1c1814]/70 max-w-sm md:text-right">
              Dvě varianty marketingového webu + funkční klientský portál
              a admin. Vše navázáno na ☕ logo.
            </div>
            <div className="flex gap-2 text-xs">
              <Link
                href="/prihlaseni"
                className="rounded-full px-4 py-2 bg-white border border-[#c8a867]/30 hover:bg-[#fbf5e9] transition"
              >
                Přihlášení
              </Link>
              <Link
                href="/portal"
                className="rounded-full px-4 py-2 bg-white border border-[#c8a867]/30 hover:bg-[#fbf5e9] transition"
              >
                Portál (demo)
              </Link>
              <Link
                href="/admin"
                className="rounded-full px-4 py-2 bg-[#5a3825] text-white hover:bg-[#2a1f12] transition"
              >
                Admin (demo)
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Brand foundation */}
      <section className="px-6 md:px-12 py-12 border-b border-[#1c1814]/10 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#8e6f3f] mb-3">
              Pracovní positioning
            </p>
            <p className="text-sm leading-relaxed">
              Účetní pro malé firmy a OSVČ, kterým nestačí, když je účetní vidí
              jednou ročně. Hodnoty: <strong>klid, jasnost, dostupnost</strong>.
              Tón: kamarádský, lidský, vysvětlí i třikrát, dokud to nedává smysl.
              Tykání default. Kafíčko jako rituál i metafora.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#8e6f3f] mb-3">
              Paleta z loga
            </p>
            <div className="grid grid-cols-8 gap-1">
              {[
                { c: "#2a1f12", n: "Espresso" },
                { c: "#5a3825", n: "Brown" },
                { c: "#8e6f3f", n: "Gold dark" },
                { c: "#c8a867", n: "Gold" },
                { c: "#e0c890", n: "Latte" },
                { c: "#e8dcb8", n: "Sand" },
                { c: "#f4ead4", n: "Cream paper" },
                { c: "#faf7f1", n: "Ivory" },
              ].map((s) => (
                <div
                  key={s.c}
                  className="aspect-square rounded border border-[#1c1814]/10"
                  style={{ background: s.c }}
                  title={`${s.n} ${s.c}`}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#8e6f3f] mb-3">
              Typografie
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <span
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontStyle: "italic",
                  }}
                >
                  Fraunces italic
                </span>{" "}
                — značka, nadpisy
              </li>
              <li>
                <span style={{ fontFamily: "var(--font-sans)" }}>Inter</span> —
                body text, UI
              </li>
              <li className="text-[#1c1814]/60 mt-3 text-xs">
                Logo má vlastní ručně-psaný script v JPG; Fraunces italic
                v nadpisech webu na něj plynule navazuje.
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
                  <span className="absolute top-4 right-4 z-10 bg-[#5a3825] text-[#f4ead4] text-[10px] tracking-widest uppercase px-3 py-1 rounded-full font-medium">
                    Favorit
                  </span>
                )}
                <div
                  className={`${v.naladaClass} aspect-[16/9] flex flex-col items-center justify-center relative overflow-hidden gap-2`}
                >
                  <span style={{ fontSize: 48 }}>☕</span>
                  <span
                    className="text-3xl md:text-4xl font-medium"
                    style={{
                      fontFamily: v.fontVar,
                      fontStyle: "italic",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Libuše Stuňová
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#5a3825]/70">
                    Účetnictví
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
                    <span className="text-xs text-[#1c1814]/60 group-hover:text-[#5a3825] transition">
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
        <span>
          Libuše Stuňová · Účetnictví — interní review návrhů ·{" "}
          {new Date().getFullYear()}
        </span>
        <a href="/api/health" className="hover:text-[#5a3825] transition">
          /api/health
        </a>
      </footer>
    </main>
  );
}
