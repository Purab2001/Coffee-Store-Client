import React from 'react';
import { Link } from 'react-router';
import { FaArrowLeft, FaEdit, FaEnvelope, FaRegClock, FaIdCard, FaSignInAlt } from 'react-icons/fa';

const UserDetails = () => {
    // Static user data for display
    const user = {
        _id: "65f4a8b7e19a23c8d5a7b9e2",
        name: "Joseph McFall",
        email: "joseph@example.com",
        photo: "https://cdn-icons-png.flaticon.com/128/3033/3033143.png",
        creationTime: "April 29, 2023 at 2:30 PM",
        lastSignInTime: "May 15, 2023 at 4:15 PM"
    };

    return (
        <div className="container mx-auto my-12 px-4">
            <div className="flex justify-between items-center mb-8">
                <Link
                    to="/users"
                    className="inline-flex items-center gap-2 rancho text-xl text-[#374151] hover:text-[#D2B48C] transition-all duration-300 transform hover:translate-x-[-5px] group"
                    style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}
                >
                    <FaArrowLeft className="transition-transform duration-300 group-hover:transform group-hover:translate-x-[-3px]" />
                    Back to users
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-[#F4F3F0] to-[#D2B48C] px-6 py-4 flex justify-between items-center">
                    <h2 className="text-3xl rancho text-[#331A15]" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
                        User Profile
                    </h2>
                    <button className="p-2 bg-[#331A15] text-white rounded-full hover:bg-[#1A0D09] transition-colors">
                        <FaEdit />
                    </button>
                </div>

                <div className="p-6 flex flex-col md:flex-row gap-8">
                    {/* Profile Photo Section */}
                    <div className="md:w-1/3 flex flex-col items-center">
                        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#D2B48C] shadow-lg mb-4">
                            <img
                                src={user.photo}
                                alt={user.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-[#331A15] text-center">{user.name}</h3>
                        <div className="flex items-center gap-2 text-[#666] mt-2">
                            <FaEnvelope className="text-[#D2B48C]" />
                            <span>{user.email}</span>
                        </div>
                    </div>

                    {/* User Details Section */}
                    <div className="md:w-2/3 bg-[#F8F8F8] rounded-lg p-6">
                        <h4 className="text-xl font-semibold mb-4 text-[#331A15] border-b border-[#D2B48C] pb-2">
                            Account Information
                        </h4>

                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500 mb-1 flex items-center gap-1">
                                    <FaIdCard className="text-[#D2B48C]" />
                                    User ID
                                </p>
                                <p className="text-gray-700 font-mono text-sm bg-gray-100 p-2 rounded overflow-x-auto">
                                    {user._id}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500 mb-1 flex items-center gap-1">
                                    <FaRegClock className="text-[#D2B48C]" />
                                    Account Created
                                </p>
                                <p className="text-gray-700">
                                    {user.creationTime}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500 mb-1 flex items-center gap-1">
                                    <FaSignInAlt className="text-[#D2B48C]" />
                                    Last Sign In
                                </p>
                                <p className="text-gray-700">
                                    {user.lastSignInTime}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;