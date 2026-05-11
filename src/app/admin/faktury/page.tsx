import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin · Fakturace",
  robots: { index: false, follow: false },
};

const faktury = [
  {
    cislo: "2026/05/02",
    klient: "Beta Tech a.s.",
    datum: "—",
    polozka: "Účetnictví + mzdy · květen 2026",
    castka: "8 400 Kč",
    stav: "k_vystaveni",
  },
  {
    cislo: "2026/05/01",
    klient: "Gamma Holding",
    datum: "—",
    polozka: "Účetnictví · květen 2026",
    castka: "5 800 Kč",
    stav: "k_vystaveni",
  },
  {
    cislo: "2026/04/06",
    klient: "Acme s.r.o.",
    datum: "30. 4. 2026",
    polozka: "Účetnictví · duben 2026",
    castka: "5 800 Kč",
    stav: "k_uhrade",
  },
  {
    cislo: "2026/04/05",
    klient: "Beta Tech a.s.",
    datum: "30. 4. 2026",
    polozka: "Účetnictví + mzdy · duben 2026",
    castka: "8 400 Kč",
    stav: "uhrazeno",
  },
  {
    cislo: "2026/04/04",
    klient: "Epsilon Café",
    datum: "30. 4. 2026",
    polozka: "Účetnictví + mzdy · duben 2026",
    castka: "7 200 Kč",
    stav: "uhrazeno",
  },
  {
    cislo: "2026/04/03",
    klient: "Delta Group",
    datum: "30. 4. 2026",
    polozka: "Daňová evidence · duben 2026",
    castka: "2 500 Kč",
    stav: "uhrazeno",
  },
];

const stavStyl = {
  k_vystaveni: "bg-[var(--gold)]/30 text-[var(--gold-dark)] border-[var(--gold)]/60",
  k_uhrade: "bg-[var(--gold)]/15 text-[var(--gold-dark)] border-[var(--gold)]/30",
  uhrazeno: "bg-white/80 text-[var(--ink-soft)] border-[var(--gold)]/20",
};

const stavLabel = {
  k_vystaveni: "Vystavit",
  k_uhrade: "K úhradě",
  uhrazeno: "Uhrazeno",
};

export default function AdminFaktury() {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-8 flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-dark)] mb-3">
            Květen 2026
          </p>
          <h1 className="display text-4xl md:text-5xl">Fakturace</h1>
        </div>
        <button
          className="rounded-full px-5 py-2.5 text-sm text-white"
          style={{
            background: "linear-gradient(135deg, var(--gold) 0%, var(--ink) 100%)",
          }}
        >
          Vystavit 2 čekající
        </button>
      </div>

      {/* Summary */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white/70 backdrop-blur-xl border border-white rounded-2xl p-6">
          <p className="text-xs uppercase tracking-widest text-[var(--gold-dark)] mb-2">
            K vystavení
          </p>
          <p className="display text-3xl gold-grad">14 200 Kč</p>
          <p className="text-xs text-[var(--ink-soft)] mt-1">2 položky</p>
        </div>
        <div className="bg-white/70 backdrop-blur-xl border border-white rounded-2xl p-6">
          <p className="text-xs uppercase tracking-widest text-[var(--gold-dark)] mb-2">
            K úhradě
          </p>
          <p className="display text-3xl">5 800 Kč</p>
          <p className="text-xs text-[var(--ink-soft)] mt-1">1 položka</p>
        </div>
        <div className="bg-white/70 backdrop-blur-xl border border-white rounded-2xl p-6">
          <p className="text-xs uppercase tracking-widest text-[var(--gold-dark)] mb-2">
            YTD inkaso
          </p>
          <p className="display text-3xl">552 600 Kč</p>
          <p className="text-xs text-[var(--ink-soft)] mt-1">98 faktur · 23 klienti</p>
        </div>
        <div className="bg-white/70 backdrop-blur-xl border border-white rounded-2xl p-6">
          <p className="text-xs uppercase tracking-widest text-[var(--gold-dark)] mb-2">
            Roční target
          </p>
          <p className="display text-3xl">1 600 000 Kč</p>
          <p className="text-xs text-[var(--ink-soft)] mt-1">35 % splněno</p>
        </div>
      </div>

      <div className="bg-white/70 backdrop-blur-xl border border-white rounded-2xl overflow-hidden shadow-md shadow-[var(--gold)]/5">
        <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[780px]">
          <thead className="text-[10px] uppercase tracking-widest text-[var(--gold-dark)] border-b border-[var(--gold)]/20">
            <tr>
              <th className="text-left px-6 py-4">Číslo</th>
              <th className="text-left px-6 py-4">Klient</th>
              <th className="text-left px-6 py-4">Položka</th>
              <th className="text-left px-6 py-4">Vystaveno</th>
              <th className="text-right px-6 py-4">Částka</th>
              <th className="text-left px-6 py-4">Stav</th>
              <th className="text-right px-6 py-4">Akce</th>
            </tr>
          </thead>
          <tbody>
            {faktury.map((f) => (
              <tr
                key={f.cislo}
                className="border-b border-[var(--gold)]/10 last:border-0 hover:bg-white/50 transition"
              >
                <td className="px-6 py-4 font-medium">{f.cislo}</td>
                <td className="px-6 py-4">{f.klient}</td>
                <td className="px-6 py-4 text-[var(--ink-soft)]">{f.polozka}</td>
                <td className="px-6 py-4 text-[var(--ink-soft)]">{f.datum}</td>
                <td className="px-6 py-4 text-right">{f.castka}</td>
                <td className="px-6 py-4">
                  <span
                    className={`text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border ${stavStyl[f.stav as keyof typeof stavStyl]}`}
                  >
                    {stavLabel[f.stav as keyof typeof stavLabel]}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="text-[var(--gold-dark)] hover:text-[var(--ink)] text-xs"
                  >
                    {f.stav === "k_vystaveni"
                      ? "Vystavit →"
                      : f.stav === "k_uhrade"
                        ? "Připomenout"
                        : "PDF"}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}
