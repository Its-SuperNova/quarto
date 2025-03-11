import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ProductCard from "@/components/product-card";

export default function NewArrivalsSection() {
  // New arrivals products data
  const newArrivalsProducts = [
    {
      id: "21",
      name: "Aetherium Graphic Tee",
      price: 49.99,
      image: "/images/aetherium-tshirt.png",
      category: "T-Shirts",
    },
    {
      id: "22",
      name: "CMXII Elite Race Hoodie",
      price: 79.99,
      image: "/images/cmxii-hoodie.png",
      category: "Hoodies",
    },
    {
      id: "23",
      name: "Striped Rugby Shirt",
      price: 64.99,
      image: "/images/striped-rugby.png",
      category: "Shirts",
    },
    {
      id: "24",
      name: "Relaxed Olive Trousers",
      price: 59.99,
      image: "/images/olive-trousers.png",
      category: "Bottoms",
    },
    {
      id: "29",
      name: "Leaf Pattern Resort Shirt",
      price: 59.99,
      image: "/images/pink-leaf-shirt.png",
      category: "Shirts",
    },
    {
      id: "30",
      name: "Navy Double-Breasted Blazer",
      price: 129.99,
      image: "/images/navy-blazer.png",
      category: "Outerwear",
    },
    {
      id: "31",
      name: "Embroidered Varsity Jacket",
      price: 89.99,
      image: "/images/green-varsity-jacket.png",
      category: "Jackets",
    },
    {
      id: "32",
      name: "Relaxed Light Wash Jeans",
      price: 69.99,
      image: "/images/light-wash-jeans.png",
      category: "Denim",
    },
  ];

  return (
    <section className="py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <h2 className="text-2xl font-medium tracking-tight mb-2">
            New Arrivals
          </h2>
          <Link
            href="/category/new-arrivals"
            className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
          >
            View All
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {newArrivalsProducts.slice(0, 8).map((product) => (
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
    </section>
  );
}
