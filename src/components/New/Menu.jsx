import React from "react";

const Menu = () => {
  return (
    <header className="w-full bg-slate-900/90 flex py-1 fixed z-30">
      {/* <div className="flex items-center gap-2 pl-40">
        <span className="text-gray-200 font-bold text-lg">Roland Oodo</span>
      </div> */}

      <nav className="flex  justify-center  py-4 max-w-6xl mx-auto">

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 text-gray-200 font-semibold">
          <li className="hover:text-purple-600 transition">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-purple-600 transition">
            <a href="#work">Portfolio</a>
          </li>
          <li className="hover:text-purple-600 transition">
            <a href="#articles">Resume</a>
          </li>
          <li className="hover:text-purple-600 transition">
            <a href="#about">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
