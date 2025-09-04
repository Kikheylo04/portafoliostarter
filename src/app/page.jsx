"use client";
import "./globals.css";
import "./page.module.css";
import { useContext } from "react";
import { themeContext } from "./Context";
import Intro from "../components/Intro/Intro";
import Service from "../components/Services/service";
import Work from "../components/Works/work";
import Portfolio from "../components/Portfolio/portfolio";
import Testimonial from "../components/Testimonial/testimonial";
import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/navbar";

export default function Home() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="app"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <header className="app-header">
        <Navbar />
      </header>
      <main className="app-main">
        <div>
          <Intro />
        </div>
        <div>
          <Service />
        </div>
        <div>
          <Work />
        </div>
        <div>
          <Portfolio />
        </div>
        <div>
          <Testimonial />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
