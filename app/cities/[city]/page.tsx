import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { cities, getCityBySlug } from "@/lib/city-data"
import { BreadcrumbJsonLd, FaqJsonLd, LocalBusinessJsonLd } from "@/components/seo/json-ld"
import { Clock, Truck, MapPin, Award, ShieldCheck, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react"

interface CityPageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }))
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params
  const city = getCityBySlug(slug)
  if (!city) return {}

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    keywords: city.keywords,
    alternates: {
      canonical: `https://www.dshairbeauty.co.uk/cities/${city.slug}`,
    },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `https://www.dshairbeauty.co.uk/cities/${city.slug}`,
      type: 'website',
      locale: 'en_GB',
      siteName: 'D.S HAIR & BEAUTY',
    },
    twitter: {
      card: 'summary_large_image',
      title: city.metaTitle,
      description: city.metaDescription,
    },
  }
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params
  const city = getCityBySlug(slug)
  if (!city) notFound()

  const baseUrl = "https://www.dshairbeauty.co.uk"
  const pageUrl = `${baseUrl}/cities/${city.slug}`

  // City-specific LocalBusiness JSON-LD
  const cityLocalBusiness = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Organization'],
    '@id': `${baseUrl}/#organization`,
    name: 'D.S HAIR & BEAUTY',
    url: baseUrl,
    description: city.metaDescription,
    areaServed: {
      '@type': 'City',
      name: city.name,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Manchester',
      addressRegion: 'Greater Manchester',
      addressCountry: { '@type': 'Country', name: 'GB' },
    },
    telephone: '+44-7780-480868',
    priceRange: '££',
  }

  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        {/* Structured Data */}
        <BreadcrumbJsonLd items={[
          { name: "Home", url: baseUrl },
          { name: `${city.name}`, url: pageUrl },
        ]} />
        <FaqJsonLd faqs={city.faqs} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cityLocalBusiness) }}
        />

        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative bg-[#4A1942] text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: "radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 80% 50%, #7B3A6E 0%, transparent 50%)"
              }} />
            </div>
            <div className="relative max-w-4xl mx-auto px-4 md:px-6 py-20 md:py-28 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm mb-6 text-amber-300">
                <MapPin className="h-4 w-4" />
                {city.name}, {city.region}
              </div>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                {city.h1}
              </h1>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                {city.introParagraph}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/trade-wholesale">Open a Trade Account</Link>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link href="/collections/all">Shop Extensions</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Trust Badges */}
          <section className="py-12 border-b">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <Award className="h-8 w-8 mx-auto mb-2 text-amber-600" />
                  <p className="text-sm font-medium">19 Years Expertise</p>
                </div>
                <div className="text-center">
                  <ShieldCheck className="h-8 w-8 mx-auto mb-2 text-amber-600" />
                  <p className="text-sm font-medium">100% Remy Human Hair</p>
                </div>
                <div className="text-center">
                  <Truck className="h-8 w-8 mx-auto mb-2 text-amber-600" />
                  <p className="text-sm font-medium">{city.deliveryTime}</p>
                </div>
                <div className="text-center">
                  <Clock className="h-8 w-8 mx-auto mb-2 text-amber-600" />
                  <p className="text-sm font-medium">Same-Day Dispatch</p>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6 max-w-4xl">
              <h2 className="font-serif text-3xl font-medium mb-6">
                Wholesale Hair Extensions in {city.name}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {city.localSalonScene}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                D.S HAIR & BEAUTY provides {city.name} salons with a comprehensive range of 100% Remy human hair extensions at factory-direct wholesale prices. Our {city.distanceFromManchester === '0 miles (headquarters)' ? 'Manchester headquarters ensures' : 'Manchester base ensures'} {city.deliveryTime.toLowerCase()}, so your salon never runs out of stock.
              </p>

              {/* Popular Methods */}
              <h3 className="font-serif text-2xl font-medium mb-4">
                Popular Hair Extension Methods in {city.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {city.popularMethods.map((method) => (
                  <div key={method} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{method} Extensions</p>
                      <p className="text-sm text-muted-foreground">
                        Available at wholesale prices with trade account
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Why Choose Us */}
              <h3 className="font-serif text-2xl font-medium mb-4">
                Why {city.name} Salons Choose D.S HAIR & BEAUTY
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Factory-direct pricing:</strong> No middleman markups — we source directly from China's top Remy hair manufacturers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span><strong>100% Remy human hair:</strong> Every strand is cuticle-aligned, ethically sourced, and quality-checked</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span><strong>{city.deliveryTime}:</strong> Fast, reliable delivery to all {city.name} postcodes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Free colour matching:</strong> Specialist colour matching via WhatsApp or photo upload</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span><strong>No minimum orders:</strong> Order what you need, when you need it</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span><strong>19 years of expertise:</strong> Trusted by 500+ UK salons since 2007</span>
                </li>
              </ul>

              {/* Product Range */}
              <h3 className="font-serif text-2xl font-medium mb-4">
                Our Hair Extension Range for {city.name} Salons
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {[
                  { name: 'Tape-In Extensions', desc: 'Seamless, reusable, 6-8 weeks wear', url: '/collections/tape-in' },
                  { name: 'K-Tip / Keratin Bond', desc: 'Long-lasting, natural-looking, 3-6 months', url: '/collections/k-tip' },
                  { name: 'Nano Ring Extensions', desc: 'Virtually invisible, perfect for fine hair', url: '/collections/nano-ring' },
                  { name: 'Hand-Tied Weft', desc: 'Maximum volume, ultra-flat lay', url: '/collections/weft' },
                  { name: 'Butterfly Weft', desc: '0.5mm base, completely undetectable', url: '/collections/butterfly-weft' },
                  { name: 'Clip-In Extensions', desc: 'Instant volume, zero commitment', url: '/collections/clip-in' },
                  { name: 'Ponytail Extensions', desc: 'Instant length, one-piece application', url: '/collections/ponytails' },
                  { name: 'Hair Toppers', desc: 'Volume and coverage solutions', url: '/collections/hair-toppers' },
                ].map((product) => (
                  <Link
                    key={product.name}
                    href={product.url}
                    className="flex items-center justify-between p-4 rounded-lg border bg-card hover:border-amber-400 hover:shadow-sm transition-all group"
                  >
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{product.desc}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-amber-600 transition-colors" />
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-[#4A1942] to-[#7B3A6E] rounded-2xl p-8 text-center text-white mb-12">
                <h3 className="font-serif text-2xl font-medium mb-3">
                  Ready to Get Wholesale Pricing for Your {city.name} Salon?
                </h3>
                <p className="text-white/80 mb-6 max-w-xl mx-auto">
                  Open a trade account today and get factory-direct pricing on 100% Remy human hair extensions.
                  {city.deliveryTime}.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/trade-wholesale">Open Trade Account</Link>
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <a href="https://wa.me/447780480868" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </div>

              {/* FAQs */}
              <h2 className="font-serif text-3xl font-medium mb-6">
                Hair Extensions {city.name} — Frequently Asked Questions
              </h2>
              <div className="space-y-6 mb-12">
                {city.faqs.map((faq) => (
                  <div key={faq.question} className="border-b pb-6">
                    <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>

              {/* Other Cities */}
              <h3 className="font-serif text-2xl font-medium mb-4">
                We Also Supply Hair Extensions to These UK Cities
              </h3>
              <div className="flex flex-wrap gap-2">
                {cities.filter(c => c.slug !== city.slug).map((c) => (
                  <Link
                    key={c.slug}
                    href={`/cities/${c.slug}`}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-sm border hover:border-amber-400 hover:bg-amber-50 transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
