# Portal Vite

Vite + React + TypeScript + Tailwind CSS project, pinned to Vite `7.3.1`.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

### Option 1: Vercel dashboard (recommended)
1. Push this folder to GitHub/GitLab/Bitbucket.
2. In Vercel, click **Add New Project** and import the repo.
3. Framework preset should auto-detect as `Vite`.
4. Keep defaults:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**.

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

`vercel.json` is included for SPA rewrites and Vite output configuration.
