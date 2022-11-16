import React, { createContext, useContext } from 'react';
import useLocalStorage from 'react-use-localstorage';

export const AuthContext = createContext({
    token: null,
    setToken: () => null
})

export const AuthProvider = (props) => {
    const [token, setToken] = useLocalStorage("token", "")

    return(
        <AuthContext.Provider
        value={{token, setToken}}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)