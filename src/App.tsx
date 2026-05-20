import { criteria, milestones, personas } from "./data";
import posterUrl from "./assets/campaign-poster.svg";

export function App() {
  return (
    <main className="shell">
      <section className="briefing" aria-labelledby="page-title">
        <div className="briefing__copy">
          <p className="eyebrow">Melius Challenge execution packet</p>
          <h1 id="page-title">Mel x Mel Atelier</h1>
          <p className="lead">
            Three Mel personas fight over one impossible campaign brief. Editor
            Mel rejects the safe answer, merges the human one, and leaves the
            decision visible on the canvas.
          </p>
          <div className="briefing__actions" aria-label="Submission status">
            <a href="#packet">View packet</a>
            <a href="#canvas">Canvas plan</a>
          </div>
        </div>
        <figure className="poster" id="canvas">
          <img src={posterUrl} alt="Campaign poster for the final Bahamas tourism direction" />
          <figcaption>
            Working final line: The water remembered you before the market did.
          </figcaption>
        </figure>
      </section>

      <section className="quote-band" aria-label="Editor Mel decision">
        <p>Editor Mel rejected the apology brochure.</p>
        <blockquote>
          The scandal cannot be the product. Make the island feel already
          chosen, not forgiven.
        </blockquote>
      </section>

      <section className="atelier" aria-labelledby="atelier-title">
        <div className="section-heading">
          <p className="eyebrow">Three disagreeing Mels</p>
          <h2 id="atelier-title">The canvas is the argument.</h2>
        </div>
        <div className="persona-lanes">
          {personas.map((persona) => (
            <article className="lane" key={persona.name}>
              <div className="lane__rule" style={{ background: persona.color }} />
              <div>
                <p className="lane__score">{persona.score}</p>
                <h3>{persona.name}</h3>
                <p className="lane__role">{persona.role}</p>
              </div>
              <p className="lane__quote">"{persona.quote}"</p>
              <p className="lane__verdict">{persona.verdict}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow" aria-labelledby="workflow-title">
        <div className="section-heading">
          <p className="eyebrow">Demo path</p>
          <h2 id="workflow-title">From messy brief to final campaign kit.</h2>
        </div>
        <ol>
          {milestones.map((milestone, index) => (
            <li key={milestone}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {milestone}
            </li>
          ))}
        </ol>
      </section>

      <section className="packet" id="packet" aria-labelledby="packet-title">
        <div className="packet__main">
          <p className="eyebrow">Submission copy</p>
          <h2 id="packet-title">One brief, four jobs for Mel.</h2>
          <p>
            The brief: reboot Bahamas tourism after FTX without making the
            scandal the hero. Commercial Mel chased trust. Art Mel chased a
            non-stock visual language. Contra Creator Mel chased a public case
            study. Editor Mel chose restraint, rejected apology language, and
            merged the most dignified direction.
          </p>
          <p className="human-edit">
            Gabriel's taste edit: make it feel like travelers are already
            returning, not like the island is asking permission.
          </p>
        </div>
        <div className="criteria" aria-label="Judging criteria mapping">
          {criteria.map(([label, detail]) => (
            <div className="criterion" key={label}>
              <p>{label}</p>
              <span>{detail}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
