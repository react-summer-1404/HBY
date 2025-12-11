// SwiperComponent.jsx


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import CourseCard from "../CourseCard/CourseCard";

const SwiperComponent = ({ courses = [] }) => {
  if (!Array.isArray(courses) || courses.length === 0) return null;

  const shouldLoop = courses.length > 3;

  return (
    <Swiper
      modules={[Navigation, Autoplay, EffectCoverflow]}
      loop={shouldLoop}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      effect="coverflow"
      centeredSlides={true}
      spaceBetween={30}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4},
      }}
    >
     
      {courses.map((item, index) => (
        <SwiperSlide key={index}>
          <CourseCard
            id={item.courseId}
            title={item.title}
            describe={item.describe}
            isDelete={item.isDelete}
            active={item.active}
            miniDescribe={item.miniDescribe}
            googleTitle={item.googleTitle}
            imageAddress={item.imageAddress}
            priceCourse={item.cost}
            cost={item.levelName}
            startTime={item.startTime}
            endTime={item.endTime}
            tumbImageAddress={item.tumbImageAddress}
            teacherId={item.teacherId}
            courseLvlId={item.courseLvlId}
            lastUpdate={item.lastUpdate}
            statusId={item.statusId}
            capacity={item.capacity}
            courseRate={item.count}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
