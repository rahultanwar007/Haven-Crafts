// src/components/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";

interface Slide {
  title: string;
  subtitle: string[];
  image: string;
}

const slides: Slide[] = [
  {
    title: "welcome to haven crafts",
    subtitle: ["Crafting", "Comfort,", "Defining", "Style"],
    image: "/images/furniture-hero.png",
  },
  {
    title: "handmade elegance",
    subtitle: ["Luxury", "Meets", "Sustainability"],
    image: "/images/furniture-hero2.png",
  },
  {
    title: "modern living",
    subtitle: ["Designs", "That Inspire", "Everyday Life"],
    image: "/images/furniture-hero3.png",
  },
];

export default function DesktopHeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {});
    }
  }, [emblaApi]);

  return (
    <section className="relative bg-gradient-to-r from-secondary2 to-secondary2/60 hidden lg:block">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className="flex-[0_0_100%] flex items-center justify-between gap-12"
              >
                {/* Left side content */}
                <div className="flex flex-col space-y-6 text-left w-1/2">
                  <h1 className="text-lg text-gray-100 capitalize">
                    {slide.title}{" "}
                  </h1>
                  <div className="max-w-lg">
                    {slide.subtitle.map((line, i) => (
                      <p
                        key={i}
                        className="text-6xl font-bold uppercase text-white"
                      >
                        {line}
                      </p>
                    ))}
                  </div>

                  <Link
                    href="/products"
                    className="bg-[#676463] hover:bg-[#676463]/80 text-md transition text-center tracking-wide text-white px-6 py-3 max-w-3xs rounded uppercase shadow-md"
                  >
                    explore collection
                  </Link>
                </div>

                {/* Right side image */}
                <div className="relative w-1/2">
                  <div className="overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={600}
                      height={500}
                      className="object-cover shadow-2xl shadow-black/60"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
