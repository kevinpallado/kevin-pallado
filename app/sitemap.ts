import type { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.url}/projects`, changeFrequency: 'monthly', priority: 0.8 },
    ...projects.map((project) => ({
      url: `${site.url}/projects/${project.slug}`,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ]
}
