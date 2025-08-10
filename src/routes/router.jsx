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
import MyLikedArtifacts from "../pages/MyLikedArtifacts/MyLikedArtifacts";
import Root2 from "../layouts/Root2";
import Error from "../components/Error/Error";

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
          fetch(
            `https://artifact-server-rust.vercel.app/allartifacts/${params.id}`
          ),
        hydrateFallbackElement: Loading,
        element: <Artifactdetails></Artifactdetails>,
      },
      {
        path: "/addartifact",
        element: <AddArtifact></AddArtifact>,
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
          fetch(
            `https://artifact-server-rust.vercel.app/allartifacts/${params.id}`
          ),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
      {
        path: "/liked-artifacts",
        element: (
          <PrivateRoute>
            <MyLikedArtifacts />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    element: <Root2></Root2>,
    children: [
      {
        path: "/*",
        Component: Error,
      },
    ],
  },
]);

export default router;
