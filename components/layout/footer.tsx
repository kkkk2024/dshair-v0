import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react"

const footerLinks = {
  shop: [
    { title: "DIY Extensions", href: "/collections/diy" },
    { title: "Professional Extensions", href: "/collections/professional" },
    { title: "Hair Care", href: "/collections/hair-care" },
    { title: "Accessories", href: "/collections/accessories" },
    { title: "Gift Cards", href: "/gift-cards" },
  ],
  help: [
    { title: "Contact Us", href: "/contact" },
    { title: "FAQs", href: "/faqs" },
    { title: "Shipping & Returns", href: "/shipping-returns" },
    { title: "Track Order", href: "/track-order" },
    { title: "Size Guide", href: "/size-guide" },
  ],
  about: [
    { title: "Our Story", href: "/about" },
    { title: "Careers", href: "/careers" },
    { title: "Press", href: "/press" },
    { title: "Sustainability", href: "/sustainability" },
    { title: "Salon Partners", href: "/salon-partners" },
  ],
  services: [
    { title: "Find a Stylist", href: "/find-stylist" },
    { title: "Education", href: "/education" },
    { title: "Colour Match", href: "/colour-match" },
    { title: "Book Consultation", href: "/consultation" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container px-4 md:px-6 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl mb-2">Join Our Community</h3>
              <p className="text-primary-foreground/80">
                Subscribe for exclusive offers, hair tips, and be the first to know about new arrivals.
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 min-w-[250px]"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-xl font-semibold">D.S HAIR & BEAUTY</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm mb-6 leading-relaxed">
              {"World's #1 Brand for Professional and Do-It-Yourself Hair Extensions. Premium 100% Remy Human Hair."}
            </p>
            <div className="flex gap-4">
              <Link href="https://instagram.com" aria-label="Instagram" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://facebook.com" aria-label="Facebook" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://youtube.com" aria-label="YouTube" className="hover:text-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
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
            <h4 className="font-semibold mb-4">Help</h4>
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
            <h4 className="font-semibold mb-4">About</h4>
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
            <h4 className="font-semibold mb-4">Services</h4>
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
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} D.S HAIR & BEAUTY. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <Link href="/privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-primary-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs">Manchester, UK</span>
              <span className="text-xs">|</span>
              <span className="text-xs">caro@dshairbeauty.co.uk</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
