"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const hasClerkKey = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

const ClerkWrapper = hasClerkKey
  ? dynamic(() => import("./ClerkWrapper"), { ssr: false })
  : null;

export function AuthProvider({ children }: { children: ReactNode }) {
  if (!ClerkWrapper) return <>{children}</>;
  return <ClerkWrapper>{children}</ClerkWrapper>;
}
