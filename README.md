# Des Moines Russian Conversation Club

A simple, static website for the Des Moines Russian Conversation Club — a friendly weekly meetup for Russian speakers and learners of all levels.

**Live site**: [dsmrussianconversationclub.com](https://dsmrussianconversationclub.com/)

## About the Club

- **What**: Casual Russian-speaking meetup — conversation, games, community
- **Where**: Des Moines Public Library, Study Room 1
- **When**: Every Saturday at 1:00 PM - 2:00 PM Central
- **Who**: Anyone interested in speaking Russian, from beginners to native speakers

## Project Structure

```
DSMRussianConversationClub/
├── index.html                      # Main single-page site
├── yozhiks-secret-room.html        # Hidden page (music player, message board, memory game)
├── css/
│   ├── styles.css                  # All styles, including light/dark themes
│   └── yozhiks-secret-room.css     # Secret room page styles
├── js/
│   ├── main.js                     # Language toggle, theme toggle, meeting status, secret room trigger
│   ├── schedule-data.js            # Weekly meeting exceptions (cancellations, special messages)
│   └── yozhiks-secret-room.js      # Memory game, audio player, lyrics toggle, message board
├── assets/
│   ├── audio/
│   │   └── club-song.mp3           # "Yozhik's Welcome" club anthem
│   ├── images/
│   │   └── hedgehog/               # Yozhik mascot images (12 transparent PNGs)
│   └── messages/
│       └── messages.js             # Yozhik's Latest Message content (EN + RU)
├── .claude/
│   └── skills/                     # Claude Code skills for this project
│       ├── update-message/         # /update-message — post a new message to the secret room
│       └── skill-creator/          # Reference guide for creating new skills
├── robots.txt                      # Search engine crawling rules
├── sitemap.xml                     # Sitemap for search engine indexing
├── CNAME                           # Custom domain config for GitHub Pages
├── CLAUDE.md                       # Claude Code context file
└── README.md                       # This file
```

## Tech Stack

- **HTML5** — Semantic, accessible markup
- **CSS3** — Custom properties for theming, no frameworks
- **Vanilla JavaScript** — No build process, no dependencies
- **Hosting** — GitHub Pages with custom domain

## Features

### Main Site (`index.html`)
- Bilingual content (English/Russian toggle)
- Light/Dark mode toggle (respects system preference)
- Google Maps embed (clickable, opens in maps app)
- Weekly meeting status banner (auto-calculates next Saturday, shows cancellations)
- "Add to Calendar" button (Google Calendar, recurring Saturday event)
- Copy address button with bilingual feedback
- Hedgehog mascot "Yozhik" as section companions
- Footer with all 15 former Soviet republic flags
- Responsive design (mobile-friendly)
- SEO: robots.txt, sitemap.xml, canonical URL, Open Graph, JSON-LD structured data

### Yozhik's Secret Room (`yozhiks-secret-room.html`)
Hidden page accessed by clicking the footer Yozhik 3 times.

- **Music player** — "Yozhik's Welcome" club anthem with collapsible lyrics
- **Yozhik's Latest Message** — Updatable message board (edit `assets/messages/messages.js`)
- **Memory game** — Match Yozhik poses in English and Russian (3 random pairs per game)

## Updating the Meeting Schedule

The meeting status banner auto-generates a "We're meeting this Saturday!" message with the correct date. To cancel a week or post a special message, edit `js/schedule-data.js` and add an entry:

```js
'2026-07-04': {
  type: 'cancelled',  // or 'special' for schedule changes
  en: 'No meeting — Happy 4th of July! 🇺🇸',
  ru: 'Встречи не будет — С Днём независимости! 🇺🇸'
}
```

## Updating Yozhik's Message

The message board on the secret room page is designed for easy updates. Edit `assets/messages/messages.js` — it contains both English and Russian versions with a date sign-off. Use the `/update-message` Claude Code skill for a guided workflow that includes translation and auto-commit.

## Color Palette — Forest Dacha

| Color | Hex | Usage |
|-------|-----|-------|
| Forest Green | `#2D5016` | Primary, headings, accents |
| Warm White | `#FFFEF7` | Background (light mode) |
| Soft Brown | `#8B7355` | Secondary text, borders |
| Golden Yellow | `#F4D03F` | Accent, buttons, highlights |

*Dark mode inverts background/foreground while keeping accent colors*

## Mascot — Yozhik (Ёжик)

The hedgehog mascot references "Ёжик в тумане" (Hedgehog in the Fog), a beloved 1975 Soviet animated film. 12 poses are used throughout the site as section companions and in the memory game.

## Development

This is a static site with no build process:

1. Clone the repo
2. Open `index.html` in a browser
3. Edit and refresh

To deploy: push to `main` — GitHub Pages deploys automatically.

## License

This project is for the Des Moines Russian Conversation Club. Feel free to use as inspiration for your own community club website.
