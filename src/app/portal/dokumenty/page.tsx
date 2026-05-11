"use client";

import { useState } from "react";
import Link from "next/link";

const dokumenty = [
  {
    typ: "Ke schválení",
    t: "Kontrolní hlášení DPH · duben 2026",
    aut: "Libuše · 8. května 2026",
    pop: "Připraveno k podpisu. Termín odevzdání 25. května.",
    cas: "PDF · 2 strany",
    novy: true,
  },
  {
    typ: "Měsíční report",
    t: "Účetní závěrka · duben 2026",
    aut: "Libuše · 5. května 2026",
    pop: "Přehled obratu, nákladů, marže. Cash flow za duben.",
    cas: "PDF · 4 strany",
    novy: true,
  },
  {
    typ: "Roční",
    t: "Daňové přiznání 2025",
    aut: "Libuše · 2. května 2026",
    pop: "Podáno na FÚ. Doplatek 12 400 Kč splatný do 1. července.",
    cas: "PDF · 12 stran",
    novy: false,
  },
  {
    typ: "Smlouva",
    t: "Plná moc · zastupování FÚ a ČSSZ",
    aut: "—",
    pop: "Aktuální verze plné moci, podepsaná oběma stranami.",
    cas: "PDF · 1 strana",
    novy: false,
  },
  {
    typ: "Mzdy",
    t: "Výplatní pásky · duben 2026",
    aut: "Libuše · 5. května 2026",
    pop: "5 zaměstnanců, čistá mzda celkem 142 800 Kč. ZIP s pásky pro každého.",
    cas: "ZIP · 5 souborů",
    novy: false,
  },
  {
    typ: "Šablona",
    t: "Vzor faktury · 2026",
    aut: "Libuše · leden 2026",
    pop: "Aktualizovaný vzor faktury podle nových náležitostí.",
    cas: "DOCX",
    novy: false,
  },
];

const filtry = ["Vše", "Ke schválení", "Reporty", "Daně", "Mzdy", "Smlouvy"] as const;

const filtrMap: Record<string, string[]> = {
  "Ke schválení": ["Ke schválení"],
  "Reporty": ["Měsíční report"],
  "Daně": ["Roční"],
  "Mzdy": ["Mzdy"],
  "Smlouvy": ["Smlouva", "Šablona"],
};

export default function PortalDokumenty() {
  const [aktivniFiltr, setAktivniFiltr] = useState("Vše");

  const filtrovaneDokumenty =
    aktivniFiltr === "Vše"
      ? dokumenty
      : dokumenty.filter((d) => filtrMap[aktivniFiltr]?.includes(d.typ));

  return (
    <div className="max-w-5xl">
      <div className="flex items-baseline justify-between mb-8 flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-dark)] mb-3">
            Tvoje účetní složka
          </p>
          <h1 className="display text-4xl md:text-5xl">Dokumenty</h1>
        </div>
        <div className="flex gap-2 flex-wrap" role="group" aria-label="Filtrovat dokumenty">
          {filtry.map((f) => (
            <button
              key={f}
              onClick={() => setAktivniFiltr(f)}
              aria-pressed={aktivniFiltr === f}
              className={`px-4 py-2 text-xs rounded-full transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)] ${
                aktivniFiltr === f
                  ? "bg-[var(--ink)] text-white"
                  : "bg-white/80 border border-[var(--gold)]/30 hover:bg-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filtrovaneDokumenty.length === 0 ? (
          <p className="text-sm text-[var(--ink-soft)]/60 italic col-span-2 py-8 text-center">
            Žádné dokumenty v této kategorii.
          </p>
        ) : (
          filtrovaneDokumenty.map((m) => (
            <Link
              key={m.t}
              href="#"
              className="group bg-white/70 backdrop-blur-xl border border-white rounded-2xl p-6 shadow-md shadow-[var(--gold)]/5 hover:-translate-y-0.5 hover:shadow-xl transition relative focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]"
            >
              {m.novy && (
                <span className="absolute top-4 right-4 size-2 rounded-full bg-[var(--gold)]" aria-label="Nový dokument" />
              )}
              <p className="text-[10px] uppercase tracking-widest text-[var(--gold-dark)] mb-3">
                {m.typ}
              </p>
              <h3 className="display text-xl mb-2 group-hover:gold-grad transition">
                {m.t}
              </h3>
              <p className="text-sm text-[var(--ink-soft)] mb-4 leading-relaxed">
                {m.pop}
              </p>
              <div className="flex items-center justify-between text-xs text-[var(--gold-dark)]">
                <span>{m.aut}</span>
                <span>{m.cas}</span>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
