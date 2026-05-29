"use client"

import { useState, useEffect, useCallback } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { contactInfo } from "@/lib/products"
import {
  Calculator, ChevronRight, ChevronLeft, MessageCircle,
  Package, Clock, Award, Shield, CheckCircle2, ArrowRight
} from "lucide-react"
import Link from "next/link"

// --- Data Types ---

type ExtensionType = "tape-in" | "nano-ring" | "k-tip" | "clip-in" | "machine-weft" | "butterfly-weft"

interface ExtensionOption {
  id: ExtensionType
  name: string
  badge?: string
  description: string
  basePricePerUnit: number // price per base unit (25g for most, 50g for weft)
  baseUnit: string // "25g" or "50g"
  collectionLink: string
}

const extensionTypes: ExtensionOption[] = [
  { id: "tape-in", name: "Tape-In Extensions", badge: "Most Popular", description: "Flat, discreet adhesive tabs for seamless blending", basePricePerUnit: 50, baseUnit: "25g", collectionLink: "/collections/tape-in" },
  { id: "nano-ring", name: "Nano Ring Extensions", description: "Ultra-discreet micro rings, ideal for fine hair", basePricePerUnit: 55, baseUnit: "25g", collectionLink: "/collections/nano-extensions" },
  { id: "k-tip", name: "K-Tip / I-Tip Extensions", description: "Keratin-bonded tips for a secure, long-lasting hold", basePricePerUnit: 62, baseUnit: "25g", collectionLink: "/collections/k-tip-extensions" },
  { id: "clip-in", name: "Clip-In Extensions", description: "Instant clip-on sets, no tools required", basePricePerUnit: 45, baseUnit: "25g", collectionLink: "/collections/clip-in" },
  { id: "machine-weft", name: "Weft Extensions (Machine)", description: "Machine-sewn wefts for full-head volume", basePricePerUnit: 75, baseUnit: "50g", collectionLink: "/collections/weft" },
  { id: "butterfly-weft", name: "Butterfly Weft (Hand-Tied)", description: "Hand-tied wefts with ultra-thin, flexible bases", basePricePerUnit: 100, baseUnit: "50g", collectionLink: "/collections/butterfly-weft" },
]

const lengths = [
  { value: "16", label: '16"' },
  { value: "18", label: '18"' },
  { value: "20", label: '20"' },
  { value: "22", label: '22"' },
  { value: "24", label: '24"' },
  { value: "26", label: '26"' },
]

const colorRanges = [
  { id: "natural", name: "Natural Shades", description: "1B - 4: Deep browns and blacks", colors: ["#1a0f0a", "#2d1810", "#3d2317", "#4a2314"] },
  { id: "medium", name: "Medium Shades", description: "6 - 10: Medium browns and blondes", colors: ["#6b4423", "#8b6914", "#a08050", "#c4a87a"] },
  { id: "fashion", name: "Fashion & Balayage", description: "Highlights, ombre & creative tones", colors: ["#d4b896", "#c98b6f", "#e8c89e", "#f5deb3"] },
]

const quantityOptions = [
  { value: 25, label: "25g", discount: 0 },
  { value: 50, label: "50g", discount: 5 },
  { value: 100, label: "100g", discount: 10 },
  { value: 200, label: "200g", discount: 10 },
  { value: 500, label: "500g", discount: 15 },
  { value: 1000, label: "1kg", discount: 15 },
]

// --- Price Calculation ---

function calculatePrice(
  extension: ExtensionOption,
  lengthInch: string,
  quantityG: number
): { total: number; perGram: number; discountPercent: number } {
  const lengthMultiplier = 1 + (parseInt(lengthInch) - 16) * 0.05
  const quantityDiscount = quantityOptions.find(q => q.value === quantityG)?.discount ?? 0
  const baseMultiplier = quantityG / parseInt(extension.baseUnit)
  const rawTotal = extension.basePricePerUnit * baseMultiplier * lengthMultiplier
  const total = rawTotal * (1 - quantityDiscount / 100)
  const perGram = total / quantityG
  return { total: Math.round(total * 100) / 100, perGram: Math.round(perGram * 100) / 100, discountPercent: quantityDiscount }
}

// --- CountUp Animation Hook ---

function useCountUp(target: number, duration = 600, shouldRun = false) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!shouldRun || target === 0) {
      setDisplay(0)
      return
    }
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * target * 100) / 100)
      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, shouldRun])

  return display
}

// --- FAQ Data ---

const faqs = [
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "Our minimum order is 25g for most extension types. However, volume discounts start at 50g (5% off), with bigger savings at 100g (10% off) and 500g+ (15% off). There is no upper limit on order size."
  },
  {
    q: "Do prices vary by colour range?",
    a: "Natural shades (1B-4) and medium shades (6-10) are priced at standard rates. Fashion colours, balayage and custom blends may carry a small premium depending on the complexity of the colour work."
  },
  {
    q: "How do trade account discounts work?",
    a: "Trade Account holders receive an additional 5% off all wholesale prices on top of volume discounts. To apply, visit our Trade Wholesale page or contact us via WhatsApp. Accounts are typically approved within 24 hours."
  },
  {
    q: "Are these prices including VAT?",
    a: "Prices shown are exclusive of VAT. As a B2B wholesale supplier, VAT is handled according to your business status. Please contact our team for VAT-specific queries."
  },
  {
    q: "How quickly can I receive my order?",
    a: "We hold UK stock for our most popular lines, with dispatch available within 1-2 business days. Speciality colours or larger orders may take 5-7 business days. Express shipping is available on request."
  },
]

// --- WhatsApp Helper ---

function openWhatsApp(message: string) {
  const url = `${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`
  window.open(url, "_blank")
}

// --- Step Indicator ---

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
              i + 1 === current
                ? "bg-accent text-accent-foreground"
                : i + 1 < current
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {i + 1}
          </div>
          {i < total - 1 && (
            <div className={`w-12 h-0.5 transition-colors duration-300 ${i + 1 < current ? "bg-primary" : "bg-muted"}`} />
          )}
        </div>
      ))}
    </div>
  )
}

// --- Main Client Component ---

export default function TradePriceCalculatorClient() {
  const [step, setStep] = useState(1)
  const [selectedType, setSelectedType] = useState<ExtensionType | null>(null)
  const [selectedLength, setSelectedLength] = useState("20")
  const [selectedColor, setSelectedColor] = useState("natural")
  const [selectedQuantity, setSelectedQuantity] = useState(100)
  const [showResult, setShowResult] = useState(false)

  const currentExtension = extensionTypes.find(e => e.id === selectedType)
  const priceResult = currentExtension ? calculatePrice(currentExtension, selectedLength, selectedQuantity) : null
  const animatedTotal = useCountUp(priceResult?.total ?? 0, 600, showResult)
  const animatedPerGram = useCountUp(priceResult?.perGram ?? 0, 600, showResult)

  const handleNext = useCallback(() => {
    if (step === 4) {
      setShowResult(true)
      return
    }
    setStep(s => Math.min(s + 1, 4))
  }, [step])

  const handleBack = useCallback(() => {
    setShowResult(false)
    setStep(s => Math.max(s - 1, 1))
  }, [])

  const handleStartOver = () => {
    setShowResult(false)
    setStep(1)
    setSelectedType(null)
    setSelectedLength("20")
    setSelectedColor("natural")
    setSelectedQuantity(100)
  }

  const canProceed = () => {
    switch (step) {
      case 1: return selectedType !== null
      case 2: return true
      case 3: return true
      case 4: return true
      default: return false
    }
  }

  const stepTitles = ["Select Extension Type", "Choose Length", "Choose Colour Range", "Choose Quantity"]

  return (
    <CartProvider>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-16 md:py-24">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_40%,oklch(0.55_0.12_25),transparent_60%)]" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-6">
                <Calculator className="w-4 h-4" />
                <span>Wholesale Pricing Tool</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
                Trade Price Calculator
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                Estimate your wholesale costs in 30 seconds. Transparent pricing, volume discounts, and no hidden fees.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              {/* Step Indicator */}
              <StepIndicator current={showResult ? 5 : step} total={4} />

              {/* Step Title */}
              {!showResult && (
                <h2 className="font-serif text-2xl md:text-3xl text-center mb-8">
                  {stepTitles[step - 1]}
                </h2>
              )}

              {/* Step 1: Extension Type */}
              {step === 1 && !showResult && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-in fade-in duration-300">
                  {extensionTypes.map(ext => (
                    <button
                      key={ext.id}
                      onClick={() => setSelectedType(ext.id)}
                      className={`relative p-6 rounded-lg border-2 text-left transition-all duration-200 hover:shadow-md ${
                        selectedType === ext.id
                          ? "border-accent bg-accent/5 shadow-md"
                          : "border-border bg-card hover:border-accent/50"
                      }`}
                    >
                      {ext.badge && (
                        <span className="absolute top-2 right-2 text-xs font-medium bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
                          {ext.badge}
                        </span>
                      )}
                      <h3 className="font-medium text-sm md:text-base mb-1">{ext.name}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{ext.description}</p>
                      <p className="text-sm font-semibold text-accent mt-3">
                        From ~{`\u00A3`}{ext.basePricePerUnit}/{ext.baseUnit}
                      </p>
                    </button>
                  ))}
                </div>
              )}

              {/* Step 2: Length */}
              {step === 2 && !showResult && (
                <div className="flex flex-col items-center animate-in fade-in duration-300">
                  <p className="text-muted-foreground text-center mb-6 max-w-md">
                    Longer extensions require more raw material and carry a slight price premium per inch.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {lengths.map(l => (
                      <button
                        key={l.value}
                        onClick={() => setSelectedLength(l.value)}
                        className={`px-6 py-3 rounded-lg border-2 font-medium transition-all duration-200 ${
                          selectedLength === l.value
                            ? "border-accent bg-accent text-accent-foreground"
                            : "border-border bg-card hover:border-accent/50"
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                  {currentExtension && (
                    <p className="mt-6 text-sm text-muted-foreground">
                      Length {selectedLength}&quot; selected for {currentExtension.name}
                    </p>
                  )}
                </div>
              )}

              {/* Step 3: Colour Range */}
              {step === 3 && !showResult && (
                <div className="flex flex-col items-center animate-in fade-in duration-300">
                  <p className="text-muted-foreground text-center mb-6 max-w-md">
                    Select the colour range that best matches your salon&apos;s requirements. Pricing may vary slightly by colour complexity.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
                    {colorRanges.map(c => (
                      <button
                        key={c.id}
                        onClick={() => setSelectedColor(c.id)}
                        className={`p-5 rounded-lg border-2 text-left transition-all duration-200 hover:shadow-md ${
                          selectedColor === c.id
                            ? "border-accent bg-accent/5 shadow-md"
                            : "border-border bg-card hover:border-accent/50"
                        }`}
                      >
                        <div className="flex gap-1.5 mb-3">
                          {c.colors.map((hex, i) => (
                            <span
                              key={i}
                              className="w-6 h-6 rounded-full border border-border"
                              style={{ backgroundColor: hex }}
                            />
                          ))}
                        </div>
                        <h3 className="font-medium text-sm mb-1">{c.name}</h3>
                        <p className="text-xs text-muted-foreground">{c.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Quantity */}
              {step === 4 && !showResult && (
                <div className="flex flex-col items-center animate-in fade-in duration-300">
                  <p className="text-muted-foreground text-center mb-6 max-w-md">
                    Volume discounts are applied automatically. Larger orders receive bigger savings.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {quantityOptions.map(q => (
                      <button
                        key={q.value}
                        onClick={() => setSelectedQuantity(q.value)}
                        className={`relative px-5 py-3 rounded-lg border-2 font-medium transition-all duration-200 ${
                          selectedQuantity === q.value
                            ? "border-accent bg-accent text-accent-foreground"
                            : "border-border bg-card hover:border-accent/50"
                        }`}
                      >
                        {q.label}
                        {q.discount > 0 && (
                          <span className="absolute -top-2 -right-2 text-[10px] font-semibold bg-green-100 text-green-800 px-1.5 py-0.5 rounded-full">
                            {q.discount}% off
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-secondary/50 rounded-lg text-sm text-center max-w-md">
                    {(() => {
                      const qo = quantityOptions.find(q => q.value === selectedQuantity)
                      return qo?.discount ? (
                        <span className="text-green-700 font-medium">
                          You qualify for {qo.discount}% volume discount on this order
                        </span>
                      ) : (
                        <span className="text-muted-foreground">
                          Volume discounts start at 50g (5% off). Consider ordering more for better pricing.
                        </span>
                      )
                    })()}
                  </div>
                </div>
              )}

              {/* Result Display */}
              {showResult && priceResult && currentExtension && (
                <div className="animate-in fade-in duration-500">
                  <div className="bg-card border-2 border-accent/30 rounded-xl p-6 md:p-8 max-w-lg mx-auto text-center shadow-lg">
                    <h2 className="font-serif text-2xl md:text-3xl mb-2">Your Estimated Price</h2>
                    <p className="text-sm text-muted-foreground mb-6">
                      {currentExtension.name} &middot; {selectedLength}&quot; &middot; {quantityOptions.find(q => q.value === selectedQuantity)?.label} &middot; {colorRanges.find(c => c.id === selectedColor)?.name}
                    </p>

                    <div className="mb-6">
                      <span className="text-sm text-muted-foreground">Estimated Wholesale Total</span>
                      <p className="text-5xl md:text-6xl font-serif font-bold text-accent">
                        &pound;{animatedTotal.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </p>
                      {priceResult.discountPercent > 0 && (
                        <p className="text-sm text-green-600 mt-1">
                          Includes {priceResult.discountPercent}% volume discount
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-left bg-secondary/50 rounded-lg p-4">
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wide">Price per Gram</span>
                        <p className="font-semibold">&pound;{animatedPerGram.toFixed(2)}/g</p>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wide">Quantity</span>
                        <p className="font-semibold">{quantityOptions.find(q => q.value === selectedQuantity)?.label}</p>
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6 text-sm text-amber-800">
                      <strong>Trade Account holders get extra 5% off</strong> all wholesale prices.{" "}
                      <Link href="/trade-wholesale" className="underline font-medium">Apply now &rarr;</Link>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button
                        size="lg"
                        className="gap-2"
                        onClick={() =>
                          openWhatsApp(
                            `Hi! I'd like an exact quote for:\n- ${currentExtension.name}\n- Length: ${selectedLength}"\n- Colour: ${colorRanges.find(c => c.id === selectedColor)?.name}\n- Quantity: ${quantityOptions.find(q => q.value === selectedQuantity)?.label}\n\nRef: Trade Price Calculator`
                          )
                        }
                      >
                        <MessageCircle className="w-4 h-4" />
                        Request Exact Quote
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="gap-2"
                        asChild
                      >
                        <Link href="/trade-wholesale">
                          Apply for Trade Account
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      onClick={handleStartOver}
                      className="text-sm text-muted-foreground hover:text-foreground underline transition-colors"
                    >
                      Start a new calculation
                    </button>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              {!showResult && (
                <div className="flex justify-between mt-10 max-w-4xl mx-auto">
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    disabled={step === 1}
                    className="gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className="gap-2"
                  >
                    {step === 4 ? "Calculate Price" : "Next"}
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-secondary py-10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
              {[
                { icon: Clock, label: "19+ Years" },
                { icon: Package, label: "500+ Salons Served" },
                { icon: Shield, label: "100% Remy" },
                { icon: Award, label: "UK Stock" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-primary">
                  <Icon className="w-5 h-5" />
                  <span className="font-medium text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-center mb-10">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-4">
                    <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary text-primary-foreground py-16 md:py-20">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Ready to order?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
              Speak to our UK team for an exact quote, custom orders, or to set up your trade account.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-white text-white hover:bg-white hover:text-primary"
              onClick={() => openWhatsApp("Hi! I'd like to discuss a wholesale order for my salon.")}
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </div>
        </section>

        {/* JSON-LD: FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a,
                },
              })),
            }),
          }}
        />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  )
}
