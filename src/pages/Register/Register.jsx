import React, { useContext } from "react";
import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthProvider";

const Register = () => {
  const { signUp } = useContext(AuthContext);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData.email);

    signUp(userData.email, userData.password)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="back">
      <div className="w-[500px] h-[600px] mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body mt-5 border rounded-md shadow-lg">
              <h1 className="text-3xl italic text-white mb-4 text-center font-bold">
                Register Now !
              </h1>
              <form onSubmit={handleFormSubmit} className="fieldset">
                <label className="label text-white">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input text-black placeholder:text-gray-700"
                />
                <label className="label text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input text-black placeholder:text-gray-700"
                />
                <label className="label text-white">PhotoURl</label>
                <input
                  type="text"
                  name="photourl"
                  placeholder="Photourl"
                  className="input text-black placeholder:text-gray-700"
                />
                <label className="label text-white">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input text-black placeholder:text-gray-700"
                />

                <button type="submit" className="btn btn-neutral mt-4">
                  Register
                </button>

                <p className=" text-[16px] text-center">
                  Already have an account ?
                  <Link
                    to="/login"
                    className="text-blue-400 underline font-bold"
                  >
                    SignIn
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

export default Register;
