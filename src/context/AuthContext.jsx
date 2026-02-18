import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../utils/axios';
import { toast } from 'react-toastify';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUser = async () => {
            if (token) {
                try {
                    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                    const res = await api.get('/auth/me');
                    setUser(res.data.data);
                    setIsAuthenticated(true);
                } catch (err) {
                    console.error('Load user error:', err);
                    localStorage.removeItem('token');
                    setToken(null);
                    setUser(null);
                    setIsAuthenticated(false);
                }
            }
            setLoading(false);
        };

        loadUser();
    }, [token]);

    const login = async (email, password) => {
        try {
            const res = await api.post('/auth/login', { email, password });

            if (res.data.success) {
                localStorage.setItem('token', res.data.token);
                setToken(res.data.token);
                toast.success('Login successful!');
                return true;
            }
        } catch (err) {
            console.error('Login error:', err);
            const msg = err.response?.data?.error || 'Login failed';
            toast.error(msg);
            throw new Error(msg);
        }
    };

    const register = async (userData) => {
        try {
            const res = await api.post('/auth/register', userData);

            if (res.data.success) {
                // Do NOT set token here. Redirect to verify page with email.
                toast.success('OTP sent! Check your console.');
                return res.data; // Return data so Register component can navigate
            }
        } catch (err) {
            console.error('Registration error:', err);
            const msg = err.response?.data?.error || 'Registration failed';
            toast.error(msg);
            throw new Error(msg);
        }
    };

    const verifyEmail = async (email, otp) => {
        try {
            const res = await api.post('/auth/verify-email', { email, otp });

            if (res.data.success) {
                localStorage.setItem('token', res.data.token);
                setToken(res.data.token);
                toast.success('Email verified! Logging in...');
                return true;
            }
        } catch (err) {
            console.error('Verification error:', err);
            const msg = err.response?.data?.error || 'Verification failed';
            toast.error(msg);
            throw new Error(msg);
        }
    };

    const resendOtp = async (email) => {
        try {
            const res = await api.post('/auth/resend-otp', { email });

            if (res.data.success) {
                toast.success('OTP resent! Check your console.');
                return true;
            }
        } catch (err) {
            console.error('Resend OTP error:', err);
            const msg = err.response?.data?.error || 'Failed to resend OTP';
            toast.error(msg);
            throw new Error(msg);
        }
    };

    const logout = async () => {
        try {
            // Optional: Call backend logout if using cookies/sessions heavily
            // await api.get('/auth/logout'); 
        } catch (err) {
            console.error('Logout error', err);
        } finally {
            localStorage.removeItem('token');
            setToken(null);
            setUser(null);
            setIsAuthenticated(false);
            toast.info('Logged out');
            window.location.href = '/login'; // Redirect to login, not root if preferred, but root is fine.
        }
    };

    const updateProfile = async (userData) => {
        try {
            const res = await api.put('/auth/updatedetails', userData);
            if (res.data.success) {
                setUser(res.data.data);
                toast.success('Profile updated successfully');
                return true;
            }
        } catch (err) {
            console.error('Update profile error:', err);
            const msg = err.response?.data?.error || 'Update failed';
            toast.error(msg);
            throw new Error(msg);
        }
    };

    const value = {
        user,
        token,
        isAuthenticated,
        loading,
        login,
        register,
        verifyEmail,
        resendOtp,
        logout,
        updateProfile
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
