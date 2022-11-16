import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';

const PrivateRoute = (props) => {
    const { token } = useAuth()

    if(token == "" || token == null){
        return (<Navigate to="/login" />)
    }

    return (
        <>{props.children}</>
    )
}
 
export default PrivateRoute;