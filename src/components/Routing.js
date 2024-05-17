import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"
import Tech from "./Tech";
import Project from "./Project";
import Information from "./Information";
import Complete from "./Complete";
import Navbar from "./Navbar";


const Routing = () => {
  return (
    <div className="h-auto bg-gray-100 ">
      <Router>
        <Navbar/>
        <div className="mt-32 ">
        <Routes>
          <Route path="/" element={<Complete />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/tech" element={<Tech />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/contact" element={<Information />}></Route>
        </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Routing;
