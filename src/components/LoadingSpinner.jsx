import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-[#F4F3F0] bg-opacity-80">
            <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Coffee cup icon with steam */}
                <div className="relative mb-6">
                    <span className="loading loading-spinner loading-lg text-[#331A15]"></span>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <motion.div
                            className="w-1 h-3 bg-[#331A15] opacity-70 rounded-full mx-auto"
                            animate={{ height: [3, 10, 3], opacity: [0.4, 0.7, 0.4] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="w-1 h-3 bg-[#331A15] opacity-70 rounded-full mx-auto mt-1"
                            animate={{ height: [5, 15, 5], opacity: [0.4, 0.7, 0.4] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.3 }}
                        />
                    </div>
                </div>

                {/* Loading text */}
                <motion.h2
                    className="text-[#331A15] text-2xl font-rancho mb-2"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    Brewing your experience...
                </motion.h2>

                {/* Progress bar */}
                <div className="w-64 h-2 bg-[#E3B577] bg-opacity-30 rounded-full overflow-hidden mt-4">
                    <motion.div
                        className="h-full bg-[#E3B577]"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                    />
                </div>

                {/* Additional loading info */}
                <p className="text-gray-600 mt-4 text-sm italic">Please wait while we prepare your coffee</p>

                {/* Loading indicators */}
                <div className="flex justify-center space-x-2 mt-6">
                    <span className="loading loading-dots loading-sm text-[#331A15]"></span>
                </div>
            </motion.div>
        </div>
    );
};

export default LoadingSpinner;