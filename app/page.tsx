import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  industries,
  projects,
  services,
  skills,
  yearsInService,
} from "@/data/projects";
import { PatchBay } from "@/components/patch-bay";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";

const owns = [
  [
    "Stakeholder ownership",
    "Helping stakeholders decide where the product goes, not just building to spec.",
  ],
  [
    "Technical leadership",
    "Setting direction, reviewing work, and bringing developers up to speed.",
  ],
  ["Systems thinking", "Clear architecture for workflows that need to last."],
  ["End-to-end ownership", "From first diagram to production support."],
  ["Useful AI", "Practical AI integrations that make the work better."],
];

const oldest = projects.reduce((a, b) =>
  Number(a.year.slice(0, 4)) < Number(b.year.slice(0, 4)) ? a : b,
);

export default function Page() {
  const longestRun = yearsInService(oldest.year);

  return (
    <div className="rack">
      <SiteHeader />

      <main>
        <section className="unit bay-unit" aria-labelledby="bay-title">
          <div className="bay-head">
            <div>
              <h1 id="bay-title">{site.fullName}</h1>
              <p className="role">{site.role}</p>
            </div>
            <p className="bay-claim">
              A screenshot shows you a surface. This shows you what is wired to
              what — the data models, APIs, and integrations underneath{" "}
              {projects.length} systems, the oldest of them running{" "}
              {longestRun} years.
            </p>
          </div>
          <PatchBay email={site.email} />
        </section>

        <section className="unit" aria-labelledby="owns-title">
          <Reveal>
            <div className="unit-head">
              <p className="designation">
                <b>What I own</b>
                <span>Less handoff</span>
              </p>
              <h2 className="legend" id="owns-title">
                I take the part of the product that has to keep working.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <dl className="owns mt-block">
              {owns.map(([title, text]) => (
                <div className="own" key={title}>
                  <dt>{title}</dt>
                  <dd>{text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        <section className="unit" id="work" aria-labelledby="record-title">
          <Reveal>
            <div className="unit-head">
              <p className="designation">
                <b>Service record</b>
                <span>
                  {projects.length} systems · {industries.length} industries
                </span>
              </p>
              <h2 className="legend" id="record-title">
                Built, contributed to, and still running.
              </h2>
            </div>
          </Reveal>
          <div className="record mt-tight">
            {projects.map((project) => (
              <Reveal key={project.slug}>
                <article className="entry">
                  <div>
                    <div className="entry-head">
                      <h3>{project.name}</h3>
                      <span className="years">{project.year}</span>
                    </div>
                    <p className="one-liner">{project.oneLiner}</p>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="entry-link"
                    >
                      Open record <ArrowUpRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                  <div className="entry-spec">
                    <span className="role">{project.role}</span>
                    <span>{project.stack.join(" · ")}</span>
                    {project.unverified ? (
                      <span className="provisional">Unverified</span>
                    ) : null}
                    {project.scale ? (
                      <span className="scale-lead">
                        <b>{project.scale.value}</b>
                        <em>{project.scale.label}</em>
                      </span>
                    ) : null}
                  </div>
                  <figure className="monitor">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      width={720}
                      height={450}
                      sizes="(max-width: 820px) 340px, 350px"
                    />
                    <figcaption>{project.name} in production</figcaption>
                  </figure>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="unit" id="stack" aria-labelledby="patch-title">
          <Reveal>
            <div className="unit-head">
              <p className="designation">
                <b>Patch list</b>
                <span>
                  {services.length} wired · {skills.length} in hand
                </span>
              </p>
              <h2 className="legend-sm" id="patch-title">
                Comfortable across the stack, and across the industries that
                use it.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="patch-unit panel">
            <ul className="patch-list">
              {skills.map((skill) => (
                <li key={skill}>
                  <i aria-hidden="true" />
                  {skill}
                </li>
              ))}
            </ul>
            <ul className="fields">
              {industries.map((industry) => (
                <li key={industry}>{industry}</li>
              ))}
            </ul>
            </div>
          </Reveal>
        </section>

        <section className="unit" id="contact" aria-labelledby="contact-title">
          <Reveal>
            <div className="contact panel">
              <div>
                <p className="designation">
                  <b>Open line</b>
                  <span>One jack free</span>
                </p>
                <h2 id="contact-title">
                  Have a system that has to keep working?
                </h2>
                <p className="lede">
                  Open to senior and lead roles, and to select projects, through
                  2026. Based in {site.location}, working remote.
                </p>
                <a className="contact-cta" href={`mailto:${site.email}`}>
                  {site.email}
                  <ArrowUpRight size={22} aria-hidden="true" />
                </a>
              </div>
              <div className="operator">
                <Image
                  src="/profile.jpeg"
                  alt={site.fullName}
                  width={54}
                  height={54}
                />
                <p>
                  <b>{site.name}</b>
                  Cagayan de Oro, PH
                  <br />
                  UTC+8 · Open to remote
                </p>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 {site.name}</span>
        <a href={`mailto:${site.email}`}>
          Start a conversation <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </footer>
    </div>
  );
}
