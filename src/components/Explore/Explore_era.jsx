import React from "react";
import era1 from "../../assets/era1.jpeg";
import era2 from "../../assets/middle-ages-gettyimages-804452498.avif";
import era3 from "../../assets/create a Modern Era period image.jpg";

const Explore_era = () => {
  const imageData = [
    { era: "Ancient", img: era1 },
    { era: "Medieval", img: era2 },
    { era: "Modern", img: era3 },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          data-aos="fade-up"
          className="text-3xl racing-sans-one-regular text-blue-500 font-bold text-center mb-10"
        >
          🕰️ Explore by Time Period
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {imageData.map((period, index) => (
            <div
              key={period.era}
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={period.img}
                  alt={period.era}
                  className="h-48 w-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl racing-sans-one-regular font-semibold mt-4 mb-4 text-center text-gray-800">
                {period.era} Era
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore_era;
