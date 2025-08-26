"use client";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface FilterSidebarProps {
  categories: string[];
  category: string;
  setCategory: (c: string) => void;
  priceRange: [number, number];
  setPriceRange: (r: [number, number]) => void;
}

export default function FilterSidebar({
  categories,
  category,
  setCategory,
  priceRange,
  setPriceRange,
}: FilterSidebarProps) {
  return (
    <Card className="w-64 h-screen sticky top-16 p-4 hidden lg:block">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <ScrollArea className="h-[calc(100vh-100px)] pr-2">
        <div className="space-y-4">
          {/* Category */}
          <div>
            <h3 className="font-medium mb-2">Category</h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <label key={cat} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    checked={category === cat}
                    onChange={() => setCategory(cat)}
                  />
                  <span>
                    {cat === "all" ? "All Categories" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price */}
          <div>
            <h3 className="font-medium mb-2">Price Range</h3>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
                className="w-20 border rounded p-1"
              />
              <span>–</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                className="w-20 border rounded p-1"
              />
            </div>
          </div>
        </div>
      </ScrollArea>
    </Card>
  );
}
