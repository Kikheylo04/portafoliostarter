"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "../../styles/components/Navbar/navbar.scss";
import Toggle from "./toogle";
import { UilBars, UilTimes } from "../icons";

const NAV_LINKS = [
  { href: "/",            label: "Inicio" },
  { href: "/service",     label: "Servicios" },
  { href: "/portfolio",   label: "Portafolio" },
  { href: "/testimonial", label: "Testimonios" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (open && btnRef.current && !btnRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <header className="navbar">
      <div className="navbar__mode">
        <Toggle />
      </div>

      <nav className="navbar__links" aria-label="Principal">
        <div className="navbar__links__left">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>
        <div className="navbar__links__right">
          <Link href="/contact" className="button">
            Contacto
          </Link>
        </div>
      </nav>

      <div ref={btnRef} className="navbar__menu">
        <button
          className="navbar__menu__button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <UilTimes size="24" /> : <UilBars size="24" />}
        </button>

        {open && (
          <div className="navbar__menu__dropdown">
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contacto
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
