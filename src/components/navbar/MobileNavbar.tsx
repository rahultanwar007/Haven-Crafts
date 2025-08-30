"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import SearchBar from "../SearchBar";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10); // Adjust threshold as needed
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={`md:hidden w-full h-[65px] fixed top-0 left-0 z-30 transition-colors duration-300 ${
        scrolled ? "bg-white shadow" : "bg-transparent shadow-none"
      }`}
    >
      <div className="w-[90%] h-full mx-auto flex items-center justify-between gap-3">
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="text-2xl text-primary bg-white rounded-lg px-1.5 py-2 cursor-pointer"
        >
          <FiMenu />
        </button>
        <div className="w-full h-full flex justify-center items-center">
          <SearchBar />
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute top-0 left-0 w-4/5 max-w-xs h-full bg-white flex flex-col p-6 gap-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="self-end text-2xl text-gray-700"
              aria-label="Close menu"
            >
              <FiX />
            </button>
            <div className="font-extrabold text-2xl mb-4 uppercase bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              HavenCrafts
            </div>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg text-primary font-medium hover:text-secondary2 transition"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}
