"use client";

import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (endpoint) {
      await fetch(`https://formspree.io/f/${endpoint}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
    } else {
      const name = data.get("name") as string;
      const email = data.get("email") as string;
      const message = data.get("message") as string;
      window.location.href = `mailto:libuse@stunova.cz?subject=Kafíčko – ${name}&body=${encodeURIComponent(message)}%0A%0AOdpovědět na: ${email}`;
    }

    setSending(false);
    setSent(true);
    form.reset();
  };

  return (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      {/* Form */}
      <FadeIn>
        {sent ? (
          <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded-2xl p-8 text-center">
            <p className="display text-2xl text-[var(--cream)] mb-2">Děkuji!</p>
            <p className="text-[var(--sand)] text-sm">
              Ozvu se ti do 24 hodin. Těším se na kafíčko.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-widest text-[var(--gold-light)] mb-2">
                Jméno
              </label>
              <input
                name="name"
                type="text"
                required
                placeholder="Jan Novák"
                className="w-full bg-[var(--gold)]/5 border border-[var(--gold)]/20 rounded-xl px-4 py-3 text-base text-[var(--cream)] placeholder:text-[var(--sand)]/50 focus:outline-none focus:border-[var(--gold)] transition"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-[var(--gold-light)] mb-2">
                E-mail
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="jan@firma.cz"
                className="w-full bg-[var(--gold)]/5 border border-[var(--gold)]/20 rounded-xl px-4 py-3 text-base text-[var(--cream)] placeholder:text-[var(--sand)]/50 focus:outline-none focus:border-[var(--gold)] transition"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-[var(--gold-light)] mb-2">
                Zpráva
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Chtěl bych probrat účetnictví pro mou s.r.o.…"
                className="w-full bg-[var(--gold)]/5 border border-[var(--gold)]/20 rounded-xl px-4 py-3 text-base text-[var(--cream)] placeholder:text-[var(--sand)]/50 focus:outline-none focus:border-[var(--gold)] transition resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-[var(--gold)] text-[var(--ink)] hover:bg-[var(--gold-light)] transition disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {sending ? "Odesílám…" : "Odeslat zprávu"}
            </button>
          </form>
        )}
      </FadeIn>

      {/* Direct contact */}
      <FadeIn delay={0.15}>
        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--gold-light)] mb-3">
              Nebo přímo
            </p>
            <a
              href="mailto:libuse@stunova.cz"
              className="flex items-center gap-3 py-2 text-[var(--cream)] hover:text-[var(--gold-light)] transition"
            >
              <Mail className="w-5 h-5 text-[var(--gold)]" />
              <span>libuse@stunova.cz</span>
            </a>
            <a
              href="tel:+420728000000"
              className="flex items-center gap-3 py-2 text-[var(--cream)] hover:text-[var(--gold-light)] transition"
            >
              <Phone className="w-5 h-5 text-[var(--gold)]" />
              <span>+420 728 ••• •••</span>
            </a>
          </div>

          <div className="hairline-x opacity-30" />

          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--gold-light)] mb-3">
              Kde se potkáme
            </p>
            <p className="text-sm text-[var(--sand)]">
              Praha 4 · Nusle<br />
              Schůzky osobně i online (Google Meet)<br />
              Po–Pá 9:00–17:00
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
