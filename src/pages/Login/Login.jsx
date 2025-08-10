import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import singin from "../../assets/Animation - 1750425542532 (1).json";
import { Helmet } from "react-helmet";
import { useTheme } from "../../context/ThemeContext";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/allartifacts";

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch(() => toast.error("❌ Login failed. Please try again."));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch(() => toast.error("❌ Google login failed. Please try again."));
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 py-10 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="w-full max-w-6xl flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
        {/* Form Card */}
        <div
          className={`w-full max-w-md shadow-2xl rounded-lg p-6 transition-colors duration-300 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h1
            className={`text-3xl lg:text-4xl font-bold text-center mb-6 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Login now!
          </h1>
          <form onSubmit={handleFormSubmit} className="space-y-4">
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
                required
                placeholder="Enter your email"
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
                required
                placeholder="Enter your password"
                className={`w-full px-4 py-2 border rounded-md mt-1 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                  darkMode
                    ? "bg-gray-700 text-white border-gray-600"
                    : "bg-white text-black border-gray-300"
                }`}
              />
            </div>
            <div
              className={`flex justify-between text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <a href="#" className="hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            >
              Login
            </button>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className={`w-full flex items-center justify-center gap-2 py-2 border rounded-md mt-3 transition-colors ${
                darkMode
                  ? "border-gray-500 text-white hover:bg-gray-700"
                  : "border-gray-300 text-black hover:bg-gray-100"
              }`}
            >
              <svg width="18" height="18" viewBox="0 0 512 512">
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                />
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                />
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                />
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                />
              </svg>
              Login with Google
            </button>

            <p
              className={`text-sm text-center mt-4 ${
                darkMode ? "text-gray-300" : "text-black"
              }`}
            >
              Don't have an account?
              <Link
                to="/register"
                className="text-blue-500 font-medium ml-1 hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>

        {/* Lottie Animation */}
        <div className="w-full max-w-md">
          <Lottie animationData={singin} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Login;
