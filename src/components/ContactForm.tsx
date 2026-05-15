"use client";

import { useState } from "react";
import { Mail, Phone, Send, Coffee, MessageCircle, Calendar } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { CONTACT } from "@/lib/constants";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL;

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
      window.location.href = `mailto:${CONTACT.email}?subject=Kafíčko – ${name}&body=${encodeURIComponent(message)}%0A%0AOdpovědět na: ${email}`;
    }

    setSending(false);
    setSent(true);
    form.reset();
  };

  return (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      <FadeIn>
        {sent ? (
          <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded-2xl p-8 text-center">
            <p className="display text-2xl text-[var(--cream)] mb-2">Dorazilo, díky!</p>
            <p className="text-[var(--sand)] text-sm">
              Ozvu se ti do 24 hodin — a domluvíme první kafíčko.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-widest text-[var(--gold-light)] mb-2">
                Jak se jmenuješ?
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
                Tvůj e-mail
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
                Co tě přivedlo?
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Napiš pár vět — s.r.o., OSVČ, kolik zaměstnanců, co tě trápí."
                className="w-full bg-[var(--gold)]/5 border border-[var(--gold)]/20 rounded-xl px-4 py-3 text-base text-[var(--cream)] placeholder:text-[var(--sand)]/50 focus:outline-none focus:border-[var(--gold)] transition resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-[var(--gold)] text-[var(--ink)] hover:bg-[var(--gold-light)] transition disabled:opacity-60"
            >
              <Coffee className="w-4 h-4" />
              {sending ? "Posílám…" : "Domluvit kafíčko"}
            </button>
          </form>
        )}
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="space-y-6">
          {/* Calendly */}
          {CALENDLY_URL && (
            <div>
              <p className="text-xs uppercase tracking-widest text-[var(--gold-light)] mb-3">
                Rezervuj si termín
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-3 px-5 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/25 text-[var(--cream)] hover:bg-[var(--gold)]/15 transition"
              >
                <Calendar className="w-5 h-5 text-[var(--gold)]" />
                <div>
                  <span className="text-sm font-medium">Vybrat termín online</span>
                  <span className="block text-xs text-[var(--sand)]">30 min · zdarma · Google Meet nebo osobně</span>
                </div>
              </a>
            </div>
          )}

          {/* Direct contact */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--gold-light)] mb-3">
              Nebo napiš přímo
            </p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 py-2 text-[var(--cream)] hover:text-[var(--gold-light)] transition"
            >
              <Mail className="w-5 h-5 text-[var(--gold)]" />
              <span>{CONTACT.email}</span>
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              className="flex items-center gap-3 py-2 text-[var(--cream)] hover:text-[var(--gold-light)] transition"
            >
              <Phone className="w-5 h-5 text-[var(--gold)]" />
              <span>{CONTACT.phoneDisplay}</span>
            </a>
            {/* WhatsApp — mobilní konverze */}
            <a
              href={CONTACT.whatsappUrl}
              className="flex items-center gap-3 py-2 text-[var(--cream)] hover:text-[var(--gold-light)] transition"
            >
              <MessageCircle className="w-5 h-5 text-[var(--gold)]" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="hairline-x opacity-30" />

          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--gold-light)] mb-3">
              Kde se setkáme
            </p>
            <p className="text-sm text-[var(--sand)]">
              {CONTACT.address}<br />
              Schůzky osobně i online (Google Meet)<br />
              {CONTACT.hours}
            </p>
          </div>

          <div className="hairline-x opacity-30" />
          <p className="text-xs text-[var(--sand)]/60">
            Odpovím do 24 hodin v pracovní dny. Garantuji.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
