"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { themeContext } from "../../app/Context";

export default function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      <span style={{ color: darkMode ? "white" : "" }}>Recent Project</span>
      <span>Portfolio</span>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <Image src={Sidebar} alt="sidebar" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Ecommerce} alt="ecommerce" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={HOC} alt="hoc" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={MusicApp} alt="musicApp" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
