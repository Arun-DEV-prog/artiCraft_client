import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import { FaArrowRightFromBracket, FaArrowUpFromBracket } from "react-icons/fa6";

const Navber = () => {
  const notifyLogout = () => toast.success("✅ Logged out successfully");
  const { user, logOut } = useContext(AuthContext);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const toggleDropdown = () => setOpenDropdown((prev) => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const handleLogout = () => {
    logOut()
      .then(() => {
        notifyLogout();
        setOpenDropdown(false);
        navigate("/login");
      })
      .catch(() => {
        toast.error("❌ Logout failed. Please try again.");
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-500 font-semibold" : "hover:text-yellow-500"
          }
          onClick={() => setMobileMenuOpen(false)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allartifacts"
          className={({ isActive }) =>
            isActive ? "text-yellow-500 font-semibold" : "hover:text-yellow-500"
          }
          onClick={() => setMobileMenuOpen(false)}
        >
          All Artifacts
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addartifact"
          className={({ isActive }) =>
            isActive ? "text-yellow-500 font-semibold" : "hover:text-yellow-500"
          }
          onClick={() => setMobileMenuOpen(false)}
        >
          Add Artifacts
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#f8f8f8] shadow-md z-50 px-5">
      <div className="navbar flex justify-between items-center h-16 max-w-7xl mx-auto">
        {/* Left side: logo and hamburger for mobile */}
        <div className="flex items-center space-x-4">
          {/* Mobile hamburger */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden btn btn-ghost btn-circle p-0 text-black"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              // Close icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Logo */}
          <NavLink
            to="/"
            className="text-3xl italic font-bold text-black font-[--font-playwrite]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Arti<span className="text-yellow-500">F</span>acts
          </NavLink>
        </div>

        {/* Desktop links */}
        <ul className="hidden lg:flex space-x-8 text-black text-[16px]">
          {links}
        </ul>

        {/* Right side user/auth */}
        <div className="flex items-center space-x-4">
          {!user ? (
            <>
              <NavLink
                to="/login"
                className="btn bg-blue-500 text-black text-[16px] flex items-center space-x-2"
              >
                <FaArrowRightFromBracket />
                <span>Sign In</span>
              </NavLink>
              <NavLink
                to="/register"
                className="btn bg-blue-500 text-black text-[16px] flex items-center space-x-2"
              >
                <FaArrowUpFromBracket />
                <span>Sign Up</span>
              </NavLink>
            </>
          ) : (
            <>
              {/* User Photo */}
              <img
                src={user.photoURL}
                alt={user.displayName || "User"}
                className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
                title={user.displayName || "User"}
              />

              {/* Profile button and dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="btn btn-outline text-gray-700"
                  aria-expanded={openDropdown}
                  aria-haspopup="true"
                  type="button"
                >
                  Profile
                </button>

                {openDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                    <ul className="text-gray-700 text-sm">
                      <li
                        onClick={() => {
                          navigate("/my-artifacts");
                          setOpenDropdown(false);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        My Artifacts
                      </li>
                      <li
                        onClick={() => {
                          navigate("/liked-artifacts");
                          setOpenDropdown(false);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Liked Artifacts
                      </li>
                    </ul>
                    <div className="border-t">
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 cursor-pointer"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <ul className="lg:hidden border-t border-gray-300 text-black text-lg flex flex-col space-y-2 p-4">
          {links}
        </ul>
      )}
    </nav>
  );
};

export default Navber;
