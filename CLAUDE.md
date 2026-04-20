@AGENTS.md

# Fedic Finance App

## Pracovní styl

Při plnění úkolů postupuj přímo k řešení. Pokud potřebuješ použít nástroj, analyzovat data nebo provést výpočet, udělej to rovnou. Neptej se mě na povolení, pokud to není kriticky nutné pro bezpečnost.

Účetní portál pro Fedic Finance Group nad Abra Flexi API.

## Tech Stack
- Next.js 16 + TypeScript + Tailwind CSS 4 + shadcn/ui
- Abra Flexi REST API (Basic Auth)
- NextAuth.js (credentials provider)
- Recharts, framer-motion, @tanstack/react-table

## Struktura
- `(dashboard)/` — Interní dashboard pro účetní (sidebar layout)
- `(portal)/` — Klientský portál (top nav layout)
- `(auth)/` — Login stránka
- `page.tsx` — Veřejný marketing web Fedic Finance
- `api/flexi/` — Proxy k Abra Flexi API
- `api/health/` — Health endpoint

## Nasazení

### "Nasaď na dev" (localhost)
```bash
# Varianta 1: npm
cd /Users/tm/workspaces/projects/fedicfinance-app && npm run dev

# Varianta 2: Docker (z workspace root)
cd /Users/tm/workspaces/infra && docker compose up fedicfinance-dev
```
- Dev na npm: http://localhost:3000
- Dev na Docker: http://localhost:3041
- Prod Docker: `docker compose up fedicfinance` → http://localhost:3040

### "Nasaď na prod" (Vercel)
Vyžaduje GitHub repo + Vercel secrets:
1. `git push origin main` — CI pipeline se spustí automaticky
2. Po úspěšném CI se CD pipeline deployne na Vercel (region fra1)
3. Potřebné GitHub Secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`
4. Potřebné Vercel Environment Variables: `FLEXI_URL`, `FLEXI_USERNAME`, `FLEXI_PASSWORD`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`

### Demo přihlášení
- Účetní: `admin` / `FedicAdmin2024!`
- Klient: `klient` / `FedicKlient2024!`

## Infrastruktura
- Dockerfile: multi-stage (deps → builder → runner), Node 22 Alpine, non-root user
- Docker Compose: `/Users/tm/workspaces/infra/docker-compose.yml` (service: fedicfinance, port 3040)
- CI/CD: `.github/workflows/ci.yml` (lint → typecheck → build → docker) + `cd.yml` (Vercel deploy)
- Vercel config: `vercel.json` (fra1, security headers)
- Health endpoint: `/api/health`
