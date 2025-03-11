"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Heart, Minus, Plus, ShoppingBag, Star, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import ProductCard from "@/components/product-card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

// Mock product data
const product = {
  id: "1",
  name: "Organic Cotton T-Shirt",
  price: 39.99,
  description:
    "A premium organic cotton t-shirt with a relaxed fit. Made from 100% organic cotton for maximum comfort and durability.",
  details:
    "Our Organic Cotton T-Shirt is designed for those who appreciate quality basics with a modern twist. The relaxed fit provides a contemporary silhouette while maintaining comfort throughout the day. Crafted from 100% organic cotton, this t-shirt is not only soft against your skin but also environmentally conscious. The breathable fabric makes it perfect for layering or wearing on its own, regardless of the season. With reinforced stitching at stress points, this t-shirt is built to last, wash after wash. Available in a range of versatile colors, it's an essential addition to any wardrobe.",
  fit: "Relaxed fit. Model is 6'1\" and wears size M.",
  material: "100% Organic Cotton",
  care: "Machine wash cold with similar colors. Tumble dry low. Do not bleach.",
  images: [
    "/images/organic-tshirt.png",
    "/images/organic-tshirt-back.png",
    "/images/organic-tshirt-detail.png",
    "/images/organic-tshirt-worn.png",
  ],
  colors: ["White", "Black", "Grey", "Navy"],
  sizes: ["XS", "S", "M", "L", "XL"],
  reviews: {
    average: 4.5,
    count: 127,
    distribution: [
      { rating: 5, percentage: 70 },
      { rating: 4, percentage: 20 },
      { rating: 3, percentage: 7 },
      { rating: 2, percentage: 2 },
      { rating: 1, percentage: 1 },
    ],
  },
}

// Mock related products
const relatedProducts = [
  {
    id: "2",
    name: "Classic Crew Sweatshirt",
    price: 59.99,
    image: "/images/crew-sweatshirt.png",
    category: "Sweatshirts",
  },
  {
    id: "3",
    name: "Zip-Up Hoodie",
    price: 69.99,
    image: "/images/zip-hoodie.png",
    category: "Hoodies",
  },
  {
    id: "4",
    name: "Graphic Print T-Shirt",
    price: 45.99,
    image: "/images/graphic-tshirt.png",
    category: "T-Shirts",
  },
  {
    id: "5",
    name: "Heavyweight Hoodie",
    price: 79.99,
    image: "/images/heavyweight-hoodie.png",
    category: "Hoodies",
  },
]

export default function ProductPage() {
  const [mainImage, setMainImage] = useState(product.images[0])
  const [selectedColor, setSelectedColor] = useState("White")
  const [selectedSize, setSelectedSize] = useState("M")
  const [quantity, setQuantity] = useState(1)

  const handleThumbnailClick = (image: string) => {
    setMainImage(image)
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

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
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to shopping
          </Link>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border">
                <Image
                  src={mainImage || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="aspect-square w-full object-cover transition-all hover:scale-105"
                />
              </div>
              <ScrollArea className="w-full whitespace-nowrap">
                <div className="flex space-x-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      className={`overflow-hidden rounded-md border ${mainImage === image ? "ring-2 ring-primary" : ""}`}
                      onClick={() => handleThumbnailClick(image)}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} thumbnail ${index + 1}`}
                        width={100}
                        height={100}
                        className="aspect-square h-[80px] w-[80px] object-cover"
                      />
                    </button>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(product.reviews.average) ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.reviews.average} ({product.reviews.count} reviews)
                  </span>
                </div>
                <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
              </div>
              <p className="text-muted-foreground">{product.description}</p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Color: {selectedColor}</h3>
                  <RadioGroup
                    defaultValue={selectedColor}
                    onValueChange={setSelectedColor}
                    className="flex flex-wrap gap-2"
                  >
                    {product.colors.map((color) => (
                      <div key={color} className="flex items-center space-x-2">
                        <RadioGroupItem value={color} id={`color-${color.toLowerCase()}`} className="peer sr-only" />
                        <Label
                          htmlFor={`color-${color.toLowerCase()}`}
                          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-muted bg-background peer-data-[state=checked]:border-primary peer-data-[state=checked]:ring-1 peer-data-[state=checked]:ring-primary"
                        >
                          <span className="sr-only">{color}</span>
                          <span
                            className="h-6 w-6 rounded-full"
                            style={{
                              backgroundColor:
                                color.toLowerCase() === "white"
                                  ? "#ffffff"
                                  : color.toLowerCase() === "black"
                                    ? "#000000"
                                    : color.toLowerCase() === "grey"
                                      ? "#888888"
                                      : "#000080",
                            }}
                          />
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Size: {selectedSize}</h3>
                  <RadioGroup
                    defaultValue={selectedSize}
                    onValueChange={setSelectedSize}
                    className="flex flex-wrap gap-2"
                  >
                    {product.sizes.map((size) => (
                      <div key={size} className="flex items-center space-x-2">
                        <RadioGroupItem value={size} id={`size-${size.toLowerCase()}`} className="peer sr-only" />
                        <Label
                          htmlFor={`size-${size.toLowerCase()}`}
                          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-muted bg-background text-sm peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
                        >
                          {size}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Quantity</h3>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-md"
                      onClick={decreaseQuantity}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                      <span className="sr-only">Decrease quantity</span>
                    </Button>
                    <span className="w-10 text-center">{quantity}</span>
                    <Button variant="outline" size="icon" className="h-10 w-10 rounded-md" onClick={increaseQuantity}>
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Increase quantity</span>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 pt-4 sm:flex-row">
                  <Button className="w-full rounded-full" size="lg">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="lg" className="w-full rounded-full">
                    <Heart className="mr-2 h-5 w-5" />
                    Add to Wishlist
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <Tabs defaultValue="details">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                <TabsTrigger
                  value="details"
                  className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Product Details
                </TabsTrigger>
                <TabsTrigger
                  value="fit"
                  className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Fit & Materials
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Reviews ({product.reviews.count})
                </TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="pt-4">
                <div className="space-y-4">
                  <p>{product.details}</p>
                </div>
              </TabsContent>
              <TabsContent value="fit" className="pt-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Fit</h3>
                    <p>{product.fit}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Material</h3>
                    <p>{product.material}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Care</h3>
                    <p>{product.care}</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="pt-4">
                <div className="space-y-6">
                  <div className="flex flex-col gap-4 md:flex-row">
                    <div className="flex flex-col items-center justify-center space-y-2 md:w-1/3">
                      <div className="text-4xl font-bold">{product.reviews.average}</div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < Math.floor(product.reviews.average) ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">Based on {product.reviews.count} reviews</div>
                    </div>
                    <div className="space-y-2 md:w-2/3">
                      {product.reviews.distribution.map((item) => (
                        <div key={item.rating} className="flex items-center gap-2">
                          <div className="text-sm font-medium">{item.rating} stars</div>
                          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                            <div className="h-full bg-primary" style={{ width: `${item.percentage}%` }} />
                          </div>
                          <div className="text-sm text-muted-foreground">{item.percentage}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Customer Reviews</h3>
                    <div className="space-y-4">
                      <div className="space-y-2 rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < 5 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                                />
                              ))}
                            </div>
                            <div className="font-medium">Alex M.</div>
                          </div>
                          <div className="text-sm text-muted-foreground">2 weeks ago</div>
                        </div>
                        <h4 className="font-medium">Perfect fit and great quality</h4>
                        <p className="text-sm text-muted-foreground">
                          I've been looking for a good quality oversized tee for a while and this one is perfect. The
                          material is soft and the fit is exactly what I was looking for. Highly recommend!
                        </p>
                      </div>
                      <div className="space-y-2 rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < 4 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                                />
                              ))}
                            </div>
                            <div className="font-medium">Jamie L.</div>
                          </div>
                          <div className="text-sm text-muted-foreground">1 month ago</div>
                        </div>
                        <h4 className="font-medium">Great everyday tee</h4>
                        <p className="text-sm text-muted-foreground">
                          This has become my go-to t-shirt. The organic cotton feels premium and it washes well without
                          losing shape. Would buy again in other colors.
                        </p>
                      </div>
                      <div className="space-y-2 rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < 5 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                                />
                              ))}
                            </div>
                            <div className="font-medium">Taylor K.</div>
                          </div>
                          <div className="text-sm text-muted-foreground">2 months ago</div>
                        </div>
                        <h4 className="font-medium">Worth every penny</h4>
                        <p className="text-sm text-muted-foreground">
                          The quality of this t-shirt is exceptional. It's slightly more expensive than what I'd usually
                          pay, but the fit, feel, and durability make it worth it. I've already ordered two more.
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Load More Reviews
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-bold">You Might Also Like</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {relatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                />
              ))}
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
