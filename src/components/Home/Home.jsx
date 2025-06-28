import React from "react";
import Hero from "../Hero/Hero";
import "./home.css";

const Home = () => {
  return (
    <div className="back">
      <div className=" w-11/12 md:h-[500px] mx-auto ">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
