import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import axios from "axios";
import Loading from "../../components/Loading";
import MyArtifactCard from "./MyArtifactCard";
import { Helmet } from "react-helmet";

const MyArtifact = () => {
  const { user, loading } = useContext(AuthContext);
  const [artifact, setArtifact] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchArtifacts = async () => {
      try {
        if (user?.email) {
          const res = await axios.get(
            `https://artifact-server-rust.vercel.app/artifacts?email=${user.email}`
          );

          // ✅ Fix: Ensure we access res.data.artifact (not full object)
          if (Array.isArray(res.data.artifact)) {
            setArtifact(res.data.artifact);
          } else {
            console.warn("Expected array but got:", res.data);
            setArtifact([]); // fallback
          }
        }
      } catch (error) {
        console.error("Error fetching artifacts:", error);
        setArtifact([]); // fallback in case of failure
      } finally {
        setFetching(false);
      }
    };

    fetchArtifacts();
  }, [user?.email]);

  if (loading || fetching) return <Loading />;

  return (
    <div className="back min-h-screen py-8 px-4">
      <Helmet>
        <title>My Artifacts</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-center mb-6 text-white">
        My Artifacts
      </h2>

      {artifact.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <h1 className="text-xl text-gray-600 font-medium">
            You haven't added any artifacts yet.
          </h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artifact.map((data) => (
            <MyArtifactCard
              key={data._id}
              data={data}
              onDelete={(id) =>
                setArtifact((prev) => prev.filter((a) => a._id !== id))
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyArtifact;
