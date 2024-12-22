import React from "react";
import { ChatBubbleLeftRightIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import roland_img from "../assets/roll1.png";
import HeroStats from "./HeroStats";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

const Hero = () => {


  return (
    <section className="w-full hero pt-24 pb-10 px-4 md:px-0 relative overflow-hidden">
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
        <div className="flex-1 text-center md:text-left">
          <p className="relative text-xl font-semibold text-purple-500 py-5">
            Fullstack Developer
            <span className="absolute bottom-4 left-0 w-12 h-1 bg-gray-200 rounded-full"></span>
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-200 leading-snug">
            Building the <span className="text-purple-500">Tech</span> You Need.
          </h1>
          <p className="mt-4 text-gray-400 text-lg md:text-xl leading-relaxed">
            I specialize in building{" "}
            <span className="text-purple-400 font-medium">
              scalable backend systems
            </span>
            , APIs, and server-side applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <button className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-md transform hover:scale-105 transition">
              <ArrowDownTrayIcon className="w-5 h-5"/>
              Download CV
            </button>
            <button className="border border-purple-500 text-purple-500 px-6 py-3 rounded-full hover:bg-purple-500 hover:text-white shadow-md transform hover:scale-105 transition flex items-center gap-2">
            <EnvelopeIcon className="w-5 h-5" />
            Email Me
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end relative">
          {/* Background Accent Blob */}
          <div className="absolute w-80 h-80 rounded-full bg-purple-500 bg-opacity-20 blur-3xl top-10 -left-10 animate-pulse"></div>

          {/* Image Wrapper */}
          <div className="relative group">
            {/* Gradient Border */}
            <div className="inset-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-800 rounded-full p-1 transform group-hover:scale-105 transition">
              <div className="relative rounded-full overflow-hidden bg-gray-900 p-2">
                {/* Image */}
                <img
                  src={roland_img}
                  alt="Roland, Backend Developer"
                  className="rounded-full w-64 md:w-80 shadow-lg transform group-hover:scale-110 transition duration-300"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-50 rounded-full"></div>
              </div>
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-purple-950 blur-xl opacity-50 transition"></div>
          </div>
        </div>

      </div>

      <HeroStats />


      {/* Bottom Divider */}
      {/* <div className="custom-shape-divider-bottom-1734442791">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
        </svg>
      </div> */}
    </section>
  );
};

export default Hero;
