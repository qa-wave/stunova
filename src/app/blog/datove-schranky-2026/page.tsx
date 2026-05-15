import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datové schránky v roce 2026: co se změnilo a co musíš vědět",
  description: "Od ledna 2023 mají datovky i OSVČ. Co to znamená a jak s tím pracovat?",
};

export default function Article() {
  return (
    <article className="max-w-3xl mx-auto pt-8 prose-stunova">
      <p className="label-sm mb-3">10. května 2026 · 4 min čtení</p>
      <h1 className="display text-3xl md:text-4xl mb-6">
        Datové schránky v roce 2026: co se změnilo a co musíš vědět
      </h1>

      <div className="space-y-6 text-[var(--ink-soft)] leading-relaxed">
        <p>
          Od ledna 2023 mají datovou schránku automaticky všechny OSVČ a právnické osoby.
          Co to pro tebe v praxi znamená? A co se od té doby změnilo?
        </p>

        <h2 className="display text-xl text-[var(--ink)] mt-10 mb-4 not-italic font-medium">
          Co je datová schránka a proč ji máš
        </h2>
        <p>
          Datová schránka je elektronická poštovní schránka, přes kterou komunikuješ s úřady.
          Dokument doručený do datovky má stejnou váhu jako doporučený dopis. A hlavně:
          po 10 dnech se považuje za doručený, i když ho nepřečteš.
        </p>

        <h2 className="display text-xl text-[var(--ink)] mt-10 mb-4 not-italic font-medium">
          Co se změnilo v roce 2026
        </h2>
        <ul className="space-y-3 list-none pl-0">
          {[
            "Nové rozhraní portálu — přehlednější, mobilní verze funguje lépe",
            "Automatické přeposílání na e-mail — konečně bez složitého nastavení",
            "Povinné elektronické podání přiznání pro všechny OSVČ",
            "Integrace s účetními softwary — Pohoda, Money S3 už umí datovky nativně",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="display text-xl text-[var(--ink)] mt-10 mb-4 not-italic font-medium">
          Co musíš dělat ty
        </h2>
        <p>
          <strong className="text-[var(--ink)]">Minimálně:</strong> přihlásit se jednou za čas a zkontrolovat,
          jestli ti nepřišlo něco důležitého. Nebo lepší varianta — nastavit přeposílání na e-mail
          a mít klid.
        </p>
        <p>
          Pokud máš účetní (jako mě), můžeš ji pověřit přístupem k datovce. Pak za tebe
          zkontroluju došlou poštu, odpovím na úřady a ty se nemusíš o nic starat.
        </p>

        <div className="mt-12 p-8 rounded-2xl bg-[var(--cream)] border border-[var(--gold)]/15 text-center">
          <p className="text-[var(--ink)] mb-4">
            Potřebuješ pomoct s nastavením datovky?
          </p>
          <Link href="/#kontakt" className="btn-gold">
            Domluvit kafíčko
          </Link>
        </div>
      </div>
    </article>
  );
}
