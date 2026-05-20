export type Persona = {
  name: string;
  role: string;
  verdict: string;
  quote: string;
  score: string;
  color: string;
};

export const personas: Persona[] = [
  {
    name: "Commercial Mel",
    role: "Trust and booking intent",
    verdict: "Useful, but too close to reputation repair.",
    quote:
      "If the headline explains the scandal before the beach, the campaign has already lost the traveler.",
    score: "74",
    color: "var(--blue)",
  },
  {
    name: "Art Mel",
    role: "Visual originality",
    verdict: "Winner for mood, merged with Contra clarity.",
    quote:
      "Make the water feel indifferent to the market. The island should not ask for forgiveness.",
    score: "91",
    color: "var(--green)",
  },
  {
    name: "Contra Creator Mel",
    role: "Portfolio shareability",
    verdict: "Best public story, weak as a final visual system alone.",
    quote:
      "The case study needs one line a judge can repeat without the canvas open.",
    score: "86",
    color: "var(--red)",
  },
];

export const milestones = [
  "Messy brief enters canvas",
  "Three Mel branches generate incompatible directions",
  "Editor Mel scores, rejects, and merges",
  "Gabriel taste edit changes the final frame",
  "Campaign kit ships with screenshot and walkthrough",
];

export const criteria = [
  ["Boundary Pushing", "Visible creative-decision graph, not a linear generator."],
  ["Creativity", "The disagreement is the artifact."],
  ["Agent Use", "Mel generates, critiques, rejects, and merges."],
  ["Execution", "Readable screenshot, sharp copy, final kit, walkthrough."],
];
