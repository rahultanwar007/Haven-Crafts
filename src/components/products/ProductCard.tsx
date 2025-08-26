"use client";

import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group block rounded-2xl overflow-hidden border shadow-sm hover:shadow-lg transition bg-white"
    >
      {/* Product Image */}
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Details */}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 group-hover:text-primary transition">
          {product.name}
        </h3>
        <p className="text-accent font-bold text-xl mt-2">₹{product.price}</p>
      </div>
    </Link>
  );
}
