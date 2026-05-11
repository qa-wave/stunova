import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { csCZ } from "@clerk/localizations";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
      <body>
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
      </body>
    </html>
  );
}
