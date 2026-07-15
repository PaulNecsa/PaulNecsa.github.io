# PhD journey website

Site static (HTML/CSS/JS pur, fără dependențe de build) pentru diseminarea activității de
cercetare: publicații, postere, proiecte/cod Python, video-uri și o pagină de linkuri tip
linktree. Temă dark implicită cu comutator light, responsive, pregătit pentru SEO academic
(Open Graph, schema.org/Person, sitemap).

## Structura fișierelor

```
Website/
├── index.html          ← pagina principală (About, Research, Publications, Posters, Projects, Videos, Contact)
├── links.html          ← pagina „linktree” (linkul unic pentru bio pe rețele)
├── resources.html      ← ghid public de tool-uri gratuite (EN, cu căutare live; sursă: RESURSE.md)
├── knowledge.html      ← Knowledge Hub: brevetul Goodyear 1844 + 12 brevete istorice, 3 diagrame SVG originale, referințe verificate
├── RESURSE.md          ← documentul de lucru în română (nu se publică; poți să-l ștergi din repo)
├── README.md           ← acest ghid
├── robots.txt          ← pentru motoarele de căutare
├── sitemap.xml         ← harta site-ului (actualizează adresa după publicare)
├── .nojekyll           ← dezactivează procesarea Jekyll pe GitHub Pages
└── assets/
    ├── css/style.css   ← tot designul (culori, teme, responsive)
    ├── js/main.js      ← toggle temă, meniu mobil, animații, fațadă YouTube
    ├── img/            ← favicon, og-image, thumbnail-uri postere
    ├── diagrams/       ← polymer-diagrams.drawio — sursa EDITABILĂ a diagramelor (deschide-o pe app.diagrams.net)
    └── posters/        ← AICI pui PDF-urile posterelor (creezi folderul la primul poster)
```

## 1. Personalizare (înainte de publicare)

Deschide `index.html` și `links.html` și caută `TODO` — vei găsi toate locurile de completat:

1. **Numele** — înlocuiește „Your Name" peste tot (inclusiv în `<title>`, meta og:title și JSON-LD).
2. **Inițialele** — înlocuiește „YN" (logo navbar + avatar).
3. **Linkurile de profil** — ORCID, Google Scholar, ResearchGate, LinkedIn, GitHub, YouTube:
   înlocuiește fiecare `href="#"` cu linkul real. ORCID se afișează ca URL complet
   (ex. `https://orcid.org/0000-0002-XXXX-XXXX`) — cerință din ghidul oficial ORCID.
4. **Email** — înlocuiește `your.name@university.edu` (recomandat: adresa instituțională).
5. **Publicațiile** — intrările marcate `[Example entry — replace]` sunt ȘABLOANE, nu
   publicații reale. Copiază blocul `<article class="pub">…</article>` pentru fiecare
   publicație nouă. DOI-ul se scrie ca link complet: `https://doi.org/10.xxxx/xxxxx`.
6. **Posterele** — pune PDF-ul în `assets/posters/`, generează un thumbnail PNG (o captură
   a primei pagini), pune-l în `assets/img/`, apoi actualizează cardul din secțiunea Posters.
7. **Video-urile** — înlocuiește `VIDEO_ID_1` cu ID-ul clipului YouTube (partea de după
   `watch?v=` din URL). Playerul se încarcă doar la click (pagina rămâne rapidă).
8. **După publicare** — înlocuiește `YOUR-USERNAME.github.io` în: `index.html` (canonical,
   og:url, og:image, JSON-LD), `links.html`, `robots.txt`, `sitemap.xml`.

> Poți cere oricând asistentului Claude: „completează site-ul cu datele mele" — furnizând
> numele, linkurile și lista de publicații. Șabloanele sunt gândite pentru asta.

## 2. Publicare pe GitHub Pages (pas cu pas, fără programare)

1. Creează cont pe https://github.com (dacă nu ai). **Activează 2FA** din Settings →
   Password and authentication — aceasta e principala măsură de securitate a site-ului.
2. Creează un repository nou, numit exact: `NUMELE-TAU-DE-UTILIZATOR.github.io`
   (public, fără README inițial).
3. Încarcă fișierele: pe pagina repo-ului → „uploading an existing file" → trage TOT
   conținutul folderului `Website` (inclusiv folderul `assets`) → „Commit changes".
   - Limita la upload prin browser e 25 MB/fișier; pentru postere PDF mai mari,
     folosește aplicația GitHub Desktop (gratuită) — limita urcă la 100 MB/fișier.
4. Repo → Settings → Pages → Source: „Deploy from a branch" → Branch: `main`, folder `/ (root)` → Save.
5. În 1–3 minute site-ul e live la `https://NUMELE-TAU.github.io`. Orice modificare
   ulterioară = încarci din nou fișierul modificat (sau folosești GitHub Desktop).

### Domeniu propriu (opțional, mai târziu)
Un domeniu `.com` costă ~10,44 $/an (Cloudflare Registrar, preț verificat 2026) sau
`.ro` de la ~8 EUR/an. Se conectează din Settings → Pages → Custom domain; HTTPS e automat.

## 2b. Knowledge Hub — note de întreținere

- **Brevetele** (Goodyear US3,633 + cele 12) sunt documente în domeniul public; linkurile
  de pagină + PDF duc la Google Patents (verificate iul. 2026). Dacă vrei copii self-hosted,
  descarcă PDF-urile și pune-le în `assets/patents/`, apoi schimbă linkurile butoanelor „PDF".
- **Diagramele** din secțiunea Fundamentals sunt SVG-uri originale desenate direct în pagină
  (temă-aware, se adaptează dark/light). Sursa editabilă: `assets/diagrams/polymer-diagrams.drawio`
  — o deschizi pe https://app.diagrams.net (File → Open from → Device). După editare poți
  exporta SVG și înlocui figura din `knowledge.html`.
- **Referințele [1]–[7]** au DOI/ISBN verificate prin Crossref/edituri (iul. 2026). Nu adăuga
  referințe fără DOI/ISBN verificat.
- **Politica de surse** e afișată pe pagină: fără Wikipedia; doar surse primare/autoritative.

## 3. Drepturi de autor la PDF-uri (important!)

Nu urca PDF-ul versiunii publicate de editură decât dacă politica revistei o permite.
Verifică fiecare revistă pe **Sherpa Romeo** (https://openpolicyfinder.jisc.ac.uk/) —
de regulă e permisă versiunea „author accepted manuscript". Alternativ, linkul DOI e
întotdeauna suficient și legal.

## 4. Extinderi planificate (roadmap)

| Fază | Ce adăugăm | Cum |
|---|---|---|
| 2 | Aplicații Python interactive | Streamlit Community Cloud sau Hugging Face Spaces (gratuit) + iframe în secțiunea Projects — șablonul e deja în `index.html`, comentat |
| 2 | Notebook-uri demonstrative | Badge „Open in Colab" — șablon comentat în secțiunea Projects |
| 3 | Arhivă permanentă Web3 | Postere/preprint-uri pe Arweave (~1–2 $ o singură dată, prin ArDrive) + badge „Permanently archived" |
| 3 | Domeniu propriu | `.com`/`.ro` prin Cloudflare Registrar / registrar local |
| — | Google Search Console | Adaugă site-ul pentru monitorizarea indexării |

## 5. Note tehnice

- Temă: dark implicit; preferința vizitatorului se salvează în `localStorage`.
- Iconuri: Font Awesome 6 + Academicons (CDN). Fără alte dependențe externe.
- Animațiile respectă `prefers-reduced-motion` (accesibilitate).
- Embed YouTube: fațadă cu încărcare la click, domeniu `youtube-nocookie.com` (privacy).
- La tipărire, site-ul trece automat pe o paletă deschisă (media query `print`).
