import { AcademicCapIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { educationData } from '../../Data';

const Education = () => {
  return (
    <section className="bg-gradient-to-b from-slate-900 via-gray-800 to-black text-white py-20" id='education'>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
          <p className="text-gray-400 text-lg">
            A journey of learning, growth, and building expertise to create value.
          </p>
        </div>


        {/* Education Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700 rounded"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-12">
            {/* Each Education Item */}
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative ${index % 2 === 0 ? 'md:pr-8 text-right' : 'md:pl-8'}`}
              >
                {/* Connector Circle */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-gray-900"></div>
                <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <div className="flex items-center space-x-4 mb-3">

                    <AcademicCapIcon className="h-8 w-8 text-purple-400"/>
                    <h3 className="text-xl font-semibold">{edu.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">{edu.institution} • {edu.duration}</p>
                  <p className="mt-2 text-gray-300">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};




export default Education;
