// src/components/BannerSection.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";

const banners = [
  {
    id: 1,
    img: "/images/banner1.webp",
    title: "Modern Sofa",
    discount: "30% OFF",
    cta: "Shop Now",
  },
  {
    id: 2,
    img: "/images/banner2.jpg",
    title: "Elegant Chair",
    discount: "20% OFF",
    cta: "Discover",
  },
  {
    id: 3,
    img: "/images/banner3.webp",
    title: "Wooden Table",
    discount: "15% OFF",
    cta: "Buy Now",
  },
  {
    id: 4,
    img: "/images/banner4.webp",
    title: "Stylish Lamp",
    discount: "40% OFF",
    cta: "Grab Deal",
  },
  {
    id: 5,
    img: "/images/banner5.jpg",
    title: "Comfy Lounger",
    discount: "25% OFF",
    cta: "Shop Collection",
  },
];

export default function BannerSection() {
  // Embla carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className=" py-10">
      <div className="w-full md:max-w-7xl mx-auto">
        {/* === Mobile Carousel === */}
        <div className="md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {banners.map((banner) => (
                <motion.div
                  key={banner.id}
                  className="relative flex-[0_0_100%]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={banner.img}
                    alt={banner.title}
                    width={600}
                    height={400}
                    className="w-full h-[220px] rounded-none object-cover shadow-md"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center rounded">
                    <h3 className="text-lg font-semibold">{banner.title}</h3>
                    <p className="text-sm mb-2">{banner.discount}</p>
                    <button className="px-5 py-1 bg-ocean/70 text-white font-medium rounded-md shadow hover:bg-ocean transition">
                      {banner.cta}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {scrollSnaps.map((_, idx) => (
              <button
                key={idx}
                className={`w-2.5 h-2.5 rounded-full ${
                  idx === selectedIndex ? "bg-ocean" : "bg-gray-300"
                }`}
                onClick={() => emblaApi?.scrollTo(idx)}
              />
            ))}
          </div>
        </div>

        {/* === Desktop Grid === */}
        <div className="hidden md:block space-y-6">
          {/* First row: 2 banners */}
          <div className="grid grid-cols-2 gap-6">
            {banners.slice(0, 2).map((banner) => (
              <motion.div
                key={banner.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative rounded overflow-hidden shadow-md group"
              >
                <Image
                  src={banner.img}
                  alt={banner.title}
                  width={600}
                  height={400}
                  className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center">
                  <h3 className="text-xl font-semibold">{banner.title}</h3>
                  <p className="text-lg mb-2">{banner.discount}</p>
                  <button className="px-7 py-2 bg-ocean/70 text-white font-medium rounded shadow hover:bg-ocean transition">
                    {banner.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second row: 3 banners */}
          <div className="grid grid-cols-3 gap-6">
            {banners.slice(2).map((banner) => (
              <motion.div
                key={banner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative rounded-lg overflow-hidden shadow-md group"
              >
                <Image
                  src={banner.img}
                  alt={banner.title}
                  width={400}
                  height={300}
                  className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center">
                  <h3 className="text-lg font-semibold">{banner.title}</h3>
                  <p className="text-sm mb-2">{banner.discount}</p>
                  <button className="px-5 py-1 bg-ocean/70 text-white text-sm font-medium rounded-md shadow hover:bg-ocean transition">
                    {banner.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
