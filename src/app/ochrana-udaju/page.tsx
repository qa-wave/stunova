import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů",
  description: "Zásady zpracování osobních údajů — Libuše Stuňová, Účetnictví.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <nav className="px-6 md:px-12 py-6 flex items-center justify-between max-w-4xl mx-auto">
        <Link href="/"><Logo size="sm" /></Link>
        <Link href="/" className="flex items-center gap-2 text-sm text-[var(--ink-soft)] hover:text-[var(--ink)] transition">
          <ArrowLeft className="w-4 h-4" /> Zpět
        </Link>
      </nav>

      <main className="px-6 md:px-12 pb-20 max-w-3xl mx-auto">
        <h1 className="display text-3xl md:text-4xl mb-8">Ochrana osobních údajů</h1>

        <div className="space-y-8 text-[var(--ink-soft)] leading-relaxed text-sm">
          <section>
            <h2 className="text-[var(--ink)] font-medium text-base mb-3">1. Správce údajů</h2>
            <p>
              Libuše Stuňová, IČO: [doplnit], se sídlem Praha 4 – Nusle.
              E-mail: libuse@stunova.cz. Telefon: +420 728 ••• •••.
            </p>
          </section>

          <section>
            <h2 className="text-[var(--ink)] font-medium text-base mb-3">2. Jaké údaje zpracovávám</h2>
            <p>Prostřednictvím kontaktního formuláře: jméno, e-mailová adresa, obsah zprávy.</p>
            <p className="mt-2">V rámci účetních služeb (po uzavření smlouvy): identifikační údaje, kontaktní údaje, finanční údaje nezbytné pro vedení účetnictví.</p>
          </section>

          <section>
            <h2 className="text-[var(--ink)] font-medium text-base mb-3">3. Účel zpracování</h2>
            <ul className="space-y-2 list-none pl-0">
              {[
                "Odpověď na tvůj dotaz z kontaktního formuláře",
                "Plnění smlouvy o vedení účetnictví",
                "Plnění zákonných povinností (daňové předpisy, archivace)",
                "Oprávněný zájem (zlepšování služeb, bezpečnost)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-[var(--ink)] font-medium text-base mb-3">4. Doba uchování</h2>
            <p>
              Údaje z kontaktního formuláře: po dobu vyřízení dotazu, max. 12 měsíců.
              Účetní dokumenty: po dobu stanovenou zákonem (obvykle 5–10 let).
            </p>
          </section>

          <section>
            <h2 className="text-[var(--ink)] font-medium text-base mb-3">5. Tvoje práva</h2>
            <p>
              Máš právo na přístup ke svým údajům, jejich opravu, výmaz, omezení zpracování,
              přenositelnost a právo vznést námitku. Kontaktuj mě na libuse@stunova.cz.
            </p>
            <p className="mt-2">
              Máš také právo podat stížnost u Úřadu pro ochranu osobních údajů (uoou.cz).
            </p>
          </section>

          <section>
            <h2 className="text-[var(--ink)] font-medium text-base mb-3">6. Cookies</h2>
            <p>
              Tento web používá pouze technicky nezbytné cookies pro správné fungování.
              Nepoužíváme sledovací cookies třetích stran. Analytické údaje sbíráme
              přes Vercel Analytics anonymně, bez osobních identifikátorů.
            </p>
          </section>

          <section>
            <h2 className="text-[var(--ink)] font-medium text-base mb-3">7. Zabezpečení</h2>
            <p>
              Údaje jsou přenášeny šifrovaně (HTTPS/TLS). Přístup k účetním datům
              mám pouze já. Hostování zajišťuje Vercel (EU region).
            </p>
          </section>

          <p className="text-xs text-[var(--ink-soft)]/60 pt-4 border-t border-[var(--gold)]/10">
            Poslední aktualizace: květen 2026
          </p>
        </div>
      </main>
    </div>
  );
}
