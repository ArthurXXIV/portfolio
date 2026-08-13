# Atharva Nilawar — Portfolio

Personal portfolio site. Built with [Astro](https://astro.build), which compiles
to plain HTML and CSS with a small amount of vanilla JavaScript. No UI framework,
no runtime dependencies, nothing loaded from a CDN.

## Running it

```bash
npm install      # first time only
npm run dev      # dev server at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # serve the built site locally
npx astro check  # type-check every .astro and .ts file
```

Node is managed by [fnm](https://github.com/Schniz/fnm) and pinned to the version
in `.node-version`, so `cd` into this folder and the right Node is selected
automatically.

## Where things live

```
src/
├── data/
│   └── content.ts          ← ALL text lives here. Start here to edit copy.
│
├── pages/
│   └── index.astro         ← the page. Only decides what appears, in what order.
│
├── layouts/
│   └── Layout.astro        ← <html>, <head>, meta tags, global includes
│
├── styles/
│   └── global.css          ← theme tokens + styles shared by 2+ components
│
└── components/
    ├── sections/           ← one file per page section
    │   ├── Hero.astro
    │   ├── About.astro
    │   ├── Experience.astro
    │   ├── Projects.astro
    │   ├── Education.astro
    │   ├── Skills.astro
    │   └── Contact.astro
    │
    ├── modals/             ← the pop-out dialogs
    │   ├── ExperienceModal.astro
    │   └── EducationModal.astro
    │
    ├── Nav.astro           ← sticky top bar, scroll-spy, Resume reveal
    ├── Footer.astro        ← copyright line
    ├── MarketBackground.astro  ← animated canvas chart behind everything
    ├── Timeline.astro      ← tilted two-column coursework timeline
    ├── Sparkline.astro     ← the mini price chart on project cards
    ├── Logo.astro          ← square logo tile with monogram fallback
    ├── Icon.astro          ← inline SVG glyphs (GitHub, LinkedIn, Kaggle, …)
    ├── Droid.astro         ← the "Featured" droid badge
    ├── Reveal.astro        ← fades elements in as they scroll into view
    └── ModalController.astro   ← opens/closes every dialog

public/
├── logos/                  ← company, school, and publication logos
└── Atharva_Nilawar_Resume.pdf
```

## How an Astro component is put together

Every `.astro` file has up to three parts, in this order:

```astro
---
// 1. FRONTMATTER — JavaScript that runs at BUILD time, never in the browser.
import { experience } from '../../data/content';
---

<!-- 2. MARKUP — HTML, with {curly braces} for values and loops. -->
<section>{experience.map((job) => <p>{job.company}</p>)}</section>

<style>
  /* 3. STYLES — automatically scoped to THIS component only. */
  section { color: red; }
</style>
```

Two things worth knowing:

- **Styles are scoped by default.** A `.card` class inside `Projects.astro`
  cannot affect a `.card` anywhere else, because Astro rewrites it to
  `.card[data-astro-cid-…]`. That is why anything shared by two or more
  components lives in `global.css` instead.
- **Frontmatter runs at build time.** By the time a visitor loads the page, that
  code has already run and produced static HTML. Only code inside a `<script>`
  tag runs in the browser.

## Common edits

| I want to… | Edit this |
|---|---|
| Change any wording | `src/data/content.ts` |
| Add a job, project, or course | the matching array in `content.ts` |
| Reorder the page sections | `src/pages/index.astro` (and `sections` in `content.ts` for the nav) |
| Change colours or spacing | the `:root` tokens at the top of `global.css` |
| Restyle one section only | that section's own file in `components/sections/` |
| Add a logo | drop the file in `public/logos/`, then set `logo:` in `content.ts` |

## Logo notes

`Logo.astro` takes three props that control how a mark is presented:

- `plate` — puts a light tile behind dark logos so they stay visible on the dark
  theme. Needed for USC and NMIMS.
- `wide` — widens the tile for horizontal wordmarks such as IGI Global, which
  would otherwise shrink to an unreadable strip inside a square.
- no props — the logo sits directly on the card, which suits marks that already
  carry their own coloured background (Marsh, Mahindra, Flowres).

If no `logo` is set, the component falls back to a gradient monogram, so nothing
ever looks broken while assets are missing.

## Accessibility and motion

- Every animation is disabled under `prefers-reduced-motion`.
- Modals use the native `<dialog>` element, so focus trapping, `Esc` to close,
  and background inertness are handled by the browser.
- Cards that open dialogs are keyboard-operable with `Enter` and `Space`.
- The animated background is `aria-hidden` and pauses when the tab is hidden.
