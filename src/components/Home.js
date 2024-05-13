import React from "react";
import Picture from "../pictures/Ronit.png";

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-between w-[80vw]">
        <div>
          <div className="flex flex-col gap-3 py-5">
            <div>
              <h1 className="font-bold text-6xl text-blue-950">Hi👋,</h1>
            </div>

            <div>
              <h1 className="font-bold text-6xl text-blue-950">My name is</h1>
            </div>

            <div>
              <h1 className="font-bold text-6xl text-blue-950">
                <span className="text-transparent bg-gradient-to-r bg-clip-text from-indigo-500 via-purple-500 to-pink-500">
                  Ronit Shrestha
                </span>
              </h1>
            </div>

            <div>
              <h1 className="font-bold text-6xl text-blue-950">
                I build things for web
              </h1>
            </div>
          </div>
        </div>
        <div>
          <img
            style={{ boxShadow: "0px 0px 20px 0px blue" }}
            className=" h-80 w-80 rounded-full"
            src={Picture}
            alt="Ronit Shrestha"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
