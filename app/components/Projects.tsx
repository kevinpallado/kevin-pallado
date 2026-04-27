import { PROJECTS } from "../lib/data";

export function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              <span className="num">04</span>Selected Projects
            </div>
            <h2 className="section-title" style={{ marginTop: 12 }}>
              Other work <em>worth mentioning.</em>
            </h2>
          </div>
          <div className="section-kicker">
            Smaller slices of the last seven years — billing, RAG evaluation, legacy platforms,
            embedded work.
          </div>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <article key={p.name} className="project-card">
              <div className="project-top">
                <div className="project-mark" aria-hidden="true">
                  {p.mark}
                </div>
                <div className="project-year">{p.year}</div>
              </div>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-foot">
                {p.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
