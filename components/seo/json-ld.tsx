// JSON-LD Structured Data Components for SEO
// Supports: Organization, LocalBusiness, Product, BreadcrumbList, WebSite, FAQ, Article

const BASE_URL = 'https://www.dshairbeauty.co.uk'

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
          "Manchester's trusted wholesale hair extension supplier. 100% Remy human hair — hand-tied weft, balayage, nano ring, tape-in, K-tip, butterfly weft & toppers. Trade pricing for professional salons. 19 years industry experience. Same-day dispatch for UK orders.",
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
      "Manchester's trusted wholesale hair extension supplier. 100% Remy human hair — hand-tied weft, balayage, nano ring, tape-in, K-tip, butterfly weft & toppers. Trade pricing for professional salons. 19 years industry experience. Same-day dispatch for UK orders.",
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
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'GB',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 30,
        returnMethod: 'https://schema.org.ReturnByMail',
        returnFees: 'https://schema.org/freeReturn',
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'GB',
        },
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: product.price >= 50 ? '0' : '4.99',
          currency: 'GBP',
        },
        handlingTime: {
          '@type': 'QuantitativeValue',
          minValue: 1,
          maxValue: 3,
          unitCode: 'DAY',
        },
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

// ─── Breadcrumb JSON-LD ───────────────────────────────────────────────────
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
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
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
  author: string
  datePublished: string
  dateModified?: string
  image: string
  url: string
}

export function ArticleJsonLd({
  title,
  description,
  author,
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
    author: {
      '@type': 'Person',
      name: author,
    },
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

// ─── Service JSON-LD (for service pages) ──────────────────────────────────
export function ServiceJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Wholesale Hair Extension Supply',
    provider: {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'D.S HAIR & BEAUTY',
    },
    areaServed: [
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'City', name: 'Manchester' },
      { '@type': 'City', name: 'London' },
      { '@type': 'City', name: 'Birmingham' },
      { '@type': 'City', name: 'Liverpool' },
      { '@type': 'City', name: 'Leeds' },
      { '@type': 'City', name: 'Sheffield' },
      { '@type': 'City', name: 'Bristol' },
      { '@type': 'City', name: 'Edinburgh' },
      { '@type': 'City', name: 'Glasgow' },
      { '@type': 'City', name: 'Cardiff' },
      { '@type': 'City', name: 'Nottingham' },
      { '@type': 'City', name: 'Newcastle' },
    ],
    description:
      'Wholesale supply of 100% Remy human hair extensions to professional salons across the UK. Tape-In, K-Tip, Nano Ring, Hand-Tied Weft, Butterfly Weft, Clip-In, Ponytail, and Hair Toppers with factory-direct pricing and same-day dispatch.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Hair Extension Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wholesale Tape-In Hair Extensions Supply', description: 'Factory-direct wholesale tape-in hair extensions for UK salons. 100% Remy human hair, reusable, 6-8 weeks wear.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wholesale K-Tip / Keratin Bond Extensions Supply', description: 'Factory-direct wholesale K-tip keratin bond extensions. Long-lasting, natural-looking, 3-6 months wear.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wholesale Nano Ring Extensions Supply', description: 'Factory-direct wholesale nano ring extensions. Virtually invisible, perfect for fine hair.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wholesale Hand-Tied Weft Extensions Supply', description: 'Factory-direct wholesale hand-tied weft extensions. Ultra-flat lay, maximum volume.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wholesale Butterfly Weft Extensions Supply', description: 'Factory-direct wholesale butterfly weft extensions. 0.5mm ultra-thin base, completely undetectable.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Free Colour Matching Service', description: 'Free specialist hair extension colour matching via WhatsApp or photo upload. Response within 2 hours.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Salon Trade Account Program', description: 'Exclusive wholesale pricing, priority stock access, and dedicated support for professional UK salons.' } },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// ─── Review / AggregateRating JSON-LD ─────────────────────────────────────
export function ReviewJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'D.S HAIR & BEAUTY',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '856',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'Manchester Salon Owner' },
        reviewBody: 'Best wholesale hair extension supplier in Manchester. Factory-direct pricing, same-day dispatch, and the quality is consistently excellent. Our clients love the Remy hair.',
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'London Hair Stylist' },
        reviewBody: 'We switched to D.S Hair Beauty for our London salon and never looked back. Next-day delivery, incredible quality, and the colour matching service is spot on.',
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
