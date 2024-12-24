import { Dialog, DialogPanel } from '@headlessui/react';

export default function ProjectModal({ open = false, setOpen, project }) {
  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ease-in-out" />

      {/* Modal Content */}
      <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <DialogPanel className="relative w-full max-w-full sm:max-w-2xl lg:max-w-4xl bg-gray-900 text-gray-200 rounded-3xl shadow-lg overflow-hidden ">
          {/* Hero Section */}
          {project && (
            <div className="relative">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <h3 className="text-2xl sm:text-4xl font-bold text-white">{project.title}</h3>
                <span className="mt-2 inline-block px-3 py-1 text-xs sm:text-sm font-medium text-gray-100 bg-purple-600 rounded-full shadow-md">
                  Role: {project.role}
                </span>
              </div>
            </div>
          )}

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 sm:space-y-8 overflow-y-auto max-h-96">
           
            {/* Stack Section */}
            {project?.techonologies && (
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-purple-400">Technologies Used</h4>
                <div className="flex flex-wrap gap-3 mt-3">
                  {project.techonologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-block rounded-lg bg-gray-800 px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium text-purple-400 shadow hover:scale-105 hover:bg-purple-500 hover:text-white transition-transform"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Developer's Comment */}
            {project?.comment && (
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-purple-400">Developer's Insight</h4>
                <blockquote className="mt-3 italic border-l-4 border-purple-400 pl-4 text-gray-300 text-sm sm:text-base">
                  "{project.comment}"
                </blockquote>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center p-6 bg-gray-800 rounded-b-3xl">
            <button
              onClick={() => setOpen(false)}
              className="px-6 py-2 text-sm font-medium bg-gray-700 text-gray-300 rounded-md shadow hover:bg-gray-600 transition"
            >
              Close
            </button>
            <div className="flex gap-4">
              {project?.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-md shadow hover:scale-110 transition"
                >
                  Visit Project
                </a>
              )}
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}



