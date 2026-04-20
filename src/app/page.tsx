"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  CountUp,
  GlowOrb,
  GridPattern,
  ParticleField,
} from "@/components/shared/animations";
import { ChatWidget } from "@/components/shared/chat-widget";
import { HeroBanner } from "@/components/shared/hero-banner";
import { StyledHero } from "@/components/shared/styled-hero";
import { ThemeSwitcher } from "@/components/shared/theme-switcher";
import { VisualStyleProvider, StyleSwitcherBar, useVisualStyle } from "@/components/shared/style-switcher";
import { StyledSections } from "@/components/shared/styled-sections";
import {
  BookOpen,
  Calculator,
  TrendingUp,
  Shield,
  Handshake,
  BarChart3,
  ArrowRight,
  FileText,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  MessageSquare,
  Cloud,
  CheckCircle2,
  Star,
  Sparkles,
  Zap,
  Globe,
  Clock,
  Lock,
  Users,
  Quote,
  ChevronRight,
  ArrowUpRight,
  Printer,
  Smartphone,
  QrCode,
  Send,
  Upload,
  Camera,
  Calendar,
  Download,
} from "lucide-react";
import { useState, useRef } from "react";

/* ──────────────────────────── DATA ──────────────────────────── */

const services = [
  {
    icon: BookOpen,
    title: "Vedení účetnictví",
    desc: "Kompletní účetnictví online — od prvotních dokladů až po roční závěrku. Ušetříte náklady i čas.",
    features: ["Podvojné účetnictví", "Měsíční reporting", "Roční závěrka"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Calculator,
    title: "Daňová evidence",
    desc: "Pro OSVČ a živnostníky. Zajistíme vše od evidence příjmů a výdajů po podání přiznání.",
    features: ["Evidence příjmů/výdajů", "DPH přiznání", "Komunikace s FÚ"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: TrendingUp,
    title: "Implementace ERP",
    desc: "Pomůžeme s výběrem, nasazením a migrací dat do ABRA Flexi. Od analýzy po ostrý provoz.",
    features: ["Analýza procesů", "Migrace dat", "Školení uživatelů"],
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Shield,
    title: "Daňové poradenství",
    desc: "Optimalizace daňového zatížení v rámci zákona. Daň z příjmů, DPH, silniční, z nemovitostí.",
    features: ["Daňová optimalizace", "Zastupování na FÚ", "Kontroly a audity"],
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: BarChart3,
    title: "Finanční optimalizace",
    desc: "Analýza cash-flow, optimalizace nákladů a zprostředkování financování pro váš růst.",
    features: ["Cash-flow analýza", "Řízení pohledávek", "Financování rozvoje"],
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: Handshake,
    title: "Finanční poradenství",
    desc: "Nezávislý pohled na zdraví vaší firmy. Finanční analýza, benchmarking, strategické plánování.",
    features: ["Finanční analýza", "Benchmarking", "Strategický plán"],
    color: "from-cyan-500 to-sky-600",
  },
];

const process_steps = [
  { num: "01", title: "Úvodní konzultace", desc: "Seznámíme se s vaší firmou, procesy a potřebami. Zdarma a nezávazně.", icon: Users },
  { num: "02", title: "Návrh řešení", desc: "Připravíme řešení na míru — rozsah služeb, cenu a harmonogram.", icon: BarChart3 },
  { num: "03", title: "Převzetí agendy", desc: "Bezproblémově převezmeme účetnictví. Postaráme se o vše.", icon: BookOpen },
  { num: "04", title: "Průběžný servis", desc: "Měsíční reporting, pravidelná komunikace, vždy dostupný tým.", icon: Clock },
];

const testimonials = [
  {
    text: "Přechod na Fedic Finance byl to nejlepší rozhodnutí roku. Konečně mám přehled o financích firmy v reálném čase.",
    author: "Martin K.",
    role: "CEO, technologická firma",
    rating: 5,
  },
  {
    text: "Profesionální přístup, rychlé reakce a hlavně — žádné nepříjemné překvapení u daní. Doporučuji každému.",
    author: "Jana S.",
    role: "Majitelka e-shopu",
    rating: 5,
  },
  {
    text: "Implementace ABRA Flexi proběhla hladce. Tým Fedic Finance nás provedl celým procesem a ušetřil nám měsíce práce.",
    author: "Petr D.",
    role: "Finanční ředitel, výrobní firma",
    rating: 5,
  },
];

const advantages = [
  { icon: Zap, title: "Vše 100% online", desc: "Žádné papíry, žádné dojíždění. Vše řešíme digitálně v cloudu." },
  { icon: Lock, title: "Bezpečnost dat", desc: "Vaše data jsou šifrovaná a zálohovaná. GDPR je samozřejmost." },
  { icon: Clock, title: "Úspora 40% nákladů", desc: "Outsourcing účetnictví je výrazně levnější než vlastní účetní." },
  { icon: MessageSquare, title: "Komunikace přes Slack", desc: "Rychlé odpovědi, žádné čekání na telefonu. Real-time chat." },
  { icon: Globe, title: "Moderní technologie", desc: "ABRA Flexi s AI, cloudové dokumenty, online podepisování." },
  { icon: Shield, title: "Žádné platby předem", desc: "Platíte až po odvedení práce. Žádné zálohy, žádné riziko." },
];

const channels = [
  { icon: Upload, title: "Drag & Drop", desc: "Přetáhněte doklady přímo do klientského portálu.", color: "from-blue-500 to-indigo-600" },
  { icon: Mail, title: "Email", desc: "Pošlete doklady emailem — automaticky se přiřadí k vám.", color: "from-emerald-500 to-teal-600" },
  { icon: Camera, title: "Foto mobilem", desc: "Vyfoťte účtenku a nahrajte přes portál. OCR rozpoznání.", color: "from-violet-500 to-purple-600" },
  { icon: MessageSquare, title: "Slack", desc: "Pošlete doklad do sdíleného Slack kanálu.", color: "from-pink-500 to-rose-600" },
  { icon: Globe, title: "Portál 24/7", desc: "Přehledy a reporty vždy dostupné ke stažení.", color: "from-amber-500 to-orange-600" },
  { icon: Send, title: "Datová schránka", desc: "Automatický příjem i odesílání přes ISDS.", color: "from-cyan-500 to-sky-600" },
  { icon: Calendar, title: "Pravidelné reporty", desc: "Nastavte si automatické zasílání výkazů.", color: "from-green-500 to-emerald-600" },
  { icon: Download, title: "Export", desc: "PDF, XLSX, CSV, ISDOC — vše ke stažení.", color: "from-gray-600 to-gray-700" },
];

/* ──────────────────────────── COMPONENT ──────────────────────── */

export default function HomePage() {
  return (
    <VisualStyleProvider>
      <HomePageInner />
    </VisualStyleProvider>
  );
}

function HomePageInner() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { style } = useVisualStyle();
  const isDarkHero = style === "dark" || style === "neon" || style === "gradient" || style === "aurora" || style === "ocean";
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* ═══ NAVIGATION ═══ */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        className="sticky top-0 z-50 border-b bg-background/60 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="Fedic Finance" width={40} height={40} className="rounded-xl shadow-sm" />
            <div className="hidden sm:block">
              <p className="text-sm font-bold tracking-tight">Fedic Finance</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Group s.r.o.</p>
            </div>
          </div>

          <nav className="hidden items-center gap-1 lg:flex">
            {[
              { label: "Služby", href: "#sluzby" },
              { label: "Doručování", href: "#dorucovani" },
              { label: "Jak to funguje", href: "#proces" },
              { label: "Výhody", href: "#vyhody" },
              { label: "Reference", href: "#reference" },
              { label: "Kontakt", href: "#kontakt" },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                <Shield className="mr-2 h-4 w-4" />
                Administrace
              </Button>
            </Link>
            <Link href="/login">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="shadow-lg shadow-primary/20">
                  Klientská zóna
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </Link>
            <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${mobileMenuOpen ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="border-t bg-background px-4 py-3 lg:hidden">
            {["Služby", "Doručování", "Jak to funguje", "Výhody", "Reference", "Kontakt"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`} onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">{item}</a>
            ))}
          </motion.div>
        )}
      </motion.header>

      {/* ═══ STYLE SWITCHER ═══ */}
      <div className="border-b bg-muted/30">
        <StyleSwitcherBar />
      </div>

      {/* ═══ HERO ═══ */}
      <StyledHero style={style} heroRef={heroRef} />

      {/* ═══ ALL STYLED SECTIONS ═══ */}
      <StyledSections
        style={style}
        services={services}
        channels={channels}
        processSteps={process_steps}
        advantages={advantages}
        testimonials={testimonials}
      />

      {/* ═══ WIDGETS ═══ */}
      <ThemeSwitcher />
      <ChatWidget />
    </div>
  );
}
