import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import backgroundImage from '../assets/1.png';
import FollowSection from '../components/FollowSection';
import { ToastContainer } from 'react-toastify';

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
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default MainLayout;