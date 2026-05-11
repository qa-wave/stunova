import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faktury",
  robots: { index: false, follow: false },
};

const faktury = [
  {
    cislo: "2026/04/01",
    datum: "30. 4. 2026",
    splatnost: "14. 5. 2026",
    polozka: "Vedení účetnictví · duben 2026",
    castka: "5 800 Kč",
    stav: "k_uhrade",
  },
  {
    cislo: "2026/03/01",
    datum: "31. 3. 2026",
    splatnost: "14. 4. 2026",
    polozka: "Vedení účetnictví · březen 2026",
    castka: "5 800 Kč",
    stav: "uhrazeno",
  },
  {
    cislo: "2026/02/02",
    datum: "29. 2. 2026",
    splatnost: "14. 3. 2026",
    polozka: "Roční zúčtování 2025",
    castka: "8 000 Kč",
    stav: "uhrazeno",
  },
  {
    cislo: "2026/02/01",
    datum: "28. 2. 2026",
    splatnost: "14. 3. 2026",
    polozka: "Vedení účetnictví · únor 2026",
    castka: "5 800 Kč",
    stav: "uhrazeno",
  },
];

const stavStyl = {
  k_uhrade: "bg-[var(--gold)]/20 text-[var(--gold-dark)] border-[var(--gold)]/40",
  uhrazeno: "bg-white/80 text-[var(--ink-soft)] border-[var(--gold)]/20",
};

export default function PortalFaktury() {
  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-dark)] mb-3">
          Faktury od Libuše · za účetní služby
        </p>
        <h1 className="display text-4xl md:text-5xl">Faktury</h1>
      </div>

      {/* Summary */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white/70 backdrop-blur-xl border border-white rounded-2xl p-6">
          <p className="text-xs uppercase tracking-widest text-[var(--gold-dark)] mb-2">
            K úhradě
          </p>
          <p className="display text-3xl gold-grad">5 800 Kč</p>
          <p className="text-xs text-[var(--ink-soft)] mt-1">Splatnost 14. 5.</p>
        </div>
        <div className="bg-white/70 backdrop-blur-xl border border-white rounded-2xl p-6">
          <p className="text-xs uppercase tracking-widest text-[var(--gold-dark)] mb-2">
            Letos uhrazeno
          </p>
          <p className="display text-3xl">25 200 Kč</p>
          <p className="text-xs text-[var(--ink-soft)] mt-1">4 faktury</p>
        </div>
        <div className="bg-white/70 backdrop-blur-xl border border-white rounded-2xl p-6">
          <p className="text-xs uppercase tracking-widest text-[var(--gold-dark)] mb-2">
            Předplatné
          </p>
          <p className="display text-3xl">5 800 Kč</p>
          <p className="text-xs text-[var(--ink-soft)] mt-1">měsíčně · vč. DPH</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white/70 backdrop-blur-xl border border-white rounded-2xl overflow-hidden shadow-md shadow-[var(--gold)]/5">
        <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[640px]">
          <thead className="text-[10px] uppercase tracking-widest text-[var(--gold-dark)] border-b border-[var(--gold)]/20">
            <tr>
              <th className="text-left px-6 py-4">Číslo</th>
              <th className="text-left px-6 py-4">Vystaveno</th>
              <th className="text-left px-6 py-4">Položka</th>
              <th className="text-right px-6 py-4">Částka</th>
              <th className="text-left px-6 py-4">Stav</th>
              <th className="text-right px-6 py-4">PDF</th>
            </tr>
          </thead>
          <tbody>
            {faktury.map((f) => (
              <tr
                key={f.cislo}
                className="border-b border-[var(--gold)]/10 last:border-0 hover:bg-white/50 transition"
              >
                <td className="px-6 py-4 font-medium">{f.cislo}</td>
                <td className="px-6 py-4 text-[var(--ink-soft)]">{f.datum}</td>
                <td className="px-6 py-4">{f.polozka}</td>
                <td className="px-6 py-4 text-right">{f.castka}</td>
                <td className="px-6 py-4">
                  <span
                    className={`text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border ${stavStyl[f.stav as keyof typeof stavStyl]}`}
                  >
                    {f.stav === "k_uhrade" ? "K úhradě" : "Uhrazeno"}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="text-[var(--gold-dark)] hover:text-[var(--ink)] text-xs"
                  >
                    Stáhnout
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
