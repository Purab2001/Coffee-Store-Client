import React from 'react';
import coffee1 from '../assets/cups/Rectangle 9.png';
import coffee2 from '../assets/cups/Rectangle 10.png';
import coffee3 from '../assets/cups/Rectangle 11.png';
import coffee4 from '../assets/cups/Rectangle 12.png';
import coffee5 from '../assets/cups/Rectangle 13.png';
import coffee6 from '../assets/cups/Rectangle 14.png';
import coffee7 from '../assets/cups/Rectangle 15.png';
import coffee8 from '../assets/cups/Rectangle 16.png';

const FollowSection = () => {
    return (
        <div className="container mx-auto py-16 px-4 md:px-12">
            <div className="text-center mb-10">
                <p className="text-sm text-gray-600 mb-2">Follow Us Now</p>
                <h2 className="rancho text-4xl text-[#331A15]" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
                    Follow on Instagram
                </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* First row */}
                <div className="overflow-hidden rounded-lg">
                    <img
                        src={coffee1}
                        alt="Coffee cup"
                        className="w-full h-[300px] object-cover hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img
                        src={coffee2}
                        alt="Coffee cup with beans"
                        className="w-full h-[300px] object-cover hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img
                        src={coffee3}
                        alt="Latte with latte art"
                        className="w-full h-[300px] object-cover hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img
                        src={coffee4}
                        alt="Yellow coffee cup"
                        className="w-full h-[300px] object-cover hover:scale-110 transition-transform duration-300"
                    />
                </div>

                {/* Second row */}
                <div className="overflow-hidden rounded-lg">
                    <img
                        src={coffee5}
                        alt="Espresso with beans"
                        className="w-full h-[300px] object-cover hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img
                        src={coffee6}
                        alt="Coffee with latte art"
                        className="w-full h-[300px] object-cover hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img
                        src={coffee7}
                        alt="Top view of coffee"
                        className="w-full h-[300px] object-cover hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img
                        src={coffee8}
                        alt="Detailed latte art"
                        className="w-full h-[300px] object-cover hover:scale-110 transition-transform duration-300"
                    />
                </div>
            </div>
        </div>
    );
};

export default FollowSection;