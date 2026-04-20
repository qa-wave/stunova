"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  FileInput,
  Users,
  Landmark,
  Wallet,
  BarChart3,
  LogOut,
  Menu,
  X,
  Settings,
  Send,
  UserCog,
  ScrollText,
  Shield,
} from "lucide-react";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const accountingItems = [
  { href: "/dashboard", label: "Přehled", icon: LayoutDashboard },
  { href: "/faktury-vydane", label: "Faktury vydané", icon: FileText },
  { href: "/faktury-prijate", label: "Faktury přijaté", icon: FileInput },
  { href: "/adresar", label: "Adresář", icon: Users },
  { href: "/banka", label: "Banka", icon: Landmark },
  { href: "/pokladna", label: "Pokladna", icon: Wallet },
  { href: "/prehled", label: "Finanční přehledy", icon: BarChart3 },
];

const adminItems = [
  { href: "/admin/klienti", label: "Správa klientů", icon: Users },
  { href: "/admin/kanaly", label: "Doručovací kanály", icon: Send },
  { href: "/admin/uzivatele", label: "Uživatelé & role", icon: UserCog },
  { href: "/admin/logy", label: "Aktivita & logy", icon: ScrollText },
  { href: "/admin/nastaveni", label: "Nastavení systému", icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  function NavLink({ href, label, icon: Icon }: { href: string; label: string; icon: typeof LayoutDashboard }) {
    const isActive = pathname === href || (href !== "/dashboard" && pathname.startsWith(href));
    return (
      <Link
        href={href}
        onClick={() => setMobileOpen(false)}
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
          isActive
            ? "bg-sidebar-accent text-sidebar-primary"
            : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
        )}
      >
        <Icon className="h-4 w-4" />
        {label}
      </Link>
    );
  }

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed left-4 top-4 z-50 lg:hidden text-white"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-sidebar text-sidebar-foreground transition-transform lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-6">
          <Image src="/logo.jpg" alt="Fedic Finance" width={36} height={36} className="rounded-lg" />
          <div>
            <p className="text-sm font-semibold">Fedic Finance</p>
            <p className="text-xs text-sidebar-foreground/60">Administrace</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {/* Accounting section */}
          <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-widest text-sidebar-foreground/40">
            Účetnictví
          </p>
          <div className="space-y-1">
            {accountingItems.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </div>

          <Separator className="my-4 bg-sidebar-border" />

          {/* Admin section */}
          <p className="mb-2 flex items-center gap-1.5 px-3 text-[10px] font-semibold uppercase tracking-widest text-sidebar-foreground/40">
            <Shield className="h-3 w-3" />
            Administrace
          </p>
          <div className="space-y-1">
            {adminItems.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t border-sidebar-border p-3">
          <div className="mb-2 flex items-center gap-3 px-3 py-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sidebar-accent text-xs font-bold text-sidebar-primary">
              RF
            </div>
            <div>
              <p className="text-xs font-medium">Radek Fedič</p>
              <p className="text-[10px] text-sidebar-foreground/50">Administrátor</p>
            </div>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
          >
            <LogOut className="h-4 w-4" />
            Odhlásit se
          </button>
        </div>
      </aside>
    </>
  );
}
