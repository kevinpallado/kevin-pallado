import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { Motion } from '@/components/motion'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })

export const metadata: Metadata = { title: 'Kevin Pallado — Fullstack Developer', description: 'Kevin Pallado builds systems that run real businesses.', generator: 'v0.app' }
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#ffffff', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
        <noscript>
          <style>{'.reveal{opacity:1!important;transform:none!important}'}</style>
        </noscript>
      </head>
      <body className="antialiased">
        <Motion>{children}</Motion>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
