/**
 * Auth config — Clerk integration (ACTIVE)
 *
 * Required env vars:
 *   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
 *   CLERK_SECRET_KEY=sk_test_...
 *
 * Optional:
 *   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/prihlaseni
 *   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/portal
 */

export const AUTH_ENABLED = true;

export const publicRoutes = [
  "/",
  "/v4-warm",
  "/v5-galerie",
  "/prihlaseni",
  "/api/health",
  "/sitemap.xml",
  "/robots.txt",
];

/** Emails that can access /admin/* */
export const adminEmails = [
  "libuse@stunova.cz",
];
