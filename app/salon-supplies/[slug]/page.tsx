import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartProvider } from "@/lib/cart-context"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { salonConsumables, getSalonConsumableBySlug } from "@/lib/salon-consumables"
import { ArrowLeft, ArrowRight, Check, Gift, Package, Truck, ShoppingBag, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return salonConsumables.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getSalonConsumableBySlug(slug)
  if (!product) return { title: "Product Not Found | D.S HAIR & BEAUTY" }
  return {
    title: `${product.name} | Salon Consumables | D.S HAIR & BEAUTY`,
    description: product.shortDescription,
    alternates: { canonical: `/salon-supplies/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [{ url: product.image, width: 800, height: 800, alt: product.name }],
    },
  }
}

export default async function SalonConsumablePage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getSalonConsumableBySlug(slug)
  if (!product) notFound()

  const whatsappMsg = encodeURIComponent(`Hi! I'd like to order: ${product.name}. Can you help me?`)
  const whatsappLink = `https://wa.me/8613516946001?text=${whatsappMsg}`

  const isFree = product.price === 0
  const savingsPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* Breadcrumb */}
          <div className="border-b">
            <div className="container px-4 md:px-6 py-3 max-w-6xl mx-auto">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground">Home</Link>
                <span>/</span>
                <Link href="/salon-supplies" className="hover:text-foreground">Salon Supplies</Link>
                <span>/</span>
                <span className="text-foreground font-medium truncate">{product.name}</span>
              </nav>
            </div>
          </div>

          {/* Product Detail */}
          <section className="py-8 md:py-16">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
              <Link href="/salon-supplies" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
                <ArrowLeft className="h-4 w-4" /> Back to all supplies
              </Link>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Left – Image */}
                <div className="relative">
                  <div className="aspect-square bg-muted/30 rounded-2xl overflow-hidden border">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${product.image})` }}
                    />
                  </div>
                  {product.badge && (
                    <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-sm font-semibold ${
                      product.badge === "Free" ? "bg-green-500 text-white" :
                      product.badge === "Best Seller" || product.badge === "Pro Grade" ? "bg-primary text-primary-foreground" :
                      product.badge === "Best Value" || product.badge === "Subscribe & Save" ? "bg-amber-500 text-black" :
                      "bg-accent text-accent-foreground"
                    }`}>
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Right – Info */}
                <div className="space-y-6">
                  <div>
                    <h1 className="font-serif text-2xl md:text-3xl font-semibold leading-tight">{product.name}</h1>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{product.description}</p>
                  </div>

                  {/* Price */}
                  <div className="border rounded-2xl p-4 bg-muted/20">
                    {isFree ? (
                      <div className="space-y-2">
                        <div className="flex items-baseline gap-3">
                          <span className="text-4xl font-bold text-green-600">FREE</span>
                          <span className="text-muted-foreground text-sm">+ £4.00 postage</span>
                        </div>
                        <p className="text-sm text-muted-foreground">One per salon. Limited time offer.</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex items-baseline gap-3">
                          <span className="text-3xl font-bold">£{product.price}</span>
                          {product.originalPrice && (
                            <>
                              <span className="text-lg text-muted-foreground line-through">£{product.originalPrice}</span>
                              <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Save {savingsPercent}%</span>
                            </>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">Price includes FREE UK shipping</p>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="font-semibold mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {product.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What's Included (bundles & sample only) */}
                  {product.whatIncluded && product.whatIncluded.length > 0 && (
                    <div className="bg-muted/30 rounded-2xl p-5">
                      <h3 className="font-semibold flex items-center gap-2 mb-3">
                        <Package className="h-4 w-4 text-primary" /> What is Included
                      </h3>
                      <ul className="space-y-1.5">
                        {product.whatIncluded.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Product Info Grid */}
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {product.weight && (
                      <div className="bg-muted/30 rounded-xl p-3">
                        <p className="text-xs text-muted-foreground">Weight</p>
                        <p className="font-medium">{product.weight}</p>
                      </div>
                    )}
                    {product.monthlyUsage && (
                      <div className="bg-muted/30 rounded-xl p-3">
                        <p className="text-xs text-muted-foreground">Monthly Usage</p>
                        <p className="font-medium">{product.monthlyUsage}</p>
                      </div>
                    )}
                    {product.profitMargin && (
                      <div className="bg-muted/30 rounded-xl p-3">
                        <p className="text-xs text-muted-foreground">Margin</p>
                        <p className="font-medium">{product.profitMargin}</p>
                      </div>
                    )}
                    <div className="bg-muted/30 rounded-xl p-3">
                      <p className="text-xs text-muted-foreground">For</p>
                      <p className="font-medium text-xs leading-snug">{product.targetCustomer}</p>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    {product.stripeLink && product.stripeLink.includes("YOUR_LINK") ? (
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button className="w-full rounded-full bg-green-600 hover:bg-green-700 text-white" size="lg">
                          <ShoppingBag className="mr-2 h-5 w-5" /> Order via WhatsApp
                        </Button>
                      </a>
                    ) : (
                      <a href={product.stripeLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button className="w-full rounded-full" size="lg">
                          Buy Now — £{product.price}
                        </Button>
                      </a>
                    )}
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={product.stripeLink && !product.stripeLink.includes("YOUR_LINK") ? "" : "hidden sm:block"}>
                      <Button variant="outline" className={`rounded-full ${product.stripeLink && !product.stripeLink.includes("YOUR_LINK") ? "w-full sm:w-auto" : "hidden"}`} size="lg">
                        WhatsApp Us
                      </Button>
                    </a>
                  </div>

                  {/* Shipping Info */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                    <span className="flex items-center gap-1"><Truck className="h-3.5 w-3.5" /> Free UK delivery</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> Dispatches next working day</span>
                  </div>
                </div>
              </div>

              {/* Usage Instructions */}
              {product.usageInstructions && (
                <div className="mt-12 p-6 bg-muted/20 rounded-2xl border max-w-3xl">
                  <h3 className="font-semibold mb-2">How to Use</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.usageInstructions}</p>
                </div>
              )}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="py-12 bg-muted/30">
            <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center space-y-4">
              <h3 className="font-serif text-xl font-medium">Want to try before buying?</h3>
              <p className="text-sm text-muted-foreground">
                Claim your free sample pack. Test our quality in your own salon — just cover £4.00 postage.
              </p>
              <Link href="/salon-supplies/free-sample-pack">
                <Button variant="outline" className="rounded-full">
                  <Gift className="mr-2 h-4 w-4" /> Get Free Sample Pack <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </section>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
