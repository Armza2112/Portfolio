"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={`px-4 py-2 hover:text-[var(--clr-orange)] ${
        pathname === href ? "border-b-2 border-[var(--clr-orange)] font-semibold" : ""
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header>
      <nav className="max-w-auto mx-auto flex justify-between items-center">
        <div className="text-[var(--clr-white)] text-[length:var(--size-base)]">Cheewanont Chamnanrob</div>
        <div className="space-x-5 text-[color:var(--clr-white)] text-[length:var(--size-base)]">
          {navLink("/", "Home")}
          {navLink("/AboutScreen", "About")}
          {navLink("/projects", "Projects")}
          {navLink("/contact", "Contact")}
        </div>
      </nav>
    </header>
  );
}
