"use client";

import { Share2, Link2, Check } from "lucide-react";
import { useState } from "react";
import { BRAND } from "@/lib/constants";

export function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false);
  const url = `${BRAND.url}/blog/${slug}`;
  const text = `${title} — ${BRAND.title}`;

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareNative = async () => {
    if (navigator.share) {
      await navigator.share({ title: text, url });
    } else {
      copyLink();
    }
  };

  return (
    <div className="flex items-center gap-3 mt-8 pt-6 border-t border-[var(--gold)]/15">
      <span className="text-xs text-[var(--ink-soft)] uppercase tracking-[0.15em]">Sdílet</span>
      <button
        onClick={shareNative}
        className="p-2 rounded-lg hover:bg-[var(--sand)] transition text-[var(--gold-dark)]"
        title="Sdílet"
      >
        <Share2 className="w-4 h-4" />
      </button>
      <button
        onClick={copyLink}
        className="p-2 rounded-lg hover:bg-[var(--sand)] transition text-[var(--gold-dark)]"
        title="Kopírovat odkaz"
      >
        {copied ? <Check className="w-4 h-4 text-[var(--status-ok)]" /> : <Link2 className="w-4 h-4" />}
      </button>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg hover:bg-[var(--sand)] transition text-[var(--gold-dark)] text-xs font-medium"
        title="Sdílet na X"
      >
        𝕏
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg hover:bg-[var(--sand)] transition text-[var(--gold-dark)] text-xs font-medium"
        title="Sdílet na LinkedIn"
      >
        in
      </a>
    </div>
  );
}
