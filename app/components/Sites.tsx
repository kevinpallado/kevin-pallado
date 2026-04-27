import Image from "next/image";
import { SITES } from "../lib/data";
import { ArrowUpRightIcon } from "../lib/icons";

export function Sites() {
  return (
    <section id="sites">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              <span className="num">03</span>Recent Client Systems
            </div>
            <h2 className="section-title" style={{ marginTop: 12 }}>
              Public sites with the <em>dashboards behind them.</em>
            </h2>
          </div>
          <div className="section-kicker">
            Each one is a marketing page plus a private admin app — custom workflows, role-based
            access, and Google Calendar sync for bookings and events.
          </div>
        </div>

        <div className="sites-grid">
          {SITES.map((s) => (
            <a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="site-card"
              aria-label={`Visit ${s.name} at ${s.url}`}
            >
              <div className="site-thumb">
                <Image
                  src={s.image}
                  alt={`${s.name} — landing page screenshot`}
                  width={s.imageWidth}
                  height={s.imageHeight}
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <div className="site-body">
                <div className="site-head">
                  <h3 className="site-name">{s.name}</h3>
                  <span className="site-url">
                    {s.url} <ArrowUpRightIcon />
                  </span>
                </div>
                <p className="site-desc">{s.desc}</p>
                <div className="site-tags">
                  {s.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
