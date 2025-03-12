"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex w-full justify-between items-center">
          {/* Navigation and search on the left */}
          <div className="flex items-center gap-8">
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
              <Search
                className="h-5 w-5 cursor-pointer"
                onClick={toggleSearch}
              />
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

          {/* Logo in the center */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
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

          {/* Account and cart on the right */}
          <div className="flex items-center gap-4">
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
        </div>
      </div>
    </header>
  );
}
