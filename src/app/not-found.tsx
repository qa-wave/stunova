import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="display text-8xl md:text-9xl gold-grad mb-6">404</p>
      <h1 className="display text-3xl md:text-4xl mb-4">
        Tady nic není
      </h1>
      <p className="text-[var(--ink-soft)] max-w-md mb-10">
        Stránka, kterou hledáš, neexistuje nebo byla přesunuta.
        Ale nevadí — vrátíme tě zpátky.
      </p>
      <div className="flex gap-4">
        <Link href="/" className="btn-gold">
          Zpět na web
        </Link>
        <Link href="/prihlaseni" className="btn-soft">
          Přihlášení
        </Link>
      </div>
    </div>
  );
}
