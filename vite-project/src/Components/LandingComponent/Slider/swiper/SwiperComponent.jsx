// SwiperComponent.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from  "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

function SwiperComponent({ slides }) {
  return (
    <Swiper
      modules={[Navigation, Autoplay, EffectCoverflow]}
      spaceBetween={30}
      loop={true}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      direction="horizontal"
      effect="coverflow"
      centeredSlides={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="transition-transform duration-300 hidden md:block">{slide}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperComponent;
