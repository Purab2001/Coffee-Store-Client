import React from 'react';
import { Link } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries());

        fetch('https://coffee-store-server-gtbz.onrender.com/coffees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCoffee),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Coffee Added Successfully",
                        icon: "success",
                        background: '#F4F3F0',
                        iconColor: '#D2B48C',
                        confirmButtonColor: "#D2B48C",
                        customClass: {
                            title: 'text-[#331A15] rancho text-2xl',
                            confirmButton: 'rancho text-xl border-2 border-[#331A15]',
                        }
                    });
                    form.reset();
                }
            })
    }

    return (
        <div>
            <div className='container mx-auto px-4 py-8'>
                <Link
                    to="/"
                    className='inline-flex items-center gap-2 rancho text-xl text-[#374151] mb-6 hover:text-[#D2B48C] transition-all duration-300 transform hover:translate-x-[-5px] group'
                    style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}
                >
                    <FaArrowLeft className="transition-transform duration-300 group-hover:transform group-hover:translate-x-[-3px]" /> Back to home
                </Link>

                <div className='bg-[#F4F3F0] p-8 rounded-lg'>
                    <div className='text-center mb-8'>
                        <h1 className='rancho text-4xl text-[#374151] mb-4' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Add New Coffee</h1>
                        <p className='text-sm text-gray-700'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>

                    <form onSubmit={handleAddCoffee}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div>
                                <label className="block mb-2 font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter coffee name"
                                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2B48C]"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium text-gray-700">Quantity</label>
                                <input
                                    type="text"
                                    name="quantity"
                                    placeholder="Enter coffee quantity"
                                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2B48C]"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium text-gray-700">Supplier</label>
                                <input
                                    type="text"
                                    name="supplier"
                                    placeholder="Enter coffee supplier"
                                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2B48C]"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium text-gray-700">Price</label>
                                <input
                                    type="text"
                                    name="price"
                                    placeholder="Enter coffee price"
                                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2B48C]"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium text-gray-700">Category</label>
                                <input
                                    type="text"
                                    name="category"
                                    placeholder="Enter coffee category"
                                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2B48C]"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2 font-medium text-gray-700">Details</label>
                                <input
                                    type="text"
                                    name="details"
                                    placeholder="Enter coffee details"
                                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2B48C]"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="block mb-2 font-medium text-gray-700">Photo</label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Enter photo URL"
                                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2B48C]"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-8 py-3 bg-[#D2B48C] text-[#331A15] rancho text-xl border-2 border-[#331A15] rounded-md hover:bg-[#C19A6B] cursor-pointer"
                            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
                        >
                            Add Coffee
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;