import React from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const useApllicationApi = () => {
  const axiosSecure = useAxiosSecure();

  const myApplicationPromise = (email) => {
    return axiosSecure
      .get(`artifacts/liked?email=${email}`)
      .then((res) => res.data);
  };
  return {
    myApplicationPromise,
  };
};

export default useApllicationApi;
