"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const article = document.querySelector("article");
      if (!article) return;

      const rect = article.getBoundingClientRect();
      const articleTop = window.scrollY + rect.top;
      const articleHeight = rect.height;
      const scrolled = window.scrollY - articleTop;
      const pct = Math.min(Math.max(scrolled / (articleHeight - window.innerHeight), 0), 1);
      setProgress(pct * 100);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (progress <= 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold)]"
        style={{ width: `${progress}%`, transition: "width 0.1s" }}
      />
    </div>
  );
}
