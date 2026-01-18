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
                    <div className="lg:col-span-7 space-y-5 md:space-y-6">
                        <div className="space-y-3 md:space-y-4">
                            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                                Building a SaaS / Product is hard.
                            </p>
                            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                                Hiring the wrong developer makes it harder.
                            </p>
                        </div>

                        <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                            If you&apos;re a founder who needs to ship fast, make smart technical decisions, and avoid costly rebuilds later — you&apos;re in the right place.
                        </p>

                        <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                            I&apos;m a <span className="text-gray-300">Full-Stack SaaS Developer (3+ years)</span> helping startups turn ideas into production-ready web applications using <span className="text-gray-300">React, Next.js, Node.js, TypeScript, and scalable APIs</span>.
                        </p>

                        <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                            I focus on <span className="text-gray-300">building solid foundations first</span> — so your product can grow without breaking.
                        </p>

                        <div className="pt-4 md:pt-6 border-t border-gray-800">
                            <h3 className="text-sm md:text-base font-medium text-gray-300 mb-4 md:mb-5">
                                What I help startups build
                            </h3>
                            <ul className="space-y-2.5 md:space-y-3 text-sm md:text-base text-gray-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-gray-600 mt-1">•</span>
                                    <span><span className="text-gray-300">SaaS MVPs</span> (idea → build → launch → iterate)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gray-600 mt-1">•</span>
                                    <span><span className="text-gray-300">Scalable backend systems & APIs</span> (authentication, roles, payments, integrations)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gray-600 mt-1">•</span>
                                    <span><span className="text-gray-300">Modern, conversion-focused frontend</span> with clean UX</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gray-600 mt-1">•</span>
                                    <span><span className="text-gray-300">Well-structured databases</span> (MongoDB / PostgreSQL)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gray-600 mt-1">•</span>
                                    <span><span className="text-gray-300">AI-powered features</span> where they add real value (chat, smart search, automation, content assistance)</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default About


