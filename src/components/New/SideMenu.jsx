import React from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { IoClose } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router";

const SideMenu = ({ handleClose, handleNavigation }) => {
  const { pathname } = useLocation()
  console.log(pathname);
  
  
  return (
    <div
      className="fixed inset-0 bg-gradient-to-b from-purple-950 via-purple-900 to-purple-950 text-white z-50 flex flex-col h-screen px-8 py-7 md:hidden transition-transform transform -translate-x-full animate-menuSlideIn"
    >
      {/* Close Icon */}
      <div className="flex justify-end ">
        <IoClose
          className="w-8 h-8 cursor-pointer hover:rotate-90 hover:scale-125 hover:text-purple-300 transition duration-300"
          onClick={handleClose}
        />
      </div>

      {/* Welcome Message */}
      <div className="mt-2 animate-slideInDelay">
        <h2 className="text-3xl font-extrabold">Hi there! 👋</h2>
        <p className="text-gray-300 mt-4">
          Let’s navigate through my journey, explore my portfolio, or get in
          touch. I would love to hear from you!
        </p>
      </div>

      {/* Navigation Links */}
      <nav className="mt-12">
        <ul className="space-y-8 text-lg font-medium">
          
          { pathname === "/" ? (
            <>
              <li className="group flex items-center gap-4 animate-slideInLink">
            <ChevronDoubleRightIcon className="w-6 h-6 text-purple-400 group-hover:scale-110 transition duration-300" />
            
            <span
                onClick={() => handleNavigation("/", "home")}
                className="cursor-pointer"
              >
                Home
              </span>
          </li>
          <li className="group flex items-center gap-4 animate-slideInLink">
            <ChevronDoubleRightIcon className="w-6 h-6 text-purple-400 group-hover:scale-110 transition duration-300" />
            <ScrollLink 
              to="about" smooth={true} duration={500} offset={-10} activeClass="active" spy={true}
              className="hover:text-purple-400 group-hover:translate-x-1 transition duration-300"
              onClick={handleClose}
            >
              About Me
            </ScrollLink>
          </li>
          <li className="group flex items-center gap-4 animate-slideInLink delay-300">
            <ChevronDoubleRightIcon className="w-6 h-6 text-purple-400 group-hover:scale-110 transition duration-300" />
            <ScrollLink
              to="education" smooth={true} duration={500} offset={-10} activeClass="active" spy={true}
              className="hover:text-purple-400 group-hover:translate-x-1 transition duration-300"
              onClick={handleClose}
            >
              Resume
            </ScrollLink>
          </li>
          <li className="group flex items-center gap-4 animate-slideInLink delay-150">
            <ChevronDoubleRightIcon className="w-6 h-6 text-purple-400 group-hover:scale-110 transition duration-300" />
            <ScrollLink
              to="portfolio" smooth={true} duration={500} offset={-10} activeClass="active" spy={true}
              className="hover:text-purple-400 group-hover:translate-x-1 transition duration-300"
              onClick={handleClose}
            >
              Portfolio
            </ScrollLink>
          </li>
          <li className="group flex items-center gap-4 animate-slideInLink delay-450">
            <ChevronDoubleRightIcon className="w-6 h-6 text-purple-400 group-hover:scale-110 transition duration-300" />
            <ScrollLink
              to="contact" smooth={true} duration={500} offset={-10} activeClass="active" spy={true}
              className="hover:text-purple-400 group-hover:translate-x-1 transition duration-300"
              onClick={handleClose}
            >
              Contact
            </ScrollLink>
          </li>
            </>
          ) : (
            <li className="group flex items-center gap-4 animate-slideInLink">
            <ChevronDoubleRightIcon className="w-6 h-6 text-purple-400 group-hover:scale-110 transition duration-300" />
            
            <span
                onClick={() => handleNavigation("/", "home")}
                className="cursor-pointer"
              >
                Home
              </span>
          </li>
          ) }
          
          
        </ul>
      </nav>

      {/* Call-to-Action */}
      <div className="mt-auto animate-popIn delay-500">
        <a
          href="#download"
          className="w-full block text-center py-4 mt-9 bg-purple-500 rounded-full text-white font-bold hover:bg-purple-600 shadow-lg transition duration-300 transform hover:scale-105"
          onClick={handleClose}
        >
          Download CV
        </a>
        <p className="text-gray-400 text-sm mt-4 text-center">
          © {new Date().getFullYear()} Roland Oodo. Let’s build something
          amazing together!
        </p>
      </div>
    </div>
  );
};

export default SideMenu;
