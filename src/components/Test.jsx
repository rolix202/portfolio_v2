import roland_img from "../assets/roll1.png";
import { EnvelopeIcon } from "@heroicons/react/20/solid";

const Test = () => {
  return (
    <section className="w-full hero">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 py-20">
        {/* Left Section: Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
       
            
            Building the <span className="text-purple-600">Tech</span>  You Need.
          </h1>
          <p className="mt-4 text-gray-600 text-lg md:text-xl">
            I specialize in building{" "}
            <span className="text-purple-600">scalable backend systems</span>,
            APIs, and server-side applications that drive impactful user
            experiences.
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-purple-500 transform transition-transform duration-300 hover:scale-105 flex items-center gap-2">
              <EnvelopeIcon className="w-6 h-6" />
              Email Me
            </button>

            <button className="border border-purple-600 text-purple-600 font-semibold px-6 py-3 rounded-full hover:bg-purple-600 hover:text-white transform transition-transform duration-300 hover:scale-105">
              See My Work
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="flex-1 flex justify-end">
          <img
            src={roland_img}
            alt="Roland, Backend Developer"
            className="shadow-md rounded-full h-80 md:h-96 transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Metrics Section */}
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center border-t border-purple-300">
        <div>
          <h3 className="text-4xl font-bold text-gray-800">3+</h3>
          <p className="text-lg text-purple-600">Years of Experience</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-gray-800">5+</h3>
          <p className="text-lg text-purple-600">Clients Worked With</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-gray-800">10+</h3>
          <p className="text-lg text-purple-600">Projects Delivered</p>
        </div>
      </div>
    </section>
  );
};

export default Test;
