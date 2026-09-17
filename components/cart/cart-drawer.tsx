"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, X, ShoppingBag, MessageCircle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/lib/cart-context"
import { contactInfo } from "@/lib/products"

export function CartDrawer() {
  const { items, removeLine, setLineQuantity, total, isOpen, setIsOpen } = useCart()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(price)
  }

  // The bag is sent to us as a written order list, so that availability, the
  // correct price (trade or retail) and delivery are all confirmed in writing
  // before anything is paid. This site does not take payment online.
  const buildOrderText = () => {
    const lines = items.map((item, i) => {
      const options = [
        item.color ? `Colour: ${item.color}` : null,
        item.length ? `Length: ${item.length}` : null,
      ]
        .filter(Boolean)
        .join(", ")
      return `${i + 1}. ${item.name}${options ? ` (${options})` : ""} — qty ${item.quantity} — ${formatPrice(
        item.price * item.quantity
      )}`
    })

    return [
      "Hi D.S Hair & Beauty, I would like to order:",
      "",
      ...lines,
      "",
      `Indicative subtotal: ${formatPrice(total)}`,
      "",
      "Please confirm availability, price and delivery.",
    ].join("\n")
  }

  const orderText = items.length > 0 ? buildOrderText() : ""
  const whatsappHref = `${contactInfo.whatsapp}?text=${encodeURIComponent(orderText)}`
  const mailtoHref = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    "Order enquiry from dshairbeauty.co.uk"
  )}&body=${encodeURIComponent(orderText)}`

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Your Bag ({items.length} {items.length === 1 ? "item" : "items"})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <ShoppingBag className="h-16 w-16 text-muted-foreground" />
            <p className="text-muted-foreground">Your bag is empty</p>
            <Button onClick={() => setIsOpen(false)} asChild>
              <Link href="/collections/diy">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              <div className="flex flex-col gap-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.color}-${item.length}`} className="flex gap-4">
                    <div className="relative h-24 w-24 overflow-hidden rounded-lg bg-muted">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          {item.color && (
                            <p className="text-xs text-muted-foreground">
                              Colour: {item.color}
                            </p>
                          )}
                          {item.length && (
                            <p className="text-xs text-muted-foreground">
                              Length: {item.length}
                            </p>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => removeLine(item.id, item.color, item.length)}
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border rounded-md">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              setLineQuantity(item.id, item.color, item.length, item.quantity - 1)
                            }
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              setLineQuantity(item.id, item.color, item.length, item.quantity + 1)
                            }
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Indicative subtotal</span>
                <span className="font-medium">{formatPrice(total)}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                This bag is sent to us as an order enquiry. We confirm availability, your price
                (trade or retail) and the delivery cost in writing before anything is paid.
              </p>

              <Separator className="my-4" />

              <div className="flex flex-col gap-2">
                <Button size="lg" className="w-full" asChild>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Send order on WhatsApp
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <a href={mailtoHref} onClick={() => setIsOpen(false)}>
                    <Mail className="mr-2 h-4 w-4" />
                    Email this order
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Continue Shopping
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-4">
                We do not take payment on this website. Once your order is confirmed you receive a
                proforma invoice, payable by bank transfer or a secure payment link. Trade customers
                are quoted at wholesale rates.
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
