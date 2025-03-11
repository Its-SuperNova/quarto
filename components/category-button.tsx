import Link from "next/link"
import Image from "next/image"

interface CategoryButtonProps {
  name: string
  href: string
  image: string
}

export default function CategoryButton({ name, href, image }: CategoryButtonProps) {
  return (
    <Link href={href} className="group flex flex-col items-center">
      <div className="overflow-hidden rounded-full border h-24 w-24 md:h-32 md:w-32">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={300}
          height={300}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <span className="mt-2 text-sm font-medium">{name}</span>
    </Link>
  )
}
