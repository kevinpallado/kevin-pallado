import { ImageResponse } from 'next/og'
import { projects } from '@/data/projects'
import { site } from '@/lib/site'
import SiteCard from '../../opengraph-image'

export const alt = `A system by ${site.fullName}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const PANEL = '#1e2022'
const BRASS = '#b08d3f'
const CORD = '#c0392b'
const ON_PANEL = '#eef0ec'
const ON_PANEL_SOFT = '#a6aeac'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

// One card per system, not its screenshot: a tall dashboard capture crops to
// a meaningless strip in a link preview, and weighs too much for chat apps.
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  if (!project) return SiteCard()

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: PANEL,
          color: ON_PANEL,
          padding: '64px 72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 7, fontSize: 40, fontWeight: 700, letterSpacing: -2 }}>
            KP
            <div style={{ width: 12, height: 12, borderRadius: 999, background: BRASS, marginBottom: 9 }} />
          </div>
          <div style={{ display: 'flex', fontSize: 21, letterSpacing: 3, color: ON_PANEL_SOFT }}>
            {`${project.role.split(' · ').pop()} · ${project.year}`.toUpperCase()}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div style={{ display: 'flex', fontSize: 88, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>
            {project.name}
          </div>
          <div style={{ display: 'flex', fontSize: 34, lineHeight: 1.3, color: ON_PANEL_SOFT, maxWidth: 1000 }}>
            {project.oneLiner}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <div style={{ width: 16, height: 16, borderRadius: 999, background: '#121415', border: '3px solid #dcb864' }} />
            <div style={{ width: 40, height: 4, background: CORD, borderRadius: 2 }} />
            {project.stack.map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  fontSize: 21,
                  letterSpacing: 2,
                  padding: '6px 14px',
                  border: '2px solid #6d5a2e',
                  borderRadius: 4,
                  color: ON_PANEL,
                }}
              >
                {item.toUpperCase()}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', fontSize: 25 }}>
            <div style={{ display: 'flex' }}>{site.fullName}</div>
            <div style={{ display: 'flex', color: ON_PANEL_SOFT, fontSize: 22 }}>{site.role}</div>
          </div>
        </div>
      </div>
    ),
    size,
  )
}
