import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin · Kalendář",
  robots: { index: false, follow: false },
};

const dny = [
  {
    datum: "Pondělí · 12. května",
    sezeni: [
      {
        cas: "9:00",
        trv: "30",
        k: "Acme s.r.o.",
        t: "Měsíční report · duben",
      },
      {
        cas: "11:00",
        trv: "45",
        k: "Beta Tech a.s.",
        t: "Roční zúčtování · finální",
      },
    ],
  },
  {
    datum: "Úterý · 13. května",
    sezeni: [
      {
        cas: "10:00",
        trv: "60",
        k: "Nový klient · Petr Černý",
        t: "První kafíčko",
      },
      {
        cas: "15:00",
        trv: "30",
        k: "Delta Group",
        t: "DPH konzultace",
      },
    ],
  },
  {
    datum: "Středa · 14. května",
    sezeni: [
      {
        cas: "9:00",
        trv: "30",
        k: "Epsilon Café",
        t: "Měsíční report · duben",
      },
      {
        cas: "14:00",
        trv: "30",
        k: "Zeta Studio",
        t: "Konzultace · podnikatelský úvěr",
      },
    ],
  },
  {
    datum: "Čtvrtek · 15. května",
    sezeni: [],
  },
  {
    datum: "Pátek · 16. května",
    sezeni: [
      {
        cas: "10:00",
        trv: "30",
        k: "Acme s.r.o.",
        t: "Schválení DPH",
      },
    ],
  },
];

export default function AdminSchuzky() {
  return (
    <div className="max-w-5xl">
      <div className="flex items-baseline justify-between mb-8 flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#8e6f3f] mb-3">
            Týdenní výhled · 8 kafíček ☕
          </p>
          <h1 className="display text-4xl md:text-5xl">Kalendář</h1>
        </div>
        <div className="flex gap-2">
          <button className="rounded-full px-4 py-2 text-xs bg-white/80 border border-[#c8a867]/30 hover:bg-white">
            ← Min týden
          </button>
          <button className="rounded-full px-4 py-2 text-xs bg-[#5a3825] text-white">
            Tento týden
          </button>
          <button className="rounded-full px-4 py-2 text-xs bg-white/80 border border-[#c8a867]/30 hover:bg-white">
            Příští →
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {dny.map((d) => (
          <div
            key={d.datum}
            className="bg-white/70 backdrop-blur-xl border border-white rounded-2xl p-6 shadow-md shadow-[#c8a867]/5"
          >
            <div className="flex items-baseline justify-between mb-4">
              <h3 className="display text-xl">{d.datum}</h3>
              <span className="text-xs text-[#8e6f3f]">
                {d.sezeni.length === 0
                  ? "Volný den"
                  : `${d.sezeni.length} schůzky`}
              </span>
            </div>
            {d.sezeni.length === 0 ? (
              <p className="text-sm text-[#5a4a32]/60 italic">
                Žádné kafíčko naplánované.
              </p>
            ) : (
              <ul className="space-y-2">
                {d.sezeni.map((s, i) => (
                  <li
                    key={i}
                    className="flex flex-wrap md:grid md:grid-cols-12 gap-2 md:gap-3 items-center p-3 rounded-xl hover:bg-white/60 transition"
                  >
                    <div className="md:col-span-2 flex items-center gap-2">
                      <span className="display text-lg">{s.cas}</span>
                      <span className="text-xs text-[#8e6f3f]">
                        · {s.trv}m
                      </span>
                    </div>
                    <div className="md:col-span-7 flex-1 min-w-0">
                      <p className="font-medium text-sm">{s.k}</p>
                      <p className="text-xs text-[#5a4a32] mt-0.5">{s.t}</p>
                    </div>
                    <div className="md:col-span-3 text-right">
                      <Link
                        href="#"
                        className="text-xs text-[#8e6f3f] hover:text-[#2a1f12]"
                      >
                        Příprava →
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
