import React from "react";
import Picture from "../pictures/Ronit.png";

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col sm:flex-row sm:justify-between md:flex-row md:justify-between w-[80vw]">
        <div>
          <div className="flex flex-col gap-3 py-5">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl text-blue-950">
              Hi👋,
            </h1>

            <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl text-blue-950">
              My name is
            </h1>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl text-blue-950">
              <span className="text-transparent bg-gradient-to-r bg-clip-text from-indigo-500 via-purple-500 to-pink-500">
                Ronit Shrestha
              </span>
            </h1>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl text-blue-950">I build things for web</h1>
          </div>
        </div>
        <div>
          <img
            style={{ boxShadow: "0px 0px 20px 0px blue" }}
            className="h-44 md:h-60 lg:h-80  w-44 md:w-60 lg:w-80 rounded-full "
            src={Picture}
            alt="Ronit Shrestha"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
