import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthProvider";
import useApllicationApi from "../../api/useApllicationApi";
import { Helmet } from "react-helmet";
import Loading from "../../components/Loading";

const MyLikedArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { myApplicationPromise } = useApllicationApi();

  useEffect(() => {
    if (user?.email) {
      // axios
      //   .get(`https://artifact-server-rust.vercel.app/artifacts/liked?email=${user.email}`, {
      //     headers: {
      //       Authorization: `Bearer ${user.accessToken}`,
      //     },
      //   })
      myApplicationPromise(user.email)
        .then((data) => setArtifacts(data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, []);
  // console.log(artifacts);

  if (loading) {
    return <Loading />;
  }

  if (!artifacts.length) {
    return (
      <div className="text-center mt-20 text-gray-600 text-xl min-h-[700px]">
        You haven't liked any artifacts yet.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
      <Helmet>
        <title>MyLikedArtifacts</title>
      </Helmet>
      {artifacts.map((artifact) => (
        <div
          key={artifact._id}
          className=" p-4 rounded-xl shadow hover:shadow-md transition "
        >
          <img
            src={artifact.image}
            alt={artifact.artifactName}
            className="w-full h-48 object-cover mb-2 rounded"
          />
          <h3 className="text-lg font-bold mb-1">{artifact.artifactName}</h3>
          <p className="text-sm text-white line-clamp-3">
            {artifact.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MyLikedArtifacts;
