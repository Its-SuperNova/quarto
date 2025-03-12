"use client";

import HeroSection from "@/components/hero-section";
import Header from "@/components/header";
import CategorySection from "@/components/category-section";
import SplitImageSection from "@/components/splitImage-section";
import ShopByCollectionSection from "@/components/shop-by-collection";
import NewArrivalsSection from "@/components/new-arraivals-section";
import Footer from "@/components/footer";
import { useSmoothScroll } from "@/lib/smooth-scroll";
import VideoShowcaseSection from "@/components/video-showcase-section";
import TrendingNowSection from "@/components/trending-now-section";
export default function Home() {
  // Initialize Lenis smooth scrolling
  useSmoothScroll();

  // Define the images for the split image section
  const splitImages = {
    leftImage: {
      src: "images/home/shorts.png",
      alt: "Cream colored sweatshirt and shorts - back view",
      href: "/category/summer-collection",
    },
    rightImage: {
      src: "images/home/blue-racing-outfit-side.png",
      alt: "Blue racing sweatshirt with gray sweatpants - side view",
      href: "/category/streetwear-collection",
    },
  };
  // Video showcase content
  const videoShowcase = {
    videoSrc: "/videos/polo-tshirt.webm",
    title: "Knitted Polo Shirts",
    subtitle: "Summer Season",
    ctaText: "Shop Now",
    ctaLink: "/category/polo-shirts",
  };

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
        <VideoShowcaseSection
          videoSrc={videoShowcase.videoSrc}
          title={videoShowcase.title}
          subtitle={videoShowcase.subtitle}
          ctaText={videoShowcase.ctaText}
          ctaLink={videoShowcase.ctaLink}
        />
        <TrendingNowSection />
      </main>

      <Footer />
    </div>
  );
}
