import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion"; // Framer Motion

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
    title: "Timeless Human Ingenuity",
    desc: "Artifacts reveal the brilliance of ancient civilizations — from tools to technology, crafted long before modern advancements.",
  },
  {
    img: arti2,
    title: "History Preserved in Stone",
    desc: "These artifacts are not just objects; they're preserved voices of cultures, chronicling how people lived, worshiped, and ruled.",
  },
  {
    img: arti3,
    title: "Symbols of Identity & Belief",
    desc: "From sacred scripts to ritual relics, every artifact reflects the spiritual and intellectual depth of its era.",
  },
  {
    img: arti4,
    title: "Craftsmanship Across Ages",
    desc: "Explore masterpieces carved, forged, and painted by skilled hands — reminders of human creativity across centuries.",
  },
];

export default function Hero() {
  return (
    <div className="w-full py-14 bg-[#0d0d3f] text-white">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-10"
      >
        Discover the Stories Behind the Artifacts
      </motion.h1>

      {/* 🔹 Swiper Slider */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="!w-[90vw] md:!w-[70vw] flex justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#1b1b50] text-white rounded-xl shadow-xl overflow-hidden w-full h-full flex flex-col md:flex-row items-center justify-between p-6 gap-6"
            >
              <div className="md:w-1/2 space-y-3 text-left">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {slide.title}
                </h2>
                <p className="text-gray-300 text-sm md:text-base">
                  {slide.desc}
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="rounded-lg w-full h-[250px] object-cover"
                />
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
