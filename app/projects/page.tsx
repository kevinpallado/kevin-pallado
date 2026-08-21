import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/project-card'

export default function ProjectsPage() {
  return <main><header className="site-header"><Link href="/" className="brand">KP<span>.</span></Link><Link href="/" className="back-link"><ArrowLeft size={15} /> Back home</Link></header><section className="section-shell projects-hero"><p className="eyebrow">A selected archive</p><h1>Work that had<br /><em>something at stake.</em></h1><p className="lede">Production systems, thoughtful collaborations, and a few experiments that made the next project better.</p></section><section className="section-shell projects-grid" aria-label="Projects">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</section><footer className="site-footer"><span>© 2026 Kevin Pallado</span><Link href="mailto:kevin.pallado97@gmail.com">Start a conversation <ArrowUpRight size={15} /></Link></footer></main>
}
