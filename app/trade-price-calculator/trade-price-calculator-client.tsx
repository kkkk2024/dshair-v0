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
  Package, Clock, Award, Shield, Factory, Star, ArrowRight,
  Truck, BadgeCheck
} from "lucide-react"
import Link from "next/link"

// --- Data Types ---

type ExtensionType = "tape-in" | "nano-ring" | "k-tip" | "clip-in" | "machine-weft" | "butterfly-weft"

interface PriceScale {
  [length: string]: number // price per base unit (pack) in GBP
}

interface ExtensionOption {
  id: ExtensionType
  name: string
  badge?: string
  description: string
  factoryPriceScale: PriceScale
  packUnit: string // "per 20pcs pack" / "per 100pcs" / "per set"
  packDescription: string
  collectionLink: string
  isCustomQuote: boolean
}

const extensionTypes: ExtensionOption[] = [
  {
    id: "tape-in",
    name: "Tape-In Extensions",
    badge: "Most Popular",
    description: "Factory-direct 100% Remy tape-in extensions. Salon standard 12A grade. 20pcs per pack.",
    factoryPriceScale: { "16": 16.60, "18": 19.20, "20": 25.80, "22": 28.90, "24": 32.00, "26": 35.00 },
    packUnit: "per 20pcs pack",
    packDescription: "20 pieces (10 sandwiches) per pack — 4cm×1cm, 2-2.5g per piece",
    collectionLink: "/collections/tape-in",
    isCustomQuote: false,
  },
  {
    id: "nano-ring",
    name: "Nano Ring Extensions",
    description: "Ultra-discreet nano ring extensions. 12A Remy grade, 0.75g/pc — ideal for fine hair clients.",
    factoryPriceScale: { "16": 25.40, "18": 30.80, "20": 36.20, "22": 40.80, "24": 46.20, "26": 47.00 },
    packUnit: "per 100pcs",
    packDescription: "100 pieces per pack — 0.75g each, salon standard quality",
    collectionLink: "/collections/nano-extensions",
    isCustomQuote: false,
  },
  {
    id: "k-tip",
    name: "K-Tip / Pre-Tipped",
    description: "Keratin-bonded pre-tipped extensions for secure, long-lasting salon application.",
    factoryPriceScale: {},
    packUnit: "",
    packDescription: "",
    collectionLink: "/collections/k-tip-extensions",
    isCustomQuote: true,
  },
  {
    id: "clip-in",
    name: "Clip-In Extension Sets",
    description: "Ready-to-wear clip-in sets. Multiple weft pieces per set for full-head coverage.",
    factoryPriceScale: {},
    packUnit: "",
    packDescription: "",
    collectionLink: "/collections/clip-in",
    isCustomQuote: true,
  },
  {
    id: "machine-weft",
    name: "Machine Weft (Bulk)",
    description: "Machine-sewn wefts for salon volume work. Sold by weight — ideal for colour technicians.",
    factoryPriceScale: {},
    packUnit: "",
    packDescription: "",
    collectionLink: "/collections/weft",
    isCustomQuote: true,
  },
  {
    id: "butterfly-weft",
    name: "Butterfly Weft (Hand-Tied)",
    description: "Premium hand-tied wefts with ultra-thin, flexible bases. Lightweight and invisible.",
    factoryPriceScale: {},
    packUnit: "",
    packDescription: "",
    collectionLink: "/collections/butterfly-weft",
    isCustomQuote: true,
  },
]

const lengths = [
  { value: "16", label: '16"' },
  { value: "18", label: '18"' },
  { value: "20", label: '20"' },
  { value: "22", label: '22"' },
  { value: "24", label: '24"' },
  { value: "26", label: '26"' },
]

const quantityTiers = [
  { value: 1, label: "1 Pack (Trial)", packs: 1, discount: 0, note: "Perfect for sampling" },
  { value: 5, label: "5 Packs", packs: 5, discount: 5, note: "Popular salon starter" },
  { value: 10, label: "10 Packs", packs: 10, discount: 8, note: "Regular salon order" },
  { value: 20, label: "20 Packs", packs: 20, discount: 10, note: "Best value" },
  { value: 50, label: "50+ Packs", packs: 50, discount: 12, note: "Bulk salon supply" },
]

// --- Price Calculation ---

function calculatePrice(
  extension: ExtensionOption,
  lengthInch: string,
  packs: number,
): { packPrice: number; total: number; discountPercent: number; unitLabel: string } {
  const unitPrice = extension.factoryPriceScale[lengthInch] ?? 0
  const tier = quantityTiers.find(q => q.packs === packs) ?? quantityTiers[0]
  const total = unitPrice * packs * (1 - tier.discount / 100)
  return {
    packPrice: Math.round(unitPrice * 100) / 100,
    total: Math.round(total * 100) / 100,
    discountPercent: tier.discount,
    unitLabel: extension.packUnit,
  }
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
    q: "Are these the exact prices I'll pay as a salon?",
    a: "The calculator shows estimated factory-direct trade prices based on our 2025 quotation sheets for 12A Remy grade. Exact pricing depends on your salon's order volume, colour selection, and any custom requirements. Contact us on WhatsApp for a personalised salon quote — typically we respond within minutes during UK business hours."
  },
  {
    q: "What's the difference between 10A, 12A, and Top Grade?",
    a: "12A (100% Remy human hair) is our recommended salon standard — cuticles aligned, minimal shedding, 3-6 month lifespan with proper care. Top Grade offers even finer quality for high-end salon clients. 10A is a budget option we don't actively recommend for professional salons."
  },
  {
    q: "Do you offer trade accounts with net-30 terms?",
    a: "Yes. Established salon partners with consistent order history can apply for trade credit terms. New salons typically start with proforma invoice payment, with trade terms available after your first 2-3 orders. Visit our Trade Wholesale page or WhatsApp us to discuss."
  },
  {
    q: "What about custom colours and blending?",
    a: "We custom-colour to your salon's specifications. Light colours (blondes, highlights) carry an 18-20% premium. Fashion colours and balayage blends are quoted per project. Send us your colour formula and we'll match it exactly."
  },
  {
    q: "How quickly can I stock my salon?",
    a: "We hold UK warehouse stock for popular lines — dispatch within 1-2 business days. Custom colours typically ship within 5-7 business days. For new salon partners, we recommend ordering a sample pack first to assess quality before placing volume orders."
  },
  {
    q: "What's your MOQ for salon accounts?",
    a: "We have no strict MOQ for new salon partners. You can start with a single trial pack to evaluate quality. Volume discounts kick in at 5 packs. There's no upper limit — we supply salons ordering 50+ packs monthly."
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
  const [selectedPacks, setSelectedPacks] = useState(5)
  const [showResult, setShowResult] = useState(false)

  const currentExtension = extensionTypes.find(e => e.id === selectedType)
  const priceResult = currentExtension && !currentExtension.isCustomQuote
    ? calculatePrice(currentExtension, selectedLength, selectedPacks)
    : null
  const animatedTotal = useCountUp(priceResult?.total ?? 0, 600, showResult)
  const animatedPackPrice = useCountUp(priceResult?.packPrice ?? 0, 600, showResult)

  const handleNext = useCallback(() => {
    if (step === 3) {
      setShowResult(true)
      return
    }
    setStep(s => Math.min(s + 1, 3))
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
    setSelectedPacks(5)
  }

  const canProceed = () => {
    switch (step) {
      case 1: return selectedType !== null
      case 2: return true
      case 3: return true
      default: return false
    }
  }

  const stepTitles = ["Select Extension Type", "Choose Length", "Choose Order Quantity"]

  return (
    <CartProvider>
      <Header />
      <main>
        {/* Hero Section — Salon Supplier Positioning */}
        <section className="relative bg-primary text-primary-foreground py-16 md:py-24">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_40%,oklch(0.55_0.12_25),transparent_60%)]" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-4">
                <Factory className="w-4 h-4" />
                <span>Factory-Direct Salon Supply</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
                Salon Trade Pricing
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-2">
                Direct from our factory to your salon chair.
              </p>
              <p className="text-sm md:text-base opacity-75 max-w-xl mx-auto">
                Transparent, volume-based pricing for professional salons. No middlemen, no retail markup.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              {/* Step Indicator */}
              <StepIndicator current={showResult ? 4 : step} total={3} />

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
                      {ext.isCustomQuote ? (
                        <p className="text-sm font-semibold text-accent mt-3">
                          Custom Quote
                        </p>
                      ) : (
                        <p className="text-sm font-semibold text-accent mt-3">
                          From £{Object.values(ext.factoryPriceScale)[0]?.toFixed(0)} {ext.packUnit}
                        </p>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* Step 2: Length */}
              {step === 2 && !showResult && currentExtension && (
                <div className="flex flex-col items-center animate-in fade-in duration-300">
                  {currentExtension.isCustomQuote ? (
                    <div className="text-center max-w-md">
                      <div className="p-8 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                        <Star className="w-10 h-10 text-amber-500 mx-auto mb-3" />
                        <h3 className="font-semibold text-lg mb-2">Custom Quote Required</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {currentExtension.name} pricing varies significantly by specification. 
                          Contact us directly for your salon&apos;s custom quote — we typically respond within minutes.
                        </p>
                        <Button
                          className="gap-2 w-full"
                          onClick={() =>
                            openWhatsApp(
                              `Hi! I'd like a salon quote for ${currentExtension.name}. My salon is based in [your location]. Can you send me trade pricing?`
                            )
                          }
                        >
                          <MessageCircle className="w-4 h-4" />
                          Get Quote via WhatsApp
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Or go back and select Tape-In or Nano Ring for instant pricing estimates.
                      </p>
                    </div>
                  ) : (
                    <>
                      <p className="text-muted-foreground text-center mb-6 max-w-md">
                        Longer lengths use more raw material. Our prices scale transparently with length.
                      </p>
                      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 w-full max-w-2xl">
                        {lengths.map(l => (
                          <button
                            key={l.value}
                            onClick={() => setSelectedLength(l.value)}
                            className={`px-4 py-4 rounded-lg border-2 font-medium transition-all duration-200 text-center ${
                              selectedLength === l.value
                                ? "border-accent bg-accent text-accent-foreground"
                                : "border-border bg-card hover:border-accent/50"
                            }`}
                          >
                            <span className="block text-lg">{l.label}</span>
                            <span className="block text-xs mt-1 opacity-70">
                              £{currentExtension.factoryPriceScale[l.value]?.toFixed(0)}
                            </span>
                          </button>
                        ))}
                      </div>
                      <p className="mt-4 text-xs text-muted-foreground text-center">
                        {currentExtension.packDescription}
                      </p>
                    </>
                  )}
                </div>
              )}

              {/* Step 3: Quantity */}
              {step === 3 && !showResult && currentExtension && !currentExtension.isCustomQuote && (
                <div className="flex flex-col items-center animate-in fade-in duration-300">
                  <p className="text-muted-foreground text-center mb-6 max-w-md">
                    Larger orders earn better pricing. Most salon partners start with 5 packs and scale up.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-2xl">
                    {quantityTiers.map(q => (
                      <button
                        key={q.value}
                        onClick={() => setSelectedPacks(q.packs)}
                        className={`relative px-5 py-4 rounded-lg border-2 text-left transition-all duration-200 ${
                          selectedPacks === q.packs
                            ? "border-accent bg-accent/5 shadow-md"
                            : "border-border bg-card hover:border-accent/50"
                        }`}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-medium text-sm">{q.label}</span>
                          {q.discount > 0 && (
                            <span className="text-xs font-semibold text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full">
                              -{q.discount}%
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">{q.note}</p>
                      </button>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-secondary/50 rounded-lg text-sm text-center max-w-md">
                    {(() => {
                      const qt = quantityTiers.find(q => q.packs === selectedPacks)
                      return qt?.discount ? (
                        <span className="text-green-700 font-medium">
                          {qt.discount}% volume discount applied — £{currentExtension.factoryPriceScale[selectedLength]?.toFixed(2)} → £{(currentExtension.factoryPriceScale[selectedLength] * (1 - qt.discount / 100)).toFixed(2)}/{currentExtension.packUnit}
                        </span>
                      ) : (
                        <span className="text-muted-foreground">
                          Starter pack at standard rate. Volume discounts from 5 packs.
                        </span>
                      )
                    })()}
                  </div>
                </div>
              )}

              {/* Skip step 3 for custom quote types */}
              {step === 3 && !showResult && currentExtension?.isCustomQuote && handleStartOver && (
                <div className="flex justify-center">
                  {(() => { handleStartOver(); return null })()}
                </div>
              )}

              {/* Result Display */}
              {showResult && priceResult && currentExtension && (
                <div className="animate-in fade-in duration-500">
                  <div className="bg-card border-2 border-accent/30 rounded-xl p-6 md:p-8 max-w-lg mx-auto text-center shadow-lg">
                    <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 text-xs text-amber-700 mb-3">
                      <Factory className="w-3 h-3" />
                      Factory-Direct Estimate
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl mb-2">Your Trade Price Estimate</h2>
                    <p className="text-sm text-muted-foreground mb-6">
                      {currentExtension.name} &middot; {selectedLength}&quot; &middot; {selectedPacks} pack{selectedPacks > 1 ? "s" : ""}
                    </p>

                    <div className="mb-6">
                      <span className="text-sm text-muted-foreground">Estimated Order Total</span>
                      <p className="text-5xl md:text-6xl font-serif font-bold text-accent">
                        &pound;{animatedTotal.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        (£{animatedPackPrice.toFixed(2)} {currentExtension.packUnit})
                      </p>
                      {priceResult.discountPercent > 0 && (
                        <p className="text-sm text-green-600 mt-1">
                          Includes {priceResult.discountPercent}% volume discount
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6 text-left bg-secondary/50 rounded-lg p-4">
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wide">Pack Price</span>
                        <p className="font-semibold">&pound;{animatedPackPrice.toFixed(2)}</p>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wide">Quantity</span>
                        <p className="font-semibold">{selectedPacks} {selectedPacks === 1 ? "Pack" : "Packs"}</p>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wide">Grade</span>
                        <p className="font-semibold">12A Remy</p>
                      </div>
                    </div>

                    {/* Hook: Trade Account */}
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4 text-sm text-amber-800 text-left">
                      <strong className="block mb-1">Not your final price.</strong>
                      This is an estimate based on our standard trade rates. Your salon&apos;s actual price depends on:
                      <ul className="list-disc pl-4 mt-1 space-y-0.5 text-xs">
                        <li>Colour selection (light colours +18-20%)</li>
                        <li>Consistent order volume (recurring discounts)</li>
                        <li>Trade account status (additional 5% off)</li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-3">
                      <Button
                        size="lg"
                        className="gap-2 w-full"
                        onClick={() =>
                          openWhatsApp(
                            `Hi! I'd like an exact salon trade quote:\n\n- ${currentExtension.name}\n- Length: ${selectedLength}"\n- Quantity: ${selectedPacks} packs\n- My salon is based in [location]\n\nCould you send me your best trade pricing?`
                          )
                        }
                      >
                        <MessageCircle className="w-4 h-4" />
                        Get Your Salon&apos;s Exact Quote
                      </Button>
                      <div className="grid grid-cols-2 gap-3">
                        <Button
                          size="lg"
                          variant="outline"
                          className="gap-1.5 text-sm w-full"
                          asChild
                        >
                          <Link href="/trade-wholesale">
                            <BadgeCheck className="w-4 h-4" />
                            Open Trade Account
                          </Link>
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="gap-1.5 text-sm w-full"
                          asChild
                        >
                          <Link href={currentExtension.collectionLink}>
                            <Package className="w-4 h-4" />
                            View Products
                          </Link>
                        </Button>
                      </div>
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
                    {step === 3 ? "Calculate Price" : "Next"}
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Trust Bar — Salon Supplier */}
        <section className="bg-secondary py-10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
              {[
                { icon: Factory, label: "Factory-Direct" },
                { icon: Truck, label: "UK Warehouse Stock" },
                { icon: BadgeCheck, label: "100% Remy 12A Grade" },
                { icon: Star, label: "19+ Years Experience" },
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
              <h2 className="font-serif text-3xl md:text-4xl text-center mb-4">
                Salon Partner FAQs
              </h2>
              <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
                Everything you need to know about becoming a D.S Hair Beauty salon partner.
              </p>
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

        {/* Final CTA — One-Stop Salon Supply */}
        <section className="bg-primary text-primary-foreground py-16 md:py-20">
          <div className="container px-4 md:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-4">
              <Factory className="w-4 h-4" />
              <span>Your Salon&apos;s Supply Partner</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              From our factory to your salon
            </h2>
            <p className="text-lg opacity-90 mb-6 max-w-xl mx-auto">
              We supply hundreds of UK salons with premium hair extensions at factory-direct prices. No middlemen, no retail markup — just quality you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-white text-white hover:bg-white hover:text-primary"
                onClick={() => openWhatsApp("Hi! I run a salon and I'm interested in becoming a D.S Hair Beauty stockist. Can you send me your trade pricing and MOQ?")}
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
              <Button
                size="lg"
                className="gap-2 bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link href="/trade-wholesale">
                  Open Trade Account
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
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
