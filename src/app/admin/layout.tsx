"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser, UserButton, SignOutButton } from "@clerk/nextjs";
import { Logo } from "@/components/Logo";
import { LayoutDashboard, Users, Calendar, Receipt, LogOut } from "lucide-react";

const navItems = [
  { href: "/admin", label: "Přehled", icon: LayoutDashboard },
  { href: "/admin/klienti", label: "Klienti", icon: Users },
  { href: "/admin/schuzky", label: "Schůzky", icon: Calendar },
  { href: "/admin/faktury", label: "Fakturace", icon: Receipt },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { user } = useUser();

  const isActive = (href: string) =>
    href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);

  const displayName = user?.firstName || "Libuše";

  return (
    <div className="variant-warm min-h-screen flex">
      <aside className="hidden md:flex w-64 flex-col border-r border-[var(--gold)]/30 bg-[var(--ink)]/95 text-[var(--cream)]">
        <div className="p-6 border-b border-[var(--gold)]/30">
          <Link href="/">
            <Logo size="md" tone="light" />
          </Link>
          <p className="text-[10px] uppercase tracking-widest text-[var(--gold)] mt-3">
            Admin · Libuše
          </p>
        </div>

        <nav aria-label="Admin" className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition ${
                isActive(item.href)
                  ? "bg-[var(--gold)]/15 font-medium text-[var(--cream)]"
                  : "hover:bg-[var(--gold)]/10"
              }`}
            >
              <item.icon
                className={`w-4 h-4 ${isActive(item.href) ? "text-[var(--gold-light)]" : "text-[var(--gold)]"}`}
              />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-[var(--gold)]/30">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--gold)]/5">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "size-9",
                },
              }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm truncate">{displayName}</p>
              <p className="text-[10px] text-[var(--gold)] truncate">
                Účetní · admin
              </p>
            </div>
            <SignOutButton redirectUrl="/prihlaseni">
              <button
                className="text-[var(--gold)] hover:text-[var(--cream)] transition"
                title="Odhlásit"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </SignOutButton>
          </div>
        </div>
      </aside>

      <main className="flex-1 min-w-0 flex flex-col">
        <div className="md:hidden flex items-center justify-between px-4 py-4 border-b border-[var(--gold)]/20 bg-[var(--ink)] text-[var(--cream)]">
          <Link href="/admin">
            <Logo size="xs" tone="light" />
          </Link>
          <div className="flex items-center gap-3">
            <UserButton appearance={{ elements: { avatarBox: "size-7" } }} />
            <SignOutButton redirectUrl="/prihlaseni">
              <button className="flex items-center gap-1.5 text-xs text-[var(--gold)]">
                <LogOut className="w-3.5 h-3.5" /> Odhlásit
              </button>
            </SignOutButton>
          </div>
        </div>

        <div className="flex-1 p-6 md:p-10 pb-24 md:pb-10">{children}</div>

        {/* Mobile bottom nav */}
        <nav
          aria-label="Admin mobilní"
          className="md:hidden fixed bottom-0 inset-x-0 bg-[var(--ink)]/95 backdrop-blur-xl border-t border-[var(--gold)]/30 flex z-50"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`flex-1 flex flex-col items-center gap-1 py-3 text-[10px] transition ${
                isActive(item.href)
                  ? "text-[var(--cream)] font-medium"
                  : "text-[var(--gold)]"
              }`}
            >
              <item.icon
                className={`w-5 h-5 ${isActive(item.href) ? "text-[var(--gold-light)]" : ""}`}
              />
              {item.label}
            </Link>
          ))}
        </nav>
      </main>
    </div>
  );
}
