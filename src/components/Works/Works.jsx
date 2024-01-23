import React, { useContext } from "react";
import Image from "next/image";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../app/Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
export default function Works() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works for All these
        </span>
        <span>Brands & Clients</span>
        <span>
          Lorem ispum is simpley dummy text of printing of printing Lorem <br />
          ispum is simpley dummy text of printing <br />
          ispum is simpley dummy text of printing text of printing <br />
          Lorem ispum is simpley dummy text
        </span>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button s-button">Hire me</button>
        </Link>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <Image src={Upwork} alt="upwork" />
          </div>
          <div className="w-secCircle">
            <Image src={Fiverr} alt="fiverr" />
          </div>
          <div className="w-secCircle">
            <Image src={Amazon} alt="amazon" />
          </div>
          <div className="w-secCircle">
            <Image src={Shopify} alt="shopify" />
          </div>
          <div className="w-secCircle">
            <Image src={Facebook} alt="facebook" />
          </div>
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </motion.div>
      </div>
    </div>
  );
}
