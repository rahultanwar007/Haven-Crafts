// app/components/DesktopMenu.tsx
import NavLinks from "./NavLink";

export function DesktopMenu({ pathname }: { pathname: string }) {
  return (
    <nav className="hidden md:block" aria-label="Main">
      <NavLinks pathname={pathname} orientation="desktop" />
    </nav>
  );
}


interface Props {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  pathname: string;
}

export function MobileMenu({ menuOpen, setMenuOpen, pathname }: Props) {
  return (
    <div
      id="mobile-menu"
      className={[
        "md:hidden fixed left-0 right-0 top-14 origin-top transition-all duration-300 ease-out",
        menuOpen
          ? "opacity-100 translate-y-0"
          : "pointer-events-none opacity-0 -translate-y-2",
      ].join(" ")}
      aria-hidden={!menuOpen}
    >
      <div
        className={[
          "absolute inset-0 -z-10 transition-opacity duration-300",
          menuOpen ? "opacity-100" : "opacity-0",
        ].join(" ")}
        onClick={() => setMenuOpen(false)}
      />

      <div className="w-full border border-black/5 bg-white/80 backdrop-blur-md shadow-lg">
        <NavLinks
          pathname={pathname}
          orientation="mobile"
          onClick={() => setMenuOpen(false)}
        />
      </div>
    </div>
  );
}
