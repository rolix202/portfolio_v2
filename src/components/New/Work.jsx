import React, { useState } from "react";
import { projects } from "../../Data";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { FaArrowRight } from "react-icons/fa6";
import ProjectModal from "../ProjectModal";

const Work = () => {

    const [open, setOpen] = useState(false)
    const [selectedSkill, setSelectedSkill] = useState(null)

    const handleModal = (project) => {
        console.log(project); 

        setSelectedSkill(project)
        setOpen(true)
    }

    return (
        <section className="py-20 bg-slate-900 text-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-10">My Work</h2>
                <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
                    These are more than projects—they are challenges I have embraced,
                    solutions I have crafted, and ideas I have brought to life. Each one tells
                    a story of innovation, impact, and a relentless drive for quality.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => {
                        return (
                            <div
                                key={idx}
                                className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                            >
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    onClick={() => handleModal(project)}
                                    className="w-full h-56 object-cover hover:scale-105 opacity-90 hover:opacity-100 transition duration-300 cursor-pointer"
                                />
                                <div className="p-6">
                                    <h3
                                        className="text-lg font-semibold text-purple-400 flex items-center justify-between cursor-pointer hover:scale-100 transition duration-300 hover:text-white"
                                        onClick={() => handleModal(project)}
                                    >
                                        {project.title}
                                        <FaArrowRight className="w-5 h-5" />

                                    </h3>
                                    <div className="mt-2 text-gray-400 text-sm">
                                        {project.stack.join(" | ")}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="flex justify-center pt-16">
                    <a className="px-8 py-4 rounded-full bg-purple-500 hover:bg-purple-600 text-white font-semibold flex items-center gap-2 shadow-lg transition transform hover:scale-105 cursor-pointer">
                        Explore All My Projects <ArrowLongRightIcon className="w-5 h-5" />
                    </a>
                </div>
            </div>
            <ProjectModal open={open} setOpen={setOpen} project={selectedSkill} />
        </section>
    );
};

export default Work;
