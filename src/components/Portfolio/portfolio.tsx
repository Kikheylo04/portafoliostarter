"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { themeContext } from "../../app/Context";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/components/Portfolio/portfolio.scss";

export type ProjectCategory = "Todos" | "Frontend" | "Full-stack" | "UI/UX";

interface Project {
  src: string;
  alt: string;
  category: ProjectCategory;
  title: string;
  demo?: string;
  repo?: string;
}

const ALL_PROJECTS: Project[] = [
  {
    src: "/assets/images/sidebar.png",
    alt: "Proyecto: panel lateral de navegación",
    title: "Sidebar Navigation",
    category: "Frontend",
    repo: "https://github.com/Kikheylo04",
  },
  {
    src: "/assets/images/ecommerce.png",
    alt: "Proyecto: tienda e-commerce",
    title: "E-Commerce App",
    category: "Full-stack",
    repo: "https://github.com/Kikheylo04",
  },
  {
    src: "/assets/images/hoc.png",
    alt: "Proyecto: componentes de orden superior en React",
    title: "React HOC Patterns",
    category: "Frontend",
    repo: "https://github.com/Kikheylo04",
  },
  {
    src: "/assets/images/musicApp.png",
    alt: "Proyecto: aplicación de música",
    title: "Music App",
    category: "UI/UX",
    repo: "https://github.com/Kikheylo04",
  },
];

interface PortfolioProps {
  filter?: ProjectCategory;
}

export default function Portfolio({ filter = "Todos" }: PortfolioProps) {
  const {
    state: { darkMode },
  } = useContext(themeContext);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const visible =
    filter === "Todos"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category === filter);

  const updateButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanLeft(el.scrollLeft > 0);
    setCanRight(maxScroll > 0 && el.scrollLeft < maxScroll - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: 0 });
    requestAnimationFrame(updateButtons);

    const ro = new ResizeObserver(() => updateButtons());
    ro.observe(el);

    const imgs = Array.from(el.querySelectorAll("img"));
    const onImgLoad = () => updateButtons();
    imgs.forEach((img) => {
      if (img.complete) return;
      img.addEventListener("load", onImgLoad);
      img.addEventListener("error", onImgLoad);
    });
    return () => {
      ro.disconnect();
      imgs.forEach((img) => {
        img.removeEventListener("load", onImgLoad);
        img.removeEventListener("error", onImgLoad);
      });
    };
  }, [visible.length]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const { clientWidth, scrollLeft } = el;
    el.scrollTo({
      left: direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="portfolio">
      <p style={{ color: darkMode ? "white" : "" }}>Recientes Proyectos</p>
      <p>Portafolio</p>
      <div className="portfolio__grid">
        <button
          className="portfolio__grid__left arrow"
          aria-label="Anterior"
          onClick={() => scroll("left")}
          disabled={!canLeft}
          type="button"
        >
          &#8592;
        </button>
        <div
          className="portfolio__grid__container"
          ref={scrollRef}
          onScroll={updateButtons}
          role="region"
          aria-label="Carrusel de portafolio"
        >
          {visible.length > 0 ? (
            visible.map((project, index) => (
              <div key={index} className="portfolio__grid__card">
                <picture>
                  <img src={project.src} alt={project.alt} />
                </picture>
                <div className="portfolio__grid__card__overlay">
                  <p className="portfolio__grid__card__overlay__title">{project.title}</p>
                  <div className="portfolio__grid__card__overlay__links">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Demo
                      </a>
                    )}
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="portfolio__empty">No hay proyectos en esta categoría aún.</p>
          )}
        </div>
        <button
          className="portfolio__grid__right arrow"
          aria-label="Siguiente"
          onClick={() => scroll("right")}
          disabled={!canRight}
          type="button"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
