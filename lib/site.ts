/**
 * Canonical site facts, shared by metadata, structured data, and OG images.
 *
 * The host comes from the environment so nothing has to be hardcoded: Vercel
 * sets VERCEL_PROJECT_PRODUCTION_URL to the project's production domain (the
 * *.vercel.app one until a custom domain is attached). Set NEXT_PUBLIC_SITE_URL
 * to override it.
 */
function resolveUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }
  return 'http://localhost:3000'
}

export const site = {
  url: resolveUrl(),
  name: 'Kevin Pallado',
  fullName: 'Kevin Ren B. Pallado',
  role: 'Freelance software developer',
  email: 'kevin.pallado97@gmail.com',
  location: 'Cagayan de Oro, Philippines',
  description:
    'Freelance software developer building systems that cut what it costs to run a business — replacing re-keying, hand-offs, and disconnected tools with software that does the work, then keeping it running.',
} as const
