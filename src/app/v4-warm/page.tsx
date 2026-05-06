import Image from "next/image";
import Link from "next/link";

export default function WarmVariant() {
  return (
    <div className="variant-warm min-h-screen flex flex-col">
      {/* Nav — soft pill */}
      <nav className="px-6 md:px-12 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Stunova"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="display text-2xl font-medium">Stunova</span>
        </Link>
        <div className="hidden md:flex items-center gap-2 bg-white/60 backdrop-blur-md border border-[#c8a867]/30 rounded-full px-2 py-1.5 shadow-sm">
          {["Příběh", "Služby", "Tým", "Kontakt"].map((t) => (
            <a
              key={t}
              href={`#${t.toLowerCase()}`}
              className="px-4 py-1.5 text-sm rounded-full hover:bg-white transition"
            >
              {t}
            </a>
          ))}
        </div>
        <Link
          href="#kontakt"
          className="rounded-full px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#c8a867]/30 transition hover:shadow-[#c8a867]/50"
          style={{
            background: "linear-gradient(135deg, #c8a867 0%, #8e6f3f 100%)",
          }}
        >
          Začít →
        </Link>
      </nav>

      {/* Hero */}
      <section className="flex-1 px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-[#c8a867]/30 rounded-full px-4 py-2 mb-8 fade-up">
              <span className="size-2 rounded-full bg-[#c8a867] animate-pulse" />
              <span className="text-xs tracking-wide">
                Bereme nové klienty na Q3
              </span>
            </div>
            <h1 className="display fade-up-delay-1 text-5xl md:text-7xl leading-[1.05] mb-8">
              Pomáháme firmám
              <br />
              <span className="gold-grad italic">růst v klidu.</span>
            </h1>
            <p className="fade-up-delay-2 text-lg md:text-xl text-[#5a4a32] leading-relaxed mb-10 max-w-xl">
              Není to o nátlaku ani o kalendáři plném meetingů. Je to o tom,
              dělat každý měsíc o jeden moudrý krok víc než minulý.
            </p>
            <div className="fade-up-delay-3 flex flex-wrap gap-4">
              <Link
                href="#kontakt"
                className="rounded-full px-7 py-4 text-white shadow-lg shadow-[#c8a867]/30 transition hover:shadow-[#c8a867]/50"
                style={{
                  background:
                    "linear-gradient(135deg, #c8a867 0%, #8e6f3f 100%)",
                }}
              >
                Domluvit první rozhovor
              </Link>
              <Link
                href="#sluzby"
                className="rounded-full px-7 py-4 bg-white/60 backdrop-blur border border-[#c8a867]/30 hover:bg-white transition"
              >
                Co konkrétně děláme
              </Link>
            </div>
          </div>

          <div className="fade-up-delay-3 relative">
            <div
              className="absolute inset-0 -m-8 rounded-[3rem] blur-3xl opacity-50"
              style={{
                background:
                  "radial-gradient(circle, #c8a867 0%, transparent 70%)",
              }}
            />
            <div className="relative bg-white/70 backdrop-blur-xl border border-white rounded-[2.5rem] p-12 shadow-2xl shadow-[#c8a867]/20">
              <Image
                src="/logo.jpg"
                alt=""
                width={300}
                height={300}
                className="mx-auto"
              />
              <div className="mt-8 pt-8 border-t border-[#c8a867]/20 grid grid-cols-3 text-center gap-4">
                {[
                  { c: "12+", l: "let zkušeností" },
                  { c: "94%", l: "klientů zůstává" },
                  { c: "3", l: "kontinenty" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="display text-3xl gold-grad">{s.c}</p>
                    <p className="text-xs text-[#5a4a32] mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sluzby */}
      <section id="sluzby" className="px-6 md:px-12 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium gold-grad mb-4 tracking-wide">
              JAK PRACUJEME
            </p>
            <h2 className="display text-4xl md:text-6xl">
              Tři způsoby, jak <em>být u toho</em>.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: "🎯",
                t: "Strategie",
                d: "Společně si v klidu projdeme to, kam chceš za rok, za pět, za deset. A pak co s tím.",
                cena: "od 80 000 Kč",
              },
              {
                emoji: "🤝",
                t: "Doprovod",
                d: "Pravidelná setkání jednou za dva týdny. Místo terapie, hodina jasna.",
                cena: "od 40 000 Kč / měs.",
              },
              {
                emoji: "🆘",
                t: "Krize",
                d: "Když hoří. Sedneme si do 48 hodin a vyřešíme to spolu.",
                cena: "individuálně",
              },
            ].map((s, i) => (
              <div
                key={s.t}
                className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white shadow-xl shadow-[#c8a867]/10 hover:-translate-y-1 transition"
              >
                <div className="text-4xl mb-6">{s.emoji}</div>
                <h3 className="display text-2xl mb-3">{s.t}</h3>
                <p className="text-[#5a4a32] leading-relaxed mb-6">{s.d}</p>
                <p className="text-sm gold-grad font-medium">{s.cena}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="px-6 md:px-12 py-24">
        <div
          className="max-w-4xl mx-auto rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #2a1f12 0%, #5a4a32 50%, #8e6f3f 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, #c8a867 0%, transparent 50%)",
            }}
          />
          <div className="relative">
            <h2 className="display text-4xl md:text-6xl mb-6">
              Stačí jeden hovor.
            </h2>
            <p className="text-lg text-[#e0c890] mb-10 max-w-xl mx-auto">
              Bezplatný, 30 minut, bez závazků. Buď si padneme do oka, nebo ti
              alespoň doporučíme někoho jiného.
            </p>
            <a
              href="mailto:hello@stunova.cz"
              className="inline-block bg-[#c8a867] text-[#2a1f12] rounded-full px-10 py-5 font-medium shadow-2xl hover:bg-[#e0c890] transition"
            >
              hello@stunova.cz
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 flex justify-between items-center text-sm text-[#5a4a32]">
        <span>© Stunova {new Date().getFullYear()}</span>
        <span className="display italic">Variant · Warm</span>
      </footer>
    </div>
  );
}
