"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Heart, Share2, Minus, Plus, Check, ChevronRight, Truck, RefreshCw, Shield, MessageCircle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Product, contactInfo } from "@/lib/products"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedLength, setSelectedLength] = useState(product.lengths[0])
  const [quantity, setQuantity] = useState(1)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(price)
  }

  // Generate WhatsApp message with product details
  const whatsappMessage = encodeURIComponent(
    `Hi D.S HAIR & BEAUTY!\n\nI'm interested in:\n- Product: ${product.name}\n- Price: ${formatPrice(product.price)}\n- Colour: ${selectedColor.name}\n- Length: ${selectedLength}\n- Quantity: ${quantity}\n\nPlease let me know more details. Thanks!`
  )

  // Generate email subject
  const emailSubject = encodeURIComponent(`Inquiry about ${product.name}`)
  const emailBody = encodeURIComponent(
    `Hi D.S HAIR & BEAUTY,\n\nI'm interested in:\n- Product: ${product.name}\n- Price: ${formatPrice(product.price)}\n- Colour: ${selectedColor.name}\n- Length: ${selectedLength}\n- Quantity: ${quantity}\n\nPlease let me know more details. Thanks!\n\nBest regards`
  )

  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <Link href={`/collections/${product.type}`} className="hover:text-foreground transition-colors">
          {product.type === "diy" ? "DIY Extensions" : "Professional"}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative h-16 w-16 md:h-20 md:w-20 rounded-lg overflow-hidden shrink-0 border-2 transition-colors ${
                  selectedImage === index ? "border-primary" : "border-transparent"
                }`}
              >
                <Image src={image} alt={`${product.name} view ${index + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="relative flex-1 aspect-square md:aspect-[3/4] rounded-xl overflow-hidden bg-muted">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {product.badge && (
              <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                {product.badge}
              </Badge>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-1">
              {product.type === "diy" ? "DIY Extensions" : "Professional Extensions"}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium mb-2">
              {product.name}
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
                <span className="ml-1 text-sm font-medium">{product.rating}</span>
              </div>
              <Link href="#reviews" className="text-sm text-muted-foreground hover:text-foreground">
                {product.reviews.toLocaleString()} reviews
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6">
            {product.priceOnRequest ? (
              // Show WhatsApp button for price on request products
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-semibold text-accent">Price on Request</span>
                <span className="text-sm text-muted-foreground">Contact us for pricing via WhatsApp</span>
              </div>
            ) : (
              <>
                <span className="text-2xl font-semibold">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Save {formatPrice(product.originalPrice - product.price)}
                    </Badge>
                  </>
                )}
              </>
            )}
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Colour Selection */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium">Colour: {selectedColor.name}</span>
              <Link href="/colour-match" className="text-sm text-accent hover:underline">
                Find your shade
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`relative h-8 w-8 rounded-full border-2 transition-all ${
                    selectedColor.name === color.name
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-transparent hover:border-muted-foreground/30"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                  aria-label={`Select colour ${color.name}`}
                >
                  {selectedColor.name === color.name && (
                    <Check className="absolute inset-0 m-auto h-4 w-4 text-white drop-shadow-md" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Length Selection */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium">Length: {selectedLength}</span>
              <Link href="/size-guide" className="text-sm text-accent hover:underline">
                Size guide
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.lengths.map((length) => (
                <button
                  key={length}
                  onClick={() => setSelectedLength(length)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    selectedLength === length
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-input hover:border-primary hover:bg-secondary"
                  }`}
                >
                  {length}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <span className="font-medium mb-3 block">Quantity</span>
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              {product.inStock ? (
                <span className="text-sm text-green-600 flex items-center gap-1">
                  <Check className="h-4 w-4" /> In Stock
                </span>
              ) : (
                <span className="text-sm text-red-600">Out of Stock</span>
              )}
            </div>
          </div>

          {/* Contact to Order - Replaced Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Button
              size="lg"
              className="flex-1 bg-green-600 hover:bg-green-700"
              asChild
            >
              <a
                href={`https://wa.me/8613516946001?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Order via WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex-1"
              asChild
            >
              <a
                href={`mailto:${contactInfo.email}?subject=${emailSubject}&body=${emailBody}`}
              >
                <Mail className="h-5 w-5 mr-2" />
                Email Inquiry
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <Truck className="h-5 w-5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Free UK Delivery over £175</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <RefreshCw className="h-5 w-5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">30-Day Returns</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">1 Year Warranty</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-green-800 font-medium mb-2">
              💬 Prefer to order differently?
            </p>
            <p className="text-sm text-green-700">
              Contact us on WhatsApp: {contactInfo.whatsappNumber} or email: {contactInfo.email}
            </p>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0 gap-8">
            <TabsTrigger
              value="description"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent pb-4"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="howtouse"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent pb-4"
            >
              How To Use
            </TabsTrigger>
            <TabsTrigger
              value="sizeguide"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent pb-4"
            >
              Finding the Perfect Fit
            </TabsTrigger>
            <TabsTrigger
              value="results"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent pb-4"
            >
              Real Results
            </TabsTrigger>
            <TabsTrigger
              value="features"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent pb-4"
            >
              Features
            </TabsTrigger>
            <TabsTrigger
              value="faq"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent pb-4"
            >
              FAQ
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent pb-4"
            >
              Reviews ({product.reviews.toLocaleString()})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-8">
            {product.productType.toLowerCase().includes('nano') ? (
              <div className="max-w-3xl space-y-6">
                <h2 className="text-2xl font-bold">Nano Ring Hair Extensions — The Most Invisible Method</h2>

                {/* Hero visual */}
                <div className="rounded-xl overflow-hidden">
                  <img
                    src="/images/nano/nano-main-02.jpg"
                    alt="Nano Ring Hair Extensions — D.S HAIR & BEAUTY"
                    className="w-full object-cover"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Nano Ring extensions use an ultra-small silicone-lined metal ring — roughly the size of a grain of rice — to bond each individual strand of 100% Remy human hair to a tiny section of your natural hair. No heat, no glue, no chemicals. Just pure, invisible volume and length.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Each pack contains <strong>50 strands × 1g</strong> — perfectly lightweight for even the finest hair. Because the nano ring sits flat against the scalp and blends seamlessly, it stays completely hidden when you wear your hair up, down or in any updo.
                </p>

                {/* Three-icon highlight strip */}
                <div className="grid grid-cols-3 gap-4 mt-2">
                  {[
                    { icon: "🔗", title: "No Heat · No Glue", body: "Secured mechanically — zero chemical or thermal damage." },
                    { icon: "✨", title: "Ultra Invisible", body: "Nano rings are 90% smaller than standard micro-rings." },
                    { icon: "♻️", title: "Reusable Hair", body: "Hair strands can be reused 2–3 times with new rings." },
                  ].map((item) => (
                    <div key={item.title} className="border rounded-xl p-4 text-center">
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <div className="font-semibold text-sm mb-1">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.body}</div>
                    </div>
                  ))}
                </div>
              </div>
            ) : product.productType.toLowerCase().includes('k-tip') ? (
              <div className="max-w-3xl">
                <h2 className="text-2xl font-bold mb-6">Premium K-Tip (Keratin) Hair Extensions</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Step into the latest trend with our high-quality keratin-tipped hair extensions. Riding the wave of contemporary hair fashion, these hair extensions are not just a style statement but a promise of excellence.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Ethically sourced and crafted from 100% genuine human hair, our hair extensions epitomise the pristine quality of virgin hair. Untainted by chemicals or dyes, the extensions preserve the hair's natural lustre and vitality. With meticulously aligned cuticles, experience zero shedding and a flawless, integrated appearance every time you wear them.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The brilliance doesn't end there. Our keratin-tipped hair extensions offer the versatility every modern woman desires. Whether you're experimenting with colour, chemical treatments, or using heat tools, these extensions mirror the resilience and adaptability of natural hair.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  For the perfect fusion, it's essential to apply our hair extensions with a specialised hot fusion iron. To ensure the best results and longevity, we strongly recommend professional fitting by a certified hair expert. Embrace the beauty and versatility of our keratin-tipped extensions and redefine your hair game!
                </p>
              </div>
            ) : product.productType.toLowerCase().includes('weft') ? (
              <div className="max-w-3xl space-y-6">
                <h2 className="text-2xl font-bold">Weft Hair Extensions — Salon's Most Versatile Method</h2>

                {/* Hero image */}
                <div className="rounded-xl overflow-hidden">
                  <img
                    src="/images/weft/weft-hero.jpg"
                    alt="Weft Hair Extensions — D.S HAIR & BEAUTY"
                    className="w-full object-cover max-h-80"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Weft extensions are the gold standard in professional salons worldwide. A single continuous curtain of 100% Remy human hair is sewn, braided or beaded onto your natural hair — delivering instant volume, length and density that lasts <strong>6–12 months</strong> with proper maintenance.
                </p>

                {/* Weft type comparison */}
                <div className="border rounded-xl overflow-hidden">
                  <div className="bg-black text-white px-5 py-3 font-semibold text-sm">Which Weft Type Is Right for You?</div>
                  <div className="divide-y text-sm">
                    {[
                      { type: "Genius Weft ✨ NEW", tag: "Best Seller", thickness: "0.5–1 mm", cut: "✅ Trimmable", best: "Fine to medium hair", note: "Ultra-thin, invisible — the hottest upgrade in top salons" },
                      { type: "Hand-Tied Weft", tag: "Premium", thickness: "1–1.2 mm", cut: "❌ Not trimmable", best: "Fine & delicate hair", note: "Handcrafted, featherlight — ultimate comfort & longevity" },
                      { type: "Machine Weft", tag: "Classic", thickness: "1.5–2 mm", cut: "✅ At marked points", best: "Thick & coarse hair", note: "Most durable, ideal for high-volume transformations" },
                    ].map((row) => (
                      <div key={row.type} className="px-5 py-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold">{row.type}</span>
                          <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">{row.tag}</span>
                        </div>
                        <p className="text-muted-foreground text-xs mb-1">{row.note}</p>
                        <div className="flex gap-4 text-xs text-muted-foreground">
                          <span>Thickness: {row.thickness}</span>
                          <span>Cut-to-fit: {row.cut}</span>
                          <span>Best for: {row.best}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Three highlights */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: "🪡", title: "No Glue · No Heat", body: "Attached by beads, sewing or tape — zero thermal or chemical damage." },
                    { icon: "🌊", title: "Seamless Blend", body: "Lies flat against the scalp. Invisible in ponytails, braids and updos." },
                    { icon: "♻️", title: "Reusable & Sustainable", body: "Hair rows can be reinstalled 2–3 times; just replace the beads or thread." },
                  ].map((item) => (
                    <div key={item.title} className="border rounded-xl p-4 text-center">
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <div className="font-semibold text-sm mb-1">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.body}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
                  <strong>🔥 Salon Insider:</strong> Genius Weft is rapidly replacing Hand-Tied Weft in top UK salons. It installs faster, can be trimmed to any width, and delivers the same ultra-flat invisible finish — at a more accessible price point for clients.
                </div>
              </div>
            ) : (
              <div className="max-w-3xl">
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="howtouse" className="mt-8">
            {product.productType.toLowerCase().includes('nano') ? (
            <div className="max-w-3xl space-y-8">
              <h3 className="font-semibold text-xl">How to Apply Nano Ring Hair Extensions</h3>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-sm text-amber-800">
                  <strong>⚠️ Professional Installation Only.</strong> Nano Ring extensions must be fitted and removed by a certified hair extension stylist to protect your natural hair.
                </p>
              </div>

              {/* Step-by-step diagram image */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/images/nano/nano-main-04.jpg"
                  alt="Nano Ring Application Process"
                  className="w-full object-cover"
                />
              </div>

              {[
                {
                  n: 1,
                  title: "Section the Hair",
                  body: "Starting at the nape, create neat horizontal sections 1cm from the scalp — staying well clear of the hairline for a natural finish.",
                },
                {
                  n: 2,
                  title: "Thread the Nano Ring",
                  body: "Thread a tiny silicone-lined nano ring onto a loop tool. Pull a small section (~1mm) of your natural hair through the ring.",
                },
                {
                  n: 3,
                  title: "Insert the Extension Strand",
                  body: "Slide the nano-tipped extension strand into the ring alongside your natural hair.",
                },
                {
                  n: 4,
                  title: "Clamp Securely",
                  body: "Using the nano-ring pliers, flatten the ring firmly. Give a gentle tug to confirm it will not slip.",
                },
                {
                  n: 5,
                  title: "Blend & Style",
                  body: "Work row by row from nape to crown. Once complete, your stylist will trim and blend seamlessly — ready to wash, blow-dry and style.",
                },
              ].map((step) => (
                <div key={step.n} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.n}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                    <p className="text-muted-foreground">{step.body}</p>
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="border rounded-xl p-4 text-sm">
                  <div className="font-semibold mb-1">⏱ Installation time</div>
                  <div className="text-muted-foreground">Full head: 3–5 hours</div>
                </div>
                <div className="border rounded-xl p-4 text-sm">
                  <div className="font-semibold mb-1">🔄 Maintenance</div>
                  <div className="text-muted-foreground">Move-up every 6–8 weeks</div>
                </div>
              </div>
            </div>
          ) : product.productType.toLowerCase().includes('k-tip') ? (
            <div className="max-w-3xl space-y-8">
              <h3 className="font-semibold text-xl">How to Apply K-Tip (Keratin) Hair Extensions</h3>
              
              {/* K-Tip Application Image */}
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://cdn.shopify.com/s/files/1/0617/4493/9165/products/installmyhairextensions_8.jpg?v=1670534187" 
                  alt="How to Apply K-Tip Extensions" 
                  className="w-full"
                />
              </div>
              
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Preparation</h4>
                  <p className="text-muted-foreground">
                    Start with clean, dry hair. Section the hair into small parts, about 1/4-inch wide, starting from the bottom and working your way up. Ensure the natural hair is clean and free of oils or products near the roots.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Heat the Keratin Bond</h4>
                  <p className="text-muted-foreground">
                    Using a hot fusion iron (typically 180-200°C), gently melt the pre-tipped keratin bond on the extension. Hold the iron for 3-5 seconds until the bond becomes slightly soft and pliable.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Apply to Hair</h4>
                  <p className="text-muted-foreground">
                    Press the melted keratin tip onto a small section of natural hair, about 1/4-inch from the scalp. Hold for 5-10 seconds to allow the bond to cool and secure. The bond will harden as it cools.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Continue Sectioning</h4>
                  <p className="text-muted-foreground">
                    Repeat the process, working in rows from the bottom of the head upwards. Leave a 1/2-inch perimeter around the hairline for a natural look. Space each extension about 1/2-1 inch apart.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  5
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Blend and Style</h4>
                  <p className="text-muted-foreground">
                    Once all extensions are applied, gently blend them with the natural hair using a brush or comb. Style as desired with heat tools. For best results and longevity, we recommend professional application.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                <p className="text-sm text-yellow-800">
                  <strong>Important:</strong> K-Tip extensions typically last 3-6 months with proper care. Removal requires a special solvent or heat application by a professional stylist.
                </p>
              </div>
            </div>
            ) : product.productType.toLowerCase().includes('weft') ? (
            <div className="max-w-3xl space-y-8">
              <h3 className="font-semibold text-xl">How to Install Weft Hair Extensions</h3>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-sm text-amber-800">
                  <strong>⚠️ Professional Installation Required.</strong> Weft extensions must be fitted and maintained by a certified hair extension stylist. Improper installation can cause breakage.
                </p>
              </div>

              {/* Installation method selector */}
              <div className="grid grid-cols-3 gap-3 text-center text-sm">
                {[
                  { icon: "📿", method: "Bead & Sew", time: "2–3 hrs", hold: "8–12 weeks" },
                  { icon: "🧵", method: "Sew-In Cornrow", time: "3–4 hrs", hold: "6–8 weeks" },
                  { icon: "🩹", method: "Tape / Skin Weft", time: "45 mins", hold: "6–8 weeks" },
                ].map((m) => (
                  <div key={m.method} className="border rounded-xl p-3">
                    <div className="text-2xl mb-1">{m.icon}</div>
                    <div className="font-semibold mb-1">{m.method}</div>
                    <div className="text-xs text-muted-foreground">Install: {m.time}</div>
                    <div className="text-xs text-muted-foreground">Lasts: {m.hold}</div>
                  </div>
                ))}
              </div>

              <h4 className="font-semibold text-lg">Step-by-Step: Bead & Sew Method (Most Popular)</h4>

              {[
                {
                  n: 1,
                  title: "Prepare & Section",
                  body: "Start with freshly washed, blow-dried hair. Create a clean horizontal parting 1cm from the nape — this will be your first row. Pin all hair above the parting out of the way.",
                },
                {
                  n: 2,
                  title: "Create the Anchor Braid",
                  body: "Along the parting, create a slim horizontal braid (or micro-braid anchor points). This anchors each bead securely and protects your natural hair from tension.",
                },
                {
                  n: 3,
                  title: "Thread the Beads",
                  body: "Slide silicone-lined micro-beads onto the anchor braid at even intervals (approx. 1–2 cm apart). Use a loop tool to pull the braid through each bead before clamping flat with pliers.",
                },
                {
                  n: 4,
                  title: "Attach the Weft",
                  body: "Lay the weft along the row of beads. Using a curved needle and strong thread, sew the weft onto the beads with tight, even stitches. For Genius Weft — trim the weft to the exact row width before sewing for a seamless finish.",
                },
                {
                  n: 5,
                  title: "Build Up the Rows",
                  body: "Release the next section (approx. 2–3 cm above), repeat the process. Work row by row from nape to crown. Typically 3–5 rows for a full head result.",
                },
                {
                  n: 6,
                  title: "Blend & Finish",
                  body: "Once all rows are secure, blend your natural hair over the wefts. Trim and layer to seamlessly integrate the extensions. Style as desired — curl, straighten or blowout.",
                },
              ].map((step) => (
                <div key={step.n} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.n}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{step.title}</h4>
                    <p className="text-muted-foreground text-sm">{step.body}</p>
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="border rounded-xl p-4 text-sm">
                  <div className="font-semibold mb-1">⏱ Full head install</div>
                  <div className="text-muted-foreground">2–4 hours depending on hair density</div>
                </div>
                <div className="border rounded-xl p-4 text-sm">
                  <div className="font-semibold mb-1">🔄 Move-up frequency</div>
                  <div className="text-muted-foreground">Every 6–8 weeks as hair grows</div>
                </div>
              </div>
            </div>
            ) : (
            <div className="max-w-3xl space-y-8">
              <h3 className="font-semibold text-xl">How to Apply D.S HAIR Clip-In Extensions</h3>
              <div className="rounded-lg overflow-hidden">
                <img src="/images/how-to-use.png" alt="How to Apply Clip-In Extensions" className="w-full" />
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Sectioning</h4>
                  <p className="text-muted-foreground">Use a rat-tail comb to make a horizontal part from mid-ear to mid-ear. Secure all hair above mid-ear into a high ponytail or with clips.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Create A Foundation</h4>
                  <p className="text-muted-foreground">Gently backcomb the hair one inch from your scalp. You can also use dry shampoo or hair spray to create a more secure foundation.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Clip Them In</h4>
                  <p className="text-muted-foreground">Choose a 2-clip or 3-clip weft and gently open each clip. Bring the clips into the foundation and close them. Leave a 1/2-1" perimeter of natural hair around your hairline.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Repeat Your Sectioning</h4>
                  <p className="text-muted-foreground">Keep clipping in the wefts row by row. Separate each row with 1-3 inches of natural hair.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Remaining Wefts</h4>
                  <p className="text-muted-foreground">Use the remaining 2-clip wefts on the sides of your head, placing them about four fingers above your ears.</p>
                </div>
              </div>
            </div>
            )}
          </TabsContent>

          <TabsContent value="sizeguide" className="mt-8">
            {product.productType.toLowerCase().includes('nano') ? (
            <div className="max-w-3xl space-y-8">
              <h3 className="font-semibold text-xl">Finding Your Perfect Nano Ring Match</h3>

              {/* Hair type guide */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: "Fine / Thin Hair", icon: "🌿", verdict: "✅ Ideal", desc: "Nano rings are the lightest attachment method — no extra weight on delicate strands. Invisible even when pulled back." },
                  { label: "Medium Hair", icon: "💆", verdict: "✅ Great", desc: "Perfect balance of hold and invisibility. Most customers with medium hair choose 2–3 packs for full, natural-looking results." },
                  { label: "Thick / Coarse Hair", icon: "💪", verdict: "⚠️ Consider Weft", desc: "Nano rings can work, but installation takes longer. Your stylist may recommend weft or K-Tip instead for efficiency." },
                ].map((item) => (
                  <div key={item.label} className="border rounded-xl p-4">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-semibold mb-1">{item.label}</div>
                    <div className="text-xs font-medium text-green-700 mb-2">{item.verdict}</div>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* How many packs */}
              <div className="border rounded-xl overflow-hidden">
                <div className="bg-black text-white px-5 py-3 font-semibold">How many packs do I need?</div>
                <div className="divide-y">
                  {[
                    { goal: "Add subtle volume", packs: "1 pack (50g)", strands: "50 strands" },
                    { goal: "Noticeable fullness + length", packs: "2 packs (100g)", strands: "100 strands" },
                    { goal: "Full transformation", packs: "3–4 packs (150–200g)", strands: "150–200 strands" },
                  ].map((row) => (
                    <div key={row.goal} className="grid grid-cols-3 px-5 py-3 text-sm">
                      <span className="text-muted-foreground">{row.goal}</span>
                      <span className="font-medium">{row.packs}</span>
                      <span className="text-muted-foreground">{row.strands}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Length guide */}
              <div>
                <h4 className="font-semibold mb-3">Length Guide</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { len: '14"', effect: "Natural bob → lob" },
                    { len: '18"', effect: "Shoulder → mid-back" },
                    { len: '22"', effect: "Mid-back → waist" },
                    { len: '26"', effect: "Waist length & beyond" },
                  ].map((item) => (
                    <div key={item.len} className="border rounded-xl p-3 text-center text-sm">
                      <div className="text-xl font-bold mb-1">{item.len}</div>
                      <div className="text-xs text-muted-foreground">{item.effect}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 text-sm text-muted-foreground">
                💡 <strong>Not sure?</strong> WhatsApp us a photo of your hair — our team will recommend the perfect colour, length and quantity for free.
              </div>
            </div>
          ) : product.productType.toLowerCase().includes('k-tip') ? (
            <div className="max-w-3xl space-y-8">
              <h3 className="font-semibold text-xl">Standard vs Micro vs Nano K-Tip Extensions: What Type to Choose?</h3>
              
              <div className="rounded-lg overflow-hidden mb-6">
                <img 
                  src="https://iloveslavichair.com/image/catalog/blogs/nano-keratin-bonds-1.jpg" 
                  alt="K-Tip Bond Types" 
                  className="w-full"
                />
              </div>

              <p className="text-muted-foreground">
                To decide which type of keratin bond extensions is right for your hair, you need to consider the following factors:
              </p>

              <div className="space-y-6 mt-6">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-lg mb-2">Your Own Hair Structure</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Standard bonds</strong> - Best for thick hair</li>
                    <li><strong>Micro bonds</strong> - Suitable for fine-to-medium or medium hair</li>
                    <li><strong>Nano bonds</strong> - Perfect for fine and very thin curls</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-lg mb-2">What You Want to Achieve</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>To add <strong>thickness</strong>: Many experts recommend micro tips</li>
                    <li>To achieve a <strong>natural look</strong> and hide the fact of using extensions: Micro bonds are ideal</li>
                    <li>To increase density around the <strong>temples</strong>: Nano bonds (for thin hair) or micro bonds (for thicker hair)</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-lg mb-2">Professional Technique</h4>
                  <p className="text-muted-foreground">
                    Some hair beauty professionals combine different keratin tip sizes: the standard ones are used in the back of the head while nano or micro bonds are used on the sides for a more natural finish.
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-lg mb-2">Consult Your Stylist</h4>
                  <p className="text-muted-foreground">
                    Reading reviews from others might give you a better understanding and idea of what will work best for your hairstyle. Finally, consult your hairstylist!
                  </p>
                </div>
              </div>
            </div>
            ) : product.productType.toLowerCase().includes('weft') ? (
            <div className="max-w-3xl space-y-8">
              <h3 className="font-semibold text-xl">Finding Your Perfect Weft Match</h3>

              {/* Hair type guide */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: "Fine / Thin Hair", icon: "🌿", verdict: "✅ Genius Weft", desc: "The ultra-thin 0.5mm base sits virtually flat — no bulk, no lumps. Genius Weft is the top recommendation for fine-haired clients in UK salons right now." },
                  { label: "Medium Hair", icon: "💆", verdict: "✅ Genius or Hand-Tied", desc: "Either works beautifully. Genius Weft offers faster installs and cost savings; Hand-Tied gives that handcrafted, buttery-soft feel your clients will love." },
                  { label: "Thick / Coarse Hair", icon: "💪", verdict: "✅ Machine Weft", desc: "Machine wefts have the density and weight to blend with thick natural hair. They're also the most cost-effective for high-volume transformations." },
                ].map((item) => (
                  <div key={item.label} className="border rounded-xl p-4">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-semibold mb-1">{item.label}</div>
                    <div className="text-xs font-medium text-green-700 mb-2">{item.verdict}</div>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* How many packs */}
              <div className="border rounded-xl overflow-hidden">
                <div className="bg-black text-white px-5 py-3 font-semibold">How many packs / grams do I need?</div>
                <div className="divide-y">
                  {[
                    { goal: "Add volume only (no length)", weight: "100–150g", rows: "2–3 rows" },
                    { goal: "Volume + moderate length", weight: "150–200g", rows: "3–4 rows" },
                    { goal: "Full dramatic transformation", weight: "200–250g", rows: "4–5 rows" },
                  ].map((row) => (
                    <div key={row.goal} className="grid grid-cols-3 px-5 py-3 text-sm">
                      <span className="text-muted-foreground">{row.goal}</span>
                      <span className="font-medium">{row.weight}</span>
                      <span className="text-muted-foreground">{row.rows}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Length guide */}
              <div>
                <h4 className="font-semibold mb-3">Length Guide</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { len: '14"', effect: "Bob → shoulder length" },
                    { len: '18"', effect: "Shoulder → mid-back" },
                    { len: '22"', effect: "Mid-back → waist" },
                    { len: '26"', effect: "Waist length & beyond" },
                  ].map((item) => (
                    <div key={item.len} className="border rounded-xl p-3 text-center text-sm">
                      <div className="text-xl font-bold mb-1">{item.len}</div>
                      <div className="text-xs text-muted-foreground">{item.effect}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Genius Weft callout */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="font-semibold mb-2">🔥 Why Salons Are Switching to Genius Weft</div>
                <ul className="text-sm text-amber-900 space-y-1">
                  <li>✅ Can be trimmed to any width — no wastage, perfect fit every time</li>
                  <li>✅ 0.5mm ultra-thin base — flatter than Hand-Tied, undetectable in high ponytails</li>
                  <li>✅ 20–22g per row — more hair per pack, better value for clients</li>
                  <li>✅ No "return hairs" — won't scratch or irritate sensitive scalps</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 text-sm text-muted-foreground">
                💡 <strong>Not sure which weft type suits your client?</strong> WhatsApp us a photo — we'll advise on the perfect match, weight and length for free.
              </div>
            </div>
            ) : (
            <div className="max-w-3xl space-y-8">
              <h3 className="font-semibold text-xl">Finding the Perfect Fit</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border rounded-lg p-4">
                  <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    <img src="/images/seamless-clip-ins.jpg" alt="Seamless Clip-Ins" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Seamless Clip-Ins</h4>
                  <p className="text-muted-foreground">The most invisible wefts on the market, featuring a thin silicone strip that lies flat against the scalp. Perfect for fine hair.</p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    <img src="/images/classic-clip-ins.jpg" alt="Classic Clip-Ins" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Classic Clip-Ins</h4>
                  <p className="text-muted-foreground">Traditional clips with a fabric weft base. Durable and easy to apply at home. Great for adding volume.</p>
                </div>
              </div>
            </div>
            )}
          </TabsContent>

          <TabsContent value="results" className="mt-8">
            <div className="max-w-3xl space-y-8">
              <h3 className="font-semibold text-xl">Real Results</h3>

              {product.productType.toLowerCase().includes('nano') ? (
                <>
                  {/* Before/After images grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl overflow-hidden">
                      <img src="/images/nano/nano-main-05.jpg" alt="Nano Ring Extensions Result 1" className="w-full object-cover aspect-[3/4]" />
                    </div>
                    <div className="rounded-xl overflow-hidden">
                      <img src="/images/nano/nano-main-06.jpg" alt="Nano Ring Extensions Result 2" className="w-full object-cover aspect-[3/4]" />
                    </div>
                  </div>

                  {/* Key stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {[
                      { stat: "6–12", unit: "months", label: "Average wear time" },
                      { stat: "6–8", unit: "weeks", label: "Between move-ups" },
                      { stat: "2–3×", unit: "reuse", label: "Hair strand lifespan" },
                    ].map((item) => (
                      <div key={item.label} className="border rounded-xl py-4 px-2">
                        <div className="text-2xl font-bold">{item.stat}</div>
                        <div className="text-xs text-accent font-medium">{item.unit}</div>
                        <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Customer quotes */}
                  <div className="space-y-4">
                    {[
                      { name: "Sophie M.", text: "Had nano rings for 8 months now — still look brand new. My hairdresser can't believe they're extensions!", stars: 5 },
                      { name: "Laura K.", text: "I have very fine hair and was worried about damage. These are completely invisible and so light. Finally found the perfect method.", stars: 5 },
                      { name: "Chloe R.", text: "The colour match was spot on. Friends genuinely thought I'd grown my hair overnight. Worth every penny.", stars: 5 },
                    ].map((review) => (
                      <div key={review.name} className="bg-gray-50 rounded-xl p-5">
                        <div className="flex items-center gap-1 mb-2">
                          {Array.from({ length: review.stars }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <blockquote className="italic text-sm mb-2">"{review.text}"</blockquote>
                        <p className="font-medium text-sm">— {review.name}</p>
                      </div>
                    ))}
                  </div>
                </>
              ) : product.productType.toLowerCase().includes('weft') ? (
                <>
                  {/* Stats bar */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {[
                      { stat: "6–12", unit: "months", label: "Average wear time" },
                      { stat: "6–8", unit: "weeks", label: "Between move-ups" },
                      { stat: "2–3×", unit: "reuse", label: "Weft can be reinstalled" },
                    ].map((item) => (
                      <div key={item.label} className="border rounded-xl py-4 px-2">
                        <div className="text-2xl font-bold">{item.stat}</div>
                        <div className="text-xs text-accent font-medium">{item.unit}</div>
                        <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Customer reviews */}
                  <div className="space-y-4">
                    {[
                      { name: "Jessica T.", role: "Hair Extension Stylist, Manchester", text: "I've been using these wefts on my clients for 6 months. The Genius Weft in particular is incredible — trims cleanly, lays so flat. My fine-haired clients are obsessed.", stars: 5 },
                      { name: "Emma W.", role: "Salon Client, London", text: "Had the Hand-Tied wefts installed 4 months ago. Still feel like new hair. My stylist was amazed by how little shedding there's been. Worth every penny.", stars: 5 },
                      { name: "Rachel B.", role: "Salon Client, Birmingham", text: "The colour match was perfect straight out of the pack. So natural-looking — even my mum didn't notice until I told her!", stars: 5 },
                    ].map((review) => (
                      <div key={review.name} className="bg-gray-50 rounded-xl p-5">
                        <div className="flex items-center gap-1 mb-2">
                          {Array.from({ length: review.stars }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <blockquote className="italic text-sm mb-2">"{review.text}"</blockquote>
                        <p className="font-medium text-sm">— {review.name}</p>
                        <p className="text-xs text-muted-foreground">{review.role}</p>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  {/* Before/After Image */}
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src="/images/before-after.jpg"
                      alt="Before and After - D.S HAIR Extensions"
                      className="w-full"
                    />
                  </div>

                  {/* Customer Review */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-lg italic mb-4">
                      "Loves the clip ins and the service was great. I bought the 20". Hair is easy to work with and I am now wearing them daily. Love love love!!!"
                    </blockquote>
                    <p className="font-medium">— Amy</p>
                  </div>
                </>
              )}

              {/* More Reviews CTA */}
              <div className="text-center">
                <p className="text-muted-foreground mb-4">See what our customers are saying</p>
                <a
                  href="#reviews"
                  className="inline-block border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors"
                >
                  Read All Reviews
                </a>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="features" className="mt-8">
            <div className="max-w-3xl">
              {product.productType.toLowerCase().includes('nano') ? (
                <div className="space-y-6">
                  {/* Image */}
                  <div className="rounded-xl overflow-hidden">
                    <img src="/images/nano/nano-main-07.jpg" alt="Nano Ring Extension Features" className="w-full object-cover max-h-64" />
                  </div>
                  {/* Feature grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "100% Remy human hair — cuticle-aligned for zero tangling",
                      "Ultra-small silicone-lined nano ring — virtually invisible",
                      "No heat, no glue, no chemicals — zero damage method",
                      "50 strands × 1g per pack — ideal for fine & sensitive hair",
                      "Wears 6–12 months with proper maintenance",
                      "Can be washed, blow-dried, curled and straightened",
                      "Hair strands are reusable 2–3 times",
                      "Stays hidden in ponytails, buns and updos",
                      "31 colour shades to match every natural tone",
                      "Available in 14\" – 26\" lengths",
                      "Professional removal — no breakage or pulling",
                      "Maintenance move-up every 6–8 weeks",
                    ].map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : product.productType.toLowerCase().includes('weft') ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "100% Remy human hair — cuticle-aligned for zero tangling",
                      "Available in Genius Weft, Hand-Tied & Machine Weft styles",
                      "Genius Weft: 0.5mm ultra-thin base — thinner than Hand-Tied",
                      "Genius Weft is trimmable — cut to any width without shedding",
                      "No heat, no glue — attached by beads, thread or tape",
                      "Wears 6–12 months with professional maintenance",
                      "Can be washed, blow-dried, curled and straightened",
                      "Weft rows are reusable 2–3 times — just replace beads/thread",
                      "Lies flat against scalp — invisible in updos and ponytails",
                      "31 colour shades to match every natural tone",
                      "Available in 14\" – 26\" lengths",
                      "Move-up appointment every 6–8 weeks to account for hair growth",
                    ].map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </TabsContent>

          <TabsContent value="faq" className="mt-8">
            <div className="max-w-3xl space-y-6">
              <h3 className="font-semibold text-xl">Frequently Asked Questions</h3>

              {product.productType.toLowerCase().includes('nano') ? (
                <>
                  {[
                    {
                      q: "What are Nano Ring extensions?",
                      a: "Nano Ring extensions attach individual 1g strands of 100% Remy human hair using an ultra-small silicone-lined metal ring — no heat, no glue, no chemicals. The ring is mechanically clamped with specialist pliers, making it one of the safest and most invisible extension methods available.",
                    },
                    {
                      q: "Are they suitable for fine or thin hair?",
                      a: "Yes — this is the #1 recommended method for fine hair. Each nano ring is approximately 90% smaller than a standard micro-ring, so the attachment is barely detectable and places minimal weight on each strand.",
                    },
                    {
                      q: "How long do Nano Ring extensions last?",
                      a: "With proper care, 6 to 12 months. Every 6–8 weeks your stylist will perform a 'move-up' — sliding the rings up to account for natural hair growth. The human hair itself can be reused 2–3 times by replacing the rings.",
                    },
                    {
                      q: "Will they damage my natural hair?",
                      a: "When professionally installed and maintained, nano rings are one of the lowest-damage methods. No adhesive or heat is involved. Always have them fitted and removed by a certified extension stylist.",
                    },
                    {
                      q: "How many packs do I need?",
                      a: "It depends on your goal. For subtle volume: 1 pack (50g / 50 strands). For noticeable length and fullness: 2 packs (100g). For a full transformation: 3–4 packs (150–200g). Send us a WhatsApp photo and we'll advise for free.",
                    },
                    {
                      q: "Can I wash, heat-style and colour them?",
                      a: "Yes — all D.S HAIR nano extensions are 100% human hair. Wash with sulphate-free shampoo, use a heat protectant before styling, and brush from ends upward. We recommend avoiding bleach on pre-coloured shades.",
                    },
                    {
                      q: "Can I wear them in a ponytail or updo?",
                      a: "Absolutely. The nano ring sits flat and close to the scalp, making it completely undetectable even in high ponytails and braids — one of the biggest advantages over other extension types.",
                    },
                  ].map((item) => (
                    <div key={item.q} className="border-b pb-5">
                      <h4 className="font-medium mb-2">{item.q}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </>
              ) : product.productType.toLowerCase().includes('weft') ? (
                <>
                  {[
                    {
                      q: "What are weft extensions?",
                      a: "Weft extensions are a continuous row of 100% Remy human hair attached to a thin base (weft). The entire row is secured to your natural hair using beads, sewing or tape. It's the professional salon standard worldwide.",
                    },
                    {
                      q: "What's the difference between Genius, Hand-Tied and Machine weft?",
                      a: "Genius Weft (0.5–1mm) is ultra-thin, trimmable and perfect for fine hair. Hand-Tied (1–1.2mm) is handcrafted, premium quality, and untrimmable. Machine Weft (1.5–2mm) is the classic option, most durable, ideal for thick hair. Choose based on your hair type and budget.",
                    },
                    {
                      q: "Are they suitable for fine or thin hair?",
                      a: "Yes — especially with Genius Weft, which is 90% thinner than Machine Weft and sits virtually flat on the scalp. Hand-Tied is also excellent for fine hair. Avoid Machine Weft if you have very delicate hair.",
                    },
                    {
                      q: "How long do weft extensions last?",
                      a: "With proper care, 6 to 12 months. Every 6–8 weeks you'll need a 'move-up' appointment — your stylist slides the beads/threads up to account for natural hair growth. The weft row can be reinstalled 2–3 times by replacing the beads or re-sewing.",
                    },
                    {
                      q: "Will they damage my natural hair?",
                      a: "When professionally installed and maintained, weft extensions cause minimal damage. The beading method distributes tension evenly. Always have them fitted and removed by a certified extension stylist — never DIY removal.",
                    },
                    {
                      q: "How many packs do I need?",
                      a: "It depends on your goal and hair type. Fine hair: 100–150g (2–3 rows). Medium hair: 150–200g (3–4 rows). Thick hair: 200–250g (4–5 rows). Message us a photo and we'll recommend the perfect weight.",
                    },
                    {
                      q: "Can I wash, heat-style and colour them?",
                      a: "Yes — all D.S HAIR wefts are 100% human hair. Wash 1–2 times weekly with sulphate-free shampoo. Always use heat protectant. For colouring, consult a pro. We recommend avoiding bleach on pre-coloured shades.",
                    },
                    {
                      q: "Can I wear them in a ponytail or updo?",
                      a: "Absolutely — especially with Genius Weft. The beads sit flat and close to the scalp, making them undetectable in high ponytails, braids and buns. One of the biggest perks of weft over clip-ins!",
                    },
                  ].map((item) => (
                    <div key={item.q} className="border-b pb-5">
                      <h4 className="font-medium mb-2">{item.q}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {/* FAQ Item 1 */}
                  <div className="border-b pb-4">
                    <h4 className="font-medium mb-2">Do I need to wash D.S HAIR clip-ins before wearing them?</h4>
                    <p className="text-muted-foreground">All clip-ins have a protective vitamin seal. Before wearing or installing them, it's necessary to wash the extensions.</p>
                  </div>

              {/* FAQ Item 2 */}
              <div className="border-b pb-4">
                <h4 className="font-medium mb-2">How often should D.S HAIR clip-ins be washed?</h4>
                <p className="text-muted-foreground">ONLY wash them when they look and feel like they need it. Since they don't receive the scalp's natural oils, they are prone to dryness, so you don't need to wash them as often as your hair. However, if you feel buildup on them and they're dull and lifeless—it's time for a wash!</p>
              </div>

              {/* FAQ Item 3 */}
              <div className="border-b pb-4">
                <h4 className="font-medium mb-2">After washing, how should you dry the clip-ins?</h4>
                <p className="text-muted-foreground">Hang them on the D.S HAIR Extension Holder, then apply a leave-in conditioner and let them air dry. You can also apply a heat protectant and blow dry the extensions. The holder also makes it easy to curl or straighten the extensions before installing them.</p>
              </div>

              {/* FAQ Item 4 */}
              <div className="border-b pb-4">
                <h4 className="font-medium mb-2">Can you sleep in clip-ins?</h4>
                <p className="text-muted-foreground">No. Sleeping in clip-ins is uncomfortable and can damage the clips and cause matting and tangling.</p>
              </div>

              {/* FAQ Item 5 */}
              <div className="border-b pb-4">
                <h4 className="font-medium mb-2">How long do D.S HAIR clip-ins last?</h4>
                <p className="text-muted-foreground">With proper care, they last 6-12 months. Their lifespan will also depend on how often they are worn.</p>
              </div>

              {/* FAQ Item 6 */}
              <div className="border-b pb-4">
                <h4 className="font-medium mb-2">How long does my hair have to be to wear D.S HAIR?</h4>
                <p className="text-muted-foreground">We recommend 6 inches minimum, but if you think you can make it work then you are more than welcome to try it out :)</p>
              </div>

              {/* FAQ Item 7 */}
              <div className="pb-4">
                <h4 className="font-medium mb-2">Can my D.S HAIR be dyed?</h4>
                <p className="text-muted-foreground">Our extensions are 100% human hair that have gone through its own dyeing process, and although they were constructed to accept color, we do suggest getting a professional opinion by an experienced colorist. Dyeing may lead to shortening the lifespan of your D.S HAIR's and possibly cause damage if not done correctly. We also recommend not lightening or using any bleaching agents.</p>
                <p className="text-muted-foreground mt-2">We do not recommend dying our Balayage or Ombre sets as they have been processed multiple times. Due to the processing they have gone through they do not take to dying well.</p>
                <p className="text-muted-foreground mt-2">Please keep in mind, that if chosen to dye D.S HAIR, it is up to the customers discretion and done at your own risk.</p>
              </div>
                </>
              )}
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-8" id="reviews">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-semibold">{product.rating}</div>
                  <div className="flex items-center gap-1 my-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {product.reviews.toLocaleString()} reviews
                  </div>
                </div>
              </div>
              <Button>Write a Review</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
