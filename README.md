<div align="center">
  <img src="https://img.shields.io/badge/InfiniteCS-Enterprise%20BPO-0891b2?style=for-the-badge&logo=globe&logoColor=white" alt="InfiniteCS">

  <h1>🌐 InfiniteCS Website</h1>
  <p><strong>Enterprise BPO landing page for Infinite Contact Solutions LLC</strong></p>
  <p>A modern, animation-rich marketing site with glassmorphism design, GSAP scroll effects, and a conversion-focused layout.</p>

  <br>

  ![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)
  ![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?logo=greensock&logoColor=white)
  ![CSS](https://img.shields.io/badge/CSS-Custom%20Properties-1572B6?logo=css3&logoColor=white)
  ![License](https://img.shields.io/badge/License-MIT-green)
</div>

---

## ✨ Features

### 🎨 Design System
- **Glassmorphism** — backdrop-blur cards with translucent borders
- **Responsive layout** — fluid grids from mobile to ultrawide
- **Custom design tokens** — centralized CSS variables for colors, radii, shadows
- **Inter + Playfair Display** typography pairing

### 🎬 Animations
- **Loading screen** — branded loader with progress bar
- **GSAP ScrollTrigger** — staggered reveals on scroll for all sections
- **Hero entrance** — sequenced fade-in with badge, heading, subtitle, buttons, and stats
- **Animated counters** — numbers count up when scrolled into view
- **SVG ring charts** — smooth stroke-dashoffset transitions
- **Marquee scroller** — infinite horizontal text loop
- **Blob background** — organic morphing shapes behind the hero

### 📊 Sections
| Section | Description |
|---|---|
| **Hero** | Centered headline, animated stats bar, dual CTA buttons |
| **Marquee** | Infinite text scroll with gradient typography |
| **About** | Layered glass cards with company info and value props |
| **Impact** | Metric cards with mini bar charts, ring chart, before/after comparison |
| **Services** | 3-card grid with hover blobs and icon scaling |
| **Strategy** | 4-step numbered process on dark background with glowing orbs |
| **Global Ops** | Live operation status with animated counters and location cards |
| **Contact** | Dual-column layout with form and company details |
| **Footer** | 3-column link grid with brand |

### ⚡ Performance
- **No frameworks** — pure HTML, CSS, JS (8 KB gzipped JS)
- **CDN-only dependencies** — GSAP, Lucide, Google Fonts
- **Vite build** — optimized production bundle

---

## 🚀 Quick Start

```bash
git clone https://github.com/hatimhtm/InfiniteCS-Website.git
cd InfiniteCS-Website
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Production Build
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
InfiniteCS-Website/
├── index.html                # Single-page entry point
├── package.json              # Dependencies & scripts
├── vite.config.js            # Build config
└── src/
    ├── main.js               # GSAP animations, loader, nav, counters
    └── styles/
        ├── variables.css     # Design tokens & resets
        ├── layout.css        # Grid, cards, buttons, typography
        ├── nav.css           # Glassmorphism navbar + mobile menu
        ├── hero.css          # Hero section, stats bar, marquee
        ├── sections.css      # About, Impact, Services, Strategy, Global, Footer
        ├── contact.css       # Contact form & details
        └── animations.css    # Loader, keyframes, GSAP targets
```

---

## 🔧 Customization

### Branding
Edit `src/styles/variables.css` to change the color palette, fonts, and spacing tokens.

### Content
All content is in `index.html` — modify text, add sections, or update contact details directly.

### Contact Form
Replace `yourformid` in the form's `action` attribute with your [Formspree](https://formspree.io) endpoint to enable submissions.

---

## 📄 License

MIT — free for personal and commercial use.

---

<div align="center">
  <p><sub>Infinite Contact Solutions LLC — Carrollton, Texas</sub></p>

  [![Portfolio](https://img.shields.io/badge/Portfolio-hatimelhassak.is--a.dev-0891b2?style=flat-square&logo=safari&logoColor=white)](https://hatimelhassak.is-a.dev)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Hatim%20El%20Hassak-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/hatimelhassak)
</div>
