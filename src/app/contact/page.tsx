import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contacto — Kikheylo Sebastian",
  description: "¿Tienes un proyecto en mente? Escríbeme y hablemos.",
  openGraph: {
    title: "Contacto — Kikheylo Sebastian",
    description: "¿Tienes un proyecto en mente? Escríbeme y hablemos.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
