"use client";

import { useEffect, useState } from "react";
import { IcoArrowUp } from "../icons";
import "../../styles/components/ScrollToTop/scrolltotop.scss";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <button
      className="scroll-to-top"
      onClick={scrollUp}
      aria-label="Volver arriba"
      type="button"
    >
      <IcoArrowUp size={20} aria-hidden="true" />
    </button>
  );
}
