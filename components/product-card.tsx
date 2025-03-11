import Link from "next/link"
import Image from "next/image"

interface ProductCardProps {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
}

export default function ProductCard({ id, name, price, originalPrice, image, category }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border">
      <Link href={`/product/${id}`} className="absolute inset-0 z-10">
        <span className="sr-only">View {name}</span>
      </Link>
      <div className="aspect-square overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={400}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-muted-foreground">{category}</p>
        <div className="mt-2 flex items-center gap-2">
          <p className="font-medium">${price.toFixed(2)}</p>
          {originalPrice && <p className="text-sm text-muted-foreground line-through">${originalPrice.toFixed(2)}</p>}
        </div>
      </div>
    </div>
  )
}
