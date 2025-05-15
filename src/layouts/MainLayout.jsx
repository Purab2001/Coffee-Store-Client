import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import backgroundImage from '../assets/1.png';
import FollowSection from '../components/FollowSection';

const MainLayout = () => {
    const location = useLocation();
    const show = location.pathname === '/';

    return (
        <div>
            {location.pathname !== '/sign-in' && location.pathname !== '/sign-up' && <Navbar />}
            {show && <Header />}
            <div
                className='px-4 md:px-12 bg-center bg-no-repeat min-h-screen'
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover'
                }}
            >
                <Outlet />
            </div>
            {show && <FollowSection />}
            {location.pathname !== '/sign-in' && location.pathname !== '/sign-up' && <Footer />}
        </div>
    );
};

export default MainLayout;