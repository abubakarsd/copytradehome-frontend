import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAdminAuth } from '../../context/AdminAuthContext';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAdminAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simple mock validation for now. 
        // In production, this calls the backend.
        try {
            const result = await login(email, password);
            if (result.success) {
                toast.success('Welcome back, Master Admin');
                navigate('/master-key');
            } else {
                toast.error(result.error || 'Invalid Master Key credentials');
            }
        } catch (error) {
            toast.error('Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="authentication-background">
            <Helmet>
                <title>Master Key Access | Invest Platform</title>
            </Helmet>
            <div className="container-lg">
                <div className="row justify-content-center align-items-center authentication authentication-basic h-100">
                    <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-6 col-sm-8 col-12">
                        <div className="card custom-card">
                            <div className="card-body p-5">
                                <div className="mb-3 d-flex justify-content-center">
                                    <h2 className="fw-bold fs-24 mb-2">Master Key Access</h2>
                                </div>
                                <p className="h5 fw-semibold mb-2 text-center">Sign In</p>
                                <p className="mb-4 text-muted op-7 fw-normal text-center">Enter your credentials to access the command center.</p>

                                <form onSubmit={handleSubmit}>
                                    <div className="row gy-3">
                                        <div className="col-xl-12">
                                            <label htmlFor="admin-email" className="form-label text-default">Email</label>
                                            <input
                                                type="email"
                                                className="form-control form-control-lg"
                                                id="admin-email"
                                                placeholder="admin@domain.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="col-xl-12 mb-2">
                                            <label htmlFor="admin-password" className="form-label text-default d-block">Password</label>
                                            <input
                                                type="password"
                                                className="form-control form-control-lg"
                                                id="admin-password"
                                                placeholder="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="col-xl-12 d-grid mt-2">
                                            <button type="submit" className="btn btn-lg btn-primary" disabled={loading}>
                                                {loading ? 'Verifying...' : 'Access Dashboard'}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
