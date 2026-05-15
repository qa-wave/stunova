import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { ARTICLES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description: "Praktické tipy k účetnictví, daním a podnikání.",
};

/** Format ISO date to Czech display format */
function formatDate(iso: string) {
  const d = new Date(iso);
  const months = [
    "ledna", "února", "března", "dubna", "května", "června",
    "července", "srpna", "září", "října", "listopadu", "prosince",
  ];
  return `${d.getUTCDate()}. ${months[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

const articles = ARTICLES.map((a) => ({
  slug: a.slug,
  title: a.title,
  excerpt: a.excerpt,
  date: formatDate(a.date),
  readTime: a.readTime,
}));

export default function BlogIndex() {
  return (
    <div className="max-w-4xl mx-auto pt-8">
      <div className="mb-12">
        <p className="label-sm mb-3">Účetní tipy</p>
        <h1 className="display text-4xl md:text-5xl">Blog</h1>
        <p className="text-[var(--ink-soft)] mt-4 max-w-lg">
          Praktické články o účetnictví, daních a podnikání. Žádné právničtiny — vysvětlím to lidsky.
        </p>
      </div>

      <div className="space-y-6">
        {articles.map((article, i) => (
          <FadeIn key={article.slug} delay={i * 0.1}>
            <Link
              href={`/blog/${article.slug}`}
              className="block card-warm p-8 group"
            >
              <div className="flex items-center gap-4 text-xs text-[var(--ink-soft)] mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" /> {article.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" /> {article.readTime}
                </span>
              </div>
              <h2 className="display text-xl md:text-2xl mb-3 group-hover:gold-grad transition-all not-italic font-medium">
                {article.title}
              </h2>
              <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
                {article.excerpt}
              </p>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
