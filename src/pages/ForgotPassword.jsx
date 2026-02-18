import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/auth.css';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            toast.info('If an account exists, a reset link has been sent.');
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="row authentication authentication-cover-main mx-0">
            <div className="col-xxl-9 col-xl-9">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-8 col-12">
                        <div className="card custom-card border-0 shadow-none my-4">
                            <div className="card-body p-5">
                                <div>
                                    <h4 className="mb-1 fw-semibold">Forgot Password?</h4>
                                    <p className="mb-4 text-muted fw-normal">Enter your email to reset your password.</p>
                                </div>

                                <form className="mt-2" onSubmit={handleSubmit}>
                                    <div className="row gy-3">
                                        <div className="col-xl-12">
                                            <label htmlFor="email" className="form-label text-default">Email Address</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter your email"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <button className="btn btn-primary w-100 waves-effect waves-light" type="submit" disabled={loading}>
                                            {loading ? 'Sending...' : 'Send Reset Link'}
                                        </button>
                                    </div>
                                </form>

                                <div className="text-center mt-3 fw-medium">
                                    <Link to="/login" className="text-primary">Back to Login</Link>
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
                            <h3 className="fw-semibold lh-base">Recover Access</h3>
                            <p className="mb-0 text-muted fw-medium">Reset your password to regain access to your investment dashboard.</p>
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

export default ForgotPassword;
