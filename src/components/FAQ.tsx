"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Musím za tebou chodit osobně?",
    a: "Ne. Většinu věcí vyřídíme online — e-mailem, WhatsAppem nebo sdílenou složkou. Osobně se potkáme jednou měsíčně na kafíčku, pokud chceš — nebo online, pokud ti to víc sedí.",
  },
  {
    q: "Jak ti posílám doklady?",
    a: "Jak ti to vyhovuje. Fotka z mobilu na WhatsApp, e-mail, sdílená složka. Nastavíme si systém, který ti nevadí — a pak ho stačí dodržovat.",
  },
  {
    q: "Kolik to bude stát?",
    a: "Záleží na rozsahu. Pro OSVČ to začíná od 2 500 Kč měsíčně, pro s.r.o. od 5 000 Kč. Přesnou nabídku ti dám po prvním kafíčku, kdy si projdeme, co skutečně potřebuješ.",
  },
  {
    q: "Zabýváš se i daňovým poradenstvím?",
    a: "Základní daňové poradenství je součástí spolupráce — kdykoliv potřebuješ vědět, co je lepší nebo jak na to, stačí se zeptat. Na složité kauzy doporučím daňového poradce.",
  },
  {
    q: 'Přijmeš mě, i když moje účetnictví je „rozbité"?',
    a: "Ano. Stalo se mi to víckrát — přeberuji i zanedbané účetnictví a dám ho do pořádku. Bude to pár hodin práce navíc na začátku, ale pak jedeme normálně.",
  },
  {
    q: "Co když potřebuji něco rychle vyřešit?",
    a: "Napiš nebo zavolej. Odpovídám do 24 hodin, většinou dřív. Pokud je to urgentní, řekni to hned — a dostaneš se na vrchol.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border-b border-[var(--gold)]/15 last:border-0"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left gap-4"
            aria-expanded={open === i}
          >
            <span className="font-medium text-[var(--ink)]">{faq.q}</span>
            <ChevronDown
              className={`w-5 h-5 text-[var(--gold-dark)] shrink-0 transition-transform duration-200 ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === i ? "max-h-48 pb-5" : "max-h-0"
            }`}
          >
            <p className="text-sm text-[var(--ink-soft)] leading-relaxed pr-8">
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
