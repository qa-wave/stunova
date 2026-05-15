import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { AuthProvider } from "@/components/AuthProvider";
import { BRAND, CONTACT } from "@/lib/constants";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: {
    default: "Libuše Stuňová · Účetnictví",
    template: "%s · Libuše Stuňová",
  },
  description:
    "Účetní jako parťák, ne jen servis ke konci roku. Praha 4. Domluvíme si kafíčko.",
  metadataBase: new URL("https://stunova.qawave.ai"),
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: "Libuše Stuňová · Účetnictví",
    title: "Libuše Stuňová · Účetnictví pro malé firmy",
    description:
      "Účetní jako parťák, ne jen servis ke konci roku. Praha 4.",
    images: [{ url: "/stunova-logo.jpg", width: 1024, height: 780, alt: "Libuše Stuňová logo" }],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: BRAND.title,
  description: `${BRAND.tagline} Vedení účetnictví, daňová evidence a mzdy pro malé firmy a OSVČ v Praze.`,
  url: BRAND.url,
  logo: `${BRAND.url}${BRAND.logo}`,
  image: `${BRAND.url}${BRAND.logo}`,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Praha 4",
    addressRegion: "Praha",
    addressCountry: "CZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.0596,
    longitude: 14.4384,
  },
  areaServed: {
    "@type": "City",
    name: "Praha",
  },
  priceRange: "od 2 500 Kč/měs",
  openingHours: "Mo-Fr 09:00-17:00",
  sameAs: [],
  founder: {
    "@type": "Person",
    name: BRAND.name,
    jobTitle: "Účetní",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" type="application/rss+xml" title="Blog · Libuše Stuňová" href="/api/rss" />
        <meta name="theme-color" content="#c8a867" />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[var(--gold)] focus:text-[var(--ink)] focus:text-sm">
          Přeskočit na obsah
        </a>
        <AuthProvider>{children}</AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
