import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import { FaArrowLeft, FaEdit, FaEnvelope, FaRegClock, FaIdCard, FaSignInAlt, FaSave, FaTimes } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../contexts/AuthContext';

const UserDetails = () => {
    const { user } = useContext(AuthContext);
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Static user data for display - replace with actual data from context/API
    const userData = {
        _id: user?.uid || "65f4a8b7e19a23c8d5a7b9e2",
        name: user?.displayName || "Joseph McFall",
        email: user?.email || "joseph@example.com",
        photo: user?.photoURL || "https://cdn-icons-png.flaticon.com/128/3033/3033143.png",
        creationTime: user?.metadata?.creationTime || "April 29, 2023 at 2:30 PM",
        lastSignInTime: user?.metadata?.lastSignInTime || "May 15, 2023 at 4:15 PM"
    };

    // Toggle edit mode
    const handleToggleEdit = () => {
        if (isEditing) {
            // Reset form if canceling edit
            setName(userData.name);
            setPhotoURL(userData.photo);
        }
        setIsEditing(!isEditing);
    };

    // Handle save profile changes
    const handleSaveProfile = async () => {
        setIsSubmitting(true);
        try {
            // 1. Update Firebase user profile
            await updateProfile(user, {
                displayName: name,
                photoURL: photoURL
            });

            // 2. Update MongoDB user profile
            const response = await fetch('https://coffee-store-server-gtbz.onrender.com/users', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: userData.email,
                    name: name,
                    photo: photoURL
                }),
            });

            const data = await response.json();

            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: "Profile Updated!",
                    text: "Your profile has been updated successfully",
                    icon: "success",
                    background: '#F4F3F0',
                    iconColor: '#331A15',
                    customClass: {
                        title: 'text-[#331A15] font-rancho text-2xl',
                        content: 'text-gray-700',
                        confirmButton: 'font-rancho text-xl',
                    }
                });

                // Update local userData state
                userData.name = name;
                userData.photo = photoURL;

                // Exit edit mode
                setIsEditing(false);
            } else {
                Swal.fire({
                    title: "Something went wrong",
                    text: "Failed to update profile in database",
                    icon: "error",
                    background: '#F4F3F0',
                    iconColor: '#EA4744',
                    customClass: {
                        title: 'text-[#331A15] font-rancho text-2xl',
                        content: 'text-gray-700',
                        confirmButton: 'font-rancho text-xl',
                    }
                });
            }
        } catch (err) {
            Swal.fire({
                title: "Error!",
                text: err.message || "Failed to update profile. Please try again.",
                icon: "error",
                background: '#F4F3F0',
                iconColor: '#EA4744',
                customClass: {
                    title: 'text-[#331A15] font-rancho text-2xl',
                    content: 'text-gray-700',
                    confirmButton: 'font-rancho text-xl',
                }
            });
        } finally {
            setIsSubmitting(false);
        }
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
                        {isEditing ? "Edit Profile" : "User Profile"}
                    </h2>
                    {isEditing ? (
                        <div className="flex gap-2">
                            <button
                                onClick={handleSaveProfile}
                                disabled={isSubmitting}
                                className="p-2 bg-[#4CAF50] text-white rounded-full hover:bg-[#45a049] transition-colors disabled:bg-gray-400">
                                <FaSave />
                            </button>
                            <button
                                onClick={handleToggleEdit}
                                className="p-2 bg-[#EA4744] text-white rounded-full hover:bg-[#d43832] transition-colors">
                                <FaTimes />
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={handleToggleEdit}
                            className="p-2 bg-[#331A15] text-white rounded-full hover:bg-[#1A0D09] transition-colors">
                            <FaEdit />
                        </button>
                    )}
                </div>

                <div className="p-6 flex flex-col md:flex-row gap-8">
                    {/* Profile Photo Section */}
                    <div className="md:w-1/3 flex flex-col items-center">
                        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#D2B48C] shadow-lg mb-4">
                            <img
                                src={isEditing ? photoURL : userData.photo}
                                alt={userData.name}
                                className="w-full h-full object-cover"
                                onError={(e) => e.target.src = 'https://cdn-icons-png.flaticon.com/128/3033/3033143.png'}
                            />
                        </div>

                        {isEditing ? (
                            <div className="w-full">
                                <label className="block mb-2 font-medium text-gray-700">Display Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-3 py-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2B48C]"
                                />

                                <label className="block mb-2 font-medium text-gray-700">Photo URL</label>
                                <input
                                    type="text"
                                    value={photoURL}
                                    onChange={(e) => setPhotoURL(e.target.value)}
                                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2B48C]"
                                    placeholder="Enter photo URL"
                                />
                            </div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-semibold text-[#331A15] text-center">{userData.name}</h3>
                                <div className="flex items-center gap-2 text-[#666] mt-2">
                                    <FaEnvelope className="text-[#D2B48C]" />
                                    <span>{userData.email}</span>
                                </div>
                            </>
                        )}
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
                                    {userData._id}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500 mb-1 flex items-center gap-1">
                                    <FaRegClock className="text-[#D2B48C]" />
                                    Account Created
                                </p>
                                <p className="text-gray-700">
                                    {userData.creationTime}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500 mb-1 flex items-center gap-1">
                                    <FaSignInAlt className="text-[#D2B48C]" />
                                    Last Sign In
                                </p>
                                <p className="text-gray-700">
                                    {userData.lastSignInTime}
                                </p>
                            </div>
                        </div>

                        {isEditing && (
                            <div className="mt-8">
                                <button
                                    onClick={handleSaveProfile}
                                    disabled={isSubmitting}
                                    className="w-full py-3 bg-[#D2B48C] text-[#331A15] rancho text-xl border-2 border-[#331A15] rounded-md hover:bg-[#C19A6B] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
                                >
                                    {isSubmitting ? 'Saving Changes...' : 'Save Changes'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;