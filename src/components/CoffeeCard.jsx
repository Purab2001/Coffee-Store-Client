import React from 'react';
import { BsEye, BsPencilSquare, BsTrash } from 'react-icons/bs';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
    const { _id, name, photo, supplier, price } = coffee;

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this coffee!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#D2B48C",
            cancelButtonColor: "#EA4744",
            confirmButtonText: "Yes, delete it!",
            background: '#F4F3F0',
            iconColor: '#331A15',
            customClass: {
                title: 'text-[#331A15] font-rancho text-2xl',
                content: 'text-gray-700',
                confirmButton: 'font-rancho text-xl',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            // Remove from UI
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining);

                            Swal.fire({
                                title: "Coffee Deleted Successfully",
                                icon: "success",
                                background: '#F4F3F0',
                                iconColor: '#331A15',
                                customClass: {
                                    title: 'text-[#331A15] font-rancho text-2xl',
                                    content: 'text-gray-700',
                                    confirmButton: 'font-rancho text-xl',
                                }
                            });
                        }
                    });
            }
        });
    };

    return (
        <div className='bg-[#F8F8F8] p-6 rounded-lg flex flex-col md:flex-row items-center gap-6'>
            <img src={photo} alt={name} className='w-40 h-40 object-cover' />

            <div className='flex-grow'>
                <div className='space-y-2'>
                    <p><span className='font-semibold'>Name:</span> <span className='text-gray-600'>{name}</span></p>
                    <p><span className='font-semibold'>Supplier:</span> <span className='text-gray-600'>{supplier}</span></p>
                    <p><span className='font-semibold'>Price:</span> <span className='text-gray-600'>{price} Taka</span></p>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <Link to={`/coffee/${_id}`} className='p-2 bg-[#D2B48C] text-white rounded cursor-pointer hover:bg-[#C19A6B] transition-colors duration-300 transform hover:scale-105 inline-flex items-center justify-center'>
                    <BsEye className='text-lg' />
                </Link>
                <Link
                    to={`/update-coffee/${_id}`}
                    className='p-2 bg-[#3C393B] text-white rounded cursor-pointer hover:bg-[#2A2729] transition-colors duration-300 transform hover:scale-105 inline-flex items-center justify-center'
                >
                    <BsPencilSquare className='text-lg' />
                </Link>
                <button
                    onClick={() => handleDelete(_id)}
                    className='p-2 bg-[#EA4744] text-white rounded cursor-pointer hover:bg-[#d43832] transition-colors duration-300 transform hover:scale-105'
                >
                    <BsTrash className='text-lg' />
                </button>
            </div>
        </div>
    );
};

export default CoffeeCard;