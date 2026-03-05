# Bad Conflict — Combat Robotics Website

Official website for **Bad Conflict**, a 501(c)(3) non-profit combat robotics team focused on making the sport accessible to college and high school students. The site showcases the team's robots, members, media, and sponsorship opportunities.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.1.6 | React framework & routing |
| [React](https://react.dev/) | 19.2.3 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | ^5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | ^4 | Utility-first styling |
| [Geist Font](https://vercel.com/font) | — | Typography (via `next/font`) |

---

## Pages

| Route | Description |
|---|---|
| `/` | Hero, about section, featured videos, team philosophy |
| `/robots` | Full robot roster split into current & first-generation bots |
| `/members` | Team member profiles with roles, bios, and robots they run |
| `/sponsorship` | Mission statement, sponsorship tiers, and contact form |
| `/media` | Photo and video gallery |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Other Commands

```bash
npm run build   # Build for production
npm run start   # Start the production server
npm run lint    # Run ESLint
```

---

## System

The site uses a dark theme with a steel-blue accent color.

| Token | Value |
|---|---|
| `--background` | `#091a28` |
| `--foreground` | `#fbfbfb` |
| `--accent` | `#25659c` |

The `.premium-card` utility class provides glassmorphism-style cards with hover lift animations used throughout the site.

---

## Media

Robot and team photos are stored in `public/images/`. Videos are served in **WebM** format (with MP4 fallback) for optimal browser performance.
