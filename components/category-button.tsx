import Link from "next/link";
import Image from "next/image";

interface CategoryButtonProps {
  name: string;
  href: string;
  image: string;
}

export default function CategoryButton({
  name,
  href,
  image,
}: CategoryButtonProps) {
  return (
    <Link href={href} className="group">
      <div className="overflow-hidden bg-[#f0f0f0] h-[400px]">
        <div className="flex items-center justify-center h-full w-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={300}
            height={400}
            className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="mt-3">
        <h3 className="text-sm font-medium">{name}</h3>
      </div>
    </Link>
  );
}
