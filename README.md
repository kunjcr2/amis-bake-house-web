# Ami's Bake House 🤎

> **Home Made Happiness** · Est. 2026

Marketing website for **Ami's Bake House** — a home bakery serving fresh, small-batch
brownies, fudge and treats with local delivery & pickup. Built with **Vite + React** and
**Tailwind CSS**.

## ✨ Features

- Full-screen hero slideshow (Ken Burns zoom), responsive for phone & laptop
- About / story section
- Product menu with images, descriptions & prices
- "Why Us" highlights and a masonry photo gallery with lightbox
- Contact section for **Ami** & **Rakhi** with WhatsApp + call buttons
- Floating WhatsApp order button and scroll-in animations

## 🚀 Getting Started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## 🗂️ Project Structure

```
├─ index.html              # Tailwind CDN config + Google Fonts + brand theme
├─ public/assets/          # bakery photos (1–7) + Ami.png / Rakhi.png
└─ src/
   ├─ App.jsx
   ├─ data.js              # all editable content: products, prices, contacts
   ├─ hooks/useReveal.js   # scroll-in reveal animations
   └─ components/          # Navbar, Hero, About, Menu, Why, Gallery, Contact, Footer …
```

## ✏️ Customizing

- **Content & prices** — edit `src/data.js` (single source of truth).
- **Contact photos** — drop `Ami.png` and `Rakhi.png` into `public/assets/`
  (initials avatars are shown automatically until then).
- **Theme colors** — adjust the Tailwind config in `index.html`.

---

Made with 🤎 & a lot of chocolate.
