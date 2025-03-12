import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ProductCard from "@/components/product-card";
import { trendingProducts } from "@/data/trending-now";

export default function TrendingNowSection() {
  return (
    <section className="py-8 md:py-12">
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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {trendingProducts.slice(0, 8).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              slug={product.slug}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
