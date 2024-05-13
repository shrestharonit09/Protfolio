import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex gap-20 justify-end mt-12 w-[80vw]">
        <div className="flex gap-20 p-1 ">
          <Link to="/" className="text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg">
            Home
          </Link>
          <Link to="/home" className="text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg">
            About
          </Link>
          <Link to="/tech" className="text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg">
            Tech Stack
          </Link>
          <Link to="/project" className="text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg">
            Projects
          </Link>
          <Link to="/contact" className="text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg">
            Contact
          </Link>
        </div>

        <div className="flex justify-end">
          <div className="flex gap-7 p-1 ">
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
    </div>
  );
};

export default Navbar;
