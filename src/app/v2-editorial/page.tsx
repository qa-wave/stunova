import Image from "next/image";
import Link from "next/link";

export default function EditorialVariant() {
  return (
    <div className="variant-editorial min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="px-6 md:px-12 py-6 flex items-center justify-between border-b border-[#1c1814]/10">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="Stunova" width={32} height={32} />
          <span className="display text-2xl">Stunova</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm">
          <a href="#issue" className="hover:text-[#8e6f3f] transition">
            Vydání
          </a>
          <a href="#sluzby" className="hover:text-[#8e6f3f] transition">
            Služby
          </a>
          <a href="#kontakt" className="hover:text-[#8e6f3f] transition">
            Kontakt
          </a>
        </div>
        <div className="text-xs uppercase tracking-widest text-[#1c1814]/60">
          № 01 · 2026
        </div>
      </nav>

      {/* Hero — asymmetric editorial layout */}
      <section className="px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-7 md:col-start-1">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8e6f3f] mb-8 fade-up">
            Eseje a názory pro ty, co rozhodují
          </p>
          <h1 className="display fade-up-delay-1 text-7xl md:text-9xl lg:text-[11rem]">
            Stunova
          </h1>
          <h2 className="display fade-up-delay-2 text-4xl md:text-6xl mt-6 italic text-[#8e6f3f]">
            ticho mezi rozhodnutími
          </h2>
        </div>
        <div className="md:col-span-4 md:col-start-9 flex flex-col justify-end gap-6 fade-up-delay-3">
          <Image
            src="/logo.jpg"
            alt=""
            width={220}
            height={220}
            className="self-end"
          />
          <p className="text-base md:text-lg leading-relaxed">
            Když rozhoduješ o směru, na kterém závisí desítky lidí, potřebuješ
            někoho, kdo umí mlčet, ptát se a vidět to, co tobě uniká.
          </p>
          <Link
            href="#kontakt"
            className="inline-block self-start text-sm uppercase tracking-widest border-b border-[#1c1814] pb-1 hover:text-[#8e6f3f] hover:border-[#8e6f3f] transition"
          >
            Domluvit setkání →
          </Link>
        </div>
      </section>

      {/* Pull quote */}
      <section className="px-6 md:px-12 py-24 border-y border-[#1c1814]/10">
        <blockquote className="display max-w-5xl mx-auto text-3xl md:text-5xl italic text-center leading-tight">
          „Lev neřve, aby ho slyšeli. Řve, protože musí.“
          <footer className="mt-8 text-sm not-italic font-sans uppercase tracking-widest text-[#1c1814]/60">
            — interní motto, Stunova
          </footer>
        </blockquote>
      </section>

      {/* Sluzby — magazine grid */}
      <section id="sluzby" className="px-6 md:px-12 py-24">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <p className="md:col-span-3 text-xs uppercase tracking-[0.3em] text-[#8e6f3f]">
            Co děláme
          </p>
          <h2 className="md:col-span-9 display text-4xl md:text-6xl">
            Tři přístupy, jeden záměr — že po našem rozhovoru vidíš dál.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {[
            {
              cislo: "I",
              nadpis: "Strategická konzultace",
              text: "Jednorázová hloubková reflexe nad rozhodnutím, které tě tíží.",
              detail: "1 den · diskrétně",
            },
            {
              cislo: "II",
              nadpis: "Doprovod růstem",
              text: "Pravidelná setkání během fáze, ve které se firma mění rychleji než ty.",
              detail: "6–12 měsíců",
            },
            {
              cislo: "III",
              nadpis: "Krizová pomoc",
              text: "Když se věci sypou rychleji, než stíháš dýchat. Stojíme vedle.",
              detail: "okamžitě",
            },
          ].map((s) => (
            <article key={s.cislo} className="border-t border-[#1c1814] pt-6">
              <p className="display italic text-3xl gold mb-4">{s.cislo}</p>
              <h3 className="display text-3xl mb-4">{s.nadpis}</h3>
              <p className="leading-relaxed mb-6">{s.text}</p>
              <p className="text-xs uppercase tracking-widest text-[#1c1814]/50">
                {s.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="kontakt"
        className="px-6 md:px-12 py-24 bg-[#1c1814] text-[#faf7f1]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c8a867] mb-6">
            Příští krok
          </p>
          <h2 className="display text-5xl md:text-7xl mb-8">
            Napiš krátce, co řešíš.
          </h2>
          <p className="text-lg mb-12 text-[#bcae93] max-w-xl mx-auto">
            Odpovíme do 24 hodin a nabídneme termín, který se hodí oběma stranám.
          </p>
          <a
            href="mailto:hello@stunova.cz"
            className="display italic text-3xl md:text-4xl text-[#c8a867] underline underline-offset-8 hover:text-[#e0c890] transition"
          >
            hello@stunova.cz
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 flex justify-between items-center text-xs uppercase tracking-widest text-[#1c1814]/60">
        <span>Stunova © {new Date().getFullYear()}</span>
        <span className="display italic normal-case tracking-normal text-base">
          Variant · Editorial
        </span>
      </footer>
    </div>
  );
}
