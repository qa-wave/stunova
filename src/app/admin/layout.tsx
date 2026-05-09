"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";

const navItems = [
  { href: "/admin", label: "Přehled", icon: "◐" },
  { href: "/admin/klienti", label: "Klienti", icon: "◑" },
  { href: "/admin/schuzky", label: "Schůzky", icon: "◒" },
  { href: "/admin/faktury", label: "Fakturace", icon: "◓" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);

  return (
    <div className="variant-warm min-h-screen flex">
      <aside className="hidden md:flex w-64 flex-col border-r border-[#c8a867]/30 bg-[#2a1f12]/95 text-[#f4ead4]">
        <div className="p-6 border-b border-[#c8a867]/30">
          <Link href="/">
            <Logo size="md" tone="light" />
          </Link>
          <p className="text-[10px] uppercase tracking-widest text-[#c8a867] mt-3">
            Admin · Libuše
          </p>
        </div>

        <nav aria-label="Admin" className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8a867] ${
                isActive(item.href)
                  ? "bg-white/15 font-medium text-white"
                  : "hover:bg-white/10"
              }`}
            >
              <span className={isActive(item.href) ? "text-[#e0c890]" : "text-[#c8a867]"}>
                {item.icon}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-[#c8a867]/30">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5">
            <div
              className="size-9 rounded-full flex items-center justify-center text-[#2a1f12] text-sm font-medium"
              style={{
                background:
                  "linear-gradient(135deg, #e0c890 0%, #c8a867 100%)",
              }}
            >
              LS
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm truncate">Libuše Stuňová</p>
              <p className="text-[10px] text-[#c8a867] truncate">
                Účetní · majitelka
              </p>
            </div>
            <Link
              href="/prihlaseni"
              className="text-xs text-[#c8a867] hover:text-white focus-visible:outline-2 focus-visible:outline-[#c8a867]"
              title="Odhlásit"
            >
              ↗
            </Link>
          </div>
        </div>
      </aside>

      <main className="flex-1 min-w-0 flex flex-col">
        <div className="md:hidden flex items-center justify-between px-4 py-4 border-b border-[#c8a867]/20 bg-[#2a1f12] text-white">
          <Link href="/admin">
            <Logo size="xs" tone="light" />
          </Link>
          <Link href="/prihlaseni" className="text-xs text-[#c8a867]">
            Odhlásit
          </Link>
        </div>

        <div className="flex-1 p-6 md:p-10 pb-24 md:pb-10">{children}</div>

        {/* Mobile bottom nav */}
        <nav
          aria-label="Admin mobilní"
          className="md:hidden fixed bottom-0 inset-x-0 bg-[#2a1f12]/95 backdrop-blur-xl border-t border-[#c8a867]/30 flex z-50"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`flex-1 flex flex-col items-center gap-1 py-3 text-[10px] transition ${
                isActive(item.href)
                  ? "text-white font-medium"
                  : "text-[#c8a867]"
              }`}
            >
              <span className={`text-lg ${isActive(item.href) ? "text-[#e0c890]" : ""}`}>
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
