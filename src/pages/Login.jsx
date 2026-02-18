import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/auth.css';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await login(email, password);
            navigate('/dashboard');
        } catch (err) {
            // Error handling is done in AuthContext via toast
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="row authentication authentication-cover-main mx-0">
            <div className="col-xxl-9 col-xl-9">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-8 col-12">
                        <div className="card custom-card border-0 shadow-none my-4">
                            <div className="card-body p-5">
                                <div>
                                    <h4 className="mb-1 fw-semibold">Sign In</h4>
                                    <p className="mb-4 text-muted fw-normal">Welcome back! Sign in to continue.</p>
                                </div>

                                { /* Error handling via toast */}

                                <form className="mt-2" onSubmit={handleLogin}>
                                    <div className="row gy-3">
                                        <div className="col-xl-12">
                                            <label htmlFor="email" className="form-label text-default">Email</label>
                                            <input type="email" className="form-control" id="email" name="email" value={email} onChange={onChange} placeholder="Enter email" required />
                                        </div>

                                        <div className="col-xl-12">
                                            <label htmlFor="password" className="form-label text-default d-block">Password</label>
                                            <div className="position-relative">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    className="form-control"
                                                    id="password"
                                                    name="password"
                                                    value={password}
                                                    onChange={onChange}
                                                    placeholder="Enter password"
                                                    required
                                                />
                                                <a
                                                    href="javascript:void(0);"
                                                    className="show-password-button text-muted"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                >
                                                    <i className={showPassword ? "ri-eye-line align-middle" : "ri-eye-off-line align-middle"}></i>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-xl-12 d-flex align-items-center justify-content-between">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
                                                <label className="form-check-label text-muted" htmlFor="rememberMe">
                                                    Remember me
                                                </label>
                                            </div>
                                            <Link to="/forgot-password" className="text-primary fw-medium">Forgot Password?</Link>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <button className="btn btn-primary w-100 waves-effect waves-light" type="submit" disabled={loading}>
                                            {loading ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                    Logging in...
                                                </>
                                            ) : (
                                                'Login'
                                            )}
                                        </button>
                                    </div>
                                </form>

                                <div className="text-center mt-3 fw-medium">
                                    Don't have an account? <Link to="/register" className="text-primary">Register</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xxl-3 col-xl-3 col-lg-12 d-xl-block d-none px-0">
                <div className="authentication-cover overflow-hidden">
                    <div className="authentication-cover-logo">
                        <Link to="/">
                            <img src="/assets/images/copytradehome-logo-orange.png" alt="logo" className="desktop-dark" />
                        </Link>
                    </div>
                    <div className="authentication-cover-background">
                        <img src="/assets/images/9.png" alt="" />
                    </div>
                    <div className="authentication-cover-content">
                        <div className="p-5">
                            <h3 className="fw-semibold lh-base">Welcome to CopyTradeHome</h3>
                            <p className="mb-0 text-muted fw-medium">Manage your account and investments with ease using our powerful platform.</p>
                        </div>
                        <div>
                            <img src="/assets/images/business.png" alt="" className="img-fluid auth-cover-image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
// Force HMR update
