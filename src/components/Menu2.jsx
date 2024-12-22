import { ChatBubbleLeftRightIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";

const Menu2 = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-gray-900 shadow-lg">
      <nav className="flex items-center justify-between py-4 px-6 md:px-10 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-purple-500 hover:text-purple-600 transition cursor-pointer">
          Roland
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-gray-200 font-semibold text-lg">
          <li className="hover:text-purple-500 transition transform hover:scale-105">
            <a href="#home" aria-label="Navigate to Home">Home</a>
          </li>
          <li className="hover:text-purple-500 transition transform hover:scale-105">
            <a href="#portfolio" aria-label="Navigate to Portfolio">Portfolio</a>
          </li>
          <li className="hover:text-purple-500 transition transform hover:scale-105">
            <a href="#about" aria-label="Navigate to About">About</a>
          </li>
          <li className="hover:text-purple-500 transition transform hover:scale-105">
            <a href="#contact" aria-label="Navigate to Contact">Contact</a>
          </li>
        </ul>

        {/* Call to Action Button */}
        <div>
          <button className="border border-purple-500 font-semibold text-purple-500 hover:text-white px-5 py-2 rounded-full hover:bg-purple-600 transition flex items-center gap-2 shadow-lg hover:shadow-purple-600/50">
            <ChatBubbleLeftRightIcon className="w-5 h-5" />
            <span>Let's Talk</span>
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-200 focus:outline-none text-3xl"
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-gray-200 text-lg font-semibold">
          <ul className="flex flex-col items-center gap-6 py-4">
            <li className="hover:text-purple-500 transition transform hover:scale-105">
              <a href="#home" aria-label="Navigate to Home">Home</a>
            </li>
            <li className="hover:text-purple-500 transition transform hover:scale-105">
              <a href="#portfolio" aria-label="Navigate to Portfolio">Portfolio</a>
            </li>
            <li className="hover:text-purple-500 transition transform hover:scale-105">
              <a href="#about" aria-label="Navigate to About">About</a>
            </li>
            <li className="hover:text-purple-500 transition transform hover:scale-105">
              <a href="#contact" aria-label="Navigate to Contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Menu2;
