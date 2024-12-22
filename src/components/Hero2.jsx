import React from "react";
import { ChatBubbleLeftRightIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import roland_img from "../assets/roll1.png";
import HeroStats from "./HeroStats";

const Hero = () => {
  return (
    <section className="w-full hero pt-24 pb-10 px-4 md:px-0 relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Floating Shapes */}
      <div className="floating-shapes">
        <div className="shape shape-circle shape-1"></div>
        <div className="shape shape-triangle shape-2"></div>
        <div className="shape shape-blob shape-4"></div>
        <div className="shape shape-circle shape-5"></div>
      </div>

      {/* Hero Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Left Text */}
        <div
          className="flex-1 text-center md:text-left"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <p className="relative text-xl font-semibold text-purple-500 py-3">
            Fullstack Developer
            <span className="absolute bottom-4 left-0 w-12 h-1 bg-gray-200 rounded-full"></span>
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-200 leading-snug relative">
            Building the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Tech
            </span>{" "}
            You Need.
          </h1>
          <p className="mt-4 text-gray-400 text-lg md:text-xl leading-relaxed">
            I specialize in building{" "}
            <span className="text-purple-400 font-medium">
              scalable backend systems
            </span>
            , APIs, and server-side applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <button className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg transform hover:scale-105 transition duration-300">
              <ArrowDownTrayIcon className="w-5 h-5" />
              Download CV
            </button>
            <button className="border border-purple-500 text-purple-500 px-6 py-3 rounded-full hover:bg-purple-500 hover:text-white shadow-lg transform hover:scale-105 transition duration-300 flex items-center gap-2">
              <EnvelopeIcon className="w-5 h-5" />
              Email Me
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="flex-1 flex justify-center md:justify-end relative"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          {/* Background Accent Blob */}
          <div className="absolute w-96 h-96 rounded-full bg-purple-500 bg-opacity-20 blur-3xl top-10 -left-10 animate-pulse"></div>

          {/* Image Wrapper */}
          <div className="relative group">
            <div className="inset-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-800 rounded-full p-1 transform group-hover:scale-105 transition">
              <div className="relative rounded-full overflow-hidden bg-gray-900 p-2">
                {/* Image */}
                <img
                  src={roland_img}
                  alt="Roland, Backend Developer"
                  className="rounded-full w-64 md:w-80 shadow-lg transform group-hover:scale-110 transition duration-300"
                />
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-purple-950 blur-2xl opacity-40 group-hover:opacity-60 transition duration-500"></div>
          </div>
        </div>
      </div>

      {/* Hero Stats */}
      <HeroStats />
    </section>
  );
};

export default Hero;
