import type { Metadata, Viewport } from "next";
import { Archivo, Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { getCopy } from "@/lib/content";
import { baseMetadata } from "@/lib/seo";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: "#101110",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const copy = getCopy();
  return (
    <html
      lang="es-AR"
      data-scroll-behavior="smooth"
      className={`${archivo.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body id="top" className="min-h-dvh bg-ink text-paper">
        <a
          href="#contenido"
          className="label-mono sr-only z-50 bg-signal px-4 py-3 text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Saltar al contenido
        </a>
        <MotionProvider>
          <Navbar items={copy.nav} />
          <main id="contenido">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
