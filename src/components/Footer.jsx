import React, { useRef } from 'react';
import { Link } from 'react-router';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import backgroundImage from '../assets/13.jpg';
import copyrightImage from '../assets/24.jpg';

const Footer = () => {
    // Create refs for different sections
    const logoSectionRef = useRef(null);
    const socialSectionRef = useRef(null);
    const contactInfoRef = useRef(null);
    const formSectionRef = useRef(null);
    const copyrightRef = useRef(null);

    // Check if sections are in view
    const isLogoSectionInView = useInView(logoSectionRef, { once: true, amount: 0.3 });
    const isSocialSectionInView = useInView(socialSectionRef, { once: true, amount: 0.3 });
    const isContactInfoInView = useInView(contactInfoRef, { once: true, amount: 0.3 });
    const isFormSectionInView = useInView(formSectionRef, { once: true, amount: 0.3 });
    const isCopyrightInView = useInView(copyrightRef, { once: true, amount: 0.3 });

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const socialIconVariant = {
        hidden: { scale: 0 },
        visible: { 
            scale: 1,
            transition: { 
                type: "spring",
                stiffness: 260,
                damping: 20
            }
        }
    };

    const slideIn = {
        hidden: { x: 50, opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1,
            transition: { duration: 0.7, ease: "easeOut" }
        }
    };

    return (
        <footer
            className="py-16 relative bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="container mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div>
                        <motion.div 
                            ref={logoSectionRef}
                            initial="hidden"
                            animate={isLogoSectionInView ? "visible" : "hidden"}
                            variants={fadeIn}
                        >
                            <motion.img
                                src="/logo1.png"
                                alt="Coffee logo"
                                className="w-16 h-16 mb-4"
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                            <motion.h3
                                className="rancho text-3xl text-[#331A15] mb-4"
                                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
                                whileHover={{ scale: 1.05 }}
                            >
                                Espresso Emporium
                            </motion.h3>
                            <motion.p 
                                className="text-gray-700 mb-6"
                                variants={fadeIn}
                                transition={{ delay: 0.2 }}
                            >
                                Always ready to be your friend. Come & Contact with us to share your
                                memorable moments, to share with your best companion.
                            </motion.p>
                        </motion.div>

                        <motion.div 
                            ref={socialSectionRef}
                            className="flex space-x-4 mb-8"
                            variants={staggerContainer}
                            initial="hidden"
                            animate={isSocialSectionInView ? "visible" : "hidden"}
                        >
                            {[
                                { icon: <FaFacebookF />, url: "https://facebook.com" },
                                { icon: <FaTwitter />, url: "https://twitter.com" },
                                { icon: <FaInstagram />, url: "https://instagram.com" },
                                { icon: <FaLinkedinIn />, url: "https://linkedin.com" }
                            ].map((social, index) => (
                                <motion.div key={index} variants={socialIconVariant}>
                                    <Link
                                        to={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group w-8 h-8 bg-white flex items-center justify-center rounded-full border border-[#331A15] hover:bg-[#331A15] transition-all duration-300 transform hover:scale-110"
                                    >
                                        <motion.div 
                                            className="text-[#331A15] transition-colors duration-300 group-hover:text-white"
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            {social.icon}
                                        </motion.div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div ref={contactInfoRef}>
                            <motion.h3 
                                className="rancho text-3xl text-[#331A15] mb-4" 
                                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
                                initial={{ opacity: 0 }}
                                animate={isContactInfoInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                Get in Touch
                            </motion.h3>

                            <motion.div 
                                className="space-y-3"
                                variants={staggerContainer}
                                initial="hidden" 
                                animate={isContactInfoInView ? "visible" : "hidden"}
                            >
                                {[
                                    { icon: <FaPhone />, text: "+88 01533 333 333" },
                                    { icon: <FaEnvelope />, text: "info@gmail.com" },
                                    { icon: <FaMapMarkerAlt />, text: "72, Wall street, King Road, Dhaka" }
                                ].map((item, index) => (
                                    <motion.div 
                                        key={index}
                                        className="flex items-center gap-3"
                                        variants={fadeIn}
                                        whileHover={{ x: 5 }}
                                        custom={index}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <span className="text-[#331A15]">{item.icon}</span>
                                        <span className="text-gray-700">{item.text}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <motion.div
                        ref={formSectionRef}
                        initial="hidden"
                        animate={isFormSectionInView ? "visible" : "hidden"}
                        variants={slideIn}
                    >
                        <motion.h3 
                            className="rancho text-3xl text-[#331A15] mb-6" 
                            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
                            whileHover={{ scale: 1.05 }}
                        >
                            Connect with Us
                        </motion.h3>
                        <form>
                            <motion.div 
                                className="mb-4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={isFormSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                transition={{ delay: 0.2 }}
                            >
                                <motion.input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#331A15]"
                                    whileFocus={{ scale: 1.01, borderColor: "#331A15" }}
                                />
                            </motion.div>
                            <motion.div 
                                className="mb-4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={isFormSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                transition={{ delay: 0.3 }}
                            >
                                <motion.input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#331A15]"
                                    whileFocus={{ scale: 1.01, borderColor: "#331A15" }}
                                />
                            </motion.div>
                            <motion.div 
                                className="mb-4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={isFormSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                transition={{ delay: 0.4 }}
                            >
                                <motion.textarea
                                    placeholder="Message"
                                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded focus:outline-none focus:border-[#331A15] h-32"
                                    whileFocus={{ scale: 1.01, borderColor: "#331A15" }}
                                ></motion.textarea>
                            </motion.div>
                            <motion.button
                                type="submit"
                                className="px-6 py-2 border border-[#331A15] rounded rancho text-lg cursor-pointer"
                                whileHover={{ scale: 1.05, backgroundColor: "#331A15", color: "white" }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0 }}
                                animate={isFormSectionInView ? { opacity: 1 } : { opacity: 0 }}
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Copyright */}
            <motion.div 
                ref={copyrightRef}
                className="absolute bottom-0 left-0 right-0 text-white py-2 text-center" 
                style={{ backgroundImage: `url(${copyrightImage})` }}
                initial={{ opacity: 0 }}
                animate={isCopyrightInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <p className="text-sm rancho">Copyright Espresso Emporium | All Rights Reserved</p>
            </motion.div>
        </footer>
    );
};

export default Footer;