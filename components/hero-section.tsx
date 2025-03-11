"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useSmoothScroll } from "@/lib/smooth-scroll"

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  // Initialize Lenis smooth scrolling
  const lenis = useSmoothScroll()

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleScroll = () => {
      // Get the distance from the top of the page to the section
      const rect = section.getBoundingClientRect()
      // Calculate how far we've scrolled into the section
      const scrollPosition = rect.top
      setOffset(scrollPosition)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    // Initial calculation
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Calculate parallax transforms based on scroll position
  const imageTransform = `translateY(${offset * 0.2}px)` // Image moves slower than scroll
  const textTransform = `translateY(${offset * 0.4}px)` // Text moves faster than image

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#D7D7D7] overflow-hidden"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <div className="container relative h-full mx-auto px-4 md:px-6">
        {/* Quarto text with parallax effect */}
        <div
          className="absolute bottom-8 w-full text-center z-10 px-4 opacity-0 animate-fade-in-up"
          style={{
            animationDelay: "0.5s",
            transform: textTransform,
            transition: "transform 0.1s ease-out",
          }}
        >
          <h1
            className="font-ubuntu text-white text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] w-full"
            style={{
              letterSpacing: "0.5em",
              width: "100%",
              paddingLeft: "0.5em", // Offset for the letter spacing
              fontWeight: 300,
            }}
          >
            Quarto
          </h1>
        </div>

        {/* Model image with parallax effect */}
        <div
          className="absolute bottom-0 left-0 right-0 mx-auto flex justify-center z-20 opacity-0 animate-fade-in-down"
          style={{
            transform: imageTransform,
            transition: "transform 0.1s ease-out",
          }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-xLlABa9DglqbuLiLQt5SWUxO3hfQUs.png"
            alt="Model wearing a light gray hoodie"
            width={500}
            height={600}
            className="h-auto object-contain"
            style={{ maxHeight: "80vh" }}
            priority
          />
        </div>
      </div>
    </section>
  )
}
