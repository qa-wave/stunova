import Image from "next/image";
import Link from "next/link";

export default function ImperialVariant() {
  return (
    <div className="variant-imperial min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="px-8 md:px-16 py-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Stunova"
            width={36}
            height={36}
            className="rounded-sm mix-blend-screen"
          />
          <span className="display text-xl tracking-[0.2em] uppercase">
            Stunova
          </span>
        </Link>
        <div className="hidden md:flex gap-10 text-sm tracking-widest uppercase text-[#a89878]">
          <a href="#filozofie" className="hover:text-[#c8a867] transition">
            Filozofie
          </a>
          <a href="#sluzby" className="hover:text-[#c8a867] transition">
            Služby
          </a>
          <a href="#kontakt" className="hover:text-[#c8a867] transition">
            Kontakt
          </a>
        </div>
        <Link
          href="#kontakt"
          className="text-xs tracking-[0.2em] uppercase border border-[#3a3027] hover:border-[#c8a867] hover:text-[#c8a867] px-5 py-3 transition"
        >
          Domluvit hovor
        </Link>
      </nav>

      {/* Hero */}
      <section className="flex-1 flex items-center justify-center px-8 md:px-16 py-20">
        <div className="max-w-4xl text-center">
          <Image
            src="/logo.jpg"
            alt=""
            width={120}
            height={120}
            className="mx-auto mb-12 mix-blend-screen fade-up"
          />
          <p className="fade-up-delay-1 text-xs tracking-[0.4em] uppercase text-[#a89878] mb-8">
            Prémiové poradenství · Praha
          </p>
          <h1 className="fade-up-delay-2 display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
            Síla v rozhodnutí,
            <br />
            <em className="gold-grad">kterému věříš.</em>
          </h1>
          <p className="fade-up-delay-3 text-lg md:text-xl text-[#bcae93] max-w-2xl mx-auto mb-12 font-light">
            Doprovázíme zakladatele a majitele firem v okamžicích, které definují
            další desetiletí. Diskrétně, jasně, do hloubky.
          </p>
          <div className="fade-up-delay-3 flex items-center justify-center gap-6">
            <Link
              href="#kontakt"
              className="bg-[#c8a867] text-[#0e0c0a] px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-[#e0c890] transition"
            >
              Začít rozhovor
            </Link>
            <Link
              href="#filozofie"
              className="text-sm tracking-[0.2em] uppercase text-[#bcae93] hover:text-[#c8a867] transition"
            >
              Naše filozofie →
            </Link>
          </div>
        </div>
      </section>

      <div className="hairline h-px mx-16" />

      {/* Hodnoty */}
      <section id="filozofie" className="px-8 md:px-16 py-32">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase gold mb-6">Tři pilíře</p>
          <h2 className="display text-4xl md:text-5xl mb-20 max-w-3xl">
            Rozhodujeme jako <em>lvi</em> — s rozvahou i s odvahou.
          </h2>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                cislo: "01",
                nadpis: "Diskrétnost",
                text: "Co je probráno mezi námi, zůstane mezi námi. Bez výjimky, bez lhůty.",
              },
              {
                cislo: "02",
                nadpis: "Jasnost",
                text: "Žádný marketing. Říkáme, co vidíme — i když to není snadné slyšet.",
              },
              {
                cislo: "03",
                nadpis: "Hloubka",
                text: "Než ti něco doporučíme, trávíme hodiny pochopením kontextu, ne minuty.",
              },
            ].map((p) => (
              <div key={p.cislo}>
                <div className="display gold text-2xl mb-6">{p.cislo}</div>
                <h3 className="display text-2xl mb-4">{p.nadpis}</h3>
                <p className="text-[#bcae93] font-light leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="kontakt"
        className="px-8 md:px-16 py-32 border-t border-[#2a221a]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="display text-4xl md:text-6xl mb-8">
            Příští rozhovor může být <em className="gold-grad">ten</em>.
          </h2>
          <p className="text-[#bcae93] font-light mb-12 max-w-xl mx-auto">
            První konzultace je nezávazná. Stačí krátký e-mail s tím, co řešíš.
          </p>
          <a
            href="mailto:hello@stunova.cz"
            className="inline-block bg-[#c8a867] text-[#0e0c0a] px-10 py-5 text-sm tracking-[0.2em] uppercase hover:bg-[#e0c890] transition"
          >
            hello@stunova.cz
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 md:px-16 py-10 border-t border-[#2a221a] text-xs tracking-widest uppercase text-[#7a6e58] flex justify-between">
        <span>© Stunova {new Date().getFullYear()}</span>
        <span className="display italic normal-case tracking-normal">
          Variant · Imperial
        </span>
      </footer>
    </div>
  );
}
