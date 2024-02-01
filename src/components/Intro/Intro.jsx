import Image from "next/image";
import Floating from "../FloatingDiv/Floatingdiv";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin (1).png";
import Instagram from "../../img/instagram (1).png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import "./Intro.css";
import { useContext } from "react";
import { themeContext } from "../../app/Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Intro() {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Kikheylo Sebastian</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
          <Image src={Github} alt="github" />
          <Image src={Linkedin} alt="linkedin" />
          <Image src={Instagram} alt="instagram" />
        </div>
      </div>
      <div className="i-right">
        <picture>
          <img
            src="https://github.com/ZainRk/Personal-Portfolio-React/blob/master/src/img/Vector1.png?raw=true"
            alt="vector1"
          />
        </picture>
        <picture>
          <img
            src="https://github.com/ZainRk/Personal-Portfolio-React/blob/master/src/img/Vector2.png?raw=true"
            alt="vector2"
          />
        </picture>
        <picture>
          <img
            src="https://github.com/ZainRk/Personal-Portfolio-React/blob/master/src/img/boy.png?raw=true"
            alt="boy"
          />
        </picture>
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src="https://github.com/ZainRk/portfolio-starter/blob/master/src/img/glassesimoji.png?raw=true"
          alt="glassesimoji1"
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <Floating image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ top: "18rem", left: "9rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
          className="floating-div"
        >
          <Floating image={thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}
