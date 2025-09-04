# Personal Portfolio

## Panoramica

Questo progetto è il sito personale che raccoglie:

- la presentazione personale (bio, competenze),
- la lista dei progetti realizzati con link alle rispettive repository GitHub e demo,
- certificazioni IT e badge professionali,
- canali di contatto (email, social, LinkedIn, ecc.),
- un form di contatto che consente ai visitatori di mandare direttamente messaggi dal sito.

---

## Caratteristiche principali

- Homepage con riepilogo e call-to-action verso i progetti.
- Pagina/area “Projects” che mostra ogni progetto con descrizione, tecnologie, link GitHub e link demo (se disponibile).
- Sezione “Certificazioni” con PDF/badge o link verso certificatori.
- Form di contatto (client-side + endpoint o servizio esterno per invio email).
- Responsive design e gestione asset.
- Facilità di aggiornamento (aggiunta di nuovi progetti da file `src/data/projects.*`).

---

## Stack tecnologico

- **Framework:** React + TypeScript
- **Tooling:** Vite
- **Styling:** CSS + TailwindCSS, componenti modulari

---

## Struttura del progetto

```
/PersonalPortfolio
├─ public/
│  ├─ file/
│  ├─ illustrations/
│  │  └─ technologies/
│  └─ images/
│     ├─ certifications/
│     └─ projects/
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ pages/
│  ├─ data/
│  ├─ App.tsx
│  └─ main.tsx
├─ index.html
├─ package.json
├─ vite.config.ts
├─ tsconfig.json
└─ README.md
```

---

## Installazione e sviluppo locale

### Prerequisiti

- Node.js (LTS) e npm/yarn.

### Comandi

```bash
git clone https://github.com/Gianlu201/PersonalPortfolio.git
cd PersonalPortfolio

npm install
npm run dev       # avvia server di sviluppo

```

---

## Contatti

Progetto realizzato da [**Gianluca Di Diego**](https://github.com/Gianlu201)

- **Repository:** [GitHub/Gianlu201/PersonalPortfolio](https://github.com/Gianlu201/PersonalPortfolio)
