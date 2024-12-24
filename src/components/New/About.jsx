import React from 'react'
import rooo from "../../assets/rooo.jpg"; 
import codee from "../../assets/codeee.jpg"; 

const About = () => {
    return (
        <section className="bg-slate-900" id='about'>
            <div className="max-w-6xl mx-auto text-white py-24 ">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    {/* Images */}
                    <div className="relative h-72 md:h-80 lg:h-96">
                      
                        {/* First Image - Tilted Right */}
                        <div className="absolute md:top-6 left-10 transform -rotate-6 shadow-lg bg-white p-2 z-10">
                            <img
                                src={rooo}
                                alt="My latest pic!"
                                className="w-36 sm:w-52 md:w-36 lg:w-52"
                            />
                            <p className="text-center mt-2 text-gray-600 font-semibold">The Visionary!</p>
                        </div>
                        
                        {/* Second Image - Tilted Left and Lower */}
                        <div className="absolute top-20 md:top-28 left-44 md:left-48 transform rotate-12 shadow-lg bg-white p-2">
                            <img
                                src={codee}
                                alt="My workflow!"
                                className="w-36 sm:w-52 md:w-36 lg:w-52"
                            />
                            <p className="text-center mt-2 text-gray-600 font-semibold">The Grind!</p>
                        </div>
                    </div>

                    {/* About Content */}
                    <div className="space-y-4 text-lg leading-relaxed text-justify md:text-left px-5 md:px-0 mt-24 md:mt-0">
                        <h2 className="text-4xl font-bold text-white mb-6 text-center md:text-left">About Me</h2>
                        <p>
                            I’m <span className="text-purple-400 font-semibold">Roland Oodo</span>, a fullstack developer with a passion for building scalable systems and intuitive user interfaces.
                        </p>
                        <p>
                            My expertise lies in <span className="font-semibold">backend development, APIs</span>, and delivering practical, efficient solutions for real-world problems.
                        </p>
                        <p>
                            With <span className="font-semibold">3+ years of experience</span>, I’ve collaborated on projects that prioritize functionality and user impact.
                        </p>
                        <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
                            <li>Proficient in Node.js, React, and cloud technologies.</li>
                            <li>Experience in building APIs with 99%+ uptime.</li>
                            <li>Focused on creating meaningful and maintainable software.</li>
                        </ul>
                        <p className="">
                            Outside of work, I’m constantly exploring new technologies, learning, and building side projects that bring me joy. {" "} <span className="text-purple-400 font-semibold">I would love to connect</span>  and help turn your ideas into reality.
                        </p>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default About


