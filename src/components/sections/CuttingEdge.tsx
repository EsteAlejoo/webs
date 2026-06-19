"use client";

import { Gauge, Layout, MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";

const items = [
  {
    icon: Gauge,
    title: "Carga acelerada",
    description: "Opción Modo TURBO con tecnología Accelerated Mobile Pages (AMP).",
  },
  {
    icon: Layout,
    title: "Sitios One Page",
    description: "Da a conocer de manera profesional tu organización con un sitio sencillo pero potente.",
  },
  {
    icon: MessageCircle,
    title: "Chat por WhatsApp",
    description: "Cierra ventas respondiéndole al instante a tus clientes.",
  },
];

export default function CuttingEdge() {
  return (
    <section className="bg-soft px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Destaca tu web, con funciones de vanguardia
          </h2>
          <span className="section-underline mx-auto mt-4" />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="rounded-2xl bg-primary p-8 text-center text-white shadow-lg">
                <item.icon className="mx-auto h-10 w-10" />
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/85">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
