import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import register from "../../assets/Animation - 1751533746511.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import { useTheme } from "../../context/ThemeContext";

const Register = () => {
  const navigate = useNavigate();
  const { signUp } = useContext(AuthContext);
  const { darkMode } = useTheme();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    signUp(userData.email, userData.password)
      .then(() => {
        navigate("/login");
      })
      .catch(() => {
        // Optional: show toast here if desired
      });
  };

  return (
    <div
      className={`min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 py-10 gap-10 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <Helmet>
        <title>Register</title>
      </Helmet>

      {/* Lottie Animation */}
      <div className="w-full max-w-md">
        <Lottie animationData={register} loop={true} />
      </div>

      {/* Register Form */}
      <div
        className={`w-full max-w-md shadow-2xl rounded-lg p-6 transition-colors duration-300 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h1
          className={`text-3xl lg:text-4xl text-center font-bold mb-6 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Register Now!
        </h1>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label
              className={`block text-sm font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className={`w-full px-4 py-2 border rounded-md mt-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
              }`}
              required
            />
          </div>
          <div>
            <label
              className={`block text-sm font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className={`w-full px-4 py-2 border rounded-md mt-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
              }`}
              required
            />
          </div>
          <div>
            <label
              className={`block text-sm font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Photo URL
            </label>
            <input
              type="text"
              name="photourl"
              placeholder="Photo URL"
              className={`w-full px-4 py-2 border rounded-md mt-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
              }`}
            />
          </div>
          <div>
            <label
              className={`block text-sm font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={`w-full px-4 py-2 border rounded-md mt-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
              }`}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Register
          </button>

          <p
            className={`text-sm text-center mt-4 ${
              darkMode ? "text-gray-300" : "text-black"
            }`}
          >
            Already have an account?
            <Link
              to="/login"
              className="text-blue-500 font-semibold ml-1 hover:underline"
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
