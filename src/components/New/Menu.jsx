import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import SideMenu from "./SideMenu";
import { Link } from "react-scroll";

const Menu = () => {
  const [isopen, setIsopen] = useState(false)

  const handleModal = () => {
    setIsopen(!isopen)
  }

  useEffect(() => {
    if (isopen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isopen]);

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
              <Link to="home" smooth={true} duration={500} offset={-10} activeClass="active" spy={true}>Home</Link>
            </li>
            <li className="hover:text-purple-600 transition">
              <Link to="about" smooth={true} duration={500} offset={-10} activeClass="active" spy={true}>About</Link>
            </li>
            <li className="hover:text-purple-600 transition">
              <Link to="education" smooth={true} duration={500} offset={-10} activeClass="active" spy={true}>Resume</Link>
            </li>
            <li className="hover:text-purple-600 transition">
              <Link to="portfolio" smooth={true} duration={500} offset={-10} activeClass="active" spy={true}>Portfolio</Link>
            </li>

            <li className="hover:text-purple-600 transition">
              <Link to="contact" smooth={true} duration={500} offset={-10} activeClass="active" spy={true}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Menu;
