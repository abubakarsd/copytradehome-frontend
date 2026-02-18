import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [mobileActive, setMobileActive] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);

    useEffect(() => {
        // Theme initialization
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light' || !savedTheme) {
            document.body.classList.add('is_light');
            document.body.classList.remove('is_dark');
            document.documentElement.setAttribute('data-theme-mode', 'light');
        } else {
            document.body.classList.add('is_dark');
            document.body.classList.remove('is_light');
            document.documentElement.setAttribute('data-theme-mode', 'dark');
        }

        // Scroll listener
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const switchTheme = () => {
        if (document.body.classList.contains('is_light')) {
            document.body.classList.remove('is_light');
            document.body.classList.add('is_dark');
            document.documentElement.setAttribute('data-theme-mode', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('is_dark');
            document.body.classList.add('is_light');
            document.documentElement.setAttribute('data-theme-mode', 'light');
            localStorage.setItem('theme', 'light');
        }
    };

    const toggleMobileMenu = () => {
        setMobileActive(!mobileActive);
    };

    const toggleDropdown = (e) => {
        if (window.innerWidth < 992) {
            e.preventDefault();
            setOpenDropdown(!openDropdown);
        }
    };

    return (
        <header id="header_main" className={`header ${isFixed ? 'is-fixed' : ''}`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="header__body d-flex justify-content-between">
                            <div className="header__left">
                                <div className="logo">
                                    <Link className="light" to="/">
                                        <img id="site-logo" src="/assets/images/copytradehome-logo-orange.png" alt="CopyTradeHome" height="40" />
                                    </Link>
                                    <Link className="dark" to="/">
                                        <img src="/assets/images/copytradehome-logo-orange.png" alt="CopyTradeHome" height="40" />
                                    </Link>
                                </div>
                                <div className={`left__main ${mobileActive ? 'active' : ''}`}>
                                    <nav id="main-nav" className="main-nav">
                                        <ul id="menu-primary-menu" className="menu">
                                            <li className="menu-item">
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li className="menu-item">
                                                <Link to="/about">About Us</Link>
                                            </li>
                                            <li className={`menu-item-has-children ${openDropdown ? 'open' : ''}`}>
                                                <a href="#" onClick={toggleDropdown}>Trading</a>
                                                <ul className="sub-menu">
                                                    <li className="menu-item">
                                                        <Link to="/copy-trading">Copy Trading</Link>
                                                    </li>
                                                    <li className="menu-item">
                                                        <Link to="/crypto">Cryptocurrency</Link>
                                                    </li>
                                                    <li className="menu-item">
                                                        <Link to="/gold">Precious Metals</Link>
                                                    </li>
                                                    <li className="menu-item">
                                                        <Link to="/stocks">Stock Options</Link>
                                                    </li>
                                                    <li className="menu-item">
                                                        <Link to="/green-energy">Green Energy</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item">
                                                <Link to="/how-it-works">How it Works</Link>
                                            </li>
                                            <li className="menu-item">
                                                <Link to="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="group-button">
                                        <Link className="btn-action-outline style-2" to="/login">
                                            <span className="effect">LOG IN</span>
                                        </Link>
                                        <Link className="btn-action" to="/register">
                                            <span>Get Started</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="header__right">
                                <div className="mode-switcher">
                                    <a className="sun" href="#" onClick={(e) => { e.preventDefault(); switchTheme(); }}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.99993 11.182C9.7572 11.182 11.1818 9.75745 11.1818 8.00018C11.1818 6.24291 9.7572 4.81836 7.99993 4.81836C6.24266 4.81836 4.81812 6.24291 4.81812 8.00018C4.81812 9.75745 6.24266 11.182 7.99993 11.182Z" stroke="#23262F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M8 1V2.27273" stroke="#23262F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M8 13.7271V14.9998" stroke="#23262F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M3.04956 3.04932L3.9532 3.95295" stroke="#23262F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M12.0469 12.0469L12.9505 12.9505" stroke="#23262F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M1 8H2.27273" stroke="#23262F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M13.7273 8H15" stroke="#23262F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M3.04956 12.9505L3.9532 12.0469" stroke="#23262F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M12.0469 3.95295L12.9505 3.04932" stroke="#23262F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </a>
                                    <a href="#" className="moon" onClick={(e) => { e.preventDefault(); switchTheme(); }}>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.0089 8.97241C12.7855 9.64616 12.4491 10.2807 12.0107 10.8477C11.277 11.7966 10.2883 12.5169 9.1602 12.9244C8.03209 13.3319 6.81126 13.4097 5.64056 13.1486C4.46987 12.8876 3.39772 12.2986 2.54959 11.4504C1.70145 10.6023 1.1124 9.53013 0.851363 8.35944C0.590325 7.18874 0.668097 5.96791 1.07558 4.8398C1.48306 3.71169 2.2034 2.72296 3.1523 1.9893C3.71928 1.55094 4.35384 1.21447 5.02759 0.991088C4.69163 1.84583 4.54862 2.77147 4.61793 3.7009C4.72758 5.17128 5.36134 6.55346 6.40394 7.59606C7.44654 8.63866 8.82873 9.27242 10.2991 9.38207C11.2285 9.45138 12.1542 9.30837 13.0089 8.97241Z" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className={`mobile-button ${mobileActive ? 'active' : ''}`} onClick={toggleMobileMenu}>
                                    <span></span>
                                </div>
                                <div className="wallet">
                                    <Link to="/login">Sign In</Link>
                                </div>
                                <Link to="/register" className="btn-action">
                                    <span>Get Started</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
