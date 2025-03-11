import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingBag, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex w-full justify-between items-center">
          {/* Logo on the left */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-Fqm2HsL40J1ikvZ8EXJRcJfoCrrfl6.svg"
              alt="Threadly Logo"
              width={120}
              height={30}
              className="h-8 w-auto"
            />
          </Link>

          {/* Navigation in the center */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-8">
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

          {/* Search and icons on the right */}
          <div className="flex items-center gap-4">
            <div className="relative w-full max-w-sm items-center hidden md:flex">
              <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full rounded-full bg-background pl-8 md:w-[200px] lg:w-[250px]"
              />
            </div>
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
      </div>
    </header>
  )
}
