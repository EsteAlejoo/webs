"use client";

import { HeartHandshake, LifeBuoy, RefreshCw, Video } from "lucide-react";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";

const items = [
  {
    icon: HeartHandshake,
    title: "Asesoría Gratis",
    description: "Cuéntanos tu idea y juntos podremos transformarla en un sólido proyecto.",
  },
  {
    icon: LifeBuoy,
    title: "Soporte técnico",
    description: "Estamos a un clic de distancia para resolver tus inquietudes.",
  },
  {
    icon: RefreshCw,
    title: "Modificaciones y actualizaciones",
    description: "Si necesitas un cambio extra, podemos hacerlo por ti.",
  },
  {
    icon: Video,
    title: "Video Chat",
    description: "Si necesitas apoyo, podemos coordinar una reunión virtual personalizada.",
  },
];

const stats = [
  { value: 10, suffix: "+", label: "Años de experiencia" },
  { value: 80, suffix: "+", label: "Proyectos entregados" },
  { value: 100, suffix: "%", label: "Soporte personalizado" },
];

export default function Experience() {
  return (
    <section id="nosotros" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-extrabold leading-snug sm:text-4xl">
            Contamos con más de 10 años de experiencia dando servicios en el
            área tecnológica
          </h2>
          <span className="section-underline mt-4 w-full max-w-3xl" />
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <Reveal key={stat.label} className="text-center">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-1 text-sm font-semibold text-gray-500">{stat.label}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <item.icon className="h-9 w-9 text-primary" />
              <h3 className="mt-4 font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
