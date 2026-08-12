import { Header } from "@/components/layout/header"
import { BlogJsonLd } from "@/components/seo/blog-jsonld"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle, ArrowRight, GraduationCap, Users, BadgePercent } from "lucide-react"
import { ArticleJsonLd, FaqJsonLd } from "@/components/seo/json-ld"

export const metadata = {
  title: "How to Start Selling Hair Extensions in Your Salon (Step-by-Step) | D.S Hair Beauty",
  description:
    "A practical step-by-step plan for salon owners to launch hair extension services: training, supplier setup, consultation process, pricing, and marketing to existing clients — without overstocking.",
  openGraph: {
    title: "How to Start Selling Hair Extensions in Your Salon (Step-by-Step) | D.S Hair Beauty",
    description: "Launch extension services in your salon: training, supplier, consultation, pricing, and marketing. A practical plan for salon owners.",
    url: "https://www.dshairbeauty.co.uk/blog/how-to-start-selling-hair-extensions-salon",
    siteName: "D.S Hair Beauty",
    images: [
      {
        url: "https://images.unsplash.com/photo-1595476108010-b4d7c3497807?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "How to start selling hair extensions in your salon",
      },
    ],
    type: "article" as const,
    publishedTime: "2026-08-03",
  },
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/blog/how-to-start-selling-hair-extensions-salon",
  },
}

const faqs = [
  {
    question: "Do I need a qualification to offer hair extensions in my salon?",
    answer:
      "You need to be competent in the method you offer — tape-in, weft, nano ring, or K-tip each require specific training. Many salons send one or two stylists on a certified extension course first, then train the rest in-house. Competence protects your clients and your reputation.",
  },
  {
    question: "How much does it cost to start offering extensions?",
    answer:
      "With a no-minimum-order trade supplier you can start with almost no inventory — just a digital colour catalogue and a sample of your best-selling shades. Your main cost is stylist training. You only buy product once a client has booked, so cash risk is very low.",
  },
  {
    question: "Which method should I start with?",
    answer:
      "Tape-in and hand-tied weft are the most popular starting points for salons: they suit the widest range of clients, are relatively quick to apply, and have strong re-order cycles. Add nano ring and K-tip once you see demand for more permanent options.",
  },
  {
    question: "How do I price extension services?",
    answer:
      "Charge separately for the hair (at your trade cost marked up) and the application (your service fee). A full-head application typically runs £150–400 in service fees plus the cost of hair. See our profit margin guide for the exact maths per method.",
  },
  {
    question: "How do I get my first extension clients?",
    answer:
      "Start with your existing client base — many already want length or volume. Offer a free consultation, show before/afters on social, and use a digital colour catalogue so clients can pick shades in-chair. Warm clients convert far better than cold ads.",
  },
]

export default function HowToStartSellingHairExtensionsSalon() {
  return (
    <CartProvider>
      <BlogJsonLd slug="how-to-start-selling-hair-extensions-salon" />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <ArticleJsonLd
            title="How to Start Selling Hair Extensions in Your Salon (Step-by-Step)"
            description="A practical step-by-step plan for salon owners to launch hair extension services: training, supplier setup, consultation process, pricing, and marketing to existing clients — without overstocking."
            authorUrl="https://www.dshairbeauty.co.uk/about/caro-chen"
            datePublished="2026-08-03"
            image="https://images.unsplash.com/photo-1595476108010-b4d7c3497807?w=1200&q=80"
            url="https://www.dshairbeauty.co.uk/blog/how-to-start-selling-hair-extensions-salon"
          />
          <FaqJsonLd faqs={faqs} />

          <section className="relative bg-[#4A1942] text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 80% 50%, #7B3A6E 0%, transparent 50%)",
                }}
              />
            </div>
            <div className="relative max-w-4xl mx-auto px-4 md:px-6 py-20 md:py-28 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm mb-6 text-amber-300">
                Launch Plan
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                How to Start Selling Hair Extensions in Your Salon
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                A practical, low-risk launch plan — from stylist training to your first booked client, without
                tying up cash in stock you can't sell.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/trade-wholesale">Set Up Your Supplier</Link>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link href="/blog">More Guides</Link>
                </Button>
              </div>
            </div>
          </section>

          <div className="bg-[#FDF8F0] border-b border-amber-100">
            <div className="max-w-5xl mx-auto px-4 py-3">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-[#4A1942]">Home</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-[#4A1942]">Blog</Link>
                <span>/</span>
                <span className="text-[#4A1942] font-medium">Start Selling Extensions</span>
              </nav>
            </div>
          </div>

          <article className="max-w-4xl mx-auto px-4 md:px-6 py-16">
            <div className="flex items-center gap-3 mb-8 p-4 bg-[#FDF8F0] border border-amber-100 rounded-xl not-prose">
              <div className="w-10 h-10 rounded-full bg-[#4A1942] text-white flex items-center justify-center font-medium text-sm shrink-0">CC</div>
              <p className="text-sm text-[#6B3A6E]">
                Written by <Link href="/about/caro-chen" className="text-[#4A1942] font-semibold underline">Caro Chen</Link>, Founder &amp; Trade Director at D.S Hair &amp; Beauty · 19 years in hair extension manufacturing
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Extensions are one of the highest-margin services a salon can run — but most owners overthink the
                start. You do not need a warehouse, a big upfront order, or years of experience. You need one
                trained stylist, a reliable trade supplier, and a simple consultation process. Here is the launch
                plan we give new partner salons.
              </p>

              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-8 mb-6">Step 1 — Train One Stylist First</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Do not train the whole team on day one. Send your most interested stylist on a certified course for
                one method — usually <strong>tape-in or hand-tied weft</strong> — then let them train others
                in-house once they are confident. Competence protects clients and your reputation; a bad first
                application kills word of mouth.
              </p>

              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Step 2 — Set Up a No-Minimum Trade Supplier</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Open a trade account with a supplier that has <strong>no minimum order</strong> and express 3–5 day
                shipping. This lets you buy only what a booked client needs — zero dead stock. Ask for a{" "}
                <strong>digital colour catalogue</strong> so you can show clients the full 40+ shade range on a
                tablet in the chair, without holding every colour physically.
              </p>
              <div className="not-prose grid md:grid-cols-3 gap-4 mb-10">
                {[
                  { icon: GraduationCap, title: "Train", text: "One stylist certified in tape-in or weft to start." },
                  { icon: Users, title: "Consult", text: "Free in-chair consultation using a digital shade catalogue." },
                  { icon: BadgePercent, title: "Supply", text: "No-minimum trade account, reorder in 3–5 days." },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="bg-[#FDF8F0] rounded-xl p-5 border border-amber-100">
                    <Icon className="h-6 w-6 text-amber-500 mb-3" />
                    <h4 className="font-semibold text-[#4A1942] mb-2">{title}</h4>
                    <p className="text-sm text-[#6B3A6E]">{text}</p>
                  </div>
                ))}
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Step 3 — Build a Simple Consultation</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A good consultation is where the sale happens. Keep it repeatable:
              </p>
              <div className="not-prose space-y-3 mb-10">
                {[
                  { step: "Assess", detail: "Hair type, length goal, and budget. Match method to lifestyle — tape-in for flexibility, weft for volume, nano/K-tip for permanence." },
                  { step: "Colour match", detail: "Use the digital catalogue and a daylight photo. Offer a free colour match so clients commit with confidence." },
                  { step: "Quote", detail: "Give a single price: hair + application. No surprises. Show the re-order cycle so they know what upkeep costs." },
                ].map(({ step, detail }) => (
                  <div key={step} className="flex items-start gap-4 p-4 bg-[#FDF8F0] border border-amber-100 rounded-xl">
                    <CheckCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#4A1942] block mb-1">{step}</strong>
                      <span className="text-sm text-[#6B3A6E]">{detail}</span>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Step 4 — Price for Margin</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Charge the <strong>hair</strong> and the <strong>application</strong> separately. A full-head
                application might be £150–400 in service fees plus the cost of hair (which you bought at trade).
                Because trade pricing runs 30–60% below retail, your product margin alone is healthy before you
                even count the service. Our{" "}
                <Link href="/blog/hair-extension-profit-margin-guide" className="text-[#4A1942] font-semibold underline">
                  profit margin guide
                </Link>{" "}
                breaks this down per method with real numbers.
              </p>

              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Step 5 — Market to Warm Clients First</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Your existing clients are your cheapest, highest-converting audience. Many already want length or
                volume — they just have not been asked. Offer a free consultation to regulars, post before/afters
                (with permission), and keep a shade ring or digital catalogue on the reception desk. Warm clients
                convert far better than cold ads while you build a portfolio.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Once you have 10–15 happy extension clients and steady re-orders, consider{" "}
                <Link href="/blog/private-label-hair-extensions-uk" className="text-[#4A1942] font-semibold underline">
                  private label
                </Link>{" "}
                so the product carries your salon's name — the step that turns a service into a brand.
              </p>

              <div className="bg-[#4A1942] rounded-2xl p-8 text-white text-center mb-10 not-prose">
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3">Ready to Set Up Your Supplier?</h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  Open a free trade account — no minimum order, same-day approval, express 3–5 day shipping, and a
                  free digital colour catalogue. Start selling extensions this month.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href="/trade-wholesale">Open a Trade Account →</Link>
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link href="/salon-partners">Salon Partner Programme</Link>
                  </Button>
                </div>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">Frequently Asked Questions</h2>
              <div className="not-prose space-y-4 mb-12">
                {faqs.map((f) => (
                  <div key={f.question} className="border border-amber-100 rounded-xl p-5 bg-[#FDF8F0]">
                    <p className="font-semibold text-[#4A1942] mb-2">{f.question}</p>
                    <p className="text-sm text-[#6B3A6E] leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-12 not-prose">
                <Link href="/blog/hair-extension-profit-margin-guide" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Related Guide</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">Profit Margin Guide</p>
                </Link>
                <Link href="/blog/hair-extensions-trade-account" className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">Related Guide</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">Trade Account Explained</p>
                </Link>
              </div>

              <div className="pt-8 border-t">
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="h-4 w-4" /> Back to Blog
                </Link>
              </div>
            </div>
          </article>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
