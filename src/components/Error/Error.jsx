import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router";
const Error = () => {
  return (
    <div className=" md:w-[800px] mx-auto mt-5">
      <DotLottieReact
        src="https://lottie.host/ff59570e-4e68-47e1-8422-615157fab622/gqK8WPEqX3.lottie"
        loop
        autoplay
      />

      <div>
        <h1 className=" text-3xl text-red-400 text-center mt-4">
          404 -Page Not Found
        </h1>
      </div>
      <div className=" text-center mt-[50px] mb-[40px]">
        <Link to="/">
          <button className="btn btn-primary text-center">
            Go to Home Pages
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
