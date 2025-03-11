"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/product-card";
import HeroSection from "@/components/hero-section";
import Header from "@/components/header";
import CategorySection from "@/components/category-section";
import SplitImageSection from "@/components/splitImage-section";
import ShopByCollectionSection from "@/components/shop-by-collection";
import { useSmoothScroll } from "@/lib/smooth-scroll";

export default function Home() {
  // Initialize Lenis smooth scrolling
  useSmoothScroll();

  // Define the images for the split image section
  const splitImages = {
    leftImage: {
      src: "/images/home/shorts.png",
      alt: "Cream colored sweatshirt and shorts - back view",
      href: "/category/summer-collection",
    },
    rightImage: {
      src: "/images/home/blue-racing-outfit-side.png",
      alt: "Blue racing sweatshirt with gray sweatpants - side view",
      href: "/category/streetwear-collection",
    },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />

        {/* Category Section Component */}
        <CategorySection />

        {/* Split Image Section Component */}
        <SplitImageSection
          leftImage={splitImages.leftImage}
          rightImage={splitImages.rightImage}
        />

        {/* Gender Category Section with Rounded Cards */}
        <ShopByCollectionSection />

        <section className="py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-medium tracking-tight">
                New Arrivals
              </h2>
              <Link
                href="/category/new-arrivals"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
              >
                View All
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
              <ProductCard
                id="1"
                name="Organic Cotton T-Shirt"
                price={39.99}
                image="/images/organic-tshirt.png"
                category="T-Shirts"
              />
              <ProductCard
                id="2"
                name="Classic Crew Sweatshirt"
                price={59.99}
                image="/images/crew-sweatshirt.png"
                category="Sweatshirts"
              />
              <ProductCard
                id="3"
                name="Zip-Up Hoodie"
                price={69.99}
                image="/images/zip-hoodie.png"
                category="Hoodies"
              />
              <ProductCard
                id="4"
                name="Graphic Print T-Shirt"
                price={45.99}
                image="/images/graphic-tshirt.png"
                category="T-Shirts"
              />
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-medium tracking-tight">
                Trending Now
              </h2>
              <Link
                href="/category/trending"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
              >
                View All
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
              <ProductCard
                id="5"
                name="Heavyweight Hoodie"
                price={79.99}
                image="/images/heavyweight-hoodie.png"
                category="Hoodies"
              />
              <ProductCard
                id="6"
                name="Vintage Wash T-Shirt"
                price={42.99}
                image="/images/vintage-tshirt.png"
                category="T-Shirts"
              />
              <ProductCard
                id="7"
                name="Relaxed Fit Sweatshirt"
                price={64.99}
                image="/images/relaxed-sweatshirt.png"
                category="Sweatshirts"
              />
              <ProductCard
                id="8"
                name="Minimalist Logo T-Shirt"
                price={38.99}
                image="/images/logo-tshirt.png"
                category="T-Shirts"
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-3">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Why Choose Threadly
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We believe in quality, sustainability, and timeless design.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/about">
                    <Button variant="outline" className="rounded-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:col-span-1 xl:col-span-2">
                <div className="rounded-lg border bg-background p-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold">Premium Quality</h3>
                    <p className="text-muted-foreground">
                      We source the finest materials to ensure our clothing
                      lasts for years to come.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border bg-background p-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold">Sustainable Practices</h3>
                    <p className="text-muted-foreground">
                      Our commitment to the environment is reflected in our
                      production processes.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border bg-background p-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold">Timeless Design</h3>
                    <p className="text-muted-foreground">
                      Our designs transcend trends, focusing on pieces that
                      remain stylish season after season.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border bg-background p-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold">Ethical Production</h3>
                    <p className="text-muted-foreground">
                      We ensure fair wages and safe working conditions
                      throughout our supply chain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join Our Newsletter
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay updated with our latest collections and exclusive offers.
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 rounded-full"
                    placeholder="Enter your email"
                    type="email"
                    required
                  />
                  <Button type="submit" className="rounded-full">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to our Terms of Service and Privacy
                  Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
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
                  <Link
                    href="/category/sweatshirts"
                    className="hover:underline"
                  >
                    Sweatshirts
                  </Link>
                </li>
                <li>
                  <Link href="/category/hoodies" className="hover:underline">
                    Hoodies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/new-arrivals"
                    className="hover:underline"
                  >
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
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
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
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
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
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
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
  );
}
