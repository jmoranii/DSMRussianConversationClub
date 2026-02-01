# Des Moines Russian Conversation Club — Website Brainstorming

## Project Overview

A simple, static website for a local Russian-speaking club that meets weekly at the Des Moines Public Library. The site should be welcoming to people of all language levels and celebrate the diverse backgrounds of Russian speakers.

**Official Club Name**: Des Moines Russian Conversation Club

---

## Core Info

- **What**: Casual Russian-speaking meetup — conversation, games, community
- **Where**: Des Moines Public Library, Study Room 1
- **When**: Every Saturday at 1:00 PM Central
- **Audience**: Anyone interested in speaking Russian, from beginners to native speakers

---

## Vibe & Aesthetic

### Feeling
- **Primary**: Cozy, inviting, warm (like gathering around a kitchen table)
- **Secondary**: Clean and sleek (not cluttered, easy to navigate)
- Think: "a warm hug in website form, but with good typography"

### Color Palette — DECIDED: Forest Dacha ✓

- Forest green (#2D5016)
- Warm white (#FFFEF7)
- Soft brown (#8B7355)
- Accent: golden yellow (#F4D03F)

*Dark mode will invert the light/dark values while keeping accent colors*

---

## Features

### Must Have
- [x] **Club description** — What we do, who we are, all levels welcome
- [x] **Meeting schedule** — Saturdays, 1 PM, Study Room 1
- [x] **Location info** — Des Moines Public Library address + embedded Google Map
  - Google Maps iframe embed showing the library location
  - Clickable — opens in user's default maps app
  - Address displayed as text alongside the map
- [x] **Contact options** — Email + WhatsApp group join link (email still placeholder)
- [x] **Language toggle** — English ↔ Russian (upper right)
- [x] **Dark/Light mode toggle** — (upper right, near language toggle)

### Cultural Elements
- [x] **Hedgehog mascot "Yozhik"** — Inspired by "Ёжик в тумане" (Hedgehog in the Fog)
  - 12 poses created, 5 used as "section companions" throughout the page
  - Friendly, approachable, distinctly "ours"
- [x] **Former Soviet republic flags** — Celebrating the diversity of Russian speakers
  - All 15: Russia, Ukraine, Belarus, Moldova, Georgia, Armenia, Azerbaijan, Kazakhstan, Uzbekistan, Tajikistan, Kyrgyzstan, Turkmenistan, Estonia, Latvia, Lithuania
  - Implemented as subtle footer ribbon with emoji flags
- [ ] **Russian proverbs/quotes** — Optional, can add later
  - Could be rotating or static, adds cultural flavor
  - Example: "В гостях хорошо, а дома лучше" (It's good to visit, but home is best)

### Aspirational (Later)
- [ ] **Photo gallery** — Pictures of club meetups (no photos available yet)
- [ ] **Custom domain** — For a more professional look

---

## Technical Stack

- **HTML** — Semantic, accessible markup
- **CSS** — Custom properties for theming (light/dark mode)
- **JavaScript** — Minimal, for:
  - Language toggle (swap text content)
  - Theme toggle (light/dark)
  - Maybe subtle mascot animations
- **Hosting** — GitHub Pages (free, simple)
- **No frameworks** — Keep it simple and fast

---

## Site Structure (Proposed)

```
index.html (single page, sections below)
├── Hero / Welcome
│   └── Hedgehog mascot + tagline
├── About the Club
│   └── What we do, all levels welcome
├── When & Where
│   └── Schedule + location/map
├── Join Us
│   └── Email + WhatsApp link
└── Footer
    └── Flags ribbon + maybe a proverb
```

---

## Wireframe / Layout Sketch

```
┌─────────────────────────────────────────────────────────────────┐
│  [🦔 Logo]   Des Moines Russian Conversation Club    [EN|RU] [☀️🌙] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                     ┌─────────────┐                             │
│                     │             │                             │
│                     │  HEDGEHOG   │                             │
│                     │   MASCOT    │                             │
│                     │             │                             │
│                     └─────────────┘                             │
│                                                                 │
│              Добро пожаловать! Welcome!                         │
│                                                                 │
│         A friendly space to practice Russian                    │
│            — all levels welcome —                               │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─ ABOUT ─────────────────────────────────────────────────┐   │
│  │                                                          │   │
│  │  We're a casual group of Russian speakers and learners   │   │
│  │  who meet weekly to chat, play games, and enjoy each     │   │
│  │  other's company. Whether you're fluent or just          │   │
│  │  starting out, you're welcome here.                      │   │
│  │                                                          │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─ WHEN & WHERE ───────────────────────────────────────────┐   │
│  │                                                          │   │
│  │   📅 Every Saturday                                      │   │
│  │   🕐 1:00 PM Central                                     │   │
│  │   📍 Study Room 1                                        │   │
│  │                                                          │   │
│  │   Des Moines Public Library                              │   │
│  │   1000 Grand Avenue                                      │   │
│  │   Des Moines, IA 50309                                   │   │
│  │                                                          │   │
│  │   ┌────────────────────────────────────┐                 │   │
│  │   │                                    │                 │   │
│  │   │      [GOOGLE MAPS EMBED]           │                 │   │
│  │   │                                    │                 │   │
│  │   │   (clickable — opens maps app)     │                 │   │
│  │   │                                    │                 │   │
│  │   └────────────────────────────────────┘                 │   │
│  │                                                          │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─ JOIN US ────────────────────────────────────────────────┐   │
│  │                                                          │   │
│  │   Want to join? Just show up! Or reach out:              │   │
│  │                                                          │   │
│  │   ┌──────────────┐    ┌──────────────┐                   │   │
│  │   │  📧 Email    │    │  💬 WhatsApp │                   │   │
│  │   └──────────────┘    └──────────────┘                   │   │
│  │                                                          │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  [🇷🇺][🇺🇦][🇧🇾][🇲🇩][🇬🇪][🇦🇲][🇦🇿][🇰🇿][🇺🇿][🇹🇯][🇰🇬][🇹🇲][🇪🇪][🇱🇻][🇱🇹]  │
│                                                                 │
│               © 2026 Des Moines Russian Conversation Club       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Layout Notes

- **Header**: Sticky/fixed, contains logo (small hedgehog), club name, language toggle (EN|RU), theme toggle (light/dark)
- **Hero**: Large hedgehog mascot image, welcoming headline in both languages, brief tagline
- **About**: Simple text block, warm and inviting copy
- **When & Where**: Schedule details prominently displayed, Google Maps iframe below with clickable link to open in maps app
- **Join Us**: Two clear CTAs — email button and WhatsApp button
- **Footer**: Horizontal ribbon of all 15 flags (small, tasteful), copyright
- **Responsive**: Stacks vertically on mobile, map goes full-width

---

## Content to Write

### English Version
- Welcome/hero text
- About section (2-3 paragraphs)
- Location details
- Call to action for joining

### Russian Version
- All of the above, translated
- Should feel natural, not machine-translated

---

## Mascot — Yozhik the Hedgehog (Ёжик) ✓ COMPLETE

The hedgehog is a beloved figure in Russian/Soviet culture, most famously from the 1975 animated film "Hedgehog in the Fog" (Ёжик в тумане) by Yuri Norstein.

### Style — Cute Cartoon (Duolingo-inspired) ✓

- **Vibe**: Inspired by the Duolingo owl's approachable, slightly sassy cartoon style
- **Colors**: Hedgehog-y earth tones (browns, tans, cream)
- **Personality**: Friendly, welcoming, with speech bubbles in Russian

### Current Implementation:
- **Hero section**: `yozhik-hero.png` — Banner with Russian flag and club name
- **About section**: `yozhik-reading.png` — Reading a book
- **When & Where**: `yozhik-pointing.png` — Pointing gesture
- **Join Us**: `yozhik-lets-talk.png` — "Давай поговорим" speech bubble
- **Footer**: `yozhik-kak-dela.png` — Waving goodbye with "Как дела?"

### Available for future use:
- `yozhik-coffee.png`, `yozhik-laptop.png`, `yozhik-microphone.png`
- `yozhik-otlichno.png`, `yozhik-poyekhali.png`, `yozhik-privet-sign.png`
- `yozhik-sprite-sheet.png` (all poses combined)

---

## Decisions Made ✓

| Question | Decision |
|----------|----------|
| Club name | Des Moines Russian Conversation Club |
| Color palette | Forest Dacha (greens, browns, golden yellow) |
| Mascot style | Cute cartoon, Duolingo-inspired, hedgehog colors |
| Mascot usage | "Section companions" — different poses guide visitors through the page |
| Flag display | Emoji flags in subtle footer ribbon |
| Contact method | WhatsApp group (connected) + Email (placeholder) |

## Still Needed

- [x] **Contact email** — Connected (dsmrussianconversationclub@gmail.com)
- [x] **WhatsApp group invite link** — Connected
- [ ] **Proverbs** — None selected yet, can add later
- [x] **Hedgehog artwork** — 12 poses with transparent backgrounds

---

## Next Steps

1. ~~Answer open questions~~ ✓ (major decisions made)
2. ~~Pick a color palette~~ ✓ (Forest Dacha)
3. ~~Sketch rough wireframe/layout~~ ✓
4. ~~Create or source hedgehog mascot artwork~~ ✓ (12 poses created)
5. ~~Write content (English first, then Russian)~~ ✓
6. ~~Build it!~~ ✓

### Remaining
- [x] Replace email placeholder with real contact
- [ ] Deploy to GitHub Pages
- [ ] Optional: Add Russian proverbs
- [ ] Optional: Custom domain

---

*Last updated: January 2026*
