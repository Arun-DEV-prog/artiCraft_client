import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const features = [
    {
      title: "Discover Rare Artifacts",
      description:
        "Explore an extensive collection of unique and rare artifacts from different cultures and time periods, carefully curated to inspire curiosity and learning.",
    },
    {
      title: "Share Your Collections",
      description:
        "Easily upload and showcase your own artifacts, connecting with a community of enthusiasts who appreciate your passion and dedication.",
    },
    {
      title: "Learn the Stories Behind Artifacts",
      description:
        "Gain in-depth knowledge about the history, significance, and craftsmanship of each item through detailed descriptions and engaging multimedia content.",
    },
    {
      title: "Connect with Fellow Enthusiasts",
      description:
        "Join discussions, leave comments, and build connections with others who share your interest in cultural heritage and collectibles.",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-16"
        >
          What You Can Do on ArtiFacts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 250}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-left"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                {feature.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
