"use client";

import { useEffect, useState } from "react";
import { Coffee } from "lucide-react";

export function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden"
      style={{
        background:
          "linear-gradient(to top, var(--background) 70%, transparent)",
      }}
    >
      <a
        href="#kontakt"
        className="btn-gold w-full justify-center py-3.5"
      >
        Domluvit kafíčko <Coffee className="w-4 h-4" />
      </a>
    </div>
  );
}
