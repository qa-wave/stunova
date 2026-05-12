import Link from "next/link";
import { SignIn } from "@clerk/nextjs";
import { Logo } from "@/components/Logo";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="px-6 md:px-12 py-6 flex items-center justify-between">
        <Link href="/">
          <Logo size="sm" />
        </Link>
        <Link
          href="/"
          className="text-sm text-[var(--ink-soft)] hover:text-[var(--ink)] transition"
        >
          ← Zpět na web
        </Link>
      </nav>

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md relative">
          <div
            className="absolute inset-x-0 top-1/3 h-[40vh] blur-3xl opacity-30 -z-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, var(--gold) 0%, transparent 70%)",
            }}
          />

          <div className="text-center mb-8">
            <div className="text-3xl mb-3">☕</div>
            <h1 className="display text-4xl mb-2">Vítej zpět</h1>
            <p className="text-sm text-[var(--ink-soft)]">
              Tvoje účetnictví, faktury a dokumenty na jednom místě.
            </p>
          </div>

          <div className="flex justify-center">
            <SignIn
              routing="hash"
              fallbackRedirectUrl="/portal"
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "shadow-none bg-transparent border-0 w-full",
                  headerTitle: "hidden",
                  headerSubtitle: "hidden",
                  socialButtonsBlockButton:
                    "rounded-full border-[var(--gold)]/20",
                  formButtonPrimary:
                    "rounded-full bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold)] text-[var(--ink)] hover:from-[var(--gold)] hover:to-[var(--gold-dark)]",
                  formFieldInput:
                    "rounded-xl border-[var(--gold)]/20 focus:border-[var(--gold)]",
                  footerAction: "hidden",
                },
              }}
            />
          </div>

          <p className="mt-6 text-center text-xs text-[var(--ink-soft)]">
            Ještě nejsme spolu?{" "}
            <Link
              href="/#kontakt"
              className="text-[var(--gold-dark)] hover:text-[var(--ink)] underline underline-offset-4"
            >
              Domluvíme si kafíčko ☕
            </Link>
          </p>
        </div>
      </main>

      <footer className="px-6 md:px-12 py-6 text-xs text-[var(--ink-soft)] text-center">
        Libuše Stuňová · Účetnictví © {new Date().getFullYear()} · Diskrétně,
        bezpečně, šifrovaně.
      </footer>
    </div>
  );
}
