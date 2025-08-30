// src/components/WhatsAppCTA.tsx
"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppCTA() {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER; // Replace with your WhatsApp number
  const message = encodeURIComponent(
    "Hello, I would like to customize a product of my choice. Can you help me?"
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section className="my-10 w-full bg-gradient-to-r from-ocean to-green text-white shadow-lg p-3 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Text Content */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-xl md:text-2xl font-semibold">
            Want a customized product?
          </h2>
          <p className="text-sm md:text-base">
            If you have something special in mind, we can help you design and
            customize the furniture to fit your style.
          </p>
        </div>

        {/* WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-ocean px-6 py-2 rounded font-medium shadow hover:bg-gray-100 transition"
        >
          <FaWhatsapp size={22} />
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}
