"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
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
import { products } from "@/lib/products"
import { contactInfo } from "@/lib/products"

// 1. DIY Extensions - 包含 Clip-In, Weft, Ponytail, Fringes & Bangs
const diyExtensions = [
  { title: "Clip-In", href: "/collections/clip-in", description: "Easy to apply, natural look" },
  { title: "Weft", href: "/collections/weft", description: "Add fullness effortlessly" },
  { title: "Ponytail", href: "/collections/ponytails", description: "Instant volume and length" },
  { title: "Fringes & Bangs", href: "/collections/fringes-bangs", description: "Transform your look instantly" },
]

// 2. Professional - 包含 Tape-In, K-tips, Weft Extensions, Butterfly
const proExtensions = [
  { title: "Tape-In", href: "/collections/tape-in", description: "Professional grade tape-ins" },
  { title: "K-Tip Extensions", href: "/collections/k-tip-extensions", description: "Keratin bonded tips" },
  { title: "Nano Extensions", href: "/collections/nano-extensions", description: "Nano ring extensions for fine hair" },
  { title: "Butterfly Weft", href: "/collections/butterfly-weft", description: "Lightweight volume" },
]

// 3. Hair Care
const hairCare = [
  { title: "All Hair Care", href: "/collections/hair-care", description: "Sulfate-free formulas" },
  { title: "Care Products", href: "/collections/care-products", description: "Extension care essentials" },
]

// 4. Accessories
const accessories = [
  { title: "Accessories", href: "/collections/accessories", description: "Brushes, clips & more" },
  { title: "Care Products", href: "/collections/care-products", description: "Extension care essentials" },
]

// 5. Services
const services = [
  { title: "Find a Stylist", href: "/find-stylist", description: "Locate certified professionals near you" },
  { title: "Colour Match", href: "/colour-match", description: "Find your perfect shade" },
]

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Search products and redirect to collection with filter
      router.push(`/collections/all?search=${encodeURIComponent(searchQuery)}`)
      setIsSearchOpen(false)
      setSearchQuery("")
    }
  }

  const handleOrderClick = () => {
    const message = encodeURIComponent("Hi D.S HAIR & BEAUTY! I'd like to place an order. Please help me.")
    window.open(`https://wa.me/8613516946001?text=${message}`, "_blank")
  }

  return (
    <>
      {/* Top announcement bar - Updated */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm">
        <p>🇬🇧 UK Stockist | 100% Remy Human Hair | 20+ Years Industry Experience | Free Colour Matching</p>
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
                <MobileNavSection title="Hair Care" items={hairCare} />
                <Link href="/collections/accessories" className="py-2 text-lg font-medium hover:text-accent transition-colors">
                  Accessories
                </Link>
                <MobileNavSection title="Services" items={services} />
                <Link href="/about" className="py-2 text-lg font-medium hover:text-accent transition-colors">
                  About Us
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
              {/* 1. DIY Extensions */}
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
              
              {/* 2. Professional */}
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
              
              {/* 3. Hair Care */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Hair Care</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {hairCare.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {/* 4. Accessories */}
              <NavigationMenuItem>
                <Link href="/collections/accessories" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Accessories
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              {/* 5. Services */}
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
              
              {/* 6. Blog */}
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* 7. About Us */}
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
            <Link href="/contact">
              <Button variant="ghost" size="icon" aria-label="Account">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Order via WhatsApp"
              className="relative"
              onClick={handleOrderClick}
            >
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Search overlay with functionality */}
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
            <form onSubmit={handleSearch} className="w-full max-w-2xl">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-2xl md:text-4xl bg-transparent border-b-2 border-foreground py-4 focus:outline-none placeholder:text-muted-foreground"
                autoFocus
              />
              <div className="mt-8">
                <p className="text-sm text-muted-foreground mb-4">Popular Searches</p>
                <div className="flex flex-wrap gap-2">
                  {["Clip-In Extensions", "Tape-Ins", "Ponytails", "Blonde", "Brunette"].map((term) => (
                    <Button 
                      key={term} 
                      variant="outline" 
                      size="sm" 
                      className="rounded-full"
                      type="button"
                      onClick={() => {
                        setSearchQuery(term)
                        router.push(`/collections/all?search=${encodeURIComponent(term)}`)
                        setIsSearchOpen(false)
                      }}
                    >
                      {term}
                    </Button>
                  ))}
                </div>
              </div>
            </form>
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
