import React from "react";
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        <div>
          <h1 className="text-2xl font-bold mb-4">MySite</h1>
          <p className="text-gray-400">
            A modern web app built with React, Firebase, and TailwindCSS. Fast,
            secure, and user-friendly.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/dashboard" className="hover:text-white">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-white">
                Login
              </a>
            </li>
            <li>
              <a href="/register" className="hover:text-white">
                Register
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Resources</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a
                href="https://reactjs.org/"
                target="_blank"
                className="hover:text-white"
              >
                React
              </a>
            </li>
            <li>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                className="hover:text-white"
              >
                Tailwind CSS
              </a>
            </li>
            <li>
              <a
                href="https://firebase.google.com/"
                target="_blank"
                className="hover:text-white"
              >
                Firebase
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-gray-300 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaGithub />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} MySite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
