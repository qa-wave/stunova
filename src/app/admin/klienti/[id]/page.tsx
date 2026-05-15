import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, Calendar, Receipt, FileText, Coffee, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Admin · Detail klienta",
  robots: { index: false, follow: false },
};

const klientiData: Record<string, {
  nazev: string; osoba: string; email: string; telefon: string;
  od: string; plan: string; mrr: string; ico: string;
  poznamky: string;
  faktury: Array<{ cislo: string; datum: string; castka: string; stav: string }>;
  schuzky: Array<{ datum: string; typ: string; stav: string }>;
}> = {
  "acme-sro": {
    nazev: "Acme s.r.o.", osoba: "Jan Novák · CEO", email: "jan@acme.cz", telefon: "+420 777 111 222",
    od: "Únor 2024", plan: "Účetnictví", mrr: "5 800 Kč", ico: "12345678",
    poznamky: "Spolehlivý klient, doklady posílá včas. DPH měsíčně. Preferuje Google Drive.",
    faktury: [
      { cislo: "2026/04/06", datum: "30. 4. 2026", castka: "5 800 Kč", stav: "k_uhrade" },
      { cislo: "2026/03/06", datum: "31. 3. 2026", castka: "5 800 Kč", stav: "uhrazeno" },
    ],
    schuzky: [
      { datum: "1. června 2026", typ: "Měsíční kafíčko", stav: "naplanovane" },
      { datum: "4. května 2026", typ: "Měsíční kafíčko", stav: "hotove" },
    ],
  },
};

const stavStyl = {
  k_uhrade: "bg-[var(--gold)]/20 text-[var(--gold-dark)] border-[var(--gold)]/40",
  uhrazeno: "bg-[var(--card-bg)] text-[var(--ink-soft)] border-[var(--gold)]/20",
  naplanovane: "bg-[var(--gold)]/20 text-[var(--gold-dark)] border-[var(--gold)]/40",
  hotove: "bg-[var(--card-bg)] text-[var(--ink-soft)] border-[var(--gold)]/20",
};

export default async function KlientDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const klient = klientiData[id];

  if (!klient) {
    return (
      <div className="max-w-3xl mx-auto py-16 text-center">
        <p className="display text-4xl gold-grad mb-4">404</p>
        <p className="text-[var(--ink-soft)]">Klient nenalezen.</p>
        <Link href="/admin/klienti" className="btn-soft mt-6 inline-flex">
          <ArrowLeft className="w-4 h-4" /> Zpět na klienty
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      <Link href="/admin/klienti" className="inline-flex items-center gap-2 text-sm text-[var(--gold-dark)] hover:text-[var(--ink)] transition mb-8">
        <ArrowLeft className="w-4 h-4" /> Zpět na klienty
      </Link>

      {/* Header */}
      <div className="card-warm p-8 mb-6">
        <div className="flex items-start gap-6 flex-wrap">
          <div className="size-16 rounded-2xl flex items-center justify-center text-xl font-medium" style={{ background: "linear-gradient(135deg, var(--gold) 0%, var(--ink) 100%)", color: "white" }}>
            {klient.nazev.split(" ").map(w => w[0]).join("").slice(0, 2)}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="display text-3xl mb-1">{klient.nazev}</h1>
            <p className="text-[var(--ink-soft)]">{klient.osoba}</p>
            <div className="flex flex-wrap gap-4 mt-4 text-sm">
              <a href={`mailto:${klient.email}`} className="flex items-center gap-1.5 text-[var(--gold-dark)] hover:text-[var(--ink)]">
                <Mail className="w-4 h-4" /> {klient.email}
              </a>
              <a href={`tel:${klient.telefon.replace(/\s/g, "")}`} className="flex items-center gap-1.5 text-[var(--gold-dark)] hover:text-[var(--ink)]">
                <Phone className="w-4 h-4" /> {klient.telefon}
              </a>
            </div>
          </div>
          <div className="flex gap-2">
            <a href={`mailto:${klient.email}`} className="btn-soft text-xs py-2 px-4">
              <MessageCircle className="w-3.5 h-3.5" /> Napsat
            </a>
            <Link href="/admin/schuzky" className="btn-gold text-xs py-2 px-4">
              <Coffee className="w-3.5 h-3.5" /> Kafíčko
            </Link>
          </div>
        </div>
      </div>

      {/* Info grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { l: "Plán", v: klient.plan },
          { l: "MRR", v: klient.mrr },
          { l: "Od", v: klient.od },
          { l: "IČO", v: klient.ico },
        ].map((item) => (
          <div key={item.l} className="card-warm p-5">
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--gold-dark)] mb-1">{item.l}</p>
            <p className="font-medium">{item.v}</p>
          </div>
        ))}
      </div>

      {/* Poznámky */}
      <div className="card-warm p-6 mb-6">
        <p className="text-xs uppercase tracking-[0.15em] text-[var(--gold-dark)] mb-2">Interní poznámky</p>
        <p className="text-sm text-[var(--ink-soft)] leading-relaxed">{klient.poznamky}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Faktury */}
        <div className="card-warm p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="font-medium flex items-center gap-2"><Receipt className="w-4 h-4 text-[var(--gold-dark)]" /> Faktury</p>
            <Link href="/admin/faktury" className="text-xs text-[var(--gold-dark)] hover:text-[var(--ink)]">Vše →</Link>
          </div>
          <ul className="space-y-3">
            {klient.faktury.map((f) => (
              <li key={f.cislo} className="flex items-center justify-between text-sm">
                <div>
                  <p className="font-medium">{f.cislo}</p>
                  <p className="text-xs text-[var(--ink-soft)]">{f.datum}</p>
                </div>
                <div className="text-right">
                  <p>{f.castka}</p>
                  <span className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border ${stavStyl[f.stav as keyof typeof stavStyl]}`}>
                    {f.stav === "k_uhrade" ? "K úhradě" : "Uhrazeno"}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Schůzky */}
        <div className="card-warm p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="font-medium flex items-center gap-2"><Calendar className="w-4 h-4 text-[var(--gold-dark)]" /> Schůzky</p>
            <Link href="/admin/schuzky" className="text-xs text-[var(--gold-dark)] hover:text-[var(--ink)]">Kalendář →</Link>
          </div>
          <ul className="space-y-3">
            {klient.schuzky.map((s) => (
              <li key={s.datum} className="flex items-center justify-between text-sm">
                <div>
                  <p className="font-medium">{s.typ}</p>
                  <p className="text-xs text-[var(--ink-soft)]">{s.datum}</p>
                </div>
                <span className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border ${stavStyl[s.stav as keyof typeof stavStyl]}`}>
                  {s.stav === "naplanovane" ? "Plánováno" : "Hotovo"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
