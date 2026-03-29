// JSON-LD Structured Data Components for SEO
// Supports: Organization, LocalBusiness, Product, BreadcrumbList, WebSite

const BASE_URL = 'https://www.dshairbeauty.co.uk'

// ─── Organisation / Local Business (for homepage) ────────────────────────────
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
          url: `${BASE_URL}/logo.png`,
          width: 400,
          height: 100,
        },
        description:
          'Manchester-based wholesale hair extension supplier. 100% Remy human hair — hand-tied weft, balayage, nano ring, tape-in. Trade pricing for professional salons. 19 years industry experience.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Manchester',
          addressRegion: 'Greater Manchester',
          addressCountry: 'GB',
        },
        areaServed: {
          '@type': 'Country',
          name: 'United Kingdom',
        },
        telephone: '+44-7780-480868',
        email: 'info@dshairbeauty.co.uk',
        sameAs: [
          'https://www.instagram.com/dshairbeauty',
        ],
        foundingDate: '2006',
        numberOfEmployees: {
          '@type': 'QuantitativeValue',
          value: '5',
        },
        knowsAbout: [
          'Hair Extensions',
          'Remy Human Hair',
          'Hand-Tied Weft',
          'Balayage Extensions',
          'Nano Ring Extensions',
          'Tape-In Extensions',
          'K-Tip Extensions',
          'Wholesale Hair Supplier',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: 'D.S HAIR & BEAUTY',
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

// ─── Product JSON-LD ─────────────────────────────────────────────────────────
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
}

export function ProductJsonLd({ product }: ProductJsonLdProps) {
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
    },
    ...(product.reviews > 0 && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: product.rating,
        reviewCount: product.reviews,
        bestRating: 5,
        worstRating: 1,
      },
    }),
    category: product.category,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// ─── Breadcrumb JSON-LD ───────────────────────────────────────────────────────
interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// ─── FAQ JSON-LD ─────────────────────────────────────────────────────────────
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
