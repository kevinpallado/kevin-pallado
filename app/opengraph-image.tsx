import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

export const alt = `${site.fullName} — Fullstack Developer`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const PANEL = '#1e2022'
const BRASS = '#b08d3f'
const CORD = '#c0392b'
const ON_PANEL = '#eef0ec'
const ON_PANEL_SOFT = '#a6aeac'

// Eight system jacks over five service jacks, patched — the same bay the site
// opens with, at share-card scale. Rendered at build time so it never drifts.
const SYSTEMS = [90, 218, 346, 474, 602, 730, 858, 986]
const SERVICES = [154, 346, 538, 730, 922]
const PATCHED = [
  [474, 346],
  [474, 538],
  [474, 730],
]

function cord(x1: number, x2: number) {
  const sag = Math.min(70, Math.max(24, Math.abs(x2 - x1) * 0.3)) + 96
  return `M ${x1} 12 C ${x1} ${sag}, ${x2} ${sag}, ${x2} 150`
}

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
          <div style={{ display: 'flex', fontSize: 19, letterSpacing: 4, color: ON_PANEL_SOFT }}>
            SYSTEMS BAY
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -3, lineHeight: 1.04 }}>
            A screenshot shows the surface.
          </div>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -3, lineHeight: 1.04, color: ON_PANEL_SOFT }}>
            This shows what it runs on.
          </div>
        </div>

        <div style={{ display: 'flex', height: 162 }}>
          <svg width="1056" height="162" viewBox="0 0 1056 162">
            {PATCHED.map(([a, b], i) => (
              <path key={i} d={cord(a, b)} stroke={CORD} strokeWidth="4" fill="none" strokeLinecap="round" />
            ))}
            {SYSTEMS.map((x) => (
              <circle key={`s${x}`} cx={x} cy={12} r="11" fill="#121415" stroke={x === 474 ? '#dcb864' : '#6d5a2e'} strokeWidth="3" />
            ))}
            {SERVICES.map((x) => (
              <circle key={`v${x}`} cx={x} cy={150} r="9" fill="#121415" stroke={PATCHED.some(([, b]) => b === x) ? '#dcb864' : '#6d5a2e'} strokeWidth="3" />
            ))}
          </svg>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', fontSize: 27 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div>{site.fullName}</div>
            <div style={{ color: ON_PANEL_SOFT, fontSize: 23 }}>{site.role}</div>
          </div>
          <div style={{ color: ON_PANEL_SOFT, fontSize: 23 }}>{site.location}</div>
        </div>
      </div>
    ),
    size,
  )
}
