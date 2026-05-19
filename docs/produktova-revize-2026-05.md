# Produktová vize: Libuše Stuňová · Účetnictví — Revize Q2 2026
**Od:** Produktový manažer
**Pro:** Business analytik, UX Designér, tým
**Datum:** 14. 5. 2026
**Projekt:** stunova.qawave.ai

---

## Kontext revize

Přezkoumán zdrojový kód landing page (`src/app/page.tsx`), klientský portál (`portal/`) i admin pro Libuši. Cíl: identifikovat mezery oproti nejlepším v kategorii a navrhnout konkrétní kroky.

---

## 1. Co chybí pro kategorii č. 1 v ČR

### Silné stránky současného stavu
- Vizuální identita je excelentní — cream/espresso paleta, Fraunces italic, kafíčko jako rituál. Okamžitě odlišitelná od šedých corporate webů konkurence.
- Klientský portál existuje jako koncept — to většina osobních účetních nemá vůbec.
- Copy je autentické, tykání funguje, „bez překvapení v březnu" je silný claim.
- 4-krokový proces (Kafíčko → Nastavení → Rytmus → Klid) je jasný a snižuje bariéru vstupu.

### Kritické mezery

#### a) Chybí foto Libuše — největší konverzní problém
Sekce About používá logo místo portrétu. Osobní účetní prodává hlavně sebe. Benchmark Avalon Accounting: candid fotky na každé stránce, klientka vidí s kým bude pracovat. Bez opravdové fotky je brand jen hezká estetika, ne důvěra.

**Akce:** Profesionální fotosession v coffee shop stylu (odpovídá „kafíčko" rituálu). Min. 3 varianty: hero, about, OG image.

#### b) Social proof je nulový
Web tvrdí „14 let praxe" a „23 klientů" (hero stats card), ale žádné jméno klienta, žádná citace, žádná 5* recenze. Google Business profil ani odkaz na Firmy.cz recenze neexistuje.

**Akce — priorita 1:**
- 3–5 testimonials od reálných klientů (jméno + firma + konkrétní situace: „Přešla jsem od velkého účetního studia a poprvé za 4 roky vím, kolik zaplatím na daních")
- Google Business profil vyplnit + požádat prvních 10 klientů o recenzi
- Logo/název 3–5 referenčních firem v hero sekci (podobně jako SaaS weby)

#### c) Žádné ceny na webu
Hlavní landing (`page.tsx`) nemá žádný pricing. Varianta v4-warm má ceny v kartách služeb (`od 4 000 Kč / měs.`), ale to je jen preview varianta, ne produkční landing.

Zákazník OSVČ, který porovnává 5 účetních, odchází z webu bez klíčové informace. Transparentní ceny = diferenciace (většina účetních v ČR ceny tají).

**Akce:** Přidat Pricing sekci přímo na landing. Doporučená struktura:
- Tier 1 — OSVČ / daňová evidence: od 2 500 Kč/měs.
- Tier 2 — s.r.o. / podvojné: od 4 500 Kč/měs.
- Tier 3 — s.r.o. + mzdy: od 6 000 Kč/měs.
- + jednorázové (daňové přiznání, roční závěrka)

#### d) Chybí FAQ
Hlavní obava zákazníka: „Jak to bude fungovat, když změním účetní?" a „Co přesně musím dělat já?" Sekce Process to částečně řeší, ale FAQ formát je SEO gold a odstraňuje poslední bariéru před kontaktem.

**Top 6 FAQ pro stunova.cz:**
1. Jak probíhá přechod od jiného účetního?
2. Jak mi mám posílat doklady každý měsíc?
3. Co dělat, když přijde kontrola z finančního?
4. Používáte nějaký účetní software?
5. Jak rychle odpovídáte?
6. Co když budu potřebovat poradit mimo pracovní dobu?

#### e) Žádná blogová/vzdělávací část
Avalon Accounting a podobní lídři kategorií mají obsah (daňové tipy, novinky v zákonech). Pro Libuši je to:
- SEO kanál pro vyhledávání jako „daňové přiznání OSVČ Praha"
- Důkaz expertízy bez potřeby platit za reklamu
- Obsah, který sdílí klienti svým kamarádům podnikatelům

**Minimum viable blog:** 4 články/rok. Témata: „Co si připravit na roční uzávěrku", „DPH pro začátečníky", „Jak na faktury bez účetního softwaru".

---

## 2. Konverzní optimalizace landing page

### Současný stav
2 CTA v hero: „Domluvit kafíčko" (primární) + „Co nabízím" (sekundární). Kontaktní formulář v patě.

### Problémy

**Příliš málo konverzních bodů.** Uživatel, který scrolluje a je přesvědčen uprostřed stránky, musí scrollovat dolů na formulář. Každá sekce by měla mít vlastní micro-CTA.

**Kontaktní formulář je slepý.** Pole: jméno, email, zpráva. Chybí:
- Výběr, o co má zájem (OSVČ / s.r.o. / mzdy)
- Preferovaný způsob kontaktu (email / telefon / WhatsApp)
- Přibližný obrat nebo počet dokladů měsíčně (Libuši pomůže odhadnout cenu před prvním kafem)

**Žádná okamžitá hodnota po odeslání.** Po odeslání formuláře by klient mohl dostat: „Mezitím si stáhni checklist: 5 věcí, které potřebuješ k prvnímu kafíčku."

### Navrhované úpravy

| Sekce | Akce |
|-------|------|
| Hero | Přidat „nebo napiš na WhatsApp" jako třetí alternativu |
| Services | Přidat „Začít s [službou] →" do každé karty |
| Process po kroku 01 | Inline mini-formulář: jen email + „Rezervovat kafíčko" |
| About | Tlačítko „Podívej se na moje reference" (anchor na testimonials) |
| ClientZone | CTA „Chceš taky takový přehled?" |
| Footer | Aktuální rok + GDPR odkaz + odkaz na LinkedIn |

**Inline kalendář** — přímá integrace Calendly nebo Cal.com místo formuláře. Zákazník si sám vybere slot → nižší tření, Libuši odpadne back-and-forth s emailem. Toto je pravděpodobně největší single konverzní win.

---

## 3. Klientský portál — mezery vs. Xero/FreshBooks

### Co portál umí (mock)
- Dashboard s nejbližším termínem, KPI (faktury, daňová úspora, nové dokumenty), activity feed, task list
- Dokumenty s filtry a badge „Nový"
- Faktury s tabulkou a stavem k_uhrade/uhrazeno
- Schůzky (sekce existuje)

### Co chybí — prioritizováno

#### Musí mít (blokuje reálné nasazení)

**1. Notifikace**
Klient v současném stavu neví, že přibyl nový dokument ke schválení, pokud se sám nepřihlásí. Xero posílá email/push pro každou akci. Minimum: email notifikace při přidání dokumentu nebo blížícím se termínu.

**2. Elektronický podpis**
Tlačítko „Schválit a podepsat" v portálu zatím nikam nevede. Klient potřebuje podepsat plnou moc, souhlas s DPH kontrolním hlášením apod. Varianty implementace:
- Jednoduché: klient klikne „Souhlasím" → zaznamená se timestamp + IP (postačí pro interní účely)
- Lepší: integrace DocuSign nebo SignNow API (cca 10–30 USD/měs.)

**3. Upload dokumentů od klienta**
Portál je v tuto chvíli read-only. Klient nemůže nahrát fotky dokladů přes portál — musí posílat WhatsAppem nebo emailem. Vercel Blob je přímá cesta (CLAUDE.md to zmiňuje jako prioritu).

**4. In-app zprávy / komentáře**
Tlačítko „Mám dotaz" v portálu nikam nevede. Řešení: jednoduchý thread per-dokument (comment box → Libuši přijde email). Alternativa: WhatsApp link s předvyplněným textem.

#### Měl by mít (v2)

**5. Daňový kalendář**
Personalizovaný přehled termínů pro konkrétního klienta: DPH, přiznání, mzdy, sociální pojištění. Klient vidí, co ho čeká příštích 90 dní. Toto je „wow moment" — nikde jinde to klient nemá.

**6. Roční přehled čísel**
Graf obratu vs. náklady po měsících. Export do PDF. Klient to použije při rozhovoru s bankou nebo při plánování. FreshBooks toto má jako standard.

**7. Přehled odpisů / majetku**
Pro klienty s více než 5 zaměstnanci nebo hmotným majetkem.

#### Bylo by fajn (v3)

**8. Sdílení přístupu**
Klient (jednatel) chce přidat přístup pro svého manažera nebo účetní asistenta.

**9. Integrace s fakturačním softwarem**
Fakturoid nebo iDoklad napojení — klient faktury vystavuje tam, Libuši chodí automaticky.

**10. Mobilní app / PWA**
Portál není responzivní (CLAUDE.md to potvrzuje). Progressive Web App jako minimum.

---

## 4. Diferenciace — jak ji komunikovat silněji

### Současná diferenciace (implicitní, ne explicitní)
- Kafíčko jako rituál — osobní vztah
- Odpovídám do 24h
- Tykání
- Praha 4 / fyzická blízkost + online

### Problém
Těchto 500 účetních v Praze taky říká „jsem dostupná" a „osobní přístup". Diferenciace musí být specifická a ověřitelná.

### Navrhovaná silná diferenciace

**A) „Žádné překvapení v březnu" — udělejte z toho garanci**
Toto je nejsilnější claim na webu. Ale je to jen slogan. Udělat z toho konkrétní slib: „Každý kvartál ti pošlu predikci daňové povinnosti. Pokud rozdíl oproti realitě přesáhne 20 %, vracím honorář za ten měsíc." Taková záruka neexistuje u žádné osobní účetní v ČR.

**B) Transparentní ceny online**
Zmiňováno výše, ale jako diferenciátor: „Jsem jedna z mála účetních v Praze, kde ceny vidíš předem." Konkurence tají ceny za velkou firemní bránou.

**C) Onboarding kit**
Klient po podpisu smlouvy dostane Welcome Kit (PDF nebo Notion stránka): co od Libuše čekat, jak posílat doklady, na co si dát pozor v prvním měsíci, kontakty. Žádná jiná osobní účetní to nedělá — vypadá to profesionálně a snižuje úzkost při startu.

**D) Specializace na segment**
Generalistka pro „malé firmy a OSVČ" je v Praze velká konkurence. Libuše by mohla deklarovat specializaci na podmnožinu:
- Freelanceři v kreativních oborech (fotografové, grafici, IT freelanceři)
- Startupy do 10 zaměstnanců
- E-commerce podnikatelé
Specializace umožňuje vyšší ceny a lepší word-of-mouth.

**E) „Vysvětlím i třikrát" — formalizovat jako produkt**
Copy v v4-warm: „Účetní, která vysvětluje i třikrát, dokud nedává smysl." Toto je silné. Formalizovat jako: bezplatné konzultace (30 min/měs. v ceně), vzdělávací videa pro klienty (krátká vysvětlení DPH, uzávěrky), slovník pojmů v portálu.

---

## 5. Growth strategie — prvních 50 klientů

Libuše má nyní 23 klientů (dle hero stats). Cíl: 50 klientů = ~2× růst.

### Kanál 1: Referrals — největší páka (0 Kč)
Osobní účetní roste hlavně doporučeními. Každý spokojený klient zná 3–5 dalších podnikatelů.

**Akce:**
- Explicitně požádat každého stávajícího klienta: „Znáš někoho, komu by se hodila účetní? Rád/a ho pozvu na první kafíčko."
- Referral bonus: 1 měsíc zdarma pro stávajícího klienta, když přivede nového.
- Timing: po první úspěšné daňové uzávěrce nebo po „wow momentu" (klient ušetří na daních).

### Kanál 2: LinkedIn — osobní brand (čas, ne peníze)
Cílová skupina (jednatelé s.r.o., freelanceři) je na LinkedIn. Obsah, který funguje:
- „Tohle jsem zachránila klientovi před pokutou z FÚ" (příběh bez jmen)
- „3 věci, které OSVČ zapomínají odečíst z daní"
- Komentáře pod posty firemních poradců a HR influencerů v Praze

Frekvence: 2× týdně. Cíl: 500 followerů do 6 měsíců → ~3–5 nových poptávek/měs.

### Kanál 3: Lokální networking Praha 4 + freelancer komunity
- Pražské podnikatelské snídaně (Česká podnikatelská aliance, StartupGrind Praha)
- Facebook skupiny: „Freelanceři Praha", „OSVČ Česko", „E-commerce CZ/SK"
- Partnerství s coworkingy v Praze 4 (Nusle, Pankrác): Libuše = doporučovaná účetní pro jejich členy

### Kanál 4: SEO — dlouhodobá investice (3–12 měsíců)
Klíčová slova s komerčním záměrem:
- „účetní Praha 4" (nízká konkurence, lokální)
- „daňová evidence Praha OSVČ"
- „přechod od účetního jak postupovat"

Blog s 1 článkem/měsíc + vyplněný Google Business profil. Výsledky za 6–12 měsíců.

### Kanál 5: Partnerství s komplementárními službami
Firmy, které Libuše nepotřebuje jako konkurenci, ale jako zdroj leadů:
- Právníci (zakládání s.r.o.) — posílají klienty, Libuše zas je
- Finanční poradci
- Webdesignéři (mají klienty-živnostníky)
- Pojišťovací makléři

Formát: vzájemné doporučování. Neformální, bez provize (GDPR simplicity).

### Kanál 6: Plná moc od ex-klientů jiných účetních
Každý rok v dubnu–červnu se mění účetní. Libuše může cílit s LinkedIn postem / Google Ads: „Přemýšlíš o změně účetní? Přebrání agendy zvládneme za 2 týdny."

### Timeline k 50 klientům

| Měsíc | Akce | Cíl |
|-------|------|-----|
| Červen 2026 | Foto, testimonials, pricing na web, Calendly | Web ready pro konverzi |
| Červenec 2026 | LinkedIn aktivita, referral kampaň ke stávajícím 23 klientům | +5 klientů |
| Srpen 2026 | Google Business, FAQ, první 2 blogové články | +3 klienti |
| Září 2026 | Partnerství s 2–3 firmami, networking | +5 klientů |
| Říjen 2026 | Portál s real auth + upload (Vercel Blob) | Retence |
| Prosinec 2026 | Cíl: 40 klientů | — |
| Duben 2027 | Daňová sezóna = peak poptávka | Cíl: 50 klientů |

---

## Metriky úspěchu

| KPI | Nyní | Cíl 12M |
|-----|------|---------|
| Aktivní klienti | 23 | 50 |
| MRR | ~134 000 Kč (odhad 23×5800) | ~290 000 Kč |
| Konverzní poměr web → kontakt | neměřeno | 3–5 % |
| Průměrná doba odpovědi | 24h | 4h |
| NPS klientů | neměřeno | 70+ |
| Google recenze | 0 | 20+ |
| LinkedIn followers | neznámý | 500+ |

---

## Prioritizovaný backlog (pro Business analytika)

### P0 — Blokuje growth (udělat do 30 dnů)
1. Foto Libuše na web (About sekce, hero)
2. Pricing sekce na landing page
3. Testimonials sekce (3–5 citací)
4. Calendly / Cal.com integrace místo kontaktního formuláře
5. Google Business profil

### P1 — Konverzní win (30–60 dnů)
6. FAQ sekce (6 otázek)
7. WhatsApp CTA jako alternativa k formuláři
8. Inline CTA v každé sekci (ne jen hero + footer)
9. LinkedIn profil aktivní (2× týdně)

### P2 — Portál ready (60–120 dnů)
10. Real auth (Clerk.dev — Vercel Marketplace, 1 klik setup)
11. Upload dokladů (Vercel Blob)
12. Email notifikace při novém dokumentu
13. Elektronický podpis (timestamp/IP v. 1)
14. Daňový kalendář v portálu

### P3 — Diferenciace (90–180 dnů)
15. Welcome Kit PDF pro nové klienty
16. Blog (4 články/rok)
17. Roční přehled čísel v portálu (graf)
18. Responzivní portál pro mobil

---

## Byznys model

Předplatné (recurring revenue) — správný model pro osobní účetní. Klient platí měsíčně fixní částku, dostává definovaný rozsah služeb. Jednorázové práce (roční závěrka, daňové přiznání) nad rámec předplatného za příplatek.

Zdravá kapacita 1 osoby: 40–50 klientů při MRR 5 500–7 000 Kč = 220 000–350 000 Kč/měs. hrubého. Po 50 klientech: asistent nebo specializace na vyšší segment.

---

## Další kroky pro Business analytika

1. Specifikovat datový model pro auth + klientský portál (Clerk + Neon Postgres)
2. Definovat upload flow pro doklady (co klient nahraje, jak Libuše vidí, jak se archivuje)
3. Navrhnout notifikační systém (email + in-app badge)
4. Zpracovat FAQ obsah ve spolupráci s Libuší
5. Definovat referral program pravidla (podmínky, kdy se aktivuje bonus)

---

*Dokument je živý — aktualizovat po každé větší iteraci webu nebo po překročení 35 klientů.*

---HANDOFF---
OD: Produktový manažer
KOMU: projektovy-manazer
STATUS: hotovo
VÝSTUP: /Users/tm/workspaces/projects/stunova/docs/produktova-revize-2026-05.md
DALŠÍ KROK: PM rozhodne, které P0 položky jdou do sprintu. Doporučuji začít s foto + pricing + Calendly jako nejrychlejší konverzní win. Business analytik dostane backlog P2 (auth + portál features) k rozpracování.
OTÁZKY:
  - Má Libuše již profesionální fotky, nebo je třeba organizovat fotosession?
  - Je Calendly/Cal.com přijatelná integrace, nebo preferuje jiný způsob rezervace?
  - Existuje preference pro specializaci na konkrétní segment (IT freelanceři vs. e-commerce vs. generál)?
---/HANDOFF---
