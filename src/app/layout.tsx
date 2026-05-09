import type { Metadata } from "next";
import { Inter, Fraunces, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Libuše Stuňová · Účetnictví",
    template: "%s · Libuše Stuňová",
  },
  description:
    "Účetnictví pro malé firmy a OSVČ, kterým nestačí vidět účetní jednou ročně. Praha 4. Domluvíme si kafíčko.",
  metadataBase: new URL("https://stunova.qawave.ai"),
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: "Libuše Stuňová · Účetnictví",
    title: "Libuše Stuňová · Účetnictví",
    description:
      "Účetnictví pro malé firmy a OSVČ, kterým nestačí vidět účetní jednou ročně. Praha 4.",
    images: [{ url: "/stunova-logo.jpg", width: 1024, height: 780, alt: "Libuše Stuňová logo" }],
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} ${fraunces.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
