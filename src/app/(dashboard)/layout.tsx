"use client";

import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { ThemeSwitcher } from "@/components/shared/theme-switcher";
import { VisualStyleProvider, StyleSwitcherBar, useVisualStyle } from "@/components/shared/style-switcher";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VisualStyleProvider>
      <DashboardLayoutInner>{children}</DashboardLayoutInner>
    </VisualStyleProvider>
  );
}

function DashboardLayoutInner({ children }: { children: React.ReactNode }) {
  const { style } = useVisualStyle();

  const isDark = style === "dark" || style === "neon" || style === "aurora" || style === "ocean";

  return (
    <div className={`min-h-screen ${
      isDark ? "bg-gray-950 text-gray-100" :
      style === "brutalist" ? "bg-yellow-50" :
      style === "warm" ? "bg-gradient-to-br from-amber-50/50 to-orange-50/30" :
      style === "glass" ? "bg-gradient-to-br from-blue-50/30 to-indigo-50/20" :
      "bg-background"
    }`}>
      <DashboardSidebar />
      <main className="lg:pl-64">
        <div className="border-b bg-background/60 backdrop-blur-sm">
          <div className="lg:pl-0">
            <StyleSwitcherBar />
          </div>
        </div>
        <div className="p-6 lg:p-8">{children}</div>
      </main>
      <ThemeSwitcher />
    </div>
  );
}
