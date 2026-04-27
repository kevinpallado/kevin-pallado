import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { ArrowIcon, MailIcon } from "../lib/icons";
import { SITE } from "../lib/data";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-tag">
              <span className="line" aria-hidden="true" /> Available April 2026
            </div>
            <h1>
              Fullstack developer building <em>systems</em> that
              <br />
              <span className="u">run real businesses.</span>
            </h1>
            <p className="hero-sub">
              I build and own internal platforms for{" "}
              <strong>energy retail and real estate</strong> — POS & accounting
              for a fuel station, transaction and back-office tooling for a
              Miami brokerage. Seven years across{" "}
              <strong>PHP, Python, React, and AWS</strong>. End-to-end,
              production-owned.
            </p>

            <div className="hero-cta-row">
              <a href="#work" className="btn-primary">
                See featured systems <ArrowIcon />
              </a>
              <a href={`mailto:${SITE.email}`} className="btn-ghost">
                <MailIcon /> {SITE.email}
              </a>
            </div>

            <div className="hero-meta">
              <div className="hero-meta-item">
                <div className="hero-meta-k">Experience</div>
                <div className="hero-meta-v">
                  7<em>+</em> years shipping production
                </div>
              </div>
              <div className="hero-meta-item">
                <div className="hero-meta-k">Focus</div>
                <div className="hero-meta-v">
                  Ownership <em>·</em> Architecture
                </div>
              </div>
              <div className="hero-meta-item">
                <div className="hero-meta-k">Currently</div>
                <div className="hero-meta-v">
                  LondonFoster <em>+</em> Quansys
                </div>
              </div>
            </div>
          </div>

          <IDCard />
        </div>

        <div className="hero-marquee" aria-hidden="true">
          <strong>Stack in rotation</strong>
          {[
            "Laravel",
            "Python",
            "React",
            "Node.js",
            "AWS Lambda",
            "PostgreSQL",
            "Stripe",
            "OpenAI",
            "Claude API",
            "Claude Code",
            "MCP",
            "SvelteKit",
            "Next.js",
          ].map((s) => (
            <span key={s} className="marquee-item">
              <span className="dot" />
              <span>{s}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function hasProfileImage() {
  if (!SITE.profileImage) return false;
  try {
    const filePath = path.join(process.cwd(), "public", SITE.profileImage);
    return fs.statSync(filePath).isFile();
  } catch {
    return false;
  }
}

function IDCard() {
  const showPhoto = hasProfileImage();
  return (
    <aside className="id-card" aria-label="Profile card">
      <div className="id-head">
        <div className="id-head-left">Cagayan de Oro City, Philippines</div>
        <div className="id-head-right">UTC+8</div>
      </div>
      <div className="id-avatar" aria-hidden={showPhoto ? undefined : "true"}>
        {showPhoto ? (
          <Image
            src={SITE.profileImage}
            alt={`${SITE.fullName} portrait`}
            width={1000}
            height={1000}
            sizes="72px"
            priority
          />
        ) : (
          "KP"
        )}
      </div>
      <h3 className="id-name">Kevin Ren B. Pallado</h3>
      <div className="id-role">
        Fullstack <span className="accent">·</span> systems builder
      </div>

      <div className="id-rows">
        <div className="id-row">
          <span className="id-row-k">Status</span>
          <span className="id-row-v">
            <span className="dot-ok" aria-hidden="true" />
            Open to remote
          </span>
        </div>
        <div className="id-row">
          <span className="id-row-k">Based in</span>
          <span className="id-row-v">Cagayan de Oro, PH</span>
        </div>
        <div className="id-row">
          <span className="id-row-k">Primary</span>
          <span className="id-row-v">PHP · Javascript · AWS</span>
        </div>
        <div className="id-row">
          <span className="id-row-k">Mode</span>
          <span className="id-row-v">End-to-end ownership</span>
        </div>
      </div>
    </aside>
  );
}
