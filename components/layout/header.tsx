"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
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
import { products, contactInfo } from "@/lib/products"
import { useLocale, useDict } from "@/lib/i18n"
import { locales, localeNames } from "@/lib/i18n/config"

export function Header() {
  const d = useDict()
  const locale = useLocale()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()
  const pathname = usePathname()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/collections/all?search=${encodeURIComponent(searchQuery)}`)
      setIsSearchOpen(false)
      setSearchQuery("")
    }
  }

  const handleOrderClick = () => {
    const message = encodeURIComponent("Hi D.S HAIR & BEAUTY! I'd like to place an order. Please help me.")
    window.open(`https://wa.me/8613516946001?text=${message}`, "_blank")
  }

  // Build language switcher hrefs (v1: each language links to its own homepage)
  const langHome = (l: string) => (l === "en" ? "/" : `/${l}`)

  const diyExtensions = [
    { title: d.nav.diyClipIn, href: "/collections/clip-in", description: d.nav.diyClipInDesc },
    { title: d.nav.diyWeft, href: "/collections/weft", description: d.nav.diyWeftDesc },
    { title: d.nav.diyPonytail, href: "/collections/ponytails", description: d.nav.diyPonytailDesc },
    { title: d.nav.diyFringes, href: "/collections/fringes-bangs", description: d.nav.diyFringesDesc },
  ]

  const proExtensions = [
    { title: d.nav.proTapeIn, href: "/collections/tape-in", description: d.nav.proTapeInDesc },
    { title: d.nav.proKTip, href: "/collections/k-tip-extensions", description: d.nav.proKTipDesc },
    { title: d.nav.proNano, href: "/collections/nano-extensions", description: d.nav.proNanoDesc },
    { title: d.nav.proButterfly, href: "/collections/butterfly-weft", description: d.nav.proButterflyDesc },
    { title: d.nav.proToppers, href: "/collections/hair-toppers", description: d.nav.proToppersDesc },
  ]

  const hairCare = [
    { title: d.nav.careExtension, href: "/collections/extension-care", description: d.nav.careExtensionDesc },
  ]

  const accessories = [
    { title: d.nav.accSalonSupplies, href: "/salon-supplies", description: d.nav.accSalonSuppliesDesc },
    { title: d.nav.accTools, href: "/collections/extension-tools", description: d.nav.accToolsDesc },
    { title: d.nav.accHeated, href: "/collections/heated-styling", description: d.nav.accHeatedDesc },
    { title: d.nav.accStorage, href: "/collections/storage", description: d.nav.accStorageDesc },
  ]

  const services = [
    { title: d.nav.svcFindStylist, href: "/find-stylist", description: d.nav.svcFindStylistDesc },
    { title: d.nav.svcColourMatch, href: "/colour-match", description: d.nav.svcColourMatchDesc },
    { title: d.nav.svcSolutions, href: "/solutions", description: d.nav.svcSolutionsDesc },
    { title: d.nav.svcResources, href: "/resources", description: d.nav.svcResourcesDesc },
    { title: d.nav.svcTradeWholesale, href: "/trade-wholesale", description: d.nav.svcTradeWholesaleDesc },
    { title: d.nav.svcWholesaleHub, href: "/uk-salon-hair-extensions/hair-extensions-wholesale-uk", description: d.nav.svcWholesaleHubDesc },
    { title: d.nav.svcCalculator, href: "/trade-price-calculator", description: d.nav.svcCalculatorDesc },
    { title: d.nav.svcSpecs, href: "/extension-specs", description: d.nav.svcSpecsDesc },
    { title: d.nav.svcSalonPartners, href: "/salon-partners", description: d.nav.svcSalonPartnersDesc },
    { title: d.nav.svcAmbassador, href: "/ambassador", description: d.nav.svcAmbassadorDesc },
    { title: d.nav.svcAcademy, href: "/academy", description: d.nav.svcAcademyDesc },
  ]

  return (
    <>

      <div className="bg-primary text-primary-foreground py-2 text-center text-sm">
        <p>{d.ui.announcement}</p>
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
                <MobileNavSection title={d.nav.diy} items={diyExtensions} />
                <MobileNavSection title={d.nav.professional} items={proExtensions} />
                <MobileNavSection title={d.nav.hairCare} items={hairCare} />
                <MobileNavSection title={d.nav.accessories} items={accessories} />
                <MobileNavSection title={d.nav.services} items={services} />
                <Link href="/about" className="py-2 text-lg font-medium hover:text-accent transition-colors">
                  {d.nav.about}
                </Link>
                <Link href="/why-choose-us" className="py-2 text-lg font-medium text-primary hover:text-accent transition-colors">
                  {d.nav.whyChooseUs}
                </Link>
                <a href="https://wigexporter.com" target="_blank" rel="noopener noreferrer" className="py-2 text-lg font-medium hover:text-accent transition-colors">
                  {d.nav.manufacturing} &#8599;
                </a>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium mb-2">{localeNames[locale]}</p>
                  <div className="flex flex-col gap-1">
                    {locales.filter((l) => l !== locale).map((l) => (
                      <Link key={l} href={langHome(l)} className="py-1 text-muted-foreground hover:text-foreground transition-colors">
                        {localeNames[l]}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href={langHome(locale)} className="flex items-center gap-2">
            <span className="font-serif text-lg md:text-xl font-semibold tracking-tight whitespace-nowrap">
              D.S HAIR & BEAUTY
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">{d.nav.diy}</NavigationMenuTrigger>
                <NavigationMenuContent className="!bg-background">
                  <ul className="grid gap-2 p-4 w-[500px] grid-cols-1 md:grid-cols-2 lg:w-[600px]">
                    {diyExtensions.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">{d.nav.professional}</NavigationMenuTrigger>
                <NavigationMenuContent className="!bg-background">
                  <ul className="grid gap-2 p-4 w-[500px] grid-cols-1 md:grid-cols-2 lg:w-[600px]">
                    {proExtensions.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">{d.nav.hairCare}</NavigationMenuTrigger>
                <NavigationMenuContent className="!bg-background">
                  <ul className="grid gap-2 p-4 w-[500px] grid-cols-1 md:grid-cols-1 lg:w-[550px]">
                    {hairCare.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">{d.nav.accessories}</NavigationMenuTrigger>
                <NavigationMenuContent className="!bg-background">
                  <ul className="grid gap-2 p-4 w-[500px] grid-cols-1 md:grid-cols-2 lg:w-[600px]">
                    {accessories.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">{d.nav.services}</NavigationMenuTrigger>
                <NavigationMenuContent className="!bg-background">
                  <ul className="grid gap-2 p-4 w-[500px] grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    {services.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    {d.nav.blog}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/why-choose-us" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-primary">
                    {d.nav.whyChooseUs}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    {d.nav.about}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a
                  href="https://wigexporter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  {d.nav.manufacturing} &#8599;
                </a>
              </NavigationMenuItem>

              {/* Language switcher */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">{localeNames[locale]}</NavigationMenuTrigger>
                <NavigationMenuContent className="!bg-background">
                  <ul className="grid gap-1 p-2 w-[200px]">
                    {locales.filter((l) => l !== locale).map((l) => (
                      <li key={l}>
                        <Link
                          href={langHome(l)}
                          className="block select-none rounded-md p-3 text-sm font-medium leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          {localeNames[l]}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
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
            <Link href="/trade-wholesale">
              <Button variant="default" size="sm" className="hidden sm:inline-flex">
                {d.nav.tradeEnquiry}
              </Button>
            </Link>
            <a
              href="https://wigexporter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors"
            >
              {d.nav.manufacturing} &#8599;
            </a>
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
                placeholder={d.ui.nav.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-2xl md:text-4xl bg-transparent border-b-2 border-foreground py-4 focus:outline-none placeholder:text-muted-foreground"
                autoFocus
              />
              <div className="mt-8">
                <p className="text-sm text-muted-foreground mb-4">{d.ui.nav.popularSearches}</p>
                <div className="flex flex-wrap gap-2">
                  {["Tape-In Trade", "Private Label", "Switch Trade Supplier", "Nano Rings", "Balayage Weft"].map((term) => (
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
