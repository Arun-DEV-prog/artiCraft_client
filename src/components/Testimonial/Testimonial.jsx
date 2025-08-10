import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      comment:
        "The artifact collection is amazing! I learned so much about our history.",
      avatar: "https://i.pravatar.cc/150?img=47",
    },
    {
      name: "Rahim Uddin",
      comment:
        "I loved the detail in the Medieval section — beautiful presentation!",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Maya Sen",
      comment:
        "The interactive exhibits kept me engaged for hours. A must-visit for history lovers!",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Jahidul Islam",
      comment:
        "The cultural artifacts section beautifully showcases our heritage. Truly inspiring!",
      avatar: "https://i.pravatar.cc/150?img=56",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          data-aos="fade-up"
          className="text-3xl racing-sans-one-regular text-blue-500 font-bold text-center mb-10"
        >
          💬 Visitor Impressions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((user, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150} // Stagger animation for each card
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-16 h-16 rounded-full border-2 border-gray-200 mb-4"
              />
              <p className="text-gray-700 text-lg italic leading-relaxed">
                "{user.comment}"
              </p>
              <p className="text-sm font-playwrite text-gray-900 mt-4">
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
