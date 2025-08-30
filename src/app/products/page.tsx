"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { productsByCategory, Product, ProductCategory } from "@/data/products";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LuSlidersHorizontal } from "react-icons/lu";
import Link from "next/link";

// Map friendly slugs in the URL to the actual category keys
const SLUG_TO_KEY: Record<string, ProductCategory> = {
  sofas: "sofa_sets",
  dining: "dining_sets",
  bars: "bar_sets",
  loungers: "loungers",
  swings: "swings",
};
// Reverse map
const KEY_TO_SLUG = Object.fromEntries(
  Object.entries(SLUG_TO_KEY).map(([slug, key]) => [key, slug])
);

// Flatten products
const allProducts: Product[] = Object.values(productsByCategory).flat();

// Category list
const CATEGORIES = Object.keys(productsByCategory) as ProductCategory[];

export default function ProductsPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedCategories, setSelectedCategories] = useState<ProductCategory[]>([]);
  const [priceFilter, setPriceFilter] = useState<"all" | "lt1000" | "gte1000">(
    "all"
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  // --- Sync with URL ---
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl) {
      const normalizedKey =
        SLUG_TO_KEY[categoryFromUrl.toLowerCase()] || (categoryFromUrl as ProductCategory);
      if (CATEGORIES.includes(normalizedKey as ProductCategory)) {
        setSelectedCategories([normalizedKey as ProductCategory]);
      }
    } else {
      setSelectedCategories([]);
    }
  }, [searchParams]);

  // Update URL when category changes
  const updateUrl = (categories: ProductCategory[]) => {
    const params = new URLSearchParams(searchParams.toString());
    if (categories.length === 0) {
      params.delete("category");
    } else {
      const slug = KEY_TO_SLUG[categories[0]] || categories[0];
      params.set("category", slug);
    }
    router.replace(
      params.toString() ? `${pathname}?${params.toString()}` : pathname,
      { scroll: false }
    );
  };

  // Handlers
  const toggleCategory = (cat: ProductCategory) => {
    const updated = selectedCategories.includes(cat)
      ? selectedCategories.filter((c) => c !== cat)
      : [...selectedCategories, cat];
    setSelectedCategories(updated);
    updateUrl(updated);
  };

  const handlePriceChange = (value: "all" | "lt1000" | "gte1000") => {
    setPriceFilter(value);
  };

  // --- Filter products ---
  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) =>
        selectedCategories.includes(p.category)
      );
    }

    if (priceFilter === "lt1000") {
      filtered = filtered.filter((p) => p.price < 1000);
    } else if (priceFilter === "gte1000") {
      filtered = filtered.filter((p) => p.price >= 1000);
    }

    return filtered;
  }, [selectedCategories, priceFilter]);

  // --- Filters Component ---
  const Filters = () => (
    <div>
      <h2 className="font-semibold mb-3">Categories</h2>
      <ul className="space-y-2 mb-6">
        {CATEGORIES.map((cat) => (
          <li key={cat} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => toggleCategory(cat)}
            />
            <span>
              {cat.replace(/_/g, " ").replace(/\b\w/g, (m) => m.toUpperCase())}
            </span>
          </li>
        ))}
      </ul>

      <h2 className="font-semibold mb-3">Price</h2>
      <ul className="space-y-2">
        <li>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              checked={priceFilter === "all"}
              onChange={() => handlePriceChange("all")}
            />
            All
          </label>
        </li>
        <li>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              checked={priceFilter === "lt1000"}
              onChange={() => handlePriceChange("lt1000")}
            />
            Less than ₹1000
          </label>
        </li>
        <li>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              checked={priceFilter === "gte1000"}
              onChange={() => handlePriceChange("gte1000")}
            />
            ₹1000 and above
          </label>
        </li>
      </ul>
    </div>
  );
  return (
    <section className="w-full my-20">
      <h2 className="uppercase text-3xl md:text-4xl font-bold text-center text-primary w-[90%] max-w-7xl mx-auto">
        All products
      </h2>
      <div className="max-w-7xl container mx-auto px-4 py-4 md:py-8 flex gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-1/4 border-r border-t">
          <Filters />
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link
              href={'/product/' + product.id}
                key={product.id}
                className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="object-cover w-full h-40 rounded-md"
                />
                <h3 className="mt-2 font-semibold text-primary">
                  {product.name}
                </h3>
                {/* <p className="text-gray-500 text-sm">
                  {product.category
                    .replace(/_/g, " ")
                    .replace(/\b\w/g, (m) => m.toUpperCase())}
                </p> */}
                <p className="mt-1 font-bold text-secondary2">
                  ₹{product.price}
                </p>
              </Link>
            ))}
          </div>
        </main>

        {/* Mobile Floating Filter Button */}
        <div
          className='fixed z-50 bottom-6 left-1/2 transform -translate-x-1/2 duration-300'
        >
          <Button
            onClick={() => setDrawerOpen(true)}
            className="rounded-full shadow-lg px-4 py-2"
          >
            <LuSlidersHorizontal className="mr-2 h-5 w-5" />
            Filters
          </Button>
        </div>

        {/* Mobile Drawer */}
        {drawerOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 flex justify-end md:hidden">
            <div className="bg-white w-3/4 h-full p-6 overflow-y-auto relative">
              <button
                className="absolute top-4 right-4"
                onClick={() => setDrawerOpen(false)}
              >
                <X size={24} />
              </button>
              <Filters />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
