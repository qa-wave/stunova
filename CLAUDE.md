@AGENTS.md

# Libuše Stuňová · Účetnictví

Marketingový web + klientský portál + admin pro osobní účetní praxi v Praze 4. Cílí na malé firmy a OSVČ, které chtějí účetní jako parťáka, ne jen jednorázový servis ke konci roku.

## Pracovní styl

Při plnění úkolů postupuj přímo k řešení. Pokud potřebuješ nástroj, analýzu nebo výpočet, udělej to rovnou. Neptej se na povolení, pokud to není kriticky bezpečnostní rozhodnutí.

## Brand kontext

- **Tón**: tykání, kamarádský, „domluvíme si kafíčko ☕" jako rituál i CTA. Vysvětluj i třikrát, dokud to nedává smysl.
- **Hodnoty**: klid, jasnost, dostupnost. Žádné překvapení v březnu.
- **Vizuál**: cream paper + brown ink. Logo `/public/stunova-logo.jpg` je pravda — vždy přes komponentu `<Logo />`, nikdy přes inline `<Image src="/...">`.
- **Paleta**: Espresso `#2a1f12` · Brown `#5a3825` · Gold `#c8a867` · Cream `#f4ead4` · Ivory `#faf7f1`. Tokenizovaná v `src/app/globals.css`.
- **Typografie**: Fraunces italic v nadpisech (navazuje na ručně-psaný script v logu), Inter v body/UI. Žádné jiné fonty bez ptaní.

## Tech stack

- Next.js 16 (Turbopack) + React 19 + TypeScript + Tailwind 4
- Bez DB, bez auth, bez backendu — všechna data v portálu/adminu jsou inline v `page.tsx` jako konstanty (mock pro design review). Login form pošle na `/portal` nebo `/admin` bez validace.
- `@/` alias → `src/*` (viz `tsconfig.json`)

## Struktura

```
src/app/
  page.tsx              — index s náhledy variant + brand foundation + odkazy do portálu/adminu
  layout.tsx            — root, načítá Inter + Fraunces, metadata
  globals.css           — tokeny + .variant-warm + .variant-galerie + utility (.display, .gold-grad, .label, .dot, .hairline, .fade-up*)
  v4-warm/              — marketing varianta · cream gradient + glass karty (FAVORIT)
  v5-galerie/           — marketing varianta · čistá bílá + logo jako exponát
  prihlaseni/           — login (klient/admin toggle, posílá form action="/portal" nebo "/admin")
  portal/               — klientský portál
    layout.tsx          — světlý sidebar s Logo md
    page.tsx            — přehled (nejbližší termín, KPI, co se dělo, pro tebe)
    dokumenty/          — knihovna (filtry · ke schválení / reporty / daně / mzdy / smlouvy)
    schuzky/            — historie + plánovaná kafíčka
    faktury/            — faktury OD Libuše ZA účetní služby (klient = příjemce)
  admin/                — admin pro Libuši
    layout.tsx          — tmavý sidebar s Logo md tone="light"
    page.tsx            — přehled (KPI, dnešní kafíčka, vyžaduje pozornost)
    klienti/            — grid karet (gradient avatar, MRR, deadline)
    schuzky/            — týdenní kalendář
    faktury/            — fakturace VYSTAVOVANÁ Libuší (admin = vystavovatel)
  api/health/           — JSON status endpoint
src/components/Logo.tsx — Logo (xs/sm/md/lg, tone default/light) + LogoHero (width)
public/stunova-logo.jpg — pravdivé logo (cream paper, ~1024×780)
```

## Konvence

- Logo vždycky přes `<Logo />` komponenta, ne přímo `<Image>`. Na tmavá pozadí `tone="light"` (zabaluje do cream rounded boxu).
- Marketingové varianty používají `variant-warm` / `variant-galerie` třídy v outer divu — ty nastavují bg, font, accents přes CSS classes definované v `globals.css`.
- Portal i admin layout používají `variant-warm` (sdílený jazyk), liší se barvou sidebaru.
- Mock data jsou inline v `page.tsx` (`const klienti = [...]` apod.). Až přijde DB, vytáhnout do `lib/data.ts` a přepsat na fetch.
- Texty: tykání, žádný marketing-talk. „Domluvíme si kafíčko" funguje jak na webu, tak v adminu.
- Při změně rozsahu portálu/adminu nezapomeň na obě sidebar nav arrays (`navItems` v obou layoutech).

## Deploy

Viz `AGENTS.md` pro slangy „nasaď na dev" / „nasaď na prod".

- **Lokálně**: `npm run dev` → `http://localhost:3000`
- **Produkce**: `https://stunova.qawave.ai` (Vercel projekt `stunova` v týmu `qa-waves-projects`, region `fra1`)
- **Deploy**: `vercel deploy --prod --yes` z rootu projektu (CI/CD pipeline zatím neexistuje, není GitHub repo)
- **DNS**: doména přes Porkbun, CNAME `stunova → cname.vercel-dns.com`. Pokud potřebuješ přidat další subdoménu, Porkbun API klíč je dohledatelný v session logu projektu goodmove (`/Users/tm/.claude/projects/-Users-tm-workspaces-projects-goodmove--claude-worktrees-eager-mccarthy-9491f0/`).

## Co není hotové (priority na další iteraci)

1. Reálná auth (NextAuth nebo Clerk) — login form je teď bez backendu
2. DB pro klienti/faktury/dokumenty (Vercel Marketplace Neon Postgres je výchozí volba)
3. Upload dokumentů z portálu (Vercel Blob)
4. GitHub repo + CI/CD (zatím deploy přes Vercel CLI)
5. Mobilní responzivita portálu/adminu — sidebar má jen základní mobile nav, dlouhé tabulky neumí scroll
6. SEO + OG tagy (jen základní metadata v `layout.tsx`)
