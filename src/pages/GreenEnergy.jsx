import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AOS from 'aos';
import '../assets/css/green-energy.css';

function GreenEnergy() {
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
                                    <h2 className="title">Invest in Green Energy</h2>
                                    <p className="fs-20 desc">
                                        Power the future with sustainable investments. Join the renewable energy revolution and earn returns while making a positive impact on our planet.
                                    </p>
                                    <Link to="/login" className="btn-action"><span>Start Investing Green</span></Link>

                                    <div className="crypto-tags mt-4">
                                        <span className="crypto-tag">Solar</span>
                                        <span className="crypto-tag">Wind</span>
                                        <span className="crypto-tag">Hydro</span>
                                        <span className="crypto-tag">Clean Tech</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <div className="banner__image green-energy-illustration">
                                    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        {/* Background circles */}
                                        <circle cx="400" cy="300" r="200" fill="url(#greenGrad1)" opacity="0.1"></circle>
                                        <circle cx="400" cy="300" r="150" fill="url(#greenGrad2)" opacity="0.1"></circle>

                                        {/* Wind turbines */}
                                        <g transform="translate(250, 350)">
                                            <rect x="-4" y="-80" width="8" height="80" fill="#E8E8E8"></rect>
                                            <g transform="rotate(45)">
                                                <ellipse cx="0" cy="-30" rx="8" ry="35" fill="#58BD7D" opacity="0.9"></ellipse>
                                            </g>
                                            <g transform="rotate(165)">
                                                <ellipse cx="0" cy="-30" rx="8" ry="35" fill="#58BD7D" opacity="0.9"></ellipse>
                                            </g>
                                            <g transform="rotate(285)">
                                                <ellipse cx="0" cy="-30" rx="8" ry="35" fill="#58BD7D" opacity="0.9"></ellipse>
                                            </g>
                                            <circle cx="0" cy="0" r="6" fill="#fff"></circle>
                                        </g>

                                        <g transform="translate(350, 370)">
                                            <rect x="-3" y="-60" width="6" height="60" fill="#E8E8E8"></rect>
                                            <g transform="rotate(90)">
                                                <ellipse cx="0" cy="-25" rx="6" ry="28" fill="#58BD7D" opacity="0.8"></ellipse>
                                            </g>
                                            <g transform="rotate(210)">
                                                <ellipse cx="0" cy="-25" rx="6" ry="28" fill="#58BD7D" opacity="0.8"></ellipse>
                                            </g>
                                            <g transform="rotate(330)">
                                                <ellipse cx="0" cy="-25" rx="6" ry="28" fill="#58BD7D" opacity="0.8"></ellipse>
                                            </g>
                                            <circle cx="0" cy="0" r="5" fill="#fff"></circle>
                                        </g>

                                        {/* Solar panels */}
                                        <g transform="translate(500, 300)">
                                            <rect x="0" y="0" width="120" height="80" rx="4" fill="#d96d20" opacity="0.3"></rect>
                                            <rect x="2" y="2" width="116" height="76" rx="2" fill="#1E40AF"></rect>
                                            <g>
                                                <rect x="10" y="10" width="32" height="28" fill="#3B82F6" opacity="0.8"></rect>
                                                <rect x="10" y="42" width="32" height="28" fill="#3B82F6" opacity="0.8"></rect>
                                                <rect x="46" y="10" width="32" height="28" fill="#3B82F6" opacity="0.8"></rect>
                                                <rect x="46" y="42" width="32" height="28" fill="#3B82F6" opacity="0.8"></rect>
                                                <rect x="82" y="10" width="32" height="28" fill="#3B82F6" opacity="0.8"></rect>
                                                <rect x="82" y="42" width="32" height="28" fill="#3B82F6" opacity="0.8"></rect>
                                            </g>
                                        </g>

                                        {/* Sun */}
                                        <g transform="translate(650, 150)">
                                            <circle cx="0" cy="0" r="40" fill="#FCD34D"></circle>
                                            <circle cx="0" cy="0" r="35" fill="#FBBF24"></circle>
                                            <g>
                                                <line x1="0" y1="-50" x2="0" y2="-60" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round"></line>
                                                <line x1="35" y1="-35" x2="42" y2="-42" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round"></line>
                                                <line x1="50" y1="0" x2="60" y2="0" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round"></line>
                                                <line x1="35" y1="35" x2="42" y2="42" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round"></line>
                                                <line x1="0" y1="50" x2="0" y2="60" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round"></line>
                                                <line x1="-35" y1="35" x2="-42" y2="42" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round"></line>
                                                <line x1="-50" y1="0" x2="-60" y2="0" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round"></line>
                                                <line x1="-35" y1="-35" x2="-42" y2="-42" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round"></line>
                                            </g>
                                        </g>

                                        {/* Leaf (sustainability) */}
                                        <g transform="translate(150, 250)">
                                            <path d="M0,0 Q20,-30 0,-60 Q-20,-30 0,0" fill="#58BD7D" opacity="0.8"></path>
                                            <path d="M0,0 L0,-60" stroke="#fff" strokeWidth="2" opacity="0.5"></path>
                                        </g>

                                        {/* Energy flow */}
                                        <g transform="translate(400, 450)">
                                            <circle cx="-40" cy="0" r="8" fill="#d96d20" opacity="0.6"></circle>
                                            <circle cx="0" cy="0" r="8" fill="#d96d20" opacity="0.8"></circle>
                                            <circle cx="40" cy="0" r="8" fill="#d96d20"></circle>
                                        </g>

                                        {/* Gradients needs to be defined */}
                                        <defs>
                                            <linearGradient id="greenGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" style={{ stopColor: '#58BD7D', stopOpacity: 1 }}></stop>
                                                <stop offset="100%" style={{ stopColor: '#10B981', stopOpacity: 1 }}></stop>
                                            </linearGradient>
                                            <linearGradient id="greenGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }}></stop>
                                                <stop offset="100%" style={{ stopColor: '#2563EB', stopOpacity: 1 }}></stop>
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
                                    <div className="stat-icon green">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#58BD7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M2 17L12 22L22 17" stroke="#58BD7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M2 12L12 17L22 12" stroke="#58BD7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h3 className="stat-value">$2T+</h3>
                                    <p className="stat-label">Market Size</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="stat-box">
                                    <div className="stat-icon">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="#d96d20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M17 6H23V12" stroke="#d96d20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h3 className="stat-value">15%</h3>
                                    <p className="stat-label">Avg. Annual Return</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="stat-box">
                                    <div className="stat-icon green">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="10" stroke="#58BD7D" strokeWidth="2"></circle>
                                            <path d="M12 2V22" stroke="#58BD7D" strokeWidth="2"></path>
                                            <path d="M2 12H22" stroke="#58BD7D" strokeWidth="2"></path>
                                        </svg>
                                    </div>
                                    <h3 className="stat-value">Zero</h3>
                                    <p className="stat-label">Carbon Footprint</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="stat-box">
                                    <div className="stat-icon">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#d96d20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h3 className="stat-value">ESG</h3>
                                    <p className="stat-label">Compliant</p>
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
                                    <h3 className="heading">Why Invest in Green Energy?</h3>
                                    <p className="fs-20 desc">
                                        Join the global transition to renewable energy. It's not just good for the planet—it's a smart financial decision with massive growth potential.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800">
                                    <div className="service-icon green">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"></circle>
                                            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">Future-Proof</h5>
                                    <p className="service-text">
                                        As the world moves away from fossil fuels, renewable energy is poised for decades of sustained growth.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                                    <div className="service-icon">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M17 6H23V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">High Returns</h5>
                                    <p className="service-text">
                                        Green energy projects often offer competitive returns compared to traditional energy investments.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                    <div className="service-icon green">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">Impact Investing</h5>
                                    <p className="service-text">
                                        Directly contribute to reducing global carbon emissions and fighting climate change with your portfolio.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                                    <div className="service-icon">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M19 9L14 14L10 10L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">Diversification</h5>
                                    <p className="service-text">
                                        Add a rapidly growing sector to your investment mix to reduce overall portfolio risk.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                    <div className="service-icon green">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"></path>
                                            <path d="M12 2V6" stroke="currentColor" strokeWidth="2"></path>
                                            <path d="M12 18V22" stroke="currentColor" strokeWidth="2"></path>
                                            <path d="M2 12H6" stroke="currentColor" strokeWidth="2"></path>
                                            <path d="M18 12H22" stroke="currentColor" strokeWidth="2"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">Government Support</h5>
                                    <p className="service-text">
                                        Benefit from government incentives, tax breaks, and subsidies supporting the green energy transition.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                                    <div className="service-icon">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"></circle>
                                            <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">Ethical Choice</h5>
                                    <p className="service-text">
                                        Align your investments with your values by supporting companies that prioritize environmental responsibility.
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
                                    <h3 className="heading">How Green Energy Investing Works</h3>
                                    <p className="fs-20 desc">
                                        We connect you with vetted renewable energy projects and companies leading the charge towards a sustainable future.
                                    </p>
                                </div>

                                <div className="work__main">
                                    <div className="work-box" data-aos="fade-up" data-aos-duration="800">
                                        <div className="image">
                                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="40" cy="40" r="38" fill="#58BD7D" opacity="0.1"></circle>
                                                <path d="M40 20L55 50H25L40 20Z" stroke="#58BD7D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <p className="step">Step 1</p>
                                            <Link to="#" className="title">Identify Projects</Link>
                                            <p className="text">
                                                Our experts analyze and select high-potential green energy projects from solar farms to wind turbines.
                                            </p>
                                        </div>
                                        <img className="line" src="/assets/images/connect-line.png" alt="" />
                                    </div>
                                    <div className="work-box" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                        <div className="image">
                                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="40" cy="40" r="38" fill="#d96d20" opacity="0.1"></circle>
                                                <rect x="25" y="30" width="30" height="25" rx="2" stroke="#d96d20" strokeWidth="3" fill="none"></rect>
                                                <path d="M30 35H50" stroke="#d96d20" strokeWidth="3"></path>
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <p className="step">Step 2</p>
                                            <Link to="#" className="title">Allocate Funds</Link>
                                            <p className="text">
                                                Invest directly in specific projects or diversified green energy funds with just a few clicks.
                                            </p>
                                        </div>
                                        <img className="line" src="/assets/images/connect-line.png" alt="" />
                                    </div>
                                    <div className="work-box" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                        <div className="image">
                                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="40" cy="40" r="38" fill="#58BD7D" opacity="0.1"></circle>
                                                <path d="M25 40L35 50L55 30" stroke="#58BD7D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <p className="step">Step 3</p>
                                            <Link to="#" className="title">Generate Returns</Link>
                                            <p className="text">
                                                Earn revenue from energy production and potential capital appreciation as the projects mature.
                                            </p>
                                        </div>
                                        <img className="line" src="/assets/images/connect-line.png" alt="" />
                                    </div>
                                    <div className="work-box" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                                        <div className="image">
                                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="40" cy="40" r="38" fill="#d96d20" opacity="0.1"></circle>
                                                <path d="M40 25V55M25 40H55" stroke="#d96d20" strokeWidth="3" strokeLinecap="round"></path>
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <p className="step">Step 4</p>
                                            <Link to="#" className="title">Reinvest</Link>
                                            <p className="text">
                                                Compound your impact and earnings by reinvesting your returns into new green initiatives.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End How It Works Section */}

                {/* Investment Benefits Section */}
                <section className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-md-12">
                                <div className="about_image">
                                    <div className="green-energy-benefits">
                                        <div className="benefit-item" data-aos="fade-right" data-aos-delay="0">
                                            <div className="benefit-icon">
                                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#58BD7D" strokeWidth="2"></path>
                                                    <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="#58BD7D" strokeWidth="2"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <h6>Sustainable Returns</h6>
                                                <p>Long-term growth potential</p>
                                            </div>
                                        </div>

                                        <div className="benefit-item" data-aos="fade-right" data-aos-delay="100">
                                            <div className="benefit-icon">
                                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                                    <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="#d96d20" strokeWidth="2"></path>
                                                    <path d="M17 6H23V12" stroke="#d96d20" strokeWidth="2"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <h6>Market Growth</h6>
                                                <p>Rapidly expanding sector</p>
                                            </div>
                                        </div>

                                        <div className="benefit-item" data-aos="fade-right" data-aos-delay="200">
                                            <div className="benefit-icon">
                                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="10" stroke="#10B981" strokeWidth="2"></circle>
                                                    <path d="M12 6V12L16 14" stroke="#10B981" strokeWidth="2"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <h6>Government Support</h6>
                                                <p>Policy incentives & subsidies</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <div className="about__content" data-aos="fade-up" data-aos-duration="1000">
                                    <h3 className="heading">Investing in a Sustainable Future</h3>
                                    <p className="fs-20 decs">
                                        Renewable energy drew more than $2.6 trillion in investment from 2010 to 2019, with costs now lower than fossil fuels in most markets.
                                    </p>
                                    <ul className="list">
                                        <li>
                                            <span className="icon-check"></span>
                                            <h6 className="title">Cost Competitiveness</h6>
                                            <p className="text">
                                                Building new wind or solar capacity costs less than coal or gas plants in two-thirds of the world, making renewables economically attractive.
                                            </p>
                                        </li>
                                        <li>
                                            <span className="icon-check"></span>
                                            <h6 className="title">Environmental Impact</h6>
                                            <p className="text">
                                                Reduce carbon emissions and combat climate change while earning competitive returns on your investment portfolio.
                                            </p>
                                        </li>
                                        <li>
                                            <span className="icon-check"></span>
                                            <h6 className="title">Technology Advancement</h6>
                                            <p className="text">
                                                Continuous innovation drives efficiency improvements and cost reductions across all renewable energy technologies.
                                            </p>
                                        </li>
                                    </ul>
                                    <Link to="/register" className="btn-action mb-4">Start Investing Green</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Investment Benefits Section */}

                {/* Live Market Data Section */}
                <section className="coin-list" style={{ background: 'var(--card-bg)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="block-text center">
                                    <h3 className="heading">Green Energy Market Data</h3>
                                    <p className="fs-20 desc">
                                        Track leading clean energy companies and renewable energy stocks in real-time.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5 justify-content-center">
                            <div className="col-lg-10">
                                <div className="tradingview-widget-container" style={{ width: '100%', height: '500px' }}>
                                    <iframe
                                        scrolling="no"
                                        allowTransparency="true"
                                        frameBorder="0"
                                        src={`https://www.tradingview-widget.com/embed-widget/market-overview/?locale=en#%7B%22symbols%22%3A%5B%7B%22title%22%3A%22Green%20Energy%20Stocks%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22NASDAQ%3ATSLA%22%2C%22d%22%3A%22Tesla%22%7D%2C%7B%22s%22%3A%22NASDAQ%3AENPH%22%2C%22d%22%3A%22Enphase%20Energy%22%7D%2C%7B%22s%22%3A%22NASDAQ%3ASEDE%22%2C%22d%22%3A%22SolarEdge%22%7D%2C%7B%22s%22%3A%22NASDAQ%3AFSLR%22%2C%22d%22%3A%22First%20Solar%22%7D%2C%7B%22s%22%3A%22NYSE%3ANEE%22%2C%22d%22%3A%22NextEra%20Energy%22%7D%2C%7B%22s%22%3A%22NYSE%3ABEP%22%2C%22d%22%3A%22Brookfield%20Renewable%22%7D%5D%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22${theme}%22%2C%22isTransparent%22%3Atrue%2C%22width%22%3A%22100%25%22%2C%22height%22%3A500%2C%22locale%22%3A%22en%22%7D`}
                                        title="Green Energy Market Data"
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
                                    <h4 className="heading">Ready to Power the Future?</h4>
                                    <p className="desc">
                                        Join the renewable energy revolution and help build a cleaner, more sustainable world while growing your investment portfolio.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="button mb-4">
                                    <Link to="/register" className="btn-action">Start Investing Green</Link>
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

export default GreenEnergy;
