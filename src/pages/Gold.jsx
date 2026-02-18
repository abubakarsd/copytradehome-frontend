import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AOS from 'aos';
import '../assets/css/gold.css';

function Gold() {
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
                                    <h2 className="title">Invest in Precious Metals</h2>
                                    <p className="fs-20 desc">
                                        Secure your wealth with timeless assets. Invest in gold, silver, and platinum - the precious metals that have preserved value for thousands of years.
                                    </p>
                                    <Link to="/login" className="btn-action"><span>Start Investing Today</span></Link>

                                    <div className="crypto-tags mt-4">
                                        <span className="crypto-tag">Gold</span>
                                        <span className="crypto-tag">Silver</span>
                                        <span className="crypto-tag">Platinum</span>
                                        <span className="crypto-tag">Palladium</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <div className="banner__image precious-metals-illustration">
                                    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        {/* Background circles */}
                                        <circle cx="400" cy="300" r="200" fill="url(#goldGrad1)" opacity="0.1"></circle>
                                        <circle cx="400" cy="300" r="150" fill="url(#goldGrad2)" opacity="0.1"></circle>

                                        {/* Gold bars stack */}
                                        <g transform="translate(350, 250)">
                                            <rect x="0" y="60" width="100" height="30" rx="2" fill="#FFD700" opacity="0.9"></rect>
                                            <rect x="2" y="62" width="96" height="6" fill="#FFF4A3" opacity="0.5"></rect>
                                            <rect x="10" y="30" width="100" height="30" rx="2" fill="#FFD700"></rect>
                                            <rect x="12" y="32" width="96" height="6" fill="#FFF4A3" opacity="0.5"></rect>
                                            <rect x="20" y="0" width="100" height="30" rx="2" fill="#FFD700" opacity="0.95"></rect>
                                            <rect x="22" y="2" width="96" height="6" fill="#FFF4A3" opacity="0.5"></rect>
                                        </g>

                                        {/* Silver coins */}
                                        <g transform="translate(200, 350)">
                                            <ellipse cx="0" cy="0" rx="40" ry="8" fill="#C0C0C0" opacity="0.6"></ellipse>
                                            <circle cx="0" cy="-5" r="35" fill="#E8E8E8"></circle>
                                            <circle cx="0" cy="-5" r="28" fill="#C0C0C0" opacity="0.3"></circle>
                                            <path d="M-10,-5 L10,-5 M0,-15 L0,5" stroke="#A8A8A8" strokeWidth="2"></path>
                                        </g>

                                        <g transform="translate(250, 380)">
                                            <ellipse cx="0" cy="0" rx="35" ry="7" fill="#C0C0C0" opacity="0.6"></ellipse>
                                            <circle cx="0" cy="-5" r="30" fill="#E8E8E8"></circle>
                                            <circle cx="0" cy="-5" r="24" fill="#C0C0C0" opacity="0.3"></circle>
                                        </g>

                                        {/* Platinum ring */}
                                        <g transform="translate(600, 200)">
                                            <ellipse cx="0" cy="0" rx="50" ry="12" fill="#E5E4E2"></ellipse>
                                            <ellipse cx="0" cy="0" rx="35" ry="8" fill="#1A1A1A"></ellipse>
                                            <circle cx="0" cy="-30" r="8" fill="#B9F2FF" opacity="0.8"></circle>
                                        </g>

                                        {/* Shield (security symbol) */}
                                        <g transform="translate(150, 180)">
                                            <path d="M0,-40 L30,-30 L30,10 C30,30 0,40 0,40 C0,40 -30,30 -30,10 L-30,-30 Z" fill="#d96d20" opacity="0.2"></path>
                                            <path d="M0,-35 L25,-27 L25,8 C25,25 0,35 0,35 C0,35 -25,25 -25,8 L-25,-27 Z" fill="#d96d20"></path>
                                            <path d="M-8,0 L-2,8 L12,-8" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </g>

                                        {/* Value up arrow */}
                                        <g transform="translate(650, 400)">
                                            <circle cx="0" cy="0" r="35" fill="#58BD7D" opacity="0.2"></circle>
                                            <path d="M0,-15 L0,15 M-10,5 L0,-15 L10,5" stroke="#58BD7D" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </g>

                                        {/* Gradients */}
                                        <defs>
                                            <linearGradient id="goldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }}></stop>
                                                <stop offset="100%" style={{ stopColor: '#FFA500', stopOpacity: 1 }}></stop>
                                            </linearGradient>
                                            <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" style={{ stopColor: '#C0C0C0', stopOpacity: 1 }}></stop>
                                                <stop offset="100%" style={{ stopColor: '#E8E8E8', stopOpacity: 1 }}></stop>
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
                                    <div className="stat-icon gold">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h3 className="stat-value">5000+</h3>
                                    <p className="stat-label">Years of Value</p>
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
                                    <h3 className="stat-value">Inflation</h3>
                                    <p className="stat-label">Hedge Protection</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="stat-box">
                                    <div className="stat-icon gold">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="#FFD700" strokeWidth="2"></path>
                                            <rect x="7" y="10" width="10" height="4" rx="1" fill="#FFD700"></rect>
                                        </svg>
                                    </div>
                                    <h3 className="stat-value">Physical</h3>
                                    <p className="stat-label">Asset Ownership</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="stat-box">
                                    <div className="stat-icon green">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="10" stroke="#58BD7D" strokeWidth="2"></circle>
                                            <path d="M12 6V12L16 14" stroke="#58BD7D" strokeWidth="2" strokeLinecap="round"></path>
                                        </svg>
                                    </div>
                                    <h3 className="stat-value">24/7</h3>
                                    <p className="stat-label">Global Markets</p>
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
                                    <h3 className="heading">Why Invest in Precious Metals?</h3>
                                    <p className="fs-20 desc">
                                        Precious metals have been trusted stores of value for millennia, offering unique benefits for modern investors seeking portfolio diversification and wealth protection.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800">
                                    <div className="service-icon gold">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">Wealth Protection</h5>
                                    <p className="service-text">
                                        Gold and silver historically hedge against inflation and currency devaluation, protecting your wealth during economic uncertainty.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                                    <div className="service-icon green">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">Portfolio Diversification</h5>
                                    <p className="service-text">
                                        Precious metals move independently of stocks and bonds, providing valuable diversification to balance your portfolio.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                    <div className="service-icon gold">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"></circle>
                                            <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">Global Acceptance</h5>
                                    <p className="service-text">
                                        Universally recognized and valued worldwide, precious metals are highly liquid assets that trade 24/7.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                                    <div className="service-icon green">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"></rect>
                                            <path d="M8 12H16M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">Tangible Assets</h5>
                                    <p className="service-text">
                                        Unlike stocks or bonds, you can own physical gold and silver, stored securely in professional depositories.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                    <div className="service-icon gold">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">Long-Term Value</h5>
                                    <p className="service-text">
                                        Precious metals have maintained their purchasing power throughout history, making them excellent long-term investments.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                                    <div className="service-icon green">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"></circle>
                                            <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">Crisis Protection</h5>
                                    <p className="service-text">
                                        During financial crises and market turmoil, precious metals often increase in value as safe-haven assets.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Features Section */}

                {/* End Investment Options */}

                {/* Live Precious Metals Prices Section */}
                <section className="coin-list" style={{ background: 'var(--card-bg)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="block-text center">
                                    <h3 className="heading">Live Precious Metals Prices</h3>
                                    <p className="fs-20 desc">
                                        Monitor real-time market movements for gold, silver, and other essential precious metals.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5 justify-content-center">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-md-4 mb-3">
                                        <div className="tradingview-widget-container" style={{ width: '100%', height: '126px' }}>
                                            <iframe
                                                scrolling="no"
                                                allowTransparency="true"
                                                frameBorder="0"
                                                src={`https://www.tradingview-widget.com/embed-widget/single-quote/?locale=en#%7B%22symbol%22%3A%22TVC%3AGOLD%22%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22${theme}%22%2C%22isTransparent%22%3Atrue%2C%22displayMode%22%3A%22regular%22%2C%22utm_source%22%3A%22copytradehome.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22single-quote%22%7D`}
                                                title="Gold Quote"
                                                style={{ userSelect: 'none', boxSizing: 'border-box', display: 'block', height: '100%', width: '100%' }}
                                            ></iframe>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <div className="tradingview-widget-container" style={{ width: '100%', height: '126px' }}>
                                            <iframe
                                                scrolling="no"
                                                allowTransparency="true"
                                                frameBorder="0"
                                                src={`https://www.tradingview-widget.com/embed-widget/single-quote/?locale=en#%7B%22symbol%22%3A%22TVC%3ASILVER%22%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22${theme}%22%2C%22isTransparent%22%3Atrue%2C%22displayMode%22%3A%22regular%22%2C%22utm_source%22%3A%22copytradehome.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22single-quote%22%7D`}
                                                title="Silver Quote"
                                                style={{ userSelect: 'none', boxSizing: 'border-box', display: 'block', height: '100%', width: '100%' }}
                                            ></iframe>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <div className="tradingview-widget-container" style={{ width: '100%', height: '126px' }}>
                                            <iframe
                                                scrolling="no"
                                                allowTransparency="true"
                                                frameBorder="0"
                                                src={`https://www.tradingview-widget.com/embed-widget/single-quote/?locale=en#%7B%22symbol%22%3A%22TVC%3APLATINUM%22%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22${theme}%22%2C%22isTransparent%22%3Atrue%2C%22displayMode%22%3A%22regular%22%2C%22utm_source%22%3A%22copytradehome.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22single-quote%22%7D`}
                                                title="Platinum Quote"
                                                style={{ userSelect: 'none', boxSizing: 'border-box', display: 'block', height: '100%', width: '100%' }}
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Live Precious Metals Prices Section */}

                {/* CTA Section */}
                <section className="section-sale">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="block-text">
                                    <h4 className="heading">Secure Your Wealth with Precious Metals</h4>
                                    <p className="desc">
                                        Join thousands of investors who trust precious metals to protect and grow their wealth. Start building your metals portfolio today.
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

export default Gold;
