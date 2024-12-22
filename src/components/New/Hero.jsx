import React from 'react'
import HeroImage from '../../assets/developer.jpg'
import { ArrowDownTrayIcon, ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Hero = () => {



    return (
        <section className='relative scroll-smooth' id='hero'>
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
                <div className="relative z-10 text-center max-w-4xl bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-gray-100/30">
                    <h1 className="text-6xl font-extrabold text-white tracking-tight leading-snug">
                        I'm Roland Oodo
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                        A <span className="text-purple-500 font-medium">Fullstack Developer</span>. I specialize in building scalable backend systems, APIs, and server-side applications.
                    </p>
                    <p className="mt-6 text-gray-400 leading-relaxed">
                        When I am not working, I am exploring new ways to grow—whether it’s building side projects, debugging challenges, or learning something new about technology.{" "}

                        <span className="text-purple-500 font-medium">I love the feeling of building something meaningful</span>—something that
                        solves a real problem or brings joy to someone’s life.
                    </p>

                    <div className="flex justify-center space-x-8 my-8 ">
                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/roland-uchenna-oodo/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-white hover:text-purple-600 transition"
                        >
                            <FaLinkedin className="w-6 h-6" />

                        </a>

                        {/* Twitter/X */}
                        <a
                            href="https://x.com/rocodeify"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-white hover:text-purple-600 transition"
                        >
                            <FaTwitter className="w-6 h-6" />

                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/rolix202"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-white hover:text-purple-600 transition"
                        >
                            <FaGithub className="w-6 h-6" />

                        </a>
                    </div>
                    <div className="flex justify-center gap-4 mt-8">
                        <a
                            href="#resume"
                            className="px-8 py-4 rounded-full bg-purple-500 hover:bg-purple-600 text-white font-semibold flex gap-2 shadow-lg transition transform hover:scale-105"
                        >
                            Download CV <ArrowDownTrayIcon className="w-5 h-5" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 rounded-full border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white flex gap-2 font-semibold shadow-lg transition transform hover:scale-105"
                        >
                            Contact Me <EnvelopeIcon className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                
            </div>
            <div className='flex justify-center'>
                    <a href="#about" className='bg-purple-500 text-white absolute z-50 bottom-4 p-3 rounded-full animate-slowbounce'>
                        <ChevronDoubleDownIcon className='h-5 w-5' />
                    </a>
            </div>
            
        </section>




    )
}

export default Hero