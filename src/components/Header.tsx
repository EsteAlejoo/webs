"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#planes", label: "Planes" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#inicio"
          className={`text-xl font-extrabold tracking-tight ${
            scrolled ? "text-primary" : "text-white"
          }`}
        >
          Quillay
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-accent ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden rounded-full bg-accent px-5 py-2 text-sm font-bold text-white shadow-md transition-transform hover:scale-105 lg:inline-block"
        >
          Cotiza gratis
        </a>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className={`flex flex-col gap-1.5 lg:hidden ${scrolled ? "text-primary" : "text-white"}`}
        >
          <span className="block h-0.5 w-7 bg-current" />
          <span className="block h-0.5 w-7 bg-current" />
          <span className="block h-0.5 w-7 bg-current" />
        </button>
      </nav>

      {open && (
        <div className="bg-white px-6 pb-6 shadow-lg lg:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-semibold text-foreground hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-accent px-5 py-2 text-sm font-bold text-white"
              >
                Cotiza gratis
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
