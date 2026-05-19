# UX Review: Klientský portál + Admin panel
**Od:** UX Designér
**Pro:** UI Designér, Frontend vývojář, Projektový manažer
**Datum:** 9. května 2026
**Projekt:** Stunova · Libuše Stuňová Účetnictví

---

## Kontext benchmarku

Benchmarkováno vůči: **Xero** (nejsilnější dashboard + accounting flow), **FreshBooks** (klientský portál, invoice UX), **Wave** (jednoduchost, malé firmy). Stunova má jiné zadání — není to SaaS, je to osobní praxe. To mění priority: důvěra, kamarádskost a „vím co se děje" jsou důležitější než feature completeness.

---

## 1. Information Architecture

### Portál — navigace

Aktuální stav: Přehled / Dokumenty / Faktury / Schůzky (4 položky)

**Co funguje:**
- 4 položky jsou ideální pro portál tohoto rozsahu (Xero má 12+, pro klienta osobní účetní je to příliš)
- Pořadí je logické — přehled jako první, akční věci před pasivními

**Co chybí / co překvapí:**

| Problém | Závažnost | Popis |
|---------|-----------|-------|
| Chybí stránka „Zprávy" nebo „Dotazy" | Vysoká | Na dashboardu je tlačítko „Mám dotaz" → vede nikam. Komunikace s Libuší nemá místo. |
| Chybí „Nastavení" nebo „Můj profil" | Střední | Klient nemůže změnit email ani notifikace. V Xero/FreshBooks je to základní. |
| „Dokumenty" a „Faktury" jsou oddělené, ale v mysli klienta splývají | Nízká | Faktura za účetní služby je jiný druh dokumentu. Zvažit podkategorizaci. |
| Mobilní tab bar nemá badge counts | Vysoká | Viz sekce 7. |

### Admin — navigace

Aktuální stav: Přehled / Klienti / Schůzky / Fakturace (4 položky)

**Co funguje:**
- Tmavý sidebar jasně odděluje admin od portálu — správné rozhodnutí
- „Fakturace" vs. „Faktury" (portál) — terminologicky správné rozlišení

**Co chybí:**

| Problém | Závažnost | Popis |
|---------|-----------|-------|
| Chybí „Termíny / Daňový kalendář" | Vysoká | Nejkritičtější věc pro účetní — kdy je DPH, DPFO, DPPO, mzdy. Teď je to jen v „Vyžaduje pozornost" jako text. |
| Chybí „Šablony" nebo „Katalog služeb" | Nízká | Pro opakující se práci (smlouvy, plné moci). Zatím mimo scope. |
| Chybí „Přehledy / Reporting" | Střední | MRR trend, cash flow praxe. Teď jen statické KPI na dashboardu. |
| Globální search chybí | Střední | Při 23+ klientech bude klikání na Klienti → search pomalé. |

---

## 2. Dashboard

### Portál dashboard — hodnocení

**KPI strip (3 karty): Faktury vystavené Q2 / Daňová úspora YTD / Nové dokumenty**

Pozitivní:
- „Daňová úspora YTD" je skvělé — klient vidí hodnotu, ne jen účetní čísla
- „Nové dokumenty ke kontrole" — akční, přímo motivuje klik

Problémy:

| KPI | Problém |
|-----|---------|
| „Faktury vystavené Q2" | To jsou faktury klienta svým zákazníkům? Nebo faktury od Libuše? Pojmenování matoucí. |
| Hodnota „180 320 Kč" pod KPI „12 faktur" | Vztah není zřejmý — je to součet vystavených faktur klientem, nebo co? |
| Chybí „Příští termín" jako KPI | Teď je v hero kartě nad KPI stripem, ale jako KPI by měl být prominentnější. |
| Chybí stav podání (DPH, DPFO) | FreshBooks ukazuje „Last filing: March VAT — submitted". Klient chce vědět. |

**„Co se dělo" (activity feed):**

Funguje dobře — timeline s datem a popisem je srozumitelná. Ale:
- Položky jsou nerozlišené — „Mzdy odeslány" vypadá stejně jako „Daňové přiznání podáno". Severity/category ikona by pomohla.
- Chybí odkaz na konkrétní dokument z aktivity — klik na „Výplatní pásky duben" by měl otevřít ten dokument.
- Xero a FreshBooks mají activity feed klikatelný. Tady jsou jen texty.

**„Pro tebe" (tasklist):**

Skvělý nápad. Ale:
- Checkboxy nejsou interaktivní — to je OK pro mock, ale i ve finální verzi by klient měl moct označit „Hotovo" (nebo Libuše to označí za něj)
- Časové odhady („1 min", „10 min") jsou výborné — u FreshBooks tohle chybí
- Chybí CTA k tasku — „Schválit kontrolní hlášení DPH" nemá tlačítko, jen text. Uživatel neví kam kliknout.

**Největší chyba dashboardu:**
Datum „Pátek · 9. května" je napevno v kódu (`portal/page.tsx` řádek 14). Reálně tam musí být `new Date()`. Zatím mock — ale poznamenat.

### Admin dashboard — hodnocení

**KPI strip (4 karty): Aktivní klienti / Kafíčka tento týden / Fakturace měsíc / Termíny příští týden**

Výborná sada. Specificky:
- „Kafíčka tento týden: 6, z toho 3 dnes" — perfektní, Libuše okamžitě ví jak vypadá den
- „Fakturace měsíc: 138 200 Kč · 96 % targetu" — skvělé framing (% targetu místo absolutní číslo)

Problémy:

| KPI | Problém |
|-----|---------|
| „Termíny příští týden: 4" | Jsou to termíny podání? Nebo schůzky? Dvě různé věci. Terminologie není jasná. |
| Chybí „Nezaplacené faktury / pohledávky" | Klíčová cash-flow metrika pro jakoukoli praxi. Xero to má vždy v popředí. |
| Chybí „Noví klienti tento měsíc" detail | Je tam jako sub-text (+1 tento měsíc u aktivních klientů), ale jako samostatné KPI by bylo silnější. |

**„Dnešní kafíčka":**

Funguje dobře. Highlight „Za chvíli" pro aktuální schůzku je chytrý. Ale:
- Chybí přímý odkaz na Google Meet / telefonní číslo
- „Otevřít →" odkaz vede na `#` — v reálné verzi by to měl být detail klienta nebo brief ke schůzce
- Chybí „Připravit podklady" quick action před schůzkou

**„Vyžaduje pozornost":**

Tato sekce je nejdůležitější pro Libušin workflow, ale má nejméně struktury:
- Položky jsou volný text, ne strukturovaná data
- Chybí prioritizace (co je urgentní vs. jen důležité)
- Chybí přímé akční tlačítko — „Otevřít →" pro DPH vede na `#`
- Chybí počet ovlivněných klientů jako badge, ne jen text

---

## 3. Dokumenty — portál

### Co funguje
- Filter pills jsou jasné a kliknutelné (aria-pressed správně implementováno)
- Karta dokumentu obsahuje klíčové info: typ, název, autor, datum, formát/počet stran
- Dot indikátor pro nové dokumenty (žlutý puntík vpravo nahoře)
- Prázdný stav pro filtrovaný výsledek existuje

### Problémy

**Kritické:**

| Problém | Popis |
|---------|-------|
| Chybí fulltextové vyhledávání | Při 50+ dokumentech (rok provozu) bude filtrování nestačit. Xero/FreshBooks mají search jako první akci. |
| Klik na dokument vede na `href="#"` | Dokument se neotevře. Detail/preview stránka chybí úplně. |
| Chybí PDF viewer nebo alespoň download | Karta říká „PDF · 2 strany" ale žádné stažení. |
| „Ke schválení" dokumenty nemají CTA | Nejdůležitější akce (schválit a podepsat) je dostupná jen z dashboardu, ne ze samotné karty dokumentu. |

**Střední:**

| Problém | Popis |
|---------|-------|
| Chybí řazení | Nejnovější nahoře je implicitní, ale uživatel to neví. Sort by: datum / typ / název. |
| Chybí bulk selection | „Stáhnout vše za Q1" nebo „Označit vše jako přečteno" — FreshBooks toto má. |
| Puntík (nový dokument) je jen vizuální | Není `role="status"` ani text pro screen reader. Aria-label „Nový dokument" je na spangu, ale skrytý. Lepší: viditelný badge „Nový" text. |
| Filter „Šablony" chybí v pill filtru | Typ dokumentu „Šablona" existuje v datech, ale v filtry array není jako samostatná kategorie — spadá do „Smlouvy". |

**Nízká priorita:**

| Problém | Popis |
|---------|-------|
| Grid 2 sloupce je OK na desktop, ale na mobile 1 sloupec — karty jsou vysoké | Zvážit list view jako alternativu k grid view. |
| Chybí datum přidání jako sekundární info | Klient neví, kdy přesně dokument přišel. |

### Chybějící stránka: Detail dokumentu

```
/portal/dokumenty/[id]

Obsah:
- Název + typ + datum
- PDF inline viewer (nebo iframe)
- Tlačítko: Stáhnout PDF
- Tlačítko (pokud ke schválení): Schválit / Odmítnout s komentářem
- Komentáře / dotazy k dokumentu
- Zpět na seznam
```

---

## 4. Faktury — portál

### Co funguje
- Tabulka je přehledná, horizontální scroll na mobilu je implementovaný
- Summary KPI karty nahoře (K úhradě / Letos uhrazeno / Předplatné) — výborné, FreshBooks toto má
- Stavové badge jsou barevně odlišené
- Sloupec PDF se stažením existuje (byť href="#")

### Problémy

**Kritické:**

| Problém | Popis |
|---------|-------|
| Chybí splatnost v tabulce | V datech (`splatnost`) je, ale v tabulce není sloupec! Klient neví kdy platit. |
| „Stáhnout" PDF vede na `#` | Základní funkce chybí. |
| Chybí platební instrukce pro fakturu „K úhradě" | Číslo účtu, VS, QR kód. FreshBooks generuje platební stránku automaticky. |
| Chybí detail faktury | Klik na číslo faktury by měl otevřít detail s rozpisem položek. |

**Střední:**

| Problém | Popis |
|---------|-------|
| „K úhradě" badge je vizuálně podobné „Uhrazeno" | Zlatá vs. šedá — ale kontrast je nízký. Urgentní stav by měl být výraznější (červená nebo tmavší). |
| Chybí filtrování podle roku/období | Při ročním provozu bude tabulka mít 12+ řádků. Xero filtruje po kvartálech. |
| Chybí celkový součet uhrazeno v aktuálním roce jako exportovatelné číslo | Pro daňové přiznání klienta by bylo užitečné. |

**Nízká priorita:**

| Problém | Popis |
|---------|-------|
| Tabulka neumí řadit | Klik na hlavičku sloupce = sort. Standard v Xero/FreshBooks. |
| Chybí prázdný stav | Co vidí nový klient bez faktur? |

### Chybějící stránka: Detail faktury

```
/portal/faktury/[cislo]

Obsah:
- Hlavička: číslo, datum vystavení, splatnost
- Vystavovatel (Libuše): jméno, IČO, bankovní spojení
- Příjemce (klient): název firmy, IČO
- Položky s popisem a cenou
- DPH rozpis
- QR kód pro platbu (ČR standard)
- Tlačítko: Stáhnout PDF
- Stav: K úhradě / Uhrazeno
```

---

## 5. Schůzky — portál

### Co funguje
- Timeline zobrazení je intuitivní (chronologicky sestupně — poslední nahoře)
- Rozlišení „Plánováno" vs. „Hotovo" je jasné
- Poznámky ze schůzky jsou viditelné přímo v kartě — skvělé pro klienta
- Místo setkání je zobrazeno (Google Meet / fyzická adresa)
- Tlačítko „+ Domluvit nový termín" existuje

### Problémy

**Kritické:**

| Problém | Popis |
|---------|-------|
| „+ Domluvit nový termín" vede na `#` | Základní booking flow chybí. Měl by vést na Calendly, nebo na inline picker. |
| „Detail / přesunout →" vede na `#` | Klient nemůže přesunout naplánovanou schůzku. |
| „Otevřít zápis →" vede na `#` | Zápis z proběhlé schůzky chybí jako stránka. |

**Střední:**

| Problém | Popis |
|---------|-------|
| Chybí Google Meet odkaz u naplánované schůzky | Klient musí hledat link v emailu. FreshBooks posílá reminder s linkem. |
| Chybí reminder / notifikace před schůzkou | „Zítra máte kafíčko v 10:00 s Libuší" — emailový nebo in-app. |
| Chybí možnost přidat komentář/dotaz před schůzkou | Xero umožňuje sdílení agendy. |
| Prázdný stav chybí | Co vidí klient, který ještě žádnou schůzku neměl? |

**Nízká priorita:**

| Problém | Popis |
|---------|-------|
| Chybí filtrování (Plánované / Proběhlé) | Při delším vztahu bude seznam dlouhý. |
| „Naše společné kafíčka ☕" — emoji v h1-kontextu | Emoji v nadpisu sekce je OK brand-wise, ale screen readery je čtou doslova. |

### Booking flow — co chybí

```
User flow (navrhovaný):

[Klikne „+ Domluvit nový termín"]
    → Výběr typu: Měsíční kafíčko / Konzultace / Jiné
    → Výběr dostupného termínu (Calendly embed nebo vlastní)
    → Výběr formátu: Google Meet / Osobně (Praha 4) / Telefon
    → Potvrzení + email oběma stranám
    → Schůzka se zobrazí v seznamu se stavem „Plánováno"
```

---

## 6. Admin — efektivita workflow

### Klienti stránka

**Co funguje:**
- Grid karet s avatarem, MRR, deadline — rychlý přehled
- Search input existuje (jako jediná stránka v adminu!)
- Badge „Termín" vs. „OK" jasně separuje urgentní klienty

**Problémy:**

| Problém | Závažnost | Popis |
|---------|-----------|-------|
| Chybí stránka detail klienta | Kritická | Klik na klientskou kartu vede na `#`. Žádný profil klienta neexistuje. |
| Chybí filtrování | Střední | Při 23 klientech — filtr „Jen s termínem", „Mzdy", „Daňová evidence". |
| Search je jen UI, nefunguje | Střední | Input bez handleru. |
| Chybí řazení | Nízká | Seřadit podle MRR, podle příštího termínu. |
| Chybí „od" datum v přehledu | Nízká | Je v datech, ale málo prominentní. |

**Chybějící stránka: Detail klienta**

```
/admin/klienti/[id]

Sekce:
1. Hlavička: jméno, IČO, kontaktní osoba, email, telefon
2. Plán a MRR, datum zahájení spolupráce
3. Aktivní termíny (DPH, DPFO, mzdy)
4. Historie schůzek
5. Faktury (mini-tabulka s linkem do fakturace)
6. Dokumenty pro tohoto klienta
7. Poznámky (Libuše si může psát interní pozn.)
8. Quick actions: Vystavit fakturu / Naplánovat schůzku / Nahrát dokument
```

### Admin schůzky (kalendář)

**Co funguje:**
- Týdenní pohled je správný formát pro Libušin provoz
- Navigace min/příští týden existuje (byť tlačítka nefungují)
- Volný den „Čtvrtek" má prázdný stav

**Problémy:**

| Problém | Závažnost | Popis |
|---------|-----------|-------|
| Navigace po týdnech nefunguje | Kritická | Tlačítka Min/Příští jsou bez handleru. |
| Chybí „přidat schůzku" z kalendáře | Vysoká | Žádné CTA pro přidání nové schůzky. |
| Chybí zobrazení dne (denní pohled) | Střední | Při 3+ schůzkách v den by denní timeline bylo přehlednější. |
| „Příprava →" odkaz vede na `#` | Vysoká | Brief ke schůzce (jaká témata, jaké dokumenty připravit) chybí. |
| Chybí Google Calendar integrace | Nízká | Obousměrná sync by eliminovala duplicitní vedení. |
| Čtvrtek 15. května: 0 schůzek — ale je tam prázdný stav „Žádné kafíčko" | OK | Správné. |

### Admin fakturace

**Co funguje:**
- Tlačítko „Vystavit 2 čekající" jako batch akce — výborné
- 4 KPI karty pokrývají klíčové finance
- Stavové rozlišení k_vystaveni / k_uhrade / uhrazeno
- Akce v posledním sloupci jsou kontextové (Vystavit / Připomenout / PDF)

**Problémy:**

| Problém | Závažnost | Popis |
|---------|-----------|-------|
| „Vystavit →" vede na `#` | Kritická | Fakturační formulář chybí. |
| „Připomenout" vede na `#` | Vysoká | Odeslání reminder emailu klientovi. |
| Chybí filtrování po klientovi nebo období | Střední | Při 98+ fakturách bude tabulka nepoužitelná. |
| Chybí export (CSV/PDF) | Střední | Pro účetní uzávěrku nebo daňové přiznání. |
| Roční target „35 % splněno" — progress bar chybí | Nízká | Číslo bez vizualizace je méně čitelné. |

---

## 7. Notifikace — kompletně chybí

Toto je největší systémová mezera. Benchmarkové produkty mají:

| Feature | Xero | FreshBooks | Wave | Stunova |
|---------|------|-----------|------|---------|
| Badge count v navigaci | Ano | Ano | Ano | Ne |
| In-app notifikace panel | Ano | Ano | Základ | Ne |
| Email notifikace | Ano | Ano | Ano | Ne |
| Reminder před termínem | Ano | Ano | Ne | Ne |
| „Nový dokument nahraný" alert | Ano | Ano | Ne | Ne |

### Navrhovaný notification systém (minimální verze)

**Badge counts v navigaci (portál):**
```
Dokumenty [3]  ← počet nových/ke schválení
Faktury [1]    ← počet k uhrazení
```

**Badge counts v navigaci (admin):**
```
Klienti        ← bez badge
Schůzky        ← bez badge (kalendář je sám o sobě)
Fakturace [2]  ← k vystavení
```

**In-app notification panel:**
- Bell ikona v headeru nebo user info sekci sidebaru
- Dropdown s posledními 5 notifikacemi
- Typy: Nový dokument / Faktura k uhrazení / Termín za X dní / Schůzka zítra

**Email notifikace (pro klienta):**
- Nový dokument ke schválení → email okamžitě
- Faktura k úhradě → email při vystavení + reminder 3 dny před splatností
- Schůzka zítra → reminder večer předem

---

## 8. Empty states — analýza

### Portál

| Stránka | Empty state | Hodnocení |
|---------|-------------|-----------|
| Dashboard | Není | Chybí — co vidí nový klient? |
| Dokumenty | „Žádné dokumenty v této kategorii." — italika, centrované | OK pro filtrovaný výsledek, ale chybí globální empty state |
| Faktury | Není implementovaný | Chybí |
| Schůzky | Není implementovaný | Chybí |

### Admin

| Stránka | Empty state | Hodnocení |
|---------|-------------|-----------|
| Dashboard | Není | Není relevantní — admin nikdy nebude prázdný |
| Klienti | Není | Chybí pro search bez výsledků |
| Kalendář | „Žádné kafíčko naplánované." pro volný den | OK |
| Fakturace | Není | Chybí |

### Navrhované empty states

**Portál dashboard — nový klient:**
```
┌────────────────────────────────────┐
│  Vítej v portálu, Jano.            │
│                                    │
│  Libuše právě připravuje tvůj      │
│  první přehled. Zatím tu nic       │
│  není — ale brzy to napravíme.     │
│                                    │
│  [Domluvit první kafíčko ☕]       │
└────────────────────────────────────┘
```

**Dokumenty — prázdná složka:**
```
Složka zatím čeká na první dokument.
Jakmile Libuše něco nahraje, uvidíš
to tady.
```

**Faktury — žádné faktury:**
```
Žádné faktury zatím. První přijde
po prvním měsíci spolupráce.
```

**Schůzky — žádné schůzky:**
```
Ještě jsme se nesešli. Změňme to.
[+ Domluvit první kafíčko]
```

---

## 9. Onboarding — první přihlášení

Aktuální stav: Žádný onboarding neexistuje. Po přihlášení přes `/prihlaseni` uživatel přijde na dashboard s mock daty. Pro reálné nasazení toto nestačí.

### Navrhovaný onboarding flow pro nového klienta

```
[Přihlášení]
    ↓
[Dashboard — prázdný stav s uvítací zprávou]
    ↓
[Progress indikátor (3 kroky)]
    ├── 1. Vyplň základní info (firma, IČO) — 2 min
    ├── 2. Domluv první kafíčko s Libuší — 1 min
    └── 3. Nahraj první doklady — dle potřeby
    ↓
[Dashboard — naplněný daty]
```

**Minimální onboarding pro aktuální fázi (bez DB):**
- Uvítací banner na dashboardu pro nového klienta (detekce: 0 dokumentů, 0 faktur)
- CTA: „Domluvit první kafíčko" → booking link
- Žádný složitý wizard — Libuše vše domluví na prvním kafíčku

---

## 10. Accessibility — audit

### Pozitivní nálezy

| Feature | Implementace |
|---------|-------------|
| `aria-current="page"` na aktivním nav linku | Správně implementováno v obou layoutech |
| `aria-label` na nav elementech | `aria-label="Portál"`, `aria-label="Admin"` |
| `role="group"` + `aria-label` na filter pills | Správně v dokumenty page |
| `aria-pressed` na filter tlačítkách | Implementováno |
| `focus-visible` styly | Na dokumenty kartách a filter pills |
| Mobile safe area inset | `env(safe-area-inset-bottom)` na tab baru |

### Problémy

**Kritické (WCAG 2.1 AA blocker):**

| Problém | Umístění | Popis |
|---------|----------|-------|
| Dashboard „Pro tebe" checkboxy bez `role="checkbox"` | `portal/page.tsx` řádek 143 | `<span>` s check ikonou není sémanticky checkbox. Screen reader to nečte jako interaktivní prvek. |
| Emoji v textu bez `aria-hidden` nebo `aria-label` | Napříč soubory | `📅`, `📦`, `👤`, `📍`, `☕` jsou čteny doslova (calendar, package, person) screen readery. Buď `aria-hidden="true"` nebo obalit do `<span role="img" aria-label="popis">`. |
| Tabulky bez `<caption>` nebo `aria-label` | `portal/faktury`, `admin/faktury` | Tabulka nemá popis pro screen reader. |
| `<a href="#">` je sémanticky odkaz, ne tlačítko | Napříč soubory | Akcelerátor klávesnicí — Enter funguje, ale Space ne (Space funguje pro `<button>`). Pokud akce nenaviiguje, použít `<button>`. |

**Střední:**

| Problém | Umístění | Popis |
|---------|----------|-------|
| Kontrastní poměr „text-[var(--gold-dark)]" na cream pozadí | Napříč | Gold-dark (`#8B6914` odhadovaný) na cream background — nutno změřit. Cíl: 4.5:1 pro body text. |
| Focus ring chybí na tabulkových řádcích hover | `portal/faktury`, `admin/faktury` | Řádek `hover:bg-white/50` nemá focus styl. |
| Mobilní tab bar — touch targety | Oba layouty | Aktuální výška py-3 = ~48px výška — OK. Ale šířka flex-1 při 4 položkách na small phone = ~88px — přijatelné. |
| Chybí `lang="cs"` na HTML elementu | `layout.tsx` | Screen reader správně interpretuje jazyk. |

**Nízká priorita:**

| Problém | Popis |
|---------|-------|
| Skeleton loading states | Při asynchronním načítání dat — zatím mock, ale připravit. |
| `prefers-reduced-motion` | Hover efekty `-translate-y-0.5` by měly respektovat systémové nastavení. |

---

## Souhrnná prioritizace — backlog

### P0 — Blokující (nelze nasadit na reálné klienty)

1. **Booking flow** pro schůzky — „+ Domluvit nový termín" musí fungovat
2. **PDF download** v portálu — faktury i dokumenty musejí být stažitelné
3. **Detail faktury** v portálu s platebními instrukcemi (číslo účtu, VS, QR)
4. **Datum dynamicky** — odstranit hardcoded „Pátek · 9. května" na dashboardu
5. **Splatnost v tabulce faktur** — kritická informace chybí
6. **Emoji aria-hidden** — accessibility blocker

### P1 — Vysoká priorita (první 2 týdny po P0)

7. **Badge counts v navigaci** — notifikace kolik nových dokumentů/faktur
8. **Funkční search** v admin/klienti (input má handler)
9. **Detail klienta** stránka v adminu
10. **CTA na každém „Ke schválení" dokumentu** — Schválit tlačítko přímo na kartě
11. **Email notifikace** — alespoň „Nový dokument" a „Faktura vystavena"
12. **Empty states** pro portál — dashboard, faktury, schůzky

### P2 — Střední priorita (Sprint 3–4)

13. **Fulltextový search** v dokumentech
14. **Filtrování faktur** podle roku/období
15. **Detail dokumentu** stránka s PDF viewerem
16. **Daňový kalendář** v adminu — termíny DPH/DPFO/mzdy pro všechny klienty
17. **Komunikační kanál** (chat/dotazy) — klient ↔ Libuše
18. **Navigace po týdnech** v admin kalendáři (funkční tlačítka Min/Příští)

### P3 — Nízká priorita (budoucí iterace)

19. **Klientský profil** v portálu (nastavení, email, notifikace)
20. **Google Calendar integrace** pro Libuši
21. **Export CSV** z admin fakturace
22. **Sort sloupce** v tabulkách (klik na hlavičku)
23. **Reporting dashboard** — MRR trend, retention, cash flow praxe
24. **Bulk actions** v dokumentech (stáhnout vše / označit jako přečteno)
25. **Denní pohled** v admin kalendáři

---

## User flow wireframy — chybějící stránky

### Flow: Schválení dokumentu (portál)

```
[Dashboard]
    → „Schválit a podepsat" CTA
    → [Dokumenty — filtr: Ke schválení]
    → [Detail dokumentu]
        ├── PDF viewer (inline)
        ├── [Schválit] → potvrzení → dokument označen „Schváleno"
        └── [Mám dotaz] → otevře komunikaci s Libuší
```

### Flow: Platba faktury (portál)

```
[Faktury — seznam]
    → Klik na fakturu „K úhradě"
    → [Detail faktury]
        ├── Platební instrukce + QR kód
        ├── [Stáhnout PDF]
        └── [Označit jako uhrazeno] (nebo to Libuše označí sama)
```

### Flow: Booking schůzky (portál)

```
[Schůzky]
    → „+ Domluvit nový termín"
    → Výběr typu (Měsíční kafíčko / Konzultace / Ad hoc)
    → Výběr termínu (Calendly embed nebo vlastní picker)
    → Výběr formátu (Meet / Osobně / Telefon)
    → Potvrzení → zobrazí se v seznamu
```

### Flow: Vystavení faktury (admin)

```
[Admin/Fakturace]
    → „Vystavit 2 čekající" nebo „Vystavit →" u konkrétní faktury
    → [Formulář faktury]
        ├── Klient (předvyplněno)
        ├── Položky (předvyplněno ze šablony)
        ├── Datum, splatnost
        └── [Vygenerovat a odeslat klientovi]
    → Email klientovi s PDF
    → Faktura se zobrazí v portálu klienta
```

### Flow: Quick action z admin dashboardu

```
[Admin dashboard — „Vyžaduje pozornost"]
    → DPH termín: „Otevřít →"
    → [Filtrovaný pohled: 4 klienti s DPH 25. 5.]
        → Batch: „Připravit KH pro všechny"
        → Pro každého: [Nahrát dokument → Odeslat ke schválení]
```

---

## Závěr

Stunova portál a admin mají výbornou vizuální a emocionální vrstvu — tón, typografie, brand. Interakční vrstva je ale prakticky prázdná (vše vede na `#`). Na prezentaci / design review je to plnohodnotný artefakt. Pro první reálný klientský onboarding jsou P0 položky blocker.

**Největší UX chyba aktuálně:** Klient vidí „Ke schválení" dokument, klikne na něj, nic se nestane. Toto musí být první věc k opravě — je to hlavní hodnota portálu (Libuše připraví, klient schválí, bez fyzického podpisu).

**Největší příležitost:** Notifikační systém (badge counts + email) by z pasivního portálu udělal aktivní komunikační kanál. FreshBooks vydělává na retention právě tím, že klient „musí" přijít do portálu.

---

*Výstup je podklad pro UI Designéra (wireframy chybějících stránek), Frontend vývojáře (seznam nefunkčních akcí) a Projektového manažera (prioritizovaný backlog).*
