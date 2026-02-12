# Claude Context — Des Moines Russian Conversation Club Website

## Project Summary

A simple, static single-page website for a local Russian-speaking club in Des Moines, Iowa. The club meets every Saturday at 1 PM at the Des Moines Public Library (Study Room 1). The site welcomes Russian speakers and learners of all levels.

**Stack**: Pure HTML, CSS, vanilla JavaScript — no frameworks, no build process. Hosted on GitHub Pages.

**Domain**: `dsmrussianconversationclub.com` — registered on **Porkbun** under username **jmoran** (personal account, personal credit card, main personal email for account recovery). DNS configured to point to GitHub Pages. HTTPS enforced.

---

## Key Files

```
DSMRussianClub/
├── index.html          # Single-page site with all content
├── easter-egg.html     # Secret page (music player + memory game)
├── css/
│   ├── styles.css      # All styling, includes light/dark themes
│   └── easter-egg.css  # Easter egg page styles
├── js/
│   ├── main.js         # Language toggle, theme toggle, easter egg trigger
│   └── easter-egg.js   # Memory game + audio player logic
├── assets/
│   ├── audio/
│   │   └── club-song.mp3   # "Yozhik's Welcome" club anthem
│   └── images/
│       └── hedgehog/   # Yozhik mascot images (see below)
├── robots.txt          # Search engine crawling rules
├── sitemap.xml         # Sitemap for search engine indexing
├── BRAINSTORMING.md    # Full design decisions and wireframe
└── README.md           # Project overview and structure
```

### Mascot Assets

All mascot images follow the naming convention `yozhik-{action}.png`:

| File | Description | Used In |
|------|-------------|---------|
| `yozhik-hero.png` | Hero banner with Russian flag and "Клуб русского языка" | Hero section, Memory game |
| `yozhik-reading.png` | Reading a book | About section, Memory game |
| `yozhik-pointing.png` | Pointing gesture | When & Where section, Memory game |
| `yozhik-lets-talk.png` | "Давай поговорим" speech bubble | Join Us section, Memory game |
| `yozhik-kak-dela.png` | Waving, "Как дела?" | Footer (easter egg trigger), Memory game |
| `yozhik-coffee.png` | Holding coffee mug (labeled "Drinking tea") | Header logo + Favicon, Memory game |
| `yozhik-laptop.png` | Working on laptop | Memory game |
| `yozhik-microphone.png` | Holding microphone | Easter egg music player, Memory game |
| `yozhik-otlichno.png` | Celebrating, "Отлично!" | Memory game win message, Memory game |
| `yozhik-poyekhali.png` | Waving, "Поехали!" | Memory game |
| `yozhik-privet-sign.png` | Holding "Привет!" sign | Memory game |
| `yozhik-sprite-sheet.png` | Multiple poses (sprite sheet) | Available for future use |

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
| Mascot | Hedgehog (Ёжик) — Cartoon style, multiple poses used as "section companions" throughout the page |
| Flags | All 15 former Soviet republics as emoji ribbon in footer |
| Map | Google Maps iframe, wrapped in link to open in maps app |
| Typography | System fonts (-apple-system, etc.) |

---

## Club Details

- **Name**: Des Moines Russian Conversation Club
- **Location**: Des Moines Public Library, 1000 Grand Avenue, Des Moines, IA 50309
- **Room**: Study Room 1
- **Schedule**: Every Saturday at 1:00 PM - 2:00 PM Central
- **Vibe**: Casual, welcoming, all levels, games and conversation

---

## Cultural Notes

- The hedgehog mascot references "Ёжик в тумане" (Hedgehog in the Fog), a beloved 1975 Soviet animated film by Yuri Norstein
- The 15 flags represent all former Soviet republics where Russian is/was widely spoken
- The design should feel cozy and inviting, like gathering around a kitchen table

---

## Easter Egg

A hidden feature accessed by clicking the footer Yozhik 3 times:

**Trigger**:
- Click 1: Yozhik wiggles
- Click 2: Yozhik wiggles + glows golden
- Click 3: Yozhik spins away, redirects to `easter-egg.html`
- Clicks reset after 2 seconds of inactivity

**Easter Egg Page** (`easter-egg.html`):
- Music player with "Yozhik's Welcome" (Привет от Ёжика) club anthem
- Bilingual lyrics display
- Memory game:
  - 11 total Yozhik poses available, 3 randomly selected per game
  - 6 cards in 3×2 grid (match EN description ↔ RU description)
  - Flip animation, move counter
  - Button shows "Reset" during play, changes to "Play Again" after winning
- Win message with yozhik-otlichno on completion

**Files**:
- `easter-egg.html` — Page structure
- `css/easter-egg.css` — Styles
- `js/easter-egg.js` — Game logic + audio player
- `assets/audio/club-song.mp3` — Song file

---

## What's NOT Built Yet

- Photo gallery (aspirational, no photos yet)
- 404 page

---

## TODO — Manual Steps Needed (in order)

1. [x] **Get a custom domain** — Purchased `dsmrussianconversationclub.com` on Porkbun. DNS configured for GitHub Pages. HTTPS enforced.
2. [x] **Update hardcoded URLs** — All references updated from `jmoranii.github.io/DSMRussianConversationClub/` to `dsmrussianconversationclub.com/`.
3. [x] **Google Search Console** — Registered `dsmrussianconversationclub.com`, ownership verified via DNS TXT record, sitemap submitted. Indexing requested.

---

## Notes

- Section mascots are hidden on mobile (< 600px) to avoid clutter
- All mascot images now have transparent backgrounds
- "Add to Calendar" button creates a recurring Google Calendar event (Saturdays 1-2 PM Central)
- "Copy Address" button copies library address to clipboard with bilingual feedback
- SEO: `robots.txt`, `sitemap.xml`, canonical URL, `og:url`, and JSON-LD structured data (Organization + recurring Event) are in place

---

## URLs That May Change

**IMPORTANT**: The following URLs are hardcoded and may need updating if the site moves:

| Location | Current URL | File |
|----------|-------------|------|
| Website URL | `https://dsmrussianconversationclub.com/` | `js/main.js` (in addToCalendar function) |
| og:url | `https://dsmrussianconversationclub.com/` | `index.html` |
| Canonical URL | `https://dsmrussianconversationclub.com/` | `index.html` |
| JSON-LD structured data | `https://dsmrussianconversationclub.com/` | `index.html` |
| Sitemap | `https://dsmrussianconversationclub.com/sitemap.xml` | `sitemap.xml`, `robots.txt` |
| og:image | `https://dsmrussianconversationclub.com/assets/images/hedgehog/yozhik-hero.png` | `index.html` |
| twitter:image | `https://dsmrussianconversationclub.com/assets/images/hedgehog/yozhik-hero.png` | `index.html` |

**Ask the user periodically**: "Has the website URL changed? If so, I'll update the references in the code."

---

## Testing Checklist

When making changes, verify:
- [ ] Language toggle switches all visible text
- [ ] Theme toggle works and persists on reload
- [ ] Site looks good on mobile (test at 375px width)
- [ ] Map loads and is clickable
- [ ] All 15 flags display correctly
- [x] Mascot images display with transparent backgrounds
- [ ] Section mascots hidden on mobile, visible on desktop
- [ ] Easter egg: 3 clicks on footer Yozhik triggers redirect
- [ ] Easter egg: Music player plays/pauses correctly
- [ ] Easter egg: Memory game matches pairs, shows win message, button changes to "Play Again"

---

## File Reference

- **BRAINSTORMING.md** — Full design rationale, wireframe, color palette details
- **README.md** — File structure and deployment instructions
