import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from "../../contexts/auth"

import "./style.css"

const Login = () => {

    const { token, setToken } = useAuth()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleLogin = () => {
        if(email == "nickolas@gmail.com" && password == "123"){
            setToken("Nickolas")
            navigate("/")
        }else{
            alert("Usuário ou senha incorretos.")
        }
    }

    return (
        <div className="login">
            <div className="card-login">
                <div className="title">Login</div>
                <div className="input-field">
                    <input type="text" placeholder='Login...' onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className="input-field">
                    <input type="password" placeholder='Senha...'  onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <button className='btn' onClick={(e) => handleLogin()}>Entrar</button>
            </div>
        </div>
    );
}
 
export default Login;