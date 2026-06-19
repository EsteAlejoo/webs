"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-primary pb-32 pt-36 lg:pt-44"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Páginas web
            <br />
            personalizadas
          </h1>
          <span className="section-underline mt-5" />
          <p className="mt-6 max-w-md text-lg text-white/90">
            En Quillay.cl diseñamos modernos sitios web a medida, para
            destacar tu pyme.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="rounded-full bg-accent px-7 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105"
            >
              Quiero mi sitio web
            </a>
            <a
              href="#portfolio"
              className="rounded-full border-2 border-white/60 px-7 py-3 font-bold text-white transition-colors hover:bg-white/10"
            >
              Ver portfolio
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden>
            <rect x="40" y="60" width="320" height="220" rx="16" fill="#ffffff" opacity="0.08" />
            <rect x="60" y="80" width="280" height="160" rx="10" fill="#ffffff" opacity="0.15" />
            <path
              d="M90 200 L150 150 L190 190 L260 110"
              stroke="#F5A623"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="90" cy="200" r="7" fill="#F5A623" />
            <circle cx="150" cy="150" r="7" fill="#F5A623" />
            <circle cx="190" cy="190" r="7" fill="#F5A623" />
            <circle cx="260" cy="110" r="7" fill="#F5A623" />
            <circle cx="120" cy="320" r="34" fill="#ffffff" opacity="0.9" />
            <circle cx="120" cy="305" r="14" fill="#4B3BC5" />
            <rect x="98" y="322" width="44" height="26" rx="13" fill="#4B3BC5" />
            <circle cx="280" cy="320" r="34" fill="#ffffff" opacity="0.9" />
            <circle cx="280" cy="305" r="14" fill="#4B3BC5" />
            <rect x="258" y="322" width="44" height="26" rx="13" fill="#4B3BC5" />
          </svg>
        </motion.div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full text-white"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64 C360,160 1080,0 1440,72 L1440,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
