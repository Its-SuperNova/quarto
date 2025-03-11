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
import footer from "@/components/footer";
import { Footer } from "react-day-picker";

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
      </main>
      <Footer/>
    </div>
  );
}
