import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Schůzky",
  robots: { index: false, follow: false },
};

const schuzky = [
  {
    id: "2026-06-01",
    datum: "1. června 2026",
    cas: "10:00–10:45",
    typ: "Měsíční kafíčko · květen",
    kde: "Kavárna U Mistra · Praha 4 (nebo Google Meet)",
    stav: "naplanovane",
    poznamky:
      "Projdeme květnové výsledky, podíváme se na cash flow a co bude v červnu.",
  },
  {
    id: "2026-05-04",
    datum: "4. května 2026",
    cas: "10:00–10:30",
    typ: "Měsíční kafíčko · duben",
    kde: "Google Meet",
    stav: "hotove",
    poznamky:
      "Probrali jsme: nárust obratu o 12 %, novou zaměstnankyni, plán Q2.",
  },
  {
    id: "2026-04-15",
    datum: "15. dubna 2026",
    cas: "9:00–10:30",
    typ: "Roční zúčtování · 2025",
    kde: "Kancelář Libuše · Praha 4",
    stav: "hotove",
    poznamky:
      "Kompletní průchod ročním zúčtováním. Doplatek 12 400 Kč na FÚ.",
  },
  {
    id: "2026-03-02",
    datum: "2. března 2026",
    cas: "10:00–10:30",
    typ: "Měsíční kafíčko · únor",
    kde: "Google Meet",
    stav: "hotove",
    poznamky: "Diskutovali jsme přechod na účetní program Pohoda.",
  },
];

const stavBadge = {
  naplanovane: "bg-[#c8a867]/20 text-[#8e6f3f] border border-[#c8a867]/40",
  hotove: "bg-white/80 text-[#5a4a32] border border-[#c8a867]/20",
};

export default function PortalSchuzky() {
  return (
    <div className="max-w-5xl">
      <div className="flex items-baseline justify-between mb-8 flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#8e6f3f] mb-3">
            Naše společné kafíčka ☕
          </p>
          <h1 className="display text-4xl md:text-5xl">Schůzky</h1>
        </div>
        <Link
          href="#"
          className="rounded-full px-5 py-3 text-sm bg-white/80 border border-[#c8a867]/30 hover:bg-white transition"
        >
          + Domluvit nový termín
        </Link>
      </div>

      <ul className="space-y-3">
        {schuzky.map((s) => (
          <li
            key={s.id}
            className="bg-white/70 backdrop-blur-xl border border-white rounded-2xl p-6 shadow-md shadow-[#c8a867]/5 hover:-translate-y-0.5 transition"
          >
            <div className="flex flex-col md:grid md:grid-cols-12 gap-4 items-start">
              <div className="md:col-span-3">
                <p className="display text-xl mb-1">{s.datum}</p>
                <p className="text-sm text-[#5a4a32]">{s.cas}</p>
              </div>
              <div className="md:col-span-6">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="font-medium">{s.typ}</h3>
                  <span
                    className={`text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full ${stavBadge[s.stav as keyof typeof stavBadge]}`}
                  >
                    {s.stav === "naplanovane" ? "Plánováno" : "Hotovo"}
                  </span>
                </div>
                <p className="text-sm text-[#5a4a32] mb-2">📍 {s.kde}</p>
                <p className="text-sm">{s.poznamky}</p>
              </div>
              <div className="md:col-span-3 flex md:justify-end gap-2">
                <Link
                  href="#"
                  className="text-xs text-[#8e6f3f] hover:text-[#2a1f12] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-[#c8a867]"
                >
                  {s.stav === "naplanovane"
                    ? "Detail / přesunout →"
                    : "Otevřít zápis →"}
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
