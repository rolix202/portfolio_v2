import { BriefcaseIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { experienceData } from '../../Data';

const Experience = () => {
  return (
    <section className="bg-black text-white py-32 relative overflow-hidden" id='experience'>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-baseline gap-3 md:gap-6">
            <span className="text-4xl md:text-6xl lg:text-8xl font-light tracking-tight">03</span>
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-light mb-2 md:mb-3">Experience</h2>
              <p className="text-gray-500 text-sm md:text-lg max-w-2xl">
                Professional roles where I&apos;ve delivered solutions that matter.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12 md:space-y-16">
          {experienceData.map((exp, index) => (
            <div
              key={exp.id}
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
                {/* Header */}
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center">
                    <BriefcaseIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 md:gap-4 mb-2 md:mb-3">
                      <div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-light text-white mb-1 md:mb-2">{exp.title}</h3>
                        {exp.link ? (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1 text-xs md:text-sm"
                          >
                            {exp.company}
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        ) : (
                          <p className="text-slate-300 text-xs md:text-sm">{exp.company}</p>
                        )}
                      </div>
                      <div className="text-xs md:text-sm text-gray-500">
                        {exp.startDate} - {exp.endDate || 'Present'}
                        <span className="text-gray-600 ml-1 md:ml-2">•</span>
                        <span className="text-gray-600 ml-1 md:ml-2">{exp.location}</span>
                      </div>
                    </div>
                    
                    {/* Achievements */}
                    <ul className="space-y-1 md:space-y-2 ml-12 md:ml-16">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-400 text-xs md:text-sm leading-relaxed">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
