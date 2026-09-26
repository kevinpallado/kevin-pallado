import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo } from 'next/font/google'
import { site } from '@/lib/site'
import './globals.css'

// One family across the whole system, worked through its width and weight
// axes: expanded and heavy for panel legends, condensed caps for the
// designation strips, normal for body, tabular figures for every number.
const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
  variable: '--font-archivo',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} — Fullstack Developer`,
    // Pages set only their own name: "Racketa — Kevin Pallado".
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: `${site.name} — Portfolio`,
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  publisher: site.fullName,
  keywords: [
    'Kevin Pallado',
    'Kevin Ren B. Pallado',
    'fullstack developer',
    'systems builder',
    'Laravel developer',
    'SvelteKit developer',
    'React developer',
    'API development',
    'Philippines developer',
    'remote developer',
  ],
  category: 'technology',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: `${site.fullName} — Portfolio`,
    title: `${site.fullName} — Fullstack Developer`,
    description: site.description,
    url: '/',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.fullName} — Fullstack Developer`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#dde0da',
  width: 'device-width',
  initialScale: 1,
}

// Tells search engines this site is one person's professional profile, so the
// name, role, and links can be read as an entity rather than loose page text.
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.fullName,
  alternateName: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: 'Fullstack Developer',
  address: { '@type': 'PostalAddress', addressLocality: 'Cagayan de Oro', addressCountry: 'PH' },
  description: site.description,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={archivo.variable}>
      <head>
        <noscript>
          <style>{'.reveal{opacity:1!important;transform:none!important}'}</style>
        </noscript>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
