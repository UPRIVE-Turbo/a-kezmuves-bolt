# A Kézműves Bolt — Weboldal Projekt

## Mit kell csinálnod
Építs egy **egyoldalas, magyar nyelvű landing page-et** a(z) **A Kézműves Bolt** (Kézműves/Ajándékbolt, Veszprém) számára.

## Lépések

### 1. AIDesigner projekt LÉTREHOZÁSA (KÖTELEZŐ ELSŐ LÉPÉS!)
Az AIDesigner MCP nem generál designt amíg nincs projekt. ELŐSZÖR mindig:
- Hívd meg az AIDesigner `create_project` (vagy `new_project`) toolt a cég nevével: "A Kézműves Bolt"
- Jegyezd meg a visszakapott project ID-t — ezt fogod használni a design generáláshoz
- Csak ha a projekt létrejött, lépj tovább a design generálásra

Ha nem tudod pontosan a tool nevét, listázd ki az AIDesigner MCP elérhető tooljait,
és keresd a projekt-létrehozó toolt (create/new project), hívd meg azt elsőként.

### 2. Design generálás (AIDesigner MCP)
A létrehozott projekt ID-jával használd a `generate_design` toolt:
- Olvasd el a `spec.md` fájlt — ott van a teljes design specifikáció
- Olvasd el a `prompt.json` fájlt — ott vannak a színek, betűtípusok, céges adatok
- Prompt az AIDesigner-nek: A spec.md-ben lévő teljes magyar nyelvű leírás
- Viewport: desktop (1440px)
- Generálj egy mobil verziót is (viewport: mobile, 390px)

### 3. Design finomítás
Ha az első design nem tökéletes, használd a `refine_design` toolt:
- "Legyen magyarabb a szöveg / természetesebb"
- "A színek legyenek jobban a prompt.json szerint"
- "Mobilon legyen jobb a spacing"

### 4. Frontend implementálás
A generált HTML/Tailwind design alapján:
- Hozd létre a Next.js oldalakat (`src/app/page.tsx`)
- Használj Tailwind CSS-t a `prompt.json` színeivel
- Google Fonts betöltés a megadott betűtípusokkal
- Minden szekció: Hero → Szolgáltatások → Rólunk → Galéria → Űrlap → Kapcsolat → Lábléc

### 5. Payload CMS collections (Postgres adapter!)
A projekt Postgres-t használ (`@payloadcms/db-postgres`, Drizzle ORM).
Hozd létre:
- `src/collections/Services.ts` — név, leírás, ár, ikon, sorrend
- `src/collections/Gallery.ts` — kép, alt szöveg, sorrend
- `src/collections/Submissions.ts` — név, telefon, email, szolgáltatás, időpont, üzenet
- `src/globals/Settings.ts` — cégnév, telefon, cím, email, nyitvatartás, facebook, instagram

FONTOS Postgres-nél:
- A `payload.config.ts`-ben a postgresAdapter legyen beállítva `DATABASE_URI`-val
- Fejlesztésben `push: true` (auto séma-szinkron), production-ban migrációk
- Ha sématváltozás van: `npm run payload migrate:create` majd `migrate`

### 6. Seed data
Töltsd fel a Settings-et a `prompt.json`-ból:
- Cégnév, telefon, cím, email, social linkek
- Adj hozzá 3-5 placeholder szolgáltatást a spec.md alapján

### 7. Űrlap
Az időpontfoglalás/kapcsolat űrlap mentse a Payload `submissions` collection-be.
Server action vagy API route — NE client-side fetch.

### 8. Vercel deploy előkészítés
- Hozz létre `vercel.json`-t ha nincs
- `.env.local` fájlba: DATABASE_URI (Postgres), PAYLOAD_SECRET placeholder
- `next.config.js`-ben legyen output: 'standalone' ha szükséges
- Ellenőrizd hogy `npm run build` hiba nélkül lefut

### 9. Végső ellenőrzés
- `npm run dev` → localhost:3000 működjön
- Mobil nézet OK
- Minden szöveg magyar
- Űrlap működik
- Google Maps embed a kapcsolat szekcióban

## Fontos szabályok
- MINDEN szöveg, gomb, placeholder, hibaüzenet MAGYARUL
- Tegező/magázó stílus a spec.md szerint
- A design a `prompt.json` színeit és betűtípusait használja
- Mobile-first, reszponzív
- Telefonszámok kattinthatóak (tel: link)
- A galéria placeholder képeket használjon (via placeholder.co vagy similar)
