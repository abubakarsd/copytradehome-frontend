import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AOS from 'aos';
import '../assets/css/crypto.css';

function Crypto() {
    const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

        // Theme observer
        const observer = new MutationObserver(() => {
            const isLight = document.body.classList.contains('is_light');
            setTheme(isLight ? 'light' : 'dark');
        });

        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Header />
            <div className="body header-fixed home-2">
                {/* Banner Section */}
                <section className="banner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-md-12">
                                <div className="banner__content">
                                    <h2 className="title">Trade Cryptocurrency with Confidence</h2>
                                    <p className="fs-20 desc">
                                        Your gateway to the future of finance. Invest in Bitcoin, Ethereum, and thousands of other digital assets with our secure and intuitive platform.
                                    </p>
                                    <Link to="/login" className="btn-action"><span>Start Trading Crypto</span></Link>

                                    <div className="crypto-tags mt-4">
                                        <span className="crypto-tag">Bitcoin</span>
                                        <span className="crypto-tag">Ethereum</span>
                                        <span className="crypto-tag">Altcoins</span>
                                        <span className="crypto-tag">DeFi</span>
                                        <span className="crypto-tag">NFTs</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <div className="banner__image crypto-illustration">
                                    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        {/* Background circles */}
                                        <circle cx="400" cy="300" r="200" fill="url(#grad1)" opacity="0.1"></circle>
                                        <circle cx="400" cy="300" r="150" fill="url(#grad2)" opacity="0.1"></circle>

                                        {/* Bitcoin symbol */}
                                        <g transform="translate(400, 300)">
                                            <circle cx="0" cy="0" r="80" fill="#F7931A" opacity="0.2"></circle>
                                            <circle cx="0" cy="0" r="70" fill="#F7931A"></circle>
                                            <path d="M-20,-40 L-20,40 M20,-40 L20,40" stroke="#fff" strokeWidth="8" strokeLinecap="round"></path>
                                            <path d="M-25,-10 C-25,-30 -10,-35 10,-35 C30,-35 35,-25 35,-15 C35,-5 30,0 15,0 L-25,0 M-25,0 C-25,0 -10,0 15,0 C35,0 40,5 40,15 C40,25 35,35 10,35 C-10,35 -25,30 -25,10" fill="#fff"></path>
                                        </g>

                                        {/* Ethereum symbol */}
                                        <g transform="translate(200, 200)">
                                            <circle cx="0" cy="0" r="40" fill="#627EEA" opacity="0.2"></circle>
                                            <circle cx="0" cy="0" r="35" fill="#627EEA"></circle>
                                            <path d="M0,-20 L-12,0 L0,8 L12,0 Z" fill="#fff" opacity="0.6"></path>
                                            <path d="M0,8 L-12,0 L0,20 L12,0 Z" fill="#fff"></path>
                                        </g>

                                        {/* Floating coins */}
                                        <g transform="translate(600, 400)">
                                            <circle cx="0" cy="0" r="30" fill="#d96d20" opacity="0.3"></circle>
                                            <circle cx="0" cy="0" r="25" fill="#d96d20"></circle>
                                        </g>

                                        <g transform="translate(150, 450)">
                                            <circle cx="0" cy="0" r="25" fill="#58BD7D" opacity="0.3"></circle>
                                            <circle cx="0" cy="0" r="20" fill="#58BD7D"></circle>
                                        </g>

                                        <g transform="translate(650, 150)">
                                            <circle cx="0" cy="0" r="35" fill="#9333EA" opacity="0.3"></circle>
                                            <circle cx="0" cy="0" r="30" fill="#9333EA"></circle>
                                        </g>

                                        {/* Gradients */}
                                        <defs>
                                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" style={{ stopColor: '#d96d20', stopOpacity: 1 }}></stop>
                                                <stop offset="100%" style={{ stopColor: '#9333EA', stopOpacity: 1 }}></stop>
                                            </linearGradient>
                                            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" style={{ stopColor: '#58BD7D', stopOpacity: 1 }}></stop>
                                                <stop offset="100%" style={{ stopColor: '#d96d20', stopOpacity: 1 }}></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Banner Section */}

                {/* Stats Section */}
                <section className="crypto-stats" data-aos="fade-up" data-aos-duration="1000">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="stat-box">
                                    <div className="stat-icon">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="10" stroke="#d96d20" strokeWidth="2"></circle>
                                            <path d="M12 6V12L16 14" stroke="#d96d20" strokeWidth="2" strokeLinecap="round"></path>
                                        </svg>
                                    </div>
                                    <h3 className="stat-value">24/7</h3>
                                    <p className="stat-label">Trading Available</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="stat-box">
                                    <div className="stat-icon green">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#58BD7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M2 17L12 22L22 17" stroke="#58BD7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M2 12L12 17L22 12" stroke="#58BD7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h3 className="stat-value">500+</h3>
                                    <p className="stat-label">Cryptocurrencies</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="stat-box">
                                    <div className="stat-icon">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#d96d20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h3 className="stat-value">Bank-Level</h3>
                                    <p className="stat-label">Security</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="stat-box">
                                    <div className="stat-icon green">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="#58BD7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M17 6H23V12" stroke="#58BD7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h3 className="stat-value">Instant</h3>
                                    <p className="stat-label">Execution</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Stats Section */}

                {/* Features Section */}
                <section className="coin-list">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="block-text center">
                                    <h3 className="heading">Why Trade Crypto with Us?</h3>
                                    <p className="fs-20 desc">
                                        Experience the future of finance with our cutting-edge cryptocurrency trading platform designed for both beginners and professionals.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800">
                                    <div className="service-icon">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2"></rect>
                                            <path d="M7 12L10 15L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">Advanced Security</h5>
                                    <p className="service-text">
                                        Your assets are protected with military-grade encryption, cold storage, and multi-signature wallets.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                                    <div className="service-icon green">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">Lightning Fast</h5>
                                    <p className="service-text">
                                        Execute trades in milliseconds with our high-performance trading engine and instant order execution.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                    <div className="service-icon blue">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"></circle>
                                            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">24/7 Trading</h5>
                                    <p className="service-text">
                                        Trade anytime, anywhere. The crypto market never sleeps, and neither do we with round-the-clock support.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                                    <div className="service-icon">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" strokeWidth="2"></path>
                                            <path d="M3 10H21" stroke="currentColor" strokeWidth="2"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">Low Fees</h5>
                                    <p className="service-text">
                                        Enjoy competitive trading fees and transparent pricing with no hidden charges or surprise costs.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                    <div className="service-icon green">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">Advanced Analytics</h5>
                                    <p className="service-text">
                                        Make informed decisions with professional charting tools, real-time data, and comprehensive market analysis.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                                    <div className="service-icon blue">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">Diverse Portfolio</h5>
                                    <p className="service-text">
                                        Access 500+ cryptocurrencies including Bitcoin, Ethereum, and emerging altcoins all in one platform.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Features Section */}

                {/* How It Works Section */}
                <section className="work">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="block-text center">
                                    <h3 className="heading">How Cryptocurrency Trading Works</h3>
                                    <p className="fs-20 desc">
                                        Cryptocurrencies are decentralized digital assets built on blockchain technology, offering transparency, security, and borderless transactions.
                                    </p>
                                </div>

                                <div className="work__main">
                                    <div className="work-box" data-aos="fade-up" data-aos-duration="800">
                                        <div className="image">
                                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="40" cy="40" r="38" fill="#d96d20" opacity="0.1"></circle>
                                                <path d="M40 20C29 20 20 29 20 40C20 51 29 60 40 60C51 60 60 51 60 40C60 29 51 20 40 20ZM40 55C31.72 55 25 48.28 25 40C25 31.72 31.72 25 40 25C48.28 25 55 31.72 55 40C55 48.28 48.28 55 40 55Z" fill="#d96d20"></path>
                                                <path d="M45 35H35V45H45V35Z" fill="#d96d20"></path>
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <p className="step">Step 1</p>
                                            <Link to="#" className="title">Create Your Account</Link>
                                            <p className="text">
                                                Sign up in minutes with just your email. Complete our simple verification process to ensure your account security.
                                            </p>
                                        </div>
                                        <img className="line" src="/assets/images/connect-line.png" alt="" />
                                    </div>
                                    <div className="work-box" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                        <div className="image">
                                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="40" cy="40" r="38" fill="#58BD7D" opacity="0.1"></circle>
                                                <rect x="25" y="30" width="30" height="25" rx="2" stroke="#58BD7D" strokeWidth="3" fill="none"></rect>
                                                <path d="M30 35H50" stroke="#58BD7D" strokeWidth="3"></path>
                                                <circle cx="40" cy="42" r="3" fill="#58BD7D"></circle>
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <p className="step">Step 2</p>
                                            <Link to="#" className="title">Fund Your Wallet</Link>
                                            <p className="text">
                                                Deposit funds using bank transfer, credit card, or other cryptocurrencies. Your funds are secured in cold storage.
                                            </p>
                                        </div>
                                        <img className="line" src="/assets/images/connect-line.png" alt="" />
                                    </div>
                                    <div className="work-box" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                        <div className="image">
                                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="40" cy="40" r="38" fill="#9333EA" opacity="0.1"></circle>
                                                <path d="M25 50L35 35L45 45L55 25" stroke="#9333EA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M50 25H55V30" stroke="#9333EA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <p className="step">Step 3</p>
                                            <Link to="#" className="title">Start Trading</Link>
                                            <p className="text">
                                                Choose from 500+ cryptocurrencies and start trading. Use our advanced tools for market analysis and trading strategies.
                                            </p>
                                        </div>
                                        <img className="line" src="/assets/images/connect-line.png" alt="" />
                                    </div>
                                    <div className="work-box" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                                        <div className="image">
                                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="40" cy="40" r="38" fill="#F59E0B" opacity="0.1"></circle>
                                                <path d="M40 25V40L50 45" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <circle cx="40" cy="40" r="15" stroke="#F59E0B" strokeWidth="3" fill="none"></circle>
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <p className="step">Step 4</p>
                                            <Link to="#" className="title">Track & Withdraw</Link>
                                            <p className="text">
                                                Monitor your portfolio performance in real-time. Withdraw your profits anytime to your bank or crypto wallet.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End How It Works Section */}

                {/* Understanding Cryptocurrency Markets Section */}
                <section className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-md-12">
                                <div className="about_image">
                                    <div className="crypto-cards">
                                        <div className="crypto-card" data-aos="fade-right" data-aos-delay="0">
                                            <div className="crypto-card-icon" style={{ background: 'rgba(247, 147, 26, 0.1)' }}>
                                                <svg width="40" height="40" viewBox="0 0 24 24" fill="#F7931A">
                                                    <circle cx="12" cy="12" r="12"></circle>
                                                    <path d="M11.5 8.5V7h1v1.5h.5v-1.5h1v1.5c1.1 0 2 .9 2 2 0 .74-.4 1.38-1 1.73.6.35 1 .99 1 1.73 0 1.1-.9 2-2 2v1.5h-1v-1.5h-.5v1.5h-1v-1.5h-2v-1h1v-5h-1v-1h2zm1 1.5v2h1.5c.55 0 1-.45 1-1s-.45-1-1-1H12.5zm0 3v2H14c.55 0 1-.45 1-1s-.45-1-1-1h-1.5z" fill="#fff"></path>
                                                </svg>
                                            </div>
                                            <div className="crypto-card-info">
                                                <h6>Bitcoin</h6>
                                                <p>BTC</p>
                                            </div>
                                        </div>

                                        <div className="crypto-card" data-aos="fade-right" data-aos-delay="100">
                                            <div className="crypto-card-icon" style={{ background: 'rgba(98, 126, 234, 0.1)' }}>
                                                <svg width="40" height="40" viewBox="0 0 24 24" fill="#627EEA">
                                                    <circle cx="12" cy="12" r="12"></circle>
                                                    <path d="M12 4L7 12L12 15L17 12L12 4Z" fill="#fff" opacity="0.6"></path>
                                                    <path d="M12 15L7 12L12 20L17 12L12 15Z" fill="#fff"></path>
                                                </svg>
                                            </div>
                                            <div className="crypto-card-info">
                                                <h6>Ethereum</h6>
                                                <p>ETH</p>
                                            </div>
                                        </div>

                                        <div className="crypto-card" data-aos="fade-right" data-aos-delay="200">
                                            <div className="crypto-card-icon" style={{ background: 'rgba(0, 182, 240, 0.1)' }}>
                                                <svg width="40" height="40" viewBox="0 0 24 24" fill="#00B6F0">
                                                    <circle cx="12" cy="12" r="12"></circle>
                                                </svg>
                                            </div>
                                            <div className="crypto-card-info">
                                                <h6>Cardano</h6>
                                                <p>ADA</p>
                                            </div>
                                        </div>

                                        <div className="crypto-card" data-aos="fade-right" data-aos-delay="300">
                                            <div className="crypto-card-icon" style={{ background: 'rgba(147, 51, 234, 0.1)' }}>
                                                <svg width="40" height="40" viewBox="0 0 24 24" fill="#9333EA">
                                                    <circle cx="12" cy="12" r="12"></circle>
                                                </svg>
                                            </div>
                                            <div className="crypto-card-info">
                                                <h6>Polygon</h6>
                                                <p>MATIC</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <div className="about__content" data-aos="fade-up" data-aos-duration="1000">
                                    <h3 className="heading">Understanding Cryptocurrency Markets</h3>
                                    <p className="fs-20 decs">
                                        Growing incredibly in popularity in recent years, cryptocurrencies have become the go-to investment option for many traders and investors worldwide.
                                    </p>
                                    <ul className="list">
                                        <li>
                                            <div className="title-wrapper">
                                                <span className="icon-check"></span>
                                                <h6 className="title">Decentralized Networks</h6>
                                            </div>
                                            <p className="text">
                                                Cryptocurrencies operate on decentralized networks using blockchain technology, eliminating the need for central authorities and intermediaries.
                                            </p>
                                        </li>
                                        <li>
                                            <div className="title-wrapper">
                                                <span className="icon-check"></span>
                                                <h6 className="title">Blockchain Technology</h6>
                                            </div>
                                            <p className="text">
                                                Transactions are verified and recorded on an immutable blockchain ledger, ensuring transparency, security, and permanent record-keeping.
                                            </p>
                                        </li>
                                        <li>
                                            <div className="title-wrapper">
                                                <span className="icon-check"></span>
                                                <h6 className="title">Global Accessibility</h6>
                                            </div>
                                            <p className="text">
                                                Trade cryptocurrency 24/7 from anywhere in the world. The crypto market never closes, offering unparalleled flexibility and opportunities.
                                            </p>
                                        </li>
                                    </ul>
                                    <Link to="/login" className="btn-action">View Investment Plans</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Understanding Cryptocurrency Markets Section */}

                {/* Live Market Data Section */}
                <section className="coin-list" style={{ background: 'var(--card-bg)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="block-text center">
                                    <h3 className="heading">Live Market Data</h3>
                                    <p className="fs-20 desc">
                                        Stay updated with real-time cryptocurrency prices and market movements.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5 justify-content-center">
                            <div className="col-lg-10">
                                {/* TradingView Widget */}
                                <div className="tradingview-widget-container" style={{ width: '100%', height: '490px' }}>
                                    <iframe
                                        allowTransparency="true"
                                        frameBorder="0"
                                        src={`https://www.tradingview-widget.com/embed-widget/symbol-overview/?locale=en#%7B%22symbols%22%3A%5B%5B%22Apple%22%2C%22AAPL%7C1D%22%5D%2C%5B%22Google%22%2C%22GOOGL%7C1D%22%5D%2C%5B%22Microsoft%22%2C%22MSFT%7C1D%22%5D%2C%5B%22Amazon%22%2C%22AMZN%7C1D%22%5D%2C%5B%22Tesla%22%2C%22TSLA%7C1D%22%5D%2C%5B%22Meta%22%2C%22META%7C1D%22%5D%5D%2C%22chartOnly%22%3Afalse%2C%22width%22%3A%22100%25%22%2C%22height%22%3A500%2C%22colorTheme%22%3A%22${theme}%22%2C%22gridLineColor%22%3A%22rgba(42%2C%2046%2C%2057%2C%200)%22%2C%22fontColor%22%3A%22#787b86%22%2C%22isTransparent%22%3Atrue%2C%22showFloatingTooltip%22%3Atrue%2C%22scalePosition%22%3A%22no%22%2C%22scaleMode%22%3A%22normal%22%2C%22fontFamily%22%3A%22Trebuchet%20MS%2C%20Roboto%2C%20Ubuntu%2C%20sans-serif%22%2C%22noTimeScale%22%3Afalse%2C%22valuesOnly%22%3Afalse%2C%22chartType%22%3A%22area%22%2C%22lineColor%22%3A%22#2962ff%22%2C%22bottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22topColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.3)%22%2C%22lineWidth%22%3A2%2C%22utm_source%22%3A%22copytradehome.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22symbol-overview%22%7D`}
                                        title="crypto mkt-screener TradingView widget"
                                        lang="en"
                                        style={{ userSelect: 'none', boxSizing: 'border-box', display: 'block', height: '100%', width: '100%' }}
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Live Market Data Section */}

                {/* CTA Section */}
                <section className="section-sale">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="block-text">
                                    <h4 className="heading">Start Your Crypto Journey Today</h4>
                                    <p className="desc">
                                        Join millions of traders worldwide and start investing in the future of finance with our secure and intuitive platform.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="button">
                                    <Link to="/register" className="btn-action">Create Free Account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End CTA Section */}
            </div>
            <Footer />
        </>
    );
}

export default Crypto;
