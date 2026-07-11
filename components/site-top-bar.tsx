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
          className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:text-teal"
        >
          NM
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-[8px] px-3 py-2 text-sm font-semibold text-white/72 transition hover:bg-white/8 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
