import { useState, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { productsByCategory, Product } from "@/data/products";
import Link from "next/link";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Flatten all products across categories
  const allProducts: Product[] = Object.values(productsByCategory).flat();

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setQuery(value);

    if (value.length === 0) {
      setResults([]);
      return;
    }
    const q = value.toLowerCase();

    const filtered = allProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
    setResults(filtered);
  }

  const showIcon = !focused && query.length === 0;

  return (
    <div className="relative w-full">
      <div className="relative">
        {showIcon && (
          <FiSearch
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none font-bold"
          />
        )}
        <input
          type="text"
          ref={inputRef}
          value={query}
          onChange={handleInput}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Search products..."
          className={`w-full px-4 py-2 md:py-1.5 bg-white rounded-full border focus:outline-none text-primary ${
            showIcon ? "pl-10" : ""
          }`}
        />
      </div>
      {query.length > 0 && (
        <div className="absolute bg-white z-10 left-0 right-0 shadow-lg rounded-b-lg max-h-60 overflow-y-auto">
          {results.length === 0 ? (
            <div className="p-4 text-gray-500">No products found.</div>
          ) : (
            results.map((product) => (
              <Link
              href={'/product/'+product.id}
                key={product.id}
                className="flex items-center gap-4 p-4 border-b last:border-b-0 cursor-pointer hover:bg-gray-100"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded-md flex-shrink-0 border"
                />
                <div>
                  <div className="font-medium">{product.name}</div>
                  <div className="text-sm text-gray-600 line-clamp-2">{product.description}</div>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
