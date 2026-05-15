"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[var(--card-bg)] border border-[var(--gold)]/20 shadow-lg shadow-[var(--gold)]/10 flex items-center justify-center text-[var(--gold-dark)] hover:bg-[var(--sand)] transition md:bottom-8 md:right-8"
      aria-label="Zpět nahoru"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
