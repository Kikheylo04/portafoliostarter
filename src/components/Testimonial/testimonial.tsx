import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/components/Testimonial/testimonial.scss";

export default function Testimonial() {
  const clients = [
    {
      img: "/assets/images/profile1.jpg",
      review:
        "Trabajar con él fue clave para el éxito de nuestro proyecto. Su código es limpio, bien estructurado y siempre busca la mejor solución técnica.",
    },
    {
      img: "/assets/images/profile2.jpg",
      review:
        "Su capacidad para combinar colores, tipografías y formas hace que los diseños sean únicos y memorables",
    },
    {
      img: "/assets/images/profile3.jpg",
      review:
        "Encontró soluciones técnicas que ahorraron tiempo y recursos al equipo, siempre con buena disposición.",
    },
    {
      img: "/assets/images/profile4.jpg",
      review:
        "Su investigación y pruebas con usuarios nos ayudaron a mejorar puntos que ni habíamos considerado.",
    },
  ];
  return (
    <div className="testimonial">
      <p className="testimonial__title">
        Los clientes siempre obtienen un <span>trabajo excepcional</span> de mi
        parte
      </p>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        grabCursor
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
          1440: { slidesPerView: 4 },
        }}
        className="testimonial__slider"
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial__slider__card">
                <picture>
                  <img src={client.img} alt="" />
                </picture>
                <p>{client.review}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
