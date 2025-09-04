"use client";

import React, { useContext } from "react";
import { themeContext } from "../Context";
import Navbar from "../../components/Navbar/navbar";
import Testimonial from "../../components/Testimonial/testimonial";
import Footer from "../../components/Footer/footer";
import "../../styles/app/Testimonial/testimonial.scss";

export default function TestimonialPage() {
  const {
    state: { darkMode },
  } = useContext(themeContext);

  return (
    <div
      className="testimonialpage"
      style={{
        background: darkMode ? "#0b0b0b" : "#ffffff",
        color: darkMode ? "#ffffff" : "#111111",
      }}
    >
      <header>
        <Navbar />
      </header>
      <main className="testimonialpage__main">
        <section
          id="testimonial-hero"
          className="testimonialpage__main__hero section"
          aria-labelledby="testimonial_title"
        >
          <h1
            id="testimonial_title"
            className="testimonialpage__main__hero__title"
          >
            Los clientes siempre obtienen un <span>trabajo excepcional</span> de
            mi parte
          </h1>
          <p className="testimonialpage__main__hero__lead">
            Experiencias reales de equipos con los que he colaborado en diseño,
            frontend y backend.
          </p>
        </section>
        <section
          className="testimonialpage__main__band section"
          aria-label="Testimonios de clientes"
        >
          <div className="testimonialpage__main__band__container">
            <Testimonial />
          </div>

          <div className="testimonialpage__main__band__row">
            <a
              className="btn btn--primary"
              href="https://github.com/Kikheylo04"
              target="_blank"
              rel="noreferrer"
            >
              Ver proyectos
            </a>
            <a className="btn btn--ghost" href="/contact">
              Solicitar presupuesto
            </a>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
