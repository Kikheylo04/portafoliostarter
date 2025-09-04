import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { themeContext } from "../../app/Context";
import "../../styles/components/Service/service.scss";
import Card, { card } from "./card";
import Experience, { experienceProps } from "./experience";
function useIsDesktop(breakpoint = 768) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width:${breakpoint}px)`);
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return isDesktop;
}

export default function Service() {
  const cardListRef = useRef<HTMLDivElement>(null);
  const {
    state: { darkMode },
  } = useContext(themeContext);
  const isDesktop = useIsDesktop(768);
  const [expanded, setExpanded] = useState(false);

  const cards: card[] = useMemo(
    () => [
      {
        emoji: "/assets/images/heartemoji.png",
        heading: "Design",
        detail: "Figma, Sketch, Photoshop, Adobe",
      },
      {
        emoji: "/assets/images/glasses.png",
        heading: "Developer",
        detail: "HTML, CSS, JavaScript, React, Adobe",
      },
      {
        emoji: "/assets/images/humble.png",
        heading: "UI / UX",
        detail: "Research, user flows, wireframes y prototipos.",
      },
    ],
    []
  );

  const experiences: experienceProps[] = [
    { number: 3, year: "2022 - 2025", work: "Experiencia" },
    { number: 20, year: "2022 - 2025", work: "Projectos" },
    { number: 2, year: "2023 - 2025", work: "Trabajo" },
  ];

  const visibleCards = useMemo(() => {
    if (isDesktop) return cards;
    return expanded ? cards : cards.slice(0, 1);
  }, [isDesktop, expanded, cards]);

  useEffect(() => {
    const root = cardListRef.current;
    if (!root) return;

    const items = Array.from(
      root.querySelectorAll<HTMLElement>(".service__card__item")
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const el = e.target as HTMLElement;
          if (e.isIntersecting) el.classList.add("is-in");
          else el.classList.remove("is-in");
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    items.forEach((el, i) => {
      el.style.setProperty("--delay", `${i * 300}ms`);
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, [visibleCards.length]);
  useEffect(() => {
    if (isDesktop && expanded) setExpanded(false);
  }, [isDesktop, expanded]);

  return (
    <div className="service" aria-label="Servicios">
      <div className="service__container">
        <div
          className="service__container__awesone"
          aria-labelledby="svc-title"
        >
          <div className="service__container__awesone__text">
            <p id="svc-title" style={{ color: darkMode ? "white" : undefined }}>
              Mi increíble
            </p>
            <p>servicio</p>
            <p>
              Mi servicio abarca diseño y desarrollo web para entregar
              resultados de calidad.
            </p>
          </div>
          <a
            className="button service__container__awesone__button"
            href="/assets/files/cv-kikheylo.pdf"
            download
            aria-label="Descargar CV en PDF"
            onClick={(e) => {
              const ok = window.confirm("¿Quieres descargar el archivo?");
              if (!ok) e.preventDefault();
            }}
          >
            Descargar CV
          </a>
        </div>
        <div className="service__container__experience">
          {experiences.map((exp, i) => (
            <Experience
              key={i}
              number={exp.number}
              year={exp.year}
              work={exp.work}
            />
          ))}
        </div>
      </div>
      <div
        id="svc-cards"
        className="service__card"
        ref={cardListRef}
        role="list"
      >
        {visibleCards.map((c, i) => (
          <div className="service__card__item" key={i} role="listitem">
            <Card emoji={c.emoji} heading={c.heading} detail={c.detail} />
          </div>
        ))}
      </div>
      {!isDesktop && (
        <button
          type="button"
          className="service__more"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls="svc-cards"
        >
          {expanded ? "Ver menos" : "Ver más"}
        </button>
      )}
    </div>
  );
}
