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
      <div className={`flex ${width>770?"justify-center":"justify-start"} bg-[#f3f4f6]`}>
        {width > 770 ? (
          <div className="flex justify-between bg-[#f3f4f6]  h-20  pt-8 w-[84vw] fixed">
            <div className="flex  gap-2 md:gap-10 lg:gap-20 p-1">
              <NavLink 
                to="/"
                className={({ isActive }) =>
                isActive ? "text-blue-400" : "text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg"
              }
              >
                Home
              </NavLink>
              <NavLink 
                to="/home"
                className={({ isActive }) =>
                 isActive ? "text-blue-400" : "text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg"
              }
                
              >
                About
              </NavLink>
              <NavLink 
                to="/tech"
                className={({ isActive }) =>
                 isActive ? "text-blue-400" : "text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg"
              }
              >
                TechStack
              </NavLink>
              <NavLink 
                to="/project"
                className={({ isActive }) =>
                 isActive ? "text-blue-400" : "text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg"
              }
              >
                Projects
              </NavLink>
              <NavLink 
                to="/contact"
                className={({ isActive }) =>
                 isActive ? "text-blue-400" : "text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg"
              }
              >
                Contact
              </NavLink>
            </div>

            <div className="flex justify-end">
              <div className="flex  gap-2 md:gap-5 lg:gap-10 p-1">
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
          <div className="p-5">
            <Sidebar className="text-md" />
          </div>
        )}
      </div>
  );
};

export default Navbar;
