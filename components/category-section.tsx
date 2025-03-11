import Link from "next/link";
import { ChevronRight } from "lucide-react";
import CategoryButton from "@/components/category-button";

export default function CategorySection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-medium tracking-tight">
            Shop by Category
          </h2>
          <Link
            href="/categories"
            className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
          >
            View All
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <CategoryButton
            name="T-Shirts"
            href="/category/t-shirts"
            image="/images/categories/t-shirt.png"
          />
          <CategoryButton
            name="Shorts"
            href="/category/shorts"
            image="/images/categories/shorts.png"
          />
          <CategoryButton
            name="Hoodies"
            href="/category/hoodies"
            image="/images/categories/hoody.png"
          />
          <CategoryButton
            name="Joggers"
            href="/category/joggers"
            image="/images/categories/joggers.png"
          />
        </div>
      </div>
    </section>
  );
}
