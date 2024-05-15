import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const handleClicked = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="px-2">
        <button onClick={handleClicked}>
          <FaBars />
        </button>
      </div>
      <div>
        {sidebar ? (
          <div >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 px-2">
                <Link
                  to="/"
                  className="text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg"
                >
                  Home
                </Link>
                <Link
                  to="/home"
                  className="text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg"
                >
                  About
                </Link>
                <Link
                  to="/tech"
                  className="text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg"
                >
                  TechStack
                </Link>
                <Link
                  to="/project"
                  className="text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg"
                >
                  Projects
                </Link>
                <Link
                  to="/contact"
                  className="text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg"
                >
                  Contact
                </Link>
              </div>
              <div className="flex gap-2 px-2">
                <div className="text-2xl">
                  <a href="https://github.com/shrestharonit09">
                    <FaGithub />
                  </a>
                </div>
                <div className="text-2xl">
                  <AiFillTwitterCircle />
                </div>
                <div className="text-2xl">
                  <a href="https://www.linkedin.com/in/ronit-shrestha-9b0ab82b7/">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
