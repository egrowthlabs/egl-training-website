import { MetadataRoute } from 'next'
import { SEO } from './config'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SEO.siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SEO.siteUrl}/#clases`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SEO.siteUrl}/#planes`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
