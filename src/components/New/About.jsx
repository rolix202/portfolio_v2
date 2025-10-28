import rooo from "../../assets/rooo.jpg";
import codee from "../../assets/codeee.jpg";

const About = () => {
    return (
        <section className="bg-black text-white py-32" id='about'>
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Number & Header */}
                <div className="mb-12 md:mb-16">
                    <div className="flex items-baseline gap-3 md:gap-6">
                        <span className="text-4xl md:text-6xl lg:text-8xl font-light tracking-tight">01</span>
                        <div>
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-light mb-2 md:mb-3">About Me</h2>
                            <p className="text-gray-500 text-sm md:text-lg max-w-2xl">
                                A brief introduction to who I am and what drives my work.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Images */}
                    <div className="lg:col-span-5 relative h-64 md:h-80 lg:h-auto mb-8 lg:mb-0">

                        {/* First Image - Tilted Right */}
                        <div className="absolute top-0 left-4 md:left-8 lg:left-10 transform -rotate-6 shadow-lg bg-white p-2 z-10">
                            <img
                                src={rooo}
                                alt="My latest pic!"
                                className="w-28 sm:w-36 md:w-44 lg:w-52"
                            />
                            <p className="text-center mt-1 text-gray-600 text-xs md:text-sm font-semibold">The Visionary!</p>
                        </div>

                        {/* Second Image - Tilted Left and Lower */}
                        <div className="absolute top-16 md:top-24 left-32 md:left-56 lg:left-48 transform rotate-12 shadow-lg bg-white p-2">
                            <img
                                src={codee}
                                alt="My workflow!"
                                className="w-28 sm:w-36 md:w-44 lg:w-52"
                            />
                            <p className="text-center mt-1 text-gray-600 text-xs md:text-sm font-semibold">The Grind!</p>
                        </div>
                    </div>

                    {/* About Content */}
                    <div className="lg:col-span-7 space-y-4 md:space-y-5">
                        <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                            I&apos;ve spent the last two years turning ideas into <span className="text-gray-300">reliable, scalable web applications</span>. Most of my work revolves around <span className="text-gray-300">TypeScript, Node.js, Express, MySQL, and MongoDB</span>, but I enjoy picking up whatever tools get the job done.
                        </p>

                        <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                            I&apos;ve rebuilt <span className="text-gray-300">slow, messy systems into clean, maintainable codebases</span>, worked closely with developers, designers and product teams, and shipped features that genuinely improve user experience. <span className="text-gray-300">Clean code, clear communication, and delivering what I promise</span> are non-negotiables.
                        </p>

                        <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                            I work with <span className="text-gray-300">React, Next.js, Node.js, PostgreSQL, MongoDB</span>, and cloud services — building apps that are reliable and easy to maintain. I&apos;ve also had hands-on experience <span className="text-gray-300">adding AI features</span> and <span className="text-gray-300">collaborating with cross-functional teams</span> to deliver end-to-end solutions.
                        </p>
                        
                        <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                            My experience includes building <span className="text-gray-300">AI-powered resume builders</span>, <span className="text-gray-300">job portals</span>, and <span className="text-gray-300">marketplaces for autonomous agents</span>. I&apos;m comfortable working independently or as part of a team, and I focus on writing code that&apos;s not just functional, but also maintainable and well-documented.
                        </p>

                        <div className="pt-6 md:pt-8 border-t border-gray-800 space-y-2">
                            <div className="flex items-center gap-2 text-xs md:text-sm">
                                <span className="text-gray-600">Current Focus:</span>
                                <span className="text-gray-300">Backend Engineering & System Architecture</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs md:text-sm">
                                <span className="text-gray-600">Available for:</span>
                                <span className="text-gray-300">Contract & Full-time Opportunities</span>
                            </div>
                        </div>



                    </div>

                </div>
            </div>
        </section>

    )
}

export default About


