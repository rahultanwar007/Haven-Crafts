// components/CTASection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full bg-secondary2/90 py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 items-center">
        
        {/* Left Side: Text + Button */}
        <div className="flex flex-col gap-6">
          <h2 className="text-md md:text-4xl text-center md:text-left font-bold text-white leading-snug">
            &ldquo; Crafted with care, our designs bring modern comfort and homely warmth
            into every corner of your space. &rdquo;
          </h2>
          <Link
            href="/products"
            className="hidden md:inline-block bg-green hover:bg-green/80 text-md transition text-center tracking-wide text-white px-6 py-3 max-w-3xs rounded uppercase shadow-md"
          >
            Shop Now
          </Link>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center">
          <Image
            src="/images/CTA-image.png"
            alt="Modern Furniture"
            width={300}
            height={150}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
