# Shubham Rakesh Singh Portfolio

A premium, responsive portfolio built with **Vite + React + Tailwind CSS + Framer Motion**.

## Features

- Modern Stripe/Apple-inspired visual style with subtle glassmorphism
- Light/Dark mode toggle with persisted preference
- Animated hero section with typing effect
- Responsive layout for mobile and desktop
- Project filtering by domain (Fintech / Healthcare / Crypto)
- Expandable project cards with architecture highlights
- Animated experience timeline and skills progress cards
- SEO-ready meta tags in `index.html`
- Smooth scrolling and sticky navigation
- Resume download button
- Blog placeholder section

## Tech Stack

- React 18 + Vite 5
- Tailwind CSS 3
- Framer Motion
- Lucide React icons
- gh-pages deployment

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This project is configured with `base: '/DMS/'` in `vite.config.js`.

> If your repository name is different, update the `base` value accordingly.

### Steps

1. Push this project to a GitHub repo (example repo: `DMS`).
2. Install dependencies:

```bash
npm install
```

3. Deploy:

```bash
npm run deploy
```

4. In GitHub, go to **Settings → Pages** and ensure deployment source is `gh-pages` branch.

## Project Structure

```text
.
├── public/
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Architecture.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── projects.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Contact

- Email: `rajput.shubh2510@gmail.com`
- LinkedIn: <https://www.linkedin.com/in/shubham-singh-980114148/>
