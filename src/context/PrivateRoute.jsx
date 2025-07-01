import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Loading from "../components/Loading";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <Loading></Loading>;
  if (!user) return <Navigate to="/login" replace></Navigate>;
  return children;
};

export default PrivateRoute;
