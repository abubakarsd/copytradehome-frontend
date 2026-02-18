import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import '../assets/css/auth.css';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const VerifyEmail = () => {
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [resending, setResending] = useState(false);
    const { verifyEmail, resendOtp } = useAuth();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const email = location.state?.email || searchParams.get('email');

    if (!email) {
        // Redirect if no email in state (user tried to access directly)
        // navigate('/register');
        // return null;
    }

    const handleVerify = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await verifyEmail(email, otp);
            navigate('/login');
        } catch (err) {
            // Error handled in AuthContext or here
        } finally {
            setLoading(false);
        }
    };

    const handleResend = async (e) => {
        e.preventDefault();
        setResending(true);
        try {
            await resendOtp(email);
        } catch (err) {
            // Error handled in AuthContext
        } finally {
            setResending(false);
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
                                    <h4 className="mb-1 fw-semibold">Verify Your Email</h4>
                                    <p className="mb-4 text-muted fw-normal">Enter the 6-digit code sent to your email (check console for now).</p>
                                </div>

                                <form className="mt-2" onSubmit={handleVerify}>
                                    <div className="row gy-3">
                                        <div className="col-xl-12">
                                            <label htmlFor="otp" className="form-label text-default">OTP Code</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="otp"
                                                value={otp}
                                                onChange={(e) => setOtp(e.target.value)}
                                                placeholder="Enter 6-digit OTP"
                                                required
                                                maxLength="6"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <button className="btn btn-primary w-100 waves-effect waves-light" type="submit" disabled={loading}>
                                            {loading ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                    Verifying...
                                                </>
                                            ) : (
                                                'Verify Email'
                                            )}
                                        </button>
                                    </div>
                                </form>

                                <div className="text-center mt-3 fw-medium">
                                    <p className="mb-2">Did not receive the code?
                                        <a href="#!" onClick={handleResend} className={`text-primary ms-2 ${resending ? 'disabled' : ''}`} style={{ pointerEvents: resending ? 'none' : 'auto' }}>
                                            {resending ? 'Resending...' : 'Resend OTP'}
                                        </a>
                                    </p>
                                    <Link to="/login" className="text-primary">Back to Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Cover Image similar to other auth pages */}
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
                            <h3 className="fw-semibold lh-base">Security First</h3>
                            <p className="mb-0 text-muted fw-medium">We ensure your account is secure starting with email verification.</p>
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

export default VerifyEmail;
