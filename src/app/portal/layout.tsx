"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton, SignOutButton, useUser } from "@clerk/nextjs";
import { Logo } from "@/components/Logo";
import { LayoutDashboard, FileText, Receipt, Calendar, LogOut } from "lucide-react";

const hasClerk = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

const navItems = [
  { href: "/portal", label: "Přehled", icon: LayoutDashboard },
  { href: "/portal/dokumenty", label: "Dokumenty", icon: FileText },
  { href: "/portal/faktury", label: "Faktury", icon: Receipt },
  { href: "/portal/schuzky", label: "Schůzky", icon: Calendar },
];

function UserInfo() {
  if (!hasClerk) {
    return { name: "Klient", initials: "KL" };
  }
  try {
    const { user } = useUser();
    const name = user?.firstName || user?.emailAddresses?.[0]?.emailAddress?.split("@")[0] || "Klient";
    const initials = user?.firstName && user?.lastName
      ? `${user.firstName[0]}${user.lastName[0]}`
      : name.slice(0, 2).toUpperCase();
    return { name, initials };
  } catch {
    return { name: "Klient", initials: "KL" };
  }
}

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { name: displayName, initials } = UserInfo();

  const isActive = (href: string) =>
    href === "/portal" ? pathname === "/portal" : pathname.startsWith(href);

  return (
    <div className="variant-warm min-h-screen flex">
      <aside className="hidden md:flex w-64 flex-col border-r border-[var(--gold)]/20 bg-[var(--card-bg)]/40 backdrop-blur-xl">
        <div className="p-6 border-b border-[var(--gold)]/20">
          <Link href="/"><Logo size="md" /></Link>
          <p className="text-[10px] uppercase tracking-widest text-[var(--gold-dark)] mt-3">Klientský portál</p>
        </div>

        <nav aria-label="Portál" className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition ${
                isActive(item.href)
                  ? "bg-[var(--card-bg)] text-[var(--ink)] font-medium shadow-sm"
                  : "text-[var(--ink)] hover:bg-[var(--card-bg)]/70"
              }`}
            >
              <item.icon className={`w-4 h-4 ${isActive(item.href) ? "text-[var(--gold)]" : "text-[var(--gold-dark)]"}`} />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-[var(--gold)]/20">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--card-bg)]/60 backdrop-blur-sm">
            {hasClerk ? (
              <UserButton appearance={{ elements: { avatarBox: "size-9" } }} />
            ) : (
              <div className="size-9 rounded-full flex items-center justify-center text-sm font-medium bg-[var(--gold)] text-[var(--ink)]">{initials}</div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm truncate">{displayName}</p>
              <p className="text-[10px] text-[var(--gold-dark)] truncate">Klientský portál</p>
            </div>
            {hasClerk ? (
              <SignOutButton redirectUrl="/prihlaseni">
                <button className="text-[var(--gold-dark)] hover:text-[var(--ink)] transition" title="Odhlásit"><LogOut className="w-4 h-4" /></button>
              </SignOutButton>
            ) : (
              <Link href="/prihlaseni" className="text-[var(--gold-dark)] hover:text-[var(--ink)] transition" title="Odhlásit"><LogOut className="w-4 h-4" /></Link>
            )}
          </div>
        </div>
      </aside>

      <main className="flex-1 min-w-0 flex flex-col">
        <div className="md:hidden flex items-center justify-between px-4 py-4 border-b border-[var(--gold)]/20 bg-[var(--card-bg)]/60 backdrop-blur-xl">
          <Link href="/portal"><Logo size="xs" /></Link>
          <Link href="/prihlaseni" className="flex items-center gap-1.5 text-xs text-[var(--gold-dark)]">
            <LogOut className="w-3.5 h-3.5" /> Odhlásit
          </Link>
        </div>

        <div className="flex-1 p-6 md:p-10 pb-24 md:pb-10">{children}</div>

        <nav aria-label="Portál mobilní" className="md:hidden fixed bottom-0 inset-x-0 bg-[var(--card-bg)]/90 backdrop-blur-xl border-t border-[var(--gold)]/20 flex z-50" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined}
              className={`flex-1 flex flex-col items-center gap-1 py-3 text-[10px] transition ${isActive(item.href) ? "text-[var(--ink)] font-medium" : "text-[var(--gold-dark)]"}`}>
              <item.icon className={`w-5 h-5 ${isActive(item.href) ? "text-[var(--gold)]" : ""}`} />
              {item.label}
            </Link>
          ))}
        </nav>
      </main>
    </div>
  );
}
