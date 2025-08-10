import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
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
      ? `https://artifact-server-rust.vercel.app/allartifacts/${id}/unlike`
      : `https://artifact-server-rust.vercel.app/allartifacts/${id}/like`;

    try {
      const res = await axios.patch(url, {
        userEmail: user.email,
      });

      if (res.data.success) {
        setLikeCount((prev) => (hasLiked ? prev - 1 : prev + 1));
        setHasLiked((prev) => !prev);
        if (!hasLiked) {
          setAnimateLike(true);
          setTimeout(() => setAnimateLike(false), 500);
        }
      }
    } catch (err) {
      console.error("Error toggling like:", err);
    }
  };

  const { image, artifactName, description } = userData;

  return (
    <div className="p-5 back text-black min-h-screen">
      <Helmet>
        <title>MyArtifactDetails</title>
      </Helmet>

      {/* Title Centered */}
      <h2 className="text-3xl font-semibold text-center mb-10">
        {artifactName}
      </h2>

      {/* Content: Image Left, Description Card Right */}
      <div className="max-w-5xl mx-auto bg-gray-50 rounded-md shadow-md p-6 flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center items-start">
          <img
            src={image}
            alt={artifactName}
            className="rounded-md object-cover w-full max-h-96"
          />
        </div>

        {/* Description card with centered text */}
        <div className="md:w-1/2 flex flex-col justify-center items-center bg-white rounded-lg p-8 shadow-lg">
          <p className="text-gray-800 text-base leading-relaxed text-center mb-6">
            {description}
          </p>

          {/* Like Button and Count below description, centered */}
          <div className="flex flex-col items-center space-y-2">
            <button
              type="button"
              onClick={handleLikeToggle}
              title={hasLiked ? "Unlike" : "Like"}
              className={`text-4xl transition-transform ${
                hasLiked ? "text-red-600" : "text-gray-400 hover:text-red-500"
              } ${animateLike ? "scale-125" : ""}`}
            >
              {hasLiked ? "❤️" : "🤍"}
            </button>
            <span
              className={`text-lg font-semibold transition-colors ${
                animateLike ? "text-red-600 scale-110" : "text-gray-700"
              }`}
            >
              {likeCount1}
            </span>
            <div className="text-sm text-gray-600">
              Liked by <span className="font-bold">{likeCount1}</span> users
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artifactdetails;
