import React from 'react';
import { Link } from 'react-router';
import backgroundImage from '../assets/15.jpg';

const Navbar = () => {
    return (
        <nav className="py-4 px-6" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="container mx-auto flex justify-center items-center">
                <Link to="/" className="flex items-center gap-3">
                    <img src="/logo1.png" className='w-10 h-10' />
                    <h1 className="text-white text-2xl md:text-3xl rancho">
                        Espresso Emporium
                    </h1>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;