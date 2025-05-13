import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    const { name, photo, supplier, price, category, details, quantity } = coffee;

    return (
        <div className='container mx-auto my-12 px-4'>
            <Link
                to="/"
                className='inline-flex items-center gap-2 rancho text-xl text-[#374151] mb-8 hover:text-[#D2B48C] transition-all duration-300 transform hover:translate-x-[-5px] group'
                style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}
            >
                <FaArrowLeft className="transition-transform duration-300 group-hover:transform group-hover:translate-x-[-3px]" />
                Back to home
            </Link>

            <div className='bg-[#F8F8F8] p-8 rounded-lg'>
                <div className='flex flex-col md:flex-row gap-8 items-center md:items-start'>
                    <div className='w-full md:w-1/3 flex justify-center'>
                        <img
                            src={photo}
                            alt={name}
                            className="h-80 w-64 object-cover rounded-lg"
                        />
                    </div>

                    <div className='w-full md:w-2/3'>
                        <h2 className='rancho text-3xl text-[#331A15] mb-6' style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>Niceties</h2>

                        <div className='space-y-4'>
                            <p className='flex gap-2'>
                                <span className='font-medium text-[#331A15] min-w-[80px]'>Name:</span>
                                <span className='text-gray-700'>{name}</span>
                            </p>
                            <p className='flex gap-2'>
                                <span className='font-medium text-[#331A15] min-w-[80px]'>Chef:</span>
                                <span className='text-gray-700'>Mr. Matin Paul</span>
                            </p>
                            <p className='flex gap-2'>
                                <span className='font-medium text-[#331A15] min-w-[80px]'>Supplier:</span>
                                <span className='text-gray-700'>{supplier}</span>
                            </p>
                            <p className='flex gap-2'>
                                <span className='font-medium text-[#331A15] min-w-[80px]'>Taste:</span>
                                <span className='text-gray-700'>Sweet and hot</span>
                            </p>
                            <p className='flex gap-2'>
                                <span className='font-medium text-[#331A15] min-w-[80px]'>Price:</span>
                                <span className='text-gray-700'>{price} Taka</span>
                            </p>
                            <p className='flex gap-2'>
                                <span className='font-medium text-[#331A15] min-w-[80px]'>Quantity:</span>
                                <span className='text-gray-700'>{quantity}</span>
                            </p>
                            <p className='flex gap-2'>
                                <span className='font-medium text-[#331A15] min-w-[80px]'>Category:</span>
                                <span className='text-gray-700'>{category}</span>
                            </p>
                            <p className='flex gap-2'>
                                <span className='font-medium text-[#331A15] min-w-[80px]'>Details:</span>
                                <span className='text-gray-700'>{details}</span>
                            </p>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <Link
                                to={`/update-coffee/${coffee._id}`}
                                className='inline-flex items-center gap-2 bg-[#D2B48C] hover:bg-[#C19A6B] text-[#331A15] rancho text-xl px-5 py-2 rounded border-2 border-[#331A15] transition-colors duration-300'
                            >
                                Edit Coffee Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;