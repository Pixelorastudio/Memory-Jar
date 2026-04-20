# Memory Jar — PWA

A cozy offline memory app. Installable on any phone or desktop.

## Files
```
index.html   ← the app
manifest.json ← PWA identity (name, icon, colors)
sw.js         ← service worker (offline caching)
icon-192.png  ← app icon (home screen, small)
icon-512.png  ← app icon (splash screen, large)
vercel.json   ← Vercel routing + headers config
```

## Deploy to Vercel

### Option A — Drag & drop (easiest, no account needed for basics)
1. Go to https://vercel.com/new
2. Click "Deploy without Git"
3. Drag the entire folder into the upload area
4. Click Deploy — done ✅

### Option B — GitHub (recommended, auto-deploys on every update)
1. Push this folder to a GitHub repo
2. Go to https://vercel.com/new
3. Import your GitHub repo
4. Leave all settings as default, click Deploy ✅

## How friends install it (after deploy)

### On iPhone (Safari only):
1. Open the Vercel URL in Safari
2. Tap the Share button (box with arrow)
3. Tap "Add to Home Screen"
4. Tap Add — done ✅

### On Android (Chrome):
1. Open the Vercel URL in Chrome
2. Chrome will show an "Install app" banner automatically
3. Or tap the three-dot menu → "Add to Home Screen"
4. Done ✅

### On Desktop (Chrome / Edge):
1. Open the Vercel URL
2. Click the install icon in the address bar (right side)
3. Click Install ✅

## After install
- Opens fullscreen, no browser bar — feels like a native app
- Works fully offline after first visit
- Each person's memories are private (stored on their own device)
