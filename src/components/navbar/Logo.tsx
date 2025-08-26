// app/components/NavbarLogo.tsx
import Link from "next/link";

export default function NavbarLogo() {
  return (
    <Link
      href="/"
      className="text-xl font-bold uppercase bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
      aria-label="HavenCraft Home"
    >
      HavenCraft
    </Link>
  );
}
