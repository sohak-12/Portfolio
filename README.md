# Soha Muzammil — Z-Block Digital Twin Portfolio

A world-class, scroll-driven 3D portfolio experience built on a real HD video walkthrough of **COMSATS Z-Block, Abbottabad**. Scrolling through the page scrubs the video forward/backward, creating a cinematic drone-flight feel through the building.

---

## Live Experience

> Scroll down = fly into the building.
> Scroll up = fly back out.
> Click any project card = expand full details.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite |
| 3D Engine | React Three Fiber (R3F) |
| 3D Helpers | @react-three/drei |
| Styling | Tailwind CSS v4 |
| Animation | GSAP + Framer Motion |
| Video Engine | THREE.VideoTexture + Scroll Scrubbing |

---

## Spatial Timeline

| Phase | Video Time | Content |
|---|---|---|
| Entrance | 0:00 – 0:21 | Z-Block exterior, HUD overlay, Internship Logbook |
| Lobby | 0:21 – 0:43 | Soha Muzammil intro, skill icons |
| Classroom 01 | 1:14 – 1:20 | DSA Maze Game, CGPA Calculator |
| Classroom 02 | 1:39 – 1:49 | Tic Tac Toe, Joker Game |
| Classroom 03 | 2:10 – 2:26 | Preplyx, Sohafy, PrimeFlix, Soha's Atheneum, Sohanix Wealth |
| Exit | 2:57 – End | Contact links — LinkedIn, Medium, GitHub |

---

## Projects Featured

- **Preplyx** — AI-powered mock interview platform (Next.js, Vapi AI)
- **Sohafy** — Full-stack e-commerce (React, Node.js, MongoDB)
- **PrimeFlix** — Movie discovery app (TMDB API, Firebase)
- **Soha's Atheneum** — Library management system
- **Sohanix Wealth** — Financial tech dashboard (Gold theme)
- **DSA Maze Game** — Graph traversal maze (C++)
- **CGPA Calculator** — OOP semester tracker (C++)
- **Tic Tac Toe** — Minimax AI opponent (C)
- **Joker Game** — Card strategy game (C)
- **Internship Logbook** — Codematics 8-week journey

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

> Add your video at: `public/videos/zblock_tour.mp4`
> Recommended: compress to under 10MB at 720p for fast loading.

---

## Design System

| Token | Value |
|---|---|
| Background | `#000000` |
| Neon Purple | `#bc13fe` |
| Neon Cyan | `#00fff9` |
| Gold (Sohanix) | `#FFD700` |
| Font | Courier New (monospace) |

---

## Folder Structure

```
src/
├── components/
│   ├── ZBlockScene.jsx     # Main 3D scene + video background
│   ├── VideoScrubber.jsx   # Scroll → video.currentTime engine
│   ├── HUD.jsx             # Futuristic heads-up display overlay
│   ├── ProjectOverlay.jsx  # Expanded project modal
│   └── LoadingScreen.jsx   # Neon purple loading bar
├── data/
│   └── ProjectData.js      # All projects, rooms, timeline
├── App.jsx                 # Root — canvas + overlays
└── index.css               # Global styles + animations
public/
└── videos/
    └── zblock_tour.mp4     # HD building walkthrough video
```

---

Built with ❤️ by **Soha Muzammil** — COMSATS University Abbottabad
