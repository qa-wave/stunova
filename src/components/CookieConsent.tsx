"use client";

import { useState, useEffect } from "react";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] p-4 md:p-6">
      <div className="max-w-2xl mx-auto bg-[var(--card-bg)] border border-[var(--gold)]/15 rounded-2xl p-5 shadow-xl shadow-[var(--gold)]/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-[var(--ink-soft)] flex-1">
          Tento web používá pouze nezbytné cookies pro správné fungování.
          Žádné sledovací cookies nepoužíváme.
        </p>
        <div className="flex gap-2 shrink-0">
          <button onClick={decline} className="btn-soft text-xs py-2 px-4">
            Odmítnout
          </button>
          <button onClick={accept} className="btn-gold text-xs py-2 px-4">
            Rozumím
          </button>
        </div>
      </div>
    </div>
  );
}
