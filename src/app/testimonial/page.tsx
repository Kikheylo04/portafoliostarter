import type { Metadata } from "next";
import TestimonialClient from "./TestimonialClient";

export const metadata: Metadata = {
  title: "Testimonios — Kikheylo Sebastian",
  description: "Opiniones reales de clientes y equipos con los que he colaborado en diseño, frontend y backend.",
  openGraph: {
    title: "Testimonios — Kikheylo Sebastian",
    description: "Opiniones reales de clientes y equipos con los que he colaborado.",
  },
};

export default function TestimonialPage() {
  return <TestimonialClient />;
}
