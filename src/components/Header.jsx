import React from 'react';
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

    return (
        <div className="relative container mx-auto">
            {/* Hero section with background image */}
            <div
                className="bg-cover bg-center h-[600px] relative"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center">
                        {/* Left side content remains the same */}
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            {/* Coffee bean image space */}
                        </div>

                        {/* Right side text content remains the same */}
                        <div className="md:w-1/2 text-white text-center md:text-left">
                            <h1 className="rancho text-4xl md:text-5xl mb-4">Would you like a Cup of Delicious Coffee?</h1>
                            <p className="mb-6 text-gray-300 max-w-md">
                                It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!! Enjoy the beautiful moments and make them memorable.
                            </p>
                            <button
                                onClick={handleLearnMoreClick}
                                className="bg-[#D2B48C] hover:bg-[#C19A6B] text-[#331A15] rancho text-xl px-5 py-2 rounded border-2 border-[#331A15] transition-colors duration-300 cursor-pointer"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features section */}
            <div className="bg-[#ECEAE3] py-12">
                <div className="container mx-auto px-4 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Feature 1 - Using imported icon */}
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <img src={coffeeIcon1} alt="Coffee Cup" className="w-16 h-16" />
                            </div>
                            <h3 className="rancho text-2xl text-[#331A15] mb-2">Awesome Aroma</h3>
                            <p className="text-gray-700 text-sm">
                                You will definitely be a fan of the design & aroma of your coffee
                            </p>
                        </div>

                        {/* Feature 2 - Using imported icon */}
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <img src={coffeeIcon2} alt="Quality Badge" className="w-16 h-16" />
                            </div>
                            <h3 className="rancho text-2xl text-[#331A15] mb-2">High Quality</h3>
                            <p className="text-gray-700 text-sm">
                                We served the coffee to you maintaining the best quality
                            </p>
                        </div>

                        {/* Feature 3 - Using imported icon */}
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <img src={coffeeIcon3} alt="Coffee Beans" className="w-16 h-16" />
                            </div>
                            <h3 className="rancho text-2xl text-[#331A15] mb-2">Pure Grades</h3>
                            <p className="text-gray-700 text-sm">
                                The coffee is made of the green coffee beans which you will love
                            </p>
                        </div>

                        {/* Feature 4 - Using imported icon */}
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <img src={coffeeIcon4} alt="Coffee To Go" className="w-16 h-16" />
                            </div>
                            <h3 className="rancho text-2xl text-[#331A15] mb-2">Proper Roasting</h3>
                            <p className="text-gray-700 text-sm">
                                Your coffee is brewed by first roasting the green coffee beans
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;