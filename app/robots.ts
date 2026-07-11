import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/account/',
          '/_next/',
          '/admin/',
        ],
      },
      // Explicitly allow AI crawlers for GEO optimization
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/api/', '/account/', '/admin/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/api/', '/account/', '/admin/'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/api/', '/account/', '/admin/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/api/', '/account/', '/admin/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/api/', '/account/', '/admin/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/account/', '/admin/'],
      },
      {
        userAgent: 'Amazonbot',
        allow: '/',
        disallow: ['/api/', '/account/', '/admin/'],
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
        disallow: ['/api/', '/account/', '/admin/'],
      },
    ],
    sitemap: 'https://www.dshairbeauty.co.uk/sitemap.xml',
    host: 'https://www.dshairbeauty.co.uk',
  }
}
