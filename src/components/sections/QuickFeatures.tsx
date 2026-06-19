"use client";

import { Zap, Sparkles, MousePointerClick } from "lucide-react";
import Reveal from "@/components/Reveal";

const features = [
  {
    icon: Zap,
    title: "Carga Acelerada",
    description: "Usamos tecnología SSD para obtener velocidades de carga superiores.",
  },
  {
    icon: Sparkles,
    title: "Dinámico",
    description: "Tus clientes disfrutarán descubrir tu web.",
  },
  {
    icon: MousePointerClick,
    title: "Editables",
    description: "Puedes expandir y editar libremente tus artículos arrastrando y soltando.",
  },
];

export default function QuickFeatures() {
  return (
    <section className="relative -mt-16 bg-transparent px-6">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
        {features.map((feature, i) => (
          <Reveal key={feature.title} delay={i * 0.1}>
            <div className="rounded-2xl bg-white p-8 text-center shadow-xl shadow-black/10">
              <feature.icon className="mx-auto h-10 w-10 text-primary" />
              <h3 className="mt-4 text-lg font-bold">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
