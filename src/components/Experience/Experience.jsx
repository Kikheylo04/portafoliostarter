import React, { useContext } from "react";
import "./Experience.css";
import { themeContext } from "../../app/Context";
export default function Experience() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id="experience">
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          8+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          20+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          5+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>companies</span>
        <span>Work</span>
      </div>
    </div>
  );
}
