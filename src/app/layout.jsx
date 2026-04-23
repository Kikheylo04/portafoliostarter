import { Inter } from "next/font/google";
import { ThemeProvider } from "./Context";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio — Kikheylo Sebastian",
  description: "Desarrollador frontend con experiencia en diseño y desarrollo web. Proyectos con React, Next.js y más.",
  keywords: ["desarrollador frontend", "React", "Next.js", "portafolio", "diseño web"],
  authors: [{ name: "Kikheylo Sebastian" }],
  openGraph: {
    title: "Portafolio — Kikheylo Sebastian",
    description: "Desarrollador frontend con experiencia en diseño y desarrollo web.",
    type: "website",
    locale: "es_PE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portafolio — Kikheylo Sebastian",
    description: "Desarrollador frontend con experiencia en diseño y desarrollo web.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
