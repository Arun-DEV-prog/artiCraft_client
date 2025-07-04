import { useContext } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { AuthContext } from "../context/AuthProvider";

const useMyArtifactAxios = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext); // Optional: Get email directly

  const fetchMyArtifacts = async (email = user?.email) => {
    if (!email) return [];

    try {
      const res = await axiosSecure.get(`artifacts?email=${email}`);
      return res.data?.artifact || [];
    } catch (err) {
      console.error("Failed to fetch artifacts:", err);
      return [];
    }
  };

  return {
    fetchMyArtifacts,
  };
};

export default useMyArtifactAxios;
