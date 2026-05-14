import type { Metadata } from "next";
import Link from "next/link";
import { Logo, LogoHero } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Účetnictví pro malé firmy · Galerie",
  description:
    "Účetní jako parťák, ne jen servis ke konci roku. Praha 4. Domluvíme si kafíčko.",
  openGraph: {
    title: "Libuše Stuňová · Účetnictví pro malé firmy",
    description:
      "Účetní jako parťák, ne jen servis ke konci roku. Praha 4.",
  },
};

export default function GalerieVariant() {
  return (
    <div className="variant-galerie min-h-screen flex flex-col">
      {/* Nav */}
      <nav
        aria-label="Hlavní navigace"
        className="px-6 md:px-12 py-8 flex items-center justify-between"
      >
        <Link href="/">
          <Logo size="sm" />
        </Link>
        <div className="hidden md:flex gap-10 label">
          <a href="#sluzby" className="hover:text-[var(--ink)] transition">
            Služby
          </a>
          <a href="#proces" className="hover:text-[var(--ink)] transition">
            Jak to chodí
          </a>
          <a href="#kontakt" className="hover:text-[var(--ink)] transition">
            Kontakt
          </a>
        </div>
        <Link
          href="#kontakt"
          className="text-sm border-b border-[var(--ink-soft)] pb-0.5 hover:text-[var(--gold-dark)] hover:border-[var(--gold-dark)] transition"
        >
          Domluvíme si kafíčko
        </Link>
      </nav>

      {/* Hero */}
      <section className="px-6 md:px-12 pt-12 md:pt-20 pb-24 md:pb-32 flex-1 flex flex-col items-center justify-center">
        <p className="label mb-12">
          <span className="dot mr-3" />
          Praha 4 · Beru klienty od ledna 2026
        </p>

        <div className="relative">
          <LogoHero width={460} />
          <div
            className="absolute -inset-x-20 -inset-y-12 -z-10 opacity-30 blur-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, var(--cream) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="mt-16 max-w-2xl text-center">
          <div className="hairline mb-8 mx-auto max-w-32" />
          <p className="display text-2xl md:text-4xl leading-tight font-light">
            Účetnictví pro lidi, co chtějí
            <br />
            <em>vědět, jak na tom jsou</em>.
          </p>
          <p className="text-sm text-[var(--ink-soft)] mt-6 max-w-md mx-auto leading-relaxed">
            Pro malé firmy a OSVČ, kterým nestačí, když je účetní vidí jednou
            ročně. Sednem si nad kafem, projdem si to spolu, a celý rok víš,
            kde stojíš.
          </p>
        </div>
      </section>

      <div className="hairline mx-12 mb-32 md:mb-40" />

      {/* Služby */}
      <section id="sluzby" className="px-6 md:px-12 mb-32 md:mb-40 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <p className="label mb-16 text-center">
            <span className="dot mr-3" />S čím pomůžu
          </p>
          <h2 className="display text-4xl md:text-6xl font-light text-center leading-[1.1] mb-20">
            Tvoje papíry, <em className="gold">moje starost</em>.
            <br />
            Žádné překvapení v&nbsp;březnu.
          </h2>

          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {[
              {
                t: "Účetnictví",
                p: "Měsíční zpracování od A do Z. Daně, výkazy, kontrolní hlášení.",
                cena: "od 4 000 Kč/měs",
              },
              {
                t: "Daňová evidence",
                p: "Pro OSVČ, co preferují jednoduchost. Včetně daňového přiznání.",
                cena: "od 2 500 Kč/měs",
              },
              {
                t: "Mzdy",
                p: "Mzdy, výplatní pásky, evidence zaměstnanců, ELDP.",
                cena: "od 350 Kč/zam.",
              },
            ].map((p) => (
              <div key={p.t} className="text-center">
                <h3 className="display text-2xl mb-4 font-light">{p.t}</h3>
                <div className="hairline mb-4 mx-auto max-w-12" />
                <p className="text-sm text-[var(--ink-soft)] leading-relaxed mb-4">
                  {p.p}
                </p>
                <p className="label gold">{p.cena}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jak to chodí — alternating layout */}
      <section id="proces" className="px-6 md:px-12 mb-32 md:mb-40 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline justify-between mb-20">
            <p className="label">
              <span className="dot mr-3" />
              Jak to chodí
            </p>
            <p className="label">Začínáme vždycky kafem</p>
          </div>

          <div className="space-y-24 md:space-y-32">
            {[
              {
                cislo: "№ 01",
                t: "Kafíčko",
                p: "Sejdeme se v Praze 4 nebo online. Půl hoďky, zdarma. Řekneš mi, co máš, já ti řeknu, co s tím. Žádný závazek — když si nepadnem do oka, doporučím ti někoho jiného.",
                reverse: false,
              },
              {
                cislo: "№ 02",
                t: "Nastavení",
                p: "Pošleš mi pár dokladů, podepíšeme si plnou moc, převezmu agendu po tvém starém účetním. I s případnými problémy — už jsem viděla všechno.",
                reverse: true,
              },
              {
                cislo: "№ 03",
                t: "Měsíční rytmus",
                p: "Posíláš mi doklady jak ti to vyhovuje — e-mail, fotka, sken, klidně i WhatsApp. Já zpracuju, ty schvaluješ, hotovo. Plus jednou za kvartál si dáme kafíčko nad reportem.",
                reverse: false,
              },
              {
                cislo: "№ 04",
                t: "Klid",
                p: "Žádné překvapení v březnu. Vždycky vidíš, jak na tom jsi, kolik tě čeká za kvartál a jestli máš na něco udělat krok navíc — nebo si naopak něco dovolit.",
                reverse: true,
              },
            ].map((e) => (
              <article
                key={e.cislo}
                className={`flex flex-col md:flex-row gap-8 ${
                  e.reverse ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/3">
                  <p className="display text-6xl gold font-light mb-2">
                    {e.cislo}
                  </p>
                  <p className="label">{e.t}</p>
                </div>
                <div className="md:w-7/12">
                  <h3 className="display text-3xl md:text-4xl font-light mb-6 leading-tight">
                    {e.t}
                  </h3>
                  <div className="hairline mb-6 max-w-16" />
                  <p className="text-[var(--ink-soft)] leading-relaxed">
                    {e.p}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="hairline mx-12 mb-24" />

      {/* CTA */}
      <section id="kontakt" className="px-6 md:px-12 pb-24 scroll-mt-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="label mb-8">
            <span className="dot mr-3" />
            Beru klienty od ledna 2026
          </p>
          <div className="text-5xl mb-8">☕</div>
          <h2 className="display text-4xl md:text-6xl font-light leading-tight mb-10">
            Napiš a <em className="gold">domluvíme si kafíčko</em>.
            <br />
            Odpovím do 24 hodin.
          </h2>
          <a
            href="mailto:libuse@stunova.cz"
            className="display text-2xl md:text-3xl gold border-b border-[var(--gold)] pb-1 hover:text-[var(--ink)] transition"
          >
            libuse@stunova.cz
          </a>
          <p className="label mt-8">
            nebo +420 728 ••• ••• · po-pá 9–17
          </p>
        </div>
      </section>

      <footer className="px-6 md:px-12 py-10 border-t border-[var(--ink)]/10 flex flex-col sm:flex-row justify-between items-center gap-2 label">
        <span>
          © Libuše Stuňová · Účetnictví · {new Date().getFullYear()}
        </span>
        <span>Variant · Galerie</span>
      </footer>
    </div>
  );
}
