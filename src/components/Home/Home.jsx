import React from "react";
import Hero from "../Hero/Hero";
import "./home.css";
import FeaturedSection from "../Featured/FeaturedSection";
import Testimonial from "../Testimonial/Testimonial";
import Explore_era from "../Explore/Explore_era";

const Home = () => {
  return (
    <div className="back min-h-screen">
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
    </div>
  );
};

export default Home;
