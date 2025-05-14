import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';
import { FaCoffee } from 'react-icons/fa';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);

    return (
        <div className='container mx-auto my-10'>
            <div className='py-8'>
                <div id="coffee-cards-section" className='text-center mb-10'>
                    <p className='rancho text-xl'>--- Sip & Savor ---</p>
                    <h2 className='rancho text-5xl text-[#331A15]' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Our Popular Products</h2>

                    <div className='mt-6'>
                        <Link to="/add-coffee" className='inline-flex items-center gap-2 bg-[#D2B48C] hover:bg-[#C19A6B] text-[#331A15] rancho text-xl px-5 py-2 rounded border-2 border-[#331A15]'
                            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                            Add Coffee <FaCoffee />
                        </Link>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {coffees.map(coffee => (
                        <CoffeeCard
                            key={coffee._id}
                            coffee={coffee}
                            coffees={coffees}
                            setCoffees={setCoffees}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;