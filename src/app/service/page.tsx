import type { Metadata } from "next";
import ServiceClient from "./ServiceClient";

export const metadata: Metadata = {
  title: "Servicios — Kikheylo Sebastian",
  description: "Diseño web, desarrollo frontend y UI/UX. Conoce todos los servicios que ofrezco.",
  openGraph: {
    title: "Servicios — Kikheylo Sebastian",
    description: "Diseño web, desarrollo frontend y UI/UX.",
  },
};

export default function ServicePage() {
  return <ServiceClient />;
}
