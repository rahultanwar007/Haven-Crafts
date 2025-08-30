"use client";
import { useState, useEffect } from "react";
import SearchBar from "../SearchBar";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function DesktopNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`hidden md:flex fixed top-0 left-0 z-50 w-full h-[55px] transition-colors duration-300 ${
        scrolled ? "bg-white shadow" : "bg-transparent shadow-none"
      }`}
    >
      <div className="w-[90%] h-full mx-auto flex justify-between items-center">
        {/* Logo */}
      <div className="text-2xl font-extrabold select-none cursor-default uppercase bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        HavenCrafts
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-10 text-primary font-semibold capitalize">
        {navLinks.map(({ name, href }) => (
          <li key={name}>
            <a
              href={href}
              className="text-primary hover:text-secondary2 transition-colors"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>

      {/* Search Bar */}
      <div className="w-80">
        <SearchBar />
      </div>
      </div>
    </nav>
  );
}
