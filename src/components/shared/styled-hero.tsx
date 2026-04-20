"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import type { VisualStyleId } from "./style-switcher";

const HEADLINE = "Vaše účetnictví. Naše starost.";
const SUBTEXT =
  "Vedeme účetnictví, řešíme daně a implementujeme ERP systémy. Vy podnikáte, my počítáme.";
const BADGES = [
  "Bez vstupních poplatků",
  "Platba až za výsledky",
  "30+ let zkušeností",
];

function VideoBackground({ style }: { style: VisualStyleId }) {
  return (
    <video
      key={style}
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
      poster="/hero-team.jpg"
    >
      <source src={`/hero-${style}.mp4`} type="video/mp4" />
    </video>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.jpg"
      alt="Fedic Finance"
      width={48}
      height={48}
      className={`rounded-full ${className}`}
    />
  );
}

/* ──────────────────────────────────────────────
   1. CLASSIC — Split layout, text left, stats right
   ────────────────────────────────────────────── */
function ClassicHero() {
  const stats = [
    { label: "Let zkušeností", value: "30+" },
    { label: "Spokojených klientů", value: "500+" },
    { label: "Zpracovaných přiznání", value: "12 000+" },
  ];

  return (
    <>
      <VideoBackground style="classic" />
      <div className="absolute inset-0 bg-slate-900/75" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-6 flex items-center gap-3">
            <Logo />
            <span className="text-lg font-semibold tracking-wide text-white/90">
              Fedic Finance
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {HEADLINE}
          </h1>
          <p className="mb-8 max-w-lg text-lg leading-relaxed text-slate-300">
            {SUBTEXT}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#kontakt"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-white px-6 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100"
            >
              Nezávazná konzultace
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="#sluzby"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/30 px-6 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Prozkoumat služby
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6">
            {BADGES.map((b) => (
              <span key={b} className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="size-4 text-emerald-400" />
                {b}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden flex-col justify-center gap-6 lg:flex"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="text-4xl font-bold text-white">{s.value}</div>
              <div className="mt-1 text-sm text-slate-400">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

/* ──────────────────────────────────────────────
   2. GRADIENT — Full-width centered, huge type
   ────────────────────────────────────────────── */
function GradientHero() {
  return (
    <>
      <VideoBackground style="gradient" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-fuchsia-800/70 to-pink-700/80" />

      <div className="relative z-10 flex w-full flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-6 flex items-center gap-3"
        >
          <Logo />
          <span className="text-lg font-semibold text-white/80">Fedic Finance</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-5xl font-extrabold leading-none tracking-tight text-transparent sm:text-7xl md:text-8xl"
        >
          {HEADLINE}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-10 max-w-xl text-lg text-white/70"
        >
          {SUBTEXT}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="#kontakt"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-8 text-sm font-medium text-purple-900 shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-shadow hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]"
          >
            Nezávazná konzultace
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="#sluzby"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/40 px-8 text-sm font-medium text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-colors hover:bg-white/10"
          >
            Prozkoumat služby
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-8"
        >
          {BADGES.map((b) => (
            <span key={b} className="flex items-center gap-2 text-sm text-white/60">
              <CheckCircle2 className="size-4 text-pink-300" />
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </>
  );
}

/* ──────────────────────────────────────────────
   3. GLASS — Frosted glass card centered
   ────────────────────────────────────────────── */
function GlassHero() {
  return (
    <>
      <VideoBackground style="glass" />
      <div className="absolute inset-0 bg-sky-500/20" />

      <div className="relative z-10 flex w-full items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-3xl rounded-3xl border border-white/20 bg-white/30 p-8 shadow-2xl backdrop-blur-xl sm:p-12 md:p-16"
        >
          <div className="mb-8 flex items-center gap-3">
            <Logo />
            <span className="text-lg font-semibold text-slate-800">Fedic Finance</span>
          </div>

          <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            {HEADLINE}
          </h1>
          <p className="mb-8 max-w-lg text-base leading-relaxed text-slate-700">
            {SUBTEXT}
          </p>

          <div className="mb-10 flex flex-wrap gap-4">
            <Link
              href="#kontakt"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-slate-900 px-6 text-sm font-medium text-white transition-colors hover:bg-slate-800"
            >
              Nezávazná konzultace
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="#sluzby"
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-slate-400/50 px-6 text-sm font-medium text-slate-800 transition-colors hover:bg-white/40"
            >
              Prozkoumat služby
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 border-t border-white/30 pt-6">
            {BADGES.map((b, i) => (
              <motion.span
                key={b}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-2 text-sm text-slate-700"
              >
                <CheckCircle2 className="size-4 text-sky-600" />
                {b}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}

/* ──────────────────────────────────────────────
   4. DARK — Asymmetric, bottom-left text, watermark
   ────────────────────────────────────────────── */
function DarkHero() {
  return (
    <>
      <VideoBackground style="dark" />
      <div className="absolute inset-0 bg-gray-950/85" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5 }}
        className="absolute right-8 top-8 select-none font-mono text-[200px] font-black leading-none text-white"
      >
        30+
      </motion.div>

      <div className="relative z-10 flex w-full items-end px-6 pb-16 sm:px-12 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-2xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <Logo className="border border-gray-700" />
            <span className="font-mono text-sm uppercase tracking-[0.2em] text-gray-500">
              Fedic Finance
            </span>
          </div>

          <h1 className="mb-4 font-mono text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            {HEADLINE}
          </h1>
          <p className="mb-8 max-w-md font-mono text-sm leading-relaxed text-gray-400">
            {SUBTEXT}
          </p>

          <div className="mb-8 flex flex-wrap gap-4">
            <Link
              href="#kontakt"
              className="inline-flex h-11 items-center gap-2 bg-white px-6 font-mono text-sm uppercase tracking-wider text-black transition-colors hover:bg-gray-200"
            >
              Nezávazná konzultace
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="#sluzby"
              className="inline-flex h-11 items-center gap-2 border border-gray-600 px-6 font-mono text-sm uppercase tracking-wider text-gray-300 transition-colors hover:bg-white/5"
            >
              Prozkoumat služby
            </Link>
          </div>

          <div className="flex flex-wrap gap-6">
            {BADGES.map((b, i) => (
              <motion.span
                key={b}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.15 }}
                className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-gray-500"
              >
                <CheckCircle2 className="size-3.5 text-gray-600" />
                {b}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}

/* ──────────────────────────────────────────────
   5. NEON — Cyberpunk, glow effects, scan lines
   ────────────────────────────────────────────── */
function NeonHero() {
  return (
    <>
      <VideoBackground style="neon" />
      <div className="absolute inset-0 bg-black/85" />

      {/* Scan lines overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
        }}
      />

      {/* Thin border frame */}
      <div className="pointer-events-none absolute inset-4 z-[2] border border-cyan-500/30 sm:inset-8" />

      <div className="relative z-10 flex w-full flex-col items-center justify-center px-6 text-center sm:px-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-3"
        >
          <Logo className="border border-cyan-500/50" />
          <span
            className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400"
            style={{ textShadow: "0 0 10px rgba(0,255,255,0.5)" }}
          >
            Fedic Finance
          </span>
        </motion.div>

        <h1 className="mb-6 flex flex-col items-center gap-1 text-4xl font-black uppercase leading-none sm:text-5xl md:text-6xl">
          {["Vaše", "účetnictví.", "Naše", "starost."].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.12 }}
              className="text-white"
              style={{
                textShadow:
                  "0 0 20px rgba(0,255,255,0.4), 0 0 60px rgba(0,255,255,0.15)",
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-10 max-w-md text-sm leading-relaxed text-cyan-100/60"
        >
          {SUBTEXT}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="#kontakt"
            className="inline-flex h-11 items-center gap-2 border border-cyan-400 bg-transparent px-8 text-sm font-medium text-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all hover:bg-cyan-400/10 hover:shadow-[0_0_25px_rgba(0,255,255,0.35)]"
          >
            Nezávazná konzultace
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="#sluzby"
            className="inline-flex h-11 items-center gap-2 border border-fuchsia-500/50 px-8 text-sm font-medium text-fuchsia-400 shadow-[0_0_15px_rgba(255,0,255,0.15)] transition-all hover:bg-fuchsia-500/10"
          >
            Prozkoumat služby
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex flex-wrap justify-center gap-8"
        >
          {BADGES.map((b) => (
            <span
              key={b}
              className="flex items-center gap-2 text-xs uppercase tracking-wider text-cyan-500/60"
              style={{ textShadow: "0 0 8px rgba(0,255,255,0.3)" }}
            >
              <CheckCircle2 className="size-3.5 text-cyan-500/60" />
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </>
  );
}

/* ──────────────────────────────────────────────
   6. AURORA — Staggered words, floating bubbles
   ────────────────────────────────────────────── */
function AuroraHero() {
  const words = HEADLINE.split(" ");

  return (
    <>
      <VideoBackground style="aurora" />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/70 via-teal-900/60 to-cyan-900/70" />

      <div className="relative z-10 flex w-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-3"
        >
          <Logo />
          <span className="text-lg font-medium text-emerald-200">Fedic Finance</span>
        </motion.div>

        <h1 className="mb-6 flex flex-wrap justify-center gap-x-4 gap-y-1 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mb-10 max-w-lg text-base leading-relaxed text-emerald-100/70"
        >
          {SUBTEXT}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="#kontakt"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-emerald-500 px-8 text-sm font-medium text-white transition-colors hover:bg-emerald-400"
          >
            Nezávazná konzultace
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="#sluzby"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-emerald-400/40 px-8 text-sm font-medium text-emerald-200 transition-colors hover:bg-emerald-500/10"
          >
            Prozkoumat služby
          </Link>
        </motion.div>

        {/* Floating bubble badges */}
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {BADGES.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 + i * 0.15, type: "spring", stiffness: 200 }}
              className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-950/40 px-5 py-2.5 text-sm text-emerald-200 backdrop-blur-md"
            >
              <CheckCircle2 className="size-4 text-emerald-400" />
              {b}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ──────────────────────────────────────────────
   7. WARM — Magazine editorial, serif, two-column
   ────────────────────────────────────────────── */
function WarmHero() {
  return (
    <>
      <VideoBackground style="warm" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/60 via-orange-800/50 to-amber-700/60" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-[240px_1fr] md:gap-16 lg:px-12">
        {/* Narrow left column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center border-r border-amber-300/20 pr-8"
        >
          <Logo className="mb-4" />
          <span className="font-serif text-xl font-semibold text-amber-100">
            Fedic Finance
          </span>
          <p className="mt-2 font-serif text-sm italic text-amber-200/70">
            Tradice &amp; profesionalita od roku 1994
          </p>
        </motion.div>

        {/* Wide right column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            {HEADLINE}
          </h1>
          <p className="mb-8 max-w-lg font-serif text-lg leading-relaxed text-amber-100/80">
            {SUBTEXT}
          </p>

          <div className="mb-10 flex flex-wrap gap-4">
            <Link
              href="#kontakt"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-amber-100 px-6 font-serif text-sm font-medium text-amber-900 transition-colors hover:bg-white"
            >
              Nezávazná konzultace
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="#sluzby"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-amber-300/40 px-6 font-serif text-sm font-medium text-amber-100 transition-colors hover:bg-amber-100/10"
            >
              Prozkoumat služby
            </Link>
          </div>

          <div className="flex flex-wrap gap-6">
            {BADGES.map((b, i) => (
              <motion.span
                key={b}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.12 }}
                className="flex items-center gap-2 font-serif text-sm text-amber-200/80"
              >
                <CheckCircle2 className="size-4 text-amber-300" />
                {b}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}

/* ──────────────────────────────────────────────
   8. OCEAN — Centered content, stats ticker bottom
   ────────────────────────────────────────────── */
function OceanHero() {
  const ticker = [
    "500+ klientů",
    "30+ let na trhu",
    "12 000+ daňových přiznání",
    "100% spokojenost",
    "ISO 9001 certifikace",
    "500+ klientů",
    "30+ let na trhu",
    "12 000+ daňových přiznání",
  ];

  return (
    <>
      <VideoBackground style="ocean" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/70 to-cyan-950/80" />

      <div className="relative z-10 flex w-full flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-6 pb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <Logo />
            <span className="text-lg font-semibold text-blue-200">Fedic Finance</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
          >
            {HEADLINE}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8 max-w-lg text-base leading-relaxed text-blue-200/70"
          >
            {SUBTEXT}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="#kontakt"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-cyan-500 px-8 text-sm font-medium text-white transition-colors hover:bg-cyan-400"
            >
              Nezávazná konzultace
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="#sluzby"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-cyan-400/30 px-8 text-sm font-medium text-cyan-200 transition-colors hover:bg-cyan-500/10"
            >
              Prozkoumat služby
            </Link>
          </motion.div>

          {/* Badges as horizontal bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-10 inline-flex flex-wrap justify-center gap-6 rounded-full border border-blue-400/20 bg-blue-950/50 px-8 py-3 backdrop-blur-md"
          >
            {BADGES.map((b) => (
              <span key={b} className="flex items-center gap-2 text-sm text-blue-200/80">
                <CheckCircle2 className="size-4 text-cyan-400" />
                {b}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-20 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
            <path
              d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,35 1440,30 L1440,60 L0,60 Z"
              fill="rgba(8,47,73,0.5)"
            />
          </svg>
        </div>

        {/* Scrolling ticker at bottom */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-blue-400/10 bg-blue-950/60 py-4 backdrop-blur-sm">
          <motion.div
            animate={{ x: [0, -1600] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap"
          >
            {ticker.map((item, i) => (
              <span
                key={i}
                className="mx-8 inline-block text-sm font-medium tracking-wider text-cyan-300/60"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}

/* ──────────────────────────────────────────────
   9. MINIMAL — Maximum whitespace, hover reveal
   ────────────────────────────────────────────── */
function MinimalHero() {
  return (
    <>
      <VideoBackground style="minimal" />
      <div className="absolute inset-0 bg-white/85" />

      <div className="group relative z-10 flex w-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16 flex items-center gap-3"
        >
          <Logo />
          <span className="text-sm font-light tracking-[0.15em] text-gray-400">
            Fedic Finance
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8 text-3xl font-extralight leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
        >
          {HEADLINE}
        </motion.h1>

        {/* Subtext — visible on hover */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mb-10 max-w-md text-base font-light leading-relaxed text-gray-400 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        >
          {SUBTEXT}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link
            href="#kontakt"
            className="inline-flex h-12 items-center gap-2 border border-gray-900 bg-transparent px-10 text-sm font-light uppercase tracking-[0.2em] text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
          >
            Nezávazná konzultace
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>

        {/* Second button appears on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-4 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        >
          <Link
            href="#sluzby"
            className="inline-flex h-10 items-center gap-2 text-sm font-light tracking-wider text-gray-500 transition-colors hover:text-gray-900"
          >
            Prozkoumat služby
          </Link>
        </motion.div>

        {/* Badges — very subtle, appear on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-16 flex flex-wrap justify-center gap-8 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        >
          {BADGES.map((b) => (
            <span key={b} className="flex items-center gap-2 text-xs font-light tracking-wider text-gray-400">
              <CheckCircle2 className="size-3 text-gray-300" />
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </>
  );
}

/* ──────────────────────────────────────────────
   10. BRUTALIST — Raw anti-design
   ────────────────────────────────────────────── */
function BrutalistHero() {
  return (
    <>
      <VideoBackground style="brutalist" />
      <div className="absolute inset-0 bg-yellow-400/80" />

      <div className="relative z-10 w-full px-6 sm:px-12 md:px-20">
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-4"
          >
            <Logo className="border-4 border-black" />
            <span className="text-2xl font-black uppercase tracking-[0.15em] text-black">
              Fedic Finance
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, rotate: -2 }}
            animate={{ opacity: 1, rotate: -1 }}
            transition={{ duration: 0.5 }}
            className="-ml-1 border-b-8 border-black pb-2 text-4xl font-black uppercase leading-none text-black sm:text-6xl md:text-7xl"
          >
            Vaše účetnictví.
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, rotate: 1 }}
            animate={{ opacity: 1, rotate: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="ml-8 text-4xl font-black uppercase leading-none text-black sm:text-6xl md:ml-20 md:text-7xl"
          >
            Naše starost.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-2 max-w-md border-l-4 border-black pl-4 text-base font-bold uppercase leading-relaxed text-black/80"
          >
            {SUBTEXT}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-4 flex flex-wrap gap-4"
          >
            <Link
              href="#kontakt"
              className="inline-flex h-14 items-center gap-3 border-4 border-black bg-black px-8 text-base font-black uppercase tracking-wider text-white transition-transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
            >
              Nezávazná konzultace
              <ArrowRight className="size-5" />
            </Link>
            <Link
              href="#sluzby"
              className="inline-flex h-14 items-center gap-3 border-4 border-black bg-transparent px-8 text-base font-black uppercase tracking-wider text-black transition-transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
            >
              Prozkoumat služby
            </Link>
          </motion.div>

          {/* Raw numbers, no cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 flex flex-wrap gap-10"
          >
            {BADGES.map((b, i) => (
              <div key={b} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-5 text-black" />
                <span
                  className="text-sm font-black uppercase tracking-wider text-black"
                  style={{ transform: i === 1 ? "rotate(-1deg)" : undefined }}
                >
                  {b}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════
   MAIN EXPORT
   ══════════════════════════════════════════════ */

export function StyledHero({
  style,
  heroRef,
}: {
  style: VisualStyleId;
  heroRef?: React.RefObject<HTMLElement | null>;
}) {
  const renderHero = () => {
    if (style === "classic") return <ClassicHero />;
    if (style === "gradient") return <GradientHero />;
    if (style === "glass") return <GlassHero />;
    if (style === "dark") return <DarkHero />;
    if (style === "neon") return <NeonHero />;
    if (style === "aurora") return <AuroraHero />;
    if (style === "warm") return <WarmHero />;
    if (style === "ocean") return <OceanHero />;
    if (style === "minimal") return <MinimalHero />;
    if (style === "brutalist") return <BrutalistHero />;
    return <ClassicHero />;
  };

  return (
    <section
      ref={heroRef as React.RefObject<HTMLDivElement>}
      className="relative flex min-h-[92vh] items-center overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={style}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center"
        >
          {renderHero()}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
