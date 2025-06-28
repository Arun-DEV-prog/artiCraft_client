import React, { useContext } from "react";

import { AuthContext } from "../../context/AuthProvider";
import { Link } from "react-router";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
  };

  return (
    <div className="back">
      <div className="w-[500px] h-[500px] mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body mt-5 border rounded-md shadow-lg">
              <h1 className="text-5xl text-white mb-4 text-center font-bold">
                Login now!
              </h1>
              <form onSubmit={handleFormSubmit} className="fieldset">
                <label className="label text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input text-black placeholder:text-gray-700"
                />
                <label className="label text-white">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input text-black placeholder:text-gray-700"
                />
                <div>
                  <a className="link link-hover text-white">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>

                <p className=" text-[16px] text-center">
                  Don't have an account?
                  <Link className="text-blue-600" to="/register">
                    Register
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
