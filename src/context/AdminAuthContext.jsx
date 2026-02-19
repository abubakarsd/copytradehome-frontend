import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../utils/axios';

const AdminAuthContext = createContext(null);

export const AdminAuthProvider = ({ children }) => {
    const [adminToken, setAdminToken] = useState(localStorage.getItem('admin_token'));
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('admin_token'));

    const login = async (email, password) => {
        try {
            const { data } = await api.post('/admin/auth/login', { email, password });
            if (data.success) {
                localStorage.setItem('admin_token', data.token);
                setAdminToken(data.token);
                setIsAuthenticated(true);
                return { success: true };
            }
        } catch (error) {
            console.error('Admin Login Error:', error);
            return {
                success: false,
                error: error.response?.data?.error || 'Login failed'
            };
        }
    };

    const logout = () => {
        localStorage.removeItem('admin_token');
        setAdminToken(null);
        setIsAuthenticated(false);
    };

    return (
        <AdminAuthContext.Provider value={{ adminToken, isAuthenticated, login, logout }}>
            {children}
        </AdminAuthContext.Provider>
    );
};

export const useAdminAuth = () => useContext(AdminAuthContext);
