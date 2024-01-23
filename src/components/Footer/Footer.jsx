import React from "react";
import Image from "next/image";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Wave from "../../img/wave.png";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <Image src={Wave} alt="wave" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Zainkeepscode@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size="3rem" />
          <Facebook color="white" size="3rem" />
          <Github color="white" size="3rem" />
        </div>
      </div>
    </div>
  );
}
