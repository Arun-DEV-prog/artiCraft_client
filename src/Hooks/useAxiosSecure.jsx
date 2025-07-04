import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const axionInstance = axios.create({
  baseURL: "https://artifact-server-rust.vercel.app/",
});

const useAxiosSecure = () => {
  const { user } = useContext(AuthContext);
  axionInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });
  return axionInstance;
};

export default useAxiosSecure;
