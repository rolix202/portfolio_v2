import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
import { DiMongodb } from 'react-icons/di';
import { FaReact, FaNodeJs, FaDocker, FaGithub, FaAws, FaDigitalOcean, FaFigma } from 'react-icons/fa';
import { RiJavascriptFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiPostman } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';


const TechStack = () => {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-baseline gap-3 md:gap-6">
            <span className="text-4xl md:text-6xl lg:text-8xl font-light tracking-tight">04</span>
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-light mb-2 md:mb-3">Tech Stack</h2>
              <p className="text-gray-500 text-sm md:text-lg max-w-2xl">
                The tools and technologies I use to build scalable, efficient solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Frontend */}
          <div className="group p-4 md:p-6 border border-gray-900 hover:border-gray-800 transition-colors">
            <h3 className="text-base md:text-lg font-light text-white mb-4 md:mb-6">Frontend</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <FaReact className="text-xl flex-shrink-0" />
                <span className="text-sm">JavaScript</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <RiTailwindCssFill className="text-xl flex-shrink-0"/>
                <span className="text-sm">React.js</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <RiJavascriptFill className="text-xl flex-shrink-0"/>
                <span className="text-sm">Next.js</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <BiLogoTypescript className="text-xl flex-shrink-0"/>
                <span className="text-sm">TypeScript</span>
              </li>
            </ul>
          </div>

          {/* Backend */}
          <div className="group p-6 border border-gray-900 hover:border-gray-800 transition-colors">
            <h3 className="text-lg font-light text-white mb-6">Backend</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <FaNodeJs className="text-xl flex-shrink-0" />
                <span className="text-sm">Node.js</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <SiExpress className="text-xl flex-shrink-0"/>
                <span className="text-sm">Express.js</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <DiMongodb className='text-xl flex-shrink-0'/>
                <span className="text-sm">MongoDB</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
               <BiLogoPostgresql className='text-xl flex-shrink-0'/>
                <span className="text-sm">PostgreSQL</span>
              </li>
            </ul>
          </div>

          {/* Infrastructure */}
          <div className="group p-6 border border-gray-900 hover:border-gray-800 transition-colors">
            <h3 className="text-lg font-light text-white mb-6">Infrastructure</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <FaDocker className="text-xl flex-shrink-0" />
                <span className="text-sm">Docker</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaAws className='text-xl flex-shrink-0'/>
                <span className="text-sm">AWS</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaDigitalOcean className='text-xl flex-shrink-0'/>
                <span className="text-sm">Digital Ocean</span>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div className="group p-6 border border-gray-900 hover:border-gray-800 transition-colors">
            <h3 className="text-lg font-light text-white mb-6">Tools</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <FaGithub className="text-xl flex-shrink-0" />
                <span className="text-sm">Git / GitHub</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <VscVscode className='text-xl flex-shrink-0'/>
                <span className="text-sm">VS Code</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <SiPostman className='text-xl flex-shrink-0'/>
                <span className="text-sm">Postman</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaFigma className='text-xl flex-shrink-0'/>
                <span className="text-sm">Figma</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
