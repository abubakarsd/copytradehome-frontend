import React, { useState, useEffect } from 'react';
import { useAuth } from "../context/AuthContext";
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
    const { user, updateProfile } = useAuth();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        phoneCountry: '+1',
        referralCode: 'REF' + Math.floor(Math.random() * 100000),
        address: '',
        country: '',
        city: '',
        zipCode: '',
        gender: 'Male'
    });

    useEffect(() => {
        if (user) {
            setFormData(prev => ({
                ...prev,
                name: user.profile?.fullname || '',
                email: user.email || '',
                phone: user.profile?.phone || '',
                phoneCountry: user.profile?.phoneCode || '+1',
                address: user.profile?.address || '',
                country: user.profile?.country || '',
                city: user.profile?.city || '',
                zipCode: user.profile?.zipCode || '',
                gender: user.profile?.gender || 'Male',
                referralCode: user._id ? user._id.substring(0, 8).toUpperCase() : 'REF12345'
            }));
        }
    }, [user]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCopyReferral = () => {
        navigator.clipboard.writeText(`https://copytradehome.com/referal/me/${formData.referralCode}`);
        // In a real app, you'd show a toast here
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await updateProfile(formData);
        } catch (err) {
            // Error handled in context
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid page-container main-body-container">
            <Helmet>
                <title>My Account | CopyTradeHome</title>
                <meta property="og:title" content="My Account | CopyTradeHome" />
                <meta property="og:description" content="Update your personal details and referral code." />
                <meta property="og:image" content="/assets/images/banner-02.png" />
                <meta name="twitter:title" content="My Account | CopyTradeHome" />
                <meta name="twitter:description" content="Update your personal details and referral code." />
                <meta name="twitter:image" content="/assets/images/banner-02.png" />
            </Helmet>
            {/* Start::page-header */}
            <div className="page-header-breadcrumb mb-3">
                <div className="d-flex align-center justify-content-between flex-wrap">
                    <div>
                        <h1 className="page-title fw-medium fs-18 mb-0">My Account</h1>
                        <p className="mb-0 text-muted fs-13">
                            Update your personal details and referral code.
                        </p>
                    </div>
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="#" onClick={(e) => e.preventDefault()}>Pages</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Profile Settings</li>
                    </ol>
                </div>
            </div>
            {/* End::page-header */}

            <div className="row">
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">Account</div>
                        </div>
                        <div className="card-body p-4">
                            <form onSubmit={handleSubmit} id="profile-form" encType="multipart/form-data">
                                <div className="row gy-3">
                                    <div className="col-xl-12">
                                        <div className="d-flex align-items-start flex-wrap gap-3">
                                            <div>
                                                <span className="avatar avatar-xxl">
                                                    <img src="/assets/dashboard/images/21.jpg" alt="Profile" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="fw-medium d-block mb-2">Profile Picture</span>
                                                <div className="btn-list mb-1">
                                                    <label className="btn btn-sm btn-primary btn-wave waves-effect waves-light mb-0">
                                                        <i className="ri-upload-2-line me-1"></i>Change Image
                                                        <input type="file" name="profile_image" id="profile-image-input" accept="image/*" hidden />
                                                    </label>
                                                </div>
                                                <span className="d-block fs-12 text-muted">
                                                    Use JPEG, PNG, or GIF. Best size: 200x200 pixels.
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6">
                                        <label htmlFor="profile-user-name" className="form-label">User Name :</label>
                                        <input type="text" className="form-control" id="profile-user-name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Name" />
                                    </div>

                                    <div className="col-xl-6">
                                        <label htmlFor="profile-email" className="form-label">Email :</label>
                                        <input type="email" className="form-control" id="profile-email" value={formData.email} placeholder="Enter Email" readOnly disabled />
                                    </div>

                                    <div className="col-xl-6">
                                        <label htmlFor="profile-phn-no" className="form-label">Phone No :</label>
                                        <div className="input-group">
                                            <span className="input-group-text p-0 border-end-0" style={{ width: '110px' }}>
                                                <select className="form-select border-0 bg-transparent" id="phone_country" name="phoneCountry" value={formData.phoneCountry} onChange={handleChange}>
                                                    <option value="+1">🇺🇸 +1</option>
                                                    <option value="+234">🇳🇬 +234</option>
                                                    <option value="+44">🇬🇧 +44</option>
                                                    {/* Add more countries as needed */}
                                                </select>
                                            </span>
                                            <input type="text" className="form-control border-start-0" id="profile-phn-no" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter Number" />
                                        </div>
                                    </div>

                                    <div className="col-xl-6">
                                        <label htmlFor="profile-ref-code" className="form-label">Referral Code :</label>
                                        <div className="input-group">
                                            <span className="input-group-text">https://copytradehome.com/referal/me/</span>
                                            <input type="text" className="form-control" id="profile-ref-code" readOnly disabled value={formData.referralCode} placeholder="Referral code" />
                                            <button type="button" className="btn btn-outline-secondary" onClick={handleCopyReferral}>
                                                <i className="ti ti-copy"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="col-xl-12">
                                        <label htmlFor="profile-address" className="form-label">Address :</label>
                                        <textarea className="form-control" id="profile-address" name="address" rows="3" value={formData.address} onChange={handleChange} placeholder="Enter Address"></textarea>
                                    </div>

                                    <div className="col-xl-6">
                                        <label htmlFor="profile-country" className="form-label">Country :</label>
                                        <select className="form-control" id="profile-country" name="country" value={formData.country} onChange={handleChange}>
                                            <option value="" disabled>Choose Country</option>
                                            <option value="Aruba">Aruba</option>
                                            <option value="United States">United States</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            {/* Add more countries as needed */}
                                        </select>
                                    </div>

                                    <div className="col-xl-6">
                                        <label htmlFor="profile-gender" className="form-label">Gender :</label>
                                        <select className="form-control" id="profile-gender" name="gender" value={formData.gender} onChange={handleChange}>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary" disabled={loading}>
                                    {loading ? <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> : null}
                                    Save Changes
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
