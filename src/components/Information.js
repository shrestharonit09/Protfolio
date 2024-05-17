import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Information = () => {
  return (
    <div className="flex justify-center">
    <div className="flex md:justify-end w-[80vw]">
      <div className="flex flex-col md:flex-row gap-5">
        <h1 className=" text-md  md:text-xl text-blue-950">+977 9810113144</h1>
        <h1 className=" text-md md:text-xl text-blue-950">+977 9862366527</h1>
        <h1 className=" text-md md:text-xl text-blue-950">
          venture.ronit@gmail.com
        </h1>
       <div className="flex gap-3 py-1">
        <FaGithub className="text-xl" />
        <AiFillTwitterCircle className="text-xl" />
        <FaLinkedin className="text-xl" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Information;
