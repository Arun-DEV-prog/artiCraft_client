import React from "react";
import Hero from "../Hero/Hero";
import "./home.css";
import FeaturedSection from "../Featured/FeaturedSection";
import Testimonial from "../Testimonial/Testimonial";
import Explore_era from "../Explore/Explore_era";
import { Helmet } from "react-helmet";
import About from "../About/About";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-white relative text-gray-800">
      {/* Concentric Squares - Light Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),
        repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)
      `,
        }}
      />
      {/* Your Content/Components */}
      <div className="back min-h-screen">
        <Helmet>
          <title>Home</title>
        </Helmet>
        <div className=" w-11/12 md:h-[500px] mx-auto ">
          <Hero />
        </div>
        <div className=" w-11/12  md:h-[900px] mx-auto ">
          <FeaturedSection />
        </div>
        <div className="">
          <Testimonial />
        </div>
        <div>
          <Explore_era />
        </div>
        t
        <div>
          <About />
        </div>
      </div>
    </div>
  );
};

export default Home;
