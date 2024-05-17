import React from "react";
import Home from "./Home";
import Tech from "./Tech";
import Project from "./Project";
import Information from "./Information";

const Complete = () => {
  return (
    <div>
      <div className="flex flex-col gap-20 md:gap-64 bg-gray-100">
        <Home />
        <Tech />
        <Project />
        <Information />
      </div>
    </div>
  );
};

export default Complete;
