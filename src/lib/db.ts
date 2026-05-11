/**
 * Database scaffold — Neon Postgres + Drizzle ORM
 *
 * To enable:
 * 1. Install: npm i drizzle-orm @neondatabase/serverless
 * 2. Install dev: npm i -D drizzle-kit
 * 3. Add DATABASE_URL to .env (from Vercel Marketplace → Neon)
 * 4. Uncomment the code below
 * 5. Run: npx drizzle-kit push
 * 6. Replace mock data in page.tsx files with db queries from lib/data.ts
 */

// import { neon } from "@neondatabase/serverless";
// import { drizzle } from "drizzle-orm/neon-http";
// import * as schema from "./schema";
//
// const sql = neon(process.env.DATABASE_URL!);
// export const db = drizzle(sql, { schema });

export const DB_ENABLED = false;
