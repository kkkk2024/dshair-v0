"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Search, ShoppingBag, User, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { useCart } from "@/lib/cart-context"

const diyExtensions = [
  { title: "Silk Seam Clip-In", href: "/collections/silk-seam-clip-in", description: "Our most seamless clip-in technology" },
  { title: "Classic Clip-In", href: "/collections/classic-clip-in", description: "Easy to apply, natural look" },
  { title: "Ponytails", href: "/collections/ponytails", description: "Instant volume and length" },
  { title: "Volumizing Weft", href: "/collections/volumizing-weft", description: "Add fullness effortlessly" },
  { title: "Fringes & Bangs", href: "/collections/fringes-bangs", description: "Transform your look instantly" },
]

const proExtensions = [
  { title: "Tape-In Extensions", href: "/collections/tape-in", description: "Professional grade tape-ins" },
  { title: "Weft Extensions", href: "/collections/wefts", description: "Hand-tied and machine wefts" },
  { title: "K-Tip Extensions", href: "/collections/k-tips", description: "Keratin bonded tips" },
  { title: "I-Tip Extensions", href: "/collections/i-tips", description: "Individual strand application" },
  { title: "Bulk Hair", href: "/collections/bulk-hair", description: "For custom applications" },
]

const services = [
  { title: "Find a Stylist", href: "/find-stylist", description: "Locate certified professionals near you" },
  { title: "Education & Certification", href: "/education", description: "Professional training programs" },
  { title: "Colour Match", href: "/colour-match", description: "Find your perfect shade" },
  { title: "Hair Care Guide", href: "/hair-care", description: "Maintain your extensions" },
]

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { itemCount, setIsOpen: setCartOpen } = useCart()

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm">
        <p>Free UK Delivery on Orders Over £175 | Use Code: WELCOME15 for 15% Off Your First Order</p>
      </div>

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-4 mt-8">
                <MobileNavSection title="DIY Extensions" items={diyExtensions} />
                <MobileNavSection title="Professional" items={proExtensions} />
                <MobileNavSection title="Services" items={services} />
                <Link href="/about" className="py-2 text-lg font-medium hover:text-accent transition-colors">
                  About Us
                </Link>
                <Link href="/contact" className="py-2 text-lg font-medium hover:text-accent transition-colors">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl md:text-2xl font-semibold tracking-tight">
              D.S HAIR & BEAUTY
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">DIY Extensions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {diyExtensions.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Professional</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {proExtensions.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {services.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Link href="/account">
              <Button variant="ghost" size="icon" aria-label="Account">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Shopping cart"
              className="relative"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Search overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur">
          <div className="container flex flex-col items-center justify-center h-full px-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4"
              onClick={() => setIsSearchOpen(false)}
              aria-label="Close search"
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="w-full max-w-2xl">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full text-2xl md:text-4xl bg-transparent border-b-2 border-foreground py-4 focus:outline-none placeholder:text-muted-foreground"
                autoFocus
              />
              <div className="mt-8">
                <p className="text-sm text-muted-foreground mb-4">Popular Searches</p>
                <div className="flex flex-wrap gap-2">
                  {["Clip-In Extensions", "Tape-Ins", "Ponytails", "Blonde", "Brunette"].map((term) => (
                    <Button key={term} variant="outline" size="sm" className="rounded-full">
                      {term}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function MobileNavSection({ title, items }: { title: string; items: { title: string; href: string; description: string }[] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 text-lg font-medium"
      >
        {title}
        <ChevronDown className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <div className="pl-4 flex flex-col gap-2 mt-2">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="py-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function ListItem({ className, title, children, href, ...props }: {
  className?: string
  title: string
  children: React.ReactNode
  href: string
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
