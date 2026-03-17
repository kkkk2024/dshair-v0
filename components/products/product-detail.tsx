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
                href={`https://wa.me/447456789012?text=${whatsappMessage}`}
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
              value="features"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent pb-4"
            >
              Features
            </TabsTrigger>
            <TabsTrigger
              value="care"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent pb-4"
            >
              Hair Care
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

          <TabsContent value="care" className="mt-8">
            <div className="max-w-3xl space-y-4">
              <h3 className="font-semibold text-lg">How to Care for Your Extensions</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">1.</span>
                  Brush your extensions before and after each use with a soft bristle brush or loop brush.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">2.</span>
                  Wash your extensions every 15-20 wears using sulphate-free shampoo and conditioner.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">3.</span>
                  Always use heat protection spray before styling with hot tools.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">4.</span>
                  Store your extensions in the original packaging or a silk/satin bag.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">5.</span>
                  Avoid sleeping in clip-in extensions to prolong their lifespan.
                </li>
              </ul>
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
