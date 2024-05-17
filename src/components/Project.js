import React from "react";
import Card from "../components/Card";
export const student = [
  {
    title: "Contact Management System",
    description:
      "In my React project, I set up a system where users can easily create, read, update, and delete contact information. I made sure that when users enter data into forms, it gets checked to make sure it's correct and complete. This helps keep the contact list organized and error-free. I worked to make sure everything was user-friendly and worked smoothly, so people can manage their contacts hassle-free.",
    image:
      "https://raw.githubusercontent.com/shrestharonit09/ImageFolders/master/Contact%20Management%20System.png",
  },
  {
    title: "Laptop Price Prediction",
    description:
      " This project introduces a refined machine learning approachto unravel the complexities of laptop pricing, leveraging theDecision Tree algorithm within a singular, powerful predictive model. Orchestrated through a Flask backend and a React frontend, the system offers a streamlined, user-friendly platform that not only predicts with precision but also providesa gateway to market insights. Culminating in an intuitive interface, the project stands as a testament to the potential of machine learning in enhancing market analysis and decision making in e-commerce spheres.",
    image:
      "https://raw.githubusercontent.com/shrestharonit09/ImageFolders/master/Laptop%20Price%20Prediction.png",
  },
  {
    title: "Contact Management System",
    description:
      "In my React project, I set up a system where users can easily create, read, update, and delete contact information. I made sure that when users enter data into forms, it gets checked to make sure it's correct and complete. This helps keep the contact list organized and error-free. I worked to make sure everything was user-friendly and worked smoothly, so people can manage their contacts hassle-free.",
    image:
      "https://raw.githubusercontent.com/shrestharonit09/ImageFolders/master/Contact%20Management%20System.png",
  },
  {
    title: "Laptop Price Prediction",
    description:
      " This project introduces a refined machine learning approachto unravel the complexities of laptop pricing, leveraging theDecision Tree algorithm within a singular, powerful predictive model. Orchestrated through a Flask backend and a React frontend, the system offers a streamlined, user-friendly platform that not only predicts with precision but also providesa gateway to market insights. Culminating in an intuitive interface, the project stands as a testament to the potential of machine learning in enhancing market analysis and decision making in e-commerce spheres.",
    image:
      "https://raw.githubusercontent.com/shrestharonit09/ImageFolders/master/Laptop%20Price%20Prediction.png",
  },
  {
    title: "Contact Management System",
    description:
      "In my React project, I set up a system where users can easily create, read, update, and delete contact information. I made sure that when users enter data into forms, it gets checked to make sure it's correct and complete. This helps keep the contact list organized and error-free. I worked to make sure everything was user-friendly and worked smoothly, so people can manage their contacts hassle-free.",
    image:
      "https://raw.githubusercontent.com/shrestharonit09/ImageFolders/master/Contact%20Management%20System.png",
  },
  {
    title: "Laptop Price Prediction",
    description:
      " This project introduces a refined machine learning approachto unravel the complexities of laptop pricing, leveraging theDecision Tree algorithm within a singular, powerful predictive model. Orchestrated through a Flask backend and a React frontend, the system offers a streamlined, user-friendly platform that not only predicts with precision but also providesa gateway to market insights. Culminating in an intuitive interface, the project stands as a testament to the potential of machine learning in enhancing market analysis and decision making in e-commerce spheres.",
    image:
      "https://raw.githubusercontent.com/shrestharonit09/ImageFolders/master/Laptop%20Price%20Prediction.png",
  },
];

const Project = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-5 ">
        <div className="flex justify-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950">Projects</h1>
        </div>

        <div className="flex justify-center">
          <h1 className="text-xl md:text-2xl lg:text-4xl text-gray-500">Things I have built so far</h1>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[80vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-5 lg:gap-10">
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
