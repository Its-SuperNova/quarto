"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingBag, Menu } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex w-full justify-between items-center">
          {/* Desktop Navigation and search on the left */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-8">
              <Link
                href="/category/men"
                className="text-sm font-medium uppercase tracking-wide transition-colors hover:text-primary"
              >
                Men
              </Link>
              <Link
                href="/category/women"
                className="text-sm font-medium uppercase tracking-wide transition-colors hover:text-primary"
              >
                Women
              </Link>
              <Link
                href="/category/kids"
                className="text-sm font-medium uppercase tracking-wide transition-colors hover:text-primary"
              >
                Kids
              </Link>
            </nav>

            {/* Search icon and input */}
            <div className="flex items-center">
              <Search className="h-5 w-5 cursor-pointer" onClick={toggleSearch} />
              {isSearchOpen && (
                <div className="ml-2">
                  <Input
                    type="search"
                    placeholder="Enter Search"
                    className="w-[200px] border-0 border-b border-muted-foreground rounded-none focus-visible:ring-0 focus-visible:outline-none focus:outline-none active:outline-none"
                    autoFocus
                    style={{ boxShadow: "none" }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Logo in the center on desktop, left on mobile */}
          <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-Fqm2HsL40J1ikvZ8EXJRcJfoCrrfl6.svg"
                alt="Threadly Logo"
                width={120}
                height={30}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Account and cart on the right */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/account"
              className="text-sm font-medium uppercase tracking-wide transition-colors hover:text-primary"
            >
              Log In
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white">
                <div className="flex flex-col h-full">
                  {/* Navigation Links */}
                  <nav className="flex flex-col space-y-6">
                    <SheetClose asChild>
                      <Link
                        href="/category/men"
                        className="text-lg font-medium uppercase tracking-wide transition-colors hover:text-primary py-2"
                      >
                        Men
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/category/women"
                        className="text-lg font-medium uppercase tracking-wide transition-colors hover:text-primary py-2"
                      >
                        Women
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/category/kids"
                        className="text-lg font-medium uppercase tracking-wide transition-colors hover:text-primary py-2"
                      >
                        Kids
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/category/new-arrivals"
                        className="text-lg font-medium uppercase tracking-wide transition-colors hover:text-primary py-2"
                      >
                        New Arrivals
                      </Link>
                    </SheetClose>
                  </nav>

                  {/* Search */}
                  <div className="mt-8">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Search products..." className="w-full pl-10 rounded-full" />
                    </div>
                  </div>

                  {/* Account and Cart */}
                  <div className="mt-auto space-y-4 pb-6">
                    <SheetClose asChild>
                      <Link
                        href="/account"
                        className="flex items-center text-lg font-medium uppercase tracking-wide transition-colors hover:text-primary py-2"
                      >
                        Log In
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/cart" className="flex items-center gap-3 py-2">
                        <ShoppingBag className="h-5 w-5" />
                        <span className="text-lg font-medium uppercase tracking-wide">Cart</span>
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
