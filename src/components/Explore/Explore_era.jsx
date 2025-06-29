import React from "react";

const Explore_era = () => {
  return (
    <div>
      <section className="py-10 back">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            🕰️ Explore by Time Period
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { era: "Ancient", img: "ancient.jpg" },
              { era: "Medieval", img: "medieval.jpg" },
              { era: "Modern", img: "modern.jpg" },
            ].map((period) => (
              <div
                key={period.era}
                className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
              >
                <img
                  src={`/images/${period.img}`}
                  alt={period.era}
                  className="h-40 w-full object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4 text-center">
                  {period.era} Era
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore_era;
