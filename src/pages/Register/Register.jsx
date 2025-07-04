import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import register from "../../assets/Animation - 1751533746511.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";

const Register = () => {
  const navigate = useNavigate();
  const { signUp } = useContext(AuthContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    // console.log(userData.email);

    signUp(userData.email, userData.password)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => err);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center back px-4 py-10 gap-10">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="w-full max-w-md">
        <Lottie animationData={register} loop={true} />
      </div>

      {/* Register Form */}
      <div className="w-full max-w-md bg-white shadow-2xl rounded-lg p-6">
        <h1 className="text-3xl lg:text-4xl text-center font-bold text-gray-800 mb-6">
          Register Now!
        </h1>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-md mt-1 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border rounded-md mt-1 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="text"
              name="photourl"
              placeholder="Photo URL"
              className="w-full px-4 py-2 border rounded-md mt-1 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md mt-1 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Register
          </button>

          <p className="text-sm text-black text-center mt-4">
            Already have an account?
            <Link
              to="/login"
              className="text-blue-500 font-semibold ml-1 underline"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
