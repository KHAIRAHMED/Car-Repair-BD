import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userContext } from '../../../App';
// import { userContext } from '../../App';

const PrivateRoute = ({ children }) => {
    const [userLoggedIn] = useContext(userContext);
    let location = useLocation();

    if (!userLoggedIn?.email) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children
}

export default PrivateRoute;