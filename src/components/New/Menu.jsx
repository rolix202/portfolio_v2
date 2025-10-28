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
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -50,
      });
      setIsopen(!isopen)
    } else {
      navigate(targetPage);
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
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

    return () => {
      document.body.style.overflow = "";
    };
  }, [isopen]);

  return (
    <header className="relative">
      {/* Mobile Menu Button */}
      <button 
        className="z-20 right-6 top-6 bg-transparent border border-gray-800 p-2 md:hidden fixed"
        onClick={handleModal}
      >
        <HiOutlineMenuAlt3 className="w-6 h-6 text-white" />
      </button>

      {/* Side Menu */}
      {isopen && <SideMenu handleClose={handleModal} handleNavigation={handleNavigation} />}

      {/* Desktop Navigation */}
      <div className="w-full bg-black/90 backdrop-blur-sm border-b border-gray-900 fixed z-30">
        <nav className="md:flex hidden justify-center py-6 max-w-7xl mx-auto px-6">
          <ul className="flex gap-8 text-sm text-gray-500 font-light tracking-wide uppercase">
            {pathname === "/" ? (
              <>
                <li className="hover:text-slate-400 transition-colors cursor-pointer">
                  <ScrollLink to="about" smooth={true} duration={500} offset={-10} activeClass="active" spy={true}>
                    About
                  </ScrollLink>
                </li>
                <li className="hover:text-slate-400 transition-colors cursor-pointer">
                  <ScrollLink to="portfolio" smooth={true} duration={500} offset={-10} activeClass="active" spy={true}>
                    Work
                  </ScrollLink>
                </li>
                <li className="hover:text-slate-400 transition-colors cursor-pointer">
                  <ScrollLink to="experience" smooth={true} duration={500} offset={-10} activeClass="active" spy={true}>
                    Experience
                  </ScrollLink>
                </li>
                <li className="hover:text-slate-400 transition-colors cursor-pointer">
                  <ScrollLink to="education" smooth={true} duration={500} offset={-10} activeClass="active" spy={true}>
                    Education
                  </ScrollLink>
                </li>
                <li className="hover:text-slate-400 transition-colors cursor-pointer">
                  <ScrollLink to="contact" smooth={true} duration={500} offset={-10} activeClass="active" spy={true}>
                    Contact
                  </ScrollLink>
                </li>
              </>
            ) : (
              <li className="hover:text-slate-400 transition-colors cursor-pointer">
                <span
                  onClick={() => handleNavigation("/", "home")}
                  className="cursor-pointer"
                >
                  Home
                </span>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Menu;
