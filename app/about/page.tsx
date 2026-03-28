import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Award, ShieldCheck, Truck, Users, Star, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "About Us | D.S HAIR & BEAUTY – Manchester's Premier Hair Extension Supplier",
  description:
    "19 years of hair extension expertise. D.S HAIR & BEAUTY is Manchester's trusted wholesale supplier of 100% Remy human hair extensions for professional salons.",
}

const values = [
  {
    icon: Award,
    title: "19 Years of Expertise",
    description:
      "Since 2007, we have built deep relationships with China's top Remy hair manufacturers — giving our salon partners access to factory-direct quality at wholesale prices.",
  },
  {
    icon: ShieldCheck,
    title: "100% Remy Human Hair",
    description:
      "Every strand is ethically sourced, cuticle-aligned, and quality-checked before it reaches your salon. No synthetic blends, no shortcuts.",
  },
  {
    icon: Truck,
    title: "Manchester-Based, Fast Supply",
    description:
      "We are local. Same-day or next-day supply for Manchester salons. No waiting weeks for stock from overseas.",
  },
  {
    icon: Users,
    title: "Salon Partner Programme",
    description:
      "Join our growing network of professional salons across Manchester and the Northwest. Trade pricing, free colour matching kit, and dedicated support.",
  },
]

const timeline = [
  {
    year: "2007",
    title: "Started in the industry",
    desc: "Began supplying Remy human hair to UK wholesalers, building deep factory relationships in China's hair capital.",
  },
  {
    year: "2015",
    title: "First direct UK salon clients",
    desc: "Started working directly with professional salons, cutting out middlemen and delivering better quality at lower prices.",
  },
  {
    year: "2022",
    title: "D.S HAIR & BEAUTY founded",
    desc: "Launched as a dedicated UK brand, combining 15 years of supply chain expertise with a professional salon-first approach.",
  },
  {
    year: "2026",
    title: "Manchester Salon Partner Launch",
    desc: "Opened our Manchester hub. Now supplying hand-tied wefts, balayage extensions, and professional consumables to salons across the Northwest.",
  },
]

export default function AboutPage() {
  return (
    <CartProvider>
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
                <p className="text-sm tracking-widest uppercase text-white/60 mb-4">Our Story</p>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                  19 Years of Hair.<br />One Obsession: Your Results.
                </h1>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  From China&apos;s hair manufacturing heartland to Manchester&apos;s finest salons — we bridge the gap between factory quality and salon excellence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/salon-partners">Become a Salon Partner</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black" asChild>
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Key Stats Bar */}
          <section className="bg-primary text-primary-foreground py-8">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { stat: "19+", label: "Years in the Industry" },
                  { stat: "100%", label: "Remy Human Hair" },
                  { stat: "50+", label: "Colours & Lengths" },
                  { stat: "24hr", label: "Manchester Delivery" },
                ].map((item) => (
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
                  <p className="text-sm tracking-widest uppercase text-muted-foreground mb-3">The Founder</p>
                  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
                    Built on 19 Years of Real Industry Experience
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      D.S HAIR & BEAUTY was founded by a hair industry specialist with over 19 years of experience in Remy human hair sourcing and export. Having spent nearly two decades working directly with China&apos;s leading hair manufacturers and supplying to UK markets, our founder saw a clear gap: Manchester&apos;s professional salons needed a local, reliable, and truly knowledgeable supplier.
                    </p>
                    <p>
                      Most suppliers are middlemen. We are not. Our direct factory relationships mean you get better quality, more consistent colour matching, and faster supply — at trade prices that make your salon business more profitable.
                    </p>
                    <p>
                      We specialise in the products that white hair salons in Manchester actually need: <strong>hand-tied wefts, balayage extensions, nano rings, and tape-ins</strong> — the methods that demand the best human hair to deliver results your clients will rave about.
                    </p>
                  </div>
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Direct factory relationships in China",
                      "Specialist in hand-tied & tape-in wefts",
                      "Free colour matching for every salon",
                      "Manchester local, next-day supply",
                      "Custom balayage & colour blending",
                      "Professional consumables included",
                    ].map((point) => (
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
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Our Journey</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  From a small export operation to Manchester&apos;s go-to professional hair extension supplier.
                </p>
              </div>
              <div className="relative max-w-3xl mx-auto">
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
                <div className="space-y-8">
                  {timeline.map((item, i) => (
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
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Why Salons Choose Us</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  We are not just a supplier. We are your hair extension partner.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value) => (
                  <div key={value.title} className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
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
                &ldquo;The hand-tied wefts from DS Hair are honestly the best I&apos;ve worked with in 10 years. The colour matching is spot on and delivery is always next day. My clients love the results.&rdquo;
              </blockquote>
              <p className="text-muted-foreground font-medium">— Hair Extension Specialist, Manchester</p>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6 text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
                Ready to Partner With Us?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                Join Manchester&apos;s growing network of salons working with DS Hair & Beauty. Apply for your trade account today — free colour matching kit included with your first order.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/salon-partners">Apply for Trade Account</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/collections/professional">Browse Professional Products</Link>
                </Button>
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
