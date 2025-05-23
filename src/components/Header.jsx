import React from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import backgroundImage from '../assets/3.png';
import coffeeIcon1 from '../assets/icons/1.png';
import coffeeIcon2 from '../assets/icons/2.png';
import coffeeIcon3 from '../assets/icons/3.png';
import coffeeIcon4 from '../assets/icons/4.png';

const Header = () => {
    const handleLearnMoreClick = () => {
        const coffeeSection = document.getElementById('coffee-cards-section');
        if (coffeeSection) {
            coffeeSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Animation variants
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const iconHover = {
        rest: { scale: 1, rotate: 0 },
        hover: { scale: 1.1, rotate: 5, transition: { duration: 0.3 } }
    };

    return (
        <div className="relative container mx-auto">
            {/* Hero section with background image */}
            <motion.div
                className="bg-cover bg-center h-[600px] relative"
                style={{ backgroundImage: `url(${backgroundImage})` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center">
                        {/* Left side content */}
                        <motion.div
                            className="md:w-1/2 mb-8 md:mb-0"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            {/* Coffee bean image space */}
                        </motion.div>

                        {/* Right side text content */}
                        <div className="md:w-1/2 text-white text-center md:text-left">
                            <motion.h1
                                className="rancho text-4xl md:text-5xl mb-4"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                Would you like a Cup of Delicious Coffee?
                            </motion.h1>

                            <motion.p
                                className="mb-6 text-gray-300 max-w-md"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                            >
                                It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!! Enjoy the beautiful moments and make them memorable.
                            </motion.p>

                            <motion.button
                                onClick={handleLearnMoreClick}
                                className="bg-[#D2B48C] hover:bg-[#C19A6B] text-[#331A15] rancho text-xl px-5 py-2 rounded border-2 border-[#331A15] transition-colors duration-300 cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Learn More
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Features section */}
            <motion.div
                className="bg-[#ECEAE3] py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
            >
                <div className="container mx-auto px-4 md:px-12">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-4 gap-6"
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                    >
                        {/* Feature 1 */}
                        <motion.div
                            className="text-center"
                            variants={fadeIn}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.div
                                className="flex justify-center mb-4"
                                variants={iconHover}
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                            >
                                <img src={coffeeIcon1} alt="Coffee Cup" className="w-16 h-16" />
                            </motion.div>
                            <h3 className="rancho text-2xl text-[#331A15] mb-2">Awesome Aroma</h3>
                            <p className="text-gray-700 text-sm">
                                You will definitely be a fan of the design & aroma of your coffee
                            </p>
                        </motion.div>

                        {/* Feature 2 */}
                        <motion.div
                            className="text-center"
                            variants={fadeIn}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.div
                                className="flex justify-center mb-4"
                                variants={iconHover}
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                            >
                                <img src={coffeeIcon2} alt="Quality Badge" className="w-16 h-16" />
                            </motion.div>
                            <h3 className="rancho text-2xl text-[#331A15] mb-2">High Quality</h3>
                            <p className="text-gray-700 text-sm">
                                We served the coffee to you maintaining the best quality
                            </p>
                        </motion.div>

                        {/* Feature 3 */}
                        <motion.div
                            className="text-center"
                            variants={fadeIn}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.div
                                className="flex justify-center mb-4"
                                variants={iconHover}
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                            >
                                <img src={coffeeIcon3} alt="Coffee Beans" className="w-16 h-16" />
                            </motion.div>
                            <h3 className="rancho text-2xl text-[#331A15] mb-2">Pure Grades</h3>
                            <p className="text-gray-700 text-sm">
                                The coffee is made of the green coffee beans which you will love
                            </p>
                        </motion.div>

                        {/* Feature 4 */}
                        <motion.div
                            className="text-center"
                            variants={fadeIn}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.div
                                className="flex justify-center mb-4"
                                variants={iconHover}
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                            >
                                <img src={coffeeIcon4} alt="Coffee To Go" className="w-16 h-16" />
                            </motion.div>
                            <h3 className="rancho text-2xl text-[#331A15] mb-2">Proper Roasting</h3>
                            <p className="text-gray-700 text-sm">
                                Your coffee is brewed by first roasting the green coffee beans
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Header;