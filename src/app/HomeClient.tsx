"use client";

import { useContext } from "react";
import { themeContext } from "./Context";
import Intro from "../components/Intro/Intro";
import Service from "../components/Services/service";
import Work from "../components/Works/work";
import Portfolio from "../components/Portfolio/portfolio";
import Testimonial from "../components/Testimonial/testimonial";
import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/navbar";
import "./globals.css";
import "./page.module.css";

export default function HomeClient() {
  const { state: { darkMode } } = useContext(themeContext);
  return (
    <div
      className="app"
      style={{
        background: darkMode ? "var(--bg-dark)" : "var(--bg-light)",
        color: darkMode ? "var(--text-dark)" : "var(--text-light)",
      }}
    >
      <header className="app-header">
        <Navbar />
      </header>
      <main className="app-main">
        <Intro />
        <Service />
        <Work />
        <Portfolio />
        <Testimonial />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
