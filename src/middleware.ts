import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/v4-warm",
  "/v5-galerie",
  "/prihlaseni(.*)",
  "/api/health",
  "/sitemap.xml",
  "/robots.txt",
]);

/**
 * Auth middleware — graceful degradation.
 * If CLERK_SECRET_KEY is not set, skip auth entirely (dev/preview mode).
 */
const hasClerkKeys = !!(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  process.env.CLERK_SECRET_KEY
);

function noAuthMiddleware(request: NextRequest) {
  return NextResponse.next();
}

const authMiddleware = clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export default hasClerkKeys ? authMiddleware : noAuthMiddleware;

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
