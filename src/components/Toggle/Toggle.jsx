import React, { useContext } from "react";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import "./Toggle.css";
import { themeContext } from "../../app/Context";
export default function Toggle() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handlleClick = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggle" onClick={handlleClick}>
      <Moon />
      <Sun />
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
}
