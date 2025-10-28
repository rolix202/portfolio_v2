import React, { useState, useEffect } from "react";
import { projects } from "../../Data";
import { ArrowLongRightIcon, LinkIcon, SparklesIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router";

const Work = () => {
    const [open, setOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const [isAnimating, setIsAnimating] = useState(false)
    const { pathname } = useLocation()

    const handleProjectClick = (project) => {
        setSelectedProject(project)
        setOpen(true)
        setTimeout(() => setIsAnimating(true), 10)
    }

    const handleClose = () => {
        setIsAnimating(false)
        setTimeout(() => {
            setOpen(false)
            setSelectedProject(null)
        }, 300)
    }

    useEffect(() => {
        if (open) {
            setIsAnimating(true)
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden'
        } else {
            // Restore body scroll when modal is closed
            document.body.style.overflow = 'unset'
        }

        // Cleanup function to restore scroll on unmount
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [open])

    const featuredProjects = projects.slice(0, 4)
    const displayedProjects = pathname === "/" ? featuredProjects : projects

    return (
        <section className="py-32 bg-black text-white relative" id="portfolio">
            <div className="max-w-7xl mx-auto px-6">
                {pathname === "/" && (
                    <div className="mb-12 md:mb-24">
                        <div className="flex items-baseline gap-3 md:gap-6">
                            <span className="text-4xl md:text-6xl lg:text-8xl font-light tracking-tight">02</span>
                            <div>
                                <h2 className="text-2xl md:text-4xl lg:text-6xl font-light mb-2 md:mb-3">Selected Work</h2>
                                <p className="text-gray-500 text-sm md:text-lg max-w-2xl">
                                    A collection of projects where I&apos;ve turned concepts into production-ready applications.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Projects Grid - Asymmetric Layout */}
                <div className="space-y-16 md:space-y-20 lg:space-y-24">
                    {displayedProjects.map((project, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer"
                            onClick={() => handleProjectClick(project)}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className={`transition-all duration-700 ${hoveredIndex === index ? 'opacity-100' : 'opacity-100'}`}>
                                {/* Grid Layout: Image Left, Content Right */}
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12">
                                    {/* Image - Takes 5 columns */}
                                    <div className="lg:col-span-7 relative overflow-hidden">
                                        <div className="relative aspect-[4/3] md:aspect-[4/3] bg-gray-900">
                                            {project.img ? (
                                                <>
                                    <img
                                    src={project.img}
                                    alt={project.title}
                                                        className={`w-full h-full object-cover transition-transform duration-[800ms] ${hoveredIndex === index ? 'scale-105' : 'scale-100'}`}
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                                </>
                                            ) : (
                                                <div className="w-full h-full bg-gray-800 animate-pulse"></div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content - Takes 5 columns */}
                                    <div className="lg:col-span-5 flex flex-col justify-between lg:pl-4 pt-4 lg:pt-0">
                                        {/* Top: Meta Info */}
                                        <div className="mb-4 md:mb-6">
                                            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                                                <span className="text-gray-600 text-xs md:text-sm font-light">
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                                <div className="h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent"></div>
                                                <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">
                                                    {project.role}
                                                </span>
                                            </div>
                                            
                                            <h3 className="text-xl md:text-3xl lg:text-4xl font-light mb-3 md:mb-4 leading-tight">
                                                {project.title}
                                            </h3>
                                        </div>

                                        {/* Middle: Stack Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4 md:mb-8">
                                            {project.stack.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-[10px] md:text-xs text-gray-400 font-light px-2 py-1"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Bottom: Description & Arrow */}
                                        <div>
                                            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 line-clamp-3">
                                                {project.comment}
                                            </p>
                                            
                                            <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors">
                                                <span className="text-xs md:text-sm font-light tracking-wide uppercase">View Project</span>
                                                <ArrowLongRightIcon className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-2" />
                                            </div>
                                    </div>
                                </div>
                            </div>

                                {/* Divider Line */}
                                <div className={`mt-8 md:mt-6 lg:mt-12 h-px bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-30'}`}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {pathname === "/" && (
                    <div className="flex justify-center mt-12 md:mt-24">
                        <Link 
                            to="/projects" 
                            className="group inline-flex items-center gap-2 md:gap-3 text-gray-400 hover:text-white transition-colors text-xs md:text-sm font-light tracking-widest uppercase"
                        >
                            <span>View All Projects</span>
                            <ArrowLongRightIcon className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-2" />
                            </Link>
                        </div>
                )}
            </div>

            {/* Slide-over Modal */}
            {open && selectedProject && (
                <div 
                    className="fixed inset-0 z-50 overflow-hidden"
                    onClick={handleClose}
                >
                    <div className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}></div>
                    
                    <div 
                        className={`absolute right-0 top-0 h-full w-full md:w-[640px] bg-black border-l border-gray-900 shadow-2xl transform transition-transform duration-500 ease-out ${isAnimating ? 'translate-x-0' : 'translate-x-full'}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col h-full overflow-y-auto">
                            {/* Close Button */}
                            <div className="sticky top-0 z-10 flex justify-end p-6 bg-black/50 backdrop-blur-sm border-b border-gray-900">
                                <button
                                    onClick={handleClose}
                                    className="p-2 text-gray-400 hover:text-white transition-colors"
                                >
                                    <XMarkIcon className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-8 space-y-8">
                                {/* Image */}
                                <div className="relative aspect-[16/10] bg-gray-900 rounded overflow-hidden">
                                    {selectedProject.img ? (
                                        <img
                                            src={selectedProject.img}
                                            alt={selectedProject.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-800"></div>
                                    )}
                                </div>

                                {/* Title & Role */}
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-gray-500 text-xs uppercase tracking-widest">{selectedProject.role}</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-light mb-6">{selectedProject.title}</h2>
                                </div>

                                {/* Description */}
                                <p className="text-gray-300 leading-relaxed text-lg">{selectedProject.comment}</p>

                                {/* Technologies */}
                                <div className="space-y-4">
                                    <h3 className="text-xs uppercase tracking-widest text-gray-500">Technologies</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {selectedProject.technologies.map((tech, idx) => (
                                            <span key={idx} className="px-3 py-1.5 text-sm text-gray-400 border border-gray-700 rounded hover:border-purple-500 hover:text-purple-400 transition-colors">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Link */}
                                <a
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 text-purple-400 hover:text-white transition-colors group"
                                >
                                    <LinkIcon className="w-5 h-5" />
                                    <span className="text-sm font-light tracking-wider uppercase">Visit Project</span>
                                    <ArrowLongRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
            )}
        </section>
    );
};

export default Work;
