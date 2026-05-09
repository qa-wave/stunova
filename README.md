# Libuše Stuňová · Účetnictví

Marketingový web + klientský portál + admin pro osobní účetní praxi v Praze 4.

**Live**: https://stunova.qawave.ai

## Co tu najdeš

| Route | Co to je |
|---|---|
| `/` | Index s náhledy variant, brand foundation, demo odkazy |
| `/v4-warm` | Marketingová varianta · cream gradient + glass karty (favorit) |
| `/v5-galerie` | Marketingová varianta · čistá bílá + logo jako exponát |
| `/prihlaseni` | Login (klient / admin toggle) |
| `/portal` | Klientský portál — přehled, dokumenty, schůzky, faktury |
| `/admin` | Admin pro Libuši — klienti, schůzky, fakturace |
| `/api/health` | JSON health endpoint |

## Stack

- Next.js 16 (Turbopack) + React 19 + TypeScript
- Tailwind CSS 4
- Bez DB / auth / backendu — všechna data v portálu a adminu jsou inline mock data v `page.tsx` (toto je design review, ne produkce)

## Lokálně

```bash
npm install
npm run dev
```

Otevři http://localhost:3000.

## Deploy

```bash
vercel deploy --prod --yes
```

Vercel projekt `stunova` v týmu `qa-waves-projects`, region `fra1`. Doména `stunova.qawave.ai` přes Porkbun CNAME.

## Brand

Cream paper + brown ink. Logo `/public/stunova-logo.jpg` je single source of truth — vždy přes komponentu `<Logo />` z `src/components/Logo.tsx`.

Tón: tykání, „domluvíme si kafíčko ☕". Vysvětlujeme i třikrát, dokud to nedává smysl. Žádné překvapení v březnu.
