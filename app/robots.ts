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
    ],
    sitemap: 'https://www.dshairbeauty.co.uk/sitemap.xml',
    host: 'https://www.dshairbeauty.co.uk',
  }
}
