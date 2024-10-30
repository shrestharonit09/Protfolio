import React, { useState, useEffect } from "react";
import picture1 from "../pictures/HtmlLogo.svg";
import picture2 from "../pictures/CssLogo.svg";
import picture3 from "../pictures/ReactLogo.svg";
import picture4 from "../pictures/BootstrapLogo.svg";
import picture5 from "../pictures/GitLogo.svg";
import picture6 from "../pictures/GithubLogo.svg";
import picture7 from "../pictures/VscodeLogo.svg";
import picture8 from "../pictures/TailwindcssLogo.svg";
import picture9 from "../pictures/JsLogo.svg";
import picture10 from "../pictures/CLogo.svg";
import picture11 from "../pictures/C++Logo.svg";
import picture12 from "../pictures/PythonLogo.svg";

const Tech = () => {
  const [width, setWidth] = useState(window.innerWidth);
  console.log(width);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex justify-center mt-12 py-8">
      <div className="flex flex-col gap-16 lg:gap-24 w-[80vw]  ">
        <div>
          <div className="flex flex-col gap-5 ">
            <div className="flex justify-center">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-950">
                My Tech Stack
              </h1>
            </div>

            <div className="flex justify-center">
              <h1 className="text-md md:text-xl lg:text-3xl text-gray-500">
                Technology I have been working with recently
              </h1>
            </div>
          </div>
        </div>
        <div>
          {width > 767 ? (
            <div className="flex flex-col gap-8 lg:gap-12 w-[80vw]">
              <div className="flex justify-between">
                <img className="h-16 w-16 lg:h-20 md:w-20" src={picture1} alt="Html" />
                <img className="h-16 w-16 lg:h-20 md:w-20" src={picture2} alt="Css" />
                <img className="h-16 w-16 lg:h-20 md:w-20" src={picture3} alt="React" />
                <img className="h-16 w-16 lg:h-20 md:w-20" src={picture9} alt="Js" />
                <img className="h-16 w-16 lg:h-20 md:w-20" src={picture4} alt="Bootstrap" />
                <img className="h-16 w-16 lg:h-20 md:w-20" src={picture11} alt="C++" />
              </div>
              <div className="flex justify-between">
                <img className="h-16 w-16 lg:h-20 md:w-20" src={picture5} alt="Git" />
                <img className="h-16 w-16 lg:h-20 md:w-20" src={picture6} alt="Github" />
                <img className="h-16 w-16 lg:h-20 md:w-20" src={picture7} alt="Vscode" />
                <img className="h-16 w-16 lg:h-20 md:w-20" src={picture8} alt="Tailwind" />
                <img className="h-16 w-16 lg:h-20 md:w-20" src={picture10} alt="Saas" />
                <img className="h-16 w-16 lg:h-20 md:w-20" src={picture12} alt="Python" />
              </div>
            </div>
          ) : (
            <div className="flex  w-[80vw] justify-center">
            <div className=" flex flex-col gap-8">
              <div className="flex gap-10 sm:gap-20">
              <img className="h-12 w-12   sm:h-16 sm:w-16" src={picture1} alt="Html" />
                <img className="h-12 w-12 sm:h-16 sm:w-16" src={picture2} alt="Css" />
                <img className="h-12 w-12 sm:h-16 sm:w-16" src={picture3} alt="React" />
              </div>
              <div  className="flex gap-10 sm:gap-20">
              <img className="h-12 w-12   sm:h-16 sm:w-16" src={picture9} alt="Js" />
                <img className="h-12 w-12 sm:h-16 sm:w-16" src={picture4} alt="Bootstrap" />
                <img className="h-12 w-12 sm:h-16 sm:w-16" src={picture11} alt="C++" />
              </div>
              <div  className="flex gap-10 sm:gap-20">
              <img className="h-12 w-12   sm:h-16 sm:w-16" src={picture5} alt="Git" />
                <img className="h-12 w-12 sm:h-16 sm:w-16" src={picture6} alt="Github" />
                <img className="h-12 w-12 sm:h-16 sm:w-16" src={picture7} alt="Vscode" />
              </div>
              <div  className="flex gap-10 sm:gap-20">
              <img className="h-12 w-12   sm:h-16 sm:w-16" src={picture8} alt="Tailwind" />
                <img className="h-12 w-12 sm:h-16 sm:w-16" src={picture10} alt="Saas" />
                <img className="h-12 w-12 sm:h-16 sm:w-16" src={picture12} alt="Python" />
              </div>

            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tech;
