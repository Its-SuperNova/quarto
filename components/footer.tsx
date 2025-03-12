import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white flex justify-center" style={{ backgroundColor: "#111111" }}>
      <div className="px-4 md:p-6 w-full max-w-[1200px]">
        <div className="grid gap-8 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/category/new-arrivals"
                  className="text-zinc-300 hover:text-white hover:underline"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/category/men"
                  className="text-zinc-300 hover:text-white hover:underline"
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  href="/category/women"
                  className="text-zinc-300 hover:text-white hover:underline"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="text-zinc-300 hover:text-white hover:underline"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/best-sellers"
                  className="text-zinc-300 hover:text-white hover:underline"
                >
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link
                  href="/accessories"
                  className="text-zinc-300 hover:text-white hover:underline"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/gift-cards"
                  className="text-zinc-300 hover:text-white hover:underline"
                >
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Customer Care</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-300 hover:text-white hover:underline"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-zinc-300 hover:text-white hover:underline"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-zinc-300 hover:text-white hover:underline"
                >
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-zinc-300 hover:text-white hover:underline"
                >
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link
                  href="/track-order"
                  className="text-zinc-300 hover:text-white hover:underline"
                >
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link
                  href="/size-guide"
                  className="text-zinc-300 hover:text-white hover:underline"
                >
                  Size Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/care-instructions"
                  className="text-zinc-300 hover:text-white hover:underline"
                >
                  Care Instructions
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-zinc-300 hover:text-white hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/our-story"
                  className="text-zinc-300 hover:text-white hover:underline"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/sustainability"
                  className="text-zinc-300 hover:text-white hover:underline"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-zinc-300 hover:text-white hover:underline"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="text-zinc-300 hover:text-white hover:underline"
                >
                  Press & Media
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-zinc-300 hover:text-white hover:underline"
                >
                  Blog / Journal
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-zinc-300 hover:text-white hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-zinc-300 hover:text-white hover:underline"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-zinc-300 hover:text-white hover:underline"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-zinc-800 border-t">
          <div className="flex flex-col md:flex-row justify-between py-8 gap-8">
            <div className="max-w-md">
              <h2 className="text-3xl font-ubuntu font-light mb-3">
                Every Thread Crafted for
                <br />
                Refined Comfort.
              </h2>
              <div className="mt-4">
                <div className="relative max-w-md">
                  <input
                    type="email"
                    placeholder="What's your e-mail?"
                    className="w-full bg-white text-black px-6 py-3 pr-14 rounded-full focus:outline-none"
                  />
                  <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-zinc-800 transition-colors">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-Fqm2HsL40J1ikvZ8EXJRcJfoCrrfl6.svg"
                alt="Threadly Logo"
                width={150}
                height={40}
                className="h-12 w-auto invert mb-4"
              />
              <div className="flex gap-4 mt-2">
                <Link href="#" aria-label="YouTube">
                  <div className="bg-zinc-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-zinc-700 transition-colors">
                    <Youtube className="h-5 w-5 text-white" />
                  </div>
                </Link>
                <Link href="#" aria-label="Instagram">
                  <div className="bg-zinc-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-zinc-700 transition-colors">
                    <Instagram className="h-5 w-5 text-white" />
                  </div>
                </Link>
                <Link href="#" aria-label="Facebook">
                  <div className="bg-zinc-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-zinc-700 transition-colors">
                    <Facebook className="h-5 w-5 text-white" />
                  </div>
                </Link>
                <Link href="#" aria-label="Twitter">
                  <div className="bg-zinc-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-zinc-700 transition-colors">
                    <Twitter className="h-5 w-5 text-white" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-sm text-zinc-400">
                © Copyright {new Date().getFullYear()}. All Rights Reserved.
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 mt-4 md:mt-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-epCI13rKkMAIXPe6TiPhJCMRF9Olpn.png"
                alt="Mastercard"
                width={60}
                height={40}
                className="h-8 w-auto bg-white rounded-sm p-1"
              />
              
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cCXWDEfXhuWx7exrzdGeZprJMnocSS.png"
                alt="UPI"
                width={60}
                height={40}
                className="h-8 w-auto bg-white rounded-sm p-1"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CvbJAXLxIVUOX2dO8q1p3Tqd3r4KxF.png"
                alt="Apple Pay"
                width={60}
                height={40}
                className="h-8 w-auto bg-white rounded-sm p-1"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-F206EDcI9azti1aTNpxc0bGgPc7qag.png"
                alt="Google Pay"
                width={60}
                height={40}
                className="h-8 w-auto bg-white rounded-sm p-1"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DiYkEEqEtMUfoYNsEVn0kpEGERhT1V.png"
                alt="PayPal"
                width={60}
                height={40}
                className="h-8 w-auto bg-white rounded-sm p-1"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
