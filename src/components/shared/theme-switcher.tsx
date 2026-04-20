"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Check } from "lucide-react";

export const themes = [
  { id: "navy", name: "Navy & Gold", colors: ["#1a2744", "#d4a24e"] },
  { id: "emerald", name: "Emerald", colors: ["#064e3b", "#34d399"] },
  { id: "violet", name: "Violet", colors: ["#3b0764", "#a78bfa"] },
  { id: "rose", name: "Rose", colors: ["#4c0519", "#fb7185"] },
  { id: "midnight", name: "Midnight", colors: ["#0a0a0f", "#60a5fa"] },
  { id: "sunset", name: "Sunset", colors: ["#431407", "#fb923c"] },
] as const;

export type ThemeId = (typeof themes)[number]["id"];

export function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<ThemeId>("navy");

  useEffect(() => {
    const saved = localStorage.getItem("ff-theme") as ThemeId | null;
    if (saved && themes.some((t) => t.id === saved)) {
      setCurrent(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  function setTheme(id: ThemeId) {
    setCurrent(id);
    localStorage.setItem("ff-theme", id);
    document.documentElement.setAttribute("data-theme", id);
    setOpen(false);
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute bottom-16 left-0 w-52 rounded-2xl border bg-card p-2 shadow-2xl"
          >
            <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Styl
            </p>
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setTheme(theme.id)}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
              >
                <div className="flex gap-1">
                  {theme.colors.map((c, i) => (
                    <div
                      key={i}
                      className="h-5 w-5 rounded-full shadow-inner"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <span className="flex-1 text-left">{theme.name}</span>
                {current === theme.id && (
                  <Check className="h-4 w-4 text-primary" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-card border shadow-lg transition-shadow hover:shadow-xl"
      >
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <Palette className="h-5 w-5 text-foreground" />
        </motion.div>
      </motion.button>
    </div>
  );
}
