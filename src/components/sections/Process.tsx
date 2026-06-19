"use client";

import Reveal from "@/components/Reveal";

const steps = [
  { number: "01", title: "Cuéntanos tu idea", description: "Conversamos sobre tu negocio, objetivos y público." },
  { number: "02", title: "Propuesta y diseño", description: "Creamos una propuesta visual a medida, sin plantillas." },
  { number: "03", title: "Desarrollo", description: "Construimos tu sitio optimizado para velocidad y SEO." },
  { number: "04", title: "Lanzamiento y soporte", description: "Publicamos tu web y te acompañamos con soporte continuo." },
];

export default function Process() {
  return (
    <section className="bg-soft px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">¿Cómo trabajamos?</h2>
          <span className="section-underline mx-auto mt-4" />
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1}>
              <div className="rounded-2xl bg-white p-6 shadow-md">
                <span className="text-3xl font-extrabold text-accent">{step.number}</span>
                <h3 className="mt-3 font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
