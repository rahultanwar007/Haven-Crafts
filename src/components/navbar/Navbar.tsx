// app/components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import NavbarLogo from "./Logo";
import { DesktopMenu, MobileMenu } from "./NavMenu";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Desktop: blur only after scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile: lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close on route change
  useEffect(() => setMenuOpen(false), [pathname]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 h-14 transition-all duration-300",
          scrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-transparent",
          menuOpen ? "md:bg-inherit bg-transparent backdrop-blur-md shadow-md" : "",
        ].join(" ")}
      >
        <div className="mx-auto flex h-full w-[90%] items-center justify-between">
          <NavbarLogo />

          <DesktopMenu pathname={pathname} />

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle main menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} pathname={pathname} />
      </header>

      {/* Spacer for fixed navbar height */}
      <div className="md:h-14" />
    </>
  );
}
