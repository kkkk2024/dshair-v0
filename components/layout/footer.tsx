"use client"

import Link from "next/link"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Youtube, Twitter, Linkedin, MessageCircle, Check } from "lucide-react"
import { socialLinks, contactInfo } from "@/lib/products"
import { useDict } from "@/lib/i18n"

export function Footer() {
  const d = useDict()
  const f = d.ui.footer
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setLoading(true)
    setTimeout(() => {
      setSubscribed(true)
      setLoading(false)
      setEmail("")
    }, 1000)
  }

  const footerLinks = {
    shop: [
      { title: f.shopDiy, href: "/collections/diy" },
      { title: f.shopPro, href: "/collections/professional" },
      { title: f.shopHairCare, href: "/collections/hair-care" },
      { title: f.shopAccessories, href: "/collections/accessories" },
    ],
    help: [
      { title: f.helpContact, href: "/contact" },
      { title: f.helpFaqs, href: "/faqs" },
      { title: f.helpShipping, href: "/shipping" },
      { title: f.helpReturns, href: "/returns" },
      { title: f.helpColourMatch, href: "/colour-match" },
    ],
    about: [
      { title: f.aboutStory, href: "/about" },
      { title: f.aboutPartners, href: "/salon-partners" },
      { title: f.aboutWhy, href: "/why-choose-us" },
      { title: f.aboutBlog, href: "/blog" },
    ],
    services: [
      { title: f.svcFindStylist, href: "/find-stylist" },
      { title: f.svcColourMatch, href: "/colour-match" },
    ],
    salons: [
      { title: f.forWholesale, href: "/contact?type=wholesale" },
      { title: f.forTradeAccount, href: "/salon-partners" },
      { title: f.forSwitch, href: "/switch-trade-supplier" },
      { title: f.forCalculator, href: "/trade-price-calculator" },
      { title: f.forWhatsApp, href: contactInfo.whatsapp, external: true },
    ],
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container px-4 md:px-6 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl mb-2">{f.newsletterTitle}</h3>
              <p className="text-primary-foreground/80">
                {f.newsletterDesc}
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-2">
              {subscribed ? (
                <div className="flex items-center gap-2 text-green-300 bg-green-900/30 px-4 py-2 rounded-lg">
                  <Check className="h-5 w-5" />
                  <span>{f.thanks}</span>
                </div>
              ) : (
                <>
                  <Input
                    type="email"
                    placeholder={f.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 min-w-[250px]"
                  />
                  <Button
                    variant="secondary"
                    className="whitespace-nowrap"
                    disabled={loading}
                    type="submit"
                  >
                    {loading ? f.subscribing : f.subscribe}
                  </Button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-xl font-semibold">D.S HAIR & BEAUTY</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm mb-6 leading-relaxed">
              {f.brandDesc}
            </p>
            <div className="flex gap-4">
              <Link href={socialLinks.instagram} target="_blank" aria-label="Instagram" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href={socialLinks.facebook} target="_blank" aria-label="Facebook" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href={socialLinks.youtube} target="_blank" aria-label="YouTube" className="hover:text-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href={socialLinks.tiktok} target="_blank" aria-label="TikTok" className="hover:text-accent transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </Link>
              <Link href={socialLinks.pinterest} target="_blank" aria-label="Pinterest" className="hover:text-accent transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.94-.2-2.4.04-3.44l1.3-5.52s-.33-.66-.33-1.64c0-1.54.89-2.69 2-2.69.94 0 1.4.71 1.4 1.56 0 .95-.6 2.38-.91 3.7-.26 1.11.56 2.02 1.66 2.02 1.99 0 3.52-2.1 3.52-5.14 0-2.68-1.92-4.56-4.66-4.56-3.37 0-5.35 2.53-5.35 5.14 0 1.02.39 2.11.88 2.7.1.1.11.19.08.29l-.33 1.33c-.05.21-.18.26-.4.16-1.5-.7-2.43-2.88-2.43-4.64 0-3.78 2.75-7.26 7.92-7.26 4.16 0 7.4 2.97 7.4 6.93 0 4.14-2.6 7.46-6.22 7.46-1.21 0-2.36-.63-2.75-1.38l-.75 2.85c-.27 1.04-1 2.35-1.49 3.15A12 12 0 1 0 12 0z"/></svg>
              </Link>
              <Link href={socialLinks.linkedin} target="_blank" aria-label="LinkedIn" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href={contactInfo.whatsapp} target="_blank" aria-label="WhatsApp" className="hover:text-accent transition-colors">
                <MessageCircle className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="font-semibold mb-4">{f.colShop}</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{f.colHelp}</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{f.colAbout}</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{f.colServices}</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Salons - B2B Section */}
          <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
            <h4 className="font-semibold mb-4 text-accent">{f.colForSalons}</h4>
            <ul className="space-y-3">
              {footerLinks.salons.map((link) => (
                <li key={link.title}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-1">
                      {link.title}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                      {link.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Manufacturing - dual-site loop */}
          <div>
            <h4 className="font-semibold mb-4">{f.colManufacturing}</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://wigexporter.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  wigexporter.com &#8599;
                </a>
              </li>
              <li>
                <Link href="/switch-trade-supplier" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  {f.manufWhyDirect}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p>{f.copyright.replace('{year}', String(new Date().getFullYear()))}</p>
              <p className="text-xs">{f.company}</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <Link href="/privacy" className="hover:text-primary-foreground transition-colors">
                {f.privacy}
              </Link>
              <Link href="/terms" className="hover:text-primary-foreground transition-colors">
                {f.terms}
              </Link>
              <Link href="/cookies" className="hover:text-primary-foreground transition-colors">
                {f.cookies}
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs">{f.location}</span>
              <span className="text-xs">|</span>
              <a href="https://wigexporter.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-accent transition-colors">{f.manufLabel} &#8599;</a>
              <span className="text-xs">|</span>
              <a href={`mailto:${contactInfo.email}`} className="text-xs hover:text-accent transition-colors">{contactInfo.email}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
