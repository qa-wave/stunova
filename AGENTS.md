<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version (16) has breaking changes — APIs, conventions, and file structure may differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing routing/cache/server-component code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:deployment-rules -->
# Deployment

Uživatel může říct „nasaď na dev" nebo „nasaď na prod". Reaguj takto:

## „Nasaď na dev" / „spusť lokálně" / „dev"
1. `cd /Users/tm/workspaces/projects/stunova`
2. `npm install` (pokud chybí `node_modules`)
3. `npm run dev`
4. Ověř health: `curl http://localhost:3000/api/health`

## „Nasaď na prod" / „deploy" / „prod"
1. Ověř, že build projde: `npm run build`
2. `vercel deploy --prod --yes` z rootu projektu (přihlášený jako `qa-wave`, projekt `stunova` v týmu `qa-waves-projects`)
3. Po deploy ověř: `curl -I https://stunova.qawave.ai/`
4. Otevři v prohlížeči: `open https://stunova.qawave.ai/`

Žádný GitHub repo ani CI/CD zatím neexistuje. Nepoužívej `git push` jako deploy trigger.

## Infrastruktura
- **Hosting**: Vercel, region `fra1` (Frankfurt), Fluid Compute default
- **Doména**: `stunova.qawave.ai` (CNAME → `cname.vercel-dns.com` na Porkbunu)
- **Apex `qawave.ai`** patří jinému projektu (`qawave`), nikdy nepřesměrovávej tam
- **Health endpoint**: `/api/health`
- **`.vercel/`** je v `.gitignore` (project link)
<!-- END:deployment-rules -->

<!-- BEGIN:dns-rules -->
# DNS — Porkbun API

Když uživatel chce přidat další subdoménu pod `qawave.ai`:

1. API klíč pair je dohledatelný v session logu projektu goodmove (`/Users/tm/.claude/projects/-Users-tm-workspaces-projects-goodmove--claude-worktrees-eager-mccarthy-9491f0/`) — grep pro `pk1_fced` a `sk1_bb756`
2. Endpoint: `POST https://api.porkbun.com/api/json/v3/dns/create/qawave.ai`
3. Body: `{apikey, secretapikey, type: "CNAME", name: "<sub>", content: "cname.vercel-dns.com", ttl: "600"}`
4. Pak v Vercelu: `cd <project> && vercel domains add <sub>.qawave.ai`
<!-- END:dns-rules -->
