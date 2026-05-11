/**
 * Auth scaffold — Clerk integration
 *
 * To enable:
 * 1. Install: npm i @clerk/nextjs
 * 2. Add env vars: NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY, CLERK_SECRET_KEY
 * 3. Uncomment ClerkProvider in layout.tsx
 * 4. Uncomment middleware.ts
 * 5. Update login form in prihlaseni/page.tsx to use Clerk's <SignIn />
 *
 * Public routes (no auth): /, /v4-warm, /v5-galerie, /prihlaseni, /api/health
 * Protected routes: /portal/*, /admin/*
 */

// Placeholder — replace with actual Clerk imports when installed
export const AUTH_ENABLED = false;

export const publicRoutes = [
  "/",
  "/v4-warm",
  "/v5-galerie",
  "/prihlaseni",
  "/api/health",
  "/sitemap.xml",
  "/robots.txt",
];

export const adminEmails = [
  "libuse@stunova.cz",
];
