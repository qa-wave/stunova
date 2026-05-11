"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Calculator,
  Users,
  ArrowRight,
  Phone,
  Mail,
  Camera,
  MessageCircle,
  FolderOpen,
  Coffee,
  CheckCircle2,
  Clock,
  Shield,
  Menu,
  X,
} from "lucide-react";

const logoUrl = "/stunova-logo.jpg";

const navLinks = [
  ["Služby", "#sluzby"],
  ["Jak to chodí", "#proces"],
  ["O mně", "#o-mne"],
  ["Kontakt", "#kontakt"],
] as const;

/* ============================================
   SiteNav
   ============================================ */
function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="Hlavní navigace"
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[var(--background)]/80 border-b border-[var(--gold)]/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="logo-mark">
            <Image
              src={logoUrl}
              alt="Libuše Stuňová"
              width={28}
              height={28}
              className="rounded-md object-cover"
            />
          </div>
          <span className="hidden sm:inline text-sm font-medium text-[var(--ink)]">
            Libuše Stuňová
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 bg-[var(--cream)] rounded-full px-2 py-1.5 border border-[var(--gold)]/15">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="px-4 py-1.5 text-sm rounded-full text-[var(--ink-soft)] hover:text-[var(--ink)] hover:bg-[var(--sand)] transition"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/prihlaseni" className="btn-soft text-xs py-2 px-4">
            Přihlášení
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-xl hover:bg-[var(--sand)] transition"
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--gold)]/10 bg-[var(--background)]/95 backdrop-blur-xl px-6 py-4 space-y-1">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm text-[var(--ink-soft)] hover:text-[var(--ink)] hover:bg-[var(--sand)] transition"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ============================================
   Hero — gradient fallback (no video)
   ============================================ */
function Hero() {
  return (
    <section className="pt-28 pb-20 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Hero band — gradient with logo */}
        <div
          className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-12"
          style={{
            background:
              "linear-gradient(135deg, var(--cream) 0%, var(--sand) 40%, var(--gold-light) 100%)",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={logoUrl}
              alt="Libuše Stuňová · Účetnictví"
              width={280}
              height={214}
              className="opacity-90 max-w-[60%] h-auto"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--cream)] border border-[var(--gold)]/20 mb-8">
            <span className="pulse-dot" />
            <span className="text-xs font-medium text-[var(--ink-soft)]">
              Beru klienty od ledna 2026
            </span>
          </div>

          <h1 className="display text-4xl md:text-6xl lg:text-7xl mb-6">
            Účetnictví, u kterého se{" "}
            <span className="gold-grad">nestresuješ</span>.
          </h1>

          <p className="text-lg text-[var(--ink-soft)] max-w-xl mx-auto mb-10">
            Účetní jako parťák, ne jen servis ke konci roku. Potkáme se na
            kafíčku, probereme čísla a ty máš klid celý měsíc.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#kontakt" className="btn-gold">
              Domluvit kafíčko <Coffee className="w-4 h-4" />
            </a>
            <a href="#sluzby" className="btn-soft">
              Co nabízím <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Stats card — about Libuše, not client */}
        <div className="mt-16 max-w-md mx-auto card-warm p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="logo-mark">
              <Image
                src={logoUrl}
                alt=""
                width={24}
                height={24}
                className="rounded-md object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium">Libuše Stuňová</p>
              <p className="text-xs text-[var(--ink-soft)]">
                Účetní · Praha 4
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="display text-2xl gold-grad">14+</p>
              <p className="text-[10px] uppercase tracking-widest text-[var(--ink-soft)] mt-1">
                let praxe
              </p>
            </div>
            <div>
              <p className="display text-2xl gold-grad">23</p>
              <p className="text-[10px] uppercase tracking-widest text-[var(--ink-soft)] mt-1">
                klientů
              </p>
            </div>
            <div>
              <p className="display text-2xl gold-grad">0</p>
              <p className="text-[10px] uppercase tracking-widest text-[var(--ink-soft)] mt-1">
                pokut
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   Services
   ============================================ */
function Services() {
  const services = [
    {
      icon: BookOpen,
      title: "Vedení účetnictví",
      desc: "Kompletní podvojné účetnictví pro s.r.o. Fakturace, přiznání DPH, kontrolní hlášení, závěrky.",
    },
    {
      icon: Calculator,
      title: "Daňová evidence",
      desc: "Pro OSVČ a menší firmy. Přehledná evidence příjmů a výdajů, daňové přiznání, komunikace s FÚ.",
    },
    {
      icon: Users,
      title: "Mzdy a personalistika",
      desc: "Výpočet mezd, odvody na SP a ZP, roční zúčtování, přihlášky a odhlášky zaměstnanců.",
    },
  ];

  return (
    <section id="sluzby" className="py-20 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-dark)] mb-3">
            Co pro tebe udělám
          </p>
          <h2 className="display text-3xl md:text-5xl">Služby</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="card-warm p-8">
              <div className="w-12 h-12 rounded-xl bg-[var(--cream)] border border-[var(--gold)]/15 flex items-center justify-center mb-5">
                <s.icon className="w-5 h-5 text-[var(--gold-dark)]" />
              </div>
              <h3 className="font-medium text-lg mb-3">{s.title}</h3>
              <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   Process
   ============================================ */
function Process() {
  const steps = [
    {
      num: "01",
      title: "Kafíčko",
      desc: "Potkáme se (osobně nebo online), probereme tvoje potřeby a já ti řeknu, jak to bude fungovat.",
      icon: Coffee,
    },
    {
      num: "02",
      title: "Nastavíme systém",
      desc: "Založím ti sdílenou složku, napojím se na banku, domluvíme jak posílat doklady.",
      icon: FolderOpen,
    },
    {
      num: "03",
      title: "Běžíme",
      desc: "Každý měsíc zpracuji účetnictví, podám přiznání, pošlu ti report. Ty máš klid.",
      icon: CheckCircle2,
    },
    {
      num: "04",
      title: "Průběžný servis",
      desc: "Pravidelná kafíčka, rychlé odpovědi na dotazy, proaktivní upozornění na termíny.",
      icon: Shield,
    },
  ];

  return (
    <section id="proces" className="py-20 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-dark)] mb-3">
            Bez stresu, krok za krokem
          </p>
          <h2 className="display text-3xl md:text-5xl">Jak to chodí</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              <div className="card-warm p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="display text-3xl gold-grad not-italic">
                    {s.num}
                  </span>
                  <s.icon className="w-5 h-5 text-[var(--gold-dark)]" />
                </div>
                <h3 className="font-medium mb-2">{s.title}</h3>
                <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
                  {s.desc}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-[var(--gold)]/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   About
   ============================================ */
function About() {
  return (
    <section id="o-mne" className="py-20 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="card-warm p-8 md:p-12 grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2 flex justify-center">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden border-2 border-[var(--gold)]/20">
              <Image
                src={logoUrl}
                alt="Libuše Stuňová"
                width={224}
                height={224}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-dark)] mb-3">
              O mně
            </p>
            <h2 className="display text-3xl md:text-4xl mb-4">
              Libuše Stuňová
            </h2>
            <p className="text-[var(--ink-soft)] leading-relaxed mb-4">
              Účetnictví dělám přes 14 let. Začínala jsem v korporátu, ale
              zjistila jsem, že mě baví pracovat s malými firmami a OSVČ, kde
              vidím přímý dopad své práce.
            </p>
            <p className="text-[var(--ink-soft)] leading-relaxed mb-6">
              Sídlím v Praze 4 (Nusle), ale většinu agendy řeším online.
              Potkáváme se na kafíčku jednou měsíčně — a pokud potřebuješ
              něco rychle, stačí napsat. Žádné čekání na odpověď do příštího
              týdne.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs px-3 py-1.5 rounded-full bg-[var(--cream)] border border-[var(--gold)]/15 text-[var(--ink-soft)]">
                <Clock className="w-3 h-3 inline mr-1" /> Odpovídám do 24h
              </span>
              <span className="text-xs px-3 py-1.5 rounded-full bg-[var(--cream)] border border-[var(--gold)]/15 text-[var(--ink-soft)]">
                <Shield className="w-3 h-3 inline mr-1" /> 14+ let praxe
              </span>
              <span className="text-xs px-3 py-1.5 rounded-full bg-[var(--cream)] border border-[var(--gold)]/15 text-[var(--ink-soft)]">
                <Users className="w-3 h-3 inline mr-1" /> 23 aktivních klientů
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   ClientZone
   ============================================ */
function ClientZone() {
  const channels = [
    {
      icon: Camera,
      title: "Vyfoť doklad",
      desc: "Stačí fotka z mobilu. Pošli mailem nebo WhatsAppem a já to zpracuji.",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp / telefon",
      desc: "Rychlý dotaz? Napiš nebo zavolej. Nemusíš čekat na schůzku.",
    },
    {
      icon: FolderOpen,
      title: "Sdílená složka",
      desc: "Google Drive nebo OneDrive — vše na jednom místě, přehledně a bezpečně.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-dark)] mb-3">
            Jak mi posíláš doklady
          </p>
          <h2 className="display text-3xl md:text-5xl">Klientská zóna</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {channels.map((ch) => (
            <div key={ch.title} className="card-warm p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-[var(--cream)] border border-[var(--gold)]/15 flex items-center justify-center mx-auto mb-5">
                <ch.icon className="w-6 h-6 text-[var(--gold-dark)]" />
              </div>
              <h3 className="font-medium mb-2">{ch.title}</h3>
              <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
                {ch.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="mailto:doklady@stunova.cz" className="btn-gold">
            <Mail className="w-4 h-4" /> doklady@stunova.cz
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   Contact
   ============================================ */
function Contact() {
  return (
    <section
      id="kontakt"
      className="py-20 px-6 scroll-mt-24"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.215 0.030 55) 0%, oklch(0.566 0.082 67.5) 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-light)] mb-3">
          Pojďme se potkat
        </p>
        <h2 className="display text-3xl md:text-5xl text-[var(--cream)] mb-6">
          Domluvíme si kafíčko?
        </h2>
        <p className="text-[var(--sand)] max-w-lg mx-auto mb-10">
          Napiš mi mail nebo zavolej. Ozveme se do 24 hodin a domluvíme
          první schůzku — nezávazně, bez poplatků.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="mailto:libuse@stunova.cz"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-[var(--gold)] text-[var(--ink)] hover:bg-[var(--gold-light)] transition"
          >
            <Mail className="w-4 h-4" /> libuse@stunova.cz
          </a>
          <a
            href="tel:+420728000000"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-[var(--gold)]/40 text-[var(--cream)] hover:bg-[var(--gold)]/10 transition"
          >
            <Phone className="w-4 h-4" /> +420 728 ••• •••
          </a>
        </div>

        <p className="text-xs text-[var(--sand)]/70">
          Praha 4 · Nusle · schůzky osobně i online
        </p>
      </div>
    </section>
  );
}

/* ============================================
   SiteFooter
   ============================================ */
function SiteFooter() {
  return (
    <footer
      className="py-10 px-6"
      style={{
        background: "oklch(0.215 0.030 55)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="logo-mark">
            <Image
              src={logoUrl}
              alt=""
              width={24}
              height={24}
              className="rounded-md object-cover"
            />
          </div>
          <span className="text-sm text-[var(--sand)]">
            © 2026 Libuše Stuňová
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm text-[var(--sand)]">
          <Link
            href="/prihlaseni"
            className="hover:text-[var(--cream)] transition"
          >
            Klientský portál
          </Link>
          <a
            href="mailto:libuse@stunova.cz"
            className="hover:text-[var(--cream)] transition"
          >
            Kontakt
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ============================================
   Page
   ============================================ */
export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <div className="hairline-x max-w-4xl mx-auto" />
        <Services />
        <div className="hairline-x max-w-4xl mx-auto" />
        <Process />
        <div className="hairline-x max-w-4xl mx-auto" />
        <About />
        <div className="hairline-x max-w-4xl mx-auto" />
        <ClientZone />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
