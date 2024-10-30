import React from "react";
import Card from "../components/Card";
import ID from "../pictures/IDCard.png"
import News from "../pictures/News.png"
import Weather from "../pictures/Weather.png"
export const student = [
  {
    title: "ID Card Generator",
    description:"It helps you to generate ID card allowing users to add personalized details such as name, photo, designation, and contact information.",
  image:ID,
  },
  {
    title: "News Portal",
    description:"A News Portal is an online platform that provides up-to-date news on various topics like politics, sports, entertainment, and more. ",
   image:News,
  },
  {
    title: "Weather Information",
    description:"A Weather Portal is an online platform that provides real-time weather updates, forecasts, and climate information.",
   image:Weather,
  },
  
];

const Project = () => {
  return (
    <div className="flex flex-col gap-8 min-h-screen bg-gray-100 mt-12 py-8">
      <div className="flex flex-col gap-5 ">
        <div className="flex justify-center">
          <h1 className="text-xl md:text-2xl xl:text-3xl font-bold text-blue-950">Projects</h1>
        </div>

        <div className="flex justify-center">
          <h1 className="text-lg md:text-xl xl:text-3xl text-gray-500">Things I have built so far</h1>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[55vw] sm:w-[42vw] md:w-[68vw] lg:w-[55vw] xl:w-[70vw] 2xl:w-[65vw]  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 sm:gap-24 md:gap-8 lg:gap-8 xl:gap-12">
          {student.map((item) => (
            <Card
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
