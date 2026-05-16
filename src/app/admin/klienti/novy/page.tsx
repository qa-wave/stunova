import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin · Nový klient",
  robots: { index: false, follow: false },
};

export default function NovyKlientPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/klienti"
          className="text-[var(--gold-dark)] hover:text-[var(--ink)] text-sm transition-colors"
        >
          ← Zpět na klienty
        </Link>
      </div>

      <h1 className="text-2xl font-semibold text-[var(--ink)]">Nový klient</h1>

      <div className="card-warm rounded-2xl p-8 max-w-xl">
        <form action="/admin/klienti" className="space-y-6">
          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-widest text-[var(--ink-soft)]">
              Název firmy
            </label>
            <input
              type="text"
              name="nazev"
              required
              className="w-full rounded-lg border border-[var(--gold)]/30 bg-white/60 px-4 py-2.5 text-[var(--ink)] placeholder:text-[var(--ink-soft)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40"
              placeholder="Acme s.r.o."
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-widest text-[var(--ink-soft)]">
              Kontaktní osoba
            </label>
            <input
              type="text"
              name="osoba"
              required
              className="w-full rounded-lg border border-[var(--gold)]/30 bg-white/60 px-4 py-2.5 text-[var(--ink)] placeholder:text-[var(--ink-soft)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40"
              placeholder="Jan Novák"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-widest text-[var(--ink-soft)]">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-lg border border-[var(--gold)]/30 bg-white/60 px-4 py-2.5 text-[var(--ink)] placeholder:text-[var(--ink-soft)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40"
              placeholder="jan@acme.cz"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-widest text-[var(--ink-soft)]">
              Telefon
            </label>
            <input
              type="tel"
              name="telefon"
              className="w-full rounded-lg border border-[var(--gold)]/30 bg-white/60 px-4 py-2.5 text-[var(--ink)] placeholder:text-[var(--ink-soft)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40"
              placeholder="+420 777 123 456"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-widest text-[var(--ink-soft)]">
              IČO
            </label>
            <input
              type="text"
              name="ico"
              className="w-full rounded-lg border border-[var(--gold)]/30 bg-white/60 px-4 py-2.5 text-[var(--ink)] placeholder:text-[var(--ink-soft)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40"
              placeholder="12345678"
            />
          </div>

          <fieldset className="space-y-3">
            <legend className="text-xs uppercase tracking-widest text-[var(--ink-soft)]">
              Plán
            </legend>
            <div className="space-y-2 pt-1">
              {["Účetnictví", "Daňová evidence", "Účetnictví + mzdy"].map(
                (plan) => (
                  <label key={plan} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="plan"
                      value={plan}
                      defaultChecked={plan === "Účetnictví"}
                      className="accent-[var(--gold)]"
                    />
                    <span className="text-sm text-[var(--ink)]">{plan}</span>
                  </label>
                )
              )}
            </div>
          </fieldset>

          <div className="pt-4">
            <button type="submit" className="btn-gold px-6 py-2.5 rounded-full text-sm">
              Přidat klienta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
