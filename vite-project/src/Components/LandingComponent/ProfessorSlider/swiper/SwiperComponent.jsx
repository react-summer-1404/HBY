import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SwiperComponent({ slides = [], slideWidth = 340 }) {
  return (
    <div className="hidden mx-auto  md:flex md:justify-center md:mx-auto w-full">
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination]}
        effect={"coverflow"}
        grabCursor
        centeredSlides
        slidesPerView={"auto"}
        initialSlide={3}
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: true,
        }}
        spaceBetween={40}
        style={{ padding: "60px 100px", overflow: "visible" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: slideWidth,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
