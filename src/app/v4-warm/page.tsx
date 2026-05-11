import type { Metadata } from "next";
import Link from "next/link";
import { Logo, LogoHero } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Účetnictví pro malé firmy",
  description:
    "Účetní jako parťák, ne jen servis ke konci roku. Praha 4. Domluvíme si kafíčko.",
  openGraph: {
    title: "Libuše Stuňová · Účetnictví pro malé firmy",
    description:
      "Účetní jako parťák, ne jen servis ke konci roku. Praha 4.",
  },
};

export default function WarmVariant() {
  return (
    <div className="variant-warm min-h-screen flex flex-col">
      {/* Nav */}
      <nav aria-label="Hlavní navigace" className="px-6 md:px-12 py-6 flex items-center justify-between">
        <Link href="/">
          <Logo size="md" />
        </Link>
        <div className="hidden md:flex items-center gap-2 bg-[var(--card-bg)]/60 backdrop-blur-md border border-[var(--gold)]/20 rounded-full px-2 py-1.5 shadow-sm">
          {[
            ["Služby", "#sluzby"],
            ["Jak to chodí", "#proces"],
            ["O mně", "#o-mne"],
            ["Kontakt", "#kontakt"],
          ].map(([t, h]) => (
            <a
              key={h}
              href={h}
              className="px-4 py-1.5 text-sm rounded-full hover:bg-[var(--card-bg)] transition"
            >
              {t}
            </a>
          ))}
        </div>
        <Link href="#kontakt" className="btn-gold">
          Pojďme na kafe →
        </Link>
      </nav>

      {/* Hero */}
      <section className="flex-1 px-6 md:px-12 py-16 md:py-20 scroll-mt-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[var(--card-bg)]/70 backdrop-blur-sm border border-[var(--gold)]/20 rounded-full px-4 py-2 mb-8">
              <span className="pulse-dot" />
              <span className="text-xs tracking-wide">
                Beru nové klienty od ledna 2026
              </span>
            </div>
            <h1 className="display text-5xl md:text-7xl leading-[1.05] mb-8">
              Účetnictví,
              <br />
              <span className="gold-grad">co tě nestresuje.</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--ink-soft)] leading-relaxed mb-10 max-w-xl">
              Pro malé firmy a OSVČ, kterým nevyhovuje, když je účetní vidí
              jen jednou ročně. Sednem si nad kávou, projdem si to spolu
              a celý rok víš, jak na tom jsi.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#kontakt" className="btn-gold">
                Domluvíme si kafíčko
              </Link>
              <Link href="#sluzby" className="btn-soft">
                Co všechno řeším
              </Link>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute inset-0 -m-8 rounded-[3rem] blur-3xl opacity-50 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, var(--gold) 0%, transparent 70%)",
              }}
            />
            <div className="relative card-warm p-10 rounded-[2.5rem]">
              <div className="flex justify-center">
                <LogoHero width={300} />
              </div>
              <div className="mt-8 pt-8 border-t border-[var(--gold)]/20 grid grid-cols-3 text-center gap-4">
                {[
                  { c: "14+", l: "let praxe" },
                  { c: "62", l: "spokojených klientů" },
                  { c: "0", l: "stresu navíc" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="display text-3xl gold-grad">{s.c}</p>
                    <p className="text-xs text-[var(--ink-soft)] mt-1">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Služby */}
      <section id="sluzby" className="px-6 md:px-12 py-24 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium gold-grad mb-4 tracking-wide">
              S ČÍM POMŮŽU
            </p>
            <h2 className="display text-4xl md:text-6xl">
              Tvoje papíry, <em>moje starost</em>.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: "📊",
                t: "Vedení účetnictví",
                d: "Měsíční zpracování účetnictví od A do Z. Daně, výkazy, kontrolní hlášení — bez toho, abys o tom musel přemýšlet.",
                cena: "od 4 000 Kč / měs.",
              },
              {
                emoji: "📝",
                t: "Daňová evidence",
                d: "Pro OSVČ co preferují jednoduchost. Kompletní evidence, daňové přiznání, přehledy pro tebe.",
                cena: "od 2 500 Kč / měs.",
              },
              {
                emoji: "🧾",
                t: "Mzdy a personalistika",
                d: "Mzdy, výplatní pásky, evidence zaměstnanců, ELDP. Celé to za tebe vyřídím a vysvětlím.",
                cena: "od 350 Kč / zam.",
              },
            ].map((s) => (
              <div key={s.t} className="card-warm p-8">
                <div className="text-4xl mb-6">{s.emoji}</div>
                <h3 className="display text-2xl mb-3">{s.t}</h3>
                <p className="text-[var(--ink-soft)] leading-relaxed mb-6">
                  {s.d}
                </p>
                <p className="text-sm gold-grad font-medium">{s.cena}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jak to chodí */}
      <section id="proces" className="px-6 md:px-12 py-24 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium gold-grad mb-4 tracking-wide">
              JAK TO CHODÍ
            </p>
            <h2 className="display text-4xl md:text-5xl">
              Začínáme <em>vždycky kafem</em>.
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                n: "01",
                t: "Kafíčko",
                d: "Sejdeme se v Praze 4 nebo online. Půl hoďky, zdarma. Řekneš mi, co máš, já ti řeknu, co s tím.",
              },
              {
                n: "02",
                t: "Nastavení",
                d: "Pošleš mi pár dokladů, podepíšeme si plnou moc, převezmu to po tvém starém účetním (i s problémy).",
              },
              {
                n: "03",
                t: "Měsíční rytmus",
                d: "Posíláš mi doklady (e-mail, fotka, klidně Whatsapp). Já zpracuju, ty schvaluješ, hotovo.",
              },
              {
                n: "04",
                t: "Klid",
                d: "Žádné překvapení v březnu. Vždycky vidíš, jak na tom jsi a co tě čeká za kvartál.",
              },
            ].map((p) => (
              <div key={p.n} className="relative">
                <div className="display text-5xl gold-grad mb-3">{p.n}</div>
                <h3 className="display text-xl mb-2">{p.t}</h3>
                <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O mně */}
      <section id="o-mne" className="px-6 md:px-12 py-24 scroll-mt-24">
        <div className="max-w-4xl mx-auto card-warm p-12 md:p-16 rounded-[2.5rem]">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-1">
              <div
                className="aspect-square rounded-3xl flex items-center justify-center text-5xl"
                style={{
                  background:
                    "linear-gradient(135deg, var(--cream) 0%, var(--sand) 100%)",
                }}
              >
                ☕
              </div>
              <p className="text-xs uppercase tracking-widest text-[var(--gold-dark)] mt-4 text-center">
                Libuše Stuňová
              </p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm font-medium gold-grad mb-4 tracking-wide">
                AHOJ, JSEM LIBUŠE
              </p>
              <h2 className="display text-3xl md:text-4xl mb-6">
                Účetní, která vysvětluje<br />
                <em>i třikrát</em>, dokud nedává smysl.
              </h2>
              <p className="text-[var(--ink-soft)] leading-relaxed mb-4">
                Účetnictví dělám 14 let — z toho 9 sama pro malé firmy a OSVČ.
                Vystudovala jsem VŠE, mám platnou daňovou licenci a každý rok
                aspoň 40 hodin školení, aby mi neuteklo, co stát zase změnil.
              </p>
              <p className="text-[var(--ink-soft)] leading-relaxed">
                Co mě baví: když po pár měsících klient přestane stresovat
                z papírů a začne přemýšlet o tom, co fakt umí. To je smysl
                téhle práce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="px-6 md:px-12 py-24 scroll-mt-24">
        <div
          className="max-w-4xl mx-auto rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, var(--ink) 0%, oklch(0.35 0.04 55) 50%, var(--gold-dark) 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, var(--gold) 0%, transparent 50%)",
            }}
          />
          <div className="relative">
            <div className="text-5xl mb-6">☕</div>
            <h2 className="display text-4xl md:text-6xl mb-6 text-[var(--cream)]">
              Tak co, dáme to kafíčko?
            </h2>
            <p className="text-lg text-[var(--gold-light)] mb-10 max-w-xl mx-auto">
              Půl hoďky, online nebo v Praze 4, zdarma. Bez závazku.
              Když si nepadnem do oka, doporučím ti někoho jiného.
            </p>
            <a
              href="mailto:libuse@stunova.cz"
              className="inline-block bg-[var(--gold)] text-[var(--ink)] rounded-full px-10 py-5 font-medium shadow-2xl hover:bg-[var(--gold-light)] transition"
            >
              libuse@stunova.cz
            </a>
            <p className="text-xs text-[var(--sand)] mt-6">
              nebo zavolej · +420 728 ••• ••• · po-pá 9–17
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-[var(--ink-soft)]">
        <span>© Libuše Stuňová · Účetnictví · {new Date().getFullYear()}</span>
        <span className="display">Variant · Warm</span>
      </footer>
    </div>
  );
}
