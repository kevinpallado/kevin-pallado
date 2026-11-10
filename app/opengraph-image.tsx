import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

export const alt = `${site.fullName} — Freelance Software Developer`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const GROUND = '#cbd0c4'
const CREAM = '#ede4d3'
const BURGUNDY = '#7b1e2e'
const INK = '#1d1f1b'
const INK_SOFT = '#464c45'

// The share card leads with the same offer as the home page: sage ground, one
// cream plate, burgundy reserved for the mark and the single rule.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: GROUND,
          color: INK,
          padding: '60px 72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 7, fontSize: 40, fontWeight: 700, letterSpacing: -2 }}>
            KP
            <div style={{ width: 12, height: 12, borderRadius: 999, background: BURGUNDY, marginBottom: 9 }} />
          </div>
          <div
            style={{
              display: 'flex',
              padding: '10px 18px',
              background: CREAM,
              borderRadius: 3,
              fontSize: 18,
              letterSpacing: 4,
              color: INK,
            }}
          >
            TAKING FREELANCE PROJECTS
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
          <div style={{ display: 'flex', fontSize: 82, fontWeight: 700, letterSpacing: -3, lineHeight: 1.02, maxWidth: 980 }}>
            Software that cuts what it costs to run your business.
          </div>
          <div style={{ display: 'flex', width: 120, height: 5, background: BURGUNDY, borderRadius: 3 }} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', fontSize: 27 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div>{site.fullName}</div>
            <div style={{ color: INK_SOFT, fontSize: 23 }}>{site.role}</div>
          </div>
          <div style={{ color: INK_SOFT, fontSize: 23 }}>{site.location}</div>
        </div>
      </div>
    ),
    size,
  )
}
