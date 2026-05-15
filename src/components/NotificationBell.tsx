"use client";

import { useState } from "react";
import { Bell, FileText, Receipt, Calendar, X } from "lucide-react";

const notifications = [
  {
    id: 1,
    icon: FileText,
    title: "Nový dokument ke schválení",
    desc: "Kontrolní hlášení DPH · duben 2026",
    time: "před 2 hodinami",
    unread: true,
  },
  {
    id: 2,
    icon: FileText,
    title: "Účetní závěrka připravena",
    desc: "Duben 2026 · PDF · 4 strany",
    time: "před 1 dnem",
    unread: true,
  },
  {
    id: 3,
    icon: Receipt,
    title: "Nová faktura",
    desc: "2026/04/01 · 5 800 Kč · splatnost 14. 5.",
    time: "před 3 dny",
    unread: false,
  },
  {
    id: 4,
    icon: Calendar,
    title: "Schůzka zítra",
    desc: "Měsíční kafíčko · 10:00 · Google Meet",
    time: "před 5 dny",
    unread: false,
  },
];

export function NotificationBell({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const unreadCount = notifications.filter((n) => n.unread).length;

  const textColor = variant === "dark" ? "text-[var(--cream)]" : "text-[var(--ink)]";
  const panelBg = variant === "dark" ? "bg-[var(--ink)]" : "bg-[var(--card-bg)]";

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`relative p-2 rounded-xl hover:bg-[var(--gold)]/10 transition ${textColor}`}
        aria-label={`Notifikace${unreadCount > 0 ? ` (${unreadCount} nové)` : ""}`}
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[var(--gold)] border-2 border-[var(--card-bg)]" />
        )}
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} aria-hidden />
          <div className={`absolute right-0 top-12 w-80 ${panelBg} border border-[var(--gold)]/15 rounded-2xl shadow-xl shadow-[var(--gold)]/10 z-50 overflow-hidden`}>
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--gold)]/10">
              <p className={`text-sm font-medium ${textColor}`}>Notifikace</p>
              <button onClick={() => setOpen(false)} className="text-[var(--gold-dark)] hover:text-[var(--ink)]">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto">
              {notifications.map((n) => (
                <div
                  key={n.id}
                  className={`flex gap-3 px-4 py-3 border-b border-[var(--gold)]/5 last:border-0 ${
                    n.unread ? "bg-[var(--gold)]/5" : ""
                  }`}
                >
                  <n.icon className="w-4 h-4 text-[var(--gold-dark)] mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm ${n.unread ? "font-medium" : ""} ${textColor}`}>{n.title}</p>
                    <p className="text-xs text-[var(--ink-soft)] truncate">{n.desc}</p>
                    <p className="text-[10px] text-[var(--gold-dark)] mt-0.5">{n.time}</p>
                  </div>
                  {n.unread && (
                    <span className="w-2 h-2 rounded-full bg-[var(--gold)] mt-1.5 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
