"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  ArrowRight,
  Star,
  Quote,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/animations";
import type { VisualStyleId } from "./style-switcher";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Types
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

interface StyledSectionsProps {
  style: VisualStyleId;
  services: { icon: LucideIcon; title: string; desc: string; features: string[]; color: string }[];
  channels: { icon: LucideIcon; title: string; desc: string; color: string }[];
  processSteps: { num: string; title: string; desc: string; icon: LucideIcon }[];
  advantages: { icon: LucideIcon; title: string; desc: string }[];
  testimonials: { text: string; author: string; role: string; rating: number }[];
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Shared helpers
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const SERVICE_OPTIONS = [
  "Vedení účetnictví",
  "Daňové poradenství",
  "Mzdová agenda",
  "ERP implementace",
  "Finanční analýzy",
  "Jiné",
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

function WaveSvg({ color = "currentColor", className = "" }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 1440 120" fill="none" className={className} preserveAspectRatio="none">
      <path
        d="M0,64 C360,120 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,120 L0,120Z"
        fill={color}
      />
    </svg>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CLASSIC
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function ClassicSections({ services, channels, processSteps, advantages, testimonials }: Omit<StyledSectionsProps, "style">) {
  return (
    <>
      {/* Services */}
      <section id="sluzby" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Naše služby</h2>
              <p className="mx-auto max-w-2xl text-gray-600">Kompletní účetní a finanční servis pro vaše podnikání</p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <StaggerItem key={i}>
                <div className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className={`mb-6 inline-flex rounded-xl p-3 ${s.color}`}>
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">{s.title}</h3>
                  <p className="mb-4 text-gray-600">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Channels */}
      <section id="dorucovani" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Způsoby doručování</h2>
              <p className="mx-auto max-w-2xl text-gray-600">Dokumenty doručíme tak, jak vám to vyhovuje</p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((ch, i) => (
              <StaggerItem key={i}>
                <div className="flex items-center gap-4 rounded-lg border border-gray-100 bg-gray-50 p-5 transition-all hover:border-blue-200 hover:bg-blue-50/30">
                  <div className={`rounded-lg p-2.5 ${ch.color}`}>
                    <ch.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{ch.title}</h4>
                    <p className="text-sm text-gray-500">{ch.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process — zigzag */}
      <section id="proces" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Jak to funguje</h2>
              <p className="mx-auto max-w-2xl text-gray-600">Jednoduchý proces od prvního kontaktu po spolehlivý servis</p>
            </div>
          </FadeIn>
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 md:block" />
            <div className="space-y-12 md:space-y-0">
              {processSteps.map((step, i) => (
                <FadeIn key={i} delay={i * 0.15} direction={i % 2 === 0 ? "left" : "right"}>
                  <div className={`relative flex flex-col gap-6 py-8 md:flex-row md:items-center ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                    <div className="flex-1 md:text-right">
                      {i % 2 === 0 && (
                        <div className="rounded-xl bg-white p-6 shadow-sm md:ml-auto md:max-w-sm">
                          <div className="mb-2 text-sm font-bold text-blue-600">Krok {step.num}</div>
                          <h4 className="mb-2 text-lg font-semibold text-gray-900">{step.title}</h4>
                          <p className="text-gray-600">{step.desc}</p>
                        </div>
                      )}
                    </div>
                    <div className="relative z-10 mx-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white shadow-lg md:mx-0">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      {i % 2 !== 0 && (
                        <div className="rounded-xl bg-white p-6 shadow-sm md:mr-auto md:max-w-sm">
                          <div className="mb-2 text-sm font-bold text-blue-600">Krok {step.num}</div>
                          <h4 className="mb-2 text-lg font-semibold text-gray-900">{step.title}</h4>
                          <p className="text-gray-600">{step.desc}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages — 3x2 icon left */}
      <section id="vyhody" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Proč Fedic Finance</h2>
              <p className="mx-auto max-w-2xl text-gray-600">Co nás odlišuje od ostatních</p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a, i) => (
              <StaggerItem key={i}>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <a.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900">{a.title}</h4>
                    <p className="text-sm text-gray-600">{a.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials — 3 cols */}
      <section id="reference" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Reference klientů</h2>
            </div>
          </FadeIn>
          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <div className="rounded-xl bg-white p-8 shadow-sm">
                  <Quote className="mb-4 h-8 w-8 text-blue-200" />
                  <p className="mb-6 text-gray-700">{t.text}</p>
                  <Stars count={t.rating} />
                  <div className="mt-4 border-t pt-4">
                    <div className="font-semibold text-gray-900">{t.author}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-16 text-center shadow-2xl md:px-16">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Začněte s námi ještě dnes</h2>
              <p className="mb-8 text-lg text-blue-100">Nezávazná konzultace zdarma. Zjistěte, kolik můžete ušetřit.</p>
              <Link href="#kontakt">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  Nezávazná konzultace <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Kontaktujte nás</h2>
            </div>
          </FadeIn>
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="space-y-8">
                <div>
                  <h3 className="mb-6 text-xl font-semibold text-gray-900">Kontaktní údaje</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Mail className="h-5 w-5 text-blue-600" /> info@fedicfinance.com
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Phone className="h-5 w-5 text-blue-600" /> +420 777 888 999
                    </div>
                    <div className="flex items-start gap-3 text-gray-700">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                      <div>
                        <div>Kancelář Praha — Vodičkova 30, Praha 1</div>
                        <div>Kancelář Most — Třída Budovatelů 2830, Most</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <form className="space-y-4 rounded-xl bg-gray-50 p-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input type="text" placeholder="Jméno" className="rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
                  <input type="text" placeholder="Firma" className="rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
                </div>
                <input type="email" placeholder="E-mail" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
                <select className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
                  <option value="">Vyberte službu</option>
                  {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                <textarea placeholder="Vaše zpráva" rows={4} className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
                <Button className="w-full" size="lg">
                  Odeslat zprávu <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16 text-gray-400">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Image src="/logo.jpg" alt="Fedic Finance" width={40} height={40} className="rounded-full" />
                <span className="text-lg font-semibold text-white">Fedic Finance</span>
              </div>
              <p className="text-sm">Vaše účetnictví, naše starost. Profesionální finanční služby od roku 1993.</p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Služby</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#sluzby" className="hover:text-white transition-colors">Vedení účetnictví</Link></li>
                <li><Link href="#sluzby" className="hover:text-white transition-colors">Daňové poradenství</Link></li>
                <li><Link href="#sluzby" className="hover:text-white transition-colors">Mzdová agenda</Link></li>
                <li><Link href="#sluzby" className="hover:text-white transition-colors">ERP implementace</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Kontakt</h4>
              <ul className="space-y-2 text-sm">
                <li>info@fedicfinance.com</li>
                <li>+420 777 888 999</li>
                <li>Praha &amp; Most</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Rychlé odkazy</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/login" className="hover:text-white transition-colors">Klientská zóna</Link></li>
                <li><Link href="#reference" className="hover:text-white transition-colors">Reference</Link></li>
                <li><Link href="#kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
            &copy; {new Date().getFullYear()} Fedic Finance Group s.r.o. Všechna práva vyhrazena.
          </div>
        </div>
      </footer>
    </>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   GRADIENT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function GradientSections({ services, channels, processSteps, advantages, testimonials }: Omit<StyledSectionsProps, "style">) {
  return (
    <>
      {/* Services — 2-col large cards */}
      <section id="sluzby" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="mb-16 text-center">
              <span className="mb-2 inline-block bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-sm font-semibold uppercase tracking-widest text-transparent">Naše služby</span>
              <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">Co pro vás děláme</h2>
            </div>
          </FadeIn>
          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            {services.map((s, i) => (
              <StaggerItem key={i}>
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 transition-all hover:shadow-xl">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-400/20 to-pink-400/20 blur-2xl transition-all group-hover:scale-150" />
                  <s.icon className="relative mb-6 h-16 w-16 text-indigo-600" />
                  <h3 className="relative mb-3 text-2xl font-bold text-gray-900">{s.title}</h3>
                  <p className="relative mb-6 text-gray-600">{s.desc}</p>
                  <ul className="relative space-y-2">
                    {s.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                        <Sparkles className="h-3.5 w-3.5 text-purple-500" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Channels — horizontal scroll carousel */}
      <section id="dorucovani" className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Způsoby doručování</h2>
            </div>
          </FadeIn>
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {channels.map((ch, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex min-w-[280px] snap-center flex-col items-center gap-4 rounded-2xl bg-white p-8 shadow-sm">
                  <div className={`rounded-xl p-4 ${ch.color}`}>
                    <ch.icon className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold text-gray-900">{ch.title}</h4>
                  <p className="text-center text-sm text-gray-500">{ch.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process — horizontal timeline */}
      <section id="proces" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Náš proces</h2>
            </div>
          </FadeIn>
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 md:block" />
            <div className="grid gap-8 md:grid-cols-4">
              {processSteps.map((step, i) => (
                <FadeIn key={i} delay={i * 0.15}>
                  <div className="relative text-center">
                    <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 text-xl font-bold text-white shadow-lg">
                      {step.num}
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-gray-900">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages — single column full-width */}
      <section id="vyhody" className="bg-gradient-to-b from-white to-indigo-50 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Proč si vybrat nás</h2>
            </div>
          </FadeIn>
          <div className="space-y-8">
            {advantages.map((a, i) => (
              <FadeIn key={i} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="flex items-center gap-8 rounded-2xl bg-white p-8 shadow-sm">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                    <a.icon className="h-10 w-10" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-bold text-gray-900">{a.title}</h4>
                    <p className="text-gray-600">{a.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — 1 featured + 2 small */}
      <section id="reference" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Co říkají klienti</h2>
            </div>
          </FadeIn>
          <div className="grid gap-8 lg:grid-cols-2">
            {testimonials[0] && (
              <FadeIn>
                <div className="flex h-full flex-col justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 p-10 text-white shadow-2xl">
                  <Quote className="mb-6 h-12 w-12 text-white/30" />
                  <p className="mb-8 text-xl leading-relaxed">{testimonials[0].text}</p>
                  <Stars count={testimonials[0].rating} />
                  <div className="mt-4">
                    <div className="text-lg font-semibold">{testimonials[0].author}</div>
                    <div className="text-indigo-200">{testimonials[0].role}</div>
                  </div>
                </div>
              </FadeIn>
            )}
            <div className="grid gap-8">
              {testimonials.slice(1, 3).map((t, i) => (
                <FadeIn key={i} delay={0.2 + i * 0.1}>
                  <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                    <p className="mb-4 text-gray-700">{t.text}</p>
                    <Stars count={t.rating} />
                    <div className="mt-3">
                      <div className="font-semibold text-gray-900">{t.author}</div>
                      <div className="text-sm text-gray-500">{t.role}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">Připraveni začít?</h2>
            <p className="mb-8 text-lg text-white/80">Konzultace zdarma, bez závazků, s konkrétními výsledky.</p>
            <Link href="#kontakt">
              <Button size="lg" className="bg-white text-indigo-700 hover:bg-white/90">
                Domluvit schůzku <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Contact — centered form, info icons above */}
      <section id="kontakt" className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">Kontaktujte nás</h2>
              <div className="mb-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-indigo-500" /> info@fedicfinance.com</div>
                <div className="flex items-center gap-2"><Phone className="h-5 w-5 text-indigo-500" /> +420 777 888 999</div>
                <div className="flex items-center gap-2"><MapPin className="h-5 w-5 text-indigo-500" /> Praha &amp; Most</div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="Jméno" className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" />
                <input type="text" placeholder="Firma" className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" />
              </div>
              <input type="email" placeholder="E-mail" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" />
              <select className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20">
                <option value="">Vyberte službu</option>
                {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
              <textarea placeholder="Vaše zpráva" rows={4} className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" />
              <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600" size="lg">
                Odeslat <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* Footer — centered minimal */}
      <footer className="bg-gray-950 py-12 text-gray-400">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <Image src="/logo.jpg" alt="Fedic Finance" width={36} height={36} className="rounded-full" />
            <span className="text-lg font-semibold text-white">Fedic Finance</span>
          </div>
          <div className="mb-6 flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link href="#sluzby" className="hover:text-white transition-colors">Služby</Link>
            <Link href="#reference" className="hover:text-white transition-colors">Reference</Link>
            <Link href="#kontakt" className="hover:text-white transition-colors">Kontakt</Link>
            <Link href="/login" className="hover:text-white transition-colors">Klientská zóna</Link>
          </div>
          <p className="text-sm">info@fedicfinance.com &middot; +420 777 888 999 &middot; Praha &amp; Most</p>
          <div className="mt-6 border-t border-gray-800 pt-6 text-xs">
            &copy; {new Date().getFullYear()} Fedic Finance Group s.r.o. Všechna práva vyhrazena.
          </div>
        </div>
      </footer>
    </>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   GLASS
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function GlassSections({ services, channels, processSteps, advantages, testimonials }: Omit<StyledSectionsProps, "style">) {
  const glass = "backdrop-blur-xl bg-white/40 border border-white/20 shadow-lg";
  return (
    <>
      {/* Services — frosted glass cards */}
      <section id="sluzby" className="relative bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Naše služby</h2>
              <p className="mx-auto max-w-2xl text-gray-600">Transparentní a přehledný finanční servis</p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <StaggerItem key={i}>
                <div className={`rounded-2xl p-8 transition-all hover:bg-white/60 hover:shadow-xl ${glass}`}>
                  <div className={`mb-6 inline-flex rounded-xl p-3 ${s.color}`}>
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">{s.title}</h3>
                  <p className="mb-4 text-gray-600">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Channels — 2 rows of 4, glass */}
      <section id="dorucovani" className="relative bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Doručování dokumentů</h2>
            </div>
          </FadeIn>
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((ch, i) => (
              <StaggerItem key={i}>
                <div className={`rounded-xl p-6 text-center transition-all hover:bg-white/60 ${glass}`}>
                  <div className={`mx-auto mb-4 inline-flex rounded-lg p-3 ${ch.color}`}>
                    <ch.icon className="h-5 w-5" />
                  </div>
                  <h4 className="mb-1 font-medium text-gray-900">{ch.title}</h4>
                  <p className="text-sm text-gray-500">{ch.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process — vertical stepper with glass cards on right */}
      <section id="proces" className="relative bg-gradient-to-b from-cyan-50 to-blue-100 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Proces spolupráce</h2>
            </div>
          </FadeIn>
          <div className="relative space-y-8">
            <div className="absolute bottom-0 left-7 top-0 w-px bg-gradient-to-b from-indigo-300 to-purple-300" />
            {processSteps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.15} direction="left">
                <div className="relative flex gap-8">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-lg font-bold text-white shadow-lg">
                    {step.num}
                  </div>
                  <div className={`flex-1 rounded-2xl p-6 ${glass}`}>
                    <h4 className="mb-2 text-lg font-semibold text-gray-900">{step.title}</h4>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages — bento grid */}
      <section id="vyhody" className="relative bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Naše výhody</h2>
            </div>
          </FadeIn>
          <div className="grid gap-4 md:grid-cols-3">
            {advantages.map((a, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={`rounded-2xl p-8 transition-all hover:bg-white/60 ${glass} ${i === 0 || i === 5 ? "md:col-span-2" : ""}`}>
                  <a.icon className="mb-4 h-8 w-8 text-indigo-600" />
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">{a.title}</h4>
                  <p className="text-gray-600">{a.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — overlapping stacked */}
      <section id="reference" className="relative bg-gradient-to-b from-purple-100 to-blue-100 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Reference</h2>
            </div>
          </FadeIn>
          <div className="relative space-y-6">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className={`rounded-2xl p-8 ${glass}`} style={{ marginLeft: `${i * 2}rem`, maxWidth: "calc(100% - " + i * 2 + "rem)" }}>
                  <Quote className="mb-4 h-6 w-6 text-indigo-400" />
                  <p className="mb-4 text-gray-700">{t.text}</p>
                  <Stars count={t.rating} />
                  <div className="mt-3">
                    <span className="font-semibold text-gray-900">{t.author}</span>
                    <span className="ml-2 text-sm text-gray-500">&mdash; {t.role}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — glass card centered */}
      <section className="relative bg-gradient-to-r from-indigo-100 to-purple-100 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <div className={`rounded-3xl p-12 text-center ${glass}`}>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Začněme spolupracovat</h2>
              <p className="mb-8 text-gray-600">Bezplatná konzultace, transparentní ceny, měřitelné výsledky.</p>
              <Link href="#kontakt">
                <Button size="lg" className="bg-indigo-600 text-white hover:bg-indigo-700">
                  Kontaktujte nás <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact — everything inside one big glass card */}
      <section id="kontakt" className="relative bg-gradient-to-br from-blue-100 via-purple-50 to-indigo-100 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <div className={`rounded-3xl p-10 md:p-16 ${glass}`}>
              <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Kontakt</h2>
              <div className="mb-10 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <span className="flex items-center gap-2"><Mail className="h-4 w-4 text-indigo-500" /> info@fedicfinance.com</span>
                <span className="flex items-center gap-2"><Phone className="h-4 w-4 text-indigo-500" /> +420 777 888 999</span>
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-indigo-500" /> Praha &amp; Most</span>
              </div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input type="text" placeholder="Jméno" className="rounded-xl border border-white/30 bg-white/50 px-4 py-3 text-sm backdrop-blur outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20" />
                  <input type="text" placeholder="Firma" className="rounded-xl border border-white/30 bg-white/50 px-4 py-3 text-sm backdrop-blur outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20" />
                </div>
                <input type="email" placeholder="E-mail" className="w-full rounded-xl border border-white/30 bg-white/50 px-4 py-3 text-sm backdrop-blur outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20" />
                <select className="w-full rounded-xl border border-white/30 bg-white/50 px-4 py-3 text-sm text-gray-700 backdrop-blur outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20">
                  <option value="">Vyberte službu</option>
                  {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                <textarea placeholder="Zpráva" rows={4} className="w-full rounded-xl border border-white/30 bg-white/50 px-4 py-3 text-sm backdrop-blur outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20" />
                <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700" size="lg">
                  Odeslat zprávu <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer — glass bar */}
      <footer className="bg-gradient-to-r from-blue-100 to-purple-100 py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className={`flex flex-col items-center gap-4 rounded-2xl p-6 sm:flex-row sm:justify-between ${glass}`}>
            <div className="flex items-center gap-3">
              <Image src="/logo.jpg" alt="Fedic Finance" width={32} height={32} className="rounded-full" />
              <span className="font-semibold text-gray-900">Fedic Finance</span>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <Link href="#sluzby" className="hover:text-gray-900 transition-colors">Služby</Link>
              <Link href="#kontakt" className="hover:text-gray-900 transition-colors">Kontakt</Link>
              <Link href="/login" className="hover:text-gray-900 transition-colors">Klientská zóna</Link>
            </div>
            <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Fedic Finance Group s.r.o.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   DARK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function DarkSections({ services, channels, processSteps, advantages, testimonials }: Omit<StyledSectionsProps, "style">) {
  return (
    <>
      {/* Services — dark cards with colored accent line */}
      <section id="sluzby" className="bg-gray-950 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="mb-16">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Služby</h2>
              <p className="max-w-2xl text-gray-400">Profesionální finanční služby pro náročné klienty</p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <StaggerItem key={i}>
                <div className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900 p-8 transition-all hover:border-gray-700">
                  <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 opacity-50 transition-opacity group-hover:opacity-100" />
                  <s.icon className="mb-6 h-6 w-6 text-gray-400 transition-colors group-hover:text-white" />
                  <h3 className="mb-3 text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mb-4 text-sm text-gray-400">{s.desc}</p>
                  <ul className="space-y-1.5">
                    {s.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-gray-500">
                        <CheckCircle2 className="h-3.5 w-3.5 text-green-500/60" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Channels — compact list rows */}
      <section id="dorucovani" className="border-t border-gray-800 bg-gray-950 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <h2 className="mb-12 text-3xl font-bold text-white">Doručování</h2>
          </FadeIn>
          <div className="divide-y divide-gray-800">
            {channels.map((ch, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex items-center gap-4 py-5 text-gray-300 transition-colors hover:text-white">
                  <ch.icon className="h-5 w-5 shrink-0 text-gray-500" />
                  <span className="font-medium">{ch.title}</span>
                  <span className="text-sm text-gray-500">&mdash; {ch.desc}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process — 4 in a row */}
      <section id="proces" className="border-t border-gray-800 bg-gray-950 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="mb-12 text-3xl font-bold text-white">Proces</h2>
          </FadeIn>
          <StaggerContainer className="grid gap-6 md:grid-cols-4">
            {processSteps.map((step, i) => (
              <StaggerItem key={i}>
                <div className="border border-gray-800 bg-gray-900 p-6">
                  <div className="mb-4 text-4xl font-black text-white/10">{step.num}</div>
                  <h4 className="mb-2 font-semibold text-white">{step.title}</h4>
                  <p className="text-sm text-gray-400">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Advantages — 2-col with monospace numbering */}
      <section id="vyhody" className="border-t border-gray-800 bg-gray-950 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="mb-12 text-3xl font-bold text-white">Výhody</h2>
          </FadeIn>
          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            {advantages.map((a, i) => (
              <StaggerItem key={i}>
                <div className="flex gap-6">
                  <span className="font-mono text-3xl font-black text-gray-700">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h4 className="mb-1 font-semibold text-white">{a.title}</h4>
                    <p className="text-sm text-gray-400">{a.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials — dark cards, large quotes */}
      <section id="reference" className="border-t border-gray-800 bg-gray-950 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="mb-12 text-3xl font-bold text-white">Reference</h2>
          </FadeIn>
          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <div className="border border-gray-800 bg-gray-900 p-8">
                  <span className="mb-4 block font-serif text-6xl leading-none text-gray-700">&ldquo;</span>
                  <p className="mb-6 text-gray-300">{t.text}</p>
                  <div className="border-t border-gray-800 pt-4">
                    <div className="font-medium text-white">{t.author}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA — bordered, stark */}
      <section className="bg-gray-950 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <div className="border border-gray-700 p-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-white">Pojďme na to.</h2>
              <p className="mb-8 text-gray-400">Nezávazná konzultace, konkrétní plán, měřitelné výsledky.</p>
              <Link href="#kontakt">
                <Button size="lg" className="border border-white bg-white text-gray-950 hover:bg-gray-200">
                  Kontaktujte nás <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact — dark form */}
      <section id="kontakt" className="border-t border-gray-800 bg-gray-950 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <FadeIn direction="left">
              <div>
                <h2 className="mb-8 text-3xl font-bold text-white">Kontakt</h2>
                <div className="space-y-4 text-gray-400">
                  <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-gray-600" /> info@fedicfinance.com</div>
                  <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-gray-600" /> +420 777 888 999</div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gray-600" />
                    <div>
                      <div>Vodičkova 30, Praha 1</div>
                      <div>Třída Budovatelů 2830, Most</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input type="text" placeholder="Jméno" className="rounded border border-gray-800 bg-gray-900 px-4 py-3 text-sm text-white outline-none focus:border-gray-600" />
                  <input type="text" placeholder="Firma" className="rounded border border-gray-800 bg-gray-900 px-4 py-3 text-sm text-white outline-none focus:border-gray-600" />
                </div>
                <input type="email" placeholder="E-mail" className="w-full rounded border border-gray-800 bg-gray-900 px-4 py-3 text-sm text-white outline-none focus:border-gray-600" />
                <select className="w-full rounded border border-gray-800 bg-gray-900 px-4 py-3 text-sm text-gray-400 outline-none focus:border-gray-600">
                  <option value="">Vyberte službu</option>
                  {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                <textarea placeholder="Zpráva" rows={4} className="w-full rounded border border-gray-800 bg-gray-900 px-4 py-3 text-sm text-white outline-none focus:border-gray-600" />
                <Button className="w-full" size="lg">Odeslat <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer — very minimal single line */}
      <footer className="border-t border-gray-800 bg-gray-950 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Image src="/logo.jpg" alt="Fedic Finance" width={24} height={24} className="rounded-full" />
            <span className="text-gray-400">Fedic Finance</span>
          </div>
          <div className="flex gap-4">
            <Link href="#sluzby" className="hover:text-gray-300 transition-colors">Služby</Link>
            <Link href="#kontakt" className="hover:text-gray-300 transition-colors">Kontakt</Link>
            <Link href="/login" className="hover:text-gray-300 transition-colors">Klientská zóna</Link>
          </div>
          <span>&copy; {new Date().getFullYear()} Fedic Finance Group s.r.o.</span>
        </div>
      </footer>
    </>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   NEON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function NeonSections({ services, channels, processSteps, advantages, testimonials }: Omit<StyledSectionsProps, "style">) {
  const neonColors = ["#a855f7", "#06b6d4", "#f43f5e", "#22c55e", "#eab308", "#3b82f6"];
  return (
    <>
      {/* Services — neon border glow */}
      <section id="sluzby" className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">Naše služby</span>
              </h2>
            </div>
          </FadeIn>
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <StaggerItem key={i}>
                <div
                  className="group rounded-xl border border-gray-800 bg-gray-950 p-8 transition-all hover:border-transparent"
                  style={{ boxShadow: `0 0 0 1px ${neonColors[i % neonColors.length]}20, 0 0 20px ${neonColors[i % neonColors.length]}10` }}
                >
                  <div className="relative">
                    <s.icon className="mb-6 h-8 w-8" style={{ color: neonColors[i % neonColors.length] }} />
                    <h3 className="mb-3 text-lg font-semibold text-white">{s.title}</h3>
                    <p className="mb-4 text-sm text-gray-400">{s.desc}</p>
                    <ul className="space-y-2">
                      {s.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs text-gray-500">
                          <CheckCircle2 className="h-3.5 w-3.5" style={{ color: neonColors[i % neonColors.length] }} /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Channels — neon grid */}
      <section id="dorucovani" className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold text-white">Doručování</h2>
          </FadeIn>
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((ch, i) => (
              <StaggerItem key={i}>
                <div className="rounded-lg border border-gray-800 bg-gray-950 p-6 text-center transition-all hover:border-gray-700">
                  <ch.icon className="mx-auto mb-3 h-6 w-6" style={{ color: neonColors[i % neonColors.length] }} />
                  <h4 className="mb-1 text-sm font-medium text-white">{ch.title}</h4>
                  <p className="text-xs text-gray-500">{ch.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process — vertical with glowing numbers */}
      <section id="proces" className="bg-black py-24">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <h2 className="mb-16 text-center text-3xl font-bold text-white">Proces</h2>
          </FadeIn>
          <div className="space-y-12">
            {processSteps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="flex gap-8">
                  <div
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border text-2xl font-black text-white"
                    style={{
                      borderColor: neonColors[i % neonColors.length],
                      boxShadow: `0 0 20px ${neonColors[i % neonColors.length]}40, 0 0 40px ${neonColors[i % neonColors.length]}20`,
                      textShadow: `0 0 10px ${neonColors[i % neonColors.length]}`,
                    }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold text-white">{step.title}</h4>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages — neon left border */}
      <section id="vyhody" className="bg-black py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold text-white">Výhody</h2>
          </FadeIn>
          <StaggerContainer className="grid gap-4 md:grid-cols-2">
            {advantages.map((a, i) => (
              <StaggerItem key={i}>
                <div
                  className="border-l-2 bg-gray-950 px-6 py-5 transition-all"
                  style={{ borderColor: neonColors[i % neonColors.length] }}
                >
                  <div className="flex items-center gap-3">
                    <a.icon className="h-5 w-5 shrink-0" style={{ color: neonColors[i % neonColors.length] }} />
                    <h4 className="font-semibold text-white">{a.title}</h4>
                  </div>
                  <p className="mt-2 pl-8 text-sm text-gray-400">{a.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials — horizontal strip marquee */}
      <section id="reference" className="overflow-hidden bg-black py-24">
        <FadeIn>
          <h2 className="mb-12 text-center text-3xl font-bold text-white">Reference</h2>
        </FadeIn>
        <div className="relative">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-8"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="w-[400px] shrink-0 rounded-xl border border-gray-800 bg-gray-950 p-8">
                <p className="mb-4 text-sm text-gray-300">{t.text}</p>
                <div className="text-sm">
                  <span className="font-medium text-white">{t.author}</span>
                  <span className="ml-2 text-gray-500">{t.role}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA — neon bordered, scan line */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <div
              className="relative overflow-hidden rounded-xl border p-12 text-center"
              style={{
                borderColor: "#a855f7",
                boxShadow: "0 0 30px rgba(168,85,247,0.15), 0 0 60px rgba(168,85,247,0.05)",
              }}
            >
              {/* Scan line */}
              <motion.div
                className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <h2 className="mb-4 text-3xl font-bold text-white">Ready?</h2>
              <p className="mb-8 text-gray-400">Nezávazná konzultace, nulové vstupní náklady.</p>
              <Link href="#kontakt">
                <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-500">
                  Start <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact — neon form */}
      <section id="kontakt" className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <FadeIn direction="left">
              <div>
                <h2 className="mb-8 text-3xl font-bold text-white">Kontaktujte nás</h2>
                <div className="space-y-4 text-gray-400">
                  <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-purple-500" /> info@fedicfinance.com</div>
                  <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-cyan-500" /> +420 777 888 999</div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-pink-500" />
                    <div>
                      <div>Vodičkova 30, Praha 1</div>
                      <div>Třída Budovatelů 2830, Most</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input type="text" placeholder="Jméno" className="rounded-lg border border-gray-800 bg-gray-950 px-4 py-3 text-sm text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30" />
                  <input type="text" placeholder="Firma" className="rounded-lg border border-gray-800 bg-gray-950 px-4 py-3 text-sm text-white outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30" />
                </div>
                <input type="email" placeholder="E-mail" className="w-full rounded-lg border border-gray-800 bg-gray-950 px-4 py-3 text-sm text-white outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30" />
                <select className="w-full rounded-lg border border-gray-800 bg-gray-950 px-4 py-3 text-sm text-gray-400 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30">
                  <option value="">Vyberte službu</option>
                  {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                <textarea placeholder="Zpráva" rows={4} className="w-full rounded-lg border border-gray-800 bg-gray-950 px-4 py-3 text-sm text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30" />
                <Button className="w-full bg-purple-600 text-white hover:bg-purple-500" size="lg">Odeslat <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer — minimal with neon accent */}
      <footer className="bg-black py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-6 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Image src="/logo.jpg" alt="Fedic Finance" width={24} height={24} className="rounded-full" />
              <span className="text-gray-300">Fedic Finance</span>
            </div>
            <div className="flex gap-4">
              <Link href="#sluzby" className="hover:text-purple-400 transition-colors">Služby</Link>
              <Link href="#kontakt" className="hover:text-purple-400 transition-colors">Kontakt</Link>
              <Link href="/login" className="hover:text-purple-400 transition-colors">Klientská zóna</Link>
            </div>
            <span>&copy; {new Date().getFullYear()} Fedic Finance Group s.r.o.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   AURORA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function AuroraSections({ services, channels, processSteps, advantages, testimonials }: Omit<StyledSectionsProps, "style">) {
  return (
    <>
      {/* Services — rounded organic cards */}
      <section id="sluzby" className="bg-gradient-to-b from-emerald-50 to-teal-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-emerald-900 md:text-4xl">Naše služby</h2>
              <p className="mx-auto max-w-2xl text-emerald-700/70">Harmonický přístup k vašim financím</p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <StaggerItem key={i}>
                <div className="group rounded-3xl bg-white/80 p-8 shadow-sm backdrop-blur transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 p-4">
                    <s.icon className="h-7 w-7 text-emerald-600" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-emerald-900">{s.title}</h3>
                  <p className="mb-4 text-emerald-700/70">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-emerald-600/60">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Channels — flowing masonry-like 2 rows */}
      <section id="dorucovani" className="bg-gradient-to-b from-teal-50 to-cyan-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold text-emerald-900">Doručování</h2>
          </FadeIn>
          <StaggerContainer className="flex flex-wrap justify-center gap-4">
            {channels.map((ch, i) => (
              <StaggerItem key={i}>
                <div className={`rounded-full bg-white/80 px-6 py-4 shadow-sm backdrop-blur transition-all hover:shadow-md ${i % 3 === 0 ? "mt-4" : i % 3 === 1 ? "-mt-2" : "mt-2"}`}>
                  <div className="flex items-center gap-3">
                    <ch.icon className="h-5 w-5 text-teal-600" />
                    <span className="font-medium text-emerald-900">{ch.title}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process — curved path with floating bubbles */}
      <section id="proces" className="bg-gradient-to-b from-cyan-50 to-emerald-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="mb-16 text-center text-3xl font-bold text-emerald-900">Náš proces</h2>
          </FadeIn>
          <div className="relative">
            {/* Curved path hint */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 400" fill="none" preserveAspectRatio="none">
              <path d="M0,200 C200,50 300,350 400,200 C500,50 600,350 800,200" stroke="url(#aurora-grad)" strokeWidth="2" strokeDasharray="8 4" />
              <defs>
                <linearGradient id="aurora-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
            <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, i) => (
                <FadeIn key={i} delay={i * 0.15}>
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-2xl font-bold text-white shadow-xl">
                      {step.num}
                    </div>
                    <h4 className="mb-2 font-semibold text-emerald-900">{step.title}</h4>
                    <p className="text-sm text-emerald-700/60">{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages — 2 rows offset */}
      <section id="vyhody" className="bg-gradient-to-b from-emerald-50 to-teal-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <h2 className="mb-16 text-center text-3xl font-bold text-emerald-900">Naše výhody</h2>
          </FadeIn>
          <div className="space-y-6">
            <StaggerContainer className="flex flex-wrap justify-center gap-6">
              {advantages.slice(0, 3).map((a, i) => (
                <StaggerItem key={i}>
                  <div className="w-64 rounded-3xl bg-white/80 p-6 text-center shadow-sm backdrop-blur">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
                      <a.icon className="h-7 w-7 text-emerald-600" />
                    </div>
                    <h4 className="mb-1 font-semibold text-emerald-900">{a.title}</h4>
                    <p className="text-sm text-emerald-700/60">{a.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <StaggerContainer className="flex flex-wrap justify-center gap-6 md:px-16">
              {advantages.slice(3).map((a, i) => (
                <StaggerItem key={i}>
                  <div className="w-64 rounded-3xl bg-white/80 p-6 text-center shadow-sm backdrop-blur">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100">
                      <a.icon className="h-7 w-7 text-teal-600" />
                    </div>
                    <h4 className="mb-1 font-semibold text-emerald-900">{a.title}</h4>
                    <p className="text-sm text-emerald-700/60">{a.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Testimonials — organic shapes */}
      <section id="reference" className="bg-gradient-to-b from-teal-50 to-emerald-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold text-emerald-900">Reference</h2>
          </FadeIn>
          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <div className="rounded-3xl bg-white/80 p-8 shadow-sm backdrop-blur">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 text-sm font-bold text-white">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-emerald-900">{t.author}</div>
                      <div className="text-xs text-emerald-600/60">{t.role}</div>
                    </div>
                  </div>
                  <p className="mb-4 text-emerald-800/80">{t.text}</p>
                  <Stars count={t.rating} />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA — organic blob bg */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-700 py-24">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-500/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-teal-400/30 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Objevte klid ve financích</h2>
            <p className="mb-8 text-lg text-emerald-100/80">Konzultace zdarma, přírodně jednoduchý přístup.</p>
            <Link href="#kontakt">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
                Začít spolupráci <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Contact — asymmetric */}
      <section id="kontakt" className="bg-gradient-to-b from-emerald-50 to-teal-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <FadeIn direction="left">
                <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 p-10 text-white">
                  <h2 className="mb-8 text-2xl font-bold">Kontaktujte nás</h2>
                  <div className="space-y-5">
                    <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-emerald-200" /> info@fedicfinance.com</div>
                    <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-emerald-200" /> +420 777 888 999</div>
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-emerald-200" />
                      <div>
                        <div>Vodičkova 30, Praha 1</div>
                        <div>Třída Budovatelů 2830, Most</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-3">
              <FadeIn direction="right">
                <form className="space-y-4 rounded-3xl bg-white/80 p-8 shadow-sm backdrop-blur" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input type="text" placeholder="Jméno" className="rounded-2xl border border-emerald-200 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
                    <input type="text" placeholder="Firma" className="rounded-2xl border border-emerald-200 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
                  </div>
                  <input type="email" placeholder="E-mail" className="w-full rounded-2xl border border-emerald-200 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
                  <select className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20">
                    <option value="">Vyberte službu</option>
                    {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                  <textarea placeholder="Zpráva" rows={4} className="w-full rounded-2xl border border-emerald-200 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
                  <Button className="w-full bg-emerald-600 text-white hover:bg-emerald-700" size="lg">
                    Odeslat <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Footer — wave top */}
      <div className="relative">
        <WaveSvg color="#065f46" className="absolute -top-1 left-0 h-20 w-full" />
        <footer className="bg-emerald-900 pb-8 pt-24 text-emerald-300">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-4">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <Image src="/logo.jpg" alt="Fedic Finance" width={36} height={36} className="rounded-full" />
                  <span className="text-lg font-semibold text-white">Fedic Finance</span>
                </div>
                <p className="text-sm">Finanční služby v harmonii s přírodou vašeho podnikání.</p>
              </div>
              <div>
                <h4 className="mb-3 font-semibold text-white">Služby</h4>
                <ul className="space-y-1.5 text-sm">
                  <li><Link href="#sluzby" className="hover:text-white transition-colors">Vedení účetnictví</Link></li>
                  <li><Link href="#sluzby" className="hover:text-white transition-colors">Daňové poradenství</Link></li>
                  <li><Link href="#sluzby" className="hover:text-white transition-colors">Mzdová agenda</Link></li>
                  <li><Link href="#sluzby" className="hover:text-white transition-colors">ERP implementace</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-semibold text-white">Kontakt</h4>
                <ul className="space-y-1.5 text-sm">
                  <li>info@fedicfinance.com</li>
                  <li>+420 777 888 999</li>
                  <li>Praha &amp; Most</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-semibold text-white">Odkazy</h4>
                <ul className="space-y-1.5 text-sm">
                  <li><Link href="/login" className="hover:text-white transition-colors">Klientská zóna</Link></li>
                  <li><Link href="#reference" className="hover:text-white transition-colors">Reference</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 border-t border-emerald-800 pt-6 text-center text-xs text-emerald-400">
              &copy; {new Date().getFullYear()} Fedic Finance Group s.r.o. Všechna práva vyhrazena.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   WARM
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function WarmSections({ services, channels, processSteps, advantages, testimonials }: Omit<StyledSectionsProps, "style">) {
  return (
    <>
      {/* Services — editorial cards, large typography */}
      <section id="sluzby" className="bg-amber-50/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-4xl font-bold text-amber-950 md:text-5xl">Naše služby</h2>
              <p className="mx-auto max-w-2xl font-serif text-lg text-amber-800/60">S péčí a tradicí, jako od vašeho důvěrného poradce</p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <StaggerItem key={i}>
                <div className="border-b-2 border-amber-200 bg-white p-8 transition-all hover:border-amber-400">
                  <s.icon className="mb-6 h-8 w-8 text-amber-700" />
                  <h3 className="mb-3 font-serif text-2xl font-bold text-amber-950">{s.title}</h3>
                  <p className="mb-4 font-serif text-amber-800/70">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-amber-700/60">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-500" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Channels — magazine grid (2 large + 6 small) */}
      <section id="dorucovani" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="mb-12 font-serif text-3xl font-bold text-amber-950 md:text-4xl">Způsoby doručování</h2>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-4">
            {channels.slice(0, 2).map((ch, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex flex-col items-start gap-4 rounded-lg border border-amber-100 bg-amber-50/50 p-8 md:col-span-2">
                  <div className="rounded-lg bg-amber-100 p-3">
                    <ch.icon className="h-8 w-8 text-amber-700" />
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-amber-950">{ch.title}</h4>
                  <p className="font-serif text-amber-800/60">{ch.desc}</p>
                </div>
              </FadeIn>
            ))}
            {channels.slice(2).map((ch, i) => (
              <FadeIn key={i + 2} delay={(i + 2) * 0.08}>
                <div className="flex items-center gap-3 rounded-lg border border-amber-100 p-5">
                  <ch.icon className="h-5 w-5 shrink-0 text-amber-600" />
                  <div>
                    <h4 className="font-medium text-amber-950">{ch.title}</h4>
                    <p className="text-xs text-amber-700/60">{ch.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process — editorial numbered list */}
      <section id="proces" className="bg-amber-50/50 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <h2 className="mb-12 font-serif text-3xl font-bold text-amber-950 md:text-4xl">Jak spolupracujeme</h2>
          </FadeIn>
          <div className="divide-y divide-amber-200">
            {processSteps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="flex gap-6 py-8">
                  <span className="font-serif text-4xl font-bold text-amber-300">{step.num}</span>
                  <div>
                    <h4 className="mb-2 font-serif text-xl font-semibold text-amber-950">{step.title}</h4>
                    <p className="font-serif text-amber-800/70">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages — 2-col text list with checkmarks */}
      <section id="vyhody" className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="mb-12 text-center font-serif text-3xl font-bold text-amber-950 md:text-4xl">Proč zvolit nás</h2>
          </FadeIn>
          <StaggerContainer className="grid gap-6 md:grid-cols-2">
            {advantages.map((a, i) => (
              <StaggerItem key={i}>
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amber-500" />
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-amber-950">{a.title}</h4>
                    <p className="font-serif text-sm text-amber-800/60">{a.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials — block quotes, serif italic */}
      <section id="reference" className="bg-amber-50/50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="mb-12 text-center font-serif text-3xl font-bold text-amber-950 md:text-4xl">Co o nás říkají</h2>
          </FadeIn>
          <div className="space-y-12">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <blockquote className="border-l-4 border-amber-300 pl-8">
                  <p className="mb-4 font-serif text-xl italic text-amber-900">&ldquo;{t.text}&rdquo;</p>
                  <footer className="font-serif text-amber-700">
                    &mdash; {t.author}, <span className="text-amber-600/60">{t.role}</span>
                  </footer>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — warm toned */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl">Pojďme se potkat</h2>
            <p className="mb-8 font-serif text-lg text-amber-100/80">Každý velký příběh začíná první kapitolou. Napište nám.</p>
            <Link href="#kontakt">
              <Button size="lg" className="bg-white text-amber-700 hover:bg-amber-50">
                Napsat nám <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Contact — single centered column */}
      <section id="kontakt" className="bg-white py-24">
        <div className="mx-auto max-w-xl px-6">
          <FadeIn>
            <div className="mb-8 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold text-amber-950">Kontakt</h2>
              <div className="space-y-1 font-serif text-amber-800/70">
                <p>info@fedicfinance.com</p>
                <p>+420 777 888 999</p>
                <p>Praha &amp; Most</p>
              </div>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Jméno" className="w-full border-b border-amber-200 bg-transparent px-2 py-3 font-serif text-sm outline-none focus:border-amber-500" />
              <input type="text" placeholder="Firma" className="w-full border-b border-amber-200 bg-transparent px-2 py-3 font-serif text-sm outline-none focus:border-amber-500" />
              <input type="email" placeholder="E-mail" className="w-full border-b border-amber-200 bg-transparent px-2 py-3 font-serif text-sm outline-none focus:border-amber-500" />
              <select className="w-full border-b border-amber-200 bg-transparent px-2 py-3 font-serif text-sm text-gray-700 outline-none focus:border-amber-500">
                <option value="">Vyberte službu</option>
                {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
              <textarea placeholder="Vaše zpráva" rows={4} className="w-full border-b border-amber-200 bg-transparent px-2 py-3 font-serif text-sm outline-none focus:border-amber-500" />
              <Button className="w-full bg-amber-700 text-white hover:bg-amber-800" size="lg">
                Odeslat <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* Footer — warm serif */}
      <footer className="bg-amber-950 py-16 text-amber-300/60">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Image src="/logo.jpg" alt="Fedic Finance" width={36} height={36} className="rounded-full" />
                <span className="font-serif text-lg font-semibold text-white">Fedic Finance</span>
              </div>
              <p className="font-serif text-sm">Tradice, důvěra a profesionalita od roku 1993.</p>
            </div>
            <div>
              <h4 className="mb-3 font-serif font-semibold text-white">Služby</h4>
              <ul className="space-y-1.5 font-serif text-sm">
                <li><Link href="#sluzby" className="hover:text-white transition-colors">Vedení účetnictví</Link></li>
                <li><Link href="#sluzby" className="hover:text-white transition-colors">Daňové poradenství</Link></li>
                <li><Link href="#sluzby" className="hover:text-white transition-colors">Mzdová agenda</Link></li>
                <li><Link href="#sluzby" className="hover:text-white transition-colors">ERP implementace</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-serif font-semibold text-white">Kontakt</h4>
              <ul className="space-y-1.5 font-serif text-sm">
                <li>info@fedicfinance.com</li>
                <li>+420 777 888 999</li>
                <li>Praha &amp; Most</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-serif font-semibold text-white">Odkazy</h4>
              <ul className="space-y-1.5 font-serif text-sm">
                <li><Link href="/login" className="hover:text-white transition-colors">Klientská zóna</Link></li>
                <li><Link href="#reference" className="hover:text-white transition-colors">Reference</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-amber-900 pt-6 text-center font-serif text-xs">
            &copy; {new Date().getFullYear()} Fedic Finance Group s.r.o. Všechna práva vyhrazena.
          </div>
        </div>
      </footer>
    </>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   OCEAN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function OceanSections({ services, channels, processSteps, advantages, testimonials }: Omit<StyledSectionsProps, "style">) {
  return (
    <>
      {/* Services — wave-pattern top border cards */}
      <section id="sluzby" className="bg-gradient-to-b from-blue-50 to-cyan-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-blue-950 md:text-4xl">Naše služby</h2>
              <p className="mx-auto max-w-2xl text-blue-800/60">Plujte klidnými vodami financí s námi</p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <StaggerItem key={i}>
                <div className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-xl">
                  {/* Wave top border */}
                  <svg viewBox="0 0 400 20" className="w-full" preserveAspectRatio="none">
                    <path d="M0,10 C100,20 200,0 300,10 C350,15 380,12 400,10 L400,0 L0,0Z" className="fill-blue-500 transition-colors group-hover:fill-blue-600" />
                  </svg>
                  <div className="p-8">
                    <s.icon className="mb-6 h-7 w-7 text-blue-600" />
                    <h3 className="mb-3 text-xl font-semibold text-blue-950">{s.title}</h3>
                    <p className="mb-4 text-blue-800/60">{s.desc}</p>
                    <ul className="space-y-2">
                      {s.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-blue-700/50">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-500" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Channels — ocean-blue gradient overlays */}
      <section id="dorucovani" className="bg-gradient-to-b from-cyan-50 to-blue-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold text-blue-950">Doručování</h2>
          </FadeIn>
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((ch, i) => (
              <StaggerItem key={i}>
                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 p-6 text-white transition-all hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <ch.icon className="relative mb-3 h-6 w-6 text-blue-100" />
                  <h4 className="relative mb-1 font-medium">{ch.title}</h4>
                  <p className="relative text-sm text-blue-100/70">{ch.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process — horizontal with wave */}
      <section id="proces" className="bg-gradient-to-b from-blue-50 to-cyan-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <h2 className="mb-16 text-center text-3xl font-bold text-blue-950">Proces spolupráce</h2>
          </FadeIn>
          <div className="relative">
            <svg className="absolute left-0 right-0 top-10 hidden h-4 w-full md:block" viewBox="0 0 1000 20" preserveAspectRatio="none">
              <path d="M0,10 C250,20 250,0 500,10 C750,20 750,0 1000,10" fill="none" stroke="#3b82f6" strokeWidth="2" />
            </svg>
            <StaggerContainer className="grid gap-8 md:grid-cols-4">
              {processSteps.map((step, i) => (
                <StaggerItem key={i}>
                  <div className="relative text-center">
                    <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-xl font-bold text-white shadow-lg">
                      {step.num}
                    </div>
                    <h4 className="mb-2 font-semibold text-blue-950">{step.title}</h4>
                    <p className="text-sm text-blue-800/60">{step.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Advantages — flowing horizontal cards */}
      <section id="vyhody" className="bg-gradient-to-b from-cyan-50 to-blue-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold text-blue-950">Naše výhody</h2>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-6">
            {advantages.map((a, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex w-80 items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <a.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-blue-950">{a.title}</h4>
                    <p className="text-sm text-blue-800/60">{a.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — ocean blue accents */}
      <section id="reference" className="bg-gradient-to-b from-blue-50 to-cyan-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold text-blue-950">Reference</h2>
          </FadeIn>
          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <div className="rounded-xl border-t-4 border-cyan-400 bg-white p-8 shadow-sm">
                  <p className="mb-4 text-blue-900/80">{t.text}</p>
                  <Stars count={t.rating} />
                  <div className="mt-3 border-t border-blue-100 pt-3">
                    <div className="font-semibold text-blue-950">{t.author}</div>
                    <div className="text-sm text-blue-600/60">{t.role}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA — deep blue gradient */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-900 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Nechte své finance plout</h2>
            <p className="mb-8 text-lg text-blue-200/70">Kontaktujte nás pro nezávaznou konzultaci.</p>
            <Link href="#kontakt">
              <Button size="lg" className="bg-cyan-500 text-white hover:bg-cyan-400">
                Kontaktovat <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Contact — 2-column ocean */}
      <section id="kontakt" className="bg-gradient-to-b from-blue-50 to-cyan-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div>
                <h2 className="mb-8 text-3xl font-bold text-blue-950">Kontaktujte nás</h2>
                <div className="space-y-4 text-blue-800/70">
                  <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-blue-600" /> info@fedicfinance.com</div>
                  <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-blue-600" /> +420 777 888 999</div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <div>
                      <div>Vodičkova 30, Praha 1</div>
                      <div>Třída Budovatelů 2830, Most</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <form className="space-y-4 rounded-xl bg-white p-8 shadow-sm" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input type="text" placeholder="Jméno" className="rounded-lg border border-blue-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
                  <input type="text" placeholder="Firma" className="rounded-lg border border-blue-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
                </div>
                <input type="email" placeholder="E-mail" className="w-full rounded-lg border border-blue-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
                <select className="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
                  <option value="">Vyberte službu</option>
                  {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                <textarea placeholder="Zpráva" rows={4} className="w-full rounded-lg border border-blue-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700" size="lg">
                  Odeslat <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer — dark navy with wave divider */}
      <div className="relative">
        <WaveSvg color="#172554" className="absolute -top-1 left-0 h-20 w-full" />
        <footer className="bg-blue-950 pb-8 pt-24 text-blue-300/60">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-4">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <Image src="/logo.jpg" alt="Fedic Finance" width={36} height={36} className="rounded-full" />
                  <span className="text-lg font-semibold text-white">Fedic Finance</span>
                </div>
                <p className="text-sm">Navigujeme vaše podnikání klidnými vodami financí.</p>
              </div>
              <div>
                <h4 className="mb-3 font-semibold text-white">Služby</h4>
                <ul className="space-y-1.5 text-sm">
                  <li><Link href="#sluzby" className="hover:text-white transition-colors">Vedení účetnictví</Link></li>
                  <li><Link href="#sluzby" className="hover:text-white transition-colors">Daňové poradenství</Link></li>
                  <li><Link href="#sluzby" className="hover:text-white transition-colors">Mzdová agenda</Link></li>
                  <li><Link href="#sluzby" className="hover:text-white transition-colors">ERP implementace</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-semibold text-white">Kontakt</h4>
                <ul className="space-y-1.5 text-sm">
                  <li>info@fedicfinance.com</li>
                  <li>+420 777 888 999</li>
                  <li>Praha &amp; Most</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-semibold text-white">Odkazy</h4>
                <ul className="space-y-1.5 text-sm">
                  <li><Link href="/login" className="hover:text-white transition-colors">Klientská zóna</Link></li>
                  <li><Link href="#reference" className="hover:text-white transition-colors">Reference</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 border-t border-blue-900 pt-6 text-center text-xs">
              &copy; {new Date().getFullYear()} Fedic Finance Group s.r.o. Všechna práva vyhrazena.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   MINIMAL
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function MinimalSections({ services, channels, processSteps, advantages, testimonials }: Omit<StyledSectionsProps, "style">) {
  return (
    <>
      {/* Services — no cards, text + icon pairs, thin border */}
      <section id="sluzby" className="bg-white py-32">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <h2 className="mb-20 text-center text-2xl font-light tracking-tight text-gray-900">Služby</h2>
          </FadeIn>
          <div className="divide-y divide-gray-100">
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex items-start gap-8 py-12">
                  <s.icon className="mt-1 h-5 w-5 shrink-0 text-gray-400" />
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-medium text-gray-900">{s.title}</h3>
                    <p className="text-gray-500">{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Channels — simple text list, 2 cols */}
      <section id="dorucovani" className="bg-gray-50 py-32">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <h2 className="mb-20 text-center text-2xl font-light tracking-tight text-gray-900">Doručování</h2>
          </FadeIn>
          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {channels.map((ch, i) => (
              <StaggerItem key={i}>
                <div className="flex items-center gap-3 py-2">
                  <ch.icon className="h-4 w-4 text-gray-300" />
                  <span className="text-sm text-gray-700">{ch.title}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process — numbers only, minimal */}
      <section id="proces" className="bg-white py-32">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="mb-20 text-center text-2xl font-light tracking-tight text-gray-900">Proces</h2>
          </FadeIn>
          <StaggerContainer className="grid gap-16 md:grid-cols-4">
            {processSteps.map((step, i) => (
              <StaggerItem key={i}>
                <div className="text-center">
                  <div className="mb-6 text-6xl font-extralight text-gray-200">{step.num}</div>
                  <h4 className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-900">{step.title}</h4>
                  <p className="text-sm text-gray-400">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Advantages — single column, text only */}
      <section id="vyhody" className="bg-gray-50 py-32">
        <div className="mx-auto max-w-2xl px-6">
          <FadeIn>
            <h2 className="mb-20 text-center text-2xl font-light tracking-tight text-gray-900">Výhody</h2>
          </FadeIn>
          <div className="space-y-8">
            {advantages.map((a, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4">
                  <a.icon className="mt-0.5 h-4 w-4 shrink-0 text-gray-300" />
                  <div>
                    <span className="font-medium text-gray-900">{a.title}</span>
                    <span className="ml-2 text-gray-400">&mdash; {a.desc}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — just italic text */}
      <section id="reference" className="bg-white py-32">
        <div className="mx-auto max-w-2xl px-6">
          <FadeIn>
            <h2 className="mb-20 text-center text-2xl font-light tracking-tight text-gray-900">Reference</h2>
          </FadeIn>
          <div className="space-y-12">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div>
                  <p className="mb-3 italic text-gray-600">&ldquo;{t.text}&rdquo;</p>
                  <p className="text-sm text-gray-400">&mdash; {t.author}, {t.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — single line + button */}
      <section className="py-32">
        <div className="mx-auto max-w-xl px-6 text-center">
          <FadeIn>
            <p className="mb-8 text-lg text-gray-600">Připraveni na změnu?</p>
            <Link href="#kontakt">
              <Button variant="outline" size="lg">
                Kontaktovat <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Contact — extremely clean, placeholder only */}
      <section id="kontakt" className="bg-gray-50 py-32">
        <div className="mx-auto max-w-md px-6">
          <FadeIn>
            <h2 className="mb-4 text-center text-2xl font-light tracking-tight text-gray-900">Kontakt</h2>
            <div className="mb-12 text-center text-sm text-gray-400">
              <p>info@fedicfinance.com</p>
              <p>+420 777 888 999</p>
              <p>Praha &amp; Most</p>
            </div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Jméno" className="w-full border-b border-gray-200 bg-transparent px-0 py-3 text-sm outline-none transition-colors focus:border-gray-900" />
              <input type="text" placeholder="Firma" className="w-full border-b border-gray-200 bg-transparent px-0 py-3 text-sm outline-none transition-colors focus:border-gray-900" />
              <input type="email" placeholder="E-mail" className="w-full border-b border-gray-200 bg-transparent px-0 py-3 text-sm outline-none transition-colors focus:border-gray-900" />
              <select className="w-full border-b border-gray-200 bg-transparent px-0 py-3 text-sm text-gray-500 outline-none transition-colors focus:border-gray-900">
                <option value="">Služba</option>
                {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
              <textarea placeholder="Zpráva" rows={3} className="w-full border-b border-gray-200 bg-transparent px-0 py-3 text-sm outline-none transition-colors focus:border-gray-900" />
              <Button variant="outline" className="w-full" size="lg">Odeslat</Button>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* Footer — single line */}
      <footer className="border-t border-gray-100 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <Image src="/logo.jpg" alt="Fedic Finance" width={20} height={20} className="rounded-full" />
            <span className="text-gray-600">Fedic Finance</span>
          </div>
          <div className="flex gap-4">
            <Link href="#sluzby" className="hover:text-gray-600 transition-colors">Služby</Link>
            <Link href="#kontakt" className="hover:text-gray-600 transition-colors">Kontakt</Link>
            <Link href="/login" className="hover:text-gray-600 transition-colors">Klientská zóna</Link>
          </div>
          <span>&copy; {new Date().getFullYear()} Fedic Finance Group s.r.o.</span>
        </div>
      </footer>
    </>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   BRUTALIST
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function BrutalistSections({ services, channels, processSteps, advantages, testimonials }: Omit<StyledSectionsProps, "style">) {
  return (
    <>
      {/* Services — thick borders, uppercase, yellow highlights */}
      <section id="sluzby" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="mb-16 text-4xl font-black uppercase tracking-tight md:text-6xl">SLUŽBY</h2>
          </FadeIn>
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <StaggerItem key={i}>
                <div className="border-3 border-black p-8 transition-all hover:bg-yellow-300" style={{ borderWidth: "3px" }}>
                  <s.icon className="mb-6 h-8 w-8" />
                  <h3 className="mb-3 text-xl font-black uppercase">{s.title}</h3>
                  <p className="mb-4 text-sm">{s.desc}</p>
                  <ul className="space-y-1">
                    {s.features.map((f, j) => (
                      <li key={j} className="text-xs uppercase tracking-wider">&#9632; {f}</li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Channels — raw table-like grid with thick borders */}
      <section id="dorucovani" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="mb-12 text-3xl font-black uppercase">DORUČOVÁNÍ</h2>
          </FadeIn>
          <div className="grid grid-cols-2 border-t-3 border-l-3 border-black md:grid-cols-4" style={{ borderWidth: "3px" }}>
            {channels.map((ch, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="border-b-3 border-r-3 border-black p-6" style={{ borderWidth: "3px" }}>
                  <ch.icon className="mb-2 h-6 w-6" />
                  <div className="text-sm font-bold uppercase">{ch.title}</div>
                  <div className="text-xs">{ch.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process — brutalist numbered blocks */}
      <section id="proces" className="bg-yellow-300 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="mb-12 text-3xl font-black uppercase">PROCES</h2>
          </FadeIn>
          <StaggerContainer className="grid gap-6 md:grid-cols-4">
            {processSteps.map((step, i) => (
              <StaggerItem key={i}>
                <div>
                  <div className="mb-4 flex h-20 w-20 items-center justify-center bg-black text-3xl font-black text-white">
                    {step.num}
                  </div>
                  <h4 className="mb-2 font-black uppercase">{step.title}</h4>
                  <p className="text-sm">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Advantages — chunky blocks with rotation */}
      <section id="vyhody" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <h2 className="mb-12 text-3xl font-black uppercase">VÝHODY</h2>
          </FadeIn>
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a, i) => (
              <StaggerItem key={i}>
                <div
                  className="border-black bg-gray-100 p-6 transition-all hover:bg-yellow-300"
                  style={{
                    borderWidth: "3px",
                    transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)`,
                  }}
                >
                  <a.icon className="mb-3 h-6 w-6" />
                  <h4 className="mb-1 font-black uppercase">{a.title}</h4>
                  <p className="text-sm">{a.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials — black bordered, raw, no stars */}
      <section id="reference" className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="mb-12 text-3xl font-black uppercase">REFERENCE</h2>
          </FadeIn>
          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <div className="border-black p-8" style={{ borderWidth: "3px" }}>
                  <p className="mb-6 text-sm">{t.text}</p>
                  <div className="border-t-2 border-black pt-4">
                    <div className="font-black uppercase text-sm">{t.author}</div>
                    <div className="text-xs">{t.role}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA — giant black text on yellow */}
      <section className="bg-yellow-400 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <FadeIn>
            <h2 className="mb-8 text-5xl font-black uppercase md:text-7xl">ZAČNĚTE HNED.</h2>
            <Link href="#kontakt">
              <button className="bg-black px-12 py-5 text-lg font-black uppercase text-white transition-all hover:bg-gray-800">
                KONTAKT <ArrowRight className="ml-2 inline h-5 w-5" />
              </button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Contact — raw form, thick borders, monospace */}
      <section id="kontakt" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div>
                <h2 className="mb-8 text-3xl font-black uppercase">KONTAKT</h2>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@fedicfinance.com</div>
                  <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +420 777 888 999</div>
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                    <div>
                      <div>Vodičkova 30, Praha 1</div>
                      <div>Třída Budovatelů 2830, Most</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="mb-1 block font-mono text-xs font-bold uppercase">Jméno</label>
                  <input type="text" className="w-full border-2 border-black px-4 py-3 font-mono text-sm outline-none focus:bg-yellow-100" />
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs font-bold uppercase">Firma</label>
                  <input type="text" className="w-full border-2 border-black px-4 py-3 font-mono text-sm outline-none focus:bg-yellow-100" />
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs font-bold uppercase">E-mail</label>
                  <input type="email" className="w-full border-2 border-black px-4 py-3 font-mono text-sm outline-none focus:bg-yellow-100" />
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs font-bold uppercase">Služba</label>
                  <select className="w-full border-2 border-black bg-white px-4 py-3 font-mono text-sm outline-none focus:bg-yellow-100">
                    <option value="">-- VYBERTE --</option>
                    {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o.toUpperCase()}</option>)}
                  </select>
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs font-bold uppercase">Zpráva</label>
                  <textarea rows={4} className="w-full border-2 border-black px-4 py-3 font-mono text-sm outline-none focus:bg-yellow-100" />
                </div>
                <button type="submit" className="w-full bg-black py-4 font-mono text-sm font-bold uppercase text-white transition-all hover:bg-yellow-400 hover:text-black">
                  ODESLAT ZPRÁVU
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer — black, white text, no decoration */}
      <footer className="bg-black py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 font-mono text-xs uppercase">
          <div className="flex items-center gap-2">
            <Image src="/logo.jpg" alt="Fedic Finance" width={24} height={24} className="rounded-full" />
            <span className="font-bold">FEDIC FINANCE</span>
          </div>
          <div className="flex gap-4">
            <Link href="#sluzby" className="hover:text-yellow-400 transition-colors">Služby</Link>
            <Link href="#kontakt" className="hover:text-yellow-400 transition-colors">Kontakt</Link>
            <Link href="/login" className="hover:text-yellow-400 transition-colors">Klientská zóna</Link>
          </div>
          <span>&copy; {new Date().getFullYear()} FEDIC FINANCE GROUP S.R.O.</span>
        </div>
      </footer>
    </>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   MAIN EXPORT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export function StyledSections(props: StyledSectionsProps) {
  const { style, ...rest } = props;

  switch (style) {
    case "classic":
      return <ClassicSections {...rest} />;
    case "gradient":
      return <GradientSections {...rest} />;
    case "glass":
      return <GlassSections {...rest} />;
    case "dark":
      return <DarkSections {...rest} />;
    case "neon":
      return <NeonSections {...rest} />;
    case "aurora":
      return <AuroraSections {...rest} />;
    case "warm":
      return <WarmSections {...rest} />;
    case "ocean":
      return <OceanSections {...rest} />;
    case "minimal":
      return <MinimalSections {...rest} />;
    case "brutalist":
      return <BrutalistSections {...rest} />;
    default:
      return <ClassicSections {...rest} />;
  }
}
