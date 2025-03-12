interface VideoShowcaseSectionProps {
  videoSrc: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export default function VideoShowcaseSection({
  videoSrc,
  title,
  subtitle,
  ctaText,
  ctaLink,
}: VideoShowcaseSectionProps) {
  return (
    <section className="relative w-full bg-black">
      <div className="relative w-full">
        <video className="w-full h-auto" autoPlay loop muted playsInline>
          <source src={videoSrc} type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Centered text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <p className="text-lg md:text-xl font-light mb-2">{subtitle}</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6">
              {title}
            </h2>
            <a
              href={ctaLink}
              className="inline-block text-sm md:text-base uppercase tracking-wider border-b pb-1 hover:border-white/70 transition-colors"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
