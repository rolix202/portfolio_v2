
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 md:py-20 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* About */}
                    <div>
                        <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">About</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Software engineer building scalable web applications with TypeScript, Node.js, and modern technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Navigation</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <RouterLink to="/" className="hover:text-white transition-colors">Home</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/projects" className="hover:text-white transition-colors">Projects</RouterLink>
                            </li>
                            <li>
                                <a href="mailto:contact@rolandoodo.com" className="hover:text-white transition-colors">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Connect</h3>
                        <div className="flex flex-col space-y-3">
                            <a
                                href="https://github.com/rolix202"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm"
                            >
                                <FaGithub className="w-4 h-4" />
                                <span>GitHub</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/roland-uchenna-oodo/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm"
                            >
                                <FaLinkedin className="w-4 h-4" />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://x.com/rocodeify"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm"
                            >
                                <FaTwitter className="w-4 h-4" />
                                <span>Twitter</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 mb-8"></div>

                {/* Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Roland Oodo. All rights reserved.</p>
                   
                </div>
            </div>
        </footer>
    );
};

export default Footer;
