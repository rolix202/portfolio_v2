import React from 'react';
import rooo from "../assets/rooo.jpg"; // First image
import codee from "../assets/codeee.jpg"; // Second image
import { ArrowLongLeftIcon, ArrowLongRightIcon, ArrowRightEndOnRectangleIcon } from '@heroicons/react/20/solid'

const Bio = () => {
  return (
    <section className="bio pt-16 pb-28 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h2 className="text-4xl font-bold text-purple-400 mb-4">About Me</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            I’ve spent the past few years{" "}
            <span className="font-semibold">freelancing</span>, working with people to{" "}
            <span className="text-purple-400 font-medium">turn their ideas into reality</span>.
            I love the feeling of building{" "}
            <span className="text-purple-400 font-medium">something meaningful</span>—something that
            solves a <span className="font-semibold">real problem</span> or brings{" "}
            <span className="text-purple-400 font-medium">joy</span> to someone’s life.
          </p>
          <p className="mt-4 text-gray-400 text-lg leading-relaxed">
            When I’m not working, I’m exploring{" "}
            <span className="font-semibold">new ways to grow</span>—whether it’s{" "}
            <span className="text-purple-400 font-medium">building side projects</span>,
            debugging challenges that test my patience, or learning something new about technology.
            Coding is more than work for me; it’s how I{" "}
            <span className="font-semibold">connect</span>,{" "}
            <span className="text-purple-400 font-medium">create</span>, and leave a
            <span className="font-semibold">little bit of myself</span> in everything I build.
          </p>
          <a
            href="/resume.pdf"
            className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-medium mt-6 px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105"
          >
            About Me <ArrowLongRightIcon className="w-5 h-5 inline-block ml-2" />
          </a>
        </div>


        {/* Images */}
        <div className="relative h-72 md:h-80 lg:h-96">
          {/* First Image - Tilted Right */}
          <div className="absolute top-0 left-10 transform -rotate-6 shadow-lg bg-white p-2 z-10">
            <img
              src={rooo}
              alt="My latest pic!"
              className="w-40 sm:w-56 md:w-44 lg:w-56"
            />
            <p className="text-center mt-2 text-gray-600 font-semibold">The Visionary!</p>
          </div>

          {/* Second Image - Tilted Left and Lower */}
          <div className=" absolute top-28 left-64 transform rotate-6 shadow-lg bg-white p-2">
            <img
              src={codee}
              alt="Puky!"
              className="w-40 sm:w-56 md:w-44 lg:w-56"
            />
            <p className="text-center mt-2 text-gray-600 font-semibold">The Grind!</p>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Bio;
