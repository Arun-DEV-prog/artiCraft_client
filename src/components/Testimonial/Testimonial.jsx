import React from "react";

const Testimonial = () => {
  return (
    <section className="py-10 back">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          💬 Visitor Impressions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "Sarah Ahmed",
              comment:
                "The artifact collection is amazing! I learned so much about our history.",
            },
            {
              name: "Rahim Uddin",
              comment:
                "I loved the detail in the Medieval section — beautiful presentation!",
            },
          ].map((user, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow bg-[#1b6ab5]"
            >
              <p className="text-black text-xl italic">"{user.comment}"</p>
              <p className="text-sm  text-gray-200 mt-4 text-right">
                — {user.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
