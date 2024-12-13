import React from 'react';
import { Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/404" />;
    }

    const decoded = jwt_decode(token);
    const userRole = decoded.role;

    if (!allowedRoles.includes(userRole)) {
        return <Navigate to="/404" />;
    }

    return children;
};

export default ProtectedRoute;
