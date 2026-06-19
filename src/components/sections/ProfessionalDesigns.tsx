"use client";

import { Brush, Maximize } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function ProfessionalDesigns() {
  return (
    <section id="servicios" className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div>
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
              Modernos diseños de páginas web profesionales
            </h2>
            <span className="section-underline mt-4" />

            <div className="mt-10 space-y-8">
              <div className="flex gap-4">
                <Brush className="h-8 w-8 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-bold">Personalizado</h3>
                  <p className="mt-1 text-gray-500">
                    Sin plantillas, te ofrecemos una web única.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Maximize className="h-8 w-8 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-bold">Adaptables</h3>
                  <p className="mt-1 text-gray-500">
                    Para ser vistas desde smartphones, tablet o PC.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <svg viewBox="0 0 400 300" className="mx-auto w-full max-w-md" aria-hidden>
            <rect x="30" y="20" width="240" height="160" rx="10" fill="#4B3BC5" opacity="0.1" />
            <rect x="50" y="40" width="200" height="120" rx="6" fill="#4B3BC5" opacity="0.2" />
            <rect x="270" y="90" width="60" height="100" rx="8" fill="#4B3BC5" opacity="0.3" />
            <rect x="100" y="200" width="120" height="80" rx="10" fill="#F5A623" opacity="0.15" />
            <circle cx="160" cy="240" r="20" fill="#F5A623" opacity="0.4" />
          </svg>
        </Reveal>
      </div>
    </section>
  );
}
