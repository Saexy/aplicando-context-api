import React from 'react';
import { useAuth } from '../../contexts/auth';

import { useNavigate } from "react-router-dom"

import "./style.css"

const Home = () => {

    const { token, setToken } = useAuth()

    const navigate = useNavigate()

    const handleLogout = () => {
        setToken("")
        navigate("/login")
    }

    return (
        <div className="home">
            <div className="card-home">
                <div className="title">Olá {token}, seja bem-vindo!</div>
                <button className='btn' onClick={(e) => handleLogout()}>Logout</button>
            </div>
        </div>
    );
}
 
export default Home;