import React, { useState } from 'react';

const ProfilePassword = () => {
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);

    const handlePasswordChange = (e) => {
        setPasswordData({
            ...passwordData,
            [e.target.name]: e.target.value
        });
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        console.log('Password change submitted:', passwordData);
        // Add API call logic here
    };

    const handleTwoFactorToggle = () => {
        setIsTwoFactorEnabled(!isTwoFactorEnabled);
        console.log('2FA toggled:', !isTwoFactorEnabled);
        // Add API call logic here
    };

    return (
        <div className="container-fluid page-container main-body-container">
            {/* Start::page-header */}
            <div className="page-header-breadcrumb mb-3">
                <div className="d-flex align-center justify-content-between flex-wrap">
                    <div>
                        <h1 className="page-title fw-medium fs-18 mb-0">Password Reset</h1>
                        <p className="mb-0 text-muted fs-13">
                            Manage your password and security settings.
                        </p>
                    </div>
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="javascript:void(0);">Pages</a></li>
                        <li className="breadcrumb-item"><a href="javascript:void(0);">Profile</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Password Reset</li>
                    </ol>
                </div>
            </div>
            {/* End::page-header */}

            <div className="row">
                <div className="col-xl-6">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">Reset Password</div>
                        </div>
                        <div className="card-body p-4">
                            <form onSubmit={handlePasswordSubmit}>
                                <div className="row gy-3">
                                    <div className="col-xl-12">
                                        <label htmlFor="current-password" className="form-label">Current Password :</label>
                                        <input type="password" className="form-control" id="current-password" name="currentPassword" value={passwordData.currentPassword} onChange={handlePasswordChange} placeholder="Current Password" />
                                    </div>
                                    <div className="col-xl-12">
                                        <label htmlFor="new-password" className="form-label">New Password :</label>
                                        <input type="password" className="form-control" id="new-password" name="newPassword" value={passwordData.newPassword} onChange={handlePasswordChange} placeholder="New Password" />
                                    </div>
                                    <div className="col-xl-12">
                                        <label htmlFor="confirm-password" className="form-label">Confirm Password :</label>
                                        <input type="password" className="form-control" id="confirm-password" name="confirmPassword" value={passwordData.confirmPassword} onChange={handlePasswordChange} placeholder="Confirm Password" />
                                    </div>
                                    <div className="col-xl-12">
                                        <button type="submit" className="btn btn-primary d-grid w-100">Click to change password</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">Two Factor Authentication</div>
                        </div>
                        <div className="card-body p-4">
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <p className="fw-medium mb-1">Enable 2FA</p>
                                    <p className="fs-12 text-muted mb-0">Secure your account with 2FA security.</p>
                                </div>
                                <div className="form-check form-switch mb-0">
                                    <input className="form-check-input" type="checkbox" role="switch" id="two-factor-switch" checked={isTwoFactorEnabled} onChange={handleTwoFactorToggle} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card custom-card mt-4">
                        <div className="card-header">
                            <div className="card-title">Authentication App</div>
                        </div>
                        <div className="card-body p-4">
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <p className="fw-medium mb-1">Google Authenticator</p>
                                    <p className="fs-12 text-muted mb-0">Use Google Authenticator to scan the QR code.</p>
                                </div>
                                <button className="btn btn-sm btn-primary-light">Setup</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePassword;
