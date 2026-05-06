# CageIQ

UFC fight intelligence app — live odds, fighter stats, edge analysis.

## Quick Start

### 1. Set up environment variables

Copy `.env.local.example` to `.env.local` and fill in your Supabase credentials:

```bash
cp .env.local.example .env.local
```

### 2. Install + run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import your repo
3. In the deploy settings, add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL` — your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` — your Supabase publishable key
4. Click **Deploy**

That's it. Vercel auto-deploys on every push to main.

## Project Structure

```
cageiq-app/
├── app/
│   ├── layout.js       — root layout + metadata
│   ├── page.js         — main page (CageIQ UI)
│   └── globals.css     — all styles
├── lib/
│   ├── supabase.js     — supabase client
│   └── polymarket.js   — polymarket API utilities
├── data/
│   └── fighters.js     — fighter database + events + news
└── public/             — static assets
```

## Adding Features

The app is built to be extended. Future modules:

- **Live Polymarket fetching** — replace static odds with `lib/polymarket.js` calls
- **Supabase database** — move `data/fighters.js` into a Supabase table for live updates
- **User auth** — let users save parlays across devices
- **Scrapers** — auto-update fighter records after every fight night
