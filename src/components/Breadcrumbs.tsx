"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const labels: Record<string, string> = {
  portal: "Portál",
  admin: "Admin",
  dokumenty: "Dokumenty",
  faktury: "Faktury",
  schuzky: "Schůzky",
  klienti: "Klienti",
  blog: "Blog",
};

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length <= 1) return null;

  const crumbs = segments.map((seg, i) => {
    const href = "/" + segments.slice(0, i + 1).join("/");
    const label = labels[seg] || decodeURIComponent(seg);
    const isLast = i === segments.length - 1;

    return (
      <li key={href} className="flex items-center gap-1.5">
        {i > 0 && <ChevronRight className="w-3 h-3 text-[var(--gold)]/40" aria-hidden="true" />}
        {isLast ? (
          <span className="text-[var(--ink)]">{label}</span>
        ) : (
          <Link href={href} className="text-[var(--gold-dark)] hover:text-[var(--ink)] transition">
            {label}
          </Link>
        )}
      </li>
    );
  });

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-1.5 text-xs">
        {crumbs}
      </ol>
    </nav>
  );
}
