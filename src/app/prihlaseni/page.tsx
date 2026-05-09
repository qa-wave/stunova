"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";

export default function LoginPage() {
  const [mode, setMode] = useState<"klient" | "admin">("klient");

  return (
    <div className="variant-warm min-h-screen flex flex-col">
      <nav className="px-6 md:px-12 py-6 flex items-center justify-between">
        <Link href="/">
          <Logo size="sm" />
        </Link>
        <Link
          href="/"
          className="text-sm text-[#5a4a32] hover:text-[#2a1f12] transition"
        >
          ← Zpět na web
        </Link>
      </nav>

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md fade-up">
          <div
            className="absolute inset-x-0 top-1/3 h-[40vh] blur-3xl opacity-30 -z-10"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, #c8a867 0%, transparent 70%)",
            }}
          />

          <div className="bg-white/70 backdrop-blur-xl border border-white rounded-[2.5rem] p-10 shadow-2xl shadow-[#c8a867]/20">
            <div className="text-center mb-8">
              <div className="text-3xl mb-3">☕</div>
              <h1 className="display text-4xl mb-2">Vítej zpět</h1>
              <p className="text-sm text-[#5a4a32]">
                Tvoje účetnictví, faktury a dokumenty na jednom místě.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-1 p-1 bg-[#fbf5e9] rounded-full mb-8 border border-[#c8a867]/20">
              {(["klient", "admin"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={`py-2 text-sm rounded-full transition ${
                    mode === m
                      ? "bg-white text-[#2a1f12] shadow-sm"
                      : "text-[#5a4a32] hover:text-[#2a1f12]"
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
                <label className="block text-xs uppercase tracking-widest text-[#8e6f3f] mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  placeholder="ty@firma.cz"
                  className="w-full bg-white/80 border border-[#c8a867]/30 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-[#c8a867] focus:bg-white transition"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs uppercase tracking-widest text-[#8e6f3f]">
                    Heslo
                  </label>
                  <a
                    href="#"
                    className="text-xs text-[#8e6f3f] hover:text-[#2a1f12] transition"
                  >
                    Zapomněl jsi?
                  </a>
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full bg-white/80 border border-[#c8a867]/30 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-[#c8a867] focus:bg-white transition"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full px-7 py-4 text-white font-medium shadow-lg shadow-[#c8a867]/30 transition hover:shadow-[#c8a867]/50"
                style={{
                  background:
                    "linear-gradient(135deg, #c8a867 0%, #8e6f3f 100%)",
                }}
              >
                {mode === "klient" ? "Vstoupit do portálu" : "Otevřít admin"}
              </button>
            </form>

            <div className="my-6 flex items-center gap-3">
              <div className="flex-1 h-px bg-[#c8a867]/30" />
              <span className="text-xs text-[#8e6f3f] uppercase tracking-widest">
                nebo
              </span>
              <div className="flex-1 h-px bg-[#c8a867]/30" />
            </div>

            <button
              type="button"
              className="w-full rounded-full px-7 py-4 bg-white/80 border border-[#c8a867]/30 hover:bg-white transition text-sm"
            >
              Pošli mi přihlašovací odkaz e-mailem
            </button>

            <p className="mt-8 text-center text-xs text-[#5a4a32]">
              Ještě nejsme spolu?{" "}
              <Link
                href="/#kontakt"
                className="text-[#8e6f3f] hover:text-[#2a1f12] underline underline-offset-4"
              >
                Domluvíme si kafíčko ☕
              </Link>
            </p>
          </div>
        </div>
      </main>

      <footer className="px-6 md:px-12 py-6 text-xs text-[#5a4a32]/70 text-center">
        Libuše Stuňová · Účetnictví © {new Date().getFullYear()} · Diskrétně,
        bezpečně, šifrovaně.
      </footer>
    </div>
  );
}
