# Submission Portal Plan

## Portal

Contra topic URL: `https://contra.com/community/topic/meliuschallenge`

Likely guidelines URL: `https://contra.com/community/topic/meliuschallenge/guidelines`

Account/profile: Gabriel via Chrome directory `Default`, Chrome profile `Gabriel`, email `gabrielantony56@gmail.com`.

Browser command:

```bash
agent-browser --session melius-gabriel-contra --profile "Default" --allowed-domains "contra.com,www.contra.com,github.com,mail.google.com,accounts.google.com,melius.com,docs.melius.com" open "https://contra.com/community/topic/meliuschallenge"
```

## Required Fields To Identify

- Project title.
- Project description.
- Melius canvas/project link.
- Canvas screenshot or project image.
- Process steps.
- Feedback on Melius experience.
- Video walkthrough link or upload.
- Public social post link on X or LinkedIn.
- GitHub/repo link if supported.

## Assets Still Missing

- Public Melius canvas link.
- Canvas screenshot.
- Final campaign hero still.
- Final motion/walkthrough video.
- Public GitHub repo URL.
- Public X/LinkedIn social post URL.

## Prefill Policy

- Reversible fields may be drafted only after the form surface is inspected.
- Do not click irreversible final submission without Gabriel's explicit instruction.
- If the portal has no draft mode, record required fields and keep submission copy in `EXECUTION_PACKET.md`.

## Current Prefill Status

Status: public challenge post accessible; login/submission path blocked in browser automation.

Evidence log:

- Confirmed: page title `#Melius Challenge on Contra`.
- Confirmed: URL `https://contra.com/community/topic/meliuschallenge`.
- Pending: login/profile visibility.
- Pending: field list.
- Observation: first `agent-browser snapshot -i` returned no interactive elements and full snapshot returned `(empty page)`, while title/URL resolved. Continue with URL-specific probes and keep submission copy in this packet until a form surface is found.
- Confirmed: public challenge/community post URL `https://contra.com/community/NZo1eq6f-join-the-dollar10-k-melius-challenge-nowexclusive` renders and exposes the challenge thread.
- Observed: page shows `Log In`, disabled `Sign Up`, disabled `Post a job`, and disabled `Sign up to join` controls.
- Blocker: clicking `Log In` navigates to `https://contra.com/log-in?redirectTo=%2Fcommunity%2FNZo1eq6f-join-the-dollar10-k-melius-challenge-nowexclusive`, but the page renders no accessible inputs/buttons/body text through `agent-browser`.
- No irreversible submission action was taken.
