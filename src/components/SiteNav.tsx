"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const logoUrl = "/stunova-logo.jpg";

const navLinks = [
  ["Služby", "#sluzby"],
  ["Ceník", "#cenik"],
  ["Jak to chodí", "#proces"],
  ["O mně", "#o-mne"],
  ["Kontakt", "#kontakt"],
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Hlavní navigace"
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b transition-shadow duration-300 ${
        scrolled
          ? "bg-[var(--background)]/90 border-[var(--gold)]/15 shadow-lg shadow-[var(--gold)]/5"
          : "bg-[var(--background)]/80 border-[var(--gold)]/10"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="logo-mark">
            <Image
              src={logoUrl}
              alt="Libuše Stuňová"
              width={28}
              height={28}
              sizes="28px"
              className="rounded-md object-cover"
            />
          </div>
          <span className="hidden sm:inline text-sm font-medium text-[var(--ink)]">
            Libuše Stuňová
          </span>
        </Link>

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
          <Link href="/prihlaseni" className="btn-soft text-xs py-2.5 px-4">
            Přihlášení
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden p-3 rounded-xl hover:bg-[var(--sand)] transition"
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <>
          <div
            className="md:hidden fixed inset-0 top-[72px] z-40"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="md:hidden relative z-50 border-t border-[var(--gold)]/10 bg-[var(--background)]/95 backdrop-blur-xl px-6 py-4 space-y-1">
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
        </>
      )}
    </nav>
  );
}
