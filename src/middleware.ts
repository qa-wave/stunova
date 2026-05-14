import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Minimal middleware — Clerk auth is handled by AuthProvider at component level.
 * When Clerk keys are configured, ClerkProvider handles session management.
 * Middleware just passes through — no server-side auth guard (yet).
 *
 * To add server-side route protection:
 * 1. Set CLERK_SECRET_KEY on Vercel
 * 2. Replace this file with the Clerk middleware from middleware.clerk.ts
 */
export default function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
