import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import axios from "axios";
import { NavLink, useParams } from "react-router";
import { BiLike } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import Loading from "../../components/Loading";

const Allartifact = () => {
  const { loading } = useContext(AuthContext);
  const [artifact, setArtifact] = useState([]);
  useEffect(() => {
    const fetchArtifacts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/allartifacts");
        setArtifact(res.data);
      } catch (err) {
        console.error("Error fetching artifact :", err);
      }
    };
    fetchArtifacts();
  }, []);
  if (loading) return <Loading></Loading>;

  return (
    <div className="back">
      <h1 className="text-center text-3xl p-5 italic ">All Artifacts</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
        {artifact
          .sort((a, b) => b.likeCount - a.likeCount) // Step 1: Sort by likeCount (highest first)
          // Step 2: Take top 6
          .map((artifact) => (
            <div
              key={artifact._id}
              className="border rounded shadow p-4 bg-white hover:shadow-lg transition"
            >
              <img
                src={artifact.image}
                alt={artifact.artifactName}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-xl font-bold mt-2">
                {artifact.artifactName}
              </h2>
              <p className="text-gray-600">{artifact.shortDescription}</p>
              <div className=" flex justify-between">
                <div>
                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                    <BiLike size={20} /> Likes : {artifact.likeCount}
                  </p>
                </div>

                <div>
                  <NavLink
                    to={`/allartifacts/${artifact._id}`}
                    className="btn bg-blue-500"
                  >
                    View Details
                    <FaArrowRight className="text-white" size={20} />
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* <div className=" text-center p-4 mt-6">
        <NavLink
          to="/allartifacts"
          className="btn text-xl  bg-blue-600 px-5 py-1 text-black  "
        >
          See All
          <FaArrowRight className="text-white" size={20} />{" "}
        </NavLink>
      </div> */}
    </div>
  );
};

export default Allartifact;
