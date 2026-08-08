# 💌 Sara & Jordan — Couple Blog

A personal blog built with love by Sara, as a gift for Jordan.
A small corner of the internet to collect memories, travels, and the story of us.

---

## ✨ Features

- **Home** — Hero section with avatars, a live "days together" countdown, and a CTA that reveals the timeline and travel map
- **Timeline** — Interactive chronological story with photos, alternating left/right layout, and a hidden link to the apartment page
- **Travel Map** — Illustrated world map with clickable pins and photo galleries for each destination
- **Sara & Jordan pages** — Individual profile pages with bio, birth date, and passion tags
- **Casa page** — A visual tour of the apartment with a Figma-inspired editorial grid layout
- **Bilingual** — Full Italian/French toggle, language preference saved across pages via `localStorage`
- **Heart cursor** — Custom ♥ cursor on desktop (auto-disabled on touch devices)

---

## 🗂️ Project Structure

```
couple-blog/
├── index.html          # Home (hero + timeline + travel map)
├── sara.html           # Sara's profile page
├── jordan.html         # Jordan's profile page
├── casa.html           # Apartment page
│
└── assets/
    ├── css/
    │   ├── main.css        # Global styles, variables, cursor, countdown
    │   ├── hero.css        # Hero card, avatars, CTA button
    │   ├── timeline.css    # Timeline track, event cards
    │   └── viaggi.css      # Travel map, pins, gallery
    │
    ├── js/
    │   ├── lang.js         # Bilingual system (IT/FR) + localStorage
    │   ├── timeline.js     # Timeline data (EVENTS array) + logic
    │   ├── viaggi.js       # Travel data (DESTINATIONS array) + logic
    │   └── extras.js       # Heart cursor + countdown logic
    │
    └── img/                # All images (avatars, events, travel photos, map)
```

---

## ✏️ How to update content

**Add a timeline event** → open `assets/js/timeline.js` and add an object to the `EVENTS` array.

**Add a travel destination or photo** → open `assets/js/viaggi.js` and edit the `DESTINATIONS` array.

**Change a text string** → most static UI strings live in `assets/js/lang.js`. Page-specific strings (Sara, Jordan, Casa) are in each file's inline `<script>`.

**Add a new image** → drop the file in `assets/img/` and reference it in the relevant JS file.

---

## 🚀 Deployment

Hosted for free on **GitHub Pages**.
Live at: [https://sarasp22.github.io/couple-blog/](https://sarasp22.github.io/couple-blog/)

To deploy updates:
```bash
git add .
git commit -m "your message"
git push origin main
```
GitHub Pages rebuilds automatically within ~2 minutes.

---

## 🛠️ Tech stack

Pure HTML, CSS and vanilla JavaScript — no frameworks, no build tools, no dependencies.
Fonts via Google Fonts (`Nunito`). Deployed via GitHub Pages.

---

*Made with love by Sara — for Jordan ©2026*
