import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isOnSale?: boolean;
  style?: "default" | "category";
  objectPosition?: string;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  isOnSale = false,
  style = "default",
  objectPosition = "center",
}: ProductCardProps) {
  if (style === "category") {
    return (
      <Link href={`/product/${id}`} className="group block">
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ objectPosition }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-6 w-full">
              <h3 className="text-xl font-medium text-white">{name}</h3>
              <p className="text-sm text-white/80 mt-1">{category}</p>
              <div className="mt-2 flex items-center gap-2">
                <p className="font-medium text-white">${price.toFixed(2)}</p>
                {originalPrice && (
                  <p className="text-sm text-white/70 line-through">
                    ${originalPrice.toFixed(2)}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="group">
      <Link href={`/product/${id}`} className="block">
        <div className="overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={400}
            height={600}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="mt-3 space-y-1">
        {isOnSale && <p className="text-sm font-medium text-red-500">Sale</p>}
        <p className="text-sm text-muted-foreground">{category}</p>
        <h3 className="text-sm font-medium">{name}</h3>
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium">${price.toFixed(2)}</p>
          {originalPrice && (
            <p className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
