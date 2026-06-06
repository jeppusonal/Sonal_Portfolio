# Sonal Rao — Portfolio

A modern, recruiter-optimised personal portfolio for data science and analytics roles in Australia.

## Stack

- **Next.js 14** (App Router)
- **React 18** + **TypeScript**
- **Tailwind CSS** — custom design tokens, dark mode
- **Framer Motion** — scroll animations, micro-interactions
- **Lucide React** — icons
- **Vercel** — deployment (Sydney region)

## Quick Start

```bash
# 1. Install
npm install

# 2. Dev server
npm run dev
# Open http://localhost:3000

# 3. Build
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Design tokens, CSS variables, fonts
│   ├── layout.tsx           # Root layout + SEO metadata
│   └── page.tsx             # Page — assembles all sections
│
├── components/
│   ├── layout/
│   │   ├── Nav.tsx          # Sticky nav with theme toggle
│   │   └── Footer.tsx       # Footer with social links
│   │
│   ├── sections/
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About + role targeting
│   │   ├── Experience.tsx   # Timeline
│   │   ├── Projects.tsx     # Filterable project grid
│   │   ├── Skills.tsx       # Skill groups
│   │   ├── Education.tsx    # Education + certifications
│   │   └── Contact.tsx      # Contact cards
│   │
│   └── ui/
│       └── ProjectCard.tsx  # Reusable project card
│
├── hooks/
│   └── useTheme.ts          # Dark/light mode hook
│
└── lib/
    ├── data.ts              # All content data (projects, skills, experience)
    └── utils.ts             # cn() helper + color maps
```

## Customisation Guide

### Update personal info
Edit `src/lib/data.ts`:
- `PROJECTS` — update GitHub URLs, add real demo links, adjust metrics
- `SKILL_GROUPS` — add/remove skills
- `EXPERIENCES` — add more roles
- `STATS` — update your numbers

### Update contact info
- `src/components/sections/Contact.tsx` — email, LinkedIn, GitHub URLs
- `src/components/layout/Footer.tsx` — same links
- `src/components/layout/Nav.tsx` — resume download link

### Add resume
Place your resume PDF at `public/Sonal_Rao_Resume.pdf`

### Update metadata
`src/app/layout.tsx` — title, description, OG tags

## Deploying to Vercel

### Option A: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Option B: GitHub + Vercel Dashboard

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Framework: Next.js (auto-detected)
4. Deploy → get your URL (e.g. `sonalrao.vercel.app`)

### Custom Domain

In Vercel dashboard → Settings → Domains → Add `sonalrao.com.au` or `sonalrao.dev`

## SEO Strategy

The portfolio targets these keywords in metadata and hidden text:
- `Data Analyst Sydney`
- `Data Scientist Sydney`
- `BI Analyst Australia`
- `Python SQL Tableau Power BI`
- `dbt Airflow GCP`
- `UTS Data Science`

Hidden ATS/SEO text block in `Skills.tsx` includes target employers: CBA, Westpac, Canva, REA Group, WiseTech, NSW Government.

## Future Enhancements

1. **Blog** — Write about your projects (Next.js MDX). Boosts SEO enormously.
2. **Project detail pages** — `/projects/vehicleiq` with architecture diagram, full case study
3. **Analytics** — Add Vercel Analytics or Plausible to see which employers visit
4. **Dark mode persistence** — Already implemented via localStorage
5. **Contact form** — Add Formspree or Resend for email submission
6. **GitHub activity** — Fetch real commit data from GitHub API
7. **Certifications** — Add real certs with Credly badges
8. **AI chat widget** — Powered by Claude API to answer recruiter questions about you

## Design Tokens

Edit `src/app/globals.css` to change:
- `--accent` — primary brand color (currently forest green #1a4a3a)
- `--gold` — accent highlight (currently #c9922a)
- Fonts imported from Google Fonts: DM Serif Display + DM Sans + JetBrains Mono

## Performance

- Static generation (SSG) for instant load
- Google Fonts with `display=swap`
- Framer Motion animations deferred until in-viewport
- No heavy dependencies — bundle stays lean
- Vercel Sydney region (`syd1`) for AU latency
