import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/data/projects'
import { Reveal } from './reveal'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal className="group">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="project-image-wrap">
          <Image src={project.image} alt={project.imageAlt} width={1600} height={1000} className="project-image" sizes="(max-width: 900px) 100vw, 70vw" />
          <span className="project-arrow" aria-hidden="true">↗</span>
        </div>
        <div className="mt-5 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="eyebrow">{project.role}</p>
            <h3 className="mt-2 text-2xl font-medium tracking-tight">{project.name}</h3>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground md:text-right">{project.oneLiner}</p>
        </div>
      </Link>
    </Reveal>
  )
}
