import Image from "next/image";
import Link from "next/link";

export default function BrutalistVariant() {
  return (
    <div className="variant-brutalist min-h-screen flex flex-col">
      {/* Nav — full-width band */}
      <nav className="border-b-2 border-black px-6 md:px-10 py-5 flex items-center justify-between bg-white sticky top-0 z-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="border-thick border-2 p-1">
            <Image src="/logo.jpg" alt="Stunova" width={28} height={28} />
          </div>
          <span className="display text-xl">STUNOVA</span>
        </Link>
        <div className="hidden md:flex items-stretch border-thick border-2">
          {["MANIFEST", "PRÁCE", "KONTAKT"].map((t, i) => (
            <a
              key={t}
              href={`#${t.toLowerCase()}`}
              className={`px-5 py-2 text-xs tracking-widest hover:bg-black hover:text-white transition ${
                i < 2 ? "border-r-2 border-black" : ""
              }`}
            >
              {t}
            </a>
          ))}
        </div>
        <a
          href="#kontakt"
          className="gold-block px-5 py-3 text-xs tracking-widest border-thick border-2 hover:bg-black hover:text-[#c8a867] transition"
        >
          DOMLUVIT →
        </a>
      </nav>

      {/* Hero — type that breaks out */}
      <section className="px-6 md:px-10 py-12 md:py-20 grid md:grid-cols-12 gap-6">
        <div className="md:col-span-12">
          <p className="text-xs tracking-[0.3em] mb-6 fade-up">
            EST. 2026 / PRAGUE / CZ
          </p>
          <h1
            className="display fade-up-delay-1 text-[20vw] md:text-[16vw] leading-[0.82]"
            aria-label="Síla bez pózy"
          >
            SÍLA<br />
            <span className="gold-block inline-block px-4">BEZ</span>{" "}
            PÓZY.
          </h1>
        </div>

        <div className="md:col-span-7 md:col-start-1 mt-12 fade-up-delay-2">
          <p className="text-xl md:text-2xl leading-snug max-w-2xl">
            Poradenství pro lidi, kteří nemají čas na fluff. Tvrdá data, jasná
            doporučení, žádné powerpointy s hradem na první straně.
          </p>
        </div>

        <div className="md:col-span-4 md:col-start-9 mt-12 flex items-end fade-up-delay-3">
          <div className="border-thick border-2 p-6 w-full">
            <Image src="/logo.jpg" alt="" width={180} height={180} />
            <div className="mt-6 pt-4 border-t-2 border-black">
              <p className="text-xs tracking-widest mb-2">SHIPPED</p>
              <p className="display text-5xl">142</p>
              <p className="text-xs mt-2">strategických rozhodnutí · 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Manifest — list */}
      <section id="manifest" className="border-t-2 border-black">
        <div className="px-6 md:px-10 py-8 border-b-2 border-black flex justify-between items-baseline">
          <h2 className="display text-3xl md:text-5xl">MANIFEST</h2>
          <p className="text-xs tracking-widest">/ 04 PRAVIDEL</p>
        </div>
        {[
          {
            n: "01",
            t: "ŽÁDNÉ KECY",
            d: "Když nemáme co říct, neříkáme nic. Když máme, řekneme to bez obalu.",
          },
          {
            n: "02",
            t: "TVRDÁ DATA",
            d: "Každé doporučení stojí na číslech. Ne na pocitu. Ne na zkušenostech jiného klienta.",
          },
          {
            n: "03",
            t: "JEDEN PROJEKT",
            d: "Každý partner má v daný moment max. tři klienty. Jinak to není poradenství, ale výmluva.",
          },
          {
            n: "04",
            t: "ODCHOD VČAS",
            d: "Po šesti měsících nás nepotřebuješ. To je cíl, ne riziko.",
          },
        ].map((m) => (
          <div
            key={m.n}
            className="grid md:grid-cols-12 gap-4 px-6 md:px-10 py-10 border-b-2 border-black hover:bg-black hover:text-white transition group"
          >
            <p className="md:col-span-1 display text-3xl group-hover:text-[#c8a867]">
              {m.n}
            </p>
            <h3 className="md:col-span-4 display text-2xl md:text-3xl">{m.t}</h3>
            <p className="md:col-span-7 text-lg leading-snug">{m.d}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section id="kontakt" className="px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-12 gap-6 items-end">
          <h2 className="display md:col-span-7 text-6xl md:text-8xl leading-[0.85]">
            CHCEŠ
            <br />
            PRACOVAT?
          </h2>
          <div className="md:col-span-5 border-thick border-2 p-8">
            <p className="text-xs tracking-widest mb-4">NAPIŠ NÁM</p>
            <a
              href="mailto:hello@stunova.cz"
              className="display text-2xl md:text-3xl block break-all hover:bg-[#c8a867] transition"
            >
              hello@stunova.cz
            </a>
            <p className="mt-6 text-xs tracking-widest">
              ODPOVÍDÁME DO 24 HODIN. POKUD NE, NEBYLO TO PRO NÁS.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-black px-6 md:px-10 py-6 flex justify-between items-center text-xs tracking-widest">
        <span>STUNOVA © {new Date().getFullYear()}</span>
        <span className="gold-block px-3 py-1">VARIANT · BRUTALIST</span>
      </footer>
    </div>
  );
}
