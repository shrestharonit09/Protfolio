import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      email_id: email,
      message: comment,
    };
    emailjs
      .send("service_un7iwjl", "template_ucmb9tw", templateParams, "IvvcsF8ZNJi2jqvYY")
      .then(
        (response) => {
          alert("Your message has been sent successfully!");
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
      setName("");
      setEmail("");
      setComment("");
  };

  return (
    <div className="flex flex-col gap-4 items-center pt-8 pb-8">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-950">Contact</h1>
      <h1  className="text-lg md:text-xl lg:text-2xl text-gray-500">If you have any query feel free to contact me</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col py-4 px-4 gap-5 bg-gray-300 rounded-lg border border-gray-300 w-3/5 sm:w-1/2 md:w-2/5 lg:w-1/3 xl:w-1/4 p-2 shadow-lg"
      >
        <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-blue-600">
          Contact Me
        </h1>

        <input
          className="rounded-t-lg rounded-b-lg w-full h-12 p-2"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="rounded-t-lg rounded-b-lg w-full h-12 p-2"
          type="email"
          placeholder="Your Email Address Please"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          className="rounded-t-lg rounded-b-lg w-full h-32 p-2"
          placeholder="Your Comments"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>

        <button
          className="p-2 bg-blue-500 hover:bg-blue-700 rounded-t-lg rounded-b-lg text-white font-bold text-xl"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
    
  );
};

export default ContactMe;