import { ArrowLongLeftIcon, ArrowLongRightIcon, ArrowRightEndOnRectangleIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'
import { projects } from '../Data'
import ProjectModal from './ProjectModal'

const SelectedWork = () => {
  const [open, setOpen] = useState(false)
  const [selectedSkill, setSelectedSkill] = useState(null)

  const handleModal = (project) => {
    console.log(project);
    
    setSelectedSkill(project)
    setOpen(true)
  }

  return (
    <>

      <section className="works py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-purple-400">Selected Works</h2>
            <button className="border border-purple-400 text-purple-400 px-5 py-2 rounded-full hover:bg-purple-500 hover:text-white flex items-center gap-2 transition">
              Explore All My Projects <ArrowLongRightIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Grid */}
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
                  <h3 className="text-lg font-semibold text-purple-400 flex justify-between cursor-pointer hover:scale-100 transition duration-300" onClick={() => handleModal(project)}>
                    {project.title}
                    <ArrowRightEndOnRectangleIcon className="w-5 h-5" />
                  </h3>
                  <div className="mt-2 text-gray-400 text-sm">
                    {project.stack.join(" | ")}
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        </div>


      </section>

    
      <ProjectModal open={open} setOpen={setOpen} project={selectedSkill} />
   

    </>

  )
}



export default SelectedWork