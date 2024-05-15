import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  console.log(width)

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
    <div className="flex justify-center">
      <div className="flex  gap-2 md:gap-8 lg:gap-20 justify-between mt-12 w-[80vw] ">
        {width > 770 ? (
          <>
            <div className="flex  gap-2 md:gap-10 lg:gap-20 p-1">
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
          </>
        ) : (
          <div className="py-2">
            <Sidebar className="text-md" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
