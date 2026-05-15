import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { AuthProvider } from "@/components/AuthProvider";
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
  name: "Libuše Stuňová · Účetnictví",
  description:
    "Účetní jako parťák, ne jen servis ke konci roku. Vedení účetnictví, daňová evidence a mzdy pro malé firmy a OSVČ v Praze.",
  url: "https://stunova.qawave.ai",
  logo: "https://stunova.qawave.ai/stunova-logo.jpg",
  image: "https://stunova.qawave.ai/stunova-logo.jpg",
  telephone: "+420728000000",
  email: "libuse@stunova.cz",
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
    name: "Libuše Stuňová",
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
      </head>
      <body>
        <AuthProvider>{children}</AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
