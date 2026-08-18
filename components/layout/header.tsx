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
import { locales, localeNames, isLocale, defaultLocale, type Locale } from "@/lib/i18n/config"
import { localeHref } from "@/lib/i18n/routing"

export function Header() {
  const d = useDict()
  const locale = useLocale()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()
  const pathname = usePathname()

  // Strip any leading /{locale} so language switching keeps the visitor on the
  // same page (e.g. /de/about -> switch to /fr/about, not /fr).
  const basePath = (() => {
    const seg = (pathname || "/").split("/").filter(Boolean)
    if (seg.length && isLocale(seg[0] as Locale) && seg[0] !== defaultLocale) {
      return "/" + seg.slice(1).join("/")
    }
    return pathname || "/"
  })()
  const switchLang = (l: Locale) => localeHref(basePath, l)

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
    { title: d.ui.nav.diyClipIn, href: "/collections/clip-in", description: d.ui.nav.diyClipInDesc },
    { title: d.ui.nav.diyWeft, href: "/collections/weft", description: d.ui.nav.diyWeftDesc },
    { title: d.ui.nav.diyPonytail, href: "/collections/ponytails", description: d.ui.nav.diyPonytailDesc },
    { title: d.ui.nav.diyFringes, href: "/collections/fringes-bangs", description: d.ui.nav.diyFringesDesc },
  ]

  const proExtensions = [
    { title: d.ui.nav.proTapeIn, href: "/collections/tape-in", description: d.ui.nav.proTapeInDesc },
    { title: d.ui.nav.proKTip, href: "/collections/k-tip-extensions", description: d.ui.nav.proKTipDesc },
    { title: d.ui.nav.proNano, href: "/collections/nano-extensions", description: d.ui.nav.proNanoDesc },
    { title: d.ui.nav.proButterfly, href: "/collections/butterfly-weft", description: d.ui.nav.proButterflyDesc },
    { title: d.ui.nav.proToppers, href: "/collections/hair-toppers", description: d.ui.nav.proToppersDesc },
  ]

  const hairCare = [
    { title: d.ui.nav.careExtension, href: "/collections/extension-care", description: d.ui.nav.careExtensionDesc },
  ]

  const accessories = [
    { title: d.ui.nav.accSalonSupplies, href: "/salon-supplies", description: d.ui.nav.accSalonSuppliesDesc },
    { title: d.ui.nav.accTools, href: "/collections/extension-tools", description: d.ui.nav.accToolsDesc },
    { title: d.ui.nav.accHeated, href: "/collections/heated-styling", description: d.ui.nav.accHeatedDesc },
    { title: d.ui.nav.accStorage, href: "/collections/storage", description: d.ui.nav.accStorageDesc },
  ]

  const services = [
    { title: d.ui.nav.svcFindStylist, href: "/find-stylist", description: d.ui.nav.svcFindStylistDesc },
    { title: d.ui.nav.svcColourMatch, href: "/colour-match", description: d.ui.nav.svcColourMatchDesc },
    { title: d.ui.nav.svcSolutions, href: "/solutions", description: d.ui.nav.svcSolutionsDesc },
    { title: d.ui.nav.svcResources, href: "/resources", description: d.ui.nav.svcResourcesDesc },
    { title: d.ui.nav.svcTradeWholesale, href: "/trade-wholesale", description: d.ui.nav.svcTradeWholesaleDesc },
    { title: d.ui.nav.svcWholesaleHub, href: "/uk-salon-hair-extensions/hair-extensions-wholesale-uk", description: d.ui.nav.svcWholesaleHubDesc },
    { title: d.ui.nav.svcCalculator, href: "/trade-price-calculator", description: d.ui.nav.svcCalculatorDesc },
    { title: d.ui.nav.svcSpecs, href: "/extension-specs", description: d.ui.nav.svcSpecsDesc },
    { title: d.ui.nav.svcSalonPartners, href: "/salon-partners", description: d.ui.nav.svcSalonPartnersDesc },
    { title: d.ui.nav.svcAmbassador, href: "/ambassador", description: d.ui.nav.svcAmbassadorDesc },
    { title: d.ui.nav.svcAcademy, href: "/academy", description: d.ui.nav.svcAcademyDesc },
  ]

  return (
    <>

      <div className="bg-primary text-primary-foreground py-2 text-center text-sm">
        <p>{d.ui.announcement}</p>
      {/* nav lives under d.ui.nav per the Dictionary type */}
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
                <MobileNavSection title={d.ui.nav.diy} items={diyExtensions} locale={locale} />
                <MobileNavSection title={d.ui.nav.professional} items={proExtensions} locale={locale} />
                <MobileNavSection title={d.ui.nav.hairCare} items={hairCare} locale={locale} />
                <MobileNavSection title={d.ui.nav.accessories} items={accessories} locale={locale} />
                <MobileNavSection title={d.ui.nav.services} items={services} locale={locale} />
                <Link href={localeHref("/about", locale)} className="py-2 text-lg font-medium hover:text-accent transition-colors">
                  {d.ui.nav.about}
                </Link>
                <Link href={localeHref("/why-choose-us", locale)} className="py-2 text-lg font-medium text-primary hover:text-accent transition-colors">
                  {d.ui.nav.whyChooseUs}
                </Link>
                <a href="https://wigexporter.com" target="_blank" rel="noopener noreferrer" className="py-2 text-lg font-medium hover:text-accent transition-colors">
                  {d.ui.nav.manufacturing} &#8599;
                </a>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium mb-2">{localeNames[locale]}</p>
                  <div className="flex flex-col gap-1">
                    {locales.filter((l) => l !== locale).map((l) => (
                      <Link key={l} href={switchLang(l)} className="py-1 text-muted-foreground hover:text-foreground transition-colors">
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
          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">{d.ui.nav.diy}</NavigationMenuTrigger>
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
                <NavigationMenuTrigger className="bg-transparent">{d.ui.nav.professional}</NavigationMenuTrigger>
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
                <NavigationMenuTrigger className="bg-transparent">{d.ui.nav.hairCare}</NavigationMenuTrigger>
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
                <NavigationMenuTrigger className="bg-transparent">{d.ui.nav.accessories}</NavigationMenuTrigger>
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
                <NavigationMenuTrigger className="bg-transparent">{d.ui.nav.services}</NavigationMenuTrigger>
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
                <Link href={localeHref("/blog", locale)} legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    {d.ui.nav.blog}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href={localeHref("/why-choose-us", locale)} legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-primary">
                    {d.ui.nav.whyChooseUs}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href={localeHref("/about", locale)} legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    {d.ui.nav.about}
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
                  {d.ui.nav.manufacturing} &#8599;
                </a>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop language switcher (custom hover dropdown; Radix viewport was unreliable at far right) */}
          <LanguageDropdown locale={locale} basePath={basePath} />
        </div>

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
            <Link href={localeHref("/contact", locale)}>
              <Button variant="ghost" size="icon" aria-label="Account">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link href={localeHref("/trade-wholesale", locale)}>
              <Button variant="default" size="sm" className="hidden sm:inline-flex">
                {d.ui.nav.tradeEnquiry}
              </Button>
            </Link>
            <a
              href="https://wigexporter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors"
            >
              {d.ui.nav.manufacturing} &#8599;
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

function LanguageDropdown({ locale, basePath }: { locale: Locale; basePath: string }) {
  return (
    <div className="relative group">
      <button
        type="button"
        className="inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {localeNames[locale]}
        <ChevronDown className="ml-1 h-3 w-3 transition-transform group-hover:rotate-180" aria-hidden="true" />
      </button>
      <div className="absolute top-full right-0 mt-1.5 min-w-[160px] rounded-md border bg-popover text-popover-foreground shadow opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <ul className="py-1">
          {locales.filter((l) => l !== locale).map((l) => (
            <li key={l}>
              <Link
                href={localeHref(basePath, l)}
                className="block px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {localeNames[l]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function MobileNavSection({ title, items, locale }: { title: string; items: { title: string; href: string; description: string }[]; locale: Locale }) {
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
              href={localeHref(item.href, locale)}
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
