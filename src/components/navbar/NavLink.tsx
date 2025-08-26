// app/components/NavLinks.tsx
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Armchair, Phone, Users } from "lucide-react";

type NavLink = {
  id: string;
  title: string;
  href: string;
  icon: LucideIcon;
};

const LINKS: NavLink[] = [
  { id: "GC1", title: "products", href: "/products", icon: Armchair },
  { id: "GC2", title: "about", href: "/about", icon: Users },
  { id: "GC3", title: "contact", href: "/contact", icon: Phone },
];

interface Props {
  pathname: string;
  orientation: "desktop" | "mobile";
  onClick?: () => void;
}

export default function NavLinks({ pathname, orientation, onClick }: Props) {
  return (
    <ul
      className={
        orientation === "desktop"
          ? "flex items-center gap-8"
          : "flex flex-col items-center gap-6 py-5"
      }
    >
      {LINKS.map(({ id, title, href, icon: Icon }) => {
        const isActive = pathname === href;
        return (
          <li key={id} className={orientation === "mobile" ? "w-full" : ""}>
            <Link
              href={href}
              onClick={onClick}
              className={[
                "flex items-center gap-2 text-sm underline-offset-6 transition-colors",
                orientation === "mobile" && "mx-auto w-[92%] justify-center py-3 rounded-xl",
                isActive
                  ? "text-primary underline"
                  : "text-dark hover:text-primary",
              ].join(" ")}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon size={18} />
              <span className="capitalize">{title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
