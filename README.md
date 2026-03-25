# 🛴 Scoot — Multi-Page Website

A pixel-perfect, fully responsive multi-page website for **Scoot**, a fictional electric scooter sharing startup. Built as a [Frontend Mentor](https://www.frontendmentor.io/) challenge using semantic HTML5, modular CSS3, and vanilla JavaScript.

---

## 📌 Overview

Scoot is a clean, modern multi-page marketing website consisting of four pages:

| Page | File | Description |
|------|------|-------------|
| **Home** | `index.html` | Hero section, features, how-it-works steps, CTA |
| **About** | `about.html` | Company story, core values, FAQ accordion |
| **Careers** | `careers.html` | Mission section, "Why join us" values, open job listings |
| **Locations** | `location.html` | Interactive world map with city labels, city request CTA |

Each page shares a consistent header, footer, CTA section, and responsive navigation system.

---

## 🚀 Features

- ✅ **Fully Responsive** — Optimized layouts for mobile (< 700px), tablet (≥ 700px), and desktop (≥ 1000px)
- ✅ **Mobile Navigation** — Hamburger menu with slide-in panel, dark overlay, and accessible close button
- ✅ **Modular CSS Architecture** — Organized into layered, page-specific CSS files
- ✅ **Reusable Components** — Shared header, footer, CTA, hero, and button components
- ✅ **CSS Custom Properties** — Centralized design tokens for colors, typography, and spacing
- ✅ **Accessible** — Semantic HTML, `aria-expanded` states, `inert` attribute for focus management
- ✅ **Self-Hosted Fonts** — No external font CDN dependencies (woff2 format)
- ✅ **Interactive Elements** — FAQ accordion (About), job listings (Careers), map labels (Locations)

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| **HTML5** | Semantic markup with `<picture>`, `<details>`, `<nav>` |
| **CSS3** | Custom properties, `@layer`, nested selectors, container queries |
| **JavaScript** | Vanilla JS for mobile menu toggle, overlay, scroll lock |

No frameworks, no build tools, no dependencies — just clean, standards-based code.

---

## 📁 Project Structure

```
FEM_SCOOT_STARTUP/
│
├── index.html              # Home page
├── about.html              # About page
├── careers.html            # Careers page
├── location.html           # Locations page
├── script.js               # Navigation logic (shared)
│
├── css/
│   ├── style.css           # Entry point — imports all modules
│   ├── base.css            # Fonts, CSS variables, reset, global styles
│   ├── layout.css          # Wrapper grid system (.wrapper, .fb-col, .fullbleed)
│   ├── components.css      # Shared UI: button, header, topnav, CTA, footer, hero
│   ├── home.css            # Home page-specific styles
│   ├── about.css           # About page-specific styles
│   ├── careers.css         # Careers page-specific styles
│   └── location.css        # Locations page-specific styles
│
└── assets/
    ├── fonts/              # Self-hosted woff2 fonts (Space Mono, Lexend Deca)
    ├── icons/              # UI icons (hamburger, close, chevron, social, app stores)
    ├── images/             # Hero backgrounds, feature photos, world maps
    ├── patterns/           # Decorative SVGs (circles, arrows, semi-circles)
    ├── logo.svg            # Dark logo
    └── logo-white.svg      # White logo (footer)
```

---

## 🎨 Styling Architecture

### CSS Layers

The project uses CSS `@layer` to enforce a predictable cascade order. Each file contains one or more named layers:

```
fonts → colors → global → layout → button → header → topnav → cta → footer → hero-subpage
→ home-hero → home-features → home-steps
→ about-features → about-values → about-faq
→ careers-features → careers-values → careers-jobs
→ locations-map → locations-city
```

### Design Tokens (CSS Custom Properties)

All design values are centralized in `base.css`:

```css
/* Typography */
--ff-mono: "Space Mono", monospace;
--fs-56 / --fs-48 / --fs-40 / --fs-32 / --fs-24 / --fs-20 / --fs-15

/* Colors */
--c-yellow: hsl(40, 97%, 58%);
--c-xdark-navy: hsl(215, 14%, 23%);
--c-dark-navy: hsl(216, 17%, 35%);
--c-dim-grey: hsl(217, 12%, 62%);
--c-snow: hsl(214, 37%, 96%);
--c-light-yellow: hsl(39, 100%, 94%);
```

### Entry Point

`css/style.css` imports all modules in order:

```css
@import url('./base.css');
@import url('./layout.css');
@import url('./components.css');
@import url('./home.css');
@import url('./about.css');
@import url('./location.css');
@import url('./careers.css');
```

---

## 📱 Responsive Design

Three breakpoints control the entire layout:

| Breakpoint | Target | Behavior |
|------------|--------|----------|
| `< 700px` | Mobile | Single column, centered text, hamburger menu, stacked sections |
| `≥ 700px` | Tablet | 6-column grid, side-by-side content, horizontal nav |
| `≥ 1000px` | Desktop | 12-column grid, max-width `1110px`, full desktop layout |

### Grid System

The `.wrapper` class provides the responsive constraint:

```css
/* Mobile:  1fr [content 100%-64px] 1fr */
/* Tablet:  1fr [content min(100%-80px, 1110px)] 1fr */
```

The `.fb-col` variant subdivides into 3 / 6 / 12 equal columns for feature layouts.  
The `.fullbleed` utility allows children to span the full viewport width.

---

## 🧭 Navigation System

### Desktop (≥ 700px)
- Horizontal nav links + "Get Scootin" button displayed inline

### Mobile (< 700px)
- **Hamburger icon** (`#btnOpen`) opens the menu
- **Close icon** (`#btnClose`) appears as a fixed yellow ✕ at top-left
- **Menu panel** slides in from the left, covering ~70% of the screen
- **Dark overlay** (`::before` pseudo-element) covers content below the header
- **Background scroll** is locked via `overflow: hidden` on `<body>`
- **Click overlay** or **click nav link** both close the menu

### Accessibility
- `aria-expanded` on the open button tracks menu state
- `inert` attribute prevents focus from reaching content behind the open menu
- CSS `:has()` selector drives visual state changes based on `aria-expanded`

---

## ⚙️ How to Run

No build step required. Simply open in a browser:

```bash
# Option 1: Open directly
open index.html

# Option 2: Use a local server (recommended for correct asset paths)
npx serve .
```

> **Note:** A local server is recommended because the project uses root-relative paths (`/assets/...`) for images and fonts.

---

## 📸 Pages Preview

| Mobile | Tablet | Desktop |
|--------|--------|---------|
| Home | Home | Home |
| About | About | About |
| Careers | Careers | Careers |
| Locations | Locations | Locations |

---

## 📈 Future Improvements

- [ ] Add smooth scroll-based animations (Intersection Observer)
- [ ] Implement skip-to-content link for keyboard accessibility
- [ ] Add page transition animations between routes
- [ ] Optimize images with modern formats (WebP/AVIF)
- [ ] Add dark mode toggle
- [ ] Implement form validation for CTA inputs
- [ ] Add automated visual regression testing

---

## 👨‍💻 Author

Designed and built with ❤️ using a custom Figma design.

- **Design (Figma):** https://www.figma.com/design/kGclO8rWVXmJttP8GBp0Yt/scoot-multi-page-website--Copy---Copy---Community-?node-id=0-2
- **GitHub:** [@mustafakh33](https://github.com/mustafakh33)
- **LinkedIn:** [Mustafa Khaled](https://www.linkedin.com/in/mustafa-khaled33/)

---

## 📄 License

This project is for educational purposes. Design assets are © Frontend Mentor.
