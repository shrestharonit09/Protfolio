import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed z-50 top-0 w-full bg-gray-100">
      {width > 800 ? (
        <div className="flex justify-between px-2 py-4">
          <div className="flex w-1/2 justify-around text-lg xl:text-2xl">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 font-semibold "
                  : "text-md text-gray-500 font-semibold rounded-lg"
              }
            >
              <span className="hover:after:w-full after:block after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 after:ease-in-out">
                Home
              </span>
            </NavLink>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 font-semibold "
                  : "text-md text-gray-500 font-semibold  rounded-lg"
              }
            >
             <span className="hover:after:w-full after:block after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 after:ease-in-out">
                About
              </span>
            </NavLink>
            <NavLink
              to="/tech"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 font-semibold "
                  : "text-md text-gray-500 font-semibold  rounded-lg"
              }
            >
            <span className="hover:after:w-full after:block after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 after:ease-in-out">
              Tech Stack
              </span>
            </NavLink>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 font-semibold "
                  : "text-md text-gray-500 font-semibold  rounded-lg"
              }
            >
              <span className="hover:after:w-full after:block after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 after:ease-in-out">
                Projects
              </span>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 font-semibold "
                  : "text-md text-gray-500 font-semibold  rounded-lg"
              }
            >
             <span className="hover:after:w-full after:block after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 after:ease-in-out">
               Contact
              </span>
            </NavLink>
          </div>
          <div className="flex gap-4 xl:gap-8 text-2xl xl:text-3xl">
            <a href="https://github.com/shrestharonit09">
              <FaGithub />
            </a>
            <AiFillTwitterCircle />
            <a href="https://www.linkedin.com/in/ronit-shrestha-9b0ab82b7/">
              <FaLinkedin />
            </a>
          </div>
        </div>
      ) : (
        <div className="p-5">
          <Sidebar className="text-md" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
