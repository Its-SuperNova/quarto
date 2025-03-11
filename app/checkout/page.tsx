"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, CreditCard, Search, ShoppingBag, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock cart data
const cartItems = [
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

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card")

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
            <h1 className="text-3xl font-bold">Checkout</h1>
            <Link
              href="/cart"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Cart
            </Link>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-xl font-medium">Contact Information</h2>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h2 className="text-xl font-medium">Shipping Address</h2>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                      <Input id="apartment" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="state">State</Label>
                        <Select>
                          <SelectTrigger id="state">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ca">California</SelectItem>
                            <SelectItem value="ny">New York</SelectItem>
                            <SelectItem value="tx">Texas</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input id="zip" />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="country">Country</Label>
                      <Select defaultValue="us">
                        <SelectTrigger id="country">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h2 className="text-xl font-medium">Payment Method</h2>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid gap-4">
                    <div>
                      <RadioGroupItem value="credit-card" id="credit-card" className="peer sr-only" />
                      <Label
                        htmlFor="credit-card"
                        className="flex cursor-pointer items-center justify-between rounded-lg border p-4 hover:bg-muted peer-data-[state=checked]:border-primary"
                      >
                        <div className="flex items-center gap-4">
                          <CreditCard className="h-5 w-5" />
                          <div className="font-medium">Credit Card</div>
                        </div>
                      </Label>
                    </div>
                    {paymentMethod === "credit-card" && (
                      <div className="grid gap-4 pl-8">
                        <div className="grid gap-2">
                          <Label htmlFor="card-number">Card Number</Label>
                          <Input id="card-number" placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="expiration-month">Month</Label>
                            <Select>
                              <SelectTrigger id="expiration-month">
                                <SelectValue placeholder="MM" />
                              </SelectTrigger>
                              <SelectContent>
                                {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                                  <SelectItem key={month} value={month.toString().padStart(2, "0")}>
                                    {month.toString().padStart(2, "0")}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="expiration-year">Year</Label>
                            <Select>
                              <SelectTrigger id="expiration-year">
                                <SelectValue placeholder="YY" />
                              </SelectTrigger>
                              <SelectContent>
                                {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                                  <SelectItem key={year} value={year.toString().slice(-2)}>
                                    {year}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" />
                          </div>
                        </div>
                      </div>
                    )}
                    <div>
                      <RadioGroupItem value="paypal" id="paypal" className="peer sr-only" />
                      <Label
                        htmlFor="paypal"
                        className="flex cursor-pointer items-center justify-between rounded-lg border p-4 hover:bg-muted peer-data-[state=checked]:border-primary"
                      >
                        <div className="flex items-center gap-4">
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
                            <path d="M7 11V7a5 5 0 0 1 9.9-1" />
                            <path d="M8.93 13.4A1.44 1.44 0 0 1 10.3 14H13a2 2 0 0 0 2-2v-1" />
                            <path d="M14 16v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2.5" />
                            <path d="M21 12v6a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2Z" />
                          </svg>
                          <div className="font-medium">PayPal</div>
                        </div>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="apple-pay" id="apple-pay" className="peer sr-only" />
                      <Label
                        htmlFor="apple-pay"
                        className="flex cursor-pointer items-center justify-between rounded-lg border p-4 hover:bg-muted peer-data-[state=checked]:border-primary"
                      >
                        <div className="flex items-center gap-4">
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
                            <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                            <path d="M10 2c1 .5 2 2 2 5" />
                          </svg>
                          <div className="font-medium">Apple Pay</div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-lg border p-6">
                <h2 className="text-lg font-medium">Order Summary</h2>
                <div className="mt-6 space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="text-sm font-medium">{item.name}</h3>
                            <p className="mt-1 text-xs text-muted-foreground">
                              {item.color} / {item.size}
                            </p>
                          </div>
                          <p className="text-sm font-medium">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="mt-auto">
                          <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Separator />
                  <div className="space-y-2">
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
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="w-full rounded-full">Place Order</Button>
                </div>
              </div>
            </div>
          </div>
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
