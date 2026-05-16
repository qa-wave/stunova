"use client";

import { useEffect, useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Konečně vím, kde jsem. Každý měsíc dostanu report, rozumím mu a nemusím nic hlídat.",
    name: "Martin K.",
    role: "e-shop, s.r.o.",
  },
  {
    quote: "Bála jsem se daňového přiznání každý rok. Libuše mi jednou vysvětlila, co a proč, a od té doby mi to vlastně dává smysl.",
    name: "Petra V.",
    role: "grafička, OSVČ",
  },
  {
    quote: "Přešli jsme od velké účetní firmy. Tady odpověď přijde za hodinu, ne za dny.",
    name: "Jakub M.",
    role: "IT konzultant, 3 zaměstnanci",
  },
];

export function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timerRef.current = setInterval(next, 6000);
    return () => clearInterval(timerRef.current);
  }, []);

  const pause = () => clearInterval(timerRef.current);
  const resume = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 6000);
  };

  return (
    <div
      className="relative max-w-3xl mx-auto"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {/* Cards */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {testimonials.map((t) => (
            <div key={t.name} className="w-full shrink-0 px-4">
              <div className="bg-[var(--gold)]/5 border border-[var(--gold)]/15 rounded-2xl p-8 md:p-10 text-center">
                <Quote className="w-8 h-8 text-[var(--gold)]/30 mx-auto mb-6" aria-hidden="true" />
                <p className="text-[var(--cream)] text-lg md:text-xl leading-relaxed mb-6 display">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-sm font-medium text-[var(--cream)]">{t.name}</p>
                <p className="text-xs text-[var(--sand)]">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => { prev(); pause(); resume(); }}
          className="p-2 rounded-full border border-[var(--gold)]/20 text-[var(--gold)] hover:bg-[var(--gold)]/10 transition"
          aria-label="Předchozí reference"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); pause(); resume(); }}
              className={`w-2 h-2 rounded-full transition-all ${
                i === active ? "bg-[var(--gold)] w-6" : "bg-[var(--gold)]/30"
              }`}
              aria-label={`Reference ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => { next(); pause(); resume(); }}
          className="p-2 rounded-full border border-[var(--gold)]/20 text-[var(--gold)] hover:bg-[var(--gold)]/10 transition"
          aria-label="Další reference"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
