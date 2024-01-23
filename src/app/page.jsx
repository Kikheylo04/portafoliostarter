"use client";
import Navbar from "../components/Navbar/navbar";
import Intro from "../components/Intro/Intro";
import Services from "../components/Services/Services";
import Experience from "../components/Experience/Experience";
import Works from "../components/Works/Works";
import Portfolio from "../components/Portfolio/Portfolio";
import Testimonial from "../components/Testimonial/Testimonial";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import "./globals.css";
import "./page.module.css";
import { useContext } from "react";
import { themeContext } from "./Context";

export default function Home() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}
