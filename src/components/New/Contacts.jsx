import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { FaBlog, FaTwitter } from 'react-icons/fa6';

const Contacts = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-6">
                {/* Title Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold mb-4">Let's Connect</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        
                        Whether you have a question, an opportunity, or just want to say hi, I would love to hear from you. 
                                Fill out the form below, and I will get back to you as soon as possible.
                    </p>
                </div>

                {/* Contact Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Form */}
                    <div>
                        <h3 className="text-2xl text-center sm:text-left font-semibold text-purple-400 mb-8">Drop me a message</h3>
                        <form className="space-y-6">
                            {/* Name Input */}
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full bg-gray-800 px-4 py-3 text-gray-200 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                />
                            </div>
                            {/* Email Input */}
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="w-full bg-gray-800 px-4 py-3 text-gray-200 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                />
                            </div>
                            {/* Message Input */}
                            <div>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Your Message"
                                    className="w-full bg-gray-800 px-4 py-3 text-gray-200 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                ></textarea>
                            </div>
                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right: Contact Info & Message */}
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl text-center sm:text-left font-semibold text-purple-400 mb-6">A Quick Note</h3>
                        <p className="text-gray-300 leading-relaxed mb-8 text-justify">
                            Thank you for taking the time to reach out! I believe every great collaboration begins with a conversation. 
                            Do not hesitate to share your thoughts or questions—I will respond promptly.
                        </p>
                        <div className="space-y-4 text-gray-200">
                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-purple-400 w-6 h-6" />
                                <a
                                    href="mailto:info@rolandoodo.dev"
                                    className="hover:underline tracking-wider"
                                >
                                    info@rolandoodo.dev
                                </a>
                            </div>
                            
                            {/* LinkedIn */}
                            <div className="flex items-center gap-4">
                                <FaLinkedin className="text-purple-400 w-6 h-6" />
                                <a
                                    href="https://www.linkedin.com/in/roland-uchenna-oodo/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    Roland Uchenna Oodo
                                </a>
                            </div>
                            
                            {/* Phone */}
                            <div className="flex items-center gap-4">
                                <FaTwitter className="text-purple-400 w-6 h-6" />
                                <a
                                    href="https://x.com/rocodeify"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                   Oodo Roland Uchenna 
                                </a>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaBlog className="text-purple-400 w-6 h-6" />
                            
                                <a
                                    href="https://zeenomtech.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                   Blog
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
