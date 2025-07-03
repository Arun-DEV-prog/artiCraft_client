import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import axios from "axios";

const MyLikedArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/artifacts/liked?email=${user.email}`)
        .then((res) => setArtifacts(res.data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [user?.email]);

  console.log(artifacts);

  if (loading) {
    return (
      <div className="text-center mt-20 text-gray-500 text-lg">Loading...</div>
    );
  }

  if (!artifacts.length) {
    return (
      <div className="text-center mt-20 text-gray-600 text-xl">
        You haven't liked any artifacts yet.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
      {artifacts.map((artifact) => (
        <div
          key={artifact._id}
          className="border p-4 rounded-xl shadow hover:shadow-md transition bg-white"
        >
          <h1 className=" text-xl text-black mb-3">{artifact.artifactName}</h1>
          <img
            src={artifact.image}
            alt={artifact.artifactName}
            className="w-full h-48 object-cover mb-2 rounded"
          />
          <h3 className="text-lg font-bold">{artifact.artifactName}</h3>
          <p className="text-sm text-gray-700 line-clamp-3">
            {artifact.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MyLikedArtifacts;
