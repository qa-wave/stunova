import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Přehled",
  robots: { index: false, follow: false },
};

export default function PortalDashboard() {
  const now = new Date();
  const dayName = now.toLocaleDateString('cs-CZ', { weekday: 'long' });
  const dayMonth = now.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long' });
  const dateStr = `${dayName.charAt(0).toUpperCase() + dayName.slice(1)} · ${dayMonth}`;

  return (
    <div className="max-w-5xl">
      {/* Onboarding tip */}
      <div className="mb-6 p-5 rounded-2xl bg-[var(--gold)]/8 border border-[var(--gold)]/20 flex items-start gap-4">
        <span className="text-2xl shrink-0" aria-hidden="true">👋</span>
        <div>
          <p className="text-sm font-medium mb-1">Vítej v portálu!</p>
          <p className="text-xs text-[var(--ink-soft)]">
            Tady najdeš přehled svého účetnictví, dokumenty ke schválení, faktury a historii schůzek.
            Pokud potřebuješ cokoliv — stačí napsat na{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-[var(--gold-dark)] underline underline-offset-2">{CONTACT.email}</a>.
          </p>
        </div>
      </div>

      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-dark)] mb-3">
          {dateStr}
        </p>
        <h1 className="display text-4xl md:text-5xl mb-3">
          Dobré ráno, <span className="gold-grad italic">Jane</span>.
        </h1>
        <p className="text-[var(--ink-soft)] max-w-xl">
          Tady je všechno, co tě teď v účetnictví čeká. Bez stresu.
        </p>
      </div>

      {/* Next deadline */}
      <div className="bg-white/70 backdrop-blur-xl border border-white rounded-[2rem] p-8 mb-6 shadow-xl shadow-[var(--gold)]/10">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--gold-dark)] mb-2">
              Nejbližší termín
            </p>
            <h2 className="display text-2xl md:text-3xl mb-3">
              DPH za duben — kontrolní hlášení
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--ink-soft)]">
              <span><span aria-hidden="true">📅</span> Termín 25. května 2026</span>
              <span><span aria-hidden="true">📦</span> Připraveno k podpisu</span>
              <span><span aria-hidden="true">👤</span> Libuše to vyřídí, ty jen schválíš</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              href="/portal/dokumenty"
              className="rounded-full px-6 py-3 text-sm text-white shadow-lg shadow-[var(--gold)]/30"
              style={{
                background:
                  "linear-gradient(135deg, var(--gold) 0%, var(--ink) 100%)",
              }}
            >
              Schválit a podepsat
            </Link>
            <button className="rounded-full px-6 py-2 text-xs bg-white/80 border border-[var(--gold)]/30 hover:bg-white transition">
              Mám dotaz
            </button>
          </div>
        </div>
      </div>

      {/* KPI strip */}
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {[
          { l: "Faktury vystavené Q2", v: "12", sub: "180 320 Kč" },
          { l: "Daňová úspora YTD", v: "42 110", sub: "Kč · vs. loni" },
          { l: "Nové dokumenty", v: "3", sub: "ke kontrole" },
        ].map((k) => (
          <div
            key={k.l}
            className="bg-white/60 backdrop-blur-xl border border-white rounded-2xl p-6 shadow-md shadow-[var(--gold)]/5"
          >
            <p className="text-xs uppercase tracking-widest text-[var(--gold-dark)] mb-2">
              {k.l}
            </p>
            <p className="display text-4xl mb-1">{k.v}</p>
            <p className="text-xs text-[var(--ink-soft)]">{k.sub}</p>
          </div>
        ))}
      </div>

      {/* Two columns */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white/70 backdrop-blur-xl border border-white rounded-2xl p-8 shadow-md shadow-[var(--gold)]/5">
          <div className="flex items-baseline justify-between mb-6">
            <h3 className="display text-2xl">Co se dělo</h3>
            <Link
              href="/portal/dokumenty"
              className="text-xs text-[var(--gold-dark)] hover:text-[var(--ink)]"
            >
              Vše →
            </Link>
          </div>
          <ul className="space-y-5">
            {[
              {
                d: "8. května",
                t: "Mzdy za duben — odeslány",
                s: "5 zaměstnanců, čistá mzda celkem 142 800 Kč. ELDP nahráno na ČSSZ.",
              },
              {
                d: "5. května",
                t: "Faktura 2026/04/12 — Acme s.r.o.",
                s: "180 000 Kč, splatnost 19. května. Připomenutí jsem klientovi poslala.",
              },
              {
                d: "2. května",
                t: "Daňové přiznání 2025 — finální",
                s: "Podáno na FÚ, doplatek 12 400 Kč splatný do 1. července.",
              },
            ].map((a) => (
              <li key={a.t} className="flex gap-4">
                <div className="text-xs text-[var(--gold-dark)] w-20 shrink-0 pt-1 uppercase tracking-wide">
                  {a.d}
                </div>
                <div className="flex-1 border-l border-[var(--gold)]/20 pl-4">
                  <p className="font-medium mb-1">{a.t}</p>
                  <p className="text-sm text-[var(--ink-soft)]">{a.s}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white/70 backdrop-blur-xl border border-white rounded-2xl p-8 shadow-md shadow-[var(--gold)]/5">
          <h3 className="display text-2xl mb-6">Pro tebe</h3>
          <ul className="space-y-4">
            {[
              {
                t: "Schválit kontrolní hlášení DPH",
                h: "1 min",
                done: false,
              },
              {
                t: "Poslat doklady za duben",
                h: "10 min",
                done: true,
              },
              {
                t: "Domluvit kafe na červen",
                h: "—",
                done: false,
              },
            ].map((task) => (
              <li key={task.t} className="flex items-start gap-3">
                <button
                  role="checkbox"
                  aria-checked={task.done}
                  tabIndex={0}
                  className={`mt-0.5 size-5 rounded-full border flex items-center justify-center text-xs ${
                    task.done
                      ? "bg-[var(--ink)] border-[var(--ink)] text-white"
                      : "border-[var(--gold)]/40"
                  }`}
                >
                  {task.done ? "✓" : ""}
                </button>
                <div className="flex-1">
                  <p
                    className={`text-sm ${task.done ? "line-through text-[var(--ink-soft)]/60" : ""}`}
                  >
                    {task.t}
                  </p>
                  <p className="text-xs text-[var(--gold-dark)] mt-0.5">{task.h}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
