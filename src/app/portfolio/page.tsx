import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portafolio — Kikheylo Sebastian",
  description: "Proyectos de desarrollo frontend y full-stack: React, Next.js, Django, Docker.",
  openGraph: {
    title: "Portafolio — Kikheylo Sebastian",
    description: "Proyectos de desarrollo frontend y full-stack.",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
