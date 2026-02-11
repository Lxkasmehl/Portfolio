# Portfolio

Minimal static portfolio. Next.js (App Router), TypeScript, Tailwind, Mantine. DE/EN toggle. Navigation with subpages.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (static export)

```bash
npm run build
```

Output in `out/`. Deploy anywhere as static files.

## Config

Edit `config.ts`:

- **GITHUB_USERNAME** - Your GitHub username for the contribution chart on `/stats`.
- **CODING_HOURS_CURRENT** - Current tracked coding hours (goal: 10,000). Update as you go.

## Images

- **Professional photo:** Copy the photo you like best to `public/portrait.jpg` (replace the file to switch). Shown in 3:4 portrait crop with focus on face; used on Home and CV header. If missing, a placeholder is shown.
- **Sports photos:** Optional. Add `public/sports/1.jpg`, `public/sports/2.jpg`, `public/sports/3.jpg` later; shown on `/sports`. Placeholder if missing.

## Page structure

- **Home** - Short intro, portrait, links to subpages.
- **CV** - Full CV (About, Experience, Education, Projects, Certifications, Skills, Languages). Portrait in header. Footer: LinkedIn, Instagram.
- **Projects** - RunSync, Heiligtumsfahrtquiz.
- **Sports** - Competitive sports intro (Track & Field, Cross Country), selected results, optional sports images.
- **Stats** - Coding hours progress (10k goal), GitHub contribution chart.

Content source: LinkedIn. No backend, no CMS.
