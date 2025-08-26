"use client";

import { useState } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { productsByCategory } from "@/data/products"; // Import dataset for recommendations

interface ProductDetailsProps {
  product: {
    id: string;
    title: string;
    name: string;
    price: number;
    mainImage: string;
    subImages: string[];
    description: string;
  };
}

const allProducts = Object.values(productsByCategory).flat();

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const allImages = [product.mainImage, ...product.subImages];

  // WhatsApp pre-written message
  const whatsappMessage = encodeURIComponent(
    `Hi, I’m interested in your product: ${product.name}. Could you provide more details?`
  );

  // Filter recommended products (exclude current product, show 3 random ones)
  const recommendedProducts = allProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto p-6 my-16">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Images Carousel */}
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 uppercase text-dark">
            {product.title}
          </h1>

          <Carousel
            selectedItem={selectedIndex}
            onChange={setSelectedIndex}
            showArrows
            showThumbs
            thumbWidth={70}
            showIndicators={false}
            showStatus={false}
            emulateTouch
            className="mb-4"
            renderThumbs={() =>
              allImages.map((imgSrc, idx) => (
                <Image
                  key={idx}
                  src={imgSrc}
                  alt={`Thumbnail ${idx + 1}`}
                  width={70}
                  height={70}
                  className="cursor-pointer object-contain rounded"
                />
              ))
            }
          >
            {allImages.map((imgSrc, idx) => (
              <div key={idx} className="flex justify-start">
                <Image
                  src={imgSrc}
                  alt={`Product image ${idx + 1}`}
                  width={500}
                  height={500}
                  className="object-contain rounded"
                  priority={idx === 0}
                />
              </div>
            ))}
          </Carousel>

          {/* Price */}
          <p className="text-xl md:text-2xl font-semibold text-accent">
            ₹{product.price}
          </p>
        </div>

        {/* Right: Product Details */}
        <div className="md:w-1/2 md:mt-11 flex flex-col gap-6">
          {/* Product Name */}
          <h2 className="text-lg font-bold text-primary">{product.name}</h2>

          {/* Description */}
          <p className="text-base text-dark leading-relaxed">
            {product.description}
          </p>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/919876543210?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-secondary/90 text-primary/90 px-5 py-3 rounded-lg font-medium hover:bg-secondary hover:text-primary transition"
            aria-label={`Ask about this product ${product.name} on WhatsApp`}
          >
            <FaWhatsapp className="text-xl" />
            Ask about this product
          </a>

          {/* Social Media Links */}
          <div>
            <h3 className="font-semibold mb-2">Follow HavenCrafts:</h3>
            <div className="flex gap-4 text-2xl text-gray-600">
              <a
                href="https://facebook.com/HavenCrafts"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/HavenCrafts"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-500"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com/HavenCrafts"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Products Section */}
      <div className="mt-16">
        <h3 className="text-xl font-bold mb-6">You may also like</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {recommendedProducts.map((rec) => (
            <Link
              key={rec.id}
              href={`/product/${rec.id}`}
              className="group block rounded-lg overflow-hidden shadow-lg transition"
            >
              <div className="relative w-full h-64">
                <Image
                  src={rec.image}
                  alt={rec.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold">{rec.name}</h4>
                <p className="text-accent font-medium">₹{rec.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
