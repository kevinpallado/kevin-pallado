import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

const description =
  "Production systems, thoughtful collaborations, and a few experiments that made the next project better — selected work by Kevin Ren B. Pallado.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects — Kevin Pallado",
    description,
    url: "/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Kevin Pallado",
    description,
  },
};

export default function ProjectsPage() {
  return (
    <div className="rack">
      <SiteHeader back={{ href: "/", label: "Back to the bay" }} />

      <main>
        <section className="page-head" aria-labelledby="projects-title">
          <div className="unit-head">
            <p className="designation">
              <b>Service record</b>
              <span>{projects.length} systems</span>
            </p>
            <div>
              <h1 id="projects-title">Work that had something at stake.</h1>
              <p className="lede">{description}</p>
            </div>
          </div>
        </section>

        <section className="unit" aria-label="All projects">
          <div className="record">
            {projects.map((project) => (
              <Reveal key={project.slug}>
                <article className="entry">
                  <div>
                    <div className="entry-head">
                      <h2>{project.name}</h2>
                      <span className="years">{project.year}</span>
                    </div>
                    <p className="one-liner">{project.description}</p>
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
