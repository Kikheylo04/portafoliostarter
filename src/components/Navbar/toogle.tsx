"use client";

import React, { useContext } from "react";
import { themeContext } from "../../app/Context";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import "../../styles/components/Navbar/toogle.scss";

export default function Toggle() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggle" onClick={handleClick}>
      <Moon />
      <Sun />
      <div
        className="toggle__button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
}
