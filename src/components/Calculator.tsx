"use client";

import { useState } from "react";
import { Calculator as CalcIcon, ArrowRight } from "lucide-react";

const options = {
  typ: [
    { value: "osvc", label: "OSVČ / živnostník", base: 2500 },
    { value: "sro", label: "s.r.o.", base: 5000 },
  ],
  doklady: [
    { value: "malo", label: "Do 30 dokladů/měs.", mult: 1 },
    { value: "stredne", label: "30–80 dokladů/měs.", mult: 1.3 },
    { value: "hodne", label: "80+ dokladů/měs.", mult: 1.6 },
  ],
  mzdy: [
    { value: "0", label: "Žádní zaměstnanci", add: 0 },
    { value: "1-3", label: "1–3 zaměstnanci", add: 1050 },
    { value: "4-10", label: "4–10 zaměstnanců", add: 2800 },
    { value: "10+", label: "10+ zaměstnanců", add: 0, custom: true },
  ],
  dph: [
    { value: "ne", label: "Nejsem plátce DPH", add: 0 },
    { value: "ctvrletne", label: "DPH čtvrtletně", add: 500 },
    { value: "mesicne", label: "DPH měsíčně", add: 800 },
  ],
};

export function PriceCalculator() {
  const [typ, setTyp] = useState("osvc");
  const [doklady, setDoklady] = useState("malo");
  const [mzdy, setMzdy] = useState("0");
  const [dph, setDph] = useState("ne");

  const base = options.typ.find((o) => o.value === typ)!.base;
  const mult = options.doklady.find((o) => o.value === doklady)!.mult;
  const mzdyOpt = options.mzdy.find((o) => o.value === mzdy)!;
  const dphAdd = options.dph.find((o) => o.value === dph)!.add;

  const isCustom = mzdyOpt.custom;
  const total = isCustom ? null : Math.round(base * mult + mzdyOpt.add + dphAdd);

  return (
    <div className="card-warm p-8 md:p-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-[var(--cream)] border border-[var(--gold)]/15 flex items-center justify-center">
          <CalcIcon className="w-5 h-5 text-[var(--gold-dark)]" />
        </div>
        <h3 className="display text-xl not-italic font-medium">Kalkulačka</h3>
      </div>

      <div className="space-y-6">
        {/* Typ */}
        <div>
          <label className="block text-xs uppercase tracking-[0.15em] text-[var(--gold-dark)] mb-3">
            Typ podnikání
          </label>
          <div className="grid grid-cols-2 gap-2">
            {options.typ.map((o) => (
              <button
                key={o.value}
                onClick={() => setTyp(o.value)}
                className={`py-3 px-4 rounded-xl text-sm transition ${
                  typ === o.value
                    ? "bg-[var(--gold)]/15 border border-[var(--gold)]/40 text-[var(--ink)] font-medium"
                    : "bg-[var(--cream)] border border-[var(--gold)]/15 text-[var(--ink-soft)]"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>

        {/* Doklady */}
        <div>
          <label className="block text-xs uppercase tracking-[0.15em] text-[var(--gold-dark)] mb-3">
            Počet dokladů
          </label>
          <div className="space-y-2">
            {options.doklady.map((o) => (
              <button
                key={o.value}
                onClick={() => setDoklady(o.value)}
                className={`w-full py-3 px-4 rounded-xl text-sm text-left transition ${
                  doklady === o.value
                    ? "bg-[var(--gold)]/15 border border-[var(--gold)]/40 text-[var(--ink)] font-medium"
                    : "bg-[var(--cream)] border border-[var(--gold)]/15 text-[var(--ink-soft)]"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mzdy */}
        <div>
          <label className="block text-xs uppercase tracking-[0.15em] text-[var(--gold-dark)] mb-3">
            Zaměstnanci
          </label>
          <div className="grid grid-cols-2 gap-2">
            {options.mzdy.map((o) => (
              <button
                key={o.value}
                onClick={() => setMzdy(o.value)}
                className={`py-3 px-4 rounded-xl text-sm transition ${
                  mzdy === o.value
                    ? "bg-[var(--gold)]/15 border border-[var(--gold)]/40 text-[var(--ink)] font-medium"
                    : "bg-[var(--cream)] border border-[var(--gold)]/15 text-[var(--ink-soft)]"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>

        {/* DPH */}
        <div>
          <label className="block text-xs uppercase tracking-[0.15em] text-[var(--gold-dark)] mb-3">
            DPH
          </label>
          <div className="space-y-2">
            {options.dph.map((o) => (
              <button
                key={o.value}
                onClick={() => setDph(o.value)}
                className={`w-full py-3 px-4 rounded-xl text-sm text-left transition ${
                  dph === o.value
                    ? "bg-[var(--gold)]/15 border border-[var(--gold)]/40 text-[var(--ink)] font-medium"
                    : "bg-[var(--cream)] border border-[var(--gold)]/15 text-[var(--ink-soft)]"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="mt-8 pt-8 border-t border-[var(--gold)]/15 text-center">
        {isCustom ? (
          <>
            <p className="text-sm text-[var(--ink-soft)] mb-4">
              Pro 10+ zaměstnanců ti připravím nabídku na míru.
            </p>
            <a href="#kontakt" className="btn-gold">
              Domluvit kafíčko <ArrowRight className="w-4 h-4" />
            </a>
          </>
        ) : (
          <>
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--gold-dark)] mb-2">
              Orientační cena
            </p>
            <p className="display text-4xl md:text-5xl gold-grad mb-2">
              {total?.toLocaleString("cs-CZ")} Kč
            </p>
            <p className="text-xs text-[var(--ink-soft)] mb-6">
              měsíčně bez DPH · přesnou cenu domluvíme na kafíčku
            </p>
            <a href="#kontakt" className="btn-gold">
              Domluvit kafíčko <ArrowRight className="w-4 h-4" />
            </a>
          </>
        )}
      </div>
    </div>
  );
}
