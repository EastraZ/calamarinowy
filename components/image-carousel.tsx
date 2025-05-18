"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageCarouselProps {
  images?: {
    src: string
    alt: string
    description: string
  }[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  // Default images if none are provided
  const defaultImages = [
    {
      src: "/placeholder.svg?height=500&width=800",
      alt: "Calamari ESP Feature",
      description: "Advanced ESP features showing player positions through walls",
    },
    {
      src: "/placeholder.svg?height=500&width=800",
      alt: "Calamari Aimbot",
      description: "Precision aimbot with customizable FOV and smoothing",
    },
    {
      src: "/placeholder.svg?height=500&width=800",
      alt: "Calamari Radar",
      description: "Real-time radar showing enemy positions and movement",
    },
    {
      src: "/placeholder.svg?height=500&width=800",
      alt: "Calamari Interface",
      description: "Clean, intuitive interface for easy configuration",
    },
  ]

  const carouselImages = images && images.length > 0 ? images : defaultImages
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0
    const newIndex = isFirstImage ? carouselImages.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastImage = currentIndex === carouselImages.length - 1
    const newIndex = isLastImage ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto px-2 sm:px-0">
      <div className="absolute inset-0 bg-red-500/20 rounded-lg blur-xl"></div>
      <div className="relative z-10 h-full">
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full overflow-hidden rounded-lg border border-gray-800 bg-black">
          <Image
            src={carouselImages[currentIndex].src || "/placeholder.svg?height=500&width=800"}
            alt={carouselImages[currentIndex].alt}
            fill
            className="object-contain p-2"
            priority
          />

          {/* Left Arrow */}
          <div
            className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-3 text-white hover:bg-black/70"
            onClick={goToPrevious}
            style={{ touchAction: "manipulation" }}
          >
            <ChevronLeft size={24} />
          </div>

          {/* Right Arrow */}
          <div
            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-3 text-white hover:bg-black/70"
            onClick={goToNext}
            style={{ touchAction: "manipulation" }}
          >
            <ChevronRight size={24} />
          </div>
        </div>

        {/* Description */}
        <div className="mt-4 rounded-lg bg-gray-900 p-4 text-center">
          <p className="text-lg font-medium text-white">{carouselImages[currentIndex].description}</p>
        </div>

        {/* Dots/Indicators */}
        <div className="mt-4 flex justify-center space-x-2">
          {carouselImages.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`h-3 w-3 cursor-pointer rounded-full transition-all ${
                currentIndex === slideIndex ? "bg-red-500 w-6" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
