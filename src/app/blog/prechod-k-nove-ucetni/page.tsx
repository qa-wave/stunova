import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak bezbolestně přejít k nové účetní",
  description: "Měníš účetní a bojíš se chaosu? Návod krok za krokem.",
};

export default function Article() {
  return (
    <article className="max-w-3xl mx-auto pt-8 prose-stunova">
      <p className="label-sm mb-3">5. května 2026 · 6 min čtení</p>
      <h1 className="display text-3xl md:text-4xl mb-6">
        Jak bezbolestně přejít k nové účetní
      </h1>

      <div className="space-y-6 text-[var(--ink-soft)] leading-relaxed">
        <p>
          Změna účetní je stresující. Máš pocit, že se všechno rozbije, něco se ztratí
          a finanční úřad ti zaklepe na dveře. Ale nemusí to tak být. Tady je postup,
          jak to zvládnout hladce.
        </p>

        <h2 className="display text-xl text-[var(--ink)] mt-10 mb-4 not-italic font-medium">
          Krok 1: Řekni stávající účetní, že končíš
        </h2>
        <p>
          Ideálně na konci čtvrtletí nebo roku. Dej jí čas předat dokumenty. Většina
          účetních má ve smlouvě výpovědní lhůtu — zkontroluj ji.
        </p>

        <h2 className="display text-xl text-[var(--ink)] mt-10 mb-4 not-italic font-medium">
          Krok 2: Vyžádej si kompletní předávku
        </h2>
        <ul className="space-y-3 list-none pl-0">
          {[
            "Účetní deník a hlavní knihu za poslední uzavřené období",
            "Přiznání k DPH a kontrolní hlášení",
            "Mzdovou agendu (pokud máš zaměstnance)",
            "Přístupy k datové schránce a na portál FÚ",
            "Plnou moc — tu starou zruš, novou podepíšeš s novou účetní",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="display text-xl text-[var(--ink)] mt-10 mb-4 not-italic font-medium">
          Krok 3: Sejdi se s novou účetní
        </h2>
        <p>
          Ideálně na kafíčku. Projděte si spolu tvoji situaci — kolik máš dokladů,
          jestli máš zaměstnance, jak posíláš doklady, co tě trápí. Dobrá účetní
          se zeptá na věci, které tě nenapadly.
        </p>

        <h2 className="display text-xl text-[var(--ink)] mt-10 mb-4 not-italic font-medium">
          Krok 4: Nová účetní přebírá agendu
        </h2>
        <p>
          Zkontroluje předané dokumenty, navazuje na poslední uzavřené období,
          podá novou plnou moc na FÚ. Pokud jsou v předchozím účetnictví chyby —
          opraví je. Stalo se mi to mnohokrát a vždycky se to dá vyřešit.
        </p>

        <h2 className="display text-xl text-[var(--ink)] mt-10 mb-4 not-italic font-medium">
          Největší chyba při změně účetní
        </h2>
        <p>
          Čekat do března. Pokud se rozhodneš v lednu a tvoje přiznání je v březnu,
          nová účetní nemá čas se zorientovat. Ideální čas na změnu je po roční závěrce —
          tedy květen až září.
        </p>

        <div className="mt-12 p-8 rounded-2xl bg-[var(--cream)] border border-[var(--gold)]/15 text-center">
          <p className="text-[var(--ink)] mb-4">
            Uvažuješ o změně? Klidně se ozvi — probereme to nezávazně.
          </p>
          <Link href="/#kontakt" className="btn-gold">
            Domluvit kafíčko
          </Link>
        </div>
      </div>
    </article>
  );
}
