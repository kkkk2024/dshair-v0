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
            <div className="max-w-3xl">
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>
          </TabsContent>

          <TabsContent value="howtouse" className="mt-8">
            <div className="max-w-3xl space-y-8">
              <h3 className="font-semibold text-xl">How to Apply D.S HAIR Clip-In Extensions</h3>
              
              {/* How To Use Image */}
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/images/how-to-use.png" 
                  alt="How to Apply Clip-In Extensions" 
                  className="w-full"
                />
              </div>
              
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Sectioning</h4>
                  <p className="text-muted-foreground">
                    Use a rat-tail comb to make a horizontal part from mid-ear to mid-ear. Next, secure all hair above mid-ear into a high ponytail or with clips.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Create A Foundation</h4>
                  <p className="text-muted-foreground">
                    To create a secure foundation for the clips, gently backcomb the hair one inch from your scalp. You can also use dry shampoo or hair spray to create a more secure foundation.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Clip Them In</h4>
                  <p className="text-muted-foreground">
                    Choose a 2-clip or 3-clip weft and gently open each clip. Then, bring the clips into the foundation and close them. We recommend leaving a 1/2-1" perimeter of natural hair around your hairline for more comfort.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Repeat Your Sectioning</h4>
                  <p className="text-muted-foreground">
                    As you move towards the top of your head, keep clipping in the wefts row by row. Separate each row with 1-3 inches of natural hair. Once you reach the widest section of your hair, use whichever wefts will fully cover the foundation.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  5
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Remaining Wefts</h4>
                  <p className="text-muted-foreground">
                    Use the remaining 2-clip wefts on the sides of your head, placing them about four fingers above your ears.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sizeguide" className="mt-8">
            <div className="max-w-3xl space-y-8">
              <h3 className="font-semibold text-xl">Finding the Perfect Fit</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Seamless Clip-Ins */}
                <div className="border rounded-lg p-4">
                  <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src="/images/seamless-clip-ins.jpg" 
                      alt="Seamless Clip-Ins" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Seamless Clip-Ins</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our seamless clip-in wefts lay completely flat against your head for a natural, undetectable look.
                  </p>
                  
                  {/* Size Chart */}
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Length</th>
                        <th className="text-right py-2">Weight</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">16"</td>
                        <td className="text-right">75-115g</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">18"</td>
                        <td className="text-right">75-125g</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">20"</td>
                        <td className="text-right">95-145g</td>
                      </tr>
                      <tr>
                        <td className="py-2">22"</td>
                        <td className="text-right">115-155g</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Classic Clip-Ins */}
                <div className="border rounded-lg p-4">
                  <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src="/images/classic-clip-ins.png" 
                      alt="Classic Clip-Ins" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Classic Clip-Ins</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our classic clip-ins are perfect for beginners and easy to apply at home.
                  </p>
                  
                  {/* Size Chart */}
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Length</th>
                        <th className="text-right py-2">Weight</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">12"</td>
                        <td className="text-right">70g</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">14"</td>
                        <td className="text-right">85g</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">16"</td>
                        <td className="text-right">100g</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">18"</td>
                        <td className="text-right">110g</td>
                      </tr>
                      <tr>
                        <td className="py-2">20"</td>
                        <td className="text-right">120g</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* How to Measure */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-4">How to Measure</h4>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Measure from the crown of your head to the ends of your hair</li>
                  <li>Decide how long you want your extensions to be</li>
                  <li>Choose the length that is closest to your desired look</li>
                  <li>For added length, we recommend going one size up</li>
                </ol>
              </div>

              {/* Contact for Help */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium mb-2">Need help choosing?</p>
                <p className="text-sm text-green-700">
                  Contact us on WhatsApp for free colour matching: +86 13516946001
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="results" className="mt-8">
            <div className="max-w-3xl space-y-8">
              <h3 className="font-semibold text-xl">Real Results</h3>
              
              {/* Before/After Image */}
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/images/before-after.jpg" 
                  alt="Before and After - D.S HAIR Clip-In Extensions" 
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

              {/* More Reviews CTA */}
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  See what our customers are saying
                </p>
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
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="mt-8">
            <div className="max-w-3xl space-y-6">
              <h3 className="font-semibold text-xl">Frequently Asked Questions</h3>
              
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
                <p className="text-muted-foreground mt-2">Please keep in mind, that if chosen to dye D.S HAIR, it is up to the customers discretion and done at your own risk. One of our fashionistas and fabulous YouTube beauty guru has a video on dying them, showing you how simple it is.</p>
              </div>
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
