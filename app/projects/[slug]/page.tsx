import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, yearsInService } from "@/data/projects";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found" };
  const title = `${project.name} — ${project.role.split(" · ").pop()}`;
  return {
    title: project.name,
    description: project.description,
    keywords: [project.name, ...project.stack],
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title,
      description: project.description,
      url: `/projects/${project.slug}`,
      images: [
        {
          url: project.image,
          width: 1600,
          height: 1000,
          alt: project.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const years = yearsInService(project.year);

  return (
    <div className="rack">
      <SiteHeader back={{ href: "/projects", label: "All systems" }} />

      <main>
        <article>
          <section className="page-head" aria-labelledby="project-title">
            <div className="unit-head">
              <p className="designation">
                <b>{project.role}</b>
                <span>{project.year}</span>
              </p>
              <div>
                <h1 id="project-title">{project.name}</h1>
                <p className="lede">{project.oneLiner}</p>
              </div>
            </div>

            <div className="meters on-ground mt-tight">
              <span className="meter">
                <b>{project.year}</b>
                <span>In service</span>
              </span>
              {years ? (
                <span className="meter">
                  <b>
                    {years} {years === 1 ? "year" : "years"}
                  </b>
                  <span>Running</span>
                </span>
              ) : null}
              <span className="meter">
                <b>{project.stack.length}</b>
                <span>Lines patched</span>
              </span>
              {project.scale ? (
                <span className="meter">
                  <b>{project.scale.value}</b>
                  <span>
                    {project.scale.label}
                  </span>
                </span>
              ) : null}
            </div>

            {project.unverified ? (
              <p className="notice">
                The dates and stack below are from memory and have not been
                verified yet.
              </p>
            ) : null}
          </section>

          <div className="detail-grid">
            <div>
              <figure className="detail-shot monitor">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={1120}
                  height={700}
                  priority
                  sizes="(max-width: 700px) 100vw, 560px"
                />
                <figcaption>{project.imageAlt} · in production</figcaption>
              </figure>
              <h2>The brief</h2>
              <p>{project.description}</p>
              <div className="detail-links">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-link"
                  >
                    Visit live project{" "}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                ) : null}
                <Link href="/projects" className="text-link">
                  <ArrowLeft size={14} aria-hidden="true" /> All systems
                </Link>
              </div>
            </div>
            <div>
              <h2>Patched to</h2>
              <ul className="detail-stack">
                {project.stack.map((item) => (
                  <li key={item}>
                    <i aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </main>

      <footer className="site-footer">
        <span>© 2026 {site.name}</span>
        <a href={`mailto:${site.email}`}>
          Work together <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </footer>
    </div>
  );
}
