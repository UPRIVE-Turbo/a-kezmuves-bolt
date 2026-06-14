# A Kézműves Bolt — Weboldal Specifikáció

**Típus:** Egyoldalas magyar nyelvű landing page
**Iparág:** Kézműves/Ajándékbolt | **Város:** Veszprém
**Web státusz:** Csak Facebook (nincs weboldal) — ellenőrzendő
**Elérhetőség:** FB: facebook.com/akezmuves.bolt | Cím: Virág Benedek u. 3, Veszprém

---

Készíts egy magyar nyelvű, egyoldalas landing page-et egy kézműves/ajándékboltnak:

AZ ÜZLET ADATAI:
- Név: A Kézműves Bolt
- Cím: Virág Benedek u. 3, Veszprém
- Facebook: facebook.com/akezmuves.bolt
- Profil: Kézműves termékek, ajándékok, kézműves workshopok

DESIGN:
- Stílus: Meleg, természetes, kézműves, otthonos
- Színek: Terrakotta (#B5673E) fejlécekhez, olívazöld (#7A8B5A) kiemelésekhez, krém (#F4EFE5) háttérhez, sötétbarna (#3E2E24) szöveghez
- Betűtípus: Barátságos serif címekhez (pl. Bitter), sans-serif szöveghez

FELÉPÍTÉS (egyetlen görgethető oldal):
1. Hero szekció: "A Kézműves Bolt — Veszprém", szlogen ("Kézzel készült, szívvel adott"), CTA: "Kapcsolat"
2. Kínálatunk: Kézműves termékek, ajándékok, alapanyagok — rövid leírás
4. Galéria: 6-8 kép placeholder (termékek, workshopok)
5. Kapcsolat űrlap: Név, telefon, email, , üzenet
6. Elérhetőség: Cím, nyitvatartás, Google Maps
7. Lábléc: Facebook, cím, © 2026

HANGNEM: Meleg, kreatív, közösségi.

TECHNIKAI: Mobilbarát, reszponzív.

---

## Technikai követelmények
- **Stack:** Next.js 14+ (App Router) + Payload CMS 3.x (Postgres / @payloadcms/db-postgres) + Tailwind CSS
- **Nyelv:** Magyar (HU)
- **Hosting:** Vercel-kompatibilis
- **Responsive:** Mobile-first
- **SEO:** Meta tagek, Open Graph, magyar title/description
- **Űrlap:** Payload CMS form submission → submissions collection
- **Térkép:** Google Maps embed (Veszprém)

## Payload CMS Collections (Postgres adapter)
- `services` — Szolgáltatások (név, leírás, ár, ikon)
- `gallery` — Galéria képek (kép, alt, sorrend)
- `submissions` — Űrlap beküldések (név, telefon, email, üzenet, szolgáltatás, időpont)
- `settings` — Globális (cégnév, telefon, cím, nyitvatartás, social linkek)
