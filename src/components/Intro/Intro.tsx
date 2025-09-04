"use client";

import "../../styles/components/intro/intro.scss";
import { useContext } from "react";
import { themeContext } from "../../app/Context";
import Floatingdiv from "../FloatingDiv/Floatingdiv";
import Link from "next/link";
import useInView from "../../hooks/useInView";

export default function Intro() {
  const {
    state: { darkMode },
  } = useContext(themeContext);
  const crown = useInView({ threshold: 0.2 });
  const thumb = useInView({ threshold: 0.2 });
  return (
    <div className="intro">
      <div className="intro__person">
        <div className="intro__person__name">
          <p style={{ color: darkMode ? "white" : "" }}>Hola! Yo soy</p>
          <p>Kikheylo Sebastian</p>
          <p>
            Desarrollador frontend con gran experiencia en diseño y desarrollo
            web, que produce un trabajo de calidad.
          </p>
          <Link
            href="contact"
            target="_blank"
            className="intro__person__name__button button "
            rel="noopener noreferrer"
          >
            Contrátame
          </Link>
        </div>
        <div className="intro__person__icons">
          <a href="https://github.com/Kikheylo04/portafoliostarter">
            <picture>
              <img src="/assets/images/github.png" alt="" />
            </picture>
          </a>
          <a href="https://www.linkedin.com/in/kikheylo-chavez/">
            <picture>
              <img src="/assets/images/linkedin.png" alt="" />
            </picture>
          </a>
          <a href="https://www.instagram.com/sebas._.white/">
            <picture>
              <img src="/assets/images/instagram.png" alt="" />
            </picture>
          </a>
        </div>
      </div>
      <div className="intro__image">
        <picture>
          <img src="/assets/images/Vector1.png" alt="" />
        </picture>
        <picture>
          <img src="/assets/images/Vector2.png" alt="" />
        </picture>
        <picture>
          <img src="/assets/images/boy.png" alt="" />
        </picture>
        <div
          ref={crown.ref}
          className={`intro__image__floatingcrown ${
            crown.inView ? "is-inview" : ""
          }`}
        >
          <Floatingdiv image="/assets/images/crown.png" text="Web Developer" />
        </div>

        <div
          ref={thumb.ref}
          className={`intro__image__floatingthumbsup ${
            thumb.inView ? "is-inview" : ""
          }`}
        >
          <Floatingdiv
            image="/assets/images/thumbup.png"
            text="Best Design Award"
          />
        </div>
      </div>
    </div>
  );
}
