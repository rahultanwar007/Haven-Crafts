"use client";

import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
      <div className="md:h-[55px] bg-secondary md:bg-white"></div>
    </>
  );
}
