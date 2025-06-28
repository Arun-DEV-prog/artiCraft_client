import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Hero.css";

import arti1 from "../../assets/arti1.jpg";
import arti2 from "../../assets/arti2.jpg";
import arti3 from "../../assets/arti3.jpg";
import arti4 from "../../assets/arti4.jpg";

const slides = [
  {
    img: arti1,
    title: "Modern UI Experience",
    desc: "Explore stunning visual designs powered by React and Swiper.",
  },
  {
    img: arti2,
    title: "Performance & Speed",
    desc: "Built for speed using TailwindCSS and optimized rendering.",
  },
  {
    img: arti3,
    title: "Firebase Authentication",
    desc: "Secure login and registration powered by Firebase Auth.",
  },
  {
    img: arti4,
    title: "Responsive Design",
    desc: "Mobile-first layout that looks great on all screen sizes.",
  },
];

export default function Hero() {
  return (
    <div className="w-full py-10  text-white">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 rounded-xl shadow-lg p-6 w-[90vw] md:w-[70vw] h-[400px]">
              <div className="text-left">
                <h2 className="text-3xl font-bold mb-1 text-white">
                  {slide.title}
                </h2>
                <p className="text-gray-300">{slide.desc}</p>
              </div>
              <div>
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="rounded-lg w-full h-[250px] object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
