import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/auth.css';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        cpassword: ''
    });
    const { register } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { name, email, phone, password, cpassword } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== cpassword) {
            toast.error('Passwords do not match');
            return;
        }

        setLoading(true);
        try {
            await register({
                email,
                password,
                fullname: name,
                phone
            });

            // Redirect to verify email page, passing email in state
            navigate('/verify-email', { state: { email } });

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
                                    <h4 className="mb-1 fw-semibold">Create your account</h4>
                                    <p className="mb-4 text-muted fw-normal">Get your CopyTradeHome account now.</p>
                                </div>

                                { /* Error handling via toast */}

                                <form className="mt-2" onSubmit={handleRegister}>
                                    <div className="row gy-3">
                                        <div className="col-xl-12">
                                            <label htmlFor="fullname" className="form-label text-default">Full Name</label>
                                            <input type="text" className="form-control" id="fullname" name="name" value={name} onChange={onChange} placeholder="Enter full name" required />
                                        </div>

                                        <div className="col-xl-12">
                                            <label htmlFor="email" className="form-label text-default">Email</label>
                                            <input type="email" className="form-control" id="email" name="email" value={email} onChange={onChange} placeholder="Enter email" required />
                                        </div>

                                        <div className="col-xl-12">
                                            <label htmlFor="phone" className="form-label text-default">Phone</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="phone" name="phone" value={phone} onChange={onChange} placeholder="Enter phone number" required />
                                            </div>
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
                                                    href="#"
                                                    className="show-password-button text-muted"
                                                    onClick={(e) => { e.preventDefault(); setShowPassword(!showPassword); }}
                                                >
                                                    <i className={showPassword ? "ri-eye-line align-middle" : "ri-eye-off-line align-middle"}></i>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-xl-12">
                                            <label htmlFor="cpassword" className="form-label text-default d-block">Confirm Password</label>
                                            <div className="position-relative">
                                                <input
                                                    type={showConfirmPassword ? "text" : "password"}
                                                    className="form-control"
                                                    id="cpassword"
                                                    name="cpassword"
                                                    value={cpassword}
                                                    onChange={onChange}
                                                    placeholder="Confirm password"
                                                    required
                                                />
                                                <a
                                                    href="#"
                                                    className="show-password-button text-muted"
                                                    onClick={(e) => { e.preventDefault(); setShowConfirmPassword(!showConfirmPassword); }}
                                                >
                                                    <i className={showConfirmPassword ? "ri-eye-line align-middle" : "ri-eye-off-line align-middle"}></i>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-xl-12">
                                            <p className="mb-0 text-muted">By registering you agree to our <a target="_blank" href="https://copytradehome.com/welcome/privacy" className="text-primary">Privacy policy</a></p>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <button className="btn btn-primary w-100 waves-effect waves-light" type="submit" disabled={loading}>
                                            {loading ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                    Registering...
                                                </>
                                            ) : (
                                                'Register'
                                            )}
                                        </button>
                                    </div>
                                </form>

                                <div className="text-center mt-3 fw-medium">
                                    Already have an account? <Link to="/login" className="text-primary">Login</Link>
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

export default Register;
