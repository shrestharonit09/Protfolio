import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Tech from "./Tech";
import Project from "./Project";
import Information from "./Information";

const Complete = () => {
  return (
    <div>
      <div className="flex flex-col gap-64 bg-gray-100 mt-48">
        <Home />
        <Tech />
        <Project />
        <Information />
      </div>
    </div>
  );
};

export default Complete;