import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useLocation } from 'react-router';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import CV from "../../assets/OodoRolndUchennaResume.pdf"

const Contacts = () => {
    const { pathname } = useLocation()
    const [contactDetail, setContactDetail] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [isLoading, setIsLoading] = useState(false)

    const handleForm = (e) => {
        const { name, value } = e.target
        setContactDetail((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const formSubmit = async (e) => {
        e.preventDefault();

        const missingFields = Object.entries(contactDetail).filter(([key, value]) => !value);

        if (missingFields.length === Object.keys(contactDetail).length) {
            toast.error("All fields are required");
            return;
        }

        if (missingFields.length > 0) {
            missingFields.forEach(([key]) => {
                toast.error(`${key} is required`);
            });
            return;
        }

        if (contactDetail.message.length > 1000) {
            toast.error("Your message is too long. Please limit your message to 1000 characters")
            return
        }

        setIsLoading(true)

        const token = await grecaptcha.execute("6Leq26kqAAAAAMZ5l8X4elyjck_kXhv-BYoCkUEs", { action: "submit" })

        const payload = {
            name: contactDetail.name,
            email: contactDetail.email,
            message: contactDetail.message,
            token,
        }
        const backendEndpoint = import.meta.env.VITE_BACKEND_ENDPOINT;

        try {
            const response = await fetch(`${backendEndpoint}/api/v1/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorData = await response.json();
                const errorMessage = errorData.message || "Could not submit form. Try again!";
                throw new Error(errorMessage);
            }

            toast.success("Form submitted successfully!");
            setContactDetail({ name: "", email: "", message: "" });

        } catch (error) {
            toast.error(error.message || "Failed to send your message. Please try again.");
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <section className="bg-black text-white py-32" id='contact'>
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                {pathname === "/" && (
                    <div className="mb-12 md:mb-16">
                        <div className="flex items-baseline gap-3 md:gap-6">
                            <span className="text-4xl md:text-6xl lg:text-8xl font-light tracking-tight">07</span>
                            <div>
                                <h2 className="text-2xl md:text-4xl lg:text-6xl font-light mb-2 md:mb-3">Contact</h2>
                                <p className="text-gray-500 text-sm md:text-lg max-w-2xl">
                                    Let&apos;s start a conversation about your next project.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                    {/* Contact Form */}
                    <div>
                        <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-6 md:mb-8">Get in Touch</h3>
                        <form className="space-y-6" method='post' onSubmit={formSubmit}>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={contactDetail.name}
                                    onChange={handleForm}
                                    placeholder="Name"
                                    className="w-full bg-transparent px-0 py-3 text-white border-b border-gray-800 focus:border-white focus:outline-none transition-colors text-sm"
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={contactDetail.email}
                                    onChange={handleForm}
                                    placeholder="Email"
                                    className="w-full bg-transparent px-0 py-3 text-white border-b border-gray-800 focus:border-white focus:outline-none transition-colors text-sm"
                                />
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    rows="4"
                                    value={contactDetail.message}
                                    onChange={handleForm}
                                    maxLength={1000}
                                    placeholder="Message"
                                    className="w-full bg-transparent px-0 py-3 text-white border-b border-gray-800 focus:border-white focus:outline-none transition-colors text-sm resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="group inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-widest"
                                disabled={isLoading}
                            >
                                {isLoading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Contact Information</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                Whether you have a project in mind, a question, or just want to connect, I&apos;d love to hear from you.
                            </p>
                        </div>

                        <div className="space-y-4 text-sm">
                            <a
                                href="mailto:dev@oodoroland.com"
                                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                            >
                                <FaEnvelope className="w-4 h-4" />
                                <span>dev@oodoroland.com</span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/roland-uchenna-oodo/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                            >
                                <FaLinkedin className="w-4 h-4" />
                                <span>LinkedIn</span>
                            </a>

                            <a
                                href="https://x.com/rocodeify"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                            >
                                <FaTwitter className="w-4 h-4" />
                                <span>Twitter</span>
                            </a>

                            <a
                                href={CV}
                                download=""
                                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                            >
                                <span>Download CV</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                transition={Zoom}
            />
        </section>
    );
};

export default Contacts;
