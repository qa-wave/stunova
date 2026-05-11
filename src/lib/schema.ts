/**
 * Drizzle ORM schema for Stunova
 *
 * Tables:
 * - klienti: client registry
 * - faktury: invoices (issued by Libuše)
 * - dokumenty: documents shared with clients
 * - schuzky: meetings / kafíčka
 *
 * Uncomment when drizzle-orm is installed.
 */

/*
import { pgTable, uuid, text, timestamp, integer, boolean, decimal } from "drizzle-orm/pg-core";

export const klienti = pgTable("klienti", {
  id: uuid("id").defaultRandom().primaryKey(),
  nazev: text("nazev").notNull(),
  osoba: text("osoba").notNull(),
  email: text("email").notNull(),
  plan: text("plan").notNull(), // "ucetnictvi" | "danova_evidence" | "ucetnictvi_mzdy"
  mrr: integer("mrr").notNull(), // monthly revenue in CZK
  od: timestamp("od").notNull(),
  aktivni: boolean("aktivni").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const faktury = pgTable("faktury", {
  id: uuid("id").defaultRandom().primaryKey(),
  cislo: text("cislo").notNull().unique(),
  klientId: uuid("klient_id").references(() => klienti.id),
  datum: timestamp("datum"),
  splatnost: timestamp("splatnost"),
  polozka: text("polozka").notNull(),
  castka: decimal("castka", { precision: 10, scale: 2 }).notNull(),
  stav: text("stav").notNull(), // "k_vystaveni" | "k_uhrade" | "uhrazeno"
  createdAt: timestamp("created_at").defaultNow(),
});

export const dokumenty = pgTable("dokumenty", {
  id: uuid("id").defaultRandom().primaryKey(),
  klientId: uuid("klient_id").references(() => klienti.id),
  typ: text("typ").notNull(), // "ke_schvaleni" | "report" | "rocni" | "smlouva" | "mzdy" | "sablona"
  nazev: text("nazev").notNull(),
  popis: text("popis"),
  autor: text("autor"),
  format: text("format"), // "PDF · 2 strany"
  blobUrl: text("blob_url"), // Vercel Blob URL
  novy: boolean("novy").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const schuzky = pgTable("schuzky", {
  id: uuid("id").defaultRandom().primaryKey(),
  klientId: uuid("klient_id").references(() => klienti.id),
  datum: timestamp("datum").notNull(),
  cas: text("cas").notNull(), // "10:00–10:45"
  typ: text("typ").notNull(),
  kde: text("kde"),
  stav: text("stav").notNull(), // "naplanovane" | "hotove"
  poznamky: text("poznamky"),
  createdAt: timestamp("created_at").defaultNow(),
});
*/

export {};
