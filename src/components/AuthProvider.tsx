"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { csCZ } from "@clerk/localizations";
import type { ReactNode } from "react";

const hasClerkKey = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

const clerkAppearance = {
  variables: {
    colorPrimary: "oklch(0.566 0.082 67.5)",
    colorTextOnPrimaryBackground: "oklch(0.971 0.022 87)",
    borderRadius: "0.75rem",
    fontFamily: "var(--font-inter), sans-serif",
  },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  if (!hasClerkKey) {
    return <>{children}</>;
  }

  return (
    <ClerkProvider localization={csCZ} appearance={clerkAppearance}>
      {children}
    </ClerkProvider>
  );
}
