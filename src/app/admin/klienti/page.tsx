import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin · Klienti",
  robots: { index: false, follow: false },
};

const klienti = [
  {
    nazev: "Acme s.r.o.",
    osoba: "Jan Novák · CEO",
    od: "Únor 2024",
    plan: "Účetnictví",
    mrr: "5 800 Kč",
    deadline: "DPH 25. 5.",
    stav: "deadline",
    inicialy: "AC",
  },
  {
    nazev: "Beta Tech a.s.",
    osoba: "Klára Dvořáková · majitel",
    od: "Říjen 2024",
    plan: "Účetnictví + mzdy",
    mrr: "8 400 Kč",
    deadline: "—",
    stav: "aktivni",
    inicialy: "BT",
  },
  {
    nazev: "Gamma Holding",
    osoba: "Petr Černý · jednatel",
    od: "Březen 2025",
    plan: "Účetnictví",
    mrr: "5 800 Kč",
    deadline: "DPH 25. 5.",
    stav: "deadline",
    inicialy: "GH",
  },
  {
    nazev: "Delta Group",
    osoba: "Lucie Svobodová · OSVČ",
    od: "Leden 2026",
    plan: "Daňová evidence",
    mrr: "2 500 Kč",
    deadline: "—",
    stav: "aktivni",
    inicialy: "DG",
  },
  {
    nazev: "Epsilon Café",
    osoba: "Tomáš Veselý · majitel",
    od: "Květen 2025",
    plan: "Účetnictví + mzdy",
    mrr: "7 200 Kč",
    deadline: "—",
    stav: "aktivni",
    inicialy: "EC",
  },
  {
    nazev: "Zeta Studio",
    osoba: "Jana Marková · OSVČ",
    od: "Listopad 2023",
    plan: "Daňová evidence",
    mrr: "2 500 Kč",
    deadline: "—",
    stav: "aktivni",
    inicialy: "ZS",
  },
];

const stavBadge = {
  deadline: "bg-[#c8a867]/30 text-[#8e6f3f] border-[#c8a867]/60",
  aktivni: "bg-white/80 text-[#5a4a32] border-[#c8a867]/20",
};

export default function AdminKlienti() {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-8 flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#8e6f3f] mb-3">
            23 aktivních · 2 noví v 2026
          </p>
          <h1 className="display text-4xl md:text-5xl">Klienti</h1>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="search"
            placeholder="Hledat klienta…"
            aria-label="Hledat klienta"
            className="bg-white/80 border border-[#c8a867]/30 rounded-full px-5 py-2.5 text-sm focus:outline-none focus:border-[#c8a867] w-48 md:w-64"
          />
          <Link
            href="#"
            className="rounded-full px-5 py-2.5 text-sm text-white"
            style={{
              background: "linear-gradient(135deg, #c8a867 0%, #5a3825 100%)",
            }}
          >
            + Přidat
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {klienti.map((k) => (
          <Link
            key={k.nazev}
            href="#"
            className="group bg-white/70 backdrop-blur-xl border border-white rounded-2xl p-6 shadow-md shadow-[#c8a867]/5 hover:-translate-y-0.5 hover:shadow-xl transition"
          >
            <div className="flex items-start gap-4 mb-4">
              <div
                className="size-12 rounded-2xl flex items-center justify-center text-white font-medium shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #c8a867 0%, #5a3825 100%)",
                }}
              >
                {k.inicialy}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="display text-xl truncate">{k.nazev}</h3>
                  <span
                    className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border ${stavBadge[k.stav as keyof typeof stavBadge]}`}
                  >
                    {k.stav === "deadline" ? "Termín" : "OK"}
                  </span>
                </div>
                <p className="text-sm text-[#5a4a32] truncate">{k.osoba}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#c8a867]/20 text-xs">
              <div>
                <p className="text-[#8e6f3f] uppercase tracking-widest text-[10px] mb-1">
                  Plán
                </p>
                <p>{k.plan}</p>
              </div>
              <div>
                <p className="text-[#8e6f3f] uppercase tracking-widest text-[10px] mb-1">
                  Měs.
                </p>
                <p>{k.mrr}</p>
              </div>
              <div>
                <p className="text-[#8e6f3f] uppercase tracking-widest text-[10px] mb-1">
                  Termín
                </p>
                <p className={k.stav === "deadline" ? "gold-grad" : ""}>
                  {k.deadline}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
