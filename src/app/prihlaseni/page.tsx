"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";

export default function LoginPage() {
  const [mode, setMode] = useState<"klient" | "admin">("klient");

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="px-6 md:px-12 py-6 flex items-center justify-between">
        <Link href="/">
          <Logo size="sm" />
        </Link>
        <Link
          href="/"
          className="text-sm text-[var(--ink-soft)] hover:text-[var(--ink)] transition"
        >
          ← Zpět na web
        </Link>
      </nav>

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md relative">
          <div
            className="absolute inset-x-0 top-1/3 h-[40vh] blur-3xl opacity-30 -z-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, var(--gold) 0%, transparent 70%)",
            }}
          />

          <div className="bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--ring-gold)] rounded-[2.5rem] p-10 shadow-2xl shadow-[var(--shadow-gold)]">
            <div className="text-center mb-8">
              <div className="text-3xl mb-3">☕</div>
              <h1 className="display text-4xl mb-2">Vítej zpět</h1>
              <p className="text-sm text-[var(--ink-soft)]">
                Tvoje účetnictví, faktury a dokumenty na jednom místě.
              </p>
              <p className="text-[10px] text-[var(--gold-dark)] mt-2 uppercase tracking-widest">
                Demo · bez hesla
              </p>
            </div>

            <div className="grid grid-cols-2 gap-1 p-1 bg-[var(--cream)] rounded-full mb-8 border border-[var(--gold)]/20">
              {(["klient", "admin"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={`py-2 text-sm rounded-full transition ${
                    mode === m
                      ? "bg-[var(--card-bg)] text-[var(--ink)] shadow-sm"
                      : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
                  }`}
                >
                  {m === "klient" ? "Klient" : "Libuše · admin"}
                </button>
              ))}
            </div>

            <form
              className="space-y-4"
              action={mode === "klient" ? "/portal" : "/admin"}
            >
              <div>
                <label className="block text-xs uppercase tracking-widest text-[var(--gold-dark)] mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  placeholder="ty@firma.cz"
                  className="w-full bg-[var(--card-bg)] border border-[var(--gold)]/20 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-[var(--gold)] focus:bg-[var(--cream)] transition"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs uppercase tracking-widest text-[var(--gold-dark)]">
                    Heslo
                  </label>
                  <a
                    href="#"
                    className="text-xs text-[var(--gold-dark)] hover:text-[var(--ink)] transition"
                  >
                    Zapomněl jsi?
                  </a>
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full bg-[var(--card-bg)] border border-[var(--gold)]/20 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-[var(--gold)] focus:bg-[var(--cream)] transition"
                />
              </div>

              <button type="submit" className="w-full btn-gold justify-center py-4">
                {mode === "klient" ? "Vstoupit do portálu" : "Otevřít admin"}
              </button>
            </form>

            <div className="my-6 flex items-center gap-3">
              <div className="flex-1 hairline-x" />
              <span className="text-xs text-[var(--gold-dark)] uppercase tracking-widest">
                nebo
              </span>
              <div className="flex-1 hairline-x" />
            </div>

            <button
              type="button"
              className="w-full btn-soft justify-center py-4"
            >
              Pošli mi přihlašovací odkaz e-mailem
            </button>

            <p className="mt-8 text-center text-xs text-[var(--ink-soft)]">
              Ještě nejsme spolu?{" "}
              <Link
                href="/#kontakt"
                className="text-[var(--gold-dark)] hover:text-[var(--ink)] underline underline-offset-4"
              >
                Domluvíme si kafíčko ☕
              </Link>
            </p>
          </div>
        </div>
      </main>

      <footer className="px-6 md:px-12 py-6 text-xs text-[var(--ink-soft)] text-center">
        Libuše Stuňová · Účetnictví © {new Date().getFullYear()} · Diskrétně,
        bezpečně, šifrovaně.
      </footer>
    </div>
  );
}
