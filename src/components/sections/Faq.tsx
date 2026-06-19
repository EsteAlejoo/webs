"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "@/components/Reveal";

const faqs = [
  {
    question: "¿Cuánto tiempo toma tener mi sitio web listo?",
    answer:
      "Dependiendo del plan, entre 5 y 15 días hábiles desde que recibimos tus contenidos.",
  },
  {
    question: "¿Necesito tener mi dominio antes de empezar?",
    answer:
      "No es necesario. Si no tienes uno, te ayudamos a elegirlo y a registrarlo.",
  },
  {
    question: "¿Puedo cambiar de plan más adelante?",
    answer:
      "Sí, puedes mejorar tu plan en cualquier momento sin perder tu información.",
  },
  {
    question: "¿El sitio se ve bien en celular?",
    answer:
      "Todos nuestros sitios son 100% responsivos: se adaptan a smartphones, tablets y PC.",
  },
  {
    question: "¿Qué pasa si necesito ayuda después de publicar el sitio?",
    answer:
      "Todos los planes incluyen soporte técnico personalizado por WhatsApp, correo o videollamada.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Preguntas frecuentes</h2>
          <span className="section-underline mx-auto mt-4" />
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 0.05}>
              <div className="overflow-hidden rounded-xl bg-soft">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold"
                  aria-expanded={open === i}
                >
                  {faq.question}
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-primary transition-transform ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open === i && (
                  <p className="px-5 pb-4 text-sm text-gray-600">{faq.answer}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
