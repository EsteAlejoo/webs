import { Mail, MessageCircle, Phone } from "lucide-react";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=56934550778&text=Hola,%20quiero%20cotizar%20mi%20p%C3%A1gina%20web";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary px-6 py-16 text-center text-white">
      <div className="relative z-10">
        <h2 className="text-3xl font-extrabold">Quillay</h2>
        <p className="mt-1 text-sm font-semibold tracking-widest text-white/80">
          SOLUCIONES INTEGRALES
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/40 transition-colors hover:bg-white/10"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <a
            href="tel:+56934550778"
            aria-label="Teléfono"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/40 transition-colors hover:bg-white/10"
          >
            <Phone className="h-5 w-5" />
          </a>
          <a
            href="mailto:crea@quillay.cl"
            aria-label="Email"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/40 transition-colors hover:bg-white/10"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <p className="mt-6 text-sm text-white/80">crea@quillay.cl</p>
        <p className="mt-8 text-xs text-white/50">
          © {new Date().getFullYear()} Quillay Soluciones Integrales. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
