"use client";

import { ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";

const projects = [
  { name: "beTOURS", sector: "Turismo", color: "#7c1d1d", url: "#" },
  { name: "MARAservicios", sector: "Agro", color: "#2f6b3a", url: "#" },
  { name: "ELECCOV", sector: "Energía renovable", color: "#1b4d6b", url: "#" },
  { name: "RadioSerena", sector: "Radio online", color: "#6b1b2b", url: "#" },
  { name: "NRingenieria", sector: "Ingeniería", color: "#2b2b3a", url: "#" },
  { name: "Vivero Teresita", sector: "Plantas y jardín", color: "#3a7048", url: "#" },
  { name: "ANROS", sector: "Asesorías agronómicas", color: "#3a2d2d", url: "#" },
  { name: "Entre-Valles", sector: "Frutas y vinos", color: "#6b2d4d", url: "#" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            ¿Cómo se ven nuestros diseños?
          </h2>
          <span className="section-underline mx-auto mt-4" />
          <p className="mt-4 text-gray-500">
            Estas son las webs de los clientes que confiaron en nuestros servicios:
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={(i % 4) * 0.08}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-xl shadow-md transition-shadow hover:shadow-xl"
              >
                <div
                  className="flex h-36 items-center justify-center text-lg font-bold text-white"
                  style={{ backgroundColor: project.color }}
                >
                  {project.name}
                </div>
                <div className="flex items-center justify-between bg-soft px-4 py-3">
                  <span className="text-sm text-gray-600">{project.sector}</span>
                  <ExternalLink className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
