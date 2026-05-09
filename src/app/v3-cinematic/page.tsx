import Image from "next/image";
import Link from "next/link";

export default function CinematicVariant() {
  return (
    <div className="variant-cinematic min-h-screen flex flex-col">
      {/* Hero — full viewport stage */}
      <section className="stage relative min-h-screen flex flex-col vignette">
        <nav className="px-6 md:px-12 py-6 flex items-center justify-between relative z-10">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Stunova"
              width={36}
              height={36}
              className="rounded-md mix-blend-screen"
            />
            <span className="display text-2xl tracking-tight">Stunova</span>
          </Link>
          <div className="hidden md:flex gap-8 text-xs tracking-[0.25em] uppercase text-[#bcae93]">
            <a href="#cesta" className="hover:text-[#c8a867] transition">
              Cesta
            </a>
            <a href="#manifest" className="hover:text-[#c8a867] transition">
              Manifest
            </a>
            <a href="#kontakt" className="hover:text-[#c8a867] transition">
              Kontakt
            </a>
          </div>
          <Link
            href="#kontakt"
            className="text-xs tracking-[0.25em] uppercase border-b border-[#c8a867] pb-1 text-[#c8a867] hover:text-[#e0c890] transition"
          >
            Začít
          </Link>
        </nav>

        <div className="flex-1 flex items-center justify-center px-6 md:px-12 relative z-10">
          <div className="max-w-5xl text-center">
            <p className="text-xs tracking-[0.5em] uppercase text-[#c8a867] mb-12 fade-up">
              MMXXVI · Praha
            </p>
            <h1 className="display fade-up-delay-1 text-6xl md:text-8xl lg:text-[10rem] mb-12">
              Některá rozhodnutí
              <br />
              <em className="gold">nelze udělat</em> sám.
            </h1>
            <p className="fade-up-delay-2 text-lg md:text-xl text-[#bcae93] max-w-2xl mx-auto mb-12 leading-relaxed">
              Tři lidé. Pět klientů ročně. Jedna otázka, na kterou s tebou
              hledáme odpověď tak dlouho, dokud se neukáže.
            </p>
            <div className="fade-up-delay-3 flex items-center justify-center gap-6 flex-wrap">
              <Link
                href="#cesta"
                className="display text-xl gold border-b border-[#c8a867] pb-1 hover:text-[#e0c890] hover:border-[#e0c890] transition"
              >
                ↓ pokračuj
              </Link>
            </div>
          </div>
        </div>

        <div className="px-6 md:px-12 py-6 flex justify-between items-center text-xs tracking-[0.25em] uppercase text-[#7a6e58] relative z-10">
          <span>Nezávislé poradenství od 2018</span>
          <span>Praha · Wien · Brno</span>
        </div>
      </section>

      {/* Cesta — split layout */}
      <section
        id="cesta"
        className="px-6 md:px-12 py-32 grid md:grid-cols-2 gap-12 md:gap-20 max-w-7xl mx-auto"
      >
        <div className="md:sticky md:top-32 self-start">
          <p className="text-xs tracking-[0.4em] uppercase gold mb-6">Akt I</p>
          <h2 className="display text-5xl md:text-7xl mb-8">
            Cesta není <em className="gold">přímá</em>.
          </h2>
          <p className="text-[#bcae93] text-lg leading-relaxed">
            Když nás potkáš poprvé, pravděpodobně víš, že je něco třeba.
            Nevíš ale ještě co. To je v pořádku. Tak to začíná u všech.
          </p>
        </div>

        <ol className="space-y-12">
          {[
            {
              akt: "I.",
              t: "Tichý vstup",
              d: "Přijdeme za tebou. Ne do tvojí kanceláře — do hospody, kterou máš rád. Nepíšeme si poznámky, jen nasloucháme.",
            },
            {
              akt: "II.",
              t: "Mlčení s daty",
              d: "Tři týdny pracujeme bez tebe. Mluvíme s tvými lidmi, čteme tvoje čísla, díváme se na to, co tobě uniká.",
            },
            {
              akt: "III.",
              t: "Zrcadlo",
              d: "Jednu dlouhou večeři, ve dvou. Položíme ti tři otázky, na které jsme přišli. Někdy to bolí. Vždy to pomáhá.",
            },
            {
              akt: "IV.",
              t: "Krok",
              d: "Konkrétní rozhodnutí, které z těch otázek vyplývá. Ne plán. Ne strategie. Krok, který uděláš v pondělí.",
            },
          ].map((act) => (
            <li key={act.akt} className="border-l-2 border-[#c8a867]/30 pl-8">
              <p className="display gold text-3xl mb-3 italic">{act.akt}</p>
              <h3 className="display text-3xl md:text-4xl mb-4">{act.t}</h3>
              <p className="text-[#bcae93] leading-relaxed">{act.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Manifest — wide quote */}
      <section
        id="manifest"
        className="stage px-6 md:px-12 py-32 relative vignette"
      >
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="text-xs tracking-[0.5em] uppercase gold mb-12">
            Akt II — Manifest
          </p>
          <blockquote className="display text-3xl md:text-5xl lg:text-6xl leading-tight mb-12">
            „Lev neřve, aby ho slyšeli.
            <br />
            <em className="gold">Řve, protože musí.</em>"
          </blockquote>
          <div className="grid md:grid-cols-3 gap-12 mt-20 text-left">
            {[
              {
                t: "Diskrétní",
                d: "Co je mezi námi, zůstane mezi námi. Bez výjimky, bez statutu omezeného.",
              },
              {
                t: "Pomalí",
                d: "Tři měsíce minimum. Žádný klient si nás nemůže koupit na hodinu.",
              },
              {
                t: "Konkrétní",
                d: "Z každého projektu vychází jedna stránka. Tu si přečteš sám sobě nahlas.",
              },
            ].map((p) => (
              <div key={p.t}>
                <h3 className="display text-3xl gold mb-4">{p.t}</h3>
                <p className="text-[#bcae93] leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="px-6 md:px-12 py-32 relative">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.5em] uppercase gold mb-8">
            Akt III — Setkání
          </p>
          <h2 className="display text-5xl md:text-7xl mb-10">
            Stačí <em className="gold">jedna věta</em>.
          </h2>
          <p className="text-[#bcae93] mb-12 max-w-xl mx-auto leading-relaxed">
            Napiš nám, co řešíš. Bez prezentací, bez kontextu. Stačí věta nebo
            dvě. Odpovídáme do 24 hodin, vždy osobně.
          </p>
          <a
            href="mailto:hello@stunova.cz"
            className="display text-3xl md:text-5xl gold border-b border-[#c8a867] pb-2 hover:text-[#e0c890] hover:border-[#e0c890] transition"
          >
            hello@stunova.cz
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 flex justify-between items-center text-xs tracking-[0.25em] uppercase text-[#5a4a32] border-t border-[#c8a867]/10">
        <span>Stunova · {new Date().getFullYear()}</span>
        <span className="display normal-case tracking-normal italic text-base text-[#bcae93]">
          Variant · Cinematic
        </span>
      </footer>
    </div>
  );
}
