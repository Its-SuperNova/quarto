import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ProductCard from "@/components/product-card";

export default function TrendingNowSection() {
  // Trending products data
  const trendingProducts = [
    {
      id: "33",
      name: "Essential Tank Top",
      price: 29.99,
      image: "/images/cloths/trending-now/Essential-tank-top/image.png",
      category: "Tank Tops",
    },
    {
      id: "34",
      name: "Worldwide Goods Polo",
      price: 64.99,
      image: "/images/cloths/trending-now/Worldwide-goods-polo/image.png",
      category: "Polo Shirts",
    },
    {
      id: "35",
      name: "Wide Leg Trousers",
      price: 79.99,
      image: "/images/cloths/trending-now/Wide-leg-trousers/image.png",
      category: "Pants",
    },
    {
      id: "36",
      name: "Varsity Bomber Jacket",
      price: 129.99,
      image: "/images/cloths/trending-now/Varsity-bomber-jacket/image.png",
      category: "Jackets",
    },
    {
      id: "37",
      name: "Classic Denim Jeans",
      price: 89.99,
      image: "/images/cloths/trending-now/Classic-denim-jeans/image.png",
      category: "Jeans",
    },
    {
      id: "38",
      name: "Minimalist Sneakers",
      price: 94.99,
      image: "/images/cloths/trending-now/Minimalist-sneakers/image.png",
      category: "Footwear",
    },
    {
      id: "39",
      name: "Oxford Dress Shoes",
      price: 149.99,
      image: "/images/cloths/trending-now/Oxford-dress-shoes/image.png",
      category: "Footwear",
    },
    {
      id: "40",
      name: "Botanical Print Shirt",
      price: 69.99,
      image: "/images/cloths/trending-now/Botanical-print-shirt/image.png",
      category: "Shirts",
    },
  ];

  return (
    <section className="py-8 md:py-12 mb-[100px]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <h2 className="text-2xl font-medium tracking-tight mb-2">
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
        <div className="space-y-6">
          {/* First Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            {trendingProducts.slice(0, 4).map((product) => (
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
          {/* Second Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            {trendingProducts.slice(4, 8).map((product) => (
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
    </section>
  );
}
