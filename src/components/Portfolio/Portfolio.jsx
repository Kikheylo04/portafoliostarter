"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { themeContext } from "../../app/Context";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

export default function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [slidesPerview, setSlidesPerview] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerview(1);
      } else {
        setSlidesPerview(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="portfolio" id="portfolio">
      <span style={{ color: darkMode ? "white" : "" }}>Recent Project</span>
      <span>Portfolio</span>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        pagination={{ clickable: true }}
        slidesPerView={slidesPerview}
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
