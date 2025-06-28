import React from "react";
import { NavLink } from "react-router";
import "../Navber/navStyle.css";
const Navber = () => {
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
        <NavLink>
          {({ isActive }) => (
            <span className={isActive ? "active" : " "}> All Artifacts</span>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink>Add Artifacts</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar  sticky top-0 bg-[#1974cf] z-30 ">
      <div className="navbar-start">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <a className="text-xl  text-white font-[--font-playwrite]">Artifacts</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <NavLink className="btn" to="/login">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navber;
