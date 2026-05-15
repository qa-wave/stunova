"use client";

import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to Resend/Mailchimp when ready
    setSent(true);
    setEmail("");
  };

  return (
    <div className="card-warm p-8 text-center max-w-lg mx-auto">
      <Mail className="w-8 h-8 text-[var(--gold-dark)] mx-auto mb-4" />
      <h3 className="display text-xl mb-2 not-italic font-medium">Účetní tipy do mailu</h3>
      <p className="text-sm text-[var(--ink-soft)] mb-6">
        Jednou měsíčně pošlu praktický tip k daním nebo účetnictví. Žádný spam, slibuju.
      </p>

      {sent ? (
        <div className="flex items-center justify-center gap-2 text-sm text-[var(--gold-dark)]">
          <CheckCircle className="w-4 h-4" />
          Díky! Ozvu se.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tvuj@email.cz"
            className="flex-1 bg-[var(--cream)] border border-[var(--gold)]/20 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--gold)] transition"
          />
          <button type="submit" className="btn-gold text-xs py-2.5 px-5">
            Odebírat
          </button>
        </form>
      )}
    </div>
  );
}
