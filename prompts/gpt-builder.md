Execute this hackathon idea.

Hackathon: Melius Challenge
Idea: Mel x Mel Atelier: Three Disagreeing Mels Build One Campaign
Execution workspace: /Users/gabrielantonyxaviour/Documents/hackathons/melius-challenge/execution/2026-05-20T00-40-48Z-mel-x-mel-atelier-three-disagreeing-mels-build-one-campaign
Report output: /Users/gabrielantonyxaviour/Documents/hackathons/melius-challenge/execution/2026-05-20T00-40-48Z-mel-x-mel-atelier-three-disagreeing-mels-build-one-campaign/outputs/builder-report.md

## Assigned Team

Primary submitter / repo owner unless Gabriel overrides: Gabriel

- Gabriel: chromeDir "Default", chromeProfile "Gabriel", email gabrielantony56@gmail.com
- Marsella: chromeDir "Profile 19", chromeProfile "Marsella", email testerbuster564@gmail.com
- Bonney: chromeDir "Profile 2", chromeProfile "Hackathon - Bonney", email 1inchunitedefi@gmail.com

Submission portal target:
- Contra topic: https://contra.com/community/topic/meliuschallenge

Recommended browser preflight:
agent-browser --session melius-gabriel-contra --profile "Default" --allowed-domains "contra.com,www.contra.com,github.com,mail.google.com,accounts.google.com,melius.com,docs.melius.com" open "https://contra.com/community/topic/meliuschallenge"


Required source files:
- /Users/gabrielantonyxaviour/Documents/agents/docs/hackathons/browser-execution-runbook.md
- /Users/gabrielantonyxaviour/Documents/hackathons/submission-profile-registry.json
- /Users/gabrielantonyxaviour/Documents/hackathons/melius-challenge/council/LATEST

Execution contract:
0. Execution/code-building authority is GPT-5.5 or Claude Opus 4.7 only. Do not use Kimi to build project code. If Kimi artifacts exist, treat them as planning notes that must be verified before implementation.
1. Read the browser execution runbook and profile registry before any GitHub, Contra, Devpost, Gmail, or submission-portal work.
2. Read the latest council run for this hackathon: TOP_10.json, EXECUTION_QUEUE.json, IDEAS.md, and the most relevant outputs/*.md files.
3. Write these files in the execution workspace:
   - TEAM.md: exact people, Chrome profile directories, emails, and ownership roles.
   - BUILD_PLAN.md: concrete build plan, stack, app scope, demo path, and timeboxed milestones.
   - REPO_PLAN.md: public repo name, owner, creation method, visibility proof, and push/deploy steps.
   - SUBMISSION_PORTAL_PLAN.md: portal URL, account/profile used, required fields, assets still missing, and current prefill status.
   - EXECUTION_PACKET.md: single source of truth for README, demo script, video script, judging criteria mapping, links, and final checklist.
4. Create or verify a proper public GitHub repo for the selected primary owner only after confirming the active GitHub account matches the assigned chromeDir/profile. Use agent-browser for persona-owned repo creation when the repo must belong to a specific persona. Do not create private repos for hackathon submissions unless the rules explicitly require it.
5. Start submission portal preparation in parallel with build work: open the relevant portal with agent-browser, confirm login/profile, identify required fields, and record evidence in SUBMISSION_PORTAL_PLAN.md. Prefill only reversible fields if the portal safely supports drafts. Stop before any irreversible final submission click unless Gabriel explicitly says to submit.
6. Begin reversible setup and implementation immediately after the plans are written. Reversible setup includes scaffolding the app/repo, writing README/demos/scripts, preparing seed data, and starting local implementation. Do not stop at a plan if build work can begin.
7. Keep a live progress log at PROGRESS.md with timestamped notes every phase, including blockers and exact files changed.
8. Write the final builder report to /Users/gabrielantonyxaviour/Documents/hackathons/melius-challenge/execution/2026-05-20T00-40-48Z-mel-x-mel-atelier-three-disagreeing-mels-build-one-campaign/outputs/builder-report.md. The report must include repo status, submission portal status, build status, blockers, and next actions.

Start now.