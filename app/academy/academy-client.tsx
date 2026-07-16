"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, GraduationCap, Award, Globe, Star, Clock } from "lucide-react"
import Image from "next/image"

export default function AcademyPage() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">

          {/* Hero Section */}
          <section className="relative h-[600px] md:h-[700px] flex items-center">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
                alt="International Hair Extension Academy"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
            </div>
            <div className="container relative z-10 px-4 md:px-6">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-1.5 mb-6">
                  <GraduationCap className="h-4 w-4 text-white" />
                  <span className="text-sm font-medium text-white">Coming Soon — International Academy Programme</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight text-white">
                  Master Hair Extensions.
                  <br />
                  <span className="text-amber-300">Get Certified.</span>
                </h1>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
                  An exclusive international training programme bringing Australian world-class hair extension techniques to UK stylists — with official certification from Excel College Australia.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-white text-black hover:bg-white/90">
                    <a href="#waitlist">Join the Waitlist</a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white bg-black/30 hover:bg-white hover:text-black" asChild>
                    <a href="#about">Learn More</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Partner Badge */}
          <section className="py-8 bg-card border-b">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                <div className="text-center">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Powered By</div>
                  <div className="text-2xl md:text-3xl font-serif font-semibold">Excel College Australia</div>
                  <div className="text-sm text-muted-foreground mt-1">RTO 45200 | CRICOS Registered</div>
                </div>
                <div className="hidden md:block h-12 w-px bg-border" />
                <div className="text-center">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">In Partnership With</div>
                  <div className="text-2xl md:text-3xl font-serif font-semibold">D.S Hair & Beauty</div>
                  <div className="text-sm text-muted-foreground mt-1">UK Stockist | Manchester</div>
                </div>
              </div>
            </div>
          </section>

          {/* What Makes This Special */}
          <section id="about" className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Why This Academy Is Different</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  This is not just another online course. This is a pathway to becoming a certified hair extension specialist with international credentials.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-5">
                    <Award className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Official Australian Certification</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Receive a certificate issued by Excel College Australia — a government-registered RTO (45200) and CRICOS-approved institution with international credibility.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-5">
                    <Star className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Learn from Industry Leaders</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Training delivered by expert stylists with proven social media presence and years of real salon experience. Weft extensions, tape-ins, and beyond.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-5">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Global Recognition</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Your certificate carries weight internationally. Position yourself as a certified specialist and command premium pricing in the UK market.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-5">
                    <GraduationCap className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Premium Student Kit Included</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Every student receives an official D.S. Hair extension kit to practice with — using the same professional-grade products trusted by UK salons.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center mb-5">
                    <Clock className="h-6 w-6 text-rose-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Flexible Learning</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Video modules available on-demand. Learn at your own pace, revisit techniques anytime, and complete assessments when you are ready.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-5">
                    <CheckCircle2 className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Career Advancement</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Stand out in a competitive market. Certified stylists attract more clients, charge higher prices, and build stronger reputations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* The Partnership Story */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Our Story</div>
                  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">A Global Partnership for UK Stylists</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      D.S. Hair & Beauty has partnered with Excel College Australia — one of Australia&apos;s leading hair extension training institutions — to bring their world-class curriculum to the UK market.
                    </p>
                    <p>
                      Excel College Australia is registered with the Australian Government as an RTO (Registered Training Organisation, RTO 45200) and is CRICOS approved for international students. Their programmes are recognised across the hair and beauty industry.
                    </p>
                    <p>
                      Together, we are creating a pathway for UK stylists to access premium hair extension education and earn an internationally recognised certification — without leaving the UK.
                    </p>
                  </div>
                </div>
                <div className="bg-card rounded-2xl p-8 border">
                  <h3 className="font-semibold text-xl mb-6">Key Credentials</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">RTO 45200</div>
                        <div className="text-sm text-muted-foreground">Registered Training Organisation (Australian Government)</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">CRICOS Registered</div>
                        <div className="text-sm text-muted-foreground">Approved to teach international students</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Expert-Led Training</div>
                        <div className="text-sm text-muted-foreground">Curriculum developed by industry professionals</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Waitlist Section */}
          <section id="waitlist" className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="max-w-xl mx-auto">
                <div className="bg-card rounded-2xl p-8 md:p-10 border text-center">
                  {submitted ? (
                    <div>
                      <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="font-serif text-2xl font-medium mb-3">You&apos;re on the List!</h3>
                      <p className="text-muted-foreground mb-4">
                        Thank you for joining our waitlist. We will notify you as soon as the Academy programme opens for enrollment.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Questions? Contact us at{" "}
                        <a href="mailto:academy@dshairbeauty.co.uk" className="text-primary underline">
                          academy@dshairbeauty.co.uk
                        </a>
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <GraduationCap className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="font-serif text-2xl font-medium mb-3">Join the Waitlist</h3>
                      <p className="text-muted-foreground mb-8">
                        Be the first to know when the Academy opens. Early waitlist members receive priority access and exclusive launch offers.
                      </p>
                      <form onSubmit={handleSubmit} className="space-y-4 text-left">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-1.5">Your Name</label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="First & Last Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email Address</label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="you@yoursalon.co.uk"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <Button type="submit" size="lg" className="w-full" disabled={loading}>
                          {loading ? "Submitting..." : "Join the Waitlist"}
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">
                          We respect your privacy. No spam, ever.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Preview */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Frequently Asked Questions</h2>
              </div>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-card rounded-xl p-6 border">
                  <h3 className="font-semibold mb-2">When will the Academy launch?</h3>
                  <p className="text-muted-foreground text-sm">
                    We are currently finalising the curriculum and approval processes. Join the waitlist to receive updates and be among the first to enrol.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border">
                  <h3 className="font-semibold mb-2">Is this certification recognised in the UK?</h3>
                  <p className="text-muted-foreground text-sm">
                    The certificate is issued by Excel College Australia (RTO 45200). While it is an industry qualification rather than a UK government-issued NVQ, it carries significant weight in the professional hair extension market.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border">
                  <h3 className="font-semibold mb-2">Do I need to buy a kit to enrol?</h3>
                  <p className="text-muted-foreground text-sm">
                    Yes. Every student receives a professional D.S. Hair extension kit as part of their enrollment. This ensures you are practicing with the same premium products used in the training modules.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border">
                  <h3 className="font-semibold mb-2">How is the course delivered?</h3>
                  <p className="text-muted-foreground text-sm">
                    The programme consists of video modules available on-demand through our online learning platform. You can learn at your own pace from anywhere in the world.
                  </p>
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
