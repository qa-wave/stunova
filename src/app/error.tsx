"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="display text-6xl gold-grad mb-6">Ups</p>
      <h1 className="display text-3xl md:text-4xl mb-4">
        Něco se pokazilo
      </h1>
      <p className="text-[var(--ink-soft)] max-w-md mb-10">
        Neboj, nic se neztratilo. Zkus to znovu nebo se vrať na úvodní stránku.
      </p>
      <div className="flex gap-4">
        <button onClick={reset} className="btn-gold">
          Zkusit znovu
        </button>
        <a href="/" className="btn-soft">
          Zpět na web
        </a>
      </div>
    </div>
  );
}
