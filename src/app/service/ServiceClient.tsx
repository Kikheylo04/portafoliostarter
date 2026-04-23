"use client";

import React, { useContext } from "react";
import { themeContext } from "../Context";
import PageTransition from "../../components/PageTransition/PageTransition";
import Navbar from "../../components/Navbar/navbar";
import Service from "../../components/Services/service";
import Footer from "../../components/Footer/footer";
import "../../styles/app/Service/service.scss";

export default function ServiceClient() {
  const {
    state: { darkMode },
  } = useContext(themeContext);
  return (
    <PageTransition>
      <div
        className="servicepage"
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      >
        <header>
          <Navbar />
        </header>
        <main>
          <Service />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </PageTransition>
  );
}
