import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CreditCard } from "lucide-react";
import { FakturaActions } from "./faktura-actions";

export const metadata: Metadata = {
  title: "Detail faktury",
  robots: { index: false, follow: false },
};

const faktury: Record<string, {
  cislo: string;
  datum: string;
  splatnost: string;
  polozka: string;
  castka: string;
  castkaNum: number;
  stav: string;
  vs: string;
  ucet: string;
  iban: string;
}> = {
  "2026-04-01": {
    cislo: "2026/04/01",
    datum: "30. 4. 2026",
    splatnost: "14. 5. 2026",
    polozka: "Vedení účetnictví · duben 2026",
    castka: "5 800 Kč",
    castkaNum: 5800,
    stav: "k_uhrade",
    vs: "20260401",
    ucet: "123456789/0100",
    iban: "CZ65 0100 0000 0001 2345 6789",
  },
  "2026-03-01": {
    cislo: "2026/03/01",
    datum: "31. 3. 2026",
    splatnost: "14. 4. 2026",
    polozka: "Vedení účetnictví · březen 2026",
    castka: "5 800 Kč",
    castkaNum: 5800,
    stav: "uhrazeno",
    vs: "20260301",
    ucet: "123456789/0100",
    iban: "CZ65 0100 0000 0001 2345 6789",
  },
};

// QR platba — Czech QR Payment standard (SPD format)
function getQrUrl(f: typeof faktury[string]) {
  const spdString = `SPD*1.0*ACC:${f.iban.replace(/\s/g, "")}*AM:${f.castkaNum}.00*CC:CZK*X-VS:${f.vs}*MSG:Faktura ${f.cislo}`;
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(spdString)}`;
}

export default async function FakturaDetail({
  params,
}: {
  params: Promise<{ cislo: string }>;
}) {
  const { cislo } = await params;
  const faktura = faktury[cislo];

  if (!faktura) {
    return (
      <div className="max-w-3xl mx-auto py-16 text-center">
        <p className="display text-4xl gold-grad mb-4">404</p>
        <p className="text-[var(--ink-soft)]">Faktura nenalezena.</p>
        <Link href="/portal/faktury" className="btn-soft mt-6 inline-flex">
          <ArrowLeft className="w-4 h-4" /> Zpět na faktury
        </Link>
      </div>
    );
  }

  const isUnpaid = faktura.stav === "k_uhrade";

  return (
    <div className="max-w-3xl">
      <Link
        href="/portal/faktury"
        className="inline-flex items-center gap-2 text-sm text-[var(--gold-dark)] hover:text-[var(--ink)] transition mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Zpět na faktury
      </Link>

      <div className="card-warm p-8 md:p-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-6 flex-wrap mb-8">
          <div>
            <p className="label-sm mb-2">Faktura</p>
            <h1 className="display text-3xl md:text-4xl mb-2">{faktura.cislo}</h1>
            <p className="text-sm text-[var(--ink-soft)]">{faktura.polozka}</p>
          </div>
          <span
            className={`text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border ${
              isUnpaid
                ? "bg-[var(--gold)]/20 text-[var(--gold-dark)] border-[var(--gold)]/40"
                : "bg-[var(--card-bg)] text-[var(--ink-soft)] border-[var(--gold)]/20"
            }`}
          >
            {isUnpaid ? "K úhradě" : "Uhrazeno"}
          </span>
        </div>

        {/* Details grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-[var(--gold)]/15">
          <div>
            <p className="text-xs text-[var(--gold-dark)] uppercase tracking-widest mb-1">Vystaveno</p>
            <p className="text-sm font-medium">{faktura.datum}</p>
          </div>
          <div>
            <p className="text-xs text-[var(--gold-dark)] uppercase tracking-widest mb-1">Splatnost</p>
            <p className="text-sm font-medium">{faktura.splatnost}</p>
          </div>
          <div>
            <p className="text-xs text-[var(--gold-dark)] uppercase tracking-widest mb-1">Částka</p>
            <p className="text-sm font-medium">{faktura.castka}</p>
          </div>
          <div>
            <p className="text-xs text-[var(--gold-dark)] uppercase tracking-widest mb-1">VS</p>
            <p className="text-sm font-medium">{faktura.vs}</p>
          </div>
        </div>

        {/* Payment info */}
        {isUnpaid && (
          <div className="mt-8 p-6 rounded-2xl bg-[var(--cream)] border border-[var(--gold)]/15">
            <div className="flex items-start gap-3 mb-4">
              <CreditCard className="w-5 h-5 text-[var(--gold-dark)] mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-medium mb-1">Platební údaje</p>
                <p className="text-sm text-[var(--ink-soft)]">
                  Účet: {faktura.ucet}<br />
                  IBAN: {faktura.iban}<br />
                  VS: {faktura.vs}<br />
                  Částka: {faktura.castka}
                </p>
              </div>
            </div>

            {/* QR Code */}
            <div className="flex justify-center mt-6">
              <div className="text-center">
                <Image
                  src={getQrUrl(faktura)}
                  alt={`QR platba ${faktura.castka}`}
                  width={160}
                  height={160}
                  className="rounded-xl border border-[var(--gold)]/15"
                  unoptimized
                />
                <p className="text-xs text-[var(--ink-soft)] mt-2">
                  Naskenuj a zaplať
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <FakturaActions isUnpaid={isUnpaid} />
      </div>
    </div>
  );
}
