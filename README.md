# YayCommerce — Website (redesign)

A modern marketing site for **YayCommerce**, the studio behind a full toolkit of
**WooCommerce plugins**. Rebuilt from scratch based on YayCommerce's real product
lineup and brand positioning.

> *"One brand, a full toolkit — the WooCommerce plugins your store's been missing."*

🔗 **Live:** https://tommyclaude.github.io/Yay/

## About YayCommerce (the real company)

Founded in **2017** in **Nha Trang, Vietnam**, YayCommerce builds premium
WooCommerce / WordPress plugins trusted by **100,000+ websites**. The suite:

| Plugin | What it does |
|--------|--------------|
| **YayMail** | Drag-and-drop WooCommerce email customizer (flagship) |
| **YayCurrency** | Multi-currency switcher with auto country detection |
| **YayPricing** | Dynamic pricing & discount rules |
| **YaySwatches** | Color / image / button variation swatches |
| **YayExtra** | Extra product options (engraving, gifts, add-ons) |
| **YaySMTP** | SMTP delivery & email logs (SES, SendGrid, Mailgun…) |
| **YayReviews** | Advanced customer reviews |
| **YayBoost** | Sales booster / conversion tools |

## Design

- **Brand:** teal / emerald palette suited to the WooCommerce ecosystem, with a
  distinct accent colour per plugin.
- **Type:** Plus Jakarta Sans.
- **Zero build step** — pure HTML, CSS and vanilla JS.
- **Sections:** hero with a live YayMail email-builder mockup · trust strip ·
  8-plugin showcase grid · YayMail spotlight · animated stats · why-us ·
  get-started steps · pricing (Free / Single Pro / Bundle, monthly–annual
  toggle) · reviews · FAQ · CTA · footer.
- **Interactions:** scroll reveal, animated counters, sticky header, pricing
  toggle, accessible FAQ accordion, mobile nav.
- **Accessible:** semantic markup, ARIA states, `prefers-reduced-motion`.

## Structure

```
index.html
assets/css/styles.css   · design system + components
assets/js/main.js        · interactions
assets/img/favicon.svg   · brand mark
.github/workflows/deploy-pages.yml · auto-deploy to GitHub Pages
```

## Run locally

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Deploy

Every push to the default branch auto-deploys to GitHub Pages via the included
GitHub Actions workflow.

---

Independent redesign concept built from YayCommerce's public product information.
Not affiliated with YayCommerce, Automattic or WooCommerce.
