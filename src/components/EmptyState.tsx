import { Coffee } from "lucide-react";
import Link from "next/link";

export function EmptyState({
  title,
  description,
  cta,
  ctaHref = "#kontakt",
}: {
  title: string;
  description: string;
  cta?: string;
  ctaHref?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-[var(--cream)] border border-[var(--gold)]/15 flex items-center justify-center mb-6">
        <Coffee className="w-7 h-7 text-[var(--gold-dark)]" />
      </div>
      <h3 className="display text-xl mb-2">{title}</h3>
      <p className="text-sm text-[var(--ink-soft)] max-w-sm mb-6">{description}</p>
      {cta && (
        <Link href={ctaHref} className="btn-gold text-sm">
          {cta}
        </Link>
      )}
    </div>
  );
}
