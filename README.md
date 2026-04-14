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
- gh-pages deployment script (optional)
- GitHub Actions Pages deployment (no local machine required)

## Quick Start (Local)

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build for Production (Local)

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages (No Local Setup Needed)

This repository includes `.github/workflows/deploy.yml` that builds and deploys automatically on push to `main`/`master`.

### One-time GitHub setup

1. Push this code to your GitHub repository.
2. Go to **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push any commit to `main` (or run the workflow manually from **Actions** tab).

After workflow success, your site will be available at:

```text
https://<your-username>.github.io/<your-repo-name>/
```

## Optional: Deploy from your machine

If you still want manual deployment:

```bash
npm install
npm run deploy
```

## Base Path Notes

- During GitHub Actions deployments, Vite base path is auto-derived from `GITHUB_REPOSITORY`.
- For local/manual use, default base is `/DMS/` in `vite.config.js`.
- If your repo name is not `DMS` and you use `npm run deploy`, update the fallback base value in `vite.config.js`.

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml
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
