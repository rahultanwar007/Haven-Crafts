// src/components/ContactSection.tsx
"use client";

import Image from "next/image";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from 'sonner'
import { useEffect } from "react";

const contactInfo = [
  {
    label: "Phone",
    value: process.env.NEXT_PUBLIC_PHONE_NUMBER,
    icon: MdOutlineLocalPhone,
    href: `tel:+91${process.env.NEXT_PUBLIC_PHONE_NUMBER}`,
  },
  {
    label: "Email",
    value: process.env.NEXT_PUBLIC_EMAIL,
    icon: IoIosMail,
    href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
  },
  {
    label: "WhatsApp",
    value: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
    icon: IoLogoWhatsapp,
    href: `https://wa.me/+91${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`,
  },
  {
    label: "Address",
    value: "Haven Crafts, Dharampur",
    icon: IoLocation,
    href: process.env.NEXT_PUBLIC_ADDRESS,
  },
];

function ContactForm() {
  const [state, handleSubmit] = useForm("mwpnopgl");

  useEffect(() => {
      if (state.succeeded) {
      toast.success("Thanks for reaching out! We’ll get back to you soon.")
  }
  }, [state.succeeded])
  

  return (
    <form
      className="space-y-6 p-8 shadow-lg rounded bg-white"
      onSubmit={handleSubmit}
      action={"https://formspree.io/f/mwpnopgl"}
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder="Write your message..."
          className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-ocean text-white py-3 rounded-md hover:bg-ocean/90 transition"
        disabled={state.submitting}
      >
        Send Message
      </button>
    </form>
  );
}

export default function ContactSection() {
  return (
    <section className="w-full mt-14 md:mt-0">
      {/* Hero Banner */}
      <div className="relative w-full h-60 overflow-hidden shadow-inner bg-gradient-to-r from-ocean to-green">
        {/* <Image
          src="/images/CTA-image.png"
          alt="Contact Banner"
          fill
          className="object-cover"
        /> */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            We’d love to hear from you
          </h1>
          <p className="text-white/80 mt-2 text-lg">
            Reach out to us anytime — we’re here to help.
          </p>
        </div>
      </div>

      {/* Contact Info Grid */}
      <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {contactInfo.map(({ label, value, icon: Icon, href }) => (
          <a
            href={href}
            key={label}
            className="flex flex-col items-center p-6 rounded shadow-md md:hover:-translate-y-1.5 border bg-white transition-all"
          >
            <Icon className="w-8 h-8 text-ocean mb-3" />
            <h3 className="font-semibold text-lg">{label}</h3>
            {href ? (
              <span className="text-gray-600 mt-1 break-words text-center">
                {value}
              </span>
            ) : (
              <p className="text-gray-600 mt-1 text-center">{value}</p>
            )}
          </a>
        ))}
      </div>

      {/* Contact Form */}
      <div className="my-16 w-[90%] max-w-3xl mx-auto">
        <ContactForm />
      </div>
    </section>
  );
}
