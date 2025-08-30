// src/components/MobileHeroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MobileHeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-secondary2 to-secondary2/20 lg:hidden pt-20">
      <div className="mx-auto max-w-md px-6 py-12 flex flex-col items-center space-y-2">
        {/* Brand Intro */}
        <motion.div
          className="text-center gap-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-sm text-gray-100 capitalize">
            welcome to{" "}
            <strong className="uppercase font-bold">haven crafts</strong>
          </h1>
          <div>
            <p className="text-2xl font-bold uppercase text-white">
              Crafting Comfort,
            </p>
            <p className="text-2xl font-bold uppercase text-white">
              Defining Style
            </p>
          </div>
        </motion.div>

        {/* Furniture Image */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <Image
            src="/images/furniture-hero.png"
            alt="Modern Furniture"
            width={400}
            height={350}
            className="object-contain drop-shadow-xl -mt-10"
          />
        </motion.div>

        {/* CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <Link
            href="/products"
            className="bg-[#676463] hover:bg-[#676463]/80 text-sm transition text-center tracking-wide text-white px-6 py-3 rounded uppercase shadow-md"
          >
            explore collection
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
