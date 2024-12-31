import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/singing-contract.json"; // Update with the correct path to your animation file

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#040405] p-6 px-12 gap-8">
      {/* Lottie Animation Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-72 md:w-96">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold text-white bg-[#040405] text-center py-4">
          Contact Us
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Have questions or want to get in touch? We’d love to hear from you!
        </p>

        <form className="bg-[#040405] p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-[#040405] text-white px-3 py-2 border rounded-md"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-[#040405] text-white px-3 py-2 border rounded-md"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full bg-[#040405] text-white px-3 py-2 border rounded-md "
              rows="4"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="flex justify-center w-full">
          <button className="relative ml-4 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white px-6 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-pink-500/25 hover:scale-105 active:scale-95">

            Send Message
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
