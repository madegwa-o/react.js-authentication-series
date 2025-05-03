import { createContext, useContext, useState } from 'react';

const AuthenticationContext = createContext(undefined);

let contextRef = null

export function UseAuthenticationContext() {
    const context = useContext(AuthenticationContext);
    if (!context) {
        throw new Error('UseAuthenticationContext must be used within an AuthenticationProvider');
    }
    return context;
}

export const AuthenticationProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState('');

    const login = async (username, password) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            setAccessToken(data.accessToken);
        } catch (error) {
            console.error(error.message);
        }
    };

    const logout = () => {
        setAccessToken('');
    };

    const contextValue = {accessToken, setAccessToken,  login, logout};
    contextRef = contextValue;

    return (
        <AuthenticationContext.Provider value={contextValue}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export const getAuthContext = () => contextRef;