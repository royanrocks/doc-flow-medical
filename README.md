# Doc Flow Medical — Website

Static website for **Doc Flow Medical**, an Internal Medicine & Primary Care practice in Long Island City, Queens. Bilingual (English & Español).

## Structure

```
index.html                 Homepage (hero, feature strip, language card, 7 Pillars, patient reviews)
services.html              Services
doc-flow-360.html          Doc Flow 360° services (no prices — call to schedule), group/mobile services, membership + "email the office" form
prevention-imaging.html    Prevention & Imaging
concierge-care.html        Concierge Care
about.html                 About Dr. Auquilla
patient-resources.html     Patient Resources (portal, insurance)
contact.html               Phones, fax, email, address + Google Map, "email the office" form
css/styles.css             All styles (responsive, mobile nav); font sizes in rem so text-size controls scale everything
js/main.js                 Mobile nav, text-size controls (A−/A/A+), Google Translate language picker
CLIENT-REQUIREMENTS.md     Client requirements checklist, status and open items
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
