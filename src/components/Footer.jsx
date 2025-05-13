import React from 'react';
import { Link } from 'react-router';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import backgroundImage from '../assets/13.jpg';
import copyrightImage from '../assets/24.jpg';

const Footer = () => {
    return (
        <footer
            className="py-16 relative bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="container mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div>
                        <img
                            src="/logo1.png"
                            alt="Coffee logo"
                            className="w-16 h-16 mb-4"
                        />
                        <h3
                            className="rancho text-3xl text-[#331A15] mb-4"
                            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
                        >
                            Espresso Emporium
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Always ready to be your friend. Come & Contact with us to share your
                            memorable moments, to share with your best companion.
                        </p>

                        <div className="flex space-x-4 mb-8">
                            <Link
                                to="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-8 h-8 bg-white flex items-center justify-center rounded-full border border-[#331A15] hover:bg-[#331A15] transition-all duration-300 transform hover:scale-110"
                            >
                                <FaFacebookF className="text-[#331A15] transition-colors duration-300 group-hover:text-white" />
                            </Link>
                            <Link
                                to="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-8 h-8 bg-white flex items-center justify-center rounded-full border border-[#331A15] hover:bg-[#331A15] transition-all duration-300 transform hover:scale-110"
                            >
                                <FaTwitter className="text-[#331A15] transition-colors duration-300 group-hover:text-white" />
                            </Link>
                            <Link
                                to="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-8 h-8 bg-white flex items-center justify-center rounded-full border border-[#331A15] hover:bg-[#331A15] transition-all duration-300 transform hover:scale-110"
                            >
                                <FaInstagram className="text-[#331A15] transition-colors duration-300 group-hover:text-white" />
                            </Link>
                            <Link
                                to="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-8 h-8 bg-white flex items-center justify-center rounded-full border border-[#331A15] hover:bg-[#331A15] transition-all duration-300 transform hover:scale-110"
                            >
                                <FaLinkedinIn className="text-[#331A15] transition-colors duration-300 group-hover:text-white" />
                            </Link>
                        </div>

                        <h3 className="rancho text-3xl text-[#331A15] mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Get in Touch</h3>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <FaPhone className="text-[#331A15]" />
                                <span className="text-gray-700">+88 01533 333 333</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-[#331A15]" />
                                <span className="text-gray-700">info@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-[#331A15]" />
                                <span className="text-gray-700">72, Wall street, King Road, Dhaka</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div>
                        <h3 className="rancho text-3xl text-[#331A15] mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Connect with Us</h3>
                        <form>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#331A15]"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#331A15]"
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    placeholder="Message"
                                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#331A15] h-32"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="px-6 py-2 border border-[#331A15] rounded rancho text-lg hover:bg-[#331A15] hover:text-white transition-colors cursor-pointer"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="absolute bottom-0 left-0 right-0 text-white py-2 text-center" style={{ backgroundImage: `url(${copyrightImage})` }}>
                <p className="text-sm rancho">Copyright Espresso Emporium | All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;