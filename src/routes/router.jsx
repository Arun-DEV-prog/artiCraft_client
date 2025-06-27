import { createBrowserRouter } from "react-router";

import React from "react";
import Rootlayout from "../layouts/Rootlayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
  },
]);

export default router;
