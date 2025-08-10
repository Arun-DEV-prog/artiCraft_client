import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import axios from "axios";
import { NavLink } from "react-router";
import { FaArrowRight } from "react-icons/fa6";
import Loading from "../../components/Loading";
import { Helmet } from "react-helmet";

const Allartifact = () => {
  const { loading } = useContext(AuthContext);
  const [artifact, setArtifact] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleSearch = async () => {
    try {
      const res = await axios.post(
        "https://artifact-server-rust.vercel.app/searchartifacts",
        {
          searchText,
        }
      );
      setArtifact(res.data);
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  useEffect(() => {
    const fetchAll = async () => {
      const res = await axios.get(
        "https://artifact-server-rust.vercel.app/allartifacts"
      );
      setArtifact(res.data);
    };
    fetchAll();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="back">
      <Helmet>
        <title>ALLArtifact</title>
      </Helmet>
      <h1 className="text-center text-3xl p-5 italic">All Artifacts</h1>

      {/* 🔍 Search Input and Button */}
      <div className="max-w-md mx-auto mb-6 px-5 flex gap-2">
        <input
          type="text"
          placeholder="Search by artifact name..."
          className="w-full p-2 border border-gray-300 rounded"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
        {artifact.length > 0 ? (
          artifact
            .sort((a, b) => b.likeCount - a.likeCount)
            .map((artifact) => (
              <div
                key={artifact._id}
                className=" bg-[#f8f8f8] rounded shadow p-4  hover:shadow-lg transition"
              >
                <img
                  src={artifact.image}
                  alt={artifact.artifactName}
                  className="w-full h-48 object-cover rounded"
                />
                <h2 className="text-xl racing-sans-one-regular font-bold mt-2">
                  {artifact.artifactName}
                </h2>
                <p className="text-black racing-sans-one-regular">
                  {artifact.shortDescription}
                </p>
                <div className="flex justify-between">
                  <p className="text-sm text-black racing-sans-one-regular mt-1 flex items-center gap-2">
                    Likes : {artifact.likeCount}
                  </p>
                  <NavLink
                    to={`/allartifacts/${artifact._id}`}
                    className="btn bg-blue-500 text-white px-3 py-1 rounded flex items-center gap-1"
                  >
                    View Details <FaArrowRight />
                  </NavLink>
                </div>
              </div>
            ))
        ) : (
          <p className="text-center min-h-[500px] col-span-3 text-gray-500 text-lg">
            No artifacts found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Allartifact;
