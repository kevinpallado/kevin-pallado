import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/projects'

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })) }

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  if (!project) notFound()
  return <main><header className="site-header"><Link href="/" className="brand">KP<span>.</span></Link><Link href="/projects" className="back-link"><ArrowLeft size={15} /> All projects</Link></header><article className="project-detail section-shell"><p className="eyebrow">{project.role} · {project.year}</p><h1>{project.name}</h1><p className="detail-lede">{project.oneLiner}</p><div className="detail-image"><Image src={project.image} alt={project.imageAlt} width={1800} height={1100} priority sizes="(max-width: 900px) 100vw, 1100px" /></div><div className="detail-copy"><div><p className="eyebrow">The brief</p><p className="detail-description">{project.description}</p>{project.url && <a href={project.url} target="_blank" rel="noreferrer" className="text-link">Visit live project <ArrowUpRight size={16} /></a>}</div><div><p className="eyebrow">Stack</p><div className="detail-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div></div></article><footer className="site-footer"><Link href="/projects"><ArrowLeft size={15} /> Back to projects</Link><Link href="mailto:kevin.pallado97@gmail.com">Work together <ArrowUpRight size={15} /></Link></footer></main>
}
