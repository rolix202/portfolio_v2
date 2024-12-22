import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const ThankYou = () => {
  return (
    <section className="py-16 thank-you bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-2xl font-semibold text-gray-800 mb-6">
          Thanks for visiting my website! Connect with me on:
        </p>
        <div className="flex justify-center space-x-8 mb-8">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/roland-uchenna-oodo/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition"
          >
            <FaLinkedin className="w-6 h-6" />
            <span className="text-lg font-medium">LinkedIn</span>
          </a>

          {/* Twitter/X */}
          <a
            href="https://x.com/rocodeify"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition"
          >
            <FaTwitter className="w-6 h-6" />
            <span className="text-lg font-medium">X.com</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/rolix202"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition"
          >
            <FaGithub className="w-6 h-6" />
            <span className="text-lg font-medium">GitHub</span>
          </a>
        </div>

        {/* CTA Button */}
        <button className="px-6 py-3 bg-purple-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-purple-500 transition">
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default ThankYou;
