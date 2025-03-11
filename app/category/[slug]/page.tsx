import Link from "next/link"
import { ChevronRight, Filter, Search, ShoppingBag, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import ProductCard from "@/components/product-card"

// Mock category data
const categories = {
  "t-shirts": {
    name: "T-Shirts",
    description: "Discover our collection of premium t-shirts made from high-quality materials for everyday comfort.",
    products: [
      {
        id: "1",
        name: "Organic Cotton T-Shirt",
        price: 39.99,
        image: "/images/organic-tshirt.png",
        category: "T-Shirts",
      },
      {
        id: "4",
        name: "Graphic Print T-Shirt",
        price: 45.99,
        image: "/images/graphic-tshirt.png",
        category: "T-Shirts",
      },
      {
        id: "6",
        name: "Vintage Wash T-Shirt",
        price: 42.99,
        image: "/images/vintage-tshirt.png",
        category: "T-Shirts",
      },
      {
        id: "8",
        name: "Minimalist Logo T-Shirt",
        price: 38.99,
        image: "/images/logo-tshirt.png",
        category: "T-Shirts",
      },
      {
        id: "9",
        name: "Oversized T-Shirt",
        price: 44.99,
        image: "/placeholder.svg?height=400&width=400&query=oversized t-shirt",
        category: "T-Shirts",
      },
      {
        id: "10",
        name: "Striped T-Shirt",
        price: 41.99,
        image: "/placeholder.svg?height=400&width=400&query=striped t-shirt",
        category: "T-Shirts",
      },
      {
        id: "11",
        name: "Long Sleeve T-Shirt",
        price: 46.99,
        image: "/placeholder.svg?height=400&width=400&query=long sleeve t-shirt",
        category: "T-Shirts",
      },
      {
        id: "12",
        name: "Pocket T-Shirt",
        price: 37.99,
        image: "/placeholder.svg?height=400&width=400&query=pocket t-shirt",
        category: "T-Shirts",
      },
    ],
  },
  sweatshirts: {
    name: "Sweatshirts",
    description: "Stay comfortable with our collection of premium sweatshirts perfect for layering.",
    products: [
      {
        id: "2",
        name: "Classic Crew Sweatshirt",
        price: 59.99,
        image: "/images/crew-sweatshirt.png",
        category: "Sweatshirts",
      },
      {
        id: "7",
        name: "Relaxed Fit Sweatshirt",
        price: 64.99,
        image: "/images/relaxed-sweatshirt.png",
        category: "Sweatshirts",
      },
      {
        id: "13",
        name: "Heavyweight Sweatshirt",
        price: 69.99,
        image: "/placeholder.svg?height=400&width=400&query=heavyweight sweatshirt",
        category: "Sweatshirts",
      },
      {
        id: "14",
        name: "Vintage Wash Sweatshirt",
        price: 62.99,
        image: "/placeholder.svg?height=400&width=400&query=vintage wash sweatshirt",
        category: "Sweatshirts",
      },
    ],
  },
  hoodies: {
    name: "Hoodies",
    description: "Our collection of premium hoodies combines style and comfort for everyday wear.",
    products: [
      {
        id: "3",
        name: "Zip-Up Hoodie",
        price: 69.99,
        image: "/images/zip-hoodie.png",
        category: "Hoodies",
      },
      {
        id: "5",
        name: "Heavyweight Hoodie",
        price: 79.99,
        image: "/images/heavyweight-hoodie.png",
        category: "Hoodies",
      },
      {
        id: "15",
        name: "Pullover Hoodie",
        price: 74.99,
        image: "/placeholder.svg?height=400&width=400&query=pullover hoodie",
        category: "Hoodies",
      },
      {
        id: "16",
        name: "Oversized Hoodie",
        price: 84.99,
        image: "/placeholder.svg?height=400&width=400&query=oversized hoodie",
        category: "Hoodies",
      },
    ],
  },
  "new-arrivals": {
    name: "New Arrivals",
    description: "Check out our latest additions to the Threadly collection.",
    products: [
      {
        id: "17",
        name: "Limited Edition T-Shirt",
        price: 49.99,
        image: "/placeholder.svg?height=400&width=400&query=limited edition t-shirt",
        category: "T-Shirts",
      },
      {
        id: "18",
        name: "Premium Sweatshirt",
        price: 69.99,
        image: "/placeholder.svg?height=400&width=400&query=premium sweatshirt",
        category: "Sweatshirts",
      },
      {
        id: "19",
        name: "Signature Hoodie",
        price: 89.99,
        image: "/placeholder.svg?height=400&width=400&query=signature hoodie",
        category: "Hoodies",
      },
      {
        id: "20",
        name: "Graphic Collection T-Shirt",
        price: 54.99,
        image: "/placeholder.svg?height=400&width=400&query=graphic collection t-shirt",
        category: "T-Shirts",
      },
    ],
  },
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories[params.slug as keyof typeof categories] || {
    name: "Category Not Found",
    description: "The category you're looking for doesn't exist.",
    products: [],
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
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span>{category.name}</span>
            </div>
            <h1 className="text-3xl font-bold">{category.name}</h1>
            <p className="text-muted-foreground">{category.description}</p>
          </div>
          <div className="mt-8 flex flex-col lg:flex-row gap-8">
            <div className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-24 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Categories</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="category-all" />
                      <Label htmlFor="category-all">All</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="category-tshirts" />
                      <Label htmlFor="category-tshirts">T-Shirts</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="category-sweatshirts" />
                      <Label htmlFor="category-sweatshirts">Sweatshirts</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="category-hoodies" />
                      <Label htmlFor="category-hoodies">Hoodies</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="category-graphic" />
                      <Label htmlFor="category-graphic">Graphic Tees</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="category-basics" />
                      <Label htmlFor="category-basics">Basics</Label>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-medium">Price Range</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-all" />
                      <Label htmlFor="price-all">All</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-under-50" />
                      <Label htmlFor="price-under-50">Under $50</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-50-100" />
                      <Label htmlFor="price-50-100">$50 - $100</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-100-150" />
                      <Label htmlFor="price-100-150">$100 - $150</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-over-150" />
                      <Label htmlFor="price-over-150">Over $150</Label>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-medium">Size</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="size-all" />
                      <Label htmlFor="size-all">All</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="size-xs" />
                      <Label htmlFor="size-xs">XS</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="size-s" />
                      <Label htmlFor="size-s">S</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="size-m" />
                      <Label htmlFor="size-m">M</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="size-l" />
                      <Label htmlFor="size-l">L</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="size-xl" />
                      <Label htmlFor="size-xl">XL</Label>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-medium">Color</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="color-all" />
                      <Label htmlFor="color-all">All</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="color-black" />
                      <Label htmlFor="color-black">Black</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="color-white" />
                      <Label htmlFor="color-white">White</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="color-grey" />
                      <Label htmlFor="color-grey">Grey</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="color-blue" />
                      <Label htmlFor="color-blue">Blue</Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 lg:hidden">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="sm" className="h-8 gap-1">
                        <Filter className="h-4 w-4" />
                        Filters
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                      <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                        <SheetDescription>Filter products by category, price, size, and color.</SheetDescription>
                      </SheetHeader>
                      <div className="mt-6 space-y-6">
                        <div className="space-y-4">
                          <h3 className="font-medium">Categories</h3>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="mobile-category-all" />
                              <Label htmlFor="mobile-category-all">All</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="mobile-category-tshirts" />
                              <Label htmlFor="mobile-category-tshirts">T-Shirts</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="mobile-category-shirts" />
                              <Label htmlFor="mobile-category-shirts">Shirts</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="mobile-category-knitwear" />
                              <Label htmlFor="mobile-category-knitwear">Knitwear</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="mobile-category-pants" />
                              <Label htmlFor="mobile-category-pants">Pants</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="mobile-category-jackets" />
                              <Label htmlFor="mobile-category-jackets">Jackets</Label>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h3 className="font-medium">Price Range</h3>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="mobile-price-all" />
                              <Label htmlFor="mobile-price-all">All</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="mobile-price-under-50" />
                              <Label htmlFor="mobile-price-under-50">Under $50</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="mobile-price-50-100" />
                              <Label htmlFor="mobile-price-50-100">$50 - $100</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="mobile-price-100-150" />
                              <Label htmlFor="mobile-price-100-150">$100 - $150</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="mobile-price-over-150" />
                              <Label htmlFor="mobile-price-over-150">Over $150</Label>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h3 className="font-medium">Size</h3>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="mobile-size-all" />
                              <Label htmlFor="mobile-size-all">All</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="mobile-size-xs" />
                              <Label htmlFor="mobile-size-xs">XS</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="mobile-size-s" />
                              <Label htmlFor="mobile-size-s">S</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="mobile-size-m" />
                              <Label htmlFor="mobile-size-m">M</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="mobile-size-l" />
                              <Label htmlFor="mobile-size-l">L</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="mobile-size-xl" />
                              <Label htmlFor="mobile-size-xl">XL</Label>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h3 className="font-medium">Color</h3>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="mobile-color-all" />
                              <Label htmlFor="mobile-color-all">All</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="mobile-color-black" />
                              <Label htmlFor="mobile-color-black">Black</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="mobile-color-white" />
                              <Label htmlFor="mobile-color-white">White</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="mobile-color-grey" />
                              <Label htmlFor="mobile-color-grey">Grey</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="mobile-color-blue" />
                              <Label htmlFor="mobile-color-blue">Blue</Label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6">
                        <Button className="w-full">Apply Filters</Button>
                      </div>
                    </SheetContent>
                  </Sheet>
                  <p className="text-sm text-muted-foreground">{category.products.length} products</p>
                </div>
                <div className="flex items-center gap-2 ml-auto">
                  <p className="text-sm text-muted-foreground hidden lg:block">{category.products.length} products</p>
                  <Select defaultValue="featured">
                    <SelectTrigger className="h-8 w-[150px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                      <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.products.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    image={product.image}
                    category={product.category}
                  />
                ))}
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
                {"© " + new Date().getFullYear() + " Threadly. All rights reserved."}
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
