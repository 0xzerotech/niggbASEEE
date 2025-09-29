Niggabase — static parody site

Overview
- Static HTML/CSS/JS site. No build steps. Works on GitHub Pages/Netlify/Vercel as-is.

Quick start
1) Create a new Git repo and push this folder.
2) Enable hosting:
   - GitHub Pages: Settings → Pages → Source: GitHub Actions or Deploy from `main`.
   - Netlify: Drag‑and‑drop the folder or connect the repo; publish directory is `/`.
   - Vercel: Import the repo; framework preset: “Other”, output directory `/`.
3) Visit `index.html` → it links into `niggabase.html`, `assets.html`, `one.html`, `credit-card.html`, `rewards.html`, `explore.html`, and `more.html`.

File layout
- index.html              Landing splash → Home link
- niggabase.html          Main app home (watchlist, trade panel)
- assets.html             Portfolio demo
- explore.html            Explore (coming soon overlay)
- one.html                Membership page (interactive demo)
- credit-card.html        Card promo
- rewards.html            $NIGGABASE rewards demo
- more.html               Settings and extras
- assets/                 Shared assets and JS fallbacks

Notes
- All external libraries are CDN‑loaded with basic fallbacks. Pages still render over `file://`, but for best results host via HTTP.
- No backend: all persistence uses `localStorage`.

License
- Parody/demonstration only. No financial functionality.


