import type { Metadata } from "next";
import Link from "next/link";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Co potřebuji od účetní? Průvodce pro OSVČ a malé firmy",
  description: "Nevíš, co od účetní čekat? Seznam věcí, které by měla řešit — a které ne.",
  openGraph: {
    images: [{ url: "/api/og?title=Co potřebuji od účetní?", width: 1200, height: 630 }],
  },
};

export default function Article() {
  return (
    <article className="max-w-3xl mx-auto pt-8 prose-stunova">
      <p className="label-sm mb-3">15. května 2026 · 5 min čtení</p>
      <h1 className="display text-3xl md:text-4xl mb-6">
        Co potřebuji od účetní? Průvodce pro OSVČ a malé firmy
      </h1>

      <div className="space-y-6 text-[var(--ink-soft)] leading-relaxed">
        <p>
          Když zakládáš firmu nebo začínáš podnikat jako OSVČ, účetnictví je jedna z prvních věcí,
          které musíš vyřešit. Ale co přesně má účetní dělat? A co je na tobě?
        </p>

        <h2 className="display text-xl text-[var(--ink)] mt-10 mb-4 not-italic font-medium">
          Co by měla účetní řešit
        </h2>
        <ul className="space-y-3 list-none pl-0">
          {[
            "Měsíční zpracování dokladů — faktury, pokladna, banka",
            "DPH přiznání a kontrolní hlášení (pokud jsi plátce)",
            "Roční daňové přiznání a účetní závěrku",
            "Komunikaci s finančním úřadem a ČSSZ",
            "Mzdy a odvody, pokud máš zaměstnance",
            "Upozornění na termíny — aby tě nic nepřekvapilo",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="display text-xl text-[var(--ink)] mt-10 mb-4 not-italic font-medium">
          Co zůstává na tobě
        </h2>
        <ul className="space-y-3 list-none pl-0">
          {[
            "Posílat doklady včas — fotka, e-mail nebo sdílená složka",
            "Říct účetní o změnách — nový zaměstnanec, nová smlouva, velký nákup",
            "Schvalovat dokumenty k podání — plná moc nestačí na všechno",
            "Platit faktury včas — účetní je připraví, ale zaplatit musíš ty",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-dark)] mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="display text-xl text-[var(--ink)] mt-10 mb-4 not-italic font-medium">
          Jak vybrat správnou účetní
        </h2>
        <p>
          Hledej někoho, kdo ti vysvětlí věci jednoduše. Účetní, která ti řekne &quot;to
          je složité&quot; a nic nevysvětlí, není ta pravá. Dobrá účetní ti řekne co a proč —
          a klidně i třikrát, dokud to nedává smysl.
        </p>
        <p>
          Taky se ptej na dostupnost. Jak rychle odpovídá? Jak probíhá komunikace?
          Potkáváte se? Účetní, se kterou se vidíš jednou ročně v březnu, nemůže
          vědět, co tvoje firma potřebuje.
        </p>

        <div className="mt-12 p-8 rounded-2xl bg-[var(--cream)] border border-[var(--gold)]/15 text-center">
          <p className="text-[var(--ink)] mb-4">
            Chceš vědět, jestli bych ti mohla pomoct?
          </p>
          <Link href="/#kontakt" className="btn-gold">
            Domluvit kafíčko
          </Link>
        </div>

        <RelatedArticles currentSlug="co-potrebuji-od-ucetni" />
      </div>
    </article>
  );
}
