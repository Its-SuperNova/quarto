"use client";

import HeroSection from "@/components/hero-section";
import Header from "@/components/header";
import CategorySection from "@/components/category-section";
import SplitImageSection from "@/components/splitImage-section";
import ShopByCollectionSection from "@/components/shop-by-collection";
import NewArrivalsSection from "@/components/new-arraivals-section";
import Footer from "@/components/footer";
import { useSmoothScroll } from "@/lib/smooth-scroll";

export default function Home() {
  // Initialize Lenis smooth scrolling
  useSmoothScroll();

  // Define the images for the split image section
  const splitImages = {
    leftImage: {
      src: "/cream-outfit-back.png",
      alt: "Cream colored sweatshirt and shorts - back view",
      href: "/category/summer-collection",
    },
    rightImage: {
      src: "/blue-racing-outfit-side.png",
      alt: "Blue racing sweatshirt with gray sweatpants - side view",
      href: "/category/streetwear-collection",
    },
  };

  // Trending products data
  const trendingProducts = [
    {
      id: "5",
      name: "Heavyweight Hoodie",
      price: 79.99,
      image: "/images/heavyweight-hoodie.png",
      category: "Hoodies",
    },
    {
      id: "6",
      name: "Vintage Wash T-Shirt",
      price: 42.99,
      image: "/images/vintage-tshirt.png",
      category: "T-Shirts",
    },
    {
      id: "7",
      name: "Relaxed Fit Sweatshirt",
      price: 64.99,
      image: "/images/relaxed-sweatshirt.png",
      category: "Sweatshirts",
    },
    {
      id: "8",
      name: "Minimalist Logo T-Shirt",
      price: 38.99,
      image: "/images/logo-tshirt.png",
      category: "T-Shirts",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CategorySection />
        <SplitImageSection
          leftImage={splitImages.leftImage}
          rightImage={splitImages.rightImage}
        />
        <ShopByCollectionSection />
        <NewArrivalsSection />
      </main>

      <Footer />
    </div>
  );
}
