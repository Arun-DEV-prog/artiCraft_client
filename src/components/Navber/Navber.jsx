import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import "../Navber/navStyle.css";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FaArrowUpFromBracket } from "react-icons/fa6";

const Navber = () => {
  const notify1 = () => toast("✅ LogOut Successfully");
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  const toggleDropdown = () => setOpen(!open);
  useEffect(() => {
    const handleShowUser = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleShowUser);
    return () => document.removeEventListener("mousedown", handleShowUser);
  }, []);
  // console.log(user);
  const links = (
    <>
      <li>
        <NavLink to="/">
          {({ isActive }) => (
            <span className={isActive ? "active" : " "}>Home</span>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/allartifacts">
          {({ isActive }) => (
            <span className={isActive ? "active" : " "}> All Artifacts</span>
          )}
        </NavLink>
      </li>

      <li>
        <NavLink to="/addartifact">Add Artifacts</NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logOut()
      .then((res) => {
        notify1();
      })
      .catch((err) => {
        toast.error("❌ Login failed. Please try again.");
      });
  };

  return (
    <div className="navbar  sticky top-0 bg-[#f8f8f8] shadow-md z-30  ">
      <div className="navbar-start pl-5 pr-5 ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn  lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <a className="text-3xl italic font-bold   text-black font-[--font-playwrite]">
          Arti<span className="text-yellow-500">F</span>acts
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-black text-[16px] px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end space-x-3">
        {user ? (
          ""
        ) : (
          <>
            <NavLink className=" btn text-[16px] text-black " to="/login">
              <FaArrowRightFromBracket /> Sign In
            </NavLink>

            <NavLink className=" btn text-[16px] text-black" to="/register">
              <FaArrowUpFromBracket /> Sign Up
            </NavLink>
          </>
        )}

        <div className=" relative inline-block text-left" ref={dropdownRef}>
          {user?.photoURL && (
            <div className="relative w-[40px] h-[40px] group  sm:block">
              <img
                onClick={toggleDropdown}
                className="w-full h-full rounded-full object-cover"
                src={user.photoURL}
                alt="User"
              />

              {open && (
                <div className="absolute right-0 mt-2 w-52 bg-white border rounded-md shadow-lg z-50">
                  <div className="px-4 py-2 border-b font-semibold text-gray-700">
                    {user?.displayName || "Anonymous User"}
                  </div>
                  <ul className="text-sm text-gray-700">
                    <li
                      onClick={() => {
                        navigate("/my-artifacts");
                        setOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      My Artifacts
                    </li>
                    <li
                      onClick={() => {
                        navigate("/liked-artifacts");
                        setOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Liked Artifacts
                    </li>
                  </ul>
                  <div className="border-t">
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left cursor-pointer text-red-600 hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
