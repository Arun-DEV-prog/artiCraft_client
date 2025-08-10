import React from "react";
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {/* About Section */}
        <div>
          <h1 className="text-2xl font-bold mb-4">ArtifactVault</h1>
          <p className="text-gray-400">
            Discover the hidden treasures of human history. Explore rare and
            iconic artifacts from around the world, preserved and presented with
            modern technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Explore</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/allartifacts" className="hover:text-white">
                All Artifacts
              </a>
            </li>

            <li>
              <a href="/addartifact" className="hover:text-white">
                Add Artifact
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Technologies Used</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a
                href="https://reactjs.org/"
                target="_blank"
                className="hover:text-white"
                rel="noreferrer"
              >
                React.js
              </a>
            </li>
            <li>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                className="hover:text-white"
                rel="noreferrer"
              >
                Tailwind CSS
              </a>
            </li>
            <li>
              <a
                href="https://firebase.google.com/"
                target="_blank"
                className="hover:text-white"
                rel="noreferrer"
              >
                Firebase Auth
              </a>
            </li>
            <li>
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                className="hover:text-white"
                rel="noreferrer"
              >
                MongoDB
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Connect With Us</h2>
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.facebook.com/arunkumar.roy.52090008/"
              className="text-gray-300 hover:text-white"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://github.com/Arun-DEV-prog"
              className="text-gray-300 hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="www.linkedin.com/in/arunkumar-roy"
              className="text-gray-300 hover:text-white"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ArtifactVault. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
