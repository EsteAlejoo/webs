"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const plans = ["Emprende", "PYME", "Personalizada", "No estoy seguro"];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch("https://formspree.io/f/xdkgojka", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="bg-primary px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            ¿Qué esperas? Ten tu propia página web aquí
          </h2>
          <span className="section-underline mx-auto mt-4" />
        </Reveal>

        <Reveal delay={0.1}>
          {status === "sent" ? (
            <p className="mt-10 rounded-2xl bg-white/10 p-8 text-white">
              ¡Gracias! Recibimos tu solicitud, te contactaremos a la brevedad.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-4 text-left">
              <input
                required
                name="nombre"
                type="text"
                placeholder="Nombre"
                className="w-full rounded-full border-2 border-transparent bg-white px-5 py-3 text-sm focus:border-accent focus:outline-none"
              />
              <input
                required
                name="email"
                type="email"
                placeholder="Correo electrónico"
                className="w-full rounded-full border-2 border-transparent bg-white px-5 py-3 text-sm focus:border-accent focus:outline-none"
              />
              <input
                required
                name="telefono"
                type="tel"
                placeholder="Número móvil"
                className="w-full rounded-full border-2 border-transparent bg-white px-5 py-3 text-sm focus:border-accent focus:outline-none"
              />
              <select
                required
                name="plan"
                defaultValue=""
                className="w-full rounded-full border-2 border-transparent bg-white px-5 py-3 text-sm focus:border-accent focus:outline-none"
              >
                <option value="" disabled>
                  ¿Qué plan te interesa?
                </option>
                {plans.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              <textarea
                name="mensaje"
                placeholder="Cuéntanos brevemente tu idea (opcional)"
                rows={3}
                className="w-full rounded-2xl border-2 border-transparent bg-white px-5 py-3 text-sm focus:border-accent focus:outline-none"
              />
              {status === "error" && (
                <p className="text-sm text-red-200">
                  Hubo un error al enviar. Escríbenos directo a crea@quillay.cl
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-full bg-accent px-6 py-3 font-bold text-white transition-transform hover:scale-[1.02] disabled:opacity-60"
              >
                {status === "sending" ? "Enviando…" : "¡Quiero mi Sitio web!"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
