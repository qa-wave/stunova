import Image from "next/image";
import Link from "next/link";

export default function AtelierVariant() {
  return (
    <div className="variant-atelier min-h-screen flex flex-col">
      {/* Nav — hairline */}
      <nav className="px-6 md:px-12 py-6 grid grid-cols-12 items-center border-b hairline border-current">
        <Link href="/" className="col-span-3 flex items-center gap-3">
          <Image src="/logo.jpg" alt="Stunova" width={28} height={28} />
          <span className="font-medium tracking-tight">Stunova</span>
        </Link>
        <div className="col-span-6 flex justify-center gap-8 text-sm">
          {["Práce", "Přístup", "Tým", "Kontakt"].map((t) => (
            <a key={t} href={`#${t.toLowerCase()}`} className="hover:text-[#8e6f3f] transition">
              {t}
            </a>
          ))}
        </div>
        <div className="col-span-3 flex justify-end items-center gap-6">
          <span className="label">Praha · Wien</span>
          <Link
            href="#kontakt"
            className="text-sm border-b border-[#0e0c0a] pb-0.5 hover:text-[#8e6f3f] hover:border-[#8e6f3f] transition"
          >
            Domluvit
          </Link>
        </div>
      </nav>

      {/* Hero — Swiss tight grid */}
      <section className="px-6 md:px-12 py-20 md:py-28 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-1">
          <p className="label">§01</p>
        </div>
        <div className="col-span-12 md:col-span-7 fade-up">
          <p className="label mb-8">Manifest 2026</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.04em] leading-[0.95] mb-10">
            Žádné prezentace.
            <br />
            Žádný úvodní small talk.
            <br />
            <span className="text-[#8e6f3f]">Jen práce.</span>
          </h1>
          <div className="gold-rule w-24 mb-10" />
          <p className="max-w-md text-base leading-relaxed text-[#0e0c0a]/75">
            Stunova je pracovní konsorcium tří lidí, kteří desetiletí dělali
            poradenství pro velké hráče a unavilo je to. Děláme to teď po svém —
            pomalu, hluboko, pro pět firem ročně.
          </p>
        </div>

        <aside className="col-span-12 md:col-span-3 md:col-start-10 flex flex-col gap-6 fade-up-delay-2">
          <Image
            src="/logo.jpg"
            alt=""
            width={200}
            height={200}
            className="self-end"
          />
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b hairline pb-2">
              <span className="label">EST.</span>
              <span className="num">2018</span>
            </div>
            <div className="flex justify-between border-b hairline pb-2">
              <span className="label">PARTNERS</span>
              <span className="num">3</span>
            </div>
            <div className="flex justify-between border-b hairline pb-2">
              <span className="label">CLIENTS / Y</span>
              <span className="num">5</span>
            </div>
            <div className="flex justify-between border-b hairline pb-2">
              <span className="label">RETENTION</span>
              <span className="num">94%</span>
            </div>
          </div>
        </aside>
      </section>

      <div className="gold-rule mx-6 md:mx-12" />

      {/* Práce */}
      <section id="prace" className="px-6 md:px-12 py-20 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-1">
          <p className="label">§02</p>
        </div>
        <div className="col-span-12 md:col-span-11">
          <p className="label mb-3">Co děláme</p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.03em] mb-16 max-w-3xl">
            Tři otázky, na které pomáháme odpovědět — pokaždé jinak.
          </h2>

          <ol className="grid md:grid-cols-3 gap-x-8 gap-y-12">
            {[
              {
                n: "01",
                otazka: "Kdy odejít?",
                text: "Z firmy, ze segmentu, z partnerství. Podíváme se na čísla, na tvoje motivy a na to, co se děje v hlavě tvojí ženy. Pak ti řekneme, co my bychom udělali.",
              },
              {
                n: "02",
                otazka: "Co dál?",
                text: "Když je předchozí kapitola dopsaná a další ještě ne. Trávíme s tebou tři měsíce a mapujeme verze tvého dalšího desetiletí. Z toho jednu vybereš.",
              },
              {
                n: "03",
                otazka: "Kde se zaseklo?",
                text: "Když firma vypadá dobře, ale necítíš to. Najdeme to místo, kde se rozhodnutí, kterému ses vyhnul před třemi lety, právě teď začalo počítat.",
              },
            ].map((o) => (
              <li key={o.n} className="border-t hairline pt-6">
                <p className="num text-3xl font-medium mb-3">{o.n}</p>
                <h3 className="text-xl font-medium mb-3 tracking-tight">
                  {o.otazka}
                </h3>
                <p className="text-sm leading-relaxed text-[#0e0c0a]/75">
                  {o.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="gold-rule mx-6 md:mx-12" />

      {/* Přístup */}
      <section id="pristup" className="px-6 md:px-12 py-20 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-1">
          <p className="label">§03</p>
        </div>
        <div className="col-span-12 md:col-span-11">
          <p className="label mb-3">Pravidla</p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.03em] mb-16 max-w-3xl">
            Pět věcí, které děláme jinak.
          </h2>

          <dl className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl">
            {[
              ["Bez prezentací", "Žádné slidy. Jen řeč, papír a večeře."],
              ["Max. 5 klientů ročně", "Když nebereme tebe, někdo z nás stojí. To je riziko, které neseme my, ne ty."],
              ["Tři partneři, ne agentura", "Nikdy se nedostaneš k juniorovi. Nikdy nedostaneš deck z dalšího klienta."],
              ["Honorář předem", "Kvartálně, na fakturu, dopředu. Žádné reportování hodin, žádné scope kreepy."],
              ["Discrétnost", "Ani jméno tvojí firmy se nikde nepíše. Reference jen po dohodě, jen jeden na druhého."],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-4 border-t hairline pt-4">
                <span className="num text-sm">→</span>
                <div>
                  <dt className="font-medium mb-1">{t}</dt>
                  <dd className="text-sm text-[#0e0c0a]/75 leading-relaxed">
                    {d}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="gold-rule mx-6 md:mx-12" />

      {/* CTA */}
      <section id="kontakt" className="px-6 md:px-12 py-24 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-1">
          <p className="label">§04</p>
        </div>
        <div className="col-span-12 md:col-span-11">
          <p className="label mb-6">Kontakt</p>
          <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.03em] mb-8">
            Napiš krátce, co řešíš.
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-[#0e0c0a]/75 mb-10">
            Odpovídáme do 24 hodin, vždy osobně. Pokud zjistíme, že to není pro
            nás, doporučíme někoho jiného.
          </p>
          <a
            href="mailto:hello@stunova.cz"
            className="text-2xl md:text-3xl font-medium tracking-tight border-b-2 border-[#c8a867] pb-1 hover:text-[#8e6f3f] transition"
          >
            hello@stunova.cz
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-6 grid grid-cols-12 items-center border-t hairline text-xs">
        <span className="col-span-3 label">Stunova © {new Date().getFullYear()}</span>
        <span className="col-span-6 text-center label">Praha · Wien · Brno</span>
        <span className="col-span-3 text-right label">Variant · Atelier</span>
      </footer>
    </div>
  );
}
