# Resurse gratuite pentru doctorat — ghid verificat (iulie 2026)

Domenii: injectarea polimerilor tehnici, fabricație aditivă (MEX/FDM), metrologie dimensională 3D (CMM, scanare), Industry 4.0, redactare academică.
Metodă: 3 agenți de cercetare în paralel — (1) analiza integrală a listei `Astrosp/Awesome-OSINT-List`, (2) instrumente academice, (3) instrumente de inginerie. Statutul „gratuit" verificat pe surse oficiale în iulie 2026.
Legendă: ✔ = verificat acum · [N] = [Neconfirmat] — istoric stabil, dar neverificat punctual.

---

## 1. Starter kit — primele 10 de instalat/creat cont

| # | Instrument | De ce |
|---|---|---|
| 1 | **Zotero 7 + Better BibTeX** ✔ | Bibliografia întregii teze; sync gratuit 300 MB (ocolibil prin WebDAV); export .bib automat |
| 2 | **ZEISS INSPECT free** (ex-GOM Inspect) ✔ | Inspecție scan-vs-CAD, hărți colorate de deviații, rapoarte — standardul de facto acceptat în articole de metrologie |
| 3 | **Autodesk Education: Fusion + Moldflow Adviser Ultimate** ✔ | Singura simulare de umplere a matriței gratuită realist (licență educațională 1 an, reînnoibilă; permisă pentru cercetare) |
| 4 | **R + pachetele FrF2, rsm, qcc** ✔ (sau JASP/jamovi cu GUI) | Înlocuitorul gratuit al Minitab: DoE factorial/fracționat, suprafețe de răspuns, Cp/Cpk |
| 5 | **PrePoMax 2.5 + CalculiX** ✔ | FEM gratuit, nelimitat, pe Windows, fără instalare — analize statice/termice zilnice |
| 6 | **FreeCAD 1.1.1** ✔ | CAD parametric fără nicio restricție, permanent |
| 7 | **CloudCompare** ✔ | Comparare nori de puncte/mesh (C2C, C2M), registrare ICP, procesare batch în Python |
| 8 | **ResearchRabbit + Semantic Scholar** ✔ | Descoperire de literatură „free forever", alerte, sync Zotero — complement la Consensus |
| 9 | **Overleaf free + TeX Live local (plan B)** ✔ | Articole pe Overleaf; ATENȚIE: free tier degradat (compile timeout 10 s, 1 colaborator) — teza se compilează local |
| 10 | **Zenodo + Open Policy Finder** ✔ | DOI gratuit pentru dataset-uri CMM/STL/postere (Data Availability la Q1/Q2) + verificarea politicilor de self-archiving |

---

## 2. Din lista Awesome-OSINT — ce merită pentru un doctorand

~75–80 % din listă (pentest, social media, darknet, people-search) e irelevantă academic. Ce rămâne valoros:

| Instrument | Gratuit | Utilizare academică concretă |
|---|---|---|
| **Espacenet** ✔ | da (EPO) | ~150 mil. brevete: state-of-the-art la scule de injecție, conformal cooling, fixturi de metrologie — brevetele preced adesea articolele |
| **Filmot** ✔ | da | caută ÎN subtitrările YouTube: găsești minutul exact din webinarii ZEISS/Moldflow sau prezentări de conferință unde apare termenul tău |
| **Forensically + FotoForensics** ✔ | da | clone-detection/ELA pe imagini: auditezi propriile figuri compuse (micrografii) înainte de submisie; utile și la recenzat |
| **TinEye** ✔ | da (necomercial) | reverse image search: verifici dacă o figură apare deja în altă publicație |
| **ExifTool** ✔ | da (OSS) | cureți metadatele imaginilor/PDF-urilor înainte de submisie |
| **Wayback Machine + archive.today** ✔ | da | arhivezi paginile web citate în teză (fișe de material, pagini de produs) — anti „link rot" |
| **waybackpy** [N] | da (OSS) | script Python: arhivează automat TOATE URL-urile din bibliografie |
| **Talkwalker Alerts** ✔ | da | radar pe domeniu (în paralel cu Google Alerts): „PEEK micro-molding", „conformal cooling" etc. |
| **Unpaywall** ✔ | da (extensie) | butonul verde = versiunea legală gratuită a articolelor cu paywall |
| **CORE + BASE** ✔ | da | full-text open-access + literatură gri europeană (teze, rapoarte) |
| **Google Dataset Search** ✔ | da | dataset-uri publicate (parametri de injecție, nori de puncte) |
| **NotebookLM** [N] | da | „chat" cu propriile PDF-uri (articole, standarde) |
| **DeepL / 2lingual** [N] | freemium | literatura germană de injecție (Kunststoffe!) |
| **dangerzone** [N] | da (OSS) | deschizi în siguranță PDF-uri din surse dubioase |

⚠️ Lista conține și Sci-Hub / LibGen / Anna's Archive — ilegale sau în zonă gri în majoritatea jurisdicțiilor și riscante pentru integritatea academică. Alternativa legală: Unpaywall + CORE + cerere direct la autor (ResearchGate/email).

---

## 3. Literatură și referințe

| Instrument | Gratuit 2026 | Notă |
|---|---|---|
| Semantic Scholar ✔ | integral + API | căutare semantică, TLDR, grafuri de citare |
| OpenAlex ✔ | date CC0; API cu cheie gratuită (din feb. 2026) | bibliometrie reproductibilă fără Scopus |
| ResearchRabbit ✔ | „free forever" | colecții + alerte + sync Zotero |
| Connected Papers ✔ | 5 grafuri/lună | hărți vizuale ale literaturii |
| Elicit ✔ | plan Basic permanent | extracție de date din articole; fără export RIS/BIB pe free |
| Scite ✘ ✔ | doar trial 7 zile | nu mai are plan gratuit (schimbare recentă) |
| Scopus Preview ✔ | da | verifici indexarea/cuartila revistelor țintă |
| Zotero 7 + Better BibTeX ✔ | integral; 300 MB sync | + JabRef ca editor .bib de rezervă |

## 4. Redactare

| Instrument | Gratuit 2026 | Notă |
|---|---|---|
| Overleaf ✔ | proiecte nelimitate, DAR 1 colaborator + compile timeout 10 s | degradat sever; teza → LaTeX local |
| TeX Live + VS Code ✔ | integral | zero limitări, același cod |
| Typst ✔ | editor web 200 MB; compilator OSS local | alternativa modernă la LaTeX |
| LanguageTool ✔ | editor web 10.000 caractere/verificare | extensia de browser a devenit doar premium |
| Writefull [N] | cotă zilnică gratuită în Word/Overleaf | antrenat pe texte științifice; întreabă biblioteca de licență instituțională |

## 5. Statistică și DoE

| Instrument | Gratuit | Acoperă |
|---|---|---|
| R: FrF2 + DoE.base + rsm + qcc + SixSigma ✔ | integral | factorial/fracționat, Taguchi, RSM, fișe de control, Cp/Cpk |
| Python: pyDOE3 + statsmodels + pingouin ✔ | integral | planuri experimentale + ANOVA în pipeline-ul tău |
| JASP (modul Quality Control) ✔ | integral | GUI tip Minitab: DoE 2^k + capabilitate |
| jamovi (modul DoE) ✔ | integral | full/fractional, Box-Behnken, CCD, Taguchi |
| G*Power ✔ | freeware | dimensionarea eșantionului înainte de experimente |

## 6. CAD, FEM și simularea injecției — verdictul onest

**Simulare umplere matriță:** nu există în 2026 nimic simultan gratuit permanent + întreținut + industrial-grade.
- Calea realistă: **Moldflow Adviser Ultimate prin Autodesk Education** ✔ (gratuit cât ești înmatriculat, reînnoibil anual, permis pentru cercetare; include baza de date de materiale cu Cross-WLF/pvT).
- Open-source citabil/modificabil: **openInjMoldSim** (OpenFOAM, GPL-3) ✔ — dar neîntreținut din nov. 2021; doar pentru studii de principiu.
- Moldex3D: fără ediție studențească publică (doar trial 30 zile + e-learning gratuit). CADMOULD: doar trial.

| Instrument | Gratuit 2026 | Notă |
|---|---|---|
| FreeCAD 1.1.1 ✔ | integral (LGPL) | CAD parametric + workbench FEM |
| Onshape EDU ✔ | da | cloud; documentele NU devin publice (spre deosebire de planul Free) |
| PrePoMax 2.5 + CalculiX ✔ | integral | FEM Windows, import STEP, meshing inclus |
| Ansys Student 2026 R1 ✔ | da, reînnoibil | 128 K noduri / 1 M celule; include Polyflow + optiSLang (DoE pe simulări) |
| Abaqus Learning Edition ✔ | da | max 1000 noduri — doar pentru învățare |
| Code_Aster / Elmer FEM ✔ | integral | multifizică avansată, curbă de învățare abruptă |

## 7. Metrologie 3D și fabricație aditivă

| Instrument | Gratuit 2026 | Notă |
|---|---|---|
| ZEISS INSPECT free ✔ | da (tier gratuit confirmat) | aliniere, editare mesh, inspecție 3D, rapoarte; GD&T avansat doar pe pro (trial 30 zile) |
| CloudCompare 2.13.2 ✔ | integral (GPL) | C2C/C2M, ICP, CloudComPy pentru batch |
| MeshLab [N] | integral | curățare/reparare/decimare mesh |
| PrusaSlicer 2.9.6 ✔ | integral (AGPL) | slicing de referință pentru studii MEX |
| OrcaSlicer 2.4 ✔ | integral (AGPL) | calibrări sistematice integrate (flow, pressure advance, temperatură) — ideal pentru DoE pe imprimare |
| Software CMM educațional | ✘ | PC-DMIS/Calypso nu au versiuni publice gratuite; exporți punctele și analizezi în ZEISS INSPECT/CloudCompare/R |

## 8. Baze de date de materiale (polimeri)

| Instrument | Gratuit 2026 | Notă |
|---|---|---|
| CAMPUS Plastics ✔ | integral | ~4600 grade, 27 producători, date ISO 10350/11403 comparabile + curbe multi-point pentru simulare |
| UL Prospector ✔ | cont gratuit | ~43.500 fișe ASTM; limită de vizualizări pe free |
| MatWeb [N] | cu înregistrare | proprietăți generice, căutare rapidă |
| Baza Moldflow (în Adviser EDU) ✔ | inclusă | date reologice direct pentru simulare |

## 9. Publicare, date, integritate

| Instrument | Gratuit | Utilitate |
|---|---|---|
| Open Policy Finder ✔ | da | politici self-archiving (fostul Sherpa Romeo) — OBLIGATORIU înainte de a urca PDF-uri pe site |
| DOAJ + Think.Check.Submit ✔ | da | anti-reviste predatoare |
| ORCID + Crossref ✔ | da | identitate + verificare DOI |
| Zenodo ✔ | 50 GB/înregistrare, DOI automat | dataset-uri CMM, STL, G-code, postere — citabile |
| OSF ✔ | 5 GB privat / 50 GB public | organizarea proiectului doctoral + preregistrări |
| engrXiv ✔ | da | preprint server dedicat ingineriei (moderare activă) |

## 10. Prezentări, postere, organizare

| Instrument | Gratuit 2026 | Notă |
|---|---|---|
| LibreOffice Impress/Draw ✔ | integral | postere A0 + prezentări, export PDF tipar |
| Better Poster templates ✔ | da (OSF) | format de poster cu lizibilitate maximă |
| Canva ✘ pentru edu superior ✔ | doar Canva Free generic | Canva Education e exclusiv K-12 — nu pentru doctoranzi |
| Inkscape + GIMP + draw.io ✔ | integral | figuri vectoriale publicabile, prelucrare micrografii, scheme de flux |
| Notion Education Plus ✔ | gratuit cu email instituțional | dashboard doctorat (pipeline articole, experimente) |
| Obsidian ✔ | gratuit (inclusiv comercial, din 2025) | note de cunoaștere locale, legare cu Zotero |

## 11. Industry 4.0 / digital twin (pe scurt)

Stack gratuit: **Node-RED** (fluxuri OPC UA/MQTT) + **InfluxDB OSS** (serii de timp) + **Grafana OSS** (dashboard-uri de proces) + **Eclipse Ditto 3.9** ✔ (framework digital twin, activ) + **open62541 / Prosys Simulation Server** [N] (simulare OPC UA).

---

## Schimbări 2025–2026 de reținut (ca să nu te bazezi pe informații vechi)

1. **Overleaf free degradat**: compile timeout 10 s + 1 colaborator — planifică LaTeX local pentru teză.
2. **Scite** nu mai are plan gratuit (doar trial cu card).
3. **LanguageTool**: extensia de browser doar premium; editorul web rămâne gratuit.
4. **OpenAlex** cere cheie API gratuită din feb. 2026.
5. **Canva Education** exclude explicit învățământul superior.
6. **Obsidian** a devenit gratuit inclusiv pentru uz comercial.
7. **GOM Inspect** trăiește ca **ZEISS INSPECT** cu tier gratuit confirmat.
8. **Fleek** (Web3 hosting) închis — irelevant aici, dar notat în proiectul site-ului.

---

### Glosar și Acronime

**AM** — additive manufacturing (fabricație aditivă): realizarea obiectelor din date de model 3D, de regulă strat cu strat. **MEX** — material extrusion (extrudare de material): categoria AM cu depunere prin duză; FDM/FFF e principalul exemplu. **FDM/FFF** — fused deposition modeling / fused filament fabrication. **CMM** — coordinate measuring machine (mașină de măsurat în coordonate, MMC): măsoară geometria piesei prin palparea punctelor de pe suprafață. **GD&T** — geometric dimensioning and tolerancing (cotare și toleranțe geometrice). **DoE** — design of experiments (proiectarea experimentelor): metodologie statistică de planificare a experimentelor cu variație sistematică a factorilor. **RSM** — response surface methodology (metodologia suprafeței de răspuns). **Cp/Cpk** — indici de capabilitate a procesului. **FEM** — finite element method (metoda elementelor finite). **CAD** — computer-aided design (proiectare asistată de calculator). **Cross-WLF / pvT** — modele reologice/de stare folosite în simularea injecției. **OSINT** — open-source intelligence (informații din surse deschise). **OA** — open access. **DOI** — digital object identifier. **OPC UA / MQTT** — protocoale de comunicație industrială (Industry 4.0). **ELA** — error level analysis (analiza nivelului de eroare la imagini). **ICP** — iterative closest point (algoritm de registrare a norilor de puncte).

Termeni în afara lexicului: OSINT, ELA, ICP, RSM, Cp/Cpk, GD&T, open access, DOI, OPC UA, MQTT, reverse image search, preprint, self-archiving, link rot.
