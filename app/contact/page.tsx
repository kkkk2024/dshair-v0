import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { ContactForm } from "@/components/contact/contact-form"
import { Mail, MapPin, Clock, MessageCircle, Building2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Contact Us | D.S HAIR & BEAUTY",
  description:
    "Get in touch with D.S HAIR & BEAUTY. WhatsApp, email or enquiry form — we respond within 24 hours. Manchester-based hair extension supplier for professional salons.",
}

const contactCards = [
  {
    icon: MessageCircle,
    title: "WhatsApp / WeChat",
    content: "+86 135 1694 6001",
    description: "Fastest response — typically within 2 hours",
    action: {
      label: "Chat on WhatsApp",
      href: "https://wa.me/8613516946001?text=Hi%20D.S%20HAIR%20%26%20BEAUTY!%20I%27m%20interested%20in%20wholesale%20hair%20extensions%20for%20my%20salon.",
      external: true,
    },
    highlight: true,
  },
  {
    icon: Mail,
    title: "Email",
    content: "caro@dshairbeauty.co.uk",
    description: "We respond within 24 hours",
    action: {
      label: "Send Email",
      href: "mailto:caro@dshairbeauty.co.uk",
      external: true,
    },
    highlight: false,
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Manchester, UK",
    description: "Serving salons across Greater Manchester & Northwest England",
    action: null,
    highlight: false,
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon – Sat, 9am – 6pm GMT",
    description: "Urgent enquiries answered via WhatsApp any time",
    action: null,
    highlight: false,
  },
]

export default function ContactPage() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">

          {/* Page Header */}
          <section className="bg-secondary py-16 md:py-20">
            <div className="container px-4 md:px-6 text-center max-w-2xl mx-auto">
              <p className="text-sm tracking-widest uppercase text-muted-foreground mb-3">Get in Touch</p>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">Contact Us</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you are a salon owner looking for a wholesale partner, or a customer with a product question — we are here to help.
              </p>
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
                    <p className="font-semibold text-green-900">Salon owners — fastest route to trade pricing</p>
                    <p className="text-sm text-green-700">Message us on WhatsApp and get a response within 2 hours</p>
                  </div>
                </div>
                <Button
                  className="bg-green-500 hover:bg-green-600 text-white flex-shrink-0"
                  asChild
                >
                  <a
                    href="https://wa.me/8613516946001?text=Hi%20D.S%20HAIR%20%26%20BEAUTY!%20I%27m%20a%20salon%20owner%20in%20Manchester%20and%20I%27m%20interested%20in%20your%20wholesale%20hair%20extension%20supply."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp Us Now
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
                  <h2 className="font-serif text-2xl md:text-3xl font-medium mb-8">Contact Information</h2>
                  <div className="space-y-4">
                    {contactCards.map((card) => (
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
                          <card.icon className={`h-5 w-5 ${card.highlight ? "text-white" : "text-primary"}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm text-muted-foreground mb-0.5">{card.title}</h3>
                          <p className="font-medium text-foreground">{card.content}</p>
                          <p className="text-sm text-muted-foreground mt-0.5">{card.description}</p>
                          {card.action && (
                            <a
                              href={card.action.href}
                              target={card.action.external ? "_blank" : undefined}
                              rel={card.action.external ? "noopener noreferrer" : undefined}
                              className={`inline-block mt-2 text-sm font-medium underline underline-offset-2 ${
                                card.highlight ? "text-green-700 hover:text-green-900" : "text-primary hover:text-primary/80"
                              }`}
                            >
                              {card.action.label} →
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Salon Partner CTA */}
                  <div className="mt-8 rounded-xl bg-primary text-primary-foreground p-6">
                    <div className="flex gap-3 items-start">
                      <Building2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-1">Are you a salon owner?</h3>
                        <p className="text-sm text-primary-foreground/80 mb-3">
                          Apply for a trade account and get wholesale pricing, free colour matching kit, and dedicated support.
                        </p>
                        <Button variant="secondary" size="sm" asChild>
                          <Link href="/salon-partners">Apply for Trade Account →</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Form */}
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-medium mb-8">Send Us a Message</h2>
                  <ContactForm />
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
