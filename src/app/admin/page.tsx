import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin · Přehled",
  robots: { index: false, follow: false },
};

export default function AdminDashboard() {
  return (
    <div className="max-w-6xl">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-dark)] mb-3">
          Pátek · 9. května · 7:42
        </p>
        <h1 className="display text-4xl md:text-5xl mb-3">
          Dobré ráno, <span className="gold-grad italic">Libuš</span>.
        </h1>
        <p className="text-[var(--ink-soft)] max-w-xl">
          Tři kafíčka dnes, dvě faktury čekají na vystavení, jedna DPH má termín
          příští týden.
        </p>
      </div>

      {/* KPI strip */}
      <div className="grid md:grid-cols-4 gap-4 mb-10">
        {[
          { l: "Aktivní klienti", v: "23", sub: "+1 tento měsíc" },
          { l: "Kafíčka tento týden", v: "6", sub: "3 dnes" },
          { l: "Fakturace měsíc", v: "138 200", sub: "Kč · 96 % targetu" },
          { l: "Termíny příští týden", v: "4", sub: "DPH × 4 klienti" },
        ].map((k) => (
          <div
            key={k.l}
            className="bg-white/70 backdrop-blur-xl border border-white rounded-2xl p-6 shadow-md shadow-[var(--gold)]/5"
          >
            <p className="text-xs uppercase tracking-widest text-[var(--gold-dark)] mb-2">
              {k.l}
            </p>
            <p className="display text-4xl mb-1">{k.v}</p>
            <p className="text-xs text-[var(--ink-soft)]">{k.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Today */}
        <div className="md:col-span-2 bg-white/70 backdrop-blur-xl border border-white rounded-2xl p-8 shadow-md shadow-[var(--gold)]/5">
          <div className="flex items-baseline justify-between mb-6">
            <h3 className="display text-2xl">Dnešní kafíčka ☕</h3>
            <Link
              href="/admin/schuzky"
              className="text-xs text-[var(--gold-dark)] hover:text-[var(--ink)]"
            >
              Kalendář →
            </Link>
          </div>
          <ul className="space-y-3">
            {[
              {
                cas: "9:00",
                trv: "30 min",
                klient: "Acme s.r.o. · Jan Novák",
                typ: "Měsíční report",
                stav: "ted",
              },
              {
                cas: "11:00",
                trv: "45 min",
                klient: "Beta Tech · Klára Dvořáková",
                typ: "Roční zúčtování · finální",
                stav: "dalsi",
              },
              {
                cas: "15:00",
                trv: "60 min",
                klient: "Nový klient · Petr Černý (potenciál)",
                typ: "První kafíčko",
                stav: "dalsi",
              },
            ].map((s) => (
              <li
                key={s.cas}
                className={`flex flex-wrap md:grid md:grid-cols-12 gap-3 md:gap-4 items-center p-4 rounded-xl border transition ${
                  s.stav === "ted"
                    ? "bg-[var(--gold)]/10 border-[var(--gold)]/40"
                    : "bg-white/50 border-[var(--gold)]/10"
                }`}
              >
                <div className="md:col-span-2 flex items-baseline gap-2 md:block">
                  <p className="display text-2xl">{s.cas}</p>
                  <p className="text-xs text-[var(--gold-dark)]">{s.trv}</p>
                </div>
                <div className="md:col-span-7 flex-1 min-w-0">
                  <p className="font-medium">{s.klient}</p>
                  <p className="text-xs text-[var(--ink-soft)] mt-0.5">{s.typ}</p>
                </div>
                <div className="md:col-span-3 text-right">
                  {s.stav === "ted" ? (
                    <span className="text-[10px] uppercase tracking-widest text-[var(--gold-dark)]">
                      Za chvíli
                    </span>
                  ) : (
                    <Link
                      href="#"
                      className="text-xs text-[var(--gold-dark)] hover:text-[var(--ink)]"
                    >
                      Otevřít →
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Attention */}
        <div className="bg-white/70 backdrop-blur-xl border border-white rounded-2xl p-8 shadow-md shadow-[var(--gold)]/5">
          <h3 className="display text-2xl mb-6">Vyžaduje pozornost</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/30">
              <p className="text-xs uppercase tracking-widest text-[var(--gold-dark)] mb-1">
                Termín · DPH
              </p>
              <p className="font-medium mb-2">4 klienti · 25. května</p>
              <p className="text-sm text-[var(--ink-soft)] mb-3">
                Acme, Beta Tech, Gamma, Delta — kontrolní hlášení připravit
                a poslat ke schválení.
              </p>
              <Link
                href="#"
                className="text-xs text-[var(--gold-dark)] hover:text-[var(--ink)] underline underline-offset-4"
              >
                Otevřít →
              </Link>
            </div>

            <div className="p-4 rounded-xl bg-white/50 border border-[var(--gold)]/10">
              <p className="text-xs uppercase tracking-widest text-[var(--gold-dark)] mb-1">
                Faktury · vystavit
              </p>
              <p className="font-medium mb-2">2 položky</p>
              <p className="text-sm text-[var(--ink-soft)]">
                Beta Tech · 5 800 Kč<br />
                Gamma Holding · 5 800 Kč
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
