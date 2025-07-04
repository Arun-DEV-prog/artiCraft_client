import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet";

const Artifactdetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const userData = useLoaderData();

  const [likeCount1, setLikeCount] = useState(userData.likeCount || 0);
  const [hasLiked, setHasLiked] = useState(false);
  const [animateLike, setAnimateLike] = useState(false);

  useEffect(() => {
    if (userData.likeBy?.includes(user?.email)) {
      setHasLiked(true);
    }
  }, [userData, user?.email]);

  const handleLikeToggle = async () => {
    if (!user?.email) return;

    const url = hasLiked
      ? `http://localhost:3000/allartifacts/${id}/unlike`
      : `http://localhost:3000/allartifacts/${id}/like`;

    try {
      const res = await axios.patch(url, {
        userEmail: user.email,
      });

      if (res.data.success) {
        setLikeCount((prev) => (hasLiked ? prev - 1 : prev + 1));
        setHasLiked((prev) => !prev);
        if (!hasLiked) {
          setAnimateLike(true);
          setTimeout(() => setAnimateLike(false), 500); // Reset animation
        }
      }
    } catch (err) {
      console.error("Error toggling like:", err);
    }
  };

  const { image, artifactName, description } = userData;

  return (
    <div className="p-5 back text-black">
      <Helmet>
        <title>MyArtifactDetails</title>
      </Helmet>
      <div className="rounded-md mx-auto shadow-md sm:w-96 bg-gray-50 dark:text-gray-800">
        <div className="flex items-center justify-between p-3">
          <h2 className="text-xl font-semibold">{artifactName}</h2>
        </div>
        <img
          src={image}
          alt={artifactName}
          className="object-cover w-full h-72 p-3 rounded"
        />
        <div className="p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={handleLikeToggle}
                title={hasLiked ? "Unlike" : "Like"}
                className={`text-2xl transition transform ${
                  hasLiked ? "text-red-600" : "text-gray-400 hover:text-red-500"
                } ${animateLike ? "scale-125" : ""}`}
              >
                {hasLiked ? "❤️" : "🤍"}
              </button>
              <span
                className={`transition text-sm font-semibold ${
                  animateLike ? "text-red-600 scale-110" : "text-gray-700"
                }`}
              >
                {likeCount1}
              </span>
            </div>
          </div>

          <div className="pt-1 pb-2 text-sm text-gray-600">
            Liked by <span className="font-bold">{likeCount1}</span> users
          </div>

          <p className="text-[15px] text-gray-800 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Artifactdetails;
