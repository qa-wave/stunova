"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, ChevronDown } from "lucide-react";

export const visualStyles = [
  { id: "classic", name: "Klasik", desc: "Čistý a profesionální", preview: "bg-gradient-to-br from-slate-800 to-slate-900" },
  { id: "gradient", name: "Gradient", desc: "Barevné přechody", preview: "bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500" },
  { id: "glass", name: "Glass", desc: "Sklo a průhlednost", preview: "bg-gradient-to-br from-white/80 to-blue-100/80" },
  { id: "dark", name: "Dark", desc: "Tmavý a elegantní", preview: "bg-gradient-to-br from-gray-950 to-gray-900" },
  { id: "neon", name: "Neon", desc: "Odvážný a výrazný", preview: "bg-gradient-to-br from-black via-purple-950 to-black" },
  { id: "aurora", name: "Aurora", desc: "Severní záře", preview: "bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900" },
  { id: "warm", name: "Warm", desc: "Teplé tóny", preview: "bg-gradient-to-br from-amber-100 to-orange-50" },
  { id: "ocean", name: "Ocean", desc: "Hluboký oceán", preview: "bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-950" },
  { id: "minimal", name: "Minimal", desc: "Čistý minimalismus", preview: "bg-white border border-gray-200" },
  { id: "brutalist", name: "Brutalist", desc: "Hrubý a surový", preview: "bg-yellow-400" },
] as const;

export type VisualStyleId = (typeof visualStyles)[number]["id"];

const StyleContext = createContext<{ style: VisualStyleId; setStyle: (s: VisualStyleId) => void }>({
  style: "classic",
  setStyle: () => {},
});

export function useVisualStyle() {
  return useContext(StyleContext);
}

export function VisualStyleProvider({ children }: { children: React.ReactNode }) {
  const [style, setStyleState] = useState<VisualStyleId>("classic");

  useEffect(() => {
    const saved = localStorage.getItem("ff-visual-style") as VisualStyleId | null;
    if (saved && visualStyles.some((s) => s.id === saved)) {
      setStyleState(saved);
    }
  }, []);

  function setStyle(id: VisualStyleId) {
    setStyleState(id);
    localStorage.setItem("ff-visual-style", id);
  }

  return (
    <StyleContext.Provider value={{ style, setStyle }}>
      {children}
    </StyleContext.Provider>
  );
}

export function StyleSwitcherBar() {
  const { style, setStyle } = useVisualStyle();
  const [expanded, setExpanded] = useState(false);
  const current = visualStyles.find((s) => s.id === style);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-2 py-3">
        {/* Top row: label + current + toggle */}
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-muted-foreground" />
          <span className="text-xs font-medium text-muted-foreground">Vizuální styl:</span>

          {/* First 5 always visible */}
          <div className="flex gap-1.5">
            {visualStyles.slice(0, 5).map((vs) => (
              <button
                key={vs.id}
                onClick={() => setStyle(vs.id)}
                className={`group relative flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-medium transition-all ${
                  style === vs.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <div className={`h-3 w-3 rounded-full ${vs.preview} shadow-inner shrink-0`} />
                <span className="hidden lg:inline">{vs.name}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 rounded-full bg-muted px-2.5 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted/80 transition-all"
          >
            +5
            <ChevronDown className={`h-3 w-3 transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* Expanded row */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex gap-1.5 overflow-hidden"
            >
              {visualStyles.slice(5).map((vs) => (
                <button
                  key={vs.id}
                  onClick={() => setStyle(vs.id)}
                  className={`group relative flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-medium transition-all ${
                    style === vs.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  <div className={`h-3 w-3 rounded-full ${vs.preview} shadow-inner shrink-0`} />
                  <span className="hidden lg:inline">{vs.name}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
