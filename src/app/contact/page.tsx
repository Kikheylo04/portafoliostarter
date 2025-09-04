"use client";

import React, { useContext } from "react";
import ContactComponente from "../../components/Contact/contact";
import { themeContext } from "../Context";
import "../../styles/app/Contact/contact.scss";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";

export default function Contact() {
  const {
    state: { darkMode },
  } = useContext(themeContext);
  return (
    <div
      className="contactpage"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <header>
        <Navbar />
      </header>
      <main className="contactpage__main">
        <div className="contactpage__main__title">
          <p style={{ color: darkMode ? "white" : "" }}>
            Pónganse en <span>contacto</span>
          </p>
        </div>
        <ContactComponente />
      </main>
      <footer className="contactpage__footer">
        <Footer />
      </footer>
    </div>
  );
}
