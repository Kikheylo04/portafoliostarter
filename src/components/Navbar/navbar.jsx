import { Link } from "react-scroll";
import Toggle from "../Toggle/Toggle";
import "./navbar.css";

export default function navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Andrew</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Services
              </Link>
            </li>
            <li>
              <Link to="experience" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="testimonials" spy={true} smooth={true}>
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div>
    </div>
  );
}
