import React from "react";
import picture1 from "../pictures/HtmlLogo.svg";
import picture2 from "../pictures/CssLogo.svg";
import picture3 from "../pictures/ReactLogo.svg";
import picture4 from "../pictures/BootstrapLogo.svg";
import picture5 from "../pictures/GitLogo.svg";
import picture6 from "../pictures/GithubLogo.svg";
import picture7 from "../pictures/VscodeLogo.svg";
import picture8 from "../pictures/TailwindcssLogo.svg";
import picture9 from "../pictures/JsLogo.svg";
import picture10 from "../pictures/SaasLogo.svg";
import picture11 from "../pictures/C++Logo.svg"
import picture12 from "../pictures/PythonLogo.svg"

const Tech = () => {
  return (
    <div className="flex justify-center">
    <div className="w-[80vw] ">
      <div className="flex flex-col gap-32 ">
        <div>
          <div className="flex flex-col gap-5 ">
            <div className="flex justify-center">
              <h1 className="text-4xl font-bold text-blue-950">
                My Tech Stack
              </h1>
            </div>

            <div className="flex justify-center">
              <h1 className="text-3xl text-gray-500">
                Technology I have been working with recently
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-12 w-[80vw]">
            <div className="flex justify-between">
              <img className="h-20 w-20" src={picture1} alt="Html" />
              <img className="h-20 w-20" src={picture2} alt="Css" />
              <img className="h-20 w-20" src={picture3} alt="React" />
              <img className="h-20 w-20" src={picture9} alt="Js" />
              <img className="h-20 w-20" src={picture4} alt="Bootstrap" />
              <img className="h-20 w-20" src={picture11} alt="C++" />
            </div>
            <div className="flex justify-between">
              <img className="h-20 w-20" src={picture5} alt="Git" />
              <img className="h-20 w-20" src={picture6} alt="Github" />
              <img className="h-20 w-20" src={picture7} alt="Vscode" />
              <img className="h-20 w-20" src={picture8} alt="Tailwind" />
              <img className="h-20 w-20" src={picture10} alt="Saas" />
              <img className="h-20 w-20" src={picture12} alt="Python" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Tech;
