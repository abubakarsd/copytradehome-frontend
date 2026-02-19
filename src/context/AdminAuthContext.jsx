import React, { createContext, useState, useContext, useEffect } from 'react';

const AdminAuthContext = createContext(null);

export const AdminAuthProvider = ({ children }) => {
    const [adminToken, setAdminToken] = useState(localStorage.getItem('admin_token'));
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('admin_token'));

    const login = (token) => {
        localStorage.setItem('admin_token', token);
        setAdminToken(token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('admin_token');
        setAdminToken(null);
        setIsAuthenticated(false);
    };

    // Optional: Validate token on mount
    useEffect(() => {
        const token = localStorage.getItem('admin_token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <AdminAuthContext.Provider value={{ adminToken, isAuthenticated, login, logout }}>
            {children}
        </AdminAuthContext.Provider>
    );
};

export const useAdminAuth = () => useContext(AdminAuthContext);
