"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRightIcon, LockIcon } from "../lib/icons";
import { CASE_STUDIES } from "../lib/case-studies";
import { PREVIEW_SHOTS, type CaseStudy } from "../lib/data";

export function CaseStudies() {
  return (
    <section id="work">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              <span className="num">02</span>Featured Systems
            </div>
            <h2 className="section-title" style={{ marginTop: 12 }}>
              Platforms I <em>designed, shipped</em> and still run.
            </h2>
          </div>
          <div className="section-kicker">
            Two systems running in production today — one for a Miami brokerage, one for a local
            gasoline station back home. Both mine end-to-end.
          </div>
        </div>

        <div className="case-list">
          {CASE_STUDIES.map((c) => (
            <CaseCard key={c.id} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({ c }: { c: CaseStudy }) {
  return (
    <article className="case">
      <header className="case-header">
        <div>
          <div className="case-meta-top">
            <span className="tag">{c.tag}</span>
            <span aria-hidden="true">·</span>
            <span className="live">
              <span className="dot" aria-hidden="true" />
              {c.status}
            </span>
          </div>
          <h3 className="case-title">{c.name}</h3>
          <p className="case-subtitle">{c.subtitle}</p>
        </div>
        <a
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          className="case-link"
          aria-label={`Visit ${c.name} at ${c.url}`}
        >
          {c.url} <ArrowUpRightIcon />
        </a>
      </header>

      <div className="case-body">
        <div className="case-col">
          <p className="case-summary">{c.summary}</p>

          <div className="case-stats">
            {c.stats.map((s, i) => (
              <div key={i} className="case-stat">
                <div className="case-stat-v">{s.v}</div>
                <div className="case-stat-k">{s.k}</div>
              </div>
            ))}
          </div>

          <h4 className="case-section-title">Ownership</h4>
          <div className="case-stack">
            {c.ownership.map((o) => (
              <span key={o} className="chip">
                {o}
              </span>
            ))}
          </div>
        </div>

        <div className="case-col">
          <h4 className="case-section-title">Key capabilities</h4>
          <ul className="case-features">
            {c.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>

          <h4 className="case-section-title" style={{ marginTop: 28 }}>
            Stack
          </h4>
          <div className="case-stack">
            {c.stack.map((s) => (
              <span key={s} className={"chip" + (c.stackAccent.includes(s) ? " accent" : "")}>
                {s}
              </span>
            ))}
          </div>

          <div className="case-preview" style={{ marginTop: 24 }}>
            <div className="preview-chrome">
              <div className="dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="url">
                <LockIcon /> {c.url}
              </div>
            </div>
            <ScreenshotGallery shots={PREVIEW_SHOTS[c.id]} alt={c.name} />
          </div>
        </div>
      </div>
    </article>
  );
}

function ScreenshotGallery({
  shots,
  alt,
}: {
  shots: { src: string; label: string }[];
  alt: string;
}) {
  const [i, setI] = useState(0);
  if (!shots.length) return null;
  const current = shots[i];

  return (
    <div className="preview-body">
      <Image
        src={current.src}
        alt={`${alt} — ${current.label}`}
        width={1870}
        height={907}
        sizes="(max-width: 900px) 100vw, 45vw"
        priority={false}
      />
      <div className="preview-overlay">
        <div className="preview-label">
          {String(i + 1).padStart(2, "0")} · {current.label}
        </div>
        <div className="preview-dots" role="tablist" aria-label={`${alt} screenshots`}>
          {shots.map((s, j) => (
            <button
              key={s.src}
              type="button"
              role="tab"
              aria-current={j === i ? "true" : "false"}
              aria-label={s.label}
              onClick={() => setI(j)}
              className="preview-dot"
            >
              {j + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
