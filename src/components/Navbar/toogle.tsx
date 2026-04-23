"use client";

import React, { useContext } from "react";
import { themeContext } from "../../app/Context";
import { UilMoon as Moon, UilSun as Sun } from "../icons";
import "../../styles/components/Navbar/toogle.scss";

export default function Toggle() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <button
      type="button"
      className="toggle"
      onClick={handleClick}
      role="switch"
      aria-checked={darkMode}
      aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      <Moon aria-hidden="true" />
      <Sun aria-hidden="true" />
      <div
        className="toggle__button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </button>
  );
}
