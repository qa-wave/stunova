import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Přihlášení",
  robots: { index: false, follow: false },
};

export default function PrihlaseniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
