import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import WhatsappFloat from "@/components/WhatsappFloat";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://quillay.cl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Quillay Soluciones Integrales | Páginas web para PyMEs en Chile",
    template: "%s | Quillay Soluciones Integrales",
  },
  description:
    "Diseñamos páginas web modernas y a medida para PyMEs y emprendedores en Chile. Sitios rápidos, editables y adaptables a cualquier dispositivo. Cotiza gratis.",
  keywords: [
    "páginas web Chile",
    "diseño web PyMEs",
    "sitios web para emprendedores",
    "agencia web Chile",
    "Quillay Soluciones",
  ],
  authors: [{ name: "Quillay Soluciones Integrales" }],
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: "Quillay Soluciones Integrales",
    title: "Quillay Soluciones Integrales | Páginas web para PyMEs en Chile",
    description:
      "Diseñamos páginas web modernas y a medida para PyMEs y emprendedores en Chile.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quillay Soluciones Integrales",
    description:
      "Diseñamos páginas web modernas y a medida para PyMEs y emprendedores en Chile.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsappFloat />
      </body>
    </html>
  );
}
