"use client";

import { useEffect, useState } from "react";
import FilterSidebar from "../filter/FilterSidebar";
import FloatingFilterButton from "../filter/FloatingFilterButton";

interface ProductFiltersProps {
  categories: string[];
  category: string;
  setCategory: (c: string) => void;
  priceRange: [number, number];
  setPriceRange: (r: [number, number]) => void;
}

export default function ProductFilters({
  categories,
  category,
  setCategory,
  priceRange,
  setPriceRange,
}: ProductFiltersProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1024); // lg breakpoint
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      {/* Desktop sidebar */}
      {!isMobile && (
        <FilterSidebar
          categories={categories}
          category={category}
          setCategory={setCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
      )}

      {/* Mobile floating button + drawer */}
      {isMobile && (
        <FloatingFilterButton
          categories={categories}
          category={category}
          setCategory={setCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
      )}
    </>
  );
}
