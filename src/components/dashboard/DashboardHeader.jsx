import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const DashboardHeader = () => {
    const { logout, user } = useAuth();
    return (
        <>
            <header className="app-header sticky sticky-pin" id="header">

                <div className="main-header-container container-fluid">

                    {/* Start::header-content-left */}
                    <div className="header-content-left">

                        {/* Logo */}
                        <div className="header-element">
                            <div className="horizontal-logo">
                                <Link to="/dashboard" className="header-logo">
                                    <img src="/assets/dashboard/images/copytradehome-logo-orange.png" alt="logo" className="desktop-logo" />
                                    <img src="/assets/dashboard/images/copytradehome-logo-orange.png" alt="logo" className="toggle-logo" />
                                    <img src="/assets/dashboard/images/copytradehome-logo-orange.png" alt="logo" className="desktop-dark" />
                                    <img src="/assets/dashboard/images/copytradehome-logo-orange.png" alt="logo" className="toggle-dark" />
                                </Link>
                            </div>
                        </div>

                        {/* Sidebar toggle (for horizontal / doublemenu) */}
                        <div className="header-element mx-lg-0 mx-2">
                            <a aria-label="Hide Sidebar" className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle" data-bs-toggle="sidebar" href="#"><span></span></a>
                        </div>

                        {/* Search (desktop) */}
                        <div className="header-element header-search header-search-content d-md-block d-none">
                            <div className="autoComplete_wrapper" role="combobox" aria-owns="autoComplete_list_1" aria-haspopup="true" aria-expanded="false"><input type="text" className="header-search-bar form-control bg-white" id="header-search" placeholder="Search" spellCheck="false" autoComplete="off" autoCapitalize="off" aria-controls="autoComplete_list_1" aria-autocomplete="both" /><ul id="autoComplete_list_1" role="listbox" hidden=""></ul></div>
                            <a href="#" className="header-search-icon border-0">
                                <i className="bi bi-search fs-12 mb-1"></i>
                            </a>
                        </div>

                    </div>
                    {/* End::header-content-left */}

                    {/* Start::header-content-right */}
                    <ul className="header-content-right">

                        {/* Responsive search (mobile) */}
                        <li className="header-element d-md-none d-block">
                            <a href="#" className="header-link" data-bs-toggle="modal" data-bs-target="#header-responsive-search">
                                <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" viewBox="0 0 256 256">
                                    <rect width="256" height="256" fill="none"></rect>
                                    <circle cx="112" cy="112" r="80" opacity="0.2"></circle>
                                    <circle cx="112" cy="112" r="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                                    <line x1="168.57" y1="168.57" x2="224" y2="224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                </svg>
                            </a>
                        </li>

                        {/* Language selector */}
                        <li className="header-element country-selector dropdown d-sm-block d-none">
                            <a href="#" className="header-link dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" viewBox="0 0 256 256">
                                    <rect width="256" height="256" fill="none"></rect>
                                    <path d="M215,168.71a96.42,96.42,0,0,1-30.54,37l-9.36-9.37a8,8,0,0,0-3.63-2.09L150,188.59a8,8,0,0,1-5.88-8.9l2.38-16.2a8,8,0,0,1,4.85-6.22l30.45-12.66a8,8,0,0,1,8.47,1.49Z" opacity="0.2"></path>
                                    <path d="M184,74a8,8,0,0,1-1.94,5.22L159.89,105a8,8,0,0,1-5,2.71l-31.46,4.26a8.06,8.06,0,0,1-5.77-1.45l-19.81-13a8,8,0,0,0-11.34,2l-20.94,31.3a8.06,8.06,0,0,0-1.35,4.41L64,171.49a8,8,0,0,1-3.61,6.64l-9.92,6.52A96,96,0,0,1,184,50Z" opacity="0.2"></path>
                                    <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                                    <path d="M184.42,205.68l-9.36-9.37a8,8,0,0,0-3.63-2.09L150,188.59a8,8,0,0,1-5.88-8.9l2.38-16.2a8,8,0,0,1,4.85-6.22l30.45-12.66a8,8,0,0,1,8.47,1.49L215,168.71" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                                    <path d="M50.49,184.65l9.92-6.52A8,8,0,0,0,64,171.49l.21-36.23a8.06,8.06,0,0,1,1.35-4.41l20.94-31.3a8,8,0,0,1,11.34-2l19.81,13a8.06,8.06,0,0,0,5.77,1.45l31.46-4.26a8,8,0,0,0,5-2.71L182.06,79.2A8,8,0,0,0,184,74V50" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                                </svg>
                            </a>
                            <ul className="main-header-dropdown dropdown-menu dropdown-menu-end" style={{}}>
                                <li><a className="dropdown-item d-flex align-items-center" href="#"><span className="avatar avatar-rounded avatar-xs lh-1 me-2"><img src="/assets/dashboard/images/us_flag.jpg" alt="img" /></span>English</a></li>
                                <li><a className="dropdown-item d-flex align-items-center" href="#"><span className="avatar avatar-rounded avatar-xs lh-1 me-2"><img src="/assets/dashboard/images/spain_flag.jpg" alt="img" /></span>Español</a></li>
                            </ul>
                        </li>

                        {/* Theme mode toggle */}
                        <li className="header-element header-theme-mode">
                            <a href="#" className="header-link layout-setting">
                                <span className="light-layout">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" viewBox="0 0 256 256">
                                        <rect width="256" height="256" fill="none"></rect>
                                        <path d="M108.11,28.11A96.09,96.09,0,0,0,227.89,147.89,96,96,0,1,1,108.11,28.11Z" opacity="0.2"></path>
                                        <path d="M108.11,28.11A96.09,96.09,0,0,0,227.89,147.89,96,96,0,1,1,108.11,28.11Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                                    </svg>
                                </span>
                                <span className="dark-layout">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" viewBox="0 0 256 256">
                                        <rect width="256" height="256" fill="none"></rect>
                                        <circle cx="128" cy="128" r="56" opacity="0.2"></circle>
                                        <line x1="128" y1="40" x2="128" y2="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                        <circle cx="128" cy="128" r="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                                        <line x1="64" y1="64" x2="56" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                        <line x1="64" y1="192" x2="56" y2="200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                        <line x1="192" y1="64" x2="200" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                        <line x1="192" y1="192" x2="200" y2="200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                        <line x1="40" y1="128" x2="32" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                        <line x1="128" y1="216" x2="128" y2="224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                        <line x1="216" y1="128" x2="224" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                    </svg>
                                </span>
                            </a>
                        </li>

                        {/* Notifications (static demo items) */}
                        <li className="header-element notifications-dropdown d-xl-block d-none dropdown">
                            <a href="#" className="header-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" viewBox="0 0 256 256">
                                    <rect width="256" height="256" fill="none"></rect>
                                    <path d="M96,192a32,32,0,0,0,64,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                                    <path d="M56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                                </svg>
                                <span className="header-icon-pulse bg-secondary rounded pulse pulse-secondary"></span>
                            </a>
                            <div className="main-header-dropdown dropdown-menu dropdown-menu-end" style={{}}>
                                <div className="p-3 bg-primary text-fixed-white">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="mb-0 fs-16">Notifications</p>
                                        <a href="#" className="badge bg-light text-default border">Clear All</a>
                                    </div>
                                </div>
                                <div className="dropdown-divider"></div>
                                <ul className="list-unstyled mb-0" id="header-notification-scroll" data-simplebar="init"><div className="simplebar-wrapper" style={{ 'margin': '0px' }}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer"></div></div><div className="simplebar-mask"><div className="simplebar-offset" style={{ 'right': '0px', 'bottom': '0px' }}><div className="simplebar-content-wrapper" tabIndex="0" role="region" aria-label="scrollable content" style={{ 'height': 'auto', 'overflow': 'hidden' }}><div className="simplebar-content" style={{ 'padding': '0px' }}>
                                    <li className="dropdown-item position-relative">
                                        <div className="d-flex align-items-start gap-3">
                                            <div className="lh-1">
                                                <span className="avatar avatar-sm avatar-rounded bg-primary-transparent">
                                                    <i className="ri-notification-line fs-16"></i>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="d-block fw-semibold">Welcome</span>
                                                <span className="d-block text-muted fs-12">You are logged in to your dashboard.</span>
                                            </div>
                                        </div>
                                    </li>
                                </div></div></div></div><div className="simplebar-placeholder" style={{ 'width': '0px', 'height': '0px' }}></div></div><div className="simplebar-track simplebar-horizontal" style={{ 'visibility': 'hidden' }}><div className="simplebar-scrollbar" style={{ 'width': '0px', 'display': 'none' }}></div></div><div className="simplebar-track simplebar-vertical" style={{ 'visibility': 'hidden' }}><div className="simplebar-scrollbar" style={{ 'height': '0px', 'display': 'none' }}></div></div></ul>
                            </div>
                        </li>

                        {/* Fullscreen toggle */}
                        <li className="header-element header-fullscreen">
                            <a onClick={(event) => window.openFullscreen()} href="#" className="header-link">
                                <svg xmlns="http://www.w3.org/2000/svg" className="full-screen-open header-link-icon" viewBox="0 0 256 256">
                                    <rect width="256" height="256" fill="none"></rect>
                                    <rect x="48" y="48" width="160" height="160" opacity="0.2"></rect>
                                    <polyline points="168 48 208 48 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                                    <polyline points="88 208 48 208 48 168" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                                    <polyline points="208 168 208 208 168 208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                                    <polyline points="48 88 48 48 88 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="full-screen-close header-link-icon d-none" viewBox="0 0 256 256">
                                    <rect width="256" height="256" fill="none"></rect>
                                    <rect x="32" y="32" width="192" height="192" rx="16" opacity="0.2"></rect>
                                    <polyline points="160 48 208 48 208 96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                                    <line x1="144" y1="112" x2="208" y2="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                    <polyline points="96 208 48 208 48 160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                                    <line x1="112" y1="144" x2="48" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                                </svg>
                            </a>
                        </li>

                        {/* Profile dropdown */}
                        <li className="header-element dropdown">
                            <a href="#" className="header-link dropdown-toggle" id="mainHeaderProfile" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                <div>
                                    <img src="/assets/dashboard/images/21.jpg" alt="img" className="header-link-icon rounded-circle" />
                                </div>
                            </a>
                            <div className="main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end" aria-labelledby="mainHeaderProfile">
                                <div className="p-3 bg-primary text-fixed-white">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="mb-0 fs-16">Profile</p>
                                        <a href="#" className="text-fixed-white"><i className="bx bx-cog"></i></a>
                                    </div>
                                </div>
                                <div className="dropdown-divider"></div>
                                <div className="p-3">
                                    <div className="d-flex align-items-start gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-sm bg-primary-transparent avatar-rounded">
                                                <img src="/assets/dashboard/images/21.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <span className="d-block fw-semibold lh-1">{user?.profile?.fullname || 'User'}</span>
                                            <span className="text-muted fs-12">{user?.email}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown-divider"></div>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <Link className="dropdown-item d-flex align-items-center" to="/dashboard/profile"><i className="bx bx-user-circle me-2 fs-18"></i>View Profile</Link>
                                    </li>
                                    <li>
                                        <a className="dropdown-item d-flex align-items-center" href="#" onClick={(e) => { e.preventDefault(); logout(); }}><i className="bx bx-log-out me-2 fs-18"></i>Log Out</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* Switcher icon */}
                        <li className="header-element">
                            <a href="#" className="header-link switcher-icon" data-bs-toggle="offcanvas" data-bs-target="#switcher-canvas">
                                <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" viewBox="0 0 256 256">
                                    <rect width="256" height="256" fill="none" />
                                    <path d="M207.86,123.18l16.78-21a99.14,99.14,0,0,0-10.07-24.29l-26.7-3a81,81,0,0,0-6.81-6.81l-3-26.71a99.43,99.43,0,0,0-24.3-10l-21,16.77a81.59,81.59,0,0,0-9.64,0l-21-16.78A99.14,99.14,0,0,0,77.91,41.43l-3,26.7a81,81,0,0,0-6.81,6.81l-26.71,3a99.43,99.43,0,0,0-10,24.3l16.77,21a81.59,81.59,0,0,0,0,9.64l-16.78,21a99.14,99.14,0,0,0,10.07,24.29l26.7,3a81,81,0,0,0,6.81,6.81l3,26.71a99.43,99.43,0,0,0,24.3,10l21-16.77a81.59,81.59,0,0,0,9.64,0l21,16.78a99.14,99.14,0,0,0,24.29-10.07l3-26.7a81,81,0,0,0,6.81-6.81l26.71-3a99.43,99.43,0,0,0,10-24.3l-16.77-21A81.59,81.59,0,0,0,207.86,123.18ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" opacity="0.2" />
                                    <circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                    <path d="M41.43,178.09A99.14,99.14,0,0,1,31.36,153.8l16.78-21a81.59,81.59,0,0,1,0-9.64l-16.77-21a99.43,99.43,0,0,1,10.05-24.3l26.71-3a81,81,0,0,1,6.81-6.81l3-26.7A99.14,99.14,0,0,1,102.2,31.36l21,16.78a81.59,81.59,0,0,1,9.64,0l21-16.77a99.43,99.43,0,0,1,24.3,10.05l3,26.71a81,81,0,0,1,6.81,6.81l26.7,3a99.14,99.14,0,0,1,10.07,24.29l-16.78,21a81.59,81.59,0,0,1,0,9.64l16.77,21a99.43,99.43,0,0,1-10,24.3l-26.71,3a81,81,0,0,1-6.81,6.81l-3,26.7a99.14,99.14,0,0,1-24.29,10.07l-21-16.78a81.59,81.59,0,0,1-9.64,0l-21,16.77a99.43,99.43,0,0,1-24.3-10l-3-26.71a81,81,0,0,1-6.81-6.81Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                                </svg>
                            </a>
                        </li>

                    </ul>
                    {/* End::header-content-right */}

                </div>

            </header>
        </>
    );
};

export default DashboardHeader;
