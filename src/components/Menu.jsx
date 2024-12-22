import { ChatBubbleLeftRightIcon } from "@heroicons/react/20/solid";
import React from "react";

const Menu = () => {
  return (
    <header className="w-full">
      <nav className="flex items-center justify-between  py-4 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-purple-800">Roland</div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 text-gray-200 font-semibold">
        <li className="hover:text-purple-600 transition">
            <a href="#work">Home</a>
          </li>
          <li className="hover:text-purple-600 transition">
            <a href="#work">Portfolio</a>
          </li>
          <li className="hover:text-purple-600 transition">
            <a href="#articles">About</a>
          </li>
          <li className="hover:text-purple-600 transition">
            <a href="#about">Contact</a>
          </li>
        </ul>

        {/* Call to Action Button */}
        <div>
          <button className="border border-purple-500 font-semibold text-purple-600 hover:text-white px-5 py-2 rounded-full hover:bg-purple-600 transition flex items-center gap-2">
            <ChatBubbleLeftRightIcon className="w-4 h-4" />
            <span>Let's Talk</span>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-800 focus:outline-none text-2xl">
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
