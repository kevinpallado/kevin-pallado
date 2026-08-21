import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

export const alt = `${site.fullName} — Fullstack Developer`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Share card in the same language as the site icon: dark plate, tight brand
// lockup, accent dot. Rendered at build time, so the wording never drifts.
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
          background: '#17181c',
          color: '#ffffff',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, fontSize: 44, fontWeight: 600, letterSpacing: -3 }}>
          KP
          <div style={{ width: 13, height: 13, borderRadius: 999, background: '#3e8cc9', marginBottom: 9 }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 86, fontWeight: 600, letterSpacing: -4, lineHeight: 1.05 }}>
            Building systems
          </div>
          <div style={{ fontSize: 86, fontWeight: 600, letterSpacing: -4, lineHeight: 1.05, color: '#8f9aa8' }}>
            that run real businesses.
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', fontSize: 28 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div>{site.fullName}</div>
            <div style={{ color: '#8f9aa8', fontSize: 24 }}>{site.role}</div>
          </div>
          <div style={{ color: '#8f9aa8', fontSize: 24 }}>{site.location}</div>
        </div>
      </div>
    ),
    size,
  )
}
