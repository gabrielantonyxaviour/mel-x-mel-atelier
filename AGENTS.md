# Agent Tools — 2026-05-20T00-40-48Z-mel-x-mel-atelier-three-disagreeing-mels-build-one-campaign

<!--
Load-bearing: Claude Code reads this at session start. Document every CLI,
script, or tool the agent can reach for here. When Claude learns a useful
shell pattern in this project, add it below. When Claude makes a mistake
that a better tool would have prevented, add that tool here.

Maintain with: /maintain-agents-md
-->

## Installed CLIs

- `npm` — package manager (node 20+)
- `gh` — GitHub CLI, authenticated as `gabrielantonyxaviour`
- `agent-browser` — Chrome DevTools automation (v0.27.0)

## Project scripts

From `package.json`:
- `npm run dev` — start Vite dev server on `127.0.0.1:5173`
- `npm run build` — typecheck (`tsc`) then Vite production build to `dist/`
- `npm run preview` — preview the production build

## Preferred shell patterns

- `npm run build` — runs both `tsc` and vite; single source of truth for build + typecheck
- `gh repo view gabrielantonyxaviour/mel-x-mel-atelier --json visibility` — confirm repo is public

## Things to avoid

- Do not use `agent-browser` to interact with `contra.com/log-in` — the page renders empty (no inputs exposed) through Chrome DevTools automation. Use manual login in the Gabriel Chrome profile instead.
- Do not attempt Melius canvas login through `agent-browser` without a fresh OTP code in Gmail; the `Sending code...` state hangs if no valid code arrives.
- Do not push from `DarthStormerXII` identity — this repo is owned by `gabrielantonyxaviour`. Use the `gh` CLI which is authenticated as `gabrielantonyxaviour`.
