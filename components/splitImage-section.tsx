import Image from "next/image";
import Link from "next/link";

interface SplitImageSectionProps {
  leftImage: {
    src: string;
    alt: string;
    href?: string;
  };
  rightImage: {
    src: string;
    alt: string;
    href?: string;
  };
}

export default function SplitImageSection({
  leftImage,
  rightImage,
}: SplitImageSectionProps) {
  return (
    <section className="h-screen w-full">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left image section */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
          {leftImage.href ? (
            <Link href={leftImage.href} className="block h-full w-full">
              <Image
                src={leftImage.src || "/placeholder.svg"}
                alt={leftImage.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </Link>
          ) : (
            <Image
              src={leftImage.src || "/placeholder.svg"}
              alt={leftImage.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority
            />
          )}
        </div>

        {/* Right image section */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
          {rightImage.href ? (
            <Link href={rightImage.href} className="block h-full w-full">
              <Image
                src={rightImage.src || "/placeholder.svg"}
                alt={rightImage.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </Link>
          ) : (
            <Image
              src={rightImage.src || "/placeholder.svg"}
              alt={rightImage.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}
