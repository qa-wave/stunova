import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Přehled",
  robots: { index: false, follow: false },
};

export default function PortalDashboard() {
  return (
    <div className="max-w-5xl">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-[#8e6f3f] mb-3">
          Pátek · 9. května
        </p>
        <h1 className="display text-4xl md:text-5xl mb-3">
          Dobré ráno, <span className="gold-grad italic">Jane</span>.
        </h1>
        <p className="text-[#5a4a32] max-w-xl">
          Tady je všechno, co tě teď v účetnictví čeká. Bez stresu.
        </p>
      </div>

      {/* Next deadline */}
      <div className="bg-white/70 backdrop-blur-xl border border-white rounded-[2rem] p-8 mb-6 shadow-xl shadow-[#c8a867]/10">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#8e6f3f] mb-2">
              Nejbližší termín
            </p>
            <h2 className="display text-2xl md:text-3xl mb-3">
              DPH za duben — kontrolní hlášení
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#5a4a32]">
              <span>📅 Termín 25. května 2026</span>
              <span>📦 Připraveno k podpisu</span>
              <span>👤 Libuše to vyřídí, ty jen schválíš</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              href="/portal/dokumenty"
              className="rounded-full px-6 py-3 text-sm text-white shadow-lg shadow-[#c8a867]/30"
              style={{
                background:
                  "linear-gradient(135deg, #c8a867 0%, #5a3825 100%)",
              }}
            >
              Schválit a podepsat
            </Link>
            <button className="rounded-full px-6 py-2 text-xs bg-white/80 border border-[#c8a867]/30 hover:bg-white transition">
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
            className="bg-white/60 backdrop-blur-xl border border-white rounded-2xl p-6 shadow-md shadow-[#c8a867]/5"
          >
            <p className="text-xs uppercase tracking-widest text-[#8e6f3f] mb-2">
              {k.l}
            </p>
            <p className="display text-4xl mb-1">{k.v}</p>
            <p className="text-xs text-[#5a4a32]">{k.sub}</p>
          </div>
        ))}
      </div>

      {/* Two columns */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white/70 backdrop-blur-xl border border-white rounded-2xl p-8 shadow-md shadow-[#c8a867]/5">
          <div className="flex items-baseline justify-between mb-6">
            <h3 className="display text-2xl">Co se dělo</h3>
            <Link
              href="/portal/dokumenty"
              className="text-xs text-[#8e6f3f] hover:text-[#2a1f12]"
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
                <div className="text-xs text-[#8e6f3f] w-20 shrink-0 pt-1 uppercase tracking-wide">
                  {a.d}
                </div>
                <div className="flex-1 border-l border-[#c8a867]/20 pl-4">
                  <p className="font-medium mb-1">{a.t}</p>
                  <p className="text-sm text-[#5a4a32]">{a.s}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white/70 backdrop-blur-xl border border-white rounded-2xl p-8 shadow-md shadow-[#c8a867]/5">
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
                <span
                  className={`mt-0.5 size-5 rounded-full border flex items-center justify-center text-xs ${
                    task.done
                      ? "bg-[#5a3825] border-[#5a3825] text-white"
                      : "border-[#c8a867]/40"
                  }`}
                >
                  {task.done ? "✓" : ""}
                </span>
                <div className="flex-1">
                  <p
                    className={`text-sm ${task.done ? "line-through text-[#5a4a32]/60" : ""}`}
                  >
                    {task.t}
                  </p>
                  <p className="text-xs text-[#8e6f3f] mt-0.5">{task.h}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
