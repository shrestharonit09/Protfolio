import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Information = () => {
  return (
    <div>
      <div className="flex justify-center h-[15vh]">
        <div className="w-[80vw] h-[10vh] border-b-2 border-gray-300 flex justify-end gap-10">
          <h1 className="text-blue-950">+977 9810113144</h1>
          <h1 className="text-blue-950">+977 9862366527</h1>
          <h1 className="text-blue-950">venture.ronit@gmail.com</h1>
          <div className="flex gap-2 p-1">
            <a href="https://github.com/shrestharonit09"><FaGithub className="text-xl" /></a>
            <AiFillTwitterCircle className="text-xl" />
            <FaLinkedin className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
