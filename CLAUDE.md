# Claude Context — Des Moines Russian Conversation Club Website

## Project Summary

A simple, static single-page website for a local Russian-speaking club in Des Moines, Iowa. The club meets every Saturday at 1 PM at the Des Moines Public Library (Study Room 1). The site welcomes Russian speakers and learners of all levels.

**Stack**: Pure HTML, CSS, vanilla JavaScript — no frameworks, no build process. Hosted on GitHub Pages.

---

## Key Files

```
DSMRussianClub/
├── index.html          # Single-page site with all content
├── css/styles.css      # All styling, includes light/dark themes
├── js/main.js          # Language toggle + theme toggle logic
├── assets/images/
│   └── hedgehog/       # Contains yozhik-hero.png mascot image
├── BRAINSTORMING.md    # Full design decisions and wireframe
└── README.md           # Project overview and structure
```

---

## How Things Work

### Bilingual System (English ↔ Russian)

Content exists in both languages in the HTML using `lang` attributes:

```html
<p>
  <span lang="en">Welcome!</span>
  <span lang="ru">Добро пожаловать!</span>
</p>
```

CSS controls visibility based on `data-lang` attribute on `<html>`:

```css
[data-lang="en"] [lang="ru"] { display: none; }
[data-lang="ru"] [lang="en"] { display: none; }
```

JavaScript toggles `data-lang="en"` or `data-lang="ru"` and saves to localStorage.

### Theme System (Light ↔ Dark)

Uses CSS custom properties defined in `:root` and `[data-theme="dark"]`:

- Light mode: warm white background (#FFFEF7), forest green primary (#2D5016)
- Dark mode: dark background (#1a1a1a), lighter green (#4A7C23)

JavaScript toggles `data-theme` attribute and respects `prefers-color-scheme` for initial load.

### localStorage Keys

- `dmrcc-language` — stores `"en"` or `"ru"`
- `dmrcc-theme` — stores `"light"` or `"dark"`

---

## Design Decisions

| Decision | Choice |
|----------|--------|
| Color palette | "Forest Dacha" — greens, browns, golden yellow accent |
| Mascot | Hedgehog (Ёжик) — Cartoon style, reading a book with "Клуб русского языка" text |
| Flags | All 15 former Soviet republics as emoji ribbon in footer |
| Map | Google Maps iframe, wrapped in link to open in maps app |
| Typography | System fonts (-apple-system, etc.) |

---

## Placeholders to Replace

These are marked with placeholder values and need real data:

1. **Email**: `mailto:placeholder@example.com` in index.html (line 151)
2. **WhatsApp**: `https://chat.whatsapp.com/placeholder` in index.html (line 157)

---

## Club Details

- **Name**: Des Moines Russian Conversation Club
- **Location**: Des Moines Public Library, 1000 Grand Avenue, Des Moines, IA 50309
- **Room**: Study Room 1
- **Schedule**: Every Saturday at 1:00 PM Central
- **Vibe**: Casual, welcoming, all levels, games and conversation

---

## Cultural Notes

- The hedgehog mascot references "Ёжик в тумане" (Hedgehog in the Fog), a beloved 1975 Soviet animated film by Yuri Norstein
- The 15 flags represent all former Soviet republics where Russian is/was widely spoken
- The design should feel cozy and inviting, like gathering around a kitchen table

---

## What's NOT Built Yet

- Photo gallery (aspirational, no photos yet)
- Custom domain (may add later)
- 404 page
- Animations

---

## Testing Checklist

When making changes, verify:
- [ ] Language toggle switches all visible text
- [ ] Theme toggle works and persists on reload
- [ ] Site looks good on mobile (test at 375px width)
- [ ] Map loads and is clickable
- [ ] All 15 flags display correctly

---

## File Reference

- **BRAINSTORMING.md** — Full design rationale, wireframe, color palette details
- **README.md** — File structure and deployment instructions
