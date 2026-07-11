"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Projects", href: "/#projects" },
  { label: "Research", href: "/#research" },
  { label: "Coursework", href: "/coursework" },
  { label: "Contact", href: "/#contact" }
];

export function SiteTopBar() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <nav className="site-topbar fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-ink/92 text-white shadow-panel backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between gap-5">
        <Link
          href="/"
          className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-0.5 hover:text-illiniOrange"
        >
          NM
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative overflow-hidden rounded-[8px] px-3 py-2 text-sm font-semibold text-white/72 transition duration-300 after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-illiniOrange after:transition-transform after:duration-300 hover:-translate-y-0.5 hover:bg-white/8 hover:text-white hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
