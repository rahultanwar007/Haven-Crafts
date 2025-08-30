// src/components/FeaturedProducts.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { trendingProducts } from "@/data/trendingProducts";

export default function TrendingProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800 uppercase">
            Trending
          </h2>
          <Link
            href="/products"
            className="block text-sm font-medium text-secondary2 hover:underline"
          >
            Show All →
          </Link>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {trendingProducts.slice(0, 8).map((product) => (
            <Link
              href={"/product/" + product.id}
              key={product.id}
              className="group rounded-lg shadow hover:shadow-lg transition overflow-hidden border"
            >
              <div className="relative w-full h-56 bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-md font-semibold text-gray-800 line-clamp-2">
                  {product.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Scroll */}
        <div className="md:hidden flex space-x-4 overflow-x-auto snap-x snap-mandatory pb-4">
          {trendingProducts.slice(0, 6).map((product) => (
            <Link
              href={"/product/" + product.id}
              key={product.id}
              className="snap-start min-w-[250px] rounded-lg shadow hover:shadow-lg transition overflow-hidden border"
            >
              <div className="relative w-full h-48 bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3 space-y-1">
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                  {product.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
