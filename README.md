# Des Moines Russian Conversation Club

A simple, static website for the Des Moines Russian Conversation Club — a friendly weekly meetup for Russian speakers and learners of all levels.

## About the Club

- **What**: Casual Russian-speaking meetup — conversation, games, community
- **Where**: Des Moines Public Library, Study Room 1
- **When**: Every Saturday at 1:00 PM Central
- **Who**: Anyone interested in speaking Russian, from beginners to native speakers

## Project Structure

```
DSMRussianClub/
├── index.html              # Main (and only) HTML page
├── css/
│   └── styles.css          # All styles, including light/dark themes
├── js/
│   └── main.js             # Language toggle, theme toggle, any interactions
├── assets/
│   └── images/
│       └── hedgehog/       # Yozhik mascot images (transparent PNGs)
│           ├── yozhik-hero.png         # Hero banner image
│           ├── yozhik-reading.png      # About section
│           ├── yozhik-pointing.png     # When & Where section
│           ├── yozhik-lets-talk.png    # Join Us section
│           ├── yozhik-kak-dela.png     # Footer
│           └── (+ 6 more for future use)
├── BRAINSTORMING.md        # Design decisions and planning
├── CLAUDE.md               # Claude Code context file
└── README.md               # This file
```

## Tech Stack

- **HTML5** — Semantic, accessible markup
- **CSS3** — Custom properties for theming, no frameworks
- **Vanilla JavaScript** — Minimal JS for:
  - Language toggle (English ↔ Russian)
  - Theme toggle (Light ↔ Dark mode)
  - Any subtle animations
- **Hosting** — GitHub Pages

## Features

- [x] Single-page design
- [x] Bilingual content (English/Russian toggle)
- [x] Light/Dark mode toggle
- [x] Google Maps embed (clickable, opens in maps app)
- [x] Hedgehog mascot "Yozhik" — multiple poses as section companions
- [x] Footer with all 15 former Soviet republic flags
- [x] Responsive design (mobile-friendly)

## Color Palette — Forest Dacha

| Color | Hex | Usage |
|-------|-----|-------|
| Forest Green | `#2D5016` | Primary, headings, accents |
| Warm White | `#FFFEF7` | Background (light mode) |
| Soft Brown | `#8B7355` | Secondary text, borders |
| Golden Yellow | `#F4D03F` | Accent, buttons, highlights |

*Dark mode inverts background/foreground while keeping accent colors*

## Assets Status

- [x] **Hedgehog mascot images** — 12 poses with transparent backgrounds
- [x] **Contact email** — Connected (dsmrussianconversationclub@gmail.com)
- [x] **WhatsApp group link** — Connected

## Development

This is a static site with no build process. To develop locally:

1. Clone the repo
2. Open `index.html` in a browser
3. Edit and refresh

To deploy:

1. Push to GitHub
2. Enable GitHub Pages in repo settings
3. Site will be live at `https://[username].github.io/DSMRussianClub/`

## Content

### English
- Welcome text
- About section
- Location & schedule
- Join us CTA

### Russian (Русский)
- All content translated naturally (not machine-translated)
- Toggle switches all visible text

## License

This project is for the Des Moines Russian Conversation Club. Feel free to use as inspiration for your own community club website.

---

*See [BRAINSTORMING.md](BRAINSTORMING.md) for detailed design decisions and wireframes.*
