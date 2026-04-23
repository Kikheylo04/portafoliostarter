"use client";

import React, { useContext, useState } from "react";
import { themeContext } from "../Context";
import PageTransition from "../../components/PageTransition/PageTransition";
import Navbar from "../../components/Navbar/navbar";
import Portfolio, { type ProjectCategory } from "../../components/Portfolio/portfolio";
import Footer from "../../components/Footer/footer";
import "../../styles/app/Portfolio/portfolio.scss";

const FILTERS: ProjectCategory[] = ["Todos", "Frontend", "Full-stack", "UI/UX"];

export default function PortfolioClient() {
  const {
    state: { darkMode },
  } = useContext(themeContext);

  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("Todos");

  return (
    <PageTransition>
    <div
      className="portfoliopage"
      style={{
        background: darkMode ? "#0b0b0b" : "#ffffff",
        color: darkMode ? "#ffffff" : "#111111",
      }}
    >
      <header>
        <Navbar />
      </header>

      <main className="portfoliopage__main">
        <section
          id="portfolio-hero"
          className="portfoliopage__main__container section"
          aria-labelledby="portfolio-title"
        >
          <h1 id="portfolio-title" className="portfoliopage__main__container__title">
            Portafolio <span className="accent">— Kikheylo Sebastian</span>
          </h1>
          <p className="portfoliopage__main__container__lead">
            Selección de proyectos recientes enfocados en rendimiento, UX y
            escalabilidad (React/Next.js, Django, Docker).
          </p>
          <div
            className="portfoliopage__main__container__filter"
            role="tablist"
            aria-label="Filtros de proyectos"
          >
            {FILTERS.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={activeFilter === f}
                className={`portfoliopage__main__container__filter__pill${activeFilter === f ? " active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        <section className="portfoliopage__main__band">
          <div className="portfoliopage__main__band__container">
            <Portfolio filter={activeFilter} />
            <div className="portfoliopage__main__band__container__row">
              <a
                className="btn btn--primary"
                href="https://github.com/Kikheylo04"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver todos los proyectos
              </a>
              <a className="btn btn--ghost" href="/contact">
                Solicitar presupuesto
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
    </PageTransition>
  );
}
