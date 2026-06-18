# YayCommerce — Website Redesign

A fresh, modern marketing website for **YayCommerce**, the all-in-one commerce
platform that helps brands *sell more and stress less*.

![Built with HTML, CSS & vanilla JS](https://img.shields.io/badge/stack-HTML%20%C2%B7%20CSS%20%C2%B7%20JS-6c4df6)

## ✨ Highlights

- **Zero build step** — pure HTML, CSS, and vanilla JavaScript. Open and go.
- **Fully responsive** — fluid layouts from 320px phones to wide desktops.
- **Cohesive design system** — tokens for color, type, spacing, and shadows in
  `assets/css/styles.css`.
- **Polished interactions** — scroll-reveal, animated counters, a sticky
  header, an animated logo marquee, a monthly/yearly pricing toggle, an
  accessible FAQ accordion, and a mobile menu.
- **Accessible & fast** — semantic markup, ARIA states, `prefers-reduced-motion`
  support, and system/Google fonts with no heavy frameworks.

## 🎨 Design language

| Token        | Value     | Use                         |
|--------------|-----------|-----------------------------|
| Violet 500   | `#6c4df6` | Primary brand / CTAs        |
| Mint 400     | `#22d3a6` | Success / accents           |
| Coral 400    | `#ff7a59` | Secondary accent            |
| Amber 400    | `#ffc24b` | Highlights / ratings        |
| Ink 900      | `#0c0a1d` | Text / dark surfaces        |

Typography is **Plus Jakarta Sans** with a tight, confident display scale.

## 📁 Structure

```
.
├── index.html              # Landing page (hero, features, pricing, FAQ, CTA…)
├── assets/
│   ├── css/styles.css      # Design system + components
│   ├── js/main.js          # Interactions (reveal, counters, toggles, nav)
│   └── img/favicon.svg     # Brand mark
└── README.md
```

## 🚀 Run it locally

It's static — just open `index.html`, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 🧭 Sections

Hero · Trusted-by marquee · Features grid · Conversion & automation splits ·
Animated stats · How it works · Pricing (monthly/yearly) · Testimonials ·
FAQ · Newsletter CTA · Footer.

---

Designed and built as a complete redesign concept for YayCommerce.
