import { EXPERIENCE } from "../lib/data";

export function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              <span className="num">05</span>Experience
            </div>
            <h2 className="section-title" style={{ marginTop: 12 }}>
              Seven years <em>of shipping.</em>
            </h2>
          </div>
          <div className="section-kicker">
            Roles across real estate, AI, fintech, edtech and agricultural research — almost all of
            them remote.
          </div>
        </div>

        <div className="exp-list">
          {EXPERIENCE.map((e) => (
            <div key={`${e.company}-${e.from}`} className="exp-row">
              <div className="exp-date">
                <span className={e.active ? "active" : ""}>{e.from}</span>
                <span className="sep"> — </span>
                <span className={e.active ? "active" : ""}>{e.to}</span>
              </div>
              <div className="exp-main">
                <h3>
                  {e.role}
                  {e.emph && <em>{e.emph}</em>}
                </h3>
                <div className="co">
                  {e.href ? (
                    <a href={e.href} target="_blank" rel="noopener noreferrer">
                      {e.company}
                    </a>
                  ) : (
                    e.company
                  )}
                </div>
                <ul>
                  {e.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
              <div className="exp-loc">{e.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
