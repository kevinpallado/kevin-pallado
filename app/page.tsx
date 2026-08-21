import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { featuredProject, industries, projects, skills } from "@/data/projects";
import { IndustryRotator } from "@/components/industry-rotator";
import { HeroCarry } from "@/components/hero-carry";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/project-card";

const offers = [
  [
    "01",
    "Stakeholder ownership",
    "Helping stakeholders decide where the product goes, not just building to spec.",
  ],
  [
    "02",
    "Technical leadership",
    "Setting direction, reviewing work, and bringing developers up to speed.",
  ],
  [
    "03",
    "Systems thinking",
    "Clear architecture for workflows that need to last.",
  ],
  ["04", "End-to-end ownership", "From first diagram to production support."],
  ["05", "Useful AI", "Practical AI integrations that make the work better."],
];

export default function Page() {
  return (
    <main>
      <header className="site-header">
        <Link href="/" className="brand">
          KP<span>.</span>
        </Link>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="mailto:kevin.pallado97@gmail.com">Contact</a>
        </nav>
      </header>

      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-meta">
          <span className="status-dot" /> Available for select projects · 2026
        </div>
        <h1 id="hero-title">
          Building <em>systems</em>
          <br />
          that run real{" "}
          <HeroCarry word="businesses." />
        </h1>
        <div className="hero-footer">
          <p>
            Kevin Ren B. Pallado
            <br />
            <span>Fullstack developer · systems builder</span>
          </p>
          <a href="#about" className="text-link">
            Scroll to explore <ArrowDown size={16} />
          </a>
        </div>
      </section>

      <section id="about" className="section-shell opening-section">
        <Reveal>
          <p className="eyebrow">A little context</p>
          <h2>
            A developer who owns
            <br />
            <em>the whole system.</em>
          </h2>
          <p className="lede">
            {
              "I build the layers that make products work. I design and build the systems underneath the interface data models, APIs, business logic, integrations, workflows, and the product itself."
            }
          </p>
          <IndustryRotator items={industries} />
        </Reveal>
      </section>

      <section
        className="section-shell offer-section"
        aria-labelledby="offer-title"
      >
        <Reveal>
          <div className="section-marker">
            <span>01</span>
            <span>How I help</span>
          </div>
          <h2 id="offer-title">
            Less handoff.
            <br />
            <em>More ownership.</em>
          </h2>
        </Reveal>
        <div className="offer-list">
          {offers.map(([number, title, text], index) => (
            <Reveal key={number}>
              <div className="offer-row">
                <span className="eyebrow">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="work"
        className="section-shell work-section"
        aria-labelledby="work-title"
      >
        <Reveal>
          <div className="section-marker">
            <span>02</span>
            <span>Selected work</span>
          </div>
          <div className="heading-row">
            <h2 id="work-title">
              Built, contributed to,
              <br />
              <em>and shipped.</em>
            </h2>
            <Link href="/projects" className="button-link">
              View all projects <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
        <ProjectCard project={featuredProject} />
        <div className="mini-projects">
          {projects.slice(1, 3).map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="mini-project"
            >
              <span>{String(index + 2).padStart(2, "0")}</span>
              <strong>{project.name}</strong>
              <span>{project.year}</span>
              <ArrowUpRight size={16} />
            </Link>
          ))}
        </div>
      </section>

      <section
        id="skills"
        className="section-shell skills-section"
        aria-labelledby="skills-title"
      >
        <Reveal>
          <div className="section-marker">
            <span>03</span>
            <span>Tools of the trade</span>
          </div>
          <h2 id="skills-title">
            Comfortable across
            <br />
            <em>the stack.</em>
          </h2>
          <div className="skill-cloud">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </Reveal>
      </section>

      <section
        className="section-shell cta-section"
        aria-labelledby="cta-title"
      >
        <Reveal>
          <p className="eyebrow">04 · Open to what&apos;s next</p>
          <h2 id="cta-title">
            Have a real problem
            <br />
            <em>worth solving?</em>
          </h2>
          <a className="cta-link" href="mailto:kevin.pallado97@gmail.com">
            Let&apos;s talk <ArrowUpRight size={20} />
          </a>
          <div className="cta-bottom">
            <Image
              src="/profile.jpeg"
              alt="Kevin Ren B. Pallado"
              width={56}
              height={56}
              className="avatar"
            />
            <p>
              Cagayan de Oro, PH
              <br />
              <span>UTC+8 · Open to remote</span>
            </p>
            <a href="mailto:kevin.pallado97@gmail.com" className="text-link">
              kevin.pallado97@gmail.com
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="site-footer">
        <span>© 2026 Kevin Pallado</span>
        <span>Made with intention.</span>
      </footer>
    </main>
  );
}
