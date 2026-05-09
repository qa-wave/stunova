import Image from "next/image";
import Link from "next/link";

export default function AuroraVariant() {
  return (
    <div className="variant-aurora min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="px-6 md:px-10 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Stunova"
            width={36}
            height={36}
            className="rounded-lg mix-blend-screen"
          />
          <span className="font-medium tracking-tight text-lg">Stunova</span>
        </Link>
        <div className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5">
          {["Práce", "Přístup", "Tým", "Kontakt"].map((t) => (
            <a
              key={t}
              href={`#${t.toLowerCase()}`}
              className="px-4 py-1.5 text-sm rounded-full hover:bg-white/10 transition"
            >
              {t}
            </a>
          ))}
        </div>
        <Link
          href="#kontakt"
          className="rounded-full bg-[#c8a867] text-[#0b0a09] px-5 py-2.5 text-sm font-medium hover:bg-[#e0c890] transition"
        >
          Začít
        </Link>
      </nav>

      {/* Hero */}
      <section className="flex-1 px-6 md:px-10 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-10 fade-up">
            <span className="size-1.5 rounded-full bg-[#c8a867]" />
            <span className="text-xs tracking-wider text-[#bcae93]">
              Bereme nové klienty na Q3 · max. 4 firmy
            </span>
          </div>
          <h1 className="fade-up-delay-1 text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.02] mb-8">
            Strategická jasnost,
            <br />
            <span className="gold-grad">ne další PowerPoint.</span>
          </h1>
          <p className="fade-up-delay-2 text-lg md:text-xl text-[#bcae93] max-w-2xl mx-auto mb-12 leading-relaxed">
            Pomáháme zakladatelům udělat tři rozhodnutí, která za rok určují, jak
            firma vypadá za pět let. V&nbsp;klidu, do hloubky, beze stopy.
          </p>
          <div className="fade-up-delay-3 flex flex-wrap justify-center gap-3">
            <Link
              href="#kontakt"
              className="rounded-full bg-[#c8a867] text-[#0b0a09] px-7 py-4 font-medium hover:bg-[#e0c890] transition"
            >
              Domluvit hovor →
            </Link>
            <Link
              href="#pristup"
              className="glass rounded-full px-7 py-4 hover:bg-white/8 transition"
            >
              Jak pracujeme
            </Link>
          </div>

          {/* Stats row */}
          <div className="fade-up-delay-3 mt-20 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { c: "47", l: "klientů od 2018" },
              { c: "94%", l: "se vrací do 12 měsíců" },
              { c: "3", l: "max. souběžných projektů" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-6">
                <p className="text-4xl md:text-5xl gold-grad font-medium tracking-tight">
                  {s.c}
                </p>
                <p className="text-xs md:text-sm text-[#bcae93] mt-2">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Přístup */}
      <section id="pristup" className="px-6 md:px-10 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c8a867] mb-6 text-center">
            Jak to funguje
          </p>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-center mb-20 max-w-3xl mx-auto">
            Tři týdny, čtyři rozhovory, jedno zacílení.
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                tyden: "Týden 1",
                nadpis: "Mapa terénu",
                text: "Tři hluboké rozhovory s tebou a dvěma lidmi z tvého okolí. Cíl: pochopit, kde stojíš, ne kam míříš.",
              },
              {
                tyden: "Týden 2",
                nadpis: "Hypotézy",
                text: "Sepíšeme tři verze toho, co se v tvé firmě skutečně děje. Vybereš tu, která tě nejvíc nepříjemně zaujme.",
              },
              {
                tyden: "Týden 3",
                nadpis: "Tři kroky",
                text: "Konkrétní rozhodnutí, na kterých se závazně shodneme. Plus jeden, co můžeš odložit, ale nesmíš ignorovat.",
              },
            ].map((p) => (
              <div
                key={p.tyden}
                className="glass rounded-2xl p-8 hover:border-[#c8a867]/40 transition"
              >
                <p className="text-xs tracking-widest uppercase text-[#c8a867] mb-4">
                  {p.tyden}
                </p>
                <h3 className="text-2xl font-medium mb-3">{p.nadpis}</h3>
                <p className="text-[#bcae93] leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="px-6 md:px-10 py-24">
        <div className="max-w-3xl mx-auto glass rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            První rozhovor je{" "}
            <span className="gold-grad">na nás</span>.
          </h2>
          <p className="text-[#bcae93] mb-10 max-w-md mx-auto leading-relaxed">
            30 minut, bez prezentací, bez závazku. Buď si padneme do oka, nebo
            ti doporučíme někoho lepšího.
          </p>
          <a
            href="mailto:hello@stunova.cz"
            className="inline-block bg-[#c8a867] text-[#0b0a09] rounded-full px-10 py-5 font-medium hover:bg-[#e0c890] transition"
          >
            hello@stunova.cz
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-10 py-8 flex justify-between items-center text-xs tracking-wider text-[#7a6e58] border-t border-white/5">
        <span>© Stunova {new Date().getFullYear()}</span>
        <span>Variant · Aurora</span>
      </footer>
    </div>
  );
}
