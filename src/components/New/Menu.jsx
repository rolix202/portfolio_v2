import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import SideMenu from "./SideMenu";
import { scroller, Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router";
import { useLocation } from "react-router";

const Menu = () => {
  const [isopen, setIsopen] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleModal = () => {
    setIsopen(!isopen)
  }

  const handleNavigation = (targetPage, section) => {
    if (pathname === targetPage) {
      // If already on the target page, scroll to section
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -50,
      });

      setIsopen(!isopen)
    } else {
      // Navigate to the target page and scroll after page load
      navigate(targetPage);
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
          // offset: -50,
        });
      }, 100);
    }
  };

  useEffect(() => {
    if (isopen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
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

      {isopen && <SideMenu handleClose={handleModal} handleNavigation={handleNavigation} />}

      <div className="w-full bg-slate-900/90 py-1 fixed z-30">
        <nav className="md:flex hidden justify-center py-4 max-w-6xl mx-auto">

          {/* Navigation Links */}
          <ul className="hidden md:flex gap-6 text-gray-200 font-semibold">
            
            { pathname === "/" ? (
              <>
                <li className="hover:text-purple-600 transition">
              <span
                onClick={() => handleNavigation("/", "home")}
                className="cursor-pointer"
              >
                Home
              </span>
            </li>
            <li className="hover:text-purple-600 transition">
              <ScrollLink to="about" smooth={true} duration={500} offset={-10} activeClass="active" spy={true}>About</ScrollLink>
            </li>
            <li className="hover:text-purple-600 transition">
              <ScrollLink to="education" smooth={true} duration={500} offset={-10} activeClass="active" spy={true}>Resume</ScrollLink>
            </li>
            <li className="hover:text-purple-600 transition">
              <ScrollLink to="portfolio" smooth={true} duration={500} offset={-10} activeClass="active" spy={true}>Portfolio</ScrollLink>
            </li>

            <li className="hover:text-purple-600 transition">
              <ScrollLink to="contact" smooth={true} duration={500} offset={-10} activeClass="active" spy={true}>Contact</ScrollLink>
            </li>
              </>
            ) : (
              <li className="hover:text-purple-600 transition active">
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
      </div>
    </header>
  );
};

export default Menu;
