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
    <div className="flex justify-between">
      <div className="px-2">
        <button onClick={handleClicked}>
          <FaBars />
        </button>
      </div>
      <div className="flex gap-2 px-2">
        <div className="text-xl">
          <a href="https://github.com/shrestharonit09">
            <FaGithub />
          </a>
        </div>
        <div className="text-xl">
          <AiFillTwitterCircle />
        </div>
        <div className="text-xl">
          <a href="https://www.linkedin.com/in/ronit-shrestha-9b0ab82b7/">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 z-50 bg-blue-800 h-3/2 w-1/4 p-4 transform ${
          sidebar ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-1000 ease-in-out`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex justify-end">
            <button className="bg-red-500 px-2" onClick={handleClicked}>
              x
            </button>
          </div>
          <div
            className="flex flex-col gap-2 px-2  text-lg text-white font-semibold"
            onClick={handleClicked}
          >
            <Link to="/" className="hover:text-sky-600">Home</Link>
            <Link to="/home" className="hover:text-sky-600">About</Link>
            <Link to="/tech" className="hover:text-sky-600">TechStack</Link>
            <Link to="/project" className="hover:text-sky-600">Projects</Link>
            <Link to="/contact" className="hover:text-sky-600">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
