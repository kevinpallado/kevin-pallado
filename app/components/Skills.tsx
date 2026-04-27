import { SKILLS } from "../lib/data";

export function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              <span className="num">06</span>Technical Skills
            </div>
            <h2 className="section-title" style={{ marginTop: 12 }}>
              Tools I <em>reach for.</em>
            </h2>
          </div>
          <div className="section-kicker">
            Stacks I&apos;ve shipped with in production — not things I&apos;ve read about on a
            weekend.
          </div>
        </div>

        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <div key={s.title} className="skill-card">
              <div className="skill-head">
                <h3>{s.title}</h3>
                <span className="num">0{i + 1}</span>
              </div>
              <div className="skill-tags">
                {s.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
