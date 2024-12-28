import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaBlog } from 'react-icons/fa';
import { useLocation } from 'react-router';
import { Link } from 'react-scroll';

const Footer = () => {
    const { pathname } = useLocation()

    return (
        <footer className="bg-slate-900/90 py-16 relative text-white">
            {/* Back-to-Top Button */}
            <div className="flex justify-center mb-8">
                <Link
                    to= {`${pathname === "/" ? "home" : "intro" }`} smooth={true} duration={500} offset={-10} activeClass="active" spy={true}
                    className="bg-purple-600 text-white p-4 rounded-full animate-slowbounce shadow-lg hover:bg-purple-700 transition duration-300"
                    aria-label="Back to top"
                >
                    <ChevronDoubleUpIcon className="h-6 w-6" />
                </Link>
            </div>

            {/* Footer Content */}
            <div className="max-w-6xl mx-auto text-center px-4">
                {/* Social Links */}
                <div className="flex justify-center space-x-4 sm:space-x-8 mb-8">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-400 transition flex items-center gap-2"
                    >
                        <FaGithub className="h-5 w-5" />
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-400 transition flex items-center gap-2"
                    >
                        <FaLinkedin className="h-5 w-5" />
                        LinkedIn
                    </a>
                    <a
                        href="https://twitter.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-400 transition flex items-center gap-2"
                    >
                        <FaTwitter className="h-5 w-5" />
                        Twitter
                    </a>
                    <a
                        href="/blog"
                        className="text-gray-400 hover:text-purple-400 transition flex items-center gap-2"
                    >
                        <FaBlog className="h-5 w-5" />
                        Blog
                    </a>
                </div>

                {/* Personal Message */}
                <p className="text-gray-400 text-base mb-4 italic">
                    "Crafted with 💜, creativity, and a relentless pursuit of growth. Every step here represents my journey."
                </p>

                {/* Copyright */}
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Oodo Roland. All rights reserved. Designed with care to make an impact.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
