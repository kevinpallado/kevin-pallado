import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { industries, projects, yearsInService } from "@/data/projects";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";

/**
 * Owned systems first, contributions after: the order follows ownership.
 * Not every project earns a place here — Landers lives on /projects only.
 */
const order = [
  "londonfoster",
  "quansys",
  "racketa",
  "zenmarinecharter",
  "zenintent",
  "grantable",
  "basc-eportal",
];
const solutions = order
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is (typeof projects)[number] => Boolean(p));

/**
 * The two ways a client can bring me in. The proof under each is derived from
 * the role recorded on each project, so a system is only listed where the
 * role actually supports it.
 */
const OWN_ROLES = /full ownership|built solo|project lead/i;
const ways = [
  {
    id: "own",
    title: "Hand me the system",
    text: "I take over your software infrastructure and the workflows that run on it — architecture, hosting, integrations, and the day-to-day running — as the one developer accountable for all of it.",
    fit: "Best when there is no in-house developer, or the current setup is held together by subscriptions and spreadsheets.",
    subject: "Taking over our software",
    proof: (role: string) => OWN_ROLES.test(role),
    proofLabel: "Owned or led",
  },
  {
    id: "team",
    title: "Add me to your team",
    text: "I join the developers you already have — picking up work from your backlog, owning features end to end, reviewing code, and helping newer developers get up to speed — inside your process and tools.",
    fit: "Best when you have a product and a team, and need another senior pair of hands that does not need managing.",
    subject: "Joining our team",
    proof: (role: string) => !OWN_ROLES.test(role),
    proofLabel: "Worked as part of the team",
  },
];

/** How an engagement runs. Named stages, not numbered ones. */
const engagement = [
  [
    "Map",
    "We walk through how the work gets done today — the hand-offs, the re-entry, the tools that don't connect — and agree on which step costs the most to keep doing. You get a written scope before anything is built.",
  ],
  [
    "Build",
    "The smallest system that removes that step, shipped in working pieces your team can use as they land, around the way your business already runs.",
  ],
  [
    "Run",
    "I stay on after launch for support, fixes, and changes as the business moves. The longest-running system I own has had the same developer since 2019.",
  ],
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
        <section className="unit hero" aria-labelledby="hero-title">
          <div className="hero-pitch">
            <h1 id="hero-title">
              Software that cuts what it costs to run your business.
            </h1>
            <p className="hero-claim">
              I replace the subscriptions, re-keying, and hand-offs your team
              works around every day with one system you own — built to your
              workflow and kept running after launch. {projects.length} systems
              in production across {industries.length} industries, the oldest
              running {longestRun} years.
            </p>
            <div className="hero-actions">
              <a href={`mailto:${site.email}`} className="hero-cta">
                Start a project
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a href="#solutions" className="hero-next">
                See the solutions
                <ArrowDown size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          <aside className="hero-card panel" aria-label="About Kevin">
            <div className="hero-who">
              <span className="hero-avatar">
                <Image
                  src="/avatar.jpg"
                  alt={`Portrait of ${site.fullName}`}
                  width={96}
                  height={96}
                  priority
                />
              </span>
              <div>
                <p className="hero-name">{site.fullName}</p>
                <p className="role">
                  {site.role.split(" · ").map((part) => (
                    <span key={part}>{part}</span>
                  ))}
                </p>
              </div>
            </div>
            <dl className="hero-facts">
              <div>
                <dt>Based</dt>
                <dd>Cagayan de Oro, PH</dd>
              </div>
              <div>
                <dt>Hours</dt>
                <dd>UTC+8 · remote</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd className="is-open">
                  <i aria-hidden="true" />
                  Taking freelance projects
                </dd>
              </div>
            </dl>
            <a href={`mailto:${site.email}`} className="hero-mail">
              {site.email}
            </a>
          </aside>
        </section>

        <section
          className="unit"
          id="solutions"
          aria-labelledby="solutions-title"
        >
          <Reveal>
            <div className="unit-head">
              <p className="designation">
                <b>Solutions</b>
                <span>
                  {solutions.length} systems ·{" "}
                  {new Set(solutions.map((p) => p.solution.industry)).size}{" "}
                  industries
                </span>
              </p>
              <h2 className="legend" id="solutions-title">
                Most operating cost is work a system should be doing.
              </h2>
            </div>
          </Reveal>
          <div className="solutions mt-tight">
            {solutions.map((project) => (
              <Reveal key={project.slug}>
                <article className="solution">
                  <div className="solution-cost">
                    <p className="plate">{project.solution.industry}</p>
                    <h3>{project.solution.cost}</h3>
                  </div>
                  <div className="solution-fix">
                    <p>{project.solution.fix}</p>
                    <div className="solution-proof">
                      <Link href={`/projects/${project.slug}`}>
                        <span className="proof-port" aria-hidden="true" />
                        <span>
                          <b>{project.name}</b>
                          {project.year} · {project.role.replace(/^Featured · /, "")}
                        </span>
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </Link>
                      {project.scale ? (
                        <span className="scale-lead">
                          <b>{project.scale.value}</b>
                          <em>{project.scale.label}</em>
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <figure className="monitor">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      width={720}
                      height={450}
                      sizes="(max-width: 820px) 340px, 300px"
                    />
                    <figcaption>{project.name} in production</figcaption>
                  </figure>
                </article>
              </Reveal>
            ))}
          </div>
          <Link href="/projects" className="entry-link archive-link">
            Every system, in full <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </section>

        <section className="unit" id="ways" aria-labelledby="ways-title">
          <Reveal>
            <div className="unit-head">
              <p className="designation">
                <b>Ways to work</b>
                <span>Own it · or join in</span>
              </p>
              <h2 className="legend-sm" id="ways-title">
                Hand me the whole system, or bring me onto the team you
                already have.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="ways panel mt-tight">
              {ways.map((way) => {
                const proof = solutions.filter((p) => way.proof(p.role));
                return (
                  <article className="way" key={way.id}>
                    <h3>{way.title}</h3>
                    <p>{way.text}</p>
                    <p className="way-fit">{way.fit}</p>
                    <div className="way-proof">
                      <p className="plate">{way.proofLabel}</p>
                      <ul>
                        {proof.map((p) => (
                          <li key={p.slug}>
                            <Link href={`/projects/${p.slug}`}>{p.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      className="way-cta"
                      href={`mailto:${site.email}?subject=${encodeURIComponent(way.subject)}`}
                    >
                      {way.id === "own"
                        ? "Talk about handing it over"
                        : "Talk about joining your team"}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </section>

        <section className="unit" id="process" aria-labelledby="engage-title">
          <Reveal>
            <div className="unit-head">
              <p className="designation">
                <b>Engagement</b>
                <span>Map · build · run</span>
              </p>
              <h2 className="legend-sm" id="engage-title">
                One developer from the first walkthrough to the system your
                team runs on. Less handoff, more ownership.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <dl className="stages panel mt-tight">
              {engagement.map(([stage, text]) => (
                <div className="stage" key={stage}>
                  <dt>{stage}</dt>
                  <dd>{text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        <section className="unit" id="contact" aria-labelledby="contact-title">
          <Reveal>
            <div className="contact panel">
              <div>
                <p className="designation">
                  <b>Open line</b>
                  <span>Taking projects</span>
                </p>
                <h2 id="contact-title">
                  What is your team still doing by hand?
                </h2>
                <p className="lede">
                  Taking freelance work two ways: hand me your software
                  infrastructure and workflows to build and run, or bring me
                  onto your team as another senior developer. Tell me where the
                  hours go and I will tell you which fits. Based in{" "}
                  {site.location}, working remote with clients in the US and the
                  Philippines.
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
          Start a project <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </footer>
    </div>
  );
}
