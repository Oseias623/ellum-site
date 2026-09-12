"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/metodologia", label: "Metodologia" },
  { href: "/matriculas", label: "Matrículas" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-gold.png"
              alt="ELLUM - Escola Cristã Clássica"
              width={52}
              height={52}
              className="h-[52px] w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/80 tracking-wide hover:text-gold transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href="/matriculas"
            className="hidden md:flex items-center px-6 py-2.5 bg-gold text-navy font-semibold text-[15px] rounded-full hover:bg-gold-soft transition-colors"
          >
            Conheça a proposta
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-sm font-medium text-white/80 tracking-wide hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/matriculas"
              className="block mt-4 py-3 px-6 bg-gold text-navy text-center font-semibold text-sm rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Conheça a proposta
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
