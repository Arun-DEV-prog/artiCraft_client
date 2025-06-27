import { createBrowserRouter } from "react-router";

import React from "react";
import Rootlayout from "../layouts/Rootlayout";
import home from "../components/Home/Home";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);

export default router;
