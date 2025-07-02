import { createBrowserRouter } from "react-router";

import React from "react";
import Rootlayout from "../layouts/Rootlayout";

import Home from "../components/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Allartifact from "../pages/Allartifacts/Allartifact";
import Loading from "../components/Loading";
import Artifactdetails from "../pages/Artifactsdetails/Artifactdetails";
import AddArtifact from "../pages/AddArtifact/AddArtifact";
import PrivateRoute from "../context/PrivateRoute";
import MyArtifact from "../pages/MyArtifact/MyArtifact";
import Update from "../pages/Update/Update";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/allartifacts",
        Component: Allartifact,
      },
      {
        path: "/allartifacts/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/allartifacts/${params.id}`),
        hydrateFallbackElement: Loading,
        Component: Artifactdetails,
      },
      {
        path: "/addartifact",
        element: (
          <PrivateRoute>
            <AddArtifact></AddArtifact>
          </PrivateRoute>
        ),
      },

      //  my artifact
      {
        path: "/my-artifacts",
        element: (
          <PrivateRoute>
            <MyArtifact></MyArtifact>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/allartifacts/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
