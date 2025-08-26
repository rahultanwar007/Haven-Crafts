"use client";

import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";

interface FilterDrawerProps {
  open: boolean;
  setOpen: (o: boolean) => void;
  categories: string[];
  category: string;
  setCategory: (c: string) => void;
  priceRange: [number, number];
  setPriceRange: (r: [number, number]) => void;
}

export default function FilterDrawer({
  open,
  setOpen,
  categories,
  category,
  setCategory,
  priceRange,
  setPriceRange,
}: FilterDrawerProps) {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="p-4">
        <DrawerHeader>
          <DrawerTitle>Filters</DrawerTitle>
        </DrawerHeader>

        <ScrollArea className="h-[70vh] pr-2">
          <div className="space-y-6">
            {/* Category */}
            <div>
              <h3 className="font-medium mb-2">Category</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="drawer-category"
                      value={cat}
                      checked={category === cat}
                      onChange={() => setCategory(cat)}
                    />
                    <span>
                      {cat === "all"
                        ? "All Categories"
                        : cat.charAt(0).toUpperCase() + cat.slice(1)}
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
      </DrawerContent>
    </Drawer>
  );
}
