# ckworks.xyz

Personal portfolio for **Chandra Kishor Jha** — Software Engineer at Trade Fabric, full-stack developer, and educator based in Delhi, India.

**Live:** [ckworks.xyz](https://ckworks.xyz)

---

## Stack

| Layer    | Technology                          |
|----------|-------------------------------------|
| Language | TypeScript (strict, ES2020)         |
| Bundler  | esbuild                             |
| Styling  | Tailwind CSS (CDN) + custom CSS     |
| Fonts    | Inter · JetBrains Mono · Newsreader |
| Deploy   | Vercel (builds on push)             |

No framework. Vanilla TypeScript compiles to a single `script.js` via esbuild.

---

## Project Structure

```
src/
├── data/              Typed content — edit here to update the site
│   ├── meta.ts        Personal info, social links, stats
│   ├── projects.ts    Projects list
│   ├── experience.ts  Work & teaching timeline (2018 → present)
│   ├── skills.ts      Skill groups
│   ├── principles.ts  Philosophy cards
│   └── teaching.ts    Teaching subjects
│
├── templates/         HTML generators — one render function per section
│   ├── nav.ts
│   ├── hero.ts
│   ├── about.ts
│   ├── experience.ts
│   ├── skills.ts
│   ├── projects.ts
│   ├── principles.ts
│   ├── teaching.ts
│   └── footer.ts
│
├── app.ts             Assembles all templates → injects into #app
├── main.ts            Entry: renderApp() → loader → init features
│
├── loader.ts          Intro loading screen
├── cursor.ts          Custom cursor with canvas trail
├── particles.ts       Interactive particle network
├── scroll.ts          Scroll progress, reveal animations, nav highlight
├── text.ts            Text scramble & typewriter effects
├── interactions.ts    Glitch, magnetic hover, 3D tilt, Konami code
├── counter.ts         Animated number counters
├── ripple.ts          Click ripple effect
└── types.ts           All TypeScript interfaces
```

`index.html` is a minimal shell — metadata, loader, cursor elements, and `<div id="app">`.  
All page sections are rendered by `src/app.ts` via typed template functions.

---

## Development

```bash
npm install
npm run watch      # rebuild on save
```

Open `index.html` directly in the browser — no dev server needed.

## Build

```bash
npm run build      # development build
npm run build:min  # minified (used by Vercel)
```

---

## Adding Content

| Task              | File                        |
|-------------------|-----------------------------|
| New project       | `src/data/projects.ts`      |
| New timeline item | `src/data/experience.ts`    |
| New skill         | `src/data/skills.ts`        |
| Edit personal info| `src/data/meta.ts`          |

All data files are fully typed — TypeScript will catch shape errors at build time.

---

## Contact

**Chandra Kishor Jha**  
[ckworkss@gmail.com](mailto:ckworkss@gmail.com) · [LinkedIn](https://www.linkedin.com/in/chandra-kishor-jha-276744184) · [GitHub](https://github.com/Originalckjha) · [X](https://x.com/originalckjha)

---

MIT License — see [LICENSE](LICENSE)
