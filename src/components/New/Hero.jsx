import HeroImage from '../../assets/developer.webp';
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from 'react-scroll';
import CV from "../../assets/OodoRolndUchennaResume.pdf"

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden" id="home">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `url(${HeroImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-4xl">
                    {/* Greeting */}
                    <div className="mb-6 md:mb-8 text-gray-500 text-sm md:text-base">
                        <span className="inline-block mr-2">—</span>
                        <span className="tracking-widest uppercase">Hey there, I&apos;m</span>
                    </div>

                    {/* Name */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 md:mb-8">
                        Roland Oodo
                    </h1>

                    {/* Title */}
                    <div className="mb-8 md:mb-12">
                        <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300 leading-relaxed">
                            Building systems that power modern applications
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-base md:text-lg text-gray-400 mb-10 md:mb-12 leading-relaxed max-w-2xl">
                        I write code that runs in production. APIs that handle real traffic. Databases that scale. 
                        Currently building AI-powered hiring platforms and refactoring legacy systems into something you&apos;d actually want to work on.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 md:mb-16">
                        <a
                            href={CV}
                            download=""
                            className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 border border-white text-white hover:bg-white hover:text-black transition-colors text-xs sm:text-sm md:text-base font-light tracking-wide uppercase w-full sm:w-auto"
                        >
                            Download CV
                            <ArrowLongRightIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                        <Link
                            to="contact" 
                            smooth={true} 
                            duration={500} 
                            offset={-10} 
                            activeClass="active" 
                            spy={true}
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 cursor-pointer border border-gray-700 text-gray-400 hover:border-white hover:text-white transition-colors text-xs sm:text-sm md:text-base font-light tracking-wide uppercase w-full sm:w-auto"
                        >
                            Contact Me
                            <ArrowLongRightIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-1.5 md:gap-2">
                        <div className="w-6 md:w-12 h-px bg-gradient-to-r from-gray-800 to-transparent"></div>
                        <div className="flex items-center gap-3 md:gap-4 text-gray-500">
                            <a
                                href="https://www.linkedin.com/in/roland-uchenna-oodo/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                <FaLinkedin className="w-4 h-4 md:w-5 md:h-5" />
                            </a>
                            <a
                                href="https://x.com/rocodeify"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                <FaTwitter className="w-4 h-4 md:w-5 md:h-5" />
                            </a>
                            <a
                                href="https://github.com/rolix202"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                <FaGithub className="w-4 h-4 md:w-5 md:h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={-10}
                    activeClass="active"
                    spy={true}
                    className="flex flex-col items-center gap-1.5 md:gap-2 text-gray-500 hover:text-white transition-colors group"
                >
                    <span className="text-xs uppercase tracking-widest hidden md:block">Scroll</span>
                    <div className="w-px h-8 md:h-12 bg-gradient-to-b from-gray-700 to-transparent"></div>
                </Link>
            </div>
        </section>
    );
};

export default Hero;
