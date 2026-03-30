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
              <div className="max-w-3xl space-y-6">
                <h2 className="text-2xl font-bold">K-Tip (Keratin Bond) Hair Extensions — The Gold Standard of Semi-Permanent Extensions</h2>

                {/* Hero image */}
                <div className="rounded-xl overflow-hidden">
                  <img
                    src="https://iloveslavichair.com/image/cachewebp/catalog/blogs/standard-vs-micro-vs-nano-keratin-bond-size-755x422.webp"
                    alt="K-Tip Keratin Bond Extensions — D.S HAIR & BEAUTY"
                    className="w-full object-cover max-h-80"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  K-Tip extensions — also known as Keratin Bond, Hot Fusion or Micro Bond extensions — are the <strong>gold standard of semi-permanent hair extensions</strong>. Each individual strand is pre-tipped with a medical-grade keratin polymer blend and fused to your natural hair using a precision hot-fusion iron at 180–200 °C. The bond cools to form a sleek, virtually invisible sleeve that moves, flexes and behaves exactly like your own hair.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  All D.S HAIR K-Tips are crafted from <strong>100% double-drawn Remy human hair</strong> with perfectly aligned cuticles — zero matting, zero tangling. Backed by 19+ years of professional supply expertise, every strand is rigorously shed-tested before dispatch.
                </p>

                {/* How it works */}
                <div className="border rounded-xl overflow-hidden">
                  <div className="bg-black text-white px-5 py-3 font-semibold text-sm">How Keratin Bond Technology Works</div>
                  <div className="px-5 py-4 space-y-3 text-sm text-muted-foreground">
                    <div className="flex gap-3">
                      <span className="text-xl">🔥</span>
                      <p><strong className="text-foreground">Hot Fusion Bonding.</strong> A specialist wand heats the pre-tipped keratin bead to precisely 180–200 °C. The solid keratin softens and is moulded around a thin section of natural hair — about 1 cm from the scalp — forming a smooth, oval-shaped sleeve. As it cools in seconds, the bond locks permanently in place.</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-xl">💎</span>
                      <p><strong className="text-foreground">Medical-Grade Keratin Formula.</strong> Our keratin blend is composed of pharmaceutical-grade polyamide fused with 5–15% purified keratin protein. Unlike old-fashioned hot glue bonds, this compound is completely residue-free, flexible when cool and dissolves cleanly with professional remover — protecting every strand of your natural hair.</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-xl">🧬</span>
                      <p><strong className="text-foreground">Individual Strand Method.</strong> Each extension strand is bonded one at a time — typically 50–200 strands for a full head. This strand-by-strand placement allows the stylist to precisely control density, volume and colour placement with millimetre accuracy. No visible weft line, no telltale bulk.</p>
                    </div>
                  </div>
                </div>

                {/* Bond types comparison */}
                <div className="border rounded-xl overflow-hidden">
                  <div className="bg-black text-white px-5 py-3 font-semibold text-sm">Choose Your Bond Size</div>
                  <div className="divide-y text-sm">
                    {[
                      { type: "Standard K-Tip", tag: "Classic Choice", weight: "~1g per strand", best: "Medium to thick hair", note: "Full-bodied keratin bead — maximum hold and longevity. Ideal for the nape and crown where hair is densest." },
                      { type: "Micro K-Tip", tag: "Most Popular 🔥", weight: "~0.7g per strand", best: "Fine to medium hair", note: "Smaller bead = more invisible bond. The industry's bestseller for balanced density and natural movement. Perfect for highlights and colour blending." },
                      { type: "Nano K-Tip", tag: "Blue Ocean Pick 💙", weight: "~0.5g per strand", best: "Fine & sensitive hair", note: "Ultra-micro bead — barely visible at the root. Designed for delicate hair around the temples and hairline. Zero tension, maximum comfort. Rapidly growing in UK salons." },
                    ].map((row) => (
                      <div key={row.type} className="px-5 py-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold">{row.type}</span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">{row.tag}</span>
                        </div>
                        <p className="text-muted-foreground text-xs mb-1">{row.note}</p>
                        <div className="flex gap-4 text-xs text-muted-foreground">
                          <span>Bond weight: {row.weight}</span>
                          <span>Best for: {row.best}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* K-tip vs Tape-In comparison */}
                <div className="border rounded-xl overflow-hidden">
                  <div className="bg-black text-white px-5 py-3 font-semibold text-sm">K-Tip vs Tape-In — Which Is Right for Your Client?</div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b bg-muted/30">
                          <th className="text-left px-4 py-2 font-semibold">Feature</th>
                          <th className="text-left px-4 py-2 font-semibold">K-Tip (Keratin Bond)</th>
                          <th className="text-left px-4 py-2 font-semibold">Tape-In</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y text-muted-foreground">
                        {[
                          ["Longevity", "3–5 months", "6–8 weeks"],
                          ["Installation time", "3–5 hours (full head)", "1–2 hours (full head)"],
                          ["Maintenance visits", "Every 3–4 months", "Every 6–8 weeks"],
                          ["Best hair type", "Medium to thick", "Fine to medium"],
                          ["Styling freedom", "Full — updo, ponytail, braid", "High — but avoid heavy oils near bonds"],
                          ["Reusability", "Hair reusable 2–3 cycles", "Tape reusable 2–3 times"],
                          ["Client investment", "Higher upfront, lower long-term", "Lower upfront, more frequent"],
                        ].map(([feature, ktip, tape]) => (
                          <tr key={feature}>
                            <td className="px-4 py-2 font-medium text-foreground">{feature}</td>
                            <td className="px-4 py-2">{ktip}</td>
                            <td className="px-4 py-2">{tape}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Three highlights */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: "🏆", title: "Longest-Lasting", body: "3–5 months per set — up to 3× longer than tape-ins. Fewer salon visits, better value over time." },
                    { icon: "🪞", title: "Truly Invisible", body: "Individual strand bonding means no weft lines, no bulk — even in the most exposed updos and braids." },
                    { icon: "🔄", title: "Reusable Hair", body: "The same Remy hair strands can be re-tipped and reinstalled 2–3 times — maximising your investment." },
                  ].map((item) => (
                    <div key={item.title} className="border rounded-xl p-4 text-center">
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <div className="font-semibold text-sm mb-1">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.body}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-900">
                  <strong>💙 Why Salons Are Switching to Nano K-Tip:</strong> The ultra-micro nano bond is taking UK salons by storm — especially for clients with fine or colour-treated hair. It delivers the same 3–5 month longevity of standard K-tips with up to 40% less weight on each strand, virtually eliminating tension at the hairline. D.S HAIR nano strands are among the most requested items from our Manchester salon partners.
                </div>
              </div>
            ) : product.productType.toLowerCase().includes('butterfly') ? (
              <div className="max-w-3xl space-y-6">
                <h2 className="text-2xl font-bold">Butterfly Weft Extensions — The Next Generation of Invisible Hair</h2>

                {/* Hero image */}
                <div className="rounded-xl overflow-hidden">
                  <img
                    src="/images/butterfly/butterfly-hero.jpg"
                    alt="Butterfly Weft Extensions — D.S HAIR & BEAUTY"
                    className="w-full object-cover max-h-80"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Butterfly Weft is the evolution of modern weft technology — engineered for superior softness, invisible integration and outstanding durability. Crafted from <strong>100% Remy human hair</strong> with a uniquely flexible, ultra-flat base, Butterfly Weft lies naturally against the scalp and feels like it simply grows from within. Trusted by professional stylists in the UK's most prestigious salons.
                </p>

                {/* How it works */}
                <div className="border rounded-xl overflow-hidden">
                  <div className="bg-black text-white px-5 py-3 font-semibold text-sm">How Butterfly Weft Works</div>
                  <div className="px-5 py-4 space-y-3 text-sm text-muted-foreground">
                    <div className="flex gap-3">
                      <span className="text-xl">🦋</span>
                      <p><strong className="text-foreground">Zero Return Hair Technology.</strong> Every strand is loop-anchored in a single direction — eliminating the short, scratchy return hairs found in traditional machine wefts. The result: a weft that sits flush against the scalp with <em>zero irritation</em>.</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-xl">✂️</span>
                      <p><strong className="text-foreground">Trimmable, Sealed Edges.</strong> The reinforced PU edge is precision-sealed, meaning you can cut Butterfly Weft to any width without a single hair coming loose. Perfect customisation for every client's head shape — no wastage, no mess.</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-xl">🌊</span>
                      <p><strong className="text-foreground">Flexible-Base Design.</strong> Unlike stiffer wefts, the Butterfly base is engineered to flex and curve with the natural contour of the head — hugging the nape, temples and crown seamlessly. Clients describe it as hair that "melts into" their own.</p>
                    </div>
                  </div>
                </div>

                {/* Butterfly Weft types */}
                <div className="border rounded-xl overflow-hidden">
                  <div className="bg-black text-white px-5 py-3 font-semibold text-sm">Choose Your Butterfly Weft Style</div>
                  <div className="divide-y text-sm">
                    {[
                      { type: "Half Flat Butterfly Weft", tag: "Most Popular", thickness: "~0.8 mm", best: "Fine to medium hair", note: "The perfect balance — slim, flexible and forgiving. Ideal first Butterfly Weft for most clients." },
                      { type: "Full Flat Butterfly Weft", tag: "Maximum Volume", thickness: "~1.0 mm", best: "Medium to thick hair", note: "Slightly denser construction for clients who need dramatic volume — still flexes beautifully against the scalp." },
                      { type: "Super Weft (Injected)", tag: "Ultra Premium", thickness: "~0.6 mm", best: "Fine & sensitive hair", note: "Hair injected directly into the base — virtually weightless. Invisible in even the finest of ponytails and updos." },
                    ].map((row) => (
                      <div key={row.type} className="px-5 py-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold">{row.type}</span>
                          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">{row.tag}</span>
                        </div>
                        <p className="text-muted-foreground text-xs mb-1">{row.note}</p>
                        <div className="flex gap-4 text-xs text-muted-foreground">
                          <span>Base thickness: {row.thickness}</span>
                          <span>Best for: {row.best}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Three highlights */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: "🦋", title: "Zero Return Hair", body: "No short scratchy hairs at the base — comfortable even on sensitive scalps 24/7." },
                    { icon: "🪞", title: "Invisible Finish", body: "Flexible base curves with your head shape. Undetectable in high ponytails, braids and updos." },
                    { icon: "✂️", title: "Cut to Perfection", body: "Trimmable sealed edges — customise the exact width for every client without any shedding." },
                  ].map((item) => (
                    <div key={item.title} className="border rounded-xl p-4 text-center">
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <div className="font-semibold text-sm mb-1">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.body}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-sm text-purple-900">
                  <strong>✨ Why Stylists Choose Butterfly Weft:</strong> The flexible base installs faster, blends more naturally and requires fewer adjustments than traditional wefts — giving stylists more efficiency and clients a more luxurious result. Once experienced, most salons never go back.
                </div>
              </div>
            ) : product.productType.toLowerCase().includes('tape') ? (
              <div className="max-w-3xl space-y-6">
                <h2 className="text-2xl font-bold">Tape-In Hair Extensions — The Salon Favourite for Invisible Length</h2>

                {/* Hero image */}
                <div className="rounded-xl overflow-hidden">
                  <img
                    src="/images/tape/tape-hero.jpg"
                    alt="Tape-In Hair Extensions — D.S HAIR & BEAUTY"
                    className="w-full object-cover max-h-80"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Tape-In extensions are one of the fastest, flattest and most comfortable semi-permanent methods available today. Ultra-thin polyurethane (PU) wefts — pre-coated with medical-grade adhesive — are sandwiched around a thin slice of your natural hair, lying completely flat against the scalp. The result is a seamless, virtually undetectable finish that your clients will love to live in.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  All D.S HAIR tape-ins are crafted from <strong>100% double-drawn Remy human hair</strong>, hand-selected for consistent density from root to tip. Backed by 19+ years of professional supply expertise, every weft is rigorously tested before dispatch.
                </p>

                {/* How it works */}
                <div className="border rounded-xl overflow-hidden">
                  <div className="bg-black text-white px-5 py-3 font-semibold text-sm">How Tape-In Extensions Work</div>
                  <div className="px-5 py-4 space-y-3 text-sm text-muted-foreground">
                    <div className="flex gap-3">
                      <span className="text-xl">🩹</span>
                      <p><strong className="text-foreground">Sandwich Bonding.</strong> Each tab consists of two ultra-thin PU wefts coated with skin-safe adhesive. A 2–3mm slice of natural hair is sandwiched between the two tabs and pressed firmly together — no heat, no chemicals, no damage to the hair shaft.</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-xl">🪄</span>
                      <p><strong className="text-foreground">Micro-Thin Profile.</strong> The polyurethane base is only 0.5–1mm thick — one of the flattest profiles of any extension method. It lies flush against the scalp, making it virtually invisible even when the hair is pinned up.</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-xl">♻️</span>
                      <p><strong className="text-foreground">Re-tapeable & Reusable.</strong> When the hair grows out (every 6–8 weeks), a tape remover solution dissolves the bond cleanly. Fresh adhesive tabs are applied and the same weft re-installed — the hair itself can be reused 2–3 times, making this a cost-effective investment.</p>
                    </div>
                  </div>
                </div>

                {/* Tape-In types */}
                <div className="border rounded-xl overflow-hidden">
                  <div className="bg-black text-white px-5 py-3 font-semibold text-sm">Choose Your Tape-In Style</div>
                  <div className="divide-y text-sm">
                    {[
                      { type: "Invisible / Seamless Tape-In", tag: "Blue Ocean Pick", thickness: "~0.5 mm", best: "Fine to medium hair", note: "Skin-tone polyurethane base mimics the scalp — hair appears to grow directly from the tab. The most undetectable tape-in on the market and a growing favourite in UK salons." },
                      { type: "Standard Tape-In Weft", tag: "Most Popular", thickness: "~0.8 mm", best: "All hair types", note: "The classic, trusted salon choice. Fast to apply, reliable hold, excellent volume. Perfect for clients wanting a quick full-head transformation." },
                      { type: "Mini Tape-In", tag: "Precision Fit", thickness: "~0.5 mm", best: "Fine hair, hairline work", note: "Half the width of a standard tab — designed for temples, hairlines and sparse areas where precision placement is key." },
                    ].map((row) => (
                      <div key={row.type} className="px-5 py-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold">{row.type}</span>
                          <span className="text-xs bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full">{row.tag}</span>
                        </div>
                        <p className="text-muted-foreground text-xs mb-1">{row.note}</p>
                        <div className="flex gap-4 text-xs text-muted-foreground">
                          <span>Base thickness: {row.thickness}</span>
                          <span>Best for: {row.best}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Three highlights */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: "👁️", title: "Invisible Finish", body: "0.5mm ultra-flat PU base lies flush against the scalp. Undetectable in ponytails, braids and updos." },
                    { icon: "⚡", title: "Fast Application", body: "A full head (40–60 tabs) installed in under 90 minutes — the quickest professional extension method." },
                    { icon: "♻️", title: "Re-tapeable Hair", body: "Quality Remy wefts last 6–12 months with proper care — re-tape every 6–8 weeks and reuse the hair 2–3 times." },
                  ].map((item) => (
                    <div key={item.title} className="border rounded-xl p-4 text-center">
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <div className="font-semibold text-sm mb-1">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.body}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-sm text-rose-900">
                  <strong>✨ Why Salons Love Tape-Ins:</strong> Fastest application of any semi-permanent method, minimal tool investment, immediate natural results — and clients return every 6–8 weeks for a move-up. A reliable income stream and a high client-satisfaction service. D.S HAIR tapes are trusted by salons across the UK backed by 19 years of quality assurance.
                </div>
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
            ) : product.productType.toLowerCase().includes('clip') ? (
              <div className="max-w-3xl space-y-6">
                <h2 className="text-2xl font-bold">Clip-In Hair Extensions — The Most Effortless Way to Transform Your Look</h2>

                {/* Hero image */}
                <div className="rounded-xl overflow-hidden">
                  <img
                    src="/images/clip/clip-hero.jpg"
                    alt="Clip-In Hair Extensions — D.S HAIR & BEAUTY"
                    className="w-full object-cover max-h-80"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Clip-In extensions are the world's most popular at-home extension method — and for good reason. A set of wefts fitted with precision snap-close clips attaches to your natural hair in minutes, with zero commitment, zero damage and zero salon visit required. Wear them today. Remove them tonight. Style them again tomorrow.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  All D.S HAIR clip-ins are crafted from <strong>100% double-drawn Remy human hair</strong>, hand-selected for consistent density root to tip. Our 19+ years of professional supply expertise means every set is rigorously weight-checked and shed-tested before dispatch.
                </p>

                {/* How it works */}
                <div className="border rounded-xl overflow-hidden">
                  <div className="bg-black text-white px-5 py-3 font-semibold text-sm">How Clip-In Extensions Work</div>
                  <div className="px-5 py-4 space-y-3 text-sm text-muted-foreground">
                    <div className="flex gap-3">
                      <span className="text-xl">📎</span>
                      <p><strong className="text-foreground">Snap-Close Pressure Clips.</strong> Each weft features silicone-lined pressure clips that grip your natural hair without glue, heat or chemicals. The silicone lining protects the hair shaft and prevents slipping — your style stays put all day.</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-xl">🪡</span>
                      <p><strong className="text-foreground">Layered Row System.</strong> A full set typically includes 7–9 wefts of varying widths (1-clip to 4-clip). Each row is clipped into a horizontal section, working from nape to crown. Layering the wefts creates seamless, natural-looking volume and length.</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-xl">✨</span>
                      <p><strong className="text-foreground">No Commitment, No Damage.</strong> Unlike semi-permanent methods, clip-ins are fully removable — attach in 5–10 minutes, remove just as fast. Proper application causes zero damage to your natural hair. Perfect for special occasions, everyday wear or testing a new length before committing.</p>
                    </div>
                  </div>
                </div>

                {/* Clip-In types */}
                <div className="border rounded-xl overflow-hidden">
                  <div className="bg-black text-white px-5 py-3 font-semibold text-sm">Choose Your Clip-In Style</div>
                  <div className="divide-y text-sm">
                    {[
                      { type: "Invisible / Seamless Clip-In", tag: "Blue Ocean Pick", base: "Thin silicone strip", best: "Fine to medium hair", note: "Ultra-flat silicone or PU base mimics the scalp — hair lies completely flat with zero visible weft line. Milk & Blush's best-seller and a fast-growing favourite in UK salons. Ideal for clients who wear their hair up." },
                      { type: "Classic Clip-In Weft", tag: "Most Popular", base: "Fabric/cotton weft", best: "All hair types", note: "The trusted everyday workhorse. Durable cotton weft base, strong clips, consistent density. The choice for those wanting reliable volume and length at home — no experience required." },
                      { type: "Clip-In Filler / Topper", tag: "Precision Volume", base: "Narrow weft", best: "Thinning areas, crown", note: "Designed for targeted coverage — temples, crown, parting line or hairline. Half the width of a standard weft, perfect for adding fullness exactly where it is needed most." },
                    ].map((row) => (
                      <div key={row.type} className="px-5 py-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold">{row.type}</span>
                          <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">{row.tag}</span>
                        </div>
                        <p className="text-muted-foreground text-xs mb-1">{row.note}</p>
                        <div className="flex gap-4 text-xs text-muted-foreground">
                          <span>Base: {row.base}</span>
                          <span>Best for: {row.best}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Three highlights */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: "⏱️", title: "5-Minute Style", body: "Attach a full set in under 10 minutes. No salon appointment, no waiting — instant length and volume on demand." },
                    { icon: "🫧", title: "Zero Damage", body: "Silicone-lined clips grip without pulling. Proper technique = zero breakage to natural hair. Safe for daily wear." },
                    { icon: "🔁", title: "Lasts 6–12 Months", body: "With proper care, a quality set of Remy clip-ins can be worn hundreds of times. Cost-per-wear is exceptionally low." },
                  ].map((item) => (
                    <div key={item.title} className="border rounded-xl p-4 text-center">
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <div className="font-semibold text-sm mb-1">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.body}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-900">
                  <strong>✨ Why Clients Love Clip-Ins:</strong> Instant results, total flexibility and zero salon commitment. Clip-ins are the #1 entry point for new extension clients — and with D.S HAIR's 100% Remy quality and 31 colour shades, finding the perfect seamless match has never been easier. Backed by 19 years of professional expertise.
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
              <h3 className="font-semibold text-xl">How to Install D.S HAIR K-Tip (Keratin Bond) Extensions</h3>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-sm text-blue-900">
                  <strong>⚠️ Professional Installation Required.</strong> K-Tip extensions must be fitted and removed by a certified hair extension stylist. The hot-fusion process requires specialist equipment and training — please do not attempt at home. D.S HAIR can help you connect with accredited stylists in your area.
                </p>
              </div>

              {/* Installation steps */}
              {[
                {
                  n: 1,
                  title: "Prepare & Cleanse",
                  body: "Client arrives with freshly washed, completely dry hair — free of all oils, conditioner or styling products near the roots. Any residue on the hair shaft can prevent the keratin from bonding correctly. The stylist performs a strand test to confirm hair is strong enough for fusion.",
                },
                {
                  n: 2,
                  title: "Section from the Nape",
                  body: "Beginning at the nape, the stylist creates precise horizontal sections 1–1.5 cm from the scalp. Each sub-section for a single strand is roughly 0.5 cm wide. The perimeter hairline and temples are left clear (minimum 1 cm) — so the bonds remain concealed in every style.",
                },
                {
                  n: 3,
                  title: "Heat the Keratin Bond",
                  body: "The hot-fusion wand is heated to 180–200 °C. The tip of the wand is held against the pre-tipped keratin bead for 3–5 seconds until the bond softens to a pliable, translucent state. Overheating is avoided — a quality wand maintains a consistent, controlled temperature throughout.",
                },
                {
                  n: 4,
                  title: "Fuse Bond to Natural Hair",
                  body: "The softened keratin bead is immediately moulded around the base of the natural hair section — approximately 1 cm from the scalp. The stylist rolls it into a smooth, compact oval sleeve between gloved fingers for 5–8 seconds while it cools and hardens. A firm, clean bond should be completely formed within 15 seconds.",
                },
                {
                  n: 5,
                  title: "Work Row by Row",
                  body: "The process is repeated strand by strand, row by row, working from nape to crown. Strands are staggered in a 'brick wall' pattern to prevent any visible sections or pressure points. Standard full head: 100–150 strands; micro/nano full head: 150–200 strands. Typical session: 3–5 hours.",
                },
                {
                  n: 6,
                  title: "Cut, Blend & Style",
                  body: "Once all strands are bonded, the stylist performs a precision cut to blend the extensions with the client's natural length and shape. A final heat-styled blow-out ensures seamless integration — clients typically leave the salon with a finished look ready to wear.",
                },
                {
                  n: 7,
                  title: "Professional Removal",
                  body: "At 3–4 months, the client returns for a move-up or removal. The stylist applies a professional keratin remover solution (isopropyl alcohol or ethyl acetate based) directly to each bond, softening it until it can be gently broken apart with flat-nosed pliers. The bond residue combs out cleanly — no cutting, no damage to natural hair.",
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

              {/* Installation methods */}
              <div className="border rounded-xl overflow-hidden">
                <div className="bg-black text-white px-5 py-3 font-semibold text-sm">Installation Time & Maintenance Schedule</div>
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x text-sm">
                  <div className="px-5 py-4 space-y-3">
                    <div className="font-semibold mb-2">⏱ Installation Time</div>
                    {[
                      { label: "Half head (50–80 strands)", time: "1.5–2.5 hrs" },
                      { label: "Full head (100–150 strands)", time: "3–5 hrs" },
                      { label: "Nano / micro full head (150–200)", time: "4–6 hrs" },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between text-muted-foreground">
                        <span>{row.label}</span>
                        <span className="font-medium text-foreground">{row.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="px-5 py-4 space-y-3">
                    <div className="font-semibold mb-2">🔄 Maintenance Schedule</div>
                    {[
                      { label: "Check-in appointment", time: "4–6 weeks" },
                      { label: "Move-up / reposition", time: "6–8 weeks" },
                      { label: "Full removal & reinstall", time: "3–5 months" },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between text-muted-foreground">
                        <span>{row.label}</span>
                        <span className="font-medium text-foreground">{row.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
                <strong>💡 Stylist Tip:</strong> Mixing bond sizes on the same head delivers the most natural result. Use standard bonds at the nape and crown for maximum hold; switch to micro or nano bonds at the temples, hairline and side partings for an ultra-fine, invisible finish. Most professional stylists achieve this mixed-size installation in the same appointment time.
              </div>
            </div>
            ) : product.productType.toLowerCase().includes('butterfly') ? (
            <div className="max-w-3xl space-y-8">
              <h3 className="font-semibold text-xl">How to Install Butterfly Weft Extensions</h3>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="text-sm text-purple-800">
                  <strong>⚠️ Professional Installation Required.</strong> Butterfly Weft extensions must be fitted and maintained by a certified hair extension stylist for the best, safest result. The flexible base means installation is faster than standard wefts — but precision sectioning is key.
                </p>
              </div>

              {/* Installation method selector */}
              <div className="grid grid-cols-3 gap-3 text-center text-sm">
                {[
                  { icon: "📿", method: "Bead & Sew", time: "1.5–2.5 hrs", hold: "8–12 weeks" },
                  { icon: "🧵", method: "Sew-In Cornrow", time: "2–3 hrs", hold: "6–8 weeks" },
                  { icon: "🩹", method: "Invisible / Skin Weft", time: "45–60 mins", hold: "4–6 weeks" },
                ].map((m) => (
                  <div key={m.method} className="border rounded-xl p-3">
                    <div className="text-2xl mb-1">{m.icon}</div>
                    <div className="font-semibold mb-1">{m.method}</div>
                    <div className="text-xs text-muted-foreground">Install: {m.time}</div>
                    <div className="text-xs text-muted-foreground">Lasts: {m.hold}</div>
                  </div>
                ))}
              </div>

              <h4 className="font-semibold text-lg">Step-by-Step: Bead & Sew Method (Recommended for Butterfly Weft)</h4>

              {[
                {
                  n: 1,
                  title: "Prepare & Section",
                  body: "Start with freshly washed, fully blow-dried hair — no product at the roots. Create a clean horizontal parting 1cm from the nape. Pin all hair above neatly out of the way. Precise sectioning is the foundation of an invisible result.",
                },
                {
                  n: 2,
                  title: "Create the Anchor Braid",
                  body: "Braid a slim cornrow anchor along the parting — keep it tight but not too tense. With Butterfly Weft's flexible base, the anchor braid doesn't need to be perfectly rigid; the weft will conform to any slight curve naturally.",
                },
                {
                  n: 3,
                  title: "Thread & Clamp the Micro-Beads",
                  body: "Slide silicone-lined micro-beads onto the anchor braid at 1–2 cm intervals. Pull the braid through each bead using a loop tool and clamp flat with pliers. The silicone lining protects the natural hair from metal friction.",
                },
                {
                  n: 4,
                  title: "Trim & Attach the Butterfly Weft",
                  body: "Measure the Butterfly Weft against the row width. Use sharp scissors to trim the sealed edge to the exact length — no fraying, no shed hairs. Lay the weft against the beads and sew in place with tight, even stitches using a curved needle and strong thread.",
                },
                {
                  n: 5,
                  title: "Repeat, Blend & Finish",
                  body: "Release the next section 2–3 cm above and repeat. Work from nape to crown — typically 3–4 rows for a full head. Once all rows are secure, blend your natural hair over the wefts, then cut, layer and style. The flexible Butterfly base will naturally contour to the head, giving a seamless, salon-perfect finish.",
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
                  <div className="text-muted-foreground">1.5–3 hours (faster than standard wefts)</div>
                </div>
                <div className="border rounded-xl p-4 text-sm">
                  <div className="font-semibold mb-1">🔄 Move-up frequency</div>
                  <div className="text-muted-foreground">Every 6–8 weeks as hair grows</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 text-sm text-muted-foreground">
                💡 <strong>Stylist Tip:</strong> The Butterfly Weft's flexible base means it naturally follows the head's curve — spend less time forcing the weft to lie flat, and more time perfecting the blend. Many stylists report 20–30% faster installation compared to standard wefts.
              </div>
            </div>
            ) : product.productType.toLowerCase().includes('tape') ? (
            <div className="max-w-3xl space-y-8">
              <h3 className="font-semibold text-xl">How to Apply Tape-In Hair Extensions</h3>

              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="text-sm text-rose-800">
                  <strong>⚠️ Professional Installation Recommended.</strong> While tape-ins are the most straightforward semi-permanent method, we strongly recommend professional fitting for the best bond, longest wear and zero risk to your natural hair.
                </p>
              </div>

              {/* Installation method selector */}
              <div className="grid grid-cols-3 gap-3 text-center text-sm">
                {[
                  { icon: "🩹", method: "Standard Tape-In", time: "60–90 mins", hold: "6–8 weeks" },
                  { icon: "👁️", method: "Invisible Tape-In", time: "60–90 mins", hold: "6–8 weeks" },
                  { icon: "🔹", method: "Mini Tape-In", time: "30–45 mins", hold: "6–8 weeks" },
                ].map((m) => (
                  <div key={m.method} className="border rounded-xl p-3">
                    <div className="text-2xl mb-1">{m.icon}</div>
                    <div className="font-semibold mb-1">{m.method}</div>
                    <div className="text-xs text-muted-foreground">Install: {m.time}</div>
                    <div className="text-xs text-muted-foreground">Lasts: {m.hold}</div>
                  </div>
                ))}
              </div>

              {/* Step-by-step */}
              {[
                {
                  n: 1,
                  title: "Prepare the Hair",
                  body: "Wash with a sulphate-free shampoo and blow-dry completely straight. Do NOT use conditioner at the roots — any oil or silicone residue will weaken the tape bond. Hair must be 100% dry and product-free before starting.",
                },
                {
                  n: 2,
                  title: "Create Your First Section",
                  body: "Starting at the nape, use a tail comb to create a clean horizontal parting approximately 1cm from the hairline. Clip the upper hair neatly out of the way. The section should be thin enough to hide the tab — roughly 2–3mm of hair.",
                },
                {
                  n: 3,
                  title: "Apply the First Tab (Below)",
                  body: "Peel the protective film from one tape-in weft. Slide it under the section, adhesive side up, positioning the tape edge approximately 0.5cm from the scalp — never right at the root. Press firmly for 10–15 seconds.",
                },
                {
                  n: 4,
                  title: "Sandwich & Press",
                  body: "Take a second matching weft, peel the film, and place it directly on top of the same section — adhesive side down, sandwiching your natural hair between the two tabs. Press together firmly for 30 seconds. Use flat-jaw pliers or a bond tool for extra pressure if available.",
                },
                {
                  n: 5,
                  title: "Work Upward, Blend & Finish",
                  body: "Move upward row by row, leaving 2–3cm between each row to allow natural movement. Complete the installation from nape to occipital bone, then from ear to ear. Once finished, flat-iron lightly over the bonds to activate the heat-sensitive adhesive for a stronger hold. Trim and blend to shape.",
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

              {/* Time & maintenance cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold mb-1">60–90</div>
                  <div className="text-xs text-rose-600 font-medium">minutes</div>
                  <div className="text-xs text-muted-foreground mt-1">Full head application time</div>
                </div>
                <div className="border rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold mb-1">6–8</div>
                  <div className="text-xs text-rose-600 font-medium">weeks</div>
                  <div className="text-xs text-muted-foreground mt-1">Between re-tape appointments</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 text-sm text-muted-foreground">
                💡 <strong>Stylist Tip:</strong> For Invisible Tape-Ins, match the PU base tone to the client's scalp before applying — this is the key to a truly undetectable result. Most stylists report tape-ins are 40–50% faster to apply than weft installations, making them an excellent high-turnover service.
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
            ) : product.productType.toLowerCase().includes('clip') ? (
            <div className="max-w-3xl space-y-8">
              <h3 className="font-semibold text-xl">How to Apply D.S HAIR Clip-In Extensions</h3>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <p className="text-sm text-emerald-800">
                  <strong>✅ At-Home Friendly.</strong> Clip-ins are the only extension method you can safely apply yourself at home. Follow these steps for a seamless, natural-looking result every time. For Invisible / Seamless Clip-Ins, the same steps apply — the flat base makes them even easier to conceal.
                </p>
              </div>

              {/* Method selector */}
              <div className="grid grid-cols-3 gap-3 text-center text-sm">
                {[
                  { icon: "🪄", method: "Invisible Clip-In", time: "5–10 mins", wear: "1 day–daily" },
                  { icon: "📎", method: "Classic Clip-In", time: "5–10 mins", wear: "1 day–daily" },
                  { icon: "🔹", method: "Clip-In Filler", time: "2–3 mins", wear: "Targeted areas" },
                ].map((m) => (
                  <div key={m.method} className="border rounded-xl p-3">
                    <div className="text-2xl mb-1">{m.icon}</div>
                    <div className="font-semibold mb-1">{m.method}</div>
                    <div className="text-xs text-muted-foreground">Apply: {m.time}</div>
                    <div className="text-xs text-muted-foreground">Wear: {m.wear}</div>
                  </div>
                ))}
              </div>

              {/* Step-by-step */}
              {[
                {
                  n: 1,
                  title: "Prepare Your Hair",
                  body: "Start with clean, dry, product-free hair. Blow-dry straight for the smoothest blend. Avoid heavy leave-ins or serums near the roots — these can cause clips to slip throughout the day. Fine hair tip: a light mist of dry shampoo or hairspray at the roots creates extra texture for the clips to grip.",
                },
                {
                  n: 2,
                  title: "Create Your First Section",
                  body: "Using a tail comb, create a clean horizontal parting from ear to ear at the nape. Clip or tie all hair above the parting neatly out of the way. The section should be wide enough to cover the full width of your largest weft (typically 8–9 cm).",
                },
                {
                  n: 3,
                  title: "Backcomb for Grip (Optional)",
                  body: "For longer-lasting hold, lightly backcomb the roots of the exposed section — just 1–2 cm at the scalp. This creates texture for the clip teeth to anchor into without any damage. This step is especially helpful for fine or silky hair.",
                },
                {
                  n: 4,
                  title: "Open, Place & Snap Closed",
                  body: "Open all clips on the weft. Position the weft against your scalp at the parting line, centred horizontally. Press each clip firmly downward into the hair section until you hear/feel a snap. Start with the centre clip, then the outer clips — this prevents the weft from shifting. For Invisible Clip-Ins, ensure the flat silicone base is face-down against the scalp.",
                },
                {
                  n: 5,
                  title: "Build Row by Row",
                  body: "Release 3–4 cm of hair above the first section. Create another parting, then attach the next weft. Repeat working upward — typically 3–5 rows for a full head. Use narrower 1-clip and 2-clip wefts at the temples and sides. Leave 4–5 cm of natural hair at the very top so it falls naturally over all the wefts.",
                },
                {
                  n: 6,
                  title: "Blend & Style",
                  body: "Let down the top section and brush through gently from mid-shaft to ends. Blend using a curling iron or straightener — curling both your natural hair and the extensions together creates the most seamless finish. A final light mist of shine spray pulls everything together.",
                },
              ].map((step) => (
                <div key={step.n} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold">{step.n}</div>
                  <div>
                    <h4 className="font-semibold mb-1">{step.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}

              {/* Time cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded-xl p-4 text-sm">
                  <div className="font-semibold mb-1">⏱ Full set application</div>
                  <div className="text-muted-foreground">5–10 minutes once practised</div>
                </div>
                <div className="border rounded-xl p-4 text-sm">
                  <div className="font-semibold mb-1">🔄 Daily removal</div>
                  <div className="text-muted-foreground">Remove nightly — do not sleep in clip-ins</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 text-sm text-muted-foreground">
                💡 <strong>Pro Tip:</strong> For Invisible Clip-Ins, the silicone base should sit flush against your scalp with no visible ridge. If you can see the weft edge, the section is too thin — add a little more natural hair over the top. Many stylists recommend starting with the seamless style at the crown where visibility is highest.
              </div>
            </div>
            ) : (
            <div className="max-w-3xl space-y-8">
              <h3 className="font-semibold text-xl">How to Apply Extensions</h3>
              <p className="text-muted-foreground">Contact us for application guidance for your specific product type.</p>
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
              <h3 className="font-semibold text-xl">Finding Your Perfect K-Tip Match</h3>

              {/* Hair type guide */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: "Fine / Thin Hair", icon: "🌿", verdict: "✅ Nano K-Tip", tag: "Blue Ocean Pick", desc: "Nano bonds (0.5g) are virtually invisible at the root — zero tension at the temples and hairline. Perfect for clients who have never been able to wear semi-permanent extensions before. Rapidly becoming the UK salon standard for delicate hair." },
                  { label: "Medium Hair", icon: "💆", verdict: "✅ Micro K-Tip", tag: "Most Popular", desc: "Micro bonds (0.7g) strike the ideal balance of hold and comfort. The industry bestseller — delivers a natural, full result for the widest range of clients. Ideal for highlights, colour blending and general volume." },
                  { label: "Thick / Coarse Hair", icon: "💪", verdict: "✅ Standard K-Tip", tag: "Maximum Hold", desc: "Standard bonds (1g) provide the strongest, most durable fusion for thick, coarse or high-density hair. Works exceptionally well at the nape and crown where hair is at its densest and most resilient." },
                ].map((item) => (
                  <div key={item.label} className="border rounded-xl p-4">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-semibold mb-1">{item.label}</div>
                    <div className="text-xs font-medium text-blue-700 mb-1">{item.verdict}</div>
                    <span className="inline-block text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full mb-2">{item.tag}</span>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* How many strands */}
              <div className="border rounded-xl overflow-hidden">
                <div className="bg-black text-white px-5 py-3 font-semibold">How many strands do I need?</div>
                <div className="divide-y">
                  {[
                    { goal: "Add subtle volume (no length change)", strands: "50–80 strands", weight: "50–80g", rows: "2–3 rows" },
                    { goal: "Volume + moderate length (2–4 inches)", strands: "100–120 strands", weight: "100–120g", rows: "3–4 rows" },
                    { goal: "Full dramatic transformation", strands: "150–200 strands", weight: "150–200g", rows: "5–6 rows" },
                  ].map((row) => (
                    <div key={row.goal} className="grid grid-cols-4 px-5 py-3 text-sm gap-2">
                      <div className="col-span-2 text-muted-foreground">{row.goal}</div>
                      <div className="font-medium">{row.strands}</div>
                      <div className="text-muted-foreground">{row.rows}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Length guide */}
              <div className="border rounded-xl overflow-hidden">
                <div className="bg-black text-white px-5 py-3 font-semibold">Length Guide</div>
                <div className="divide-y text-sm">
                  {[
                    { length: '16" (40 cm)', look: "Shoulder length", best: "Natural volume boost; adds approx. 4–5 inches to a chin-length bob" },
                    { length: '18" (45 cm)', look: "Below shoulder", best: "The most versatile length — works on most clients and blends beautifully" },
                    { length: '20" (50 cm)', look: "Mid-back", best: "Striking length transformation; ideal for clients with naturally shoulder-length hair" },
                    { length: '22" (55 cm)', look: "Long mid-back", best: "Statement length — popular for bridal and special occasion clients" },
                    { length: '24–28" (60–70 cm)', look: "Lower back", best: "Ultra-dramatic; requires thicker natural hair for best integration" },
                  ].map((row) => (
                    <div key={row.length} className="grid grid-cols-3 px-5 py-3 gap-2">
                      <div className="font-medium">{row.length}</div>
                      <div className="text-muted-foreground">{row.look}</div>
                      <div className="text-xs text-muted-foreground">{row.best}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pro mixing tip */}
              <div className="border rounded-xl overflow-hidden">
                <div className="bg-black text-white px-5 py-3 font-semibold text-sm">Pro Technique: Mixed Bond Sizing</div>
                <div className="px-5 py-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  {[
                    { zone: "🎯 Crown & Nape", bond: "Standard (1g)", reason: "Densest natural hair — maximum grip, strongest hold." },
                    { zone: "💆 Mid-sides", bond: "Micro (0.7g)", reason: "Natural hair is finer here — lighter bond for comfort and natural movement." },
                    { zone: "🌿 Temples & Hairline", bond: "Nano (0.5g)", reason: "Ultra-fine zone — nano bonds are invisible and completely tension-free." },
                  ].map((item) => (
                    <div key={item.zone} className="border rounded-lg p-3">
                      <div className="font-semibold mb-1">{item.zone}</div>
                      <div className="text-blue-700 font-medium text-xs mb-1">{item.bond}</div>
                      <div className="text-muted-foreground text-xs">{item.reason}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-900">
                💡 <strong>Not sure which bond size or length?</strong> WhatsApp us a photo of your hair — our team will recommend the perfect type, length and strand count for your client's specific hair type and goals, completely free.
              </div>
            </div>
            ) : product.productType.toLowerCase().includes('butterfly') ? (
            <div className="max-w-3xl space-y-8">
              <h3 className="font-semibold text-xl">Finding Your Perfect Butterfly Weft Match</h3>

              {/* Hair type guide */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: "Fine / Thin Hair", icon: "🌿", verdict: "✅ Super Weft", desc: "The injected Super Weft (0.6mm) is made for delicate strands — featherlight, zero-tension, virtually weightless. Invisible even in the finest high ponytail." },
                  { label: "Medium Hair", icon: "💆", verdict: "✅ Half Flat", desc: "Half Flat Butterfly Weft is the go-to for medium hair. Flexible enough to contour the head perfectly, with just the right density for a naturally full look." },
                  { label: "Thick / Coarse Hair", icon: "💪", verdict: "✅ Full Flat", desc: "Full Flat Butterfly Weft provides the density needed to blend seamlessly with thicker natural hair — still flatter and more comfortable than machine weft." },
                ].map((item) => (
                  <div key={item.label} className="border rounded-xl p-4">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-semibold mb-1">{item.label}</div>
                    <div className="text-xs font-medium text-purple-700 mb-2">{item.verdict}</div>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* How many packs */}
              <div className="border rounded-xl overflow-hidden">
                <div className="bg-black text-white px-5 py-3 font-semibold">How many packs / grams do I need?</div>
                <div className="divide-y">
                  {[
                    { goal: "Add volume only (no extra length)", weight: "100–150g", rows: "2–3 rows" },
                    { goal: "Volume + moderate length gain", weight: "150–200g", rows: "3–4 rows" },
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
                    { len: '16"', effect: "Shoulder length" },
                    { len: '20"', effect: "Mid-back" },
                    { len: '24"', effect: "Waist length" },
                    { len: '28"', effect: "Hip length & beyond" },
                  ].map((item) => (
                    <div key={item.len} className="border rounded-xl p-3 text-center text-sm">
                      <div className="text-xl font-bold mb-1">{item.len}</div>
                      <div className="text-xs text-muted-foreground">{item.effect}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Butterfly Weft style callout */}
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                <div className="font-semibold mb-2">🦋 Which Butterfly Weft Style is Right for Your Client?</div>
                <div className="space-y-2 text-sm text-purple-900">
                  <div className="flex gap-2"><span>✅</span><span><strong>Super Weft (Injected):</strong> Fine/sensitive hair, high-visibility areas (temples, parting line) — the most invisible option available</span></div>
                  <div className="flex gap-2"><span>✅</span><span><strong>Half Flat:</strong> The versatile everyday choice — works for 80% of clients, fastest to install</span></div>
                  <div className="flex gap-2"><span>✅</span><span><strong>Full Flat:</strong> Clients wanting maximum volume, or those with naturally thick hair who need more density per row</span></div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 text-sm text-muted-foreground">
                💡 <strong>Not sure which style suits your client?</strong> WhatsApp us a photo — our team of extension specialists will advise on the perfect Butterfly Weft type, weight and length for free.
              </div>
            </div>
            ) : product.productType.toLowerCase().includes('tape') ? (
            <div className="max-w-3xl space-y-8">
              <h3 className="font-semibold text-xl">Finding Your Perfect Tape-In Match</h3>

              {/* Hair type guide */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: "Fine / Thin Hair", icon: "🌿", verdict: "✅ Invisible Tape-In", desc: "The ultra-thin skin-tone PU base is featherlight and virtually invisible — perfect for delicate strands. Invisible Tape-Ins add volume without any visible tabs, even in the finest ponytail." },
                  { label: "Medium Hair", icon: "💆", verdict: "✅ Standard or Invisible", desc: "Standard tape-ins provide reliable hold and excellent volume for medium hair. For clients who want zero visibility, upgrade to Invisible Tape-Ins for a skin-matching seamless finish." },
                  { label: "Thick / Coarse Hair", icon: "💪", verdict: "✅ Standard Tape-In", desc: "Standard tape-ins with a slightly thicker PU base give the grip needed for dense hair. Multiple rows ensure seamless blending. Very thick hair clients may pair with weft extensions for maximum density." },
                ].map((item) => (
                  <div key={item.label} className="border rounded-xl p-4">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-semibold mb-1">{item.label}</div>
                    <div className="text-xs font-medium text-rose-700 mb-2">{item.verdict}</div>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* How many tabs */}
              <div className="border rounded-xl overflow-hidden">
                <div className="bg-black text-white px-5 py-3 font-semibold">How many tabs / packs do I need?</div>
                <div className="divide-y">
                  {[
                    { goal: "Add volume only (no length)", tabs: "20–30 tabs (50g)", rows: "2–3 rows" },
                    { goal: "Volume + moderate length gain", tabs: "30–40 tabs (75g)", rows: "3–4 rows" },
                    { goal: "Full length transformation", tabs: "40–60 tabs (100–150g)", rows: "4–5 rows" },
                  ].map((row) => (
                    <div key={row.goal} className="grid grid-cols-3 px-5 py-3 text-sm">
                      <span className="text-muted-foreground">{row.goal}</span>
                      <span className="font-medium">{row.tabs}</span>
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
                    { len: '16"', effect: "Shoulder length" },
                    { len: '18"', effect: "Collar bone" },
                    { len: '20"', effect: "Mid-back" },
                    { len: '22"', effect: "Lower back" },
                  ].map((item) => (
                    <div key={item.len} className="border rounded-xl p-3 text-center text-sm">
                      <div className="text-xl font-bold mb-1">{item.len}</div>
                      <div className="text-xs text-muted-foreground">{item.effect}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tape-In style callout */}
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-5">
                <div className="font-semibold mb-2">🩹 Which Tape-In Style is Right for Your Client?</div>
                <div className="space-y-2 text-sm text-rose-900">
                  <div className="flex gap-2"><span>✅</span><span><strong>Invisible Tape-In:</strong> Fine hair, high-visibility areas, clients who wear their hair up regularly — the most undetectable result</span></div>
                  <div className="flex gap-2"><span>✅</span><span><strong>Standard Tape-In:</strong> The versatile workhorse — works for all hair types, fastest to apply, most popular in salons</span></div>
                  <div className="flex gap-2"><span>✅</span><span><strong>Mini Tape-In:</strong> Temples, hairlines, sparse patches — half-width precision placement where standard tabs are too wide</span></div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 text-sm text-muted-foreground">
                💡 <strong>Not sure how many tabs your client needs?</strong> WhatsApp us a photo — our D.S HAIR extension specialists will recommend the perfect tab count, weight and length for free, based on 19 years of professional experience.
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
            ) : product.productType.toLowerCase().includes('clip') ? (
            <div className="max-w-3xl space-y-8">
              <h3 className="font-semibold text-xl">Finding Your Perfect Clip-In Match</h3>

              {/* Hair type guide */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: "Fine / Thin Hair", icon: "🌿", verdict: "✅ Invisible Clip-In", desc: "The ultra-flat silicone or PU base lies flush against the scalp with zero visible weft line — even in the finest ponytail. Invisible Clip-Ins are the best-in-class solution for adding volume to delicate hair without any obvious attachment points." },
                  { label: "Medium Hair", icon: "💆", verdict: "✅ Seamless or Classic", desc: "Medium hair is the most forgiving. Invisible Clip-Ins give a premium undetectable finish; Classic Clip-Ins offer reliable hold with great volume at a more accessible price. Either works beautifully for daily wear." },
                  { label: "Thick / Coarse Hair", icon: "💪", verdict: "✅ Classic Clip-In", desc: "Thick hair provides excellent natural coverage for the weft base — classic clip-ins with stronger clips are the practical choice. Multiple rows deliver dramatic volume and length that blends naturally." },
                ].map((item) => (
                  <div key={item.label} className="border rounded-xl p-4">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-semibold mb-1">{item.label}</div>
                    <div className="text-xs font-medium text-emerald-700 mb-2">{item.verdict}</div>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* How many pieces */}
              <div className="border rounded-xl overflow-hidden">
                <div className="bg-black text-white px-5 py-3 font-semibold">How many pieces / grams do I need?</div>
                <div className="divide-y">
                  {[
                    { goal: "Add subtle volume (no length)", weight: "80–100g (5–7 pieces)", look: "Everyday fullness" },
                    { goal: "Volume + moderate length gain", weight: "120–160g (7–9 pieces)", look: "Noticeable transformation" },
                    { goal: "Full glamour transformation", weight: "160–220g (9–10 pieces)", look: "Maximum impact" },
                  ].map((row) => (
                    <div key={row.goal} className="grid grid-cols-3 px-5 py-3 text-sm">
                      <span className="text-muted-foreground">{row.goal}</span>
                      <span className="font-medium">{row.weight}</span>
                      <span className="text-muted-foreground">{row.look}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Length guide */}
              <div>
                <h4 className="font-semibold mb-3">Length Guide</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { len: '14"', effect: "Chin to collarbone" },
                    { len: '16"', effect: "Shoulder length" },
                    { len: '18"', effect: "Collar bone / mid-back" },
                    { len: '20"', effect: "Mid-back" },
                    { len: '22"', effect: "Lower back" },
                    { len: '24"', effect: "Waist length" },
                  ].map((item) => (
                    <div key={item.len} className="border rounded-xl p-3 text-center text-sm">
                      <div className="text-xl font-bold mb-1">{item.len}</div>
                      <div className="text-xs text-muted-foreground">{item.effect}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3">💡 Extension length is measured from the weft base. Your starting hair length affects the final result — the longer your natural hair, the closer the extension will blend to the stated length.</p>
              </div>

              {/* Clip-In style callout */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <div className="font-semibold mb-2">📎 Which Clip-In Style is Right for You?</div>
                <div className="space-y-2 text-sm text-emerald-900">
                  <div className="flex gap-2"><span>✅</span><span><strong>Invisible / Seamless Clip-In:</strong> Fine hair, visible partings, wearing hair up regularly, special occasions — the most undetectable result</span></div>
                  <div className="flex gap-2"><span>✅</span><span><strong>Classic Clip-In Set:</strong> Everyday volume and length, all hair types, first-time extension wearers — reliable, easy and beautiful</span></div>
                  <div className="flex gap-2"><span>✅</span><span><strong>Clip-In Filler / Topper:</strong> Crown thinning, sparse temples, hairline coverage or mixing with a semi-permanent set for targeted density</span></div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 text-sm text-muted-foreground">
                💡 <strong>Not sure how many pieces you need?</strong> WhatsApp us a photo in natural light — our D.S HAIR extension specialists will recommend the perfect set weight, length and style for free, drawing on 19 years of professional experience.
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
              ) : product.productType.toLowerCase().includes('butterfly') ? (
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
                        <div className="text-xs text-purple-600 font-medium">{item.unit}</div>
                        <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Customer reviews */}
                  <div className="space-y-4">
                    {[
                      { name: "Charlotte H.", role: "Senior Hair Extension Stylist, Manchester", text: "Butterfly Weft has completely changed how I work. The flexible base means it just molds to the head shape — I'm spending 20 minutes less per client and the results look even more natural. My clients are obsessed.", stars: 5 },
                      { name: "Isabelle F.", role: "Salon Client, London", text: "I have very fine hair and was always afraid of weft extensions looking bulky. The Super Weft version is genuinely invisible — even with my hair in a ponytail. I've had them 5 months and they still look brand new.", stars: 5 },
                      { name: "Sophie L.", role: "Salon Client, Leeds", text: "The colour match from D.S Hair was perfect on the first order. The weft feels so soft and natural — honestly couldn't tell where my own hair ended and the extensions began. Absolutely worth the investment.", stars: 5 },
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
              ) : product.productType.toLowerCase().includes('tape') ? (
                <>
                  {/* Stats bar */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {[
                      { stat: "6–12", unit: "months", label: "Hair lifespan (re-taped)" },
                      { stat: "6–8", unit: "weeks", label: "Between re-tape appointments" },
                      { stat: "2–3×", unit: "reuse", label: "Weft re-tapeable lifespan" },
                    ].map((item) => (
                      <div key={item.label} className="border rounded-xl py-4 px-2">
                        <div className="text-2xl font-bold">{item.stat}</div>
                        <div className="text-xs text-rose-600 font-medium">{item.unit}</div>
                        <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Customer reviews */}
                  <div className="space-y-4">
                    {[
                      { name: "Emily R.", role: "Senior Stylist, Manchester Salon", text: "Tape-ins from D.S Hair are genuinely the fastest way to give a client a full transformation. 40 tabs in under 90 minutes — and the Invisible range is completely undetectable even on my finest-haired clients. Quality is consistently excellent.", stars: 5 },
                      { name: "Jessica T.", role: "Salon Client, Birmingham", text: "I have really fine hair and was nervous about extensions. The Invisible Tape-Ins are absolutely seamless — my friends had no idea! I've had them 8 weeks now and they still look immaculate. Will 100% reorder.", stars: 5 },
                      { name: "Hannah B.", role: "Salon Client, London", text: "The colour match was spot on first time — D.S Hair's team recommended the perfect shade from a photo. They lay completely flat and feel like my own hair. The quality is far better than previous brands I've tried.", stars: 5 },
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
              ) : product.productType.toLowerCase().includes('clip') ? (
                <>
                  {/* Before/After images */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl overflow-hidden">
                      <img src="/images/clip/clip-result-01.jpg" alt="Clip-In Extensions Result 1" className="w-full object-cover aspect-[3/4]" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
                    </div>
                    <div className="rounded-xl overflow-hidden">
                      <img src="/images/clip/clip-result-02.jpg" alt="Clip-In Extensions Result 2" className="w-full object-cover aspect-[3/4]" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
                    </div>
                  </div>

                  {/* Stats bar */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {[
                      { stat: "6–12", unit: "months", label: "Set lifespan (with care)" },
                      { stat: "5–10", unit: "minutes", label: "Average application time" },
                      { stat: "0", unit: "damage", label: "Zero chemical or heat bond" },
                    ].map((item) => (
                      <div key={item.label} className="border rounded-xl py-4 px-2">
                        <div className="text-2xl font-bold">{item.stat}</div>
                        <div className="text-xs text-emerald-600 font-medium">{item.unit}</div>
                        <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Customer reviews */}
                  <div className="space-y-4">
                    {[
                      { name: "Amy L.", role: "Daily wearer, Manchester", text: "Loves the clip ins and the service was great. I bought the 20\" Invisible set. Hair is easy to work with and I am now wearing them daily. You literally cannot see the weft line — even when I pull it into a ponytail. Love love love!!!", stars: 5 },
                      { name: "Sarah K.", role: "First-time extension user, London", text: "I was worried they would look fake but the colour match was perfect. The seamless base is incredible — no visible tracks, no bulk. My friends were shocked when I told them. Will be ordering more shades!", stars: 5 },
                      { name: "Olivia M.", role: "Special occasions wearer, Leeds", text: "The quality is genuinely outstanding. I've tried cheaper brands before and the difference is night and day — these are thick, shiny, and tangle-free even after styling. Worth every penny for the Remy quality.", stars: 5 },
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
              ) : product.productType.toLowerCase().includes('k-tip') ? (
                <>
                  {/* Before/After images */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl overflow-hidden">
                      <img src="/images/ktip/ktip-result-01.jpg" alt="K-Tip Extensions Result 1" className="w-full object-cover aspect-[3/4]" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
                    </div>
                    <div className="rounded-xl overflow-hidden">
                      <img src="/images/ktip/ktip-result-02.jpg" alt="K-Tip Extensions Result 2" className="w-full object-cover aspect-[3/4]" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
                    </div>
                  </div>

                  {/* Stats bar */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {[
                      { stat: "3–5", unit: "months", label: "Wear time per set" },
                      { stat: "2–3×", unit: "reusable", label: "Hair strands reusable" },
                      { stat: "3–5", unit: "hours", label: "Full head installation" },
                    ].map((item) => (
                      <div key={item.label} className="border rounded-xl py-4 px-2">
                        <div className="text-2xl font-bold">{item.stat}</div>
                        <div className="text-xs text-blue-600 font-medium">{item.unit}</div>
                        <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Customer reviews */}
                  <div className="space-y-4">
                    {[
                      { name: "Charlotte R.", role: "Professional stylist, Manchester", text: "I've been ordering D.S HAIR nano K-tips for my salon for over a year and the feedback from clients is consistently incredible. The bonds are clean, the hair is thick and the colour range is unmatched. My fine-haired clients especially love how invisible the nano bonds are — they finally have a semi-permanent option that works for them.", stars: 5 },
                      { name: "Emma T.", role: "Bridal client, Birmingham", text: "Had these for my wedding and they lasted through a full month of styling, beach days and dancing. Absolutely no slipping, no matting, nothing. The stylist used the micro bonds and you genuinely could not tell I was wearing extensions even in my updo. The most natural result I've ever had.", stars: 5 },
                      { name: "Sophie W.", role: "Long-term extension wearer, London", text: "I switched from tape-ins to D.S HAIR K-tips 18 months ago and haven't looked back. The longevity is just incomparable — I get 4 full months out of each set, the hair reuses beautifully, and the cost-per-wear is much better than I expected. The quality of the Remy hair is something else.", stars: 5 },
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
              ) : product.productType.toLowerCase().includes('butterfly') ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "100% Remy human hair — double-drawn, cuticle-aligned for zero tangling",
                      "Available in Half Flat, Full Flat & Super Weft (Injected) styles",
                      "Zero return hair technology — no short hairs at the base, no scalp irritation",
                      "Flexible PU base contours naturally to the head — no stiff, rigid feel",
                      "Trimmable sealed edges — cut to any width without a single shed hair",
                      "No heat, no glue — attached by beads, cornrow sewing or skin weft tape",
                      "Wears 6–12 months with professional maintenance",
                      "Can be washed, blow-dried, curled and straightened like natural hair",
                      "Weft rows reusable 2–3 times — just replace beads or re-sew",
                      "Invisible in high ponytails, braids and updos — even in fine hair",
                      "31 colour shades to match every natural tone precisely",
                      "Move-up appointment every 6–8 weeks to account for natural hair growth",
                    ].map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-sm text-purple-900">
                    <strong>🦋 D.S HAIR Quality Promise:</strong> Every Butterfly Weft batch undergoes strict quality control — consistent hair weight per row, even density distribution from root to tip, and rigorous shed-test before dispatch. We supply professional stylists across the UK with the confidence that comes from 19+ years in the industry.
                  </div>
                </div>
              ) : product.productType.toLowerCase().includes('tape') ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "100% Remy human hair — double-drawn, cuticle-aligned for zero tangling",
                      "Available in Standard, Invisible (skin-tone PU) & Mini Tape-In styles",
                      "Invisible Tape-In: ultra-thin 0.5mm skin-match base — zero visible tabs",
                      "Medical-grade adhesive — skin-safe, sweat-resistant, chlorine-resistant",
                      "No heat, no glue fusion — zero thermal damage to natural hair shaft",
                      "Wears 6–12 months with professional re-tape maintenance",
                      "Re-tapeable 2–3 times — replace the adhesive tabs, reuse the hair",
                      "Can be washed, blow-dried, curled and straightened like natural hair",
                      "Full head applied in 60–90 minutes — fastest professional method",
                      "Invisible in ponytails, updos and braids — even in the finest hair",
                      "31 colour shades to match every natural tone precisely",
                      "Re-tape appointment every 6–8 weeks for a salon-perfect result",
                    ].map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-sm text-rose-900">
                    <strong>🩹 D.S HAIR Quality Promise:</strong> Every tape-in batch is individually inspected for adhesive coverage, hair density and cuticle alignment before dispatch. Our Invisible Tape-In range uses a premium skin-tone PU base engineered for flawless scalp concealment. Trusted by professional salons across the UK — backed by 19+ years of hair extension expertise.
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
              ) : product.productType.toLowerCase().includes('clip') ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "100% Remy human hair — double-drawn, cuticle-aligned for zero tangling",
                      "Available in Invisible (seamless), Classic & Clip-In Filler styles",
                      "Invisible Clip-In: ultra-flat silicone/PU base — zero visible weft line",
                      "Silicone-lined pressure clips — grip without slipping, zero chemical bond",
                      "No heat, no glue, no chemicals — zero damage to natural hair",
                      "Wears 6–12 months with proper care — hundreds of wears per set",
                      "Can be washed, blow-dried, curled and straightened like natural hair",
                      "Full set applied in 5–10 minutes — no salon visit required",
                      "Invisible in ponytails, updos and braids — especially Seamless style",
                      "31 colour shades + balayage/ombre options for every natural tone",
                      "Remove nightly — zero long-term commitment, total flexibility",
                      "Heat-safe up to 180°C — style freely with heat protectant applied",
                    ].map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-900">
                    <strong>📎 D.S HAIR Quality Promise:</strong> Every clip-in set is individually inspected for hair weight, clip strength and cuticle alignment before dispatch. Our Invisible / Seamless range uses a premium ultra-flat base engineered for flawless concealment. Each set is shed-tested and weight-verified to our strict 19-year professional standard — so your clients receive consistent, salon-quality results every time.
                  </div>
                </div>
              ) : product.productType.toLowerCase().includes('k-tip') ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "100% Remy human hair — double-drawn, cuticle-aligned for zero tangling",
                      "Available in Standard, Micro & Nano bond sizes for all hair types",
                      "Nano K-Tip: ultra-micro 0.5g bond — virtually invisible at the hairline",
                      "Medical-grade keratin polymer blend — no residue, no irritation",
                      "Hot-fusion bonding at 180–200 °C — professional-grade equipment required",
                      "3–5 months wear time with proper care — outlasts tape-ins by 3×",
                      "Hair strands reusable 2–3 times — retip and reinstall for maximum value",
                      "Individual strand method — zero visible weft lines, even in high updos",
                      "Can be washed, blow-dried, curled and straightened like natural hair",
                      "Safe for colour, highlights and chemical treatments (wait 2 weeks after bonding)",
                      "31 colour shades + balayage/ombre options — matched to any natural tone",
                      "Heat-safe up to 180°C with heat protectant — full styling freedom",
                    ].map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-900">
                    <strong>💎 D.S HAIR Quality Promise:</strong> Every K-Tip strand is individually quality-checked for keratin bond consistency, hair weight and cuticle direction before dispatch. Our Nano K-Tips use the smallest, most refined bond beads available — each passing a tension-resistance test before leaving our facility. Backed by 19+ years of professional supply expertise and the trust of salon stylists across the UK.
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
              ) : product.productType.toLowerCase().includes('butterfly') ? (
                <>
                  {[
                    {
                      q: "What is Butterfly Weft and how is it different from standard weft?",
                      a: "Butterfly Weft is an advanced weft extension with a uniquely flexible, ultra-flat PU base. Unlike standard machine weft, it has zero return hairs at the base (no short, scratchy hairs), can be trimmed to any width without shedding, and features a flexible design that naturally contours to the shape of the head. The result is a softer, more invisible and more comfortable extension experience.",
                    },
                    {
                      q: "What are the differences between Half Flat, Full Flat and Super Weft?",
                      a: "Half Flat (~0.8mm base) is the most versatile option — ideal for most hair types and the fastest to install. Full Flat (~1.0mm) has a slightly denser construction, great for clients needing maximum volume. Super Weft / Injected (~0.6mm) has hair injected directly into the base for the most invisible, featherlight result — the top choice for very fine hair and high-visibility areas like partings and temples.",
                    },
                    {
                      q: "Is Butterfly Weft suitable for fine or thin hair?",
                      a: "Yes — especially the Super Weft (Injected) version. Its 0.6mm base is virtually weightless and sits perfectly flat, making it ideal for fine or delicate hair. The zero return hair design also means no irritation or scalp discomfort, which is a common concern for fine-haired clients.",
                    },
                    {
                      q: "How long does Butterfly Weft last?",
                      a: "With professional maintenance, 6 to 12 months. Every 6–8 weeks, your stylist will perform a move-up appointment — adjusting the weft to account for natural hair growth. The weft itself can be reinstalled 2–3 times by replacing beads or re-sewing, making it an excellent long-term investment.",
                    },
                    {
                      q: "Will Butterfly Weft damage my natural hair?",
                      a: "When professionally installed and maintained, Butterfly Weft is one of the gentlest extension methods available. The zero return hair design eliminates root friction, and the flexible base distributes tension evenly across the row. Always have them fitted, maintained and removed by a certified hair extension stylist.",
                    },
                    {
                      q: "Can I wash, heat-style and colour Butterfly Weft extensions?",
                      a: "Yes — all D.S HAIR Butterfly Weft extensions are 100% human hair. Wash 1–2 times weekly with sulphate-free shampoo, use heat protectant before blow-drying or styling, and brush gently from ends upward. For colouring, always consult your stylist; we recommend avoiding bleach on pre-coloured shades to preserve the hair's integrity.",
                    },
                    {
                      q: "Can I wear Butterfly Weft in a ponytail or updo?",
                      a: "Absolutely — this is one of Butterfly Weft's strongest advantages. The flexible, ultra-flat base lies close to the scalp and conforms to the head's curves, making it virtually undetectable in high ponytails, braids, buns and other updos. Even the Super Weft version is invisible under the most demanding professional styling.",
                    },
                  ].map((item) => (
                    <div key={item.q} className="border-b pb-5">
                      <h4 className="font-medium mb-2">{item.q}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </>
              ) : product.productType.toLowerCase().includes('tape') ? (
                <>
                  {[
                    {
                      q: "What are Tape-In extensions and how do they work?",
                      a: "Tape-In extensions use ultra-thin polyurethane (PU) wefts pre-coated with medical-grade adhesive. A small slice of your natural hair is sandwiched between two weft tabs — no heat, no fusion chemicals. The bond lies completely flat against the scalp, creating a natural, seamless finish. They're one of the fastest and most comfortable semi-permanent extension methods available.",
                    },
                    {
                      q: "What is the difference between Invisible Tape-Ins and standard Tape-Ins?",
                      a: "Invisible (Seamless) Tape-Ins use a skin-tone matched PU base that mimics the colour and texture of the scalp — the tab itself disappears against the skin, so hair appears to grow directly from it. Standard Tape-Ins have a slightly thicker, more uniform base and offer excellent hold for all hair types. For maximum invisibility — especially in fine hair or when worn up — Invisible Tape-Ins are the premium choice.",
                    },
                    {
                      q: "Are Tape-In extensions suitable for fine or thin hair?",
                      a: "Yes — particularly our Invisible Tape-Ins. The ultra-thin 0.5mm PU base places minimal weight on each section of hair, and the skin-tone match ensures zero visible tab in even the finest hair. We recommend taking slightly thinner sections per tab for fine-haired clients to avoid any visible parting.",
                    },
                    {
                      q: "How long do Tape-In extensions last?",
                      a: "The adhesive bond typically lasts 6–8 weeks, after which a re-tape appointment is needed (your natural hair grows and the tab moves away from the scalp). The hair weft itself, with proper care, can be re-taped and reused 2–3 times — meaning the initial hair investment lasts 6–12 months or more.",
                    },
                    {
                      q: "Will Tape-In extensions damage my natural hair?",
                      a: "When correctly installed and removed by a professional, tape-ins cause no damage to the hair shaft. The adhesive bonds to the surface of the hair — there is no heat or chemical penetration. Damage only occurs from improper DIY removal (never pull — always use a professional remover solution) or applying tabs too close to the root.",
                    },
                    {
                      q: "How do I care for Tape-In extensions?",
                      a: "Wash with sulphate-free shampoo — avoid conditioner or oil products at the roots, as these weaken the adhesive. Blow-dry thoroughly (never leave tape bonds damp for extended periods). Use heat protectant before styling. Brush gently from ends upward with a loop brush. Avoid heavy oil-based products near the bonds. Sleep in a loose plait to prevent matting.",
                    },
                    {
                      q: "Can I wear Tape-Ins in a ponytail or updo?",
                      a: "Yes — this is one of tape-ins' greatest strengths. Because the base is ultra-flat, the tabs lie flush against the scalp and are completely concealed in ponytails, updos, braids and buns. Invisible Tape-Ins are particularly undetectable as the skin-tone base blends with the scalp when the hair is pulled back.",
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
              ) : product.productType.toLowerCase().includes('clip') ? (
                <>
                  {[
                    {
                      q: "What types of clip-in extensions does D.S HAIR offer?",
                      a: "We offer three clip-in styles: Invisible / Seamless Clip-Ins (ultra-flat silicone or PU base, zero visible weft line — our blue-ocean pick), Classic Clip-In Wefts (durable cotton base, strong clips, suitable for all hair types), and Clip-In Fillers / Toppers (narrow wefts for targeted volume at temples, crown and hairline). All are 100% double-drawn Remy human hair.",
                    },
                    {
                      q: "What are Invisible / Seamless Clip-Ins and why are they special?",
                      a: "Invisible Clip-Ins feature an ultra-thin flat silicone or polyurethane base that mimics the scalp — the weft base itself disappears against the skin, so hair appears to grow directly from it. Unlike standard clip-ins where the fabric weft can create a visible ridge, seamless clip-ins lie completely flat. This makes them undetectable even in fine hair, ponytails and updos. They are the fastest-growing clip-in category in UK salons and our top recommendation for fine-haired clients.",
                    },
                    {
                      q: "Are clip-in extensions suitable for fine or thin hair?",
                      a: "Yes — particularly our Invisible / Seamless Clip-Ins. The ultra-flat base places minimal weight per section and creates no visible bump. Key tips for fine hair: use slightly thinner sections per weft, apply dry shampoo to roots for extra grip, and choose 80–120g rather than a heavy full set. Clip-In Fillers are also ideal for targeted crown or hairline density.",
                    },
                    {
                      q: "How long do clip-in extensions last?",
                      a: "With proper care, a quality set of D.S HAIR Remy clip-ins lasts 6–12 months of regular wear. Unlike semi-permanent methods, there is no 'removal' appointment — just clip out nightly and store properly. Key care factors: wash only when needed (every 15–20 wears), brush gently from ends upward, store in the provided pouch, and avoid heat above 180°C without a protectant.",
                    },
                    {
                      q: "Do clip-in extensions damage natural hair?",
                      a: "When applied correctly, clip-ins cause zero damage to natural hair. The silicone-lined clips grip without pulling or cutting the hair shaft. The key rules: never clip into the same section repeatedly without moving the row slightly; don't sleep in them; don't clip into the very front hairline; and use the correct weight for your hair density (over-loading fine hair puts unnecessary tension on the roots).",
                    },
                    {
                      q: "How do I care for D.S HAIR clip-in extensions?",
                      a: "Wash with a sulphate-free shampoo only when needed — typically every 15–20 wears. Do not scrub; gently work the shampoo through the weft. Rinse thoroughly, apply a lightweight conditioner from mid-shaft to ends (not the weft base or clips), and air dry flat or hang on an extension holder. Apply a heat protectant before any hot tool styling (max 180°C). Brush from ends upward with a loop brush. Store in a dry, dust-free pouch or box.",
                    },
                    {
                      q: "Can I wear clip-ins in a ponytail, updo or braid?",
                      a: "Yes — with the right style. Invisible / Seamless Clip-Ins are specifically designed for this: the flat base conceals completely when the hair is pulled back. With classic clip-ins, position the wefts slightly lower than you would wear the ponytail, so the upper natural hair fully covers them. Clip-In Fillers at the crown are also undetectable in high ponytails.",
                    },
                    {
                      q: "Can I heat-style, wash or colour D.S HAIR clip-ins?",
                      a: "All D.S HAIR clip-ins are 100% human hair — they can be washed, blow-dried, curled and straightened just like your natural hair. Always apply a heat protectant and keep tools below 180°C to preserve the hair's integrity. For colouring: toning down is possible with professional help; bleaching or lightening pre-coloured shades is not recommended as it significantly shortens the lifespan.",
                    },
                  ].map((item) => (
                    <div key={item.q} className="border-b pb-5">
                      <h4 className="font-medium mb-2">{item.q}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </>
              ) : product.productType.toLowerCase().includes('k-tip') ? (
                <>
                  {[
                    {
                      q: "What is a K-Tip (Keratin Bond) hair extension?",
                      a: "K-Tip extensions are individual strands of 100% Remy human hair with a pre-tipped keratin polymer bead at the root end. A certified stylist uses a hot-fusion wand at 180–200 °C to soften the bead and mould it around a small section of your natural hair, forming a smooth, sleek bond that is virtually invisible. Unlike old hot-glue extensions, modern keratin bonds are residue-free, flexible and dissolve cleanly with professional remover.",
                    },
                    {
                      q: "What sizes of K-Tip bonds does D.S HAIR offer, and which should I choose?",
                      a: "We offer three bond sizes: Standard (1g) — ideal for thick or medium-thick hair at the nape and crown; Micro (0.7g) — the most popular choice for medium hair, offering the best balance of hold and invisibility; and Nano (0.5g) — our blue-ocean recommendation for fine, delicate or colour-treated hair, especially around the temples and hairline. Many stylists use a mix of all three sizes in one head for the most natural, comfortable result.",
                    },
                    {
                      q: "How long do K-Tip extensions last?",
                      a: "With proper care, K-Tip extensions typically last 3–5 months per set — significantly longer than tape-ins (6–8 weeks). Your stylist will perform a 'move-up' appointment every 6–8 weeks as your natural hair grows, repositioning the bonds closer to the scalp. The same Remy hair strands can be re-tipped and reinstalled 2–3 times, making them highly cost-effective over time.",
                    },
                    {
                      q: "K-Tip vs Tape-In — which method is better for fine hair?",
                      a: "Both methods work on fine hair, but with key differences. Tape-ins use flat 4cm wefts that sandwich a thin slice of hair — they are quicker to install (1–2 hours) and more affordable upfront, but need replacing every 6–8 weeks. K-Tip nano bonds are the superior choice for very fine or sensitive hair: each 0.5g bead is barely visible and places minimal weight on individual strands, lasting 3–5 months. The choice depends on the client's budget, maintenance tolerance and hair density. For salon clients who want the most natural, longest-lasting result, nano K-tips are increasingly the first choice.",
                    },
                    {
                      q: "Will K-Tip extensions damage my natural hair?",
                      a: "When professionally installed, maintained and removed, K-Tip extensions are considered a low-damage method. The keratin bond distributes weight across multiple natural hairs and does not use adhesive chemicals in contact with the scalp. The key risks — tension alopecia and breakage — only arise from incorrect installation (bonds too close to the scalp or too heavy for the hair) or improper removal. Always use a certified extension stylist.",
                    },
                    {
                      q: "Can I colour, curl or straighten K-Tip extensions?",
                      a: "Yes — 100% Remy human hair accepts heat styling up to 180°C and most colour services. We recommend waiting at least 2 weeks after installation before colouring (to allow bonds to fully set). For bleaching or lightening, always consult an experienced colourist — some chemical processes can weaken the keratin bond. Day-to-day heat styling (curling wand, straighteners, blow-dry) is completely safe with heat protectant applied.",
                    },
                    {
                      q: "How do I care for K-Tip extensions day to day?",
                      a: "Use a sulphate-free, bond-safe shampoo and conditioner — avoid applying conditioner directly to the bonds. Wash gently in a downward motion (never circular, which causes tangling). Sleep with hair in a loose braid and use a silk pillowcase. Brush from ends to roots with a loop brush daily. Avoid heavy oils, serums or leave-in conditioners near the bond area — product build-up weakens the keratin over time.",
                    },
                    {
                      q: "How are K-Tip extensions removed, and can they be reused?",
                      a: "Removal must be done by a professional stylist. A keratin bond remover solution (isopropyl alcohol or ethyl acetate based) is applied directly to each bond, making it brittle. The stylist then gently cracks the bond with flat-nosed pliers — the keratin crumbles away from the hair, causing zero cutting or damage to the natural strand. The Remy hair on each extension can then be re-tipped with fresh keratin and reinstalled 2–3 times, saving significant cost compared to buying new sets.",
                    },
                  ].map((item) => (
                    <div key={item.q} className="border-b last:border-b-0 pb-4">
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
