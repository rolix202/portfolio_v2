import { AcademicCapIcon, BookOpenIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { educationData, certificationsData } from '../../Data';

const Education = () => {
  return (
    <section className="bg-black text-white py-32" id='education'>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-baseline gap-3 md:gap-6">
            <span className="text-4xl md:text-6xl lg:text-8xl font-light tracking-tight">05</span>
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-light mb-2 md:mb-3">Education</h2>
              <p className="text-gray-500 text-sm md:text-lg max-w-2xl">
                The foundation of knowledge that shapes how I approach problems and solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="mb-6 md:mb-8">
            <h3 className="text-base md:text-lg font-light text-gray-400 mb-2 md:mb-4">Degrees</h3>
          </div>
          
          <div className="space-y-8 md:space-y-12 mb-12 md:mb-20">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="flex gap-4 md:gap-8 lg:gap-12 group"
              >
                {/* Left: Number */}
                <div className="flex-shrink-0 w-12 md:w-20 lg:w-24">
                  <div className="flex items-center gap-2 md:gap-4">
                    <span className="text-xl md:text-2xl lg:text-3xl font-light text-gray-600">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex-1 pb-6 md:pb-8 border-b border-gray-900 last:border-0">
                  <div className="flex items-start gap-3 md:gap-4 mb-2 md:mb-3">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center">
                      <AcademicCapIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 md:gap-4 mb-2 md:mb-3">
                          <div>
                            <h3 className="text-lg md:text-xl lg:text-2xl font-light text-white mb-1 md:mb-2">{edu.title}</h3>
                            <p className="text-slate-300 text-xs md:text-sm">{edu.institution}</p>
                        </div>
                        <div className="text-xs md:text-sm text-gray-500">{edu.duration}</div>
                      </div>
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed ml-0 lg:ml-0">{edu.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="mb-6 md:mb-8">
            <h3 className="text-base md:text-lg font-light text-gray-400 mb-2 md:mb-4">Certifications & Training</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {certificationsData.map((cert, index) => (
              <div
                key={index}
                className="group p-4 md:p-6 border border-gray-900 hover:border-gray-800 transition-colors"
              >
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center flex-shrink-0">
                    <BookOpenIcon className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg font-light text-white mb-1">{cert.title}</h4>
                    <p className="text-slate-300 text-xs md:text-sm">{cert.institution}</p>
                  </div>
                  <span className="text-[10px] md:text-xs text-gray-500">{cert.duration}</span>
                </div>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
