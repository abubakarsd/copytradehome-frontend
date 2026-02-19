import React, { useState } from 'react';

const ProfileNotifications = () => {
    const [notificationSettings, setNotificationSettings] = useState({
        email_crypto: true,
        email_stocks: true,
        email_copy_trading: true,
        email_signals: true
    });

    const handleToggle = (setting) => {
        setNotificationSettings(prev => ({
            ...prev,
            [setting]: !prev[setting]
        }));
        console.log(`Toggled ${setting}:`, !notificationSettings[setting]);
        // Add API call logic here
    };

    return (
        <div className="container-fluid page-container main-body-container">
            {/* Start::page-header */}
            <div className="page-header-breadcrumb mb-3">
                <div className="d-flex align-center justify-content-between flex-wrap">
                    <div>
                        <h1 className="page-title fw-medium fs-18 mb-0">Notification Settings</h1>
                        <p className="mb-0 text-muted fs-13">
                            Configure email notifications for your trading activities.
                        </p>
                    </div>
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="#" onClick={(e) => e.preventDefault()}>Pages</a></li>
                        <li className="breadcrumb-item"><a href="#" onClick={(e) => e.preventDefault()}>Profile</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Notifications</li>
                    </ol>
                </div>
            </div>
            {/* End::page-header */}

            <div className="row">
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">Email Notifications</div>
                        </div>
                        <div className="card-body p-4">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="row gy-4">
                                    <div className="col-xl-12">
                                        <div className="d-flex align-items-top justify-content-between">
                                            <div className="mail-notification-settings">
                                                <p className="fs-14 mb-1 fw-medium">Trading Crypto</p>
                                                <p className="fs-12 mb-0 text-muted">Receive email alerts for your crypto trades and positions.</p>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" role="switch" id="email_crypto" checked={notificationSettings.email_crypto} onChange={() => handleToggle('email_crypto')} />
                                                <label className="form-check-label" htmlFor="email_crypto">
                                                    Enabled
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-12">
                                        <div className="d-flex align-items-top justify-content-between">
                                            <div className="mail-notification-settings">
                                                <p className="fs-14 mb-1 fw-medium">Trading Stocks</p>
                                                <p className="fs-12 mb-0 text-muted">Receive email alerts for your stock trades and positions.</p>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" role="switch" id="email_stocks" checked={notificationSettings.email_stocks} onChange={() => handleToggle('email_stocks')} />
                                                <label className="form-check-label" htmlFor="email_stocks">
                                                    Enabled
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-12">
                                        <div className="d-flex align-items-top justify-content-between">
                                            <div className="mail-notification-settings">
                                                <p className="fs-14 mb-1 fw-medium">Copy Trading</p>
                                                <p className="fs-12 mb-0 text-muted">Get emails when your copy trading strategies execute or update.</p>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" role="switch" id="email_copy_trading" checked={notificationSettings.email_copy_trading} onChange={() => handleToggle('email_copy_trading')} />
                                                <label className="form-check-label" htmlFor="email_copy_trading">
                                                    Enabled
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-12">
                                        <div className="d-flex align-items-top justify-content-between">
                                            <div className="mail-notification-settings">
                                                <p className="fs-14 mb-1 fw-medium">Signals</p>
                                                <p className="fs-12 mb-0 text-muted">Be notified by email when new signals are available or updated.</p>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" role="switch" id="email_signals" checked={notificationSettings.email_signals} onChange={() => handleToggle('email_signals')} />
                                                <label className="form-check-label" htmlFor="email_signals">
                                                    Enabled
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer border-top-0 px-0 mt-3 bg-transparent">
                                    <button type="submit" className="btn btn-primary float-end">
                                        Save Preferences
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileNotifications;
