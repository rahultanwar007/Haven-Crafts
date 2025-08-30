"use client";

import { notFound, useParams } from "next/navigation";
import { productsByCategory, Product } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io";

// Flatten products
const allProducts: Product[] = Object.values(productsByCategory).flat();

export default function ProductPage() {
  const params = useParams();
  const { id } = params;

  const product = allProducts.find((p) => p.id === id);

  if (!product) return notFound();

  const similarProducts = allProducts.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  // Embla carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const whatsappMessage = `Hi, I’m interested in ${product.name}. Could you tell me more?`;
  const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 my-20">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded" ref={emblaRef}>
            <div className="flex">
              {[product.image, ...product.subImages].map((img, idx) => (
                <div className="flex-[0_0_100%]" key={idx}>
                  <Image
                    src={img}
                    alt={product.name}
                    width={600}
                    height={500}
                    className="w-full h-[400px] object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
          >
            ‹
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
          >
            ›
          </button>
        </div>

        {/* Details */}
        <div>
          <p className="uppercase text-sm text-gray-500 mb-2">
            {product.category.replace(/_/g, " ")}
          </p>
          <h1 className="text-3xl font-bold text-primary">{product.name}</h1>
          <p className="text-2xl font-semibold text-secondary2 mt-2">
            ₹{product.price}
          </p>
          <p className="mt-4 text-gray-600">{product.description}</p>

          {/* WhatsApp Button */}
          <div className="mt-6">
            <Link href={whatsappUrl} target="_blank">
              <Button className="bg-green-600 hover:bg-green-700 w-full md:w-auto cursor-pointer">
                <IoLogoWhatsapp />
                Ask about this product
              </Button>
            </Link>
          </div>

          {/* Socials */}
          <Link
            href={`${process.env.NEXT_PUBLIC_INSTAGRAM}`}
            target="_blank"
            className="mt-6"
          >
            <Button className="bg-pink-600 hover:bg-pink-700 w-full md:w-auto cursor-pointer mt-6">
              <IoLogoInstagram className="text-xl" /> Follow us on Instagram
            </Button>
          </Link>
        </div>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Similar Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {similarProducts.slice(0, 3).map((p) => (
              <Link
                href={`/product/${p.id}`}
                key={p.id}
                className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="mt-2 font-semibold">{p.name}</h3>
                <p className="font-bold text-secondary2">₹{p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
