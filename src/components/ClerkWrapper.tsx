"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { csCZ } from "@clerk/localizations";
import type { ReactNode } from "react";

export default function ClerkWrapper({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider
      localization={csCZ}
      appearance={{
        variables: {
          colorPrimary: "oklch(0.566 0.082 67.5)",
          colorTextOnPrimaryBackground: "oklch(0.971 0.022 87)",
          borderRadius: "0.75rem",
          fontFamily: "var(--font-inter), sans-serif",
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}
