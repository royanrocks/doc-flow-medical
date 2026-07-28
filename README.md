# Doc Flow Medical — Website

Static website for **Doc Flow Medical**, an Internal Medicine & Primary Care practice in Long Island City, Queens. Bilingual (English & Español).

## Structure

```
index.html                 Homepage (hero, feature strip, language card, 7 Pillars)
services.html              Services
prevention-imaging.html    Prevention & Imaging
concierge-care.html        Concierge Care
about.html                 About Dr. Auquilla
patient-resources.html     Patient Resources (portal, insurance)
contact.html               Contact & booking
css/styles.css             All styles (responsive, mobile nav)
js/main.js                 Mobile nav toggle + chat widget
assets/
  logo-mark.svg            Brand cross mark
  icons/                   6 feature-strip icons (SVG)
  pillars/                 7 Pillars of Health icons (SVG)
  flags/                   US & Spain flags (SVG)
  ui/                      UI glyphs — globe, lock, tag, pin, play, chat, quote, arrow (SVG)
  img/                     Photography (PNG)
```

All icons and glyphs are hand-built SVGs; photography is PNG.

## Local preview

Any static server works:

```
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy on Render

This repo includes `render.yaml` (static site, no build step).

1. Push to GitHub.
2. In Render: **New → Blueprint**, pick this repo.
3. Render reads `render.yaml` and deploys the `doc-flow-medical` static site.

Alternatively: **New → Static Site**, connect the repo, leave build command empty, publish directory `.`.
