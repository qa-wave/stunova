import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ArrowLeft } from "lucide-react";
import { ReadingProgress } from "@/components/ReadingProgress";

export const metadata: Metadata = {
  title: {
    default: "Blog",
    template: "%s · Blog · Libuše Stuňová",
  },
  description: "Praktické tipy k účetnictví, daním a podnikání od Libuše Stuňové.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <ReadingProgress />
      <nav className="px-6 md:px-12 py-6 flex items-center justify-between max-w-4xl mx-auto">
        <Link href="/">
          <Logo size="sm" />
        </Link>
        <Link href="/" className="flex items-center gap-2 text-sm text-[var(--ink-soft)] hover:text-[var(--ink)] transition">
          <ArrowLeft className="w-4 h-4" /> Zpět na web
        </Link>
      </nav>
      <main className="px-6 md:px-12 pb-20">
        {children}
      </main>
      <footer className="px-6 md:px-12 py-8 text-center text-xs text-[var(--ink-soft)] border-t border-[var(--gold)]/10">
        © 2026 Libuše Stuňová · Účetnictví ·{" "}
        <Link href="/" className="hover:text-[var(--ink)] transition">stunova.qawave.ai</Link>
      </footer>
    </div>
  );
}
