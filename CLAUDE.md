# arman — landing

Static one-page landing for ARMAN (AI mentor "видит твою
жизнь как игру"). Built from a Claude Design handoff bundle.

## Stack

- Vite + React 19 + TypeScript
- Plain CSS (no Tailwind/UI lib) — design tokens in `src/index.css`
- Vercel (static)

Future: same project will host an AI chat app — that's why we
went with Vite + React up-front.

## Run

```bash
npm install
npm run dev
npm run build      # tsc --noEmit && vite build
```

Preview launch name: `arman` (port 5174). See workspace
`.claude/launch.json`.

## Structure

```
landings/arman/
├── index.html              # head, fonts, analytics TODOs
├── src/
│   ├── main.tsx
│   ├── App.tsx             # all 8 sections inline
│   ├── index.css           # tokens + section styles
│   └── lib/useReveal.ts    # IntersectionObserver + fallback
├── vite.config.ts
├── tsconfig.json
├── vercel.json             # SPA rewrite
└── package.json
```

## Form

Currently `console.log` + TODO. Wire to Telegram (same
pattern as `maksi-simple/api/submit.ts`) or another backend
when product direction is set.

## Deploy

- Auto: push to `master` on `itachi-studio/arman` → Vercel.
- Manual: `vercel --prod` from project root.

## Source design

Original handoff bundle: `arman.html` from claude.ai/design.
The CSS in `src/index.css` is a 1-to-1 port of the design's
`<style>`; the JSX in `App.tsx` mirrors the design's HTML
structure. When updating, treat the original as the design
spec — keep visual parity.
