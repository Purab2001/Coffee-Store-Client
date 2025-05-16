import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import LoadingSpinner from './LoadingSpinner';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children, fallback }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return fallback || <LoadingSpinner />;
    }

    if (!user) {
        // Redirect unauthenticated users to sign-in, preserving intended path
        return <Navigate to="/sign-in" state={{ from: location }} replace />;
    }

    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    fallback: PropTypes.node,
};

ProtectedRoute.defaultProps = {
    fallback: null,
};

export default ProtectedRoute;