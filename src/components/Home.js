import React from "react";
import Picture from "../pictures/Ronit.png";

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="xl:py-12 xl:px-8 flex flex-col gap-20 xl:flex-row justify-between mt-8 w-4/5">
        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-4 text-center xl:text-left ">
            <div className="flex flex-col gap-1 sm:gap-2 ">
              <h1 className="text-gray-900 text-lg sm:text-xl md:text-2xl lg:text-3xl px-1">Hello, It's Me</h1>
              <h1 className="text-transparent bg-gradient-to-r bg-clip-text from-teal-500 via-blue-500 to-orange-500 text-3xl sm:text-4xl md:text-5xl xl:text-6xl">
                Ronit Shrestha
              </h1>

              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl px-1">
                <span className="text-gray-900">I'm a </span>
                <span className="text-transparent bg-gradient-to-r bg-clip-text from-indigo-500 via-purple-500 to-pink-500">
                  Frontend Developer
                </span>{" "}
              </h1>
            </div>
            <h1 className="text-sm md:text-md text-gray-900 px-1">
              <span>
                I'm proficient in building responsive and visually appealing web
                interfaces.
              </span>
              <br />
              Skilled in utilizing frontend frameworks like React.js to create
              dynamic user <br />
              experiences.
            </h1>
          </div>
        </div>
        <div className="flex justify-center sm:rounded-full  transform transition-transform duration-500 ease-in-out hover:scale-105">
          <img
            style={{ boxShadow: "0px 0px 60px 0px blue" }}
            className="p-2 h-52 sm:h-60 md:h-72 xl:h-96 w-52 sm:w-60 md:w-72 xl:w-96 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            src={Picture}
            alt="Ronit Shrestha"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
