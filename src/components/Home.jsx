import React, { useState, useContext } from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';
import { FaCoffee } from 'react-icons/fa';
import CoffeeCard from './CoffeeCard';
import Button from './Button';
import { AuthContext } from '../contexts/AuthContext';

const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);
    const { user } = useContext(AuthContext);

    return (
        <div className='container mx-auto my-10'>
            <div className='py-8'>
                <div id="coffee-cards-section" className='text-center mb-10'>
                    <p className='rancho text-xl'>--- Sip & Savor ---</p>
                    <h2 className='rancho text-5xl text-[#331A15]' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Our Popular Products</h2>

                    {user && (
                        <div className='mt-6'>
                            <Link to="/add-coffee">
                                <Button
                                    text="Add Coffee"
                                    icon={<FaCoffee />}
                                />
                            </Link>
                        </div>
                    )}
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {console.log('DEBUG: coffees value/type:', coffees, Array.isArray(coffees))}
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