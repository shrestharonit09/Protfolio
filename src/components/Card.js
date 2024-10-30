import React from "react";
import picture1 from "../pictures/Chain.png";
import picture2 from "../pictures/Github.png";

const Card = (props) => {
  return (
   
      <div className="flex flex-col border border-gray-300 rounded-t-lg relative transform transition-transform duration-500 ease-in-out hover:scale-105">
        <img
          className="h-[50vh] rounded-t-lg "
          src={props.image}
          alt="Project"
        />
        <div className="flex justify-center items-center absolute top-0 bg-gradient-to-b from-black to-red-600 h-full w-full opacity-0 hover:opacity-90">
          <div className="flex flex-col w-2/3 break-all">
          <h1 className="text-xl text-white font-semibold text-center">{props.title}</h1>
          <h1 className="text-sm text-white">{props.description}</h1>
          </div>
        </div>

        <div className="bg-white rounded-b-lg shadow-lg flex flex-col gap-3 py-2 px-1 text-xs overflow-auto">
          <div className="flex gap-1">
            <h1 className="font-semibold text-blue-950">Tech</h1>
            <h1 className="font-semibold text-blue-950">Stack</h1>
            <h1 className="font-semibold text-blue-950">:</h1>
            <h1 className="text-blue-950">HTML,</h1>
            <h1 className="text-blue-950">JavaScript,</h1>
            <h1 className="text-blue-950">JavaScript</h1>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-1 ">
              <img src={picture1} alt="chainLogo" />
              <h1 className="font-semibold ">Live</h1>
              <h1 className="font-semibold ">Preview</h1>
            </div>

            <div className="flex gap-1">
              <img src={picture2} alt="GithubLogo" />
              <h1 className="font-semibold">View</h1>
              <h1 className="font-semibold">Code</h1>
              
            </div>
          </div>
        </div>
        
      </div>
   
  );
};

export default Card;
