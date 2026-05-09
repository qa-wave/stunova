"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";

const navItems = [
  { href: "/portal", label: "Přehled", icon: "◐" },
  { href: "/portal/dokumenty", label: "Dokumenty", icon: "◑" },
  { href: "/portal/faktury", label: "Faktury", icon: "◒" },
  { href: "/portal/schuzky", label: "Schůzky", icon: "◓" },
];

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/portal" ? pathname === "/portal" : pathname.startsWith(href);

  return (
    <div className="variant-warm min-h-screen flex">
      <aside className="hidden md:flex w-64 flex-col border-r border-[#c8a867]/20 bg-white/40 backdrop-blur-xl">
        <div className="p-6 border-b border-[#c8a867]/20">
          <Link href="/">
            <Logo size="md" />
          </Link>
          <p className="text-[10px] uppercase tracking-widest text-[#8e6f3f] mt-3">
            Klientský portál
          </p>
        </div>

        <nav aria-label="Portál" className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8a867] ${
                isActive(item.href)
                  ? "bg-white/90 text-[#2a1f12] font-medium shadow-sm"
                  : "text-[#2a1f12] hover:bg-white/70"
              }`}
            >
              <span className={isActive(item.href) ? "text-[#c8a867]" : "text-[#8e6f3f]"}>
                {item.icon}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-[#c8a867]/20">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/60 backdrop-blur-sm">
            <div
              className="size-9 rounded-full flex items-center justify-center text-white text-sm font-medium"
              style={{
                background:
                  "linear-gradient(135deg, #c8a867 0%, #5a3825 100%)",
              }}
            >
              JN
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm truncate">Jan Novák</p>
              <p className="text-[10px] text-[#8e6f3f] truncate">
                Acme s.r.o.
              </p>
            </div>
            <Link
              href="/prihlaseni"
              className="text-xs text-[#8e6f3f] hover:text-[#2a1f12] focus-visible:outline-2 focus-visible:outline-[#c8a867]"
              title="Odhlásit"
            >
              ↗
            </Link>
          </div>
        </div>
      </aside>

      <main className="flex-1 min-w-0 flex flex-col">
        <div className="md:hidden flex items-center justify-between px-4 py-4 border-b border-[#c8a867]/20 bg-white/60 backdrop-blur-xl">
          <Link href="/portal">
            <Logo size="xs" />
          </Link>
          <Link href="/prihlaseni" className="text-xs text-[#8e6f3f]">
            Odhlásit
          </Link>
        </div>

        <div className="flex-1 p-6 md:p-10 pb-24 md:pb-10">{children}</div>

        {/* Mobile bottom nav */}
        <nav
          aria-label="Portál mobilní"
          className="md:hidden fixed bottom-0 inset-x-0 bg-white/90 backdrop-blur-xl border-t border-[#c8a867]/20 flex z-50"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`flex-1 flex flex-col items-center gap-1 py-3 text-[10px] transition ${
                isActive(item.href)
                  ? "text-[#2a1f12] font-medium"
                  : "text-[#8e6f3f]"
              }`}
            >
              <span className={`text-lg ${isActive(item.href) ? "text-[#c8a867]" : ""}`}>
                {item.icon}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>
      </main>
    </div>
  );
}
