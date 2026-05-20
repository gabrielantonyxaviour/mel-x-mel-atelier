# Build Plan

## Goal

Build a submission package for **Mel x Mel Atelier: Three Disagreeing Mels Build One Campaign** that makes Melius-native creative judgment visible: three Mel personas generate conflicting campaign directions, an editor Mel critiques and merges the winner, and Gabriel adds one explicit taste edit.

## Stack

- Melius web app: canonical creative artifact, canvas screenshot, share link, and exported/generated media.
- Static demo/case-study site: local Vite + TypeScript app in this execution workspace, used for README-quality narrative, demo walkthrough, and fallback public repo proof.
- GitHub: public repository owned by Gabriel after account confirmation.
- Contra: official submission portal at `https://contra.com/community/topic/meliuschallenge`.

## App Scope

The repo/demo app is not a replacement for Melius. It is a polished submission wrapper containing:

- Campaign thesis and selected subject.
- Three persona cards: Commercial Mel, Art Mel, Contra Creator Mel.
- Editor Mel scorecard and rejection/merge note.
- Gabriel taste-edit note.
- Final campaign kit placeholders/links: hero still, motion spot, social creative, canvas screenshot, walkthrough.
- Judging criteria mapping and Melius feedback.

## Chosen Creative Subject

Primary subject: **Post-FTX Bahamas tourism reboot**.

Reason: it is recognizable, commercially specific, strange enough to make persona disagreement sharp, and less human-stakes-heavy than Boeing Starliner. If Melius outputs or copy become too crypto-coded, fallback subject is **Crystal Pepsi comeback campaign**.

## Demo Path

1. Open on the final campaign kit and the editor Mel quote.
2. Show the messy brief and three persona branches.
3. Show one rejected branch with the reason.
4. Show editor Mel merging the winner.
5. Show Gabriel's human taste edit.
6. End with final assets, public Melius canvas link, repo link, and Contra submission copy.

## Timeboxed Milestones

| Timebox | Work | Done when |
|---|---|---|
| 0:00-0:20 | Required docs and browser preflight | `TEAM.md`, `BUILD_PLAN.md`, `REPO_PLAN.md`, `SUBMISSION_PORTAL_PLAN.md`, `EXECUTION_PACKET.md`, `PROGRESS.md` exist; Contra/GitHub sessions opened. |
| 0:20-1:00 | Demo wrapper scaffold | Vite app builds locally and renders the core story. |
| 1:00-1:45 | Melius access and canvas spike | Melius login/canvas/share/export capability recorded, or blocker logged. Current blocker: email-code submit remains stuck on `Sending code...`; Gmail only exposed an older expired code. |
| 1:45-2:45 | Asset/copy packet | Persona prompts, editor critique, social copy, README, walkthrough script ready. |
| 2:45-3:30 | Repo and deploy path | Public GitHub repo exists or blocker is documented; code pushed if credentials allow. |
| 3:30-4:15 | Submission portal prep | Contra required fields identified and reversible prefill attempted if safe. |
| 4:15-5:00 | Verification and report | Build/test results recorded; final builder report written. |

## Kill/Fallback Rules

- If Melius account access is blocked by password, passkey, CAPTCHA, or missing profile setup, continue with repo/demo wrapper and mark the Melius canvas as the blocker.
- If three persona voices are too similar, collapse to two-agent generator-vs-critic framing but keep the visible rejection/merge story.
- If final media cannot be produced inside Melius quickly, prioritize a readable canvas screenshot, strong copy, and walkthrough script over weak extra assets.
