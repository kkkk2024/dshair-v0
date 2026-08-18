import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Clock, MessageCircle, Building2 } from "lucide-react"
import { ContactForm } from "@/components/contact/contact-form"
import { LocalBusinessJsonLd } from "@/components/seo/json-ld"
import { localeHref } from "@/lib/i18n/routing"
import { contactFormLabels } from "@/lib/i18n/pages/contact-form"
import type { Locale } from "@/lib/i18n/config"
import type { ContactContent } from "@/lib/i18n/pages/contact"

const WA_HREF =
  "https://wa.me/8613516946001?text=Hi%20D.S%20HAIR%20%26%20BEAUTY!%20I%27m%20interested%20in%20wholesale%20hair%20extensions%20for%20my%20salon."
const WA_SALON_HREF =
  "https://wa.me/8613516946001?text=Hi%20D.S%20HAIR%20%26%20BEAUTY!%20I%27m%20a%20salon%20owner%20in%20Manchester%20and%20I%27m%20interested%20in%20your%20wholesale%20hair%20extension%20supply."
const MAIL_HREF = "mailto:caro@dshairbeauty.co.uk"

const cardIcons = [MessageCircle, Mail, MapPin, Clock]

export function ContactView({ content, locale }: { content: ContactContent; locale: Locale }) {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <LocalBusinessJsonLd />
        <main className="flex-1">
          {/* Page Header */}
          <section className="bg-secondary py-16 md:py-20">
            <div className="container px-4 md:px-6 text-center max-w-2xl mx-auto">
              <p className="text-sm tracking-widest uppercase text-muted-foreground mb-3">{content.eyebrow}</p>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">{content.heroTitle}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{content.heroSubtitle}</p>
            </div>
          </section>

          {/* WhatsApp Banner — Salon Focused */}
          <section className="bg-green-50 border-y border-green-200 py-6">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-green-900">{content.bannerTitle}</p>
                    <p className="text-sm text-green-700">{content.bannerSub}</p>
                  </div>
                </div>
                <Button className="bg-green-500 hover:bg-green-600 text-white flex-shrink-0" asChild>
                  <a href={WA_SALON_HREF} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    {content.bannerButton}
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Contact Cards + Form */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Left: Contact Info */}
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-medium mb-8">{content.infoHeading}</h2>
                  <div className="space-y-4">
                    {content.cards.map((card, i) => {
                      const Icon = cardIcons[i] ?? MessageCircle
                      const actionHref = i === 0 ? WA_HREF : i === 1 ? MAIL_HREF : ""
                      return (
                        <div
                          key={card.title}
                          className={`rounded-xl p-5 border flex gap-4 items-start ${
                            card.highlight ? "bg-green-50 border-green-200" : "bg-card"
                          }`}
                        >
                          <div
                            className={`h-11 w-11 rounded-full flex items-center justify-center flex-shrink-0 ${
                              card.highlight ? "bg-green-500" : "bg-primary/10"
                            }`}
                          >
                            <Icon className={`h-5 w-5 ${card.highlight ? "text-white" : "text-primary"}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm text-muted-foreground mb-0.5">{card.title}</h3>
                            <p className="font-medium text-foreground">{card.content}</p>
                            <p className="text-sm text-muted-foreground mt-0.5">{card.description}</p>
                            {card.actionLabel && actionHref && (
                              <a
                                href={actionHref}
                                target={i === 0 ? "_blank" : undefined}
                                rel={i === 0 ? "noopener noreferrer" : undefined}
                                className={`inline-block mt-2 text-sm font-medium underline underline-offset-2 ${
                                  card.highlight ? "text-green-700 hover:text-green-900" : "text-primary hover:text-primary/80"
                                }`}
                              >
                                {card.actionLabel} →
                              </a>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Salon Partner CTA */}
                  <div className="mt-8 rounded-xl bg-primary text-primary-foreground p-6">
                    <div className="flex gap-3 items-start">
                      <Building2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-1">{content.salonCtaTitle}</h3>
                        <p className="text-sm text-primary-foreground/80 mb-3">{content.salonCtaDesc}</p>
                        <Button variant="secondary" size="sm" asChild>
                          <Link href={localeHref(content.salonCtaHref, locale)}>{content.salonCtaButton}</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Form */}
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-medium mb-8">{content.formHeading}</h2>
                  <ContactForm labels={contactFormLabels[locale]} />
                </div>
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
