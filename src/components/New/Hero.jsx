import React from 'react';
import HeroImage from '../../assets/developer.jpg';
import { ArrowDownTrayIcon, ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section className="relative scroll-smooth" id="home">
            <div
                className="relative h-screen flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage: `url(${HeroImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 backdrop-blur-sm"></div>

                {/* Hero Content */}
                <div className="relative z-10 text-center max-w-4xl mx-2 md:mx-8 mt-10 bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-gray-100/30">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-snug">
                        I'm Roland Oodo
                    </h1>
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300">
                        A <span className="text-purple-500 font-medium">Fullstack Developer</span>. I specialize in building scalable backend systems, APIs, and server-side applications.
                    </p>
                    <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                        When I am not working, I am exploring new ways to grow—whether it’s building side projects, debugging challenges, or learning something new about technology.{" "}
                        <span className="text-purple-500 font-medium">I love the feeling of building something meaningful</span>—something that solves a real problem or brings joy to someone’s life.
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-8 my-6 sm:my-8">
                        <a
                            href="https://www.linkedin.com/in/roland-uchenna-oodo/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-white hover:text-purple-600 transition"
                        >
                            <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                        <a
                            href="https://x.com/rocodeify"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-white hover:text-purple-600 transition"
                        >
                            <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                        <a
                            href="https://github.com/rolix202"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-white hover:text-purple-600 transition"
                        >
                            <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                        <a
                            href="#resume"
                            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-purple-500 hover:bg-purple-600 text-center text-white font-semibold flex items-center justify-center gap-2 shadow-lg transition transform hover:scale-105"
                        >
                            Download CV <ArrowDownTrayIcon className="w-5 h-5" />
                        </a>
                        <Link
                            to="contact" smooth={true} duration={500} offset={-10} activeClass="active" spy={true}
                            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white flex justify-center gap-2 font-semibold shadow-lg transition transform hover:scale-105"
                        >
                            Contact Me 
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Down Button */}
            <div className="flex justify-center">
                <Link
                    to="about"
                    smooth={true} duration={500} offset={-10} activeClass="active" spy={true}
                    className="bg-purple-500 text-white absolute z-40 bottom-0 md:bottom-4 p-2 md:p-3 rounded-full animate-slowbounce"
                >
                    <ChevronDoubleDownIcon className="h-4 w-4 md:h-5 md:w-5" />
                </Link>
            </div>
        </section>
    );
};

export default Hero;
