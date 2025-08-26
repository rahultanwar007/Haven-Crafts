"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import FilterDrawer from "./FilterDrawer";

interface FloatingFilterButtonProps {
  categories: string[];
  category: string;
  setCategory: (c: string) => void;
  priceRange: [number, number];
  setPriceRange: (r: [number, number]) => void;
}

export default function FloatingFilterButton({
  categories,
  category,
  setCategory,
  priceRange,
  setPriceRange,
}: FloatingFilterButtonProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setVisible(true); // show on scroll up
      } else {
        setVisible(false); // hide on scroll down
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Button */}
      <div
        className={`fixed z-50 bottom-6 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Button
          onClick={() => setDrawerOpen(true)}
          className="rounded-full shadow-lg px-4 py-2"
        >
          <SlidersHorizontal className="mr-2 h-5 w-5" />
          Filters
        </Button>
      </div>

      {/* Drawer */}
      <FilterDrawer
        open={drawerOpen}
        setOpen={setDrawerOpen}
        categories={categories}
        category={category}
        setCategory={setCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
    </>
  );
}
