"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const services = [
  { href: "/individualne-seanse", label: "Individualne seanse" },
  { href: "/zajednica-mama", label: "Zajednica mama" },
  { href: "/paket-podrske", label: "Paket podrške" },
  { href: "/radionice", label: "Radionice" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isServicePage = services.some((s) => pathname === s.href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Vladana Stanković"
            width={70}
            height={70}
            className=""
            priority
          />
          <span className="font-serif text-2xl text-charcoal font-medium tracking-wide hidden sm:block">
            Vladana Stanković
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              href="/o-meni"
              className={`font-sans text-sm transition-colors tracking-wide ${
                pathname === "/o-meni" ? "text-sage" : "text-muted hover:text-sage"
              }`}
            >
              O meni
            </Link>
          </li>

          <li ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className={`font-sans text-sm transition-colors tracking-wide flex items-center gap-1 ${
                isServicePage ? "text-sage" : "text-muted hover:text-sage"
              }`}
            >
              Usluge
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-2xl shadow-lg border border-sand-light py-2 overflow-hidden">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setServicesOpen(false)}
                    className={`block px-5 py-3 font-sans text-sm transition-colors ${
                      pathname === s.href
                        ? "text-sage bg-sage/5"
                        : "text-charcoal hover:bg-cream hover:text-sage"
                    }`}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li>
            <Link
              href="/#kontakt"
              className="font-sans text-sm text-muted hover:text-sage transition-colors tracking-wide"
            >
              Kontakt
            </Link>
          </li>

          <li>
            <Link
              href="/#kontakt"
              className="font-sans text-sm bg-sage text-white px-6 py-2.5 rounded-full hover:bg-sage-dark transition-colors"
            >
              Zakaži sesiju
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Otvori meni"
          className="md:hidden flex flex-col gap-1.5 p-1"
        >
          <span className={`block w-6 h-0.5 bg-charcoal transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 bg-charcoal transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-charcoal transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-sand-light px-6 py-6 flex flex-col gap-1">
          <Link
            href="/o-meni"
            onClick={() => setOpen(false)}
            className="font-sans text-charcoal hover:text-sage transition-colors py-2"
          >
            O meni
          </Link>

          <div>
            <button
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="w-full flex items-center justify-between font-sans text-charcoal hover:text-sage transition-colors py-2"
            >
              Usluge
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {mobileServicesOpen && (
              <div className="pl-4 border-l-2 border-sand ml-1 mb-1 flex flex-col gap-1">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => { setOpen(false); setMobileServicesOpen(false); }}
                    className={`font-sans text-sm py-2 transition-colors ${
                      pathname === s.href ? "text-sage" : "text-muted hover:text-sage"
                    }`}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/#kontakt"
            onClick={() => setOpen(false)}
            className="font-sans text-charcoal hover:text-sage transition-colors py-2"
          >
            Kontakt
          </Link>

          <Link
            href="/#kontakt"
            onClick={() => setOpen(false)}
            className="inline-block w-fit bg-sage text-white font-sans text-sm px-6 py-2.5 rounded-full hover:bg-sage-dark transition-colors mt-2"
          >
            Zakaži sesiju
          </Link>
        </div>
      )}
    </header>
  );
}
