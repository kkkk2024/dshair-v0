import { MetadataRoute } from 'next'
import { products, collections } from '@/lib/products'
import { cities } from '@/lib/city-data'
import { seoPages } from '@/lib/seo-pages'

const BASE_URL = 'https://www.dshairbeauty.co.uk'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/collections/all`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/color-chart`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/salon-partners`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/ambassador`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/academy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/solutions`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/why-choose-us`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/colour-match`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/find-stylist`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/resources`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/faqs`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/trade-wholesale`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/trade-price-calculator`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/extension-specs`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // City-specific landing pages for local SEO
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/cities/${city.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Blog post pages (all 21 posts on disk)
  const blogPosts = [
    'balayage-extensions-salon-guide',
    'best-extensions-fine-hair-uk',
    'butterfly-extensions-guide',
    'clip-in-extensions-guide',
    'fringes-bangs-extensions-guide',
    'hair-extension-aftercare-guide',
    'hair-extension-methods-comparison',
    'hair-extension-types-guide',
    'hair-topper-guide',
    'hand-tied-weft-guide',
    'how-to-choose-hair-extension-supplier',
    'k-tip-extensions-guide',
    'manchester-colour-collection-2026',
    'manchester-hair-extension-supplier',
    'nano-ring-extensions-guide',
    'ponytail-extensions-guide',
    'remy-vs-nonremy-hair-guide',
    'tape-in-extensions-guide',
    'trade-vs-diy-extensions',
    'weft-extensions-guide',
    'wholesale-hair-extensions-uk',
  ]
  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const salonSeoPages: MetadataRoute.Sitemap = seoPages.map((page) => ({
    url: `${BASE_URL}/uk-salon-hair-extensions/${page.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: page.intent === 'GEO' ? 0.72 : 0.78,
  }))

  // Collection pages
  const collectionPages: MetadataRoute.Sitemap = collections.map((collection) => ({
    url: `${BASE_URL}/collections/${collection.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Product pages
  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE_URL}/products/${product.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...cityPages, ...collectionPages, ...productPages, ...blogPostPages, ...salonSeoPages]
}
