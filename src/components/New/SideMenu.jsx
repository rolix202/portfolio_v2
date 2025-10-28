import React from "react";
import { IoClose } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router";

const SideMenu = ({ handleClose, handleNavigation }) => {
  const { pathname } = useLocation()
  
  return (
    <div className="fixed inset-0 bg-black text-white z-50 flex flex-col h-screen px-6 py-6 md:hidden">
      {/* Close Icon */}
      <div className="flex justify-end mb-8">
        <button onClick={handleClose} className="p-2 hover:bg-gray-900 rounded transition-colors">
          <IoClose className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {pathname === "/" ? (
            <>
              <li>
                <ScrollLink
                  to="about" smooth={true} duration={500} offset={-10}
                  onClick={handleClose}
                  className="block py-3 text-gray-500 hover:text-slate-300 transition-colors text-sm uppercase tracking-widest border-b border-gray-900 cursor-pointer"
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="portfolio" smooth={true} duration={500} offset={-10}
                  onClick={handleClose}
                  className="block py-3 text-gray-500 hover:text-slate-300 transition-colors text-sm uppercase tracking-widest border-b border-gray-900 cursor-pointer"
                >
                  Work
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="experience" smooth={true} duration={500} offset={-10}
                  onClick={handleClose}
                  className="block py-3 text-gray-500 hover:text-slate-300 transition-colors text-sm uppercase tracking-widest border-b border-gray-900 cursor-pointer"
                >
                  Experience
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="education" smooth={true} duration={500} offset={-10}
                  onClick={handleClose}
                  className="block py-3 text-gray-500 hover:text-slate-300 transition-colors text-sm uppercase tracking-widest border-b border-gray-900 cursor-pointer"
                >
                  Education
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact" smooth={true} duration={500} offset={-10}
                  onClick={handleClose}
                  className="block py-3 text-gray-500 hover:text-slate-300 transition-colors text-sm uppercase tracking-widest border-b border-gray-900 cursor-pointer"
                >
                  Contact
                </ScrollLink>
              </li>
            </>
          ) : (
            <li>
              <span
                onClick={() => handleNavigation("/", "home")}
                className="block py-3 text-gray-500 hover:text-slate-300 transition-colors text-sm uppercase tracking-widest cursor-pointer"
              >
                Home
              </span>
            </li>
          )}
        </ul>
      </nav>

      {/* Footer */}
      <div className="pt-8 border-t border-gray-900">
        <p className="text-gray-500 text-xs text-center">
          © {new Date().getFullYear()} Roland Oodo
        </p>
      </div>
    </div>
  );
};

export default SideMenu;
