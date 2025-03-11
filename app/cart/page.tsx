"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Minus, Plus, Search, ShoppingBag, Trash2, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

// Mock cart data
const initialCartItems = [
  {
    id: "1",
    name: "Organic Cotton T-Shirt",
    price: 39.99,
    image: "/images/organic-tshirt.png",
    color: "White",
    size: "M",
    quantity: 1,
  },
  {
    id: "3",
    name: "Zip-Up Hoodie",
    price: 69.99,
    image: "/images/zip-hoodie.png",
    color: "Black",
    size: "L",
    quantity: 1,
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const increaseQuantity = (id: string) => {
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)))
  }

  const decreaseQuantity = (id: string) => {
    setCartItems(
      cartItems.map((item) => (item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)),
    )
  }

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 5.99
  const total = subtotal + shipping

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">Threadly</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/category/t-shirts" className="text-sm font-medium transition-colors hover:text-primary">
              T-Shirts
            </Link>
            <Link href="/category/sweatshirts" className="text-sm font-medium transition-colors hover:text-primary">
              Sweatshirts
            </Link>
            <Link href="/category/hoodies" className="text-sm font-medium transition-colors hover:text-primary">
              Hoodies
            </Link>
            <Link href="/category/new-arrivals" className="text-sm font-medium transition-colors hover:text-primary">
              New Arrivals
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <form className="hidden md:flex relative w-full max-w-sm items-center">
              <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full rounded-full bg-background pl-8 md:w-[300px] lg:w-[300px]"
              />
            </form>
            <Link href="/account">
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Shopping Cart</h1>
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Continue Shopping
            </Link>
          </div>
          {cartItems.length > 0 ? (
            <div className="mt-8 grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="rounded-lg border p-4">
                      <div className="flex gap-4">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={96}
                            height={96}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-1 flex-col">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="mt-1 text-sm text-muted-foreground">
                                {item.color} / {item.size}
                              </p>
                            </div>
                            <p className="font-medium">${item.price.toFixed(2)}</p>
                          </div>
                          <div className="mt-auto flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 rounded-md"
                                onClick={() => decreaseQuantity(item.id)}
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="h-3 w-3" />
                                <span className="sr-only">Decrease quantity</span>
                              </Button>
                              <span className="w-8 text-center text-sm">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 rounded-md"
                                onClick={() => increaseQuantity(item.id)}
                              >
                                <Plus className="h-3 w-3" />
                                <span className="sr-only">Increase quantity</span>
                              </Button>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 px-2" onClick={() => removeItem(item.id)}>
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Remove item</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="rounded-lg border p-6">
                  <h2 className="text-lg font-medium">Order Summary</h2>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Subtotal</p>
                      <p className="font-medium">${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Shipping</p>
                      <p className="font-medium">${shipping.toFixed(2)}</p>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between font-medium">
                      <p>Total</p>
                      <p>${total.toFixed(2)}</p>
                    </div>
                    <div className="pt-4">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Promo Code</p>
                        <div className="flex space-x-2">
                          <Input className="flex-1" placeholder="Enter code" />
                          <Button variant="outline">Apply</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link href="/checkout">
                      <Button className="w-full rounded-full">Proceed to Checkout</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-12 flex flex-col items-center justify-center space-y-4 text-center">
              <ShoppingBag className="h-16 w-16 text-muted-foreground" />
              <h2 className="text-2xl font-medium">Your cart is empty</h2>
              <p className="text-muted-foreground">Looks like you haven't added any products to your cart yet.</p>
              <Link href="/">
                <Button className="mt-4 rounded-full">Start Shopping</Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <footer className="border-t bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 py-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Shop</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/category/t-shirts" className="hover:underline">
                    T-Shirts
                  </Link>
                </li>
                <li>
                  <Link href="/category/sweatshirts" className="hover:underline">
                    Sweatshirts
                  </Link>
                </li>
                <li>
                  <Link href="/category/hoodies" className="hover:underline">
                    Hoodies
                  </Link>
                </li>
                <li>
                  <Link href="/category/new-arrivals" className="hover:underline">
                    New Arrivals
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/sustainability" className="hover:underline">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="hover:underline">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Customer Service</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:underline">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="hover:underline">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="/size-guide" className="hover:underline">
                    Size Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/terms" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:underline">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 border-t py-6 md:flex-row md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Threadly. All rights reserved.
              </p>
            </div>
            <div className="flex justify-center gap-4 md:justify-end">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
