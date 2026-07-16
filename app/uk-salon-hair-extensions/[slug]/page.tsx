import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, CheckCircle, MapPin, Search } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { getSeoPage, seoPages } from "@/lib/seo-pages"

const BASE_URL = "https://www.dshairbeauty.co.uk"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return seoPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = getSeoPage(slug)

  if (!page) {
    return {}
  }

  const url = `${BASE_URL}/uk-salon-hair-extensions/${page.slug}`

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: [page.keyword, "hair extensions wholesale UK", "salon hair extension supplier", "trade hair extensions"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url,
      siteName: "D.S Hair Beauty",
      type: "website",
      locale: "en_GB",
    },
  }
}

export default async function SalonSeoPage({ params }: PageProps) {
  const { slug } = await params
  const page = getSeoPage(slug)

  if (!page) {
    notFound()
  }

  const pageUrl = `${BASE_URL}/uk-salon-hair-extensions/${page.slug}`

  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                name: page.title,
                headline: page.h1,
                description: page.metaDescription,
                url: pageUrl,
                inLanguage: "en-GB",
                publisher: {
                  "@type": "Organization",
                  name: "D.S Hair Beauty",
                  url: BASE_URL,
                },
                mainEntity: page.faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              }),
            }}
          />

          <section className="bg-[#4A1942] text-white">
            <div className="container px-4 md:px-6 py-16 md:py-24">
              <div className="max-w-4xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-amber-200">
                  {page.intent === "GEO" ? <MapPin className="h-4 w-4" /> : <Search className="h-4 w-4" />}
                  {page.intent} · {page.keyword}
                </div>
                <h1 className="font-serif text-4xl md:text-6xl font-medium leading-tight">{page.h1}</h1>
                <p className="mt-6 max-w-3xl text-lg md:text-xl text-white/82 leading-relaxed">{page.intro}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/salon-partners">
                      {page.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link href="/contact">Talk to the Team</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b bg-[#FDF8F0]">
            <div className="container px-4 md:px-6 py-3">
              <nav className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-[#4A1942]">Home</Link>
                <span>/</span>
                <Link href="/trade-wholesale" className="hover:text-[#4A1942]">Trade Wholesale</Link>
                <span>/</span>
                <span className="font-medium text-[#4A1942]">{page.title}</span>
              </nav>
            </div>
          </section>

          <section className="container px-4 md:px-6 py-14 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
              <article className="space-y-10">
                {page.sections.map((section) => (
                  <section key={section.heading} className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
                    <h2 className="font-serif text-2xl md:text-3xl text-[#4A1942]">{section.heading}</h2>
                    <p className="mt-4 text-muted-foreground leading-7">{section.body}</p>
                  </section>
                ))}

                <section className="rounded-2xl border bg-[#FDF8F0] p-6 md:p-8">
                  <h2 className="font-serif text-2xl md:text-3xl text-[#4A1942]">What salons should know</h2>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {page.bullets.map((bullet) => (
                      <div key={bullet} className="flex gap-3 rounded-xl bg-white p-4">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                        <span className="text-sm text-muted-foreground">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
                  <h2 className="font-serif text-2xl md:text-3xl text-[#4A1942]">FAQ</h2>
                  <div className="mt-6 divide-y">
                    {page.faqs.map((faq) => (
                      <div key={faq.question} className="py-5 first:pt-0 last:pb-0">
                        <h3 className="font-semibold text-[#4A1942]">{faq.question}</h3>
                        <p className="mt-2 text-muted-foreground leading-7">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </article>

              <aside className="lg:sticky lg:top-24 h-fit rounded-2xl border bg-white p-6 shadow-sm">
                <h2 className="font-serif text-2xl text-[#4A1942]">Next step</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-6">
                  Use this page to qualify your salon, request trade pricing, or ask for help choosing the right extension method.
                </p>
                <Button className="mt-5 w-full bg-[#4A1942] hover:bg-[#35122f]" asChild>
                  <Link href="/salon-partners">{page.cta}</Link>
                </Button>
                <div className="mt-6 border-t pt-5">
                  <h3 className="text-sm font-semibold text-[#4A1942]">Useful links</h3>
                  <div className="mt-3 space-y-2">
                    {page.internalLinks.map((link) => (
                      <Link key={link.href} href={link.href} className="block text-sm text-muted-foreground hover:text-[#4A1942]">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </section>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
