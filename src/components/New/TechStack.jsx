import React from 'react';
import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
import { DiMongodb } from 'react-icons/di';
import { FaReact, FaNodeJs, FaDocker, FaGithub, FaAws, FaDigitalOcean, FaFigma } from 'react-icons/fa';
import { RiJavascriptFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiPostman } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';


const TechStack = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-gray-900  text-white overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="h-96 w-96 bg-purple-500 opacity-20 blur-3xl rounded-full absolute top-10 left-10"></div>
        <div className="h-72 w-72 bg-blue-500 opacity-10 blur-2xl rounded-full absolute bottom-20 right-20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Tech I Work With</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            These tools are not just lines of code to me—they are how I build, solve, and create. Each one holds a purpose in shaping intuitive, scalable, and impactful solutions.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend */}
          <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4 text-center sm:text-left">Frontend</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaReact className="text-blue-500 text-xl group-hover:animate-spin" />
                <span>React.js</span>
              </li>
              <li className="flex items-center space-x-3">
                <RiTailwindCssFill className="text-blue-500 text-xl"/>
                <span>Tailwind CSS</span>
              </li>
              <li className="flex items-center space-x-3">
                <RiJavascriptFill className="text-yellow-300 text-xl"/>
                <span>JavaScript (ES6+)</span>
              </li>
              <li className="flex items-center space-x-3">
                <BiLogoTypescript className="text-blue-500 text-xl"/>
                <span>TypeScript</span>
              </li>
            </ul>
          </div>

          {/* Backend */}
          <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4 text-center sm:text-left">Backend</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaNodeJs className="text-green-500 text-xl group-hover:animate-spin" />
                <span>Node.js</span>
              </li>
              <li className="flex items-center space-x-3">
                <SiExpress className="text-yellow-300 text-xl"/>
                <span>Express.js</span>
              </li>
              <li className="flex items-center space-x-3">
                <DiMongodb className='text-green-500 text-xl'/>
                <span>MongoDB</span>
              </li>
              <li className="flex items-center space-x-3">
               <BiLogoPostgresql className='text-blue-500 text-xl'/>
                <span>PostgreSQL</span>
              </li>
              
              
            </ul>
          </div>

          {/* Infrastructure */}
          <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4 text-center sm:text-left">Infrastructure</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaDocker className="text-blue-500 text-xl group-hover:animate-spin" />
                <span>Docker</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaAws className=' text-xl'/>
                <span>AWS</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaDigitalOcean className='text-blue-500 text-xl'/>
                <span>Digital Ocean</span>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4 text-center sm:text-left">Tools</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaGithub className="text-gray-500 text-xl group-hover:animate-spin" />
                <span>Git / GitHub</span>
              </li>
              <li className="flex items-center space-x-3">
                <VscVscode className='text-blue-500 text-xl'/>
                <span>Visual Studio Code</span>
              </li>
              <li className="flex items-center space-x-3">
                <SiPostman className='text-orange-300 text-xl'/>
                <span>Postman</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaFigma className='text-xl'/>
                <span>Figma</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
