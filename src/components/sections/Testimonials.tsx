"use client";

import { Star } from "lucide-react";
import Reveal from "@/components/Reveal";

const testimonials = [
  {
    name: "Marcela Fuentes",
    business: "Vivero Teresita",
    quote:
      "Quillay nos entregó un sitio rápido y fácil de actualizar. Las consultas por WhatsApp aumentaron desde el primer mes.",
  },
  {
    name: "Rodrigo Soto",
    business: "NR Ingeniería",
    quote:
      "El equipo entendió exactamente lo que necesitábamos. Soporte rápido y siempre dispuestos a hacer ajustes.",
  },
  {
    name: "Daniela Rojas",
    business: "Entre-Valles",
    quote:
      "Profesionales y atentos a cada detalle. Nuestra web ahora refleja realmente la calidad de nuestros productos.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Lo que dicen nuestros clientes</h2>
          <span className="section-underline mx-auto mt-4" />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="h-full rounded-2xl bg-soft p-6 shadow-sm">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-4 text-sm text-gray-600">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-bold">{t.name}</p>
                <p className="text-xs text-gray-400">{t.business}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
