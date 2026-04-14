# PulsePlay OTT (Testing Build)

This is a redesigned OTT testing platform built with Next.js App Router.

## Features

- New OTT home experience with hero + content rails
- Browse page with filters (`kind`, `premium`)
- Watch page with working video playback
- Sign-in screen for test flow
- Backend adapter support with local seeded fallback
- API endpoints:
  - `GET /api/content/home`
  - `GET /api/content/:id`

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Connect Current OTT Backend

Create `.env.local` in project root:

```bash
OTT_BACKEND_URL=https://your-backend-domain/api
OTT_BACKEND_TOKEN=your-access-token
```

If env vars are missing or backend fails, the app uses local test content from `src/lib/ott-data.ts`.
