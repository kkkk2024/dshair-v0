// JSON-LD Structured Data Components for SEO / GEO
// Supports: Organization, LocalBusiness, Product, BreadcrumbList, WebSite, FAQ, Article, Person

const BASE_URL = 'https://www.dshairbeauty.co.uk'

export const AUTHOR_ID = `${BASE_URL}/about/caro-chen#author`
export const AUTHOR_NAME = 'Caro Chen'

// ─── Organisation / Local Business (for homepage) ──────────────────────────
export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'LocalBusiness'],
        '@id': `${BASE_URL}/#organization`,
        name: 'D.S HAIR & BEAUTY',
        url: BASE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${BASE_URL}/apple-icon.png`,
          width: 180,
          height: 180,
        },
        image: `${BASE_URL}/apple-icon.png`,
        description:
          "UK & EU's trusted factory-direct wholesale hair extension supplier. 100% Remy human hair — hand-tied weft, balayage, nano ring, tape-in, K-tip, butterfly weft & toppers. Trade pricing for professional salons. 19 years industry experience. Express 3–5 day shipping for UK & EU orders.",
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Manchester',
          addressLocality: 'Manchester',
          addressRegion: 'Greater Manchester',
          postalCode: 'M1',
          addressCountry: {
            '@type': 'Country',
            name: 'GB',
          },
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 53.4808,
          longitude: -2.2426,
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'Manchester',
            sameAs: 'https://en.wikipedia.org/wiki/Manchester',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Greater Manchester',
          },
          {
            '@type': 'Country',
            name: 'United Kingdom',
          },
        ],
        telephone: '+44-7780-480868',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+44-7780-480868',
            contactType: 'customer service',
            availableLanguage: ['English', 'Chinese'],
            areaServed: 'United Kingdom',
          },
          {
            '@type': 'ContactPoint',
            telephone: '+44-7780-480868',
            contactType: 'sales',
            availableLanguage: ['English', 'Chinese'],
            areaServed: 'United Kingdom',
          },
        ],
        email: 'info@dshairbeauty.co.uk',
        sameAs: [
          'https://www.instagram.com/d.shairbeauty',
          'https://uk.pinterest.com/dshairbeautyuk',
          'https://www.tiktok.com/@d.shairbeauty',
          'https://www.facebook.com/D.SHairBeauty',
        ],
        foundingDate: '2006',
        numberOfEmployees: {
          '@type': 'QuantitativeValue',
          minValue: 2,
          maxValue: 10,
        },
        priceRange: '££',
        currenciesAccepted: 'GBP',
        paymentAccepted: 'Cash, Credit Card, Bank Transfer',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '17:30',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '10:00',
            closes: '14:00',
          },
        ],
        knowsAbout: [
          'Hair Extensions',
          'Remy Human Hair',
          'Hand-Tied Weft',
          'Balayage Extensions',
          'Nano Ring Extensions',
          'Tape-In Extensions',
          'K-Tip Extensions',
          'Butterfly Weft Extensions',
          'Hair Toppers',
          'Wholesale Hair Supplier',
          'Salon Hair Extension Supply',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Professional Hair Extensions',
          itemListElement: [
            {
              '@type': 'OfferCatalog',
              name: 'Professional Extensions',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tape-In Hair Extensions' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'K-Tip / Keratin Bond Extensions' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nano Ring Extensions' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Butterfly Weft Extensions' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hand-Tied Weft Extensions' } },
              ],
            },
            {
              '@type': 'OfferCatalog',
              name: 'DIY Extensions',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Clip-In Extensions' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ponytail Extensions' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hair Toppers' } },
              ],
            },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: 'D.S HAIR & BEAUTY',
        inLanguage: 'en-GB',
        publisher: {
          '@id': `${BASE_URL}/#organization`,
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${BASE_URL}/collections/all?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// ─── Author / Person JSON-LD (E-E-A-T + GEO entity) ────────────────────
export function AuthorJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': AUTHOR_ID,
    name: AUTHOR_NAME,
    jobTitle: 'Founder & Trade Director',
    description:
      '19 years in hair extension manufacturing. Helps 50+ UK & EU salons build profitable extension services through factory-direct trade supply and private label.',
    url: `${BASE_URL}/about/caro-chen`,
    worksFor: { '@id': `${BASE_URL}/#organization` },
    knowsAbout: [
      'Hair Extensions',
      'Wholesale Hair Supply',
      'Salon Trade',
      'Private Label Manufacturing',
      'Remy Human Hair',
    ],
    sameAs: [
      'https://www.instagram.com/d.shairbeauty',
      'https://wigexporter.com',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// ─── LocalBusiness JSON-LD (for contact page) ───────────────────────────
export function LocalBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Organization'],
    '@id': `${BASE_URL}/#organization`,
    name: 'D.S HAIR & BEAUTY',
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/apple-icon.png`,
      width: 180,
      height: 180,
    },
    image: `${BASE_URL}/apple-icon.png`,
    description:
      "UK & EU's trusted factory-direct wholesale hair extension supplier. 100% Remy human hair — hand-tied weft, balayage, nano ring, tape-in, K-tip, butterfly weft & toppers. Trade pricing for professional salons. 19 years industry experience. Express 3–5 day shipping for UK & EU orders.",
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Manchester',
      addressRegion: 'Greater Manchester',
      postalCode: 'M1',
      addressCountry: {
        '@type': 'Country',
        name: 'GB',
      },
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.4808,
      longitude: -2.2426,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Manchester',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Greater Manchester',
      },
      {
        '@type': 'Country',
        name: 'United Kingdom',
      },
    ],
    telephone: '+44-7780-480868',
    email: 'info@dshairbeauty.co.uk',
    priceRange: '££',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '14:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/d.shairbeauty',
      'https://uk.pinterest.com/dshairbeautyuk',
      'https://www.tiktok.com/@d.shairbeauty',
      'https://www.facebook.com/D.SHairBeauty',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// ─── Product JSON-LD ────────────────────────────────────────────────────────
interface ProductJsonLdProps {
  product: {
    name: string
    description: string
    slug: string
    image: string
    images: string[]
    price: number
    currencyCode: string
    inStock: boolean
    rating: number
    reviews: number
    vendor: string
    category: string
  }
  // Real, config-driven ratings (Trustpilot). We ONLY emit an aggregateRating
  // when real review data is supplied here. The seeded `product.rating` /
  // `product.reviews` values in lib/products.ts are demo data, NOT verified
  // reviews, so they must NEVER be published as schema AggregateRating
  // (that would be review spam). Connect Trustpilot in lib/reviews.ts to enable.
  aggregateRating?: {
    '@type': 'AggregateRating'
    ratingValue: number
    reviewCount: number
    bestRating: number
    worstRating: number
  } | null
  reviews?: object[] | null
}

export function ProductJsonLd({ product, aggregateRating, reviews }: ProductJsonLdProps) {
  const productUrl = `${BASE_URL}/products/${product.slug}`

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    url: productUrl,
    image: product.images.length > 0 ? product.images : [product.image],
    brand: {
      '@type': 'Brand',
      name: product.vendor || 'D.S HAIR & BEAUTY',
    },
    offers: {
      '@type': 'Offer',
      url: productUrl,
      priceCurrency: product.currencyCode || 'GBP',
      price: product.price,
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'D.S HAIR & BEAUTY',
      },
      // Google Merchant Listings require both return-policy and shipping
      // references on every Offer. Inline the policy/service objects with
      // a URL pointer so the schema validates without extra round-trips.
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        name: 'D.S Hair & Beauty 30-Day Return Policy',
        url: `${BASE_URL}/returns`,
        merchantReturnDays: 30,
        returnMethod: 'https://schema.org/ReturnByMail',
        returnFees: 'https://schema.org/FreeReturn',
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        name: 'UK Standard Delivery',
        url: `${BASE_URL}/shipping`,
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'GB',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 1,
            unitCode: 'DAY',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: 3,
            unitCode: 'DAY',
          },
        },
      },
    },
    ...(aggregateRating && { aggregateRating }),
    ...(reviews && reviews.length > 0 && { review: reviews }),
    category: product.category,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// ─── Breadcrumb JSON-LD ───────────────────────────────────────────────────
interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[]
}

// Google BreadcrumbList spec requires `item` to be a fully-qualified URL.
// Some callers pass relative paths (`/products/foo`); normalise them here
// so we never ship invalid URLs to Search Console.
function toAbsoluteUrl(url: string): string {
  if (!url) return url
  if (/^https?:\/\//i.test(url)) return url
  const path = url.startsWith('/') ? url : `/${url}`
  return `${BASE_URL}${path}`
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.url),
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// ─── FAQ JSON-LD ───────────────────────────────────────────────────────────
interface FaqItem {
  question: string
  answer: string
}

export function FaqJsonLd({ faqs }: { faqs: FaqItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// ─── Article / Blog Post JSON-LD ──────────────────────────────────────────
interface ArticleJsonLdProps {
  title: string
  description: string
  author?: string
  authorUrl?: string
  datePublished: string
  dateModified?: string
  image: string
  url: string
}

export function ArticleJsonLd({
  title,
  description,
  author = AUTHOR_NAME,
  authorUrl,
  datePublished,
  dateModified,
  image,
  url,
}: ArticleJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: authorUrl
      ? { '@type': 'Person', '@id': `${authorUrl}#author`, name: author }
      : { '@type': 'Person', '@id': AUTHOR_ID, name: author },
    datePublished,
    dateModified: dateModified ?? datePublished,
    image: [image],
    publisher: {
      '@type': 'Organization',
      name: 'D.S HAIR & BEAUTY',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/apple-icon.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
