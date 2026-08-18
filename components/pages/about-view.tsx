import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Award, ShieldCheck, Truck, Users, Star, CheckCircle2 } from "lucide-react"
import { FaqJsonLd } from "@/components/seo/json-ld"
import { localeHref } from "@/lib/i18n/routing"
import type { Locale } from "@/lib/i18n/config"
import type { AboutContent } from "@/lib/i18n/pages/about"

const companyFaqs = [
  { question: "How long has D.S HAIR & BEAUTY been in business?", answer: "Our founder has been in the hair extension industry since 2007 — nearly 20 years of experience sourcing and supplying Remy human hair. D.S HAIR & BEAUTY was formally launched as a dedicated UK brand in 2022, combining decades of supply chain expertise with a professional salon-first approach." },
  { question: "Where is D.S HAIR & BEAUTY based?", answer: "We are based in Manchester, United Kingdom. Our Manchester base serves salons across the UK & EU with selected UK warehouse launching plus factory-direct express 3–5 day shipping on the full range." },
  { question: "What makes D.S HAIR different from other UK suppliers?", answer: "Three things set us apart: (1) we own the production — no middlemen means better prices, (2) we have 19 years of direct factory relationships in China's hair manufacturing heartland, and (3) we answer within 2 hours — not a ticketing system, a real person who knows your account." },
  { question: "Do you work directly with salons?", answer: "Yes. Professional salons are our core business. We offer trade accounts with preferential pricing, free digital colour matching for UK & EU salons, priority express dispatch, and dedicated account management. Apply through our Salon Partners page." },
  { question: "Is your hair ethically sourced?", answer: "Yes. All our hair is 100% Remy human hair, ethically sourced from trusted manufacturers with full supply chain traceability. Every batch is quality-checked before it leaves our facility. We never use synthetic blends or non-Remy hair." },
]

export function AboutView({ content, locale }: { content: AboutContent; locale: Locale }) {
  return (
    <CartProvider>
      <>
        <FaqJsonLd faqs={companyFaqs} />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {/* Hero Section */}
            <section className="relative h-[520px] md:h-[620px] flex items-center">
              <div className="absolute inset-0 z-0">
                <Image
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
                  alt="D.S HAIR & BEAUTY – Professional Hair Extension Supplier Manchester"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-transparent" />
              </div>
              <div className="container relative z-10 px-4 md:px-6">
                <div className="max-w-2xl text-white">
                  <p className="text-sm tracking-widest uppercase text-white/60 mb-4">{content.eyebrow}</p>
                  <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                    {content.heroTitle.split("\n").map((line, i, arr) => (
                      <span key={i}>
                        {line}
                        {i < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </h1>
                  <p className="text-lg text-white/80 leading-relaxed mb-8">{content.heroSubtitle}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <Link href={localeHref(content.ctaPrimaryHref, locale)}>{content.ctaPrimary}</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white bg-black/30 hover:bg-white hover:text-black" asChild>
                      <Link href={localeHref(content.ctaSecondaryHref, locale)}>{content.ctaSecondary}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Stats Bar */}
            <section className="bg-primary text-primary-foreground py-8">
              <div className="container px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  {content.stats.map((item) => (
                    <div key={item.label}>
                      <div className="text-3xl md:text-4xl font-bold mb-1">{item.stat}</div>
                      <div className="text-sm text-primary-foreground/70">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Founder Story */}
            <section className="py-16 md:py-24">
              <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                      alt="DS Hair Beauty founder story"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <p className="text-white font-semibold text-lg">D.S HAIR & BEAUTY</p>
                      <p className="text-white/70 text-sm">Manchester, United Kingdom</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm tracking-widest uppercase text-muted-foreground mb-3">{content.founderEyebrow}</p>
                    <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">{content.founderTitle}</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      {content.founderParas.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {content.founderPoints.map((point) => (
                        <div key={point} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Timeline */}
            <section className="py-16 md:py-24 bg-secondary">
              <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{content.timelineTitle}</h2>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{content.founderTitle}</p>
                </div>
                <div className="relative max-w-3xl mx-auto">
                  <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
                  <div className="space-y-8">
                    {content.timeline.map((item, i) => (
                      <div
                        key={item.year}
                        className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                      >
                        <div className={`hidden md:flex w-1/2 ${i % 2 === 0 ? "justify-end pr-10" : "justify-start pl-10"}`}>
                          <div className="bg-card rounded-xl p-5 shadow-sm max-w-xs">
                            <h3 className="font-semibold mb-1">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                        <div className="relative z-10 flex-shrink-0">
                          <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-md">
                            {item.year}
                          </div>
                        </div>
                        <div className="md:hidden flex-1 bg-card rounded-xl p-4 shadow-sm">
                          <h3 className="font-semibold mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                        <div className={`hidden md:flex w-1/2 ${i % 2 === 0 ? "justify-start pl-10" : "justify-end pr-10"}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Values */}
            <section className="py-16 md:py-24">
              <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{content.valuesTitle}</h2>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{content.valuesSubtitle}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {content.values.map((value) => (
                    <div key={value.title} className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <ValueIcon title={value.title} />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonial */}
            <section className="py-16 md:py-20 bg-secondary">
              <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center">
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-6">
                  &ldquo;{content.testimonialQuote}&rdquo;
                </blockquote>
                <p className="text-muted-foreground font-medium">{content.testimonialAuthor}</p>
              </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24">
              <div className="container px-4 md:px-6 text-center">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{content.ctaTitle}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">{content.ctaSubtitle}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href={localeHref("/salon-partners", locale)}>{content.ctaApply}</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href={localeHref(content.ctaBrowseHref, locale)}>{content.ctaBrowse}</Link>
                  </Button>
                </div>
              </div>
            </section>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </>
    </CartProvider>
  )
}

// Map the four value titles to their icons (icons are language-neutral)
function ValueIcon({ title }: { title: string }) {
  const map: Record<string, React.ReactNode> = {
    "19 Years of Expertise": <Award className="h-6 w-6 text-primary" />,
    "19 Jahre Erfahrung": <Award className="h-6 w-6 text-primary" />,
    "19 ans d'expertise": <Award className="h-6 w-6 text-primary" />,
    "19 عاماً من الخبرة": <Award className="h-6 w-6 text-primary" />,
    "19 års erfarenhet": <Award className="h-6 w-6 text-primary" />,
    "19 lat doświadczenia": <Award className="h-6 w-6 text-primary" />,
    "100% Remy Human Hair": <ShieldCheck className="h-6 w-6 text-primary" />,
    "100 % Remy Menschenhaar": <ShieldCheck className="h-6 w-6 text-primary" />,
    "100 % cheveux humains Remy": <ShieldCheck className="h-6 w-6 text-primary" />,
    "100% شعر بشري ريمي": <ShieldCheck className="h-6 w-6 text-primary" />,
    "100 % Remy människohår": <ShieldCheck className="h-6 w-6 text-primary" />,
    "100% włosy Remy": <ShieldCheck className="h-6 w-6 text-primary" />,
    "Factory-Direct, Express Supply": <Truck className="h-6 w-6 text-primary" />,
    "Fabrikdirekt, Express-Versand": <Truck className="h-6 w-6 text-primary" />,
    "Direct usine, livraison express": <Truck className="h-6 w-6 text-primary" />,
    "مباشر من المصنع، توصيل سريع": <Truck className="h-6 w-6 text-primary" />,
    "Fabriksdirect, expressleverans": <Truck className="h-6 w-6 text-primary" />,
    "Bezpośrednio z fabryki, ekspresowa dostawa": <Truck className="h-6 w-6 text-primary" />,
    "Salon Partner Programme": <Users className="h-6 w-6 text-primary" />,
    "Partner-Programm": <Users className="h-6 w-6 text-primary" />,
    "Programme partenaire": <Users className="h-6 w-6 text-primary" />,
    "برنامج الشراكة": <Users className="h-6 w-6 text-primary" />,
    "Partnerprogram": <Users className="h-6 w-6 text-primary" />,
    "Program partnerski": <Users className="h-6 w-6 text-primary" />,
  }
  return <>{map[title] ?? <Users className="h-6 w-6 text-primary" />}</>
}
