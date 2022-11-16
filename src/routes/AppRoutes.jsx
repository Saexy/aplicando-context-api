import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PrivateRoute from "../components/PrivateRoute"

import Home from "../pages/Home"
import Login from "../pages/Login"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' exact element={ <Login />} />
                <Route path='/' exact element={ <PrivateRoute><Home /></PrivateRoute>} />
            </Routes>
        </BrowserRouter>
    )
}
 
export default AppRoutes;