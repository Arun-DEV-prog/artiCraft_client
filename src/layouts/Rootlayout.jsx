import React from "react";
import Navber from "../components/Navber/Navber";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const Rootlayout = () => {
  return (
    <div>
      <Navber />
      <Outlet />
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Rootlayout;
