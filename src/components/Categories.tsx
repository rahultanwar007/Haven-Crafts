// components/CategorySection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: "sofas",
    name: "Sofas",
    image: "/images/categories/sofas.webp",
  },
  {
    id: "dining",
    name: "Dining Sets",
    image: "/images/categories/dining.jpg",
  },
  {
    id: "bars",
    name: "Bar Sets",
    image: "/images/categories/bars.jpg",
  },
  {
    id: "loungers",
    name: "Loungers",
    image: "/images/categories/loungers.webp",
  },
  {
    id: "swings",
    name: "Swings",
    image: "/images/categories/swings.webp",
  },
];

export default function CategorySection() {
  return (
    <section className="w-full py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-3">
        {/* Heading */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase">
            Categories
          </h2>
          {/* <Link
            href="/products"
            className="inline-block text-sm text-secondary2 font-medium hover:underline"
          >
            Show All →
          </Link> */}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.id}`}
              className="group relative rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <Image
                src={category.image}
                alt={category.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />

              {/* Dark overlay with fade-in on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-30 md:opacity-0 md:group-hover:opacity-30 transition-opacity duration-300"></div>

              {/* Sliding text from bottom */}
              <span
                className="
                  absolute 
                  bottom-0 left-0 right-0 
                  text-gray-100 font-semibold text-lg py-2 px-4 text-center
                  translate-y-0 md:translate-y-full md:group-hover:translate-y-0
                  transition-transform duration-300
                "
              >
                {category.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Scroll */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.id}`}
              className="flex-shrink-0 w-40 relative rounded-lg overflow-hidden shadow"
            >
              <Image
                src={category.image}
                alt={category.name}
                width={160}
                height={160}
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-sm font-medium text-white text-center">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
