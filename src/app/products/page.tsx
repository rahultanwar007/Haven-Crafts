"use client";

import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import { productsByCategory } from "@/data/products";
import ProductFilters from "@/components/products/ProductFilters";
import ProductsGrid from "@/components/products/ProductsGrid";

// Extract unique categories plus "all"
const categories = ["all", ...Object.keys(productsByCategory)];
const allProducts = Object.values(productsByCategory).flat();
const ITEMS_PER_BATCH = 8;

export default function ProductsPage() {
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_BATCH);

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchCategory = category === "all" || product.category === category;
      const matchPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchCategory && matchPrice;
    });
  }, [category, priceRange]);

  const loadMore = useCallback(() => {
    setVisibleCount((count) =>
      Math.min(count + ITEMS_PER_BATCH, filteredProducts.length)
    );
  }, [filteredProducts.length]);

  useEffect(() => {
    setVisibleCount(ITEMS_PER_BATCH);
  }, [category, priceRange]);

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisibleCount((prev) => prev + 6);
      }
    });

    const currentRef = loadMoreRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [loadMoreRef]);

  return (
    <div className="w-full my-20">
      <div className="w-[90%] mx-auto flex items-center mb-8 md:mb-12 gap-4">
        {/* Divider line */}
        <div className="flex-grow h-px bg-gray-300"></div>
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary whitespace-nowrap uppercase">
          All Products
        </h2>
        {/* Divider line */}
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:col-span-1">
          <ProductFilters
            categories={categories}
            category={category}
            setCategory={setCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </aside>

        {/* Products + Infinite Scroll */}
        <main className="lg:col-span-3">
          {/* Products Grid */}
          <ProductsGrid products={filteredProducts.slice(0, visibleCount)} />

          {/* Infinite Scroll Trigger */}
          <div
            ref={loadMoreRef}
            className="h-12 mt-8 flex items-center justify-center"
          >
            {visibleCount < filteredProducts.length && (
              <span className="text-sm text-gray-500 animate-pulse">
                Loading more products...
              </span>
            )}
          </div>

          {/* No more results */}
          {visibleCount >= filteredProducts.length && (
            <div className="mt-12 flex flex-col items-center space-y-2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6m16 0l-8 8-8-8"
                />
              </svg>
              <p className="text-base font-medium">
                No more products to display
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
