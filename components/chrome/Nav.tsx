"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/primitives/Logo";
import { Cta } from "@/components/primitives/Cta";

const links = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#lifecycle" },
  { label: "For carriers", href: "#audience" },
  { label: "For dispatchers", href: "#verdicts" },
  { label: "Resources", href: "#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled || open
            ? "border-b border-line bg-paper/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="shell flex h-[68px] items-center justify-between" aria-label="Primary">
          <a href="#top" className="-m-2 p-2" aria-label="ValleOS home">
            <Logo />
          </a>

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-[0.9375rem] font-medium tracking-[-0.01em] text-ink-55 transition-colors duration-200 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#demo"
              className="rounded-full px-3.5 py-2 text-[0.9375rem] font-medium tracking-[-0.01em] text-ink-55 transition-colors duration-200 hover:text-ink"
            >
              Sign in
            </a>
            <Cta href="#demo">Get a demo</Cta>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="-mr-2 flex size-10 items-center justify-center rounded-full text-ink md:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-3 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 block h-[1.5px] w-5 bg-current transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open ? "top-[5px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-5 bg-current transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open ? "top-[5px] -rotate-45" : "top-[10px]"
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 z-40 bg-paper pt-[68px] md:hidden"
      >
        <div className="shell flex h-full flex-col pb-10 pt-8">
          <ul className="flex flex-col">
            {links.map((link, i) => (
              <li key={link.href} className="border-b border-line-2">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="anim-rise block py-4 text-[1.75rem] font-semibold tracking-[-0.03em] text-ink"
                  style={{ animationDelay: `${i * 45}ms` }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3 pt-8">
            <Cta href="#demo" size="lg" className="w-full" arrow>
              Get a demo
            </Cta>
            <Cta href="#demo" variant="ghost" size="lg" className="w-full">
              Sign in
            </Cta>
          </div>
        </div>
      </div>
    </>
  );
}
