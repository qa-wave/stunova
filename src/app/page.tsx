import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Calculator,
  Users,
  ArrowRight,
  Coffee,
  FolderOpen,
  CheckCircle2,
  Shield,
  Clock,
  Camera,
  MessageCircle,
  Mail,
  CheckCircle,
  Cloud,
  Smartphone,
  Upload,
  FileText,
  Scan,
  Send,
} from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { ContactForm } from "@/components/ContactForm";
import { CookieConsent } from "@/components/CookieConsent";
import { CookieReset } from "@/components/CookieReset";
import { MobileCTA } from "@/components/MobileCTA";
import { FadeIn } from "@/components/FadeIn";
import { FAQ } from "@/components/FAQ";
import { PriceCalculator } from "@/components/Calculator";
import { BackToTop } from "@/components/BackToTop";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Newsletter } from "@/components/Newsletter";
import { BRAND, CONTACT } from "@/lib/constants";

const logoUrl = BRAND.logo;
const logoTransparentUrl = BRAND.logoTransparent;

/* ============================================
   Hero
   ============================================ */
function Hero() {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-32 md:pb-20 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Animated hero band */}
        <div className="relative aspect-[3/1] sm:aspect-[16/7] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 hero-band">
          {/* Animated gradient background */}
          <div className="absolute inset-0 hero-gradient" />
          {/* Light sweep */}
          <div className="absolute inset-0 hero-sweep" />
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {[...Array(12)].map((_, i) => (
              <span
                key={i}
                className="hero-particle"
                style={{
                  left: `${8 + (i * 7.5) % 85}%`,
                  animationDelay: `${i * 0.7}s`,
                  animationDuration: `${4 + (i % 3) * 2}s`,
                  width: `${3 + (i % 4)}px`,
                  height: `${3 + (i % 4)}px`,
                }}
              />
            ))}
          </div>
          {/* Transparent logo */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <Image
              src={logoTransparentUrl}
              alt="Libuše Stuňová · Účetnictví"
              width={320}
              height={244}
              sizes="(max-width: 640px) 70vw, (max-width: 1024px) 50vw, 320px"
              className="max-w-[75%] sm:max-w-[55%] h-auto drop-shadow-[0_4px_24px_oklch(0.566_0.082_67.5/0.3)]"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--cream)] border border-[var(--gold)]/20 mb-8">
            <span className="pulse-dot" />
            <span className="text-xs font-medium text-[var(--ink-soft)]">
              Mám volnou kapacitu · Praha 4
            </span>
          </div>

          <h1 className="display text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.15] mb-6">
            Účetnictví, u&nbsp;kterého se{" "}
            <span className="gold-grad">nestresuješ</span>.
          </h1>

          <p className="text-lg text-[var(--ink-soft)] max-w-xl mx-auto mb-8">
            Účetní jako parťák, ne jen servis ke konci roku. Potkáme se na
            kafíčku, probereme čísla a ty máš klid celý měsíc.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="#kontakt" className="btn-gold w-full sm:w-auto justify-center">
              Domluvit kafíčko <Coffee className="w-4 h-4" />
            </a>
            <a href="#sluzby" className="btn-soft w-full sm:w-auto justify-center">
              Co nabízím <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Stats inline — nad fold, animated */}
          <div className="flex justify-center gap-8 pt-8 border-t border-[var(--gold)]/15">
            {[
              { v: 14, suffix: "+", l: "let praxe" },
              { v: 23, suffix: "", l: "aktivních klientů" },
              { v: 0, suffix: "", l: "pokut od FÚ" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <p className="display text-2xl md:text-3xl gold-grad">
                  <AnimatedCounter value={s.v} suffix={s.suffix} />
                </p>
                <p className="text-xs uppercase tracking-wide text-[var(--ink-soft)] mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   Trust Bar
   ============================================ */
function TrustBar() {
  const items = [
    "14+ let praxe",
    "23 aktivních klientů",
    "Odpověď do 24 h",
    "Pojištění odpovědnosti",
    "GDPR v pořádku",
    "0 pokut za celou kariéru",
  ];
  return (
    <div className="py-6 px-6 overflow-x-auto">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-4 md:gap-8 min-w-max md:min-w-0">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-4 text-xs uppercase tracking-wide text-[var(--ink-soft)]">
            {i > 0 && <span className="w-1 h-1 rounded-full bg-[var(--gold)]" aria-hidden="true" />}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============================================
   Services — benefit-driven copy
   ============================================ */
const services = [
  {
    icon: BookOpen,
    title: "Klid v číslech",
    subtitle: "Vedení účetnictví",
    desc: "Měsíční zpracování od A do Z. Ty podnikáš, já se starám o daně, výkazy a kontrolní hlášení. Žádné překvapení v březnu.",
  },
  {
    icon: Calculator,
    title: "Jednoduchost",
    subtitle: "Daňová evidence",
    desc: "Pro OSVČ a menší firmy. Přehledná evidence, daňové přiznání, komunikace s FÚ. Vysvětlím ti to, dokud to nedává smysl.",
  },
  {
    icon: Users,
    title: "Každý měsíc v pořádku",
    subtitle: "Mzdy a personalistika",
    desc: "Výpočet mezd, odvody, roční zúčtování. Nástup i odchod zaměstnance — napíšu ti přesně, co máš udělat.",
  },
];

function Services() {
  return (
    <section id="sluzby" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="label-sm mb-3">Co pro tebe udělám</p>
          <h2 className="display text-3xl md:text-5xl">Služby</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <div className="card-warm p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-[var(--cream)] border border-[var(--gold)]/15 flex items-center justify-center mb-5">
                  <s.icon className="w-5 h-5 text-[var(--gold-dark)]" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-[var(--gold-dark)] mb-1">{s.subtitle}</p>
                <h3 className="display text-xl not-italic font-medium mb-3">{s.title}</h3>
                <p className="text-sm text-[var(--ink-soft)] leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#cenik" className="btn-soft">
            Zjistit ceny <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   Pricing — 3 balíčky
   ============================================ */
const plans = [
  {
    name: "OSVČ a živnostník",
    price: "od 2 500",
    desc: "Daňová evidence, daňové přiznání, komunikace s FÚ.",
    features: [
      "Evidence příjmů a výdajů",
      "Daňové přiznání 1× ročně",
      "Odpovědi na dotazy do 24h",
      "Měsíční kafíčko",
    ],
    highlight: false,
  },
  {
    name: "Malá s.r.o.",
    price: "od 5 000",
    desc: "Podvojné účetnictví, DPH, závěrky — o nic se nestaráš.",
    features: [
      "Podvojné účetnictví",
      "DPH a kontrolní hlášení",
      "Roční závěrka",
      "Mzdy (do 3 zaměstnanců)",
      "Odpovědi na dotazy do 24h",
      "Měsíční kafíčko",
    ],
    highlight: true,
  },
  {
    name: "Na míru",
    price: "Domluvíme se",
    desc: "Více zaměstnanců, složitější struktura, nebo jen potřebuješ poradit?",
    features: [
      "Rozšířené účetnictví",
      "Mzdy 4+ zaměstnanců",
      "Příprava podkladů pro audit",
      "Prioritní podpora",
    ],
    highlight: false,
  },
];

function Pricing() {
  return (
    <section id="cenik" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="label-sm mb-3">Kolik to stojí</p>
          <h2 className="display text-3xl md:text-5xl">
            Cena podle toho, co potřebuješ
          </h2>
          <p className="text-[var(--ink-soft)] mt-4 max-w-lg mx-auto">
            Neúčtuji paušál za věci, které neděláš. Domluvíme se na spolupráci, která odpovídá tvé firmě.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <div
                className={`card-warm p-8 h-full ${
                  plan.highlight
                    ? "border-2 border-[var(--gold)] md:scale-[1.03] relative"
                    : ""
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-[10px] uppercase tracking-widest bg-[var(--gold)] text-[var(--ink)] rounded-full font-medium">
                    Nejoblíbenější
                  </span>
                )}
                <p className="label-sm mb-2">{plan.name}</p>
                <p className="display text-3xl md:text-4xl gold-grad mb-2">
                  {plan.price.includes("od") ? (
                    <><span className="text-lg not-italic">od </span>{plan.price.replace("od ", "")} Kč<span className="text-lg not-italic"> / měs.</span></>
                  ) : (
                    plan.price
                  )}
                </p>
                <p className="text-sm text-[var(--ink-soft)] mb-6">{plan.desc}</p>

                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-[var(--gold-dark)] mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  className={`w-full justify-center ${plan.highlight ? "btn-gold" : "btn-soft"}`}
                >
                  {plan.name === "Na míru" ? "Domluvit kafíčko" : "Zjistit víc"}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="text-center text-xs text-[var(--ink-soft)] mt-8 mb-12">
          Ceny jsou orientační bez DPH. Přesnou nabídku ti dám po prvním kafíčku.
        </p>

        {/* Calculator */}
        <div className="max-w-lg mx-auto">
          <FadeIn>
            <PriceCalculator />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   Process
   ============================================ */
const steps = [
  { num: "01", title: "Kafíčko", desc: "Potkáme se — osobně nebo online. Půl hoďky, zdarma. Povíš mi, co máš, já ti řeknu, jak to bude fungovat.", icon: Coffee },
  { num: "02", title: "Nastavíme systém", desc: "Založím ti sdílenou složku, napojím se na banku, domluvíme jak posílat doklady.", icon: FolderOpen },
  { num: "03", title: "Běžíme", desc: "Každý měsíc zpracuji účetnictví, podám přiznání, pošlu ti report. Ty máš klid.", icon: CheckCircle2 },
  { num: "04", title: "Jsem dostupná", desc: "Pravidelná kafíčka, rychlé odpovědi, proaktivní upozornění na termíny. Nemusíš na nic myslet.", icon: Shield },
];

function Process() {
  return (
    <section id="proces" className="py-20 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="label-sm mb-3">Bez stresu, krok za krokem</p>
          <h2 className="display text-3xl md:text-5xl">Jak to chodí</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <FadeIn key={s.num} delay={i * 0.1} className="relative">
              <div className="card-warm p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="display text-3xl gold-grad not-italic">{s.num}</span>
                  <s.icon className="w-5 h-5 text-[var(--gold-dark)]" />
                </div>
                <h3 className="font-medium mb-2">{s.title}</h3>
                <p className="text-sm text-[var(--ink-soft)] leading-relaxed">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-[var(--gold)]/30" />
              )}
            </FadeIn>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#kontakt" className="btn-gold">
            Začneme prvním kafíčkem <Coffee className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   Dark Island — Testimonials
   ============================================ */
function Testimonials() {
  return (
    <section className="py-28 px-6" style={{ background: "oklch(0.215 0.030 55)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.15em] text-[var(--gold)] mb-3">Reference</p>
          <h2 className="display text-3xl md:text-5xl text-[var(--cream)]">Slovo mých klientů</h2>
        </div>
        <TestimonialCarousel />
      </div>
    </section>
  );
}

/* ============================================
   About
   ============================================ */
function About() {
  return (
    <section id="o-mne" className="py-28 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="card-warm p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-48 h-64 md:w-full md:h-72 rounded-3xl overflow-hidden border-2 border-[var(--gold)]/20 bg-gradient-to-br from-[var(--cream)] to-[var(--sand)] flex items-center justify-center">
              <span className="display text-7xl gold-grad">LS</span>
            </div>
          </div>
          <div>
            <p className="label-sm mb-3">O mně</p>
            <h2 className="display text-3xl md:text-4xl mb-4">Libuše Stuňová</h2>
            <p className="text-[var(--ink-soft)] leading-relaxed mb-4">
              Účetnictví dělám přes 14 let. Začínala jsem v korporátu, ale zjistila jsem, že mě baví pracovat s malými firmami a OSVČ — kde vidím přímý dopad své práce a kde se lidi nebojí zeptat „a proč?".
            </p>
            <p className="text-[var(--ink-soft)] leading-relaxed mb-6">
              Sídlím v Praze 4 (Nusle). Většinu agendy řeším online, na kafíčku se potkáváme jednou měsíčně. A pokud potřebuješ něco rychle — stačí napsat, odpovím do 24 hodin.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Clock, text: "Odpovídám do 24h" },
                { icon: Shield, text: "14+ let praxe" },
                { icon: Users, text: "23 aktivních klientů" },
              ].map((tag) => (
                <span
                  key={tag.text}
                  className="text-xs px-3 py-2 rounded-full bg-[var(--cream)] border border-[var(--gold)]/15 text-[var(--ink-soft)]"
                >
                  <tag.icon className="w-3 h-3 inline mr-1" aria-hidden="true" /> {tag.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   FAQ Section
   ============================================ */
function FAQSection() {
  return (
    <section id="faq" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="label-sm mb-3">Časté dotazy</p>
          <h2 className="display text-3xl md:text-5xl">Máš otázky? To je dobře.</h2>
          <p className="text-[var(--ink-soft)] mt-4">Tady jsou ty nejčastější. Nezodpovězené? Napiš mi.</p>
        </div>
        <FAQ />

        {/* Newsletter */}
        <div className="mt-16">
          <Newsletter />
        </div>
      </div>
    </section>
  );
}

/* ============================================
   ClientZone — všechny kanály pro doklady
   ============================================ */
const primaryChannels = [
  { icon: Camera, title: "Fotka z mobilu", desc: "Vyfoť doklad a pošli mailem, WhatsAppem nebo přes iMessage. Stačí fotka — zbytek řeším já." },
  { icon: Mail, title: "E-mail", desc: "Přepošli fakturu nebo naskenovaný doklad přímo na doklady@stunova.cz. Nejjednodušší cesta." },
  { icon: MessageCircle, title: "WhatsApp", desc: "Pošli fotku dokladu nebo se na cokoliv zeptej. Odpovím většinou do pár hodin." },
];

const cloudChannels = [
  { icon: FolderOpen, title: "Google Drive", desc: "Sdílená složka — nahraj doklady kdykoliv, já si je vyzvednu." },
  { icon: Cloud, title: "Dropbox", desc: "Sdílený Dropbox folder pro pravidelné posílání dokladů." },
  { icon: Cloud, title: "iCloud Drive", desc: "Pro uživatele Apple — sdílená složka přímo z Finderu nebo Files." },
  { icon: FolderOpen, title: "OneDrive", desc: "Sdílený OneDrive folder — ideální pro firmy na Microsoft 365." },
];

const otherChannels = [
  { icon: Scan, title: "Sken / PDF", desc: "Naskenovaný doklad v PDF — pošli mailem nebo nahraj do sdílené složky." },
  { icon: Smartphone, title: "iMessage / SMS", desc: "Pošli fotku přes iMessage nebo MMS — zpracuji to stejně." },
  { icon: Upload, title: "Klientský portál", desc: "Po přihlášení můžeš nahrát doklady přímo do svého portálu (připravujeme)." },
  { icon: FileText, title: "Datová schránka", desc: "Doklady z datovky zpracuji automaticky — stačí mi dát přístup." },
  { icon: Send, title: "Telegram / Signal", desc: "Preferuješ šifrovanou komunikaci? Pošli doklad přes Telegram nebo Signal." },
];

function ClientZone() {
  return (
    <section id="klientska-zona" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="label-sm mb-3">Jak mi posíláš doklady</p>
          <h2 className="display text-3xl md:text-5xl">Klientská zóna</h2>
          <p className="text-[var(--ink-soft)] mt-4 max-w-lg mx-auto">
            Jak ti to vyhovuje. Fotka, e-mail, sdílená složka — vyber si kanál a doklady zpracuji.
          </p>
        </div>

        {/* Primary — 3 hlavní kanály */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {primaryChannels.map((ch, i) => (
            <FadeIn key={ch.title} delay={i * 0.1} className="card-warm p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-[var(--cream)] border border-[var(--gold)]/15 flex items-center justify-center mx-auto mb-5">
                <ch.icon className="w-6 h-6 text-[var(--gold-dark)]" />
              </div>
              <h3 className="font-medium mb-2">{ch.title}</h3>
              <p className="text-sm text-[var(--ink-soft)] leading-relaxed">{ch.desc}</p>
            </FadeIn>
          ))}
        </div>

        {/* Cloud services */}
        <div className="mb-8">
          <p className="label-sm mb-4 text-center">Cloudová úložiště</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cloudChannels.map((ch, i) => (
              <FadeIn key={ch.title} delay={i * 0.05}>
                <div className="card-warm p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--cream)] border border-[var(--gold)]/15 flex items-center justify-center shrink-0">
                    <ch.icon className="w-4 h-4 text-[var(--gold-dark)]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">{ch.title}</h4>
                    <p className="text-xs text-[var(--ink-soft)] leading-relaxed">{ch.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Other channels */}
        <div className="mb-10">
          <p className="label-sm mb-4 text-center">Další možnosti</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherChannels.map((ch, i) => (
              <FadeIn key={ch.title} delay={i * 0.05}>
                <div className="card-warm p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--cream)] border border-[var(--gold)]/15 flex items-center justify-center shrink-0">
                    <ch.icon className="w-4 h-4 text-[var(--gold-dark)]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">{ch.title}</h4>
                    <p className="text-xs text-[var(--ink-soft)] leading-relaxed">{ch.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a href={`mailto:${CONTACT.dokladyEmail}`} className="btn-gold">
            <Mail className="w-4 h-4" /> {CONTACT.dokladyEmail}
          </a>
          <p className="text-xs text-[var(--ink-soft)] mt-3">
            Nevíš, co ti sedí nejlíp? Domluvíme se na kafíčku.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   Mid-page CTA Banner
   ============================================ */
function CTABanner() {
  return (
    <section className="py-16 px-6" style={{ background: "var(--deep-brown)" }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="display text-2xl md:text-4xl text-[var(--cream)] mb-4">
          Tak co, dáme to kafíčko?
        </h2>
        <p className="text-[var(--sand)] mb-8">
          Půl hoďky, online nebo v Praze 4, zdarma. Povíš mi, co potřebuješ, a já ti řeknu, jak to bude fungovat.
        </p>
        <a href="#kontakt" className="btn-gold">
          Domluvit kafíčko <Coffee className="w-4 h-4" />
        </a>
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
        background: "linear-gradient(135deg, oklch(0.215 0.030 55) 0%, oklch(0.566 0.082 67.5) 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.15em] text-[var(--gold-light)] mb-3">Pojďme se potkat</p>
          <h2 className="display text-3xl md:text-5xl text-[var(--cream)] mb-6">Domluvíme si kafíčko?</h2>
          <p className="text-[var(--sand)] max-w-lg mx-auto">
            Vyplň formulář nebo napiš přímo. Ozveme se do 24 hodin a domluvíme první schůzku — nezávazně, bez poplatků.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

/* ============================================
   SiteFooter
   ============================================ */
function SiteFooter() {
  return (
    <footer className="py-10 px-6" style={{ background: "oklch(0.215 0.030 55)" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="logo-mark">
            <Image src={logoUrl} alt="" width={24} height={24} sizes="24px" className="rounded-md object-cover" />
          </div>
          <span className="text-sm text-[var(--sand)]">© 2026 Libuše Stuňová</span>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/blog" className="py-2 text-[var(--sand)] hover:text-[var(--cream)] transition">
            Blog
          </Link>
          <Link href="/prihlaseni" className="py-2 text-[var(--sand)] hover:text-[var(--cream)] transition">
            Klientský portál
          </Link>
          <a href={`mailto:${CONTACT.email}`} className="py-2 text-[var(--sand)] hover:text-[var(--cream)] transition">
            Kontakt
          </a>
          <Link href="/ochrana-udaju" className="py-2 text-[var(--sand)] hover:text-[var(--cream)] transition">
            Ochrana údajů
          </Link>
          <CookieReset />
        </div>
      </div>
    </footer>
  );
}

/* ============================================
   Page — Server Component
   ============================================ */
export default function Page() {
  return (
    <>
      <SiteNav />
      <main id="main">
        <Hero />
        <TrustBar />
        <div className="hairline-x max-w-4xl mx-auto" />
        <Services />
        <div className="hairline-x max-w-4xl mx-auto" />
        <Pricing />
        <div className="hairline-x max-w-4xl mx-auto" />
        <Process />
        <Testimonials />
        <About />
        <div className="hairline-x max-w-4xl mx-auto" />
        <FAQSection />
        <ClientZone />
        <CTABanner />
        <Contact />
      </main>
      <SiteFooter />
      <CookieConsent />
      <MobileCTA />
      <BackToTop />
    </>
  );
}
