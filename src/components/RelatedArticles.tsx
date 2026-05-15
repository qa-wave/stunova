import Link from "next/link";
import { ARTICLES } from "@/lib/constants";

const allArticles = ARTICLES.map((a) => ({ slug: a.slug, title: a.title }));

export function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const others = allArticles.filter((a) => a.slug !== currentSlug);

  return (
    <div className="mt-16 pt-8 border-t border-[var(--gold)]/15">
      <p className="label-sm mb-6">Další články</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {others.map((a) => (
          <Link
            key={a.slug}
            href={`/blog/${a.slug}`}
            className="card-warm p-5 text-sm font-medium hover:gold-grad transition-all"
          >
            {a.title} →
          </Link>
        ))}
      </div>
    </div>
  );
}
