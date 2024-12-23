import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import SideMenu from "./SideMenu";

const Menu = () => {
  const [isopen , setIsopen] = useState(false)

  const handleModal = () => {
    setIsopen(!isopen)
  }

  return (
    <header className="relative">
      <span className="z-20 right-2 bg-purple-500 top-3 p-2 rounded-md md:hidden fixed" onClick={handleModal}>
        <HiOutlineMenuAlt3 className="w-7 h-7 top-4 text-white" />
      </span>

      {/* Side Menu */}
      
      {isopen && <SideMenu handleClose={handleModal} />}
      
      <div className="w-full bg-slate-900/90 py-1 fixed z-30">
        <nav className="md:flex hidden justify-center py-4 max-w-6xl mx-auto">

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
      </div>
    </header>
  );
};

export default Menu;
