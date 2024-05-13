import React from "react";
import picture1 from "../pictures/Chain.png";
import picture2 from "../pictures/Github.png";

const Card = (props) => {
  return (
    <div className="flex justify-center">
      <div className="w-[24vw] flex flex-col">
        <img className="rounded-t-xl h-[25vh] w-[25vw]" src={props.image} alt="project" />
        <div className="p-5 flex flex-col gap-3 justify-center bg-white shadow-lg rounded-b-xl">
          <h1 className="text-xl font-bold ">{props.title}</h1>
          <p className="text-justify">
            {props.description.length >402
              ? props.description.slice(0,380) + "..."
              : props.description}
          </p>
          <div className="flex gap-1">
            <h1 className="font-semibold text-blue-950">Tech Stack :</h1>
            <h1 className="text-blue-950">HTML,JavaScript,React</h1>
          </div>
          <div className="flex gap-8">
            <div className="flex gap-1 ">
              <img src={picture1} alt="chainLogo" />
              <h1 className="font-semibold ">Live Preview</h1>
            </div>
            <div className="flex gap-1">
              <img src={picture2} alt="GithubLogo" />
              <h1 className="font-semibold">View Code</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
