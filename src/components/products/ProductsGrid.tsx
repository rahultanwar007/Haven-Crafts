"use client";

import ProductCard from "./ProductCard";

interface ProductsGridProps {
  products: {
    id: string;
    name: string;
    price: number;
    image: string;
  }[];
}

export default function ProductsGrid({ products }: ProductsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
