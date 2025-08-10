import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { BiLike } from "react-icons/bi";
import { Link, NavLink } from "react-router";
import Loading from "../Loading";

const FeaturedSection = () => {
  const [artifact, setArtifact] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtifacts = async () => {
      try {
        const res = await axios.get(
          "https://artifact-server-rust.vercel.app/allartifacts"
        );
        setArtifact(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching artifact :", err);
      }
    };
    fetchArtifacts();
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <h1 className="text-center font-playwrite text-blue-500 italic text-3xl mb-[40px] p-5 dark:text-blue-400">
        Popular Artifacts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {artifact
          .sort((a, b) => b.likeCount - a.likeCount) // Sort by likeCount descending
          .slice(0, 6) // Top 6
          .map((artifact) => (
            <div
              key={artifact._id}
              className="rounded bg-[#f8f8f8] dark:bg-gray-800 shadow-2xl p-5 hover:shadow-lg transition"
            >
              <img
                src={artifact.image}
                alt={artifact.artifactName}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-xl racing-sans-one-regular font-bold mt-2 text-black dark:text-white">
                {artifact.artifactName}
              </h2>
              <p className="racing-sans-one-regular text-black dark:text-gray-300">
                {artifact.shortDescription}
              </p>
              <div className="flex justify-between">
                <div>
                  <p className="text-sm racing-sans-one-regular text-black dark:text-gray-300 mt-1 flex items-center gap-2">
                    <BiLike size={20} />
                    Likes: {artifact.likeCount}
                  </p>
                </div>

                <div>
                  <Link
                    to={`/allartifacts/${artifact._id}`}
                    className="btn bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                  >
                    View Details{" "}
                    <FaArrowRight className="text-white" size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="text-center p-4 mt-6">
        <NavLink
          to="/allartifacts"
          className="btn text-xl bg-blue-600 px-5 py-1 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          See All
          <FaArrowRight className="text-white" size={20} />{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default FeaturedSection;
