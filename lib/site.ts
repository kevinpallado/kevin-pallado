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
  role: 'Fullstack developer · systems builder',
  email: 'kevin.pallado97@gmail.com',
  location: 'Cagayan de Oro, Philippines',
  description:
    'Fullstack developer building the systems that run real businesses — data models, APIs, business logic, integrations, and the workflows underneath the interface.',
} as const
