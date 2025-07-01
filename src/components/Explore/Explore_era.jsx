import React from "react";
import era1 from "../../assets/era1.jpeg";
import era2 from "../../assets/middle-ages-gettyimages-804452498.avif";
import era3 from "../../assets/create a Modern Era period image.jpg";
const Explore_era = () => {
  const imageData = [
    { era: "Ancient", img: era1, isImport: true },
    { era: "Medieval", img: era2, isImport: true },
    { era: "Modern", img: era3, isImport: true },
  ];

  return (
    <section className="py-10 back">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          🕰️ Explore by Time Period
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {imageData.map((period) => (
            <div
              key={period.era}
              className=" bg-green-200 rounded-lg shadow p-4 hover:shadow-lg transition"
            >
              <img
                src={period.img}
                alt={period.era}
                className="h-40 w-full object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-center text-black">
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
