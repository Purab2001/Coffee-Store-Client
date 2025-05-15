import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        // Optionally, show a loading spinner
        return <div>Loading...</div>;
    }

    if (!user) {
        // Redirect unauthenticated users to sign-in, preserving intended path
        return <Navigate to="/sign-in" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;