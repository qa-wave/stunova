/**
 * Data access layer — currently returns mock data.
 *
 * When DB is connected, replace implementations with:
 *   import { db } from "./db";
 *   import * as schema from "./schema";
 *   import { eq, desc } from "drizzle-orm";
 */

// Re-export types for future use
export type Klient = {
  id: string;
  nazev: string;
  osoba: string;
  email: string;
  plan: string;
  mrr: number;
  od: string;
  aktivni: boolean;
};

export type Faktura = {
  cislo: string;
  klient?: string;
  datum: string;
  splatnost?: string;
  polozka: string;
  castka: string;
  stav: string;
};

export type Dokument = {
  typ: string;
  nazev: string;
  autor: string;
  popis: string;
  format: string;
  novy: boolean;
};

export type Schuzka = {
  id: string;
  datum: string;
  cas: string;
  typ: string;
  kde: string;
  stav: string;
  poznamky: string;
};
