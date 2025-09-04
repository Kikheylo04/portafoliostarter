import { Inter } from "next/font/google";
import { ThemeProvider } from "./Context";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio — Kikheylo Sebastian",
  description: "Proyectos recientes y trabajos de Kikheylo Sebastian.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
