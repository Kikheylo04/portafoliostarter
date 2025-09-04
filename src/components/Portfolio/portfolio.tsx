import { use, useContext, useEffect, useRef, useState } from "react";
import { themeContext } from "../../app/Context";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/components/Portfolio/portfolio.scss";

export default function Portfolio() {
  const {
    state: { darkMode },
  } = useContext(themeContext);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const projects = [
    { src: "/assets/images/sidebar.png", alt: "sidebar" },
    { src: "/assets/images/ecommerce.png", alt: "ecommerce" },
    { src: "/assets/images/hoc.png", alt: "hoc" },
    { src: "/assets/images/musicApp.png", alt: "musicApp" },
  ];

  const updateButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanLeft(el.scrollLeft > 0);
    setCanRight(maxScroll > 0 && el.scrollLeft < maxScroll - 1);
  };

  useEffect(() => {
    requestAnimationFrame(updateButtons);
    const el = scrollRef.current;
    if (!el) return;

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
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const { clientWidth, scrollLeft } = el;
    el.scrollTo({
      left:
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth,
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
          {projects.map((project, index) => (
            <picture key={index}>
              <img src={project.src} alt="" />
            </picture>
          ))}
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
