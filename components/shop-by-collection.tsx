import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  title: string;
  image: string;
  href: string;
  objectPosition?: string;
}

function CategoryCard({
  title,
  image,
  href,
  objectPosition = "center",
}: CategoryCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative overflow-hidden rounded-2xl aspect-square">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${title} Collection`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ objectPosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-6 w-full">
            <h3 className="text-xl md:text-2xl font-medium text-white">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ShopByCollectionSection() {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-medium tracking-tight text-center mb-8">
          Shop by Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard
            title="Men"
            image="/images/home/men-blue-set.png"
            href="/category/men"
            objectPosition="top center"
          />
          <CategoryCard
            title="Women"
            image="/images/home/womens-brown-set.png"
            href="/category/women"
            objectPosition="top center"
          />
          <CategoryCard
            title="Kids"
            image="/images/home/kids.png"
            href="/category/kids"
            objectPosition="top center"
          />
        </div>
      </div>
    </section>
  );
}
