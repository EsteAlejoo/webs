"use client";

import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";

const plans = [
  {
    badge: "OFERTA",
    name: "Emprende",
    audience: "Recomendado para emprendedores y microempresas",
    price: "$15.000",
    period: "Mensual",
    features: [
      "Hosting",
      "Sitio One Page",
      "Correcciones ilimitadas",
      "Correos electrónicos",
      "Firma personalizada",
      "Enlace a redes sociales",
      "Soporte técnico personalizado",
    ],
    highlight: false,
  },
  {
    badge: "FAVORITO",
    name: "PYME",
    audience: "Recomendado para PYMES",
    price: "$50.000",
    period: "Mensual",
    features: [
      "Branding básico",
      "Hosting y dominio",
      "Sitio web personalizado",
      "Correcciones ilimitadas",
      "Correos electrónicos",
      "Firmas personalizadas",
      "Redes sociales*",
      "Actualizaciones**",
      "Respaldos",
      "Soporte técnico personalizado",
    ],
    highlight: true,
  },
  {
    badge: "PRO",
    name: "Personalizada",
    audience: "Recomendado para proyectos y beneficiarios SERCOTEC",
    price: "$360.000",
    period: "Pago único, desde",
    features: [
      "Hosting (1 año)",
      "Dominio (1 año)",
      "Sitio web personalizado",
      "Correcciones ilimitadas",
      "Correos electrónicos",
      "Firma para correos",
      "Respaldos",
      "Soporte técnico personalizado",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="planes" className="bg-soft px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">¿Cómo podemos ayudarte?</h2>
          <span className="section-underline mx-auto mt-4" />
          <p className="mt-4 text-gray-500">
            Elige el plan más adecuado o contáctate con nosotros para obtener una
            cotización gratuita y sin compromiso.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-2xl bg-white p-8 shadow-md ${
                  plan.highlight ? "border-2 border-primary shadow-xl lg:scale-105" : ""
                }`}
              >
                <span
                  className={`absolute -top-3 right-6 rounded-full px-3 py-1 text-xs font-bold text-white ${
                    plan.highlight ? "bg-primary" : "bg-accent"
                  }`}
                >
                  {plan.badge}
                </span>
                <h3 className="text-xl font-extrabold">{plan.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{plan.audience}</p>
                <p className="mt-6">
                  <span className="text-3xl font-extrabold text-primary">{plan.price}</span>
                  <span className="ml-1 text-sm text-gray-500">/ {plan.period}</span>
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 rounded-full bg-primary/10 p-0.5 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className={`mt-8 inline-block rounded-full px-6 py-3 text-center text-sm font-bold text-white transition-transform hover:scale-105 ${
                    plan.highlight ? "bg-primary" : "bg-accent"
                  }`}
                >
                  Quiero este plan
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          *Publicaciones conjuntas en Instagram, Facebook. **Hasta 4
          actualizaciones mensuales en sitio web o redes sociales.
        </p>
      </div>
    </section>
  );
}
