import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AOS from 'aos';
import '../assets/css/stocks.css';

function Stocks() {
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
                                    <h2 className="title">Trade Stocks with Confidence</h2>
                                    <p className="fs-20 desc">
                                        Invest in the world's leading companies. Trade stocks, ETFs, and fractional shares with advanced tools, expert research, and competitive pricing.
                                    </p>
                                    <Link to="/login" className="btn-action"><span>Start Trading Stocks</span></Link>

                                    <div className="crypto-tags mt-4">
                                        <span className="crypto-tag">Apple</span>
                                        <span className="crypto-tag">Microsoft</span>
                                        <span className="crypto-tag">Google</span>
                                        <span className="crypto-tag">Amazon</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <div className="banner__image">
                                    <img src="/assets/images/Illustration.png" alt="Stock Trading" className="img-fluid rounded" />
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
                                    <h3 className="stat-value">Extended</h3>
                                    <p className="stat-label">Trading Hours</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="stat-box">
                                    <div className="stat-icon green">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 1V23" stroke="#58BD7D" strokeWidth="2" strokeLinecap="round"></path>
                                            <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#58BD7D" strokeWidth="2" strokeLinecap="round"></path>
                                        </svg>
                                    </div>
                                    <h3 className="stat-value">$5</h3>
                                    <p className="stat-label">Minimum Investment</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <div className="stat-box">
                                    <div className="stat-icon">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#d96d20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="#d96d20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h3 className="stat-value">Fractional</h3>
                                    <p className="stat-label">Shares Available</p>
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
                                    <h3 className="stat-value">Tax-Free</h3>
                                    <p className="stat-label">Profit Benefits</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Stats Section */}

                {/* About Stock Trading */}
                <section className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-md-12">
                                <div className="about_image">
                                    <div className="tradingview-widget-container" style={{ width: '100%', height: '500px' }}>
                                        <iframe
                                            scrolling="no"
                                            allowTransparency="true"
                                            frameBorder="0"
                                            src={`https://www.tradingview-widget.com/embed-widget/symbol-overview/?locale=en#%7B%22symbols%22%3A%5B%5B%22Apple%22%2C%22AAPL%7C1D%22%5D%2C%5B%22Google%22%2C%22GOOGL%7C1D%22%5D%2C%5B%22Microsoft%22%2C%22MSFT%7C1D%22%5D%2C%5B%22Amazon%22%2C%22AMZN%7C1D%22%5D%2C%5B%22Tesla%22%2C%22TSLA%7C1D%22%5D%2C%5B%22Meta%22%2C%22META%7C1D%22%5D%5D%2C%22chartOnly%22%3Afalse%2C%22width%22%3A%22100%25%22%2C%22height%22%3A500%2C%22colorTheme%22%3A%22${theme}%22%2C%22gridLineColor%22%3A%22rgba(42%2C%2046%2C%2057%2C%200)%22%2C%22fontColor%22%3A%22#787b86%22%2C%22isTransparent%22%3Atrue%2C%22showFloatingTooltip%22%3Atrue%2C%22scalePosition%22%3A%22no%22%2C%22scaleMode%22%3A%22normal%22%2C%22fontFamily%22%3A%22Trebuchet%20MS%2C%20Roboto%2C%20Ubuntu%2C%20sans-serif%22%2C%22noTimeScale%22%3Afalse%2C%22valuesOnly%22%3Afalse%2C%22chartType%22%3A%22area%22%2C%22lineColor%22%3A%22#2962ff%22%2C%22bottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22topColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.3)%22%2C%22lineWidth%22%3A2%2C%22utm_source%22%3A%22copytradehome.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22symbol-overview%22%7D`}
                                            title="Stock Overview"
                                            style={{ userSelect: 'none', boxSizing: 'border-box', display: 'block', height: '100%', width: '100%' }}
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <div className="about__content" data-aos="fade-up" data-aos-duration="1000">
                                    <h3 className="heading">How Stock Trading Works</h3>
                                    <p className="fs-20 decs">
                                        We support full extended trading hours, including pre-market (4:00 AM - 9:30 AM ET) and after hours (4:00 PM - 8:00 PM ET) sessions.
                                    </p>
                                    <ul className="list">
                                        <li>
                                            <span className="icon-check"></span>
                                            <h6 className="title">Fractional Shares</h6>
                                            <p className="text">
                                                Invest in the stocks you want regardless of share price. Buy fractions of stocks and ETFs at a $5 minimum on CopyTradeHome.
                                            </p>
                                        </li>
                                        <li>
                                            <span className="icon-check"></span>
                                            <h6 className="title">Own Your Favorite Companies</h6>
                                            <p className="text">
                                                You can own a part of your favorite company and have a say in issues you care about through shareholder voting rights.
                                            </p>
                                        </li>
                                        <li>
                                            <span className="icon-check"></span>
                                            <h6 className="title">Long-Term Growth</h6>
                                            <p className="text">
                                                The stock market goes up over time and has potential for wealth creation through capital appreciation and dividend income.
                                            </p>
                                        </li>
                                        <li>
                                            <span className="icon-check"></span>
                                            <h6 className="title">Portfolio Diversity</h6>
                                            <p className="text">
                                                There is the option of diversity to help mitigate risk across different sectors, market caps, and geographic regions.
                                            </p>
                                        </li>
                                    </ul>
                                    <Link to="/register" className="btn-action mb-4">Start Investing Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End About Stock Trading */}

                {/* Features Section */}
                <section className="coin-list">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="block-text center">
                                    <h3 className="heading">Why Invest in Stocks?</h3>
                                    <p className="fs-20 desc">
                                        Stock market investments have proven to be one of the most effective paths to wealth creation over the long term.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800">
                                    <div className="service-icon">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M17 6H23V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">Growth Potential</h5>
                                    <p className="service-text">
                                        Historically, stocks have provided higher returns than other investment vehicles over the long term, offering significant growth potential.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                                    <div className="service-icon green">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 1V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                            <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">Dividend Income</h5>
                                    <p className="service-text">
                                        Many stocks pay dividends, providing a regular income stream in addition to potential capital appreciation as the stock value increases.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                    <div className="service-icon">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"></circle>
                                            <path d="M12 2L12 5M12 19L12 22M5 12L2 12M22 12L19 12M6.34 6.34L4.22 4.22M19.78 19.78L17.66 17.66M6.34 17.66L4.22 19.78M19.78 4.22L17.66 6.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">Portfolio Diversification</h5>
                                    <p className="service-text">
                                        Investing in a variety of stocks across different sectors and markets helps reduce risk through diversification.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                                    <div className="service-icon green">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">Inflation Protection</h5>
                                    <p className="service-text">
                                        Stocks have historically outpaced inflation, helping preserve your purchasing power over time compared to cash holdings.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                    <div className="service-icon">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"></circle>
                                            <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">Ownership Benefits</h5>
                                    <p className="service-text">
                                        When you own stocks, you become a partial owner of the company, giving you voting rights and participation in corporate decisions.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                                    <div className="service-icon green">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" strokeWidth="2"></path>
                                            <path d="M7 11H7.01M12 11H12.01M17 11H17.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round"></path>
                                        </svg>
                                    </div>
                                    <h5 className="service-title">High Liquidity</h5>
                                    <p className="service-text">
                                        Stocks are highly liquid investments, allowing you to buy and sell shares quickly with easy access to your funds when needed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Features Section */}

                {/* How It Works (from standard template, mostly skipped in stocks.html but present in template) 
            Wait, stocks.html actually had 'Our Stock Investment Process' labeled as 'work' section.
            I will include it.
        */}
                <section className="work">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="block-text center">
                                    <h3 className="heading">Our Stock Investment Process</h3>
                                    <p className="fs-20 desc">
                                        We make investing in stocks straightforward and accessible for all types of investors.
                                    </p>
                                </div>

                                <div className="work__main">
                                    <div className="work-box" data-aos="fade-up" data-aos-duration="800">
                                        <div className="image">
                                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="40" cy="40" r="38" fill="#d96d20" opacity="0.1"></circle>
                                                <path d="M30 50L25 35L55 35L50 50H30Z" stroke="#d96d20" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M40 35V20M40 20L35 25M40 20L45 25" stroke="#d96d20" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <p className="step">Step 1</p>
                                            <Link to="#" className="title">Select-Stocks</Link>
                                            <p className="text">
                                                Browse thousands of stocks and ETFs. Use our screener to find investments that match your criteria.
                                            </p>
                                        </div>
                                        <img className="line" src="/assets/images/connect-line.png" alt="" />
                                    </div>
                                    <div className="work-box" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                        <div className="image">
                                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="40" cy="40" r="38" fill="#58BD7D" opacity="0.1"></circle>
                                                <rect x="25" y="30" width="30" height="25" rx="2" stroke="#58BD7D" strokeWidth="3" fill="none"></rect>
                                                <path d="M30 35H40" stroke="#58BD7D" strokeWidth="3"></path>
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <p className="step">Step 2</p>
                                            <Link to="#" className="title">Place Order</Link>
                                            <p className="text">
                                                Choose between market, limit, or stop orders. Invest in whole or fractional shares instantly.
                                            </p>
                                        </div>
                                        <img className="line" src="/assets/images/connect-line.png" alt="" />
                                    </div>
                                    <div className="work-box" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                        <div className="image">
                                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="40" cy="40" r="38" fill="#d96d20" opacity="0.1"></circle>
                                                <path d="M25 45L35 25L45 35L55 15" stroke="#d96d20" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <p className="step">Step 3</p>
                                            <Link to="#" className="title">Track Performance</Link>
                                            <p className="text">
                                                Monitor your portfolio in real-time. Set price alerts and access improved news and analysis.
                                            </p>
                                        </div>
                                        <img className="line" src="/assets/images/connect-line.png" alt="" />
                                    </div>
                                    <div className="work-box" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                                        <div className="image">
                                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="40" cy="40" r="38" fill="#58BD7D" opacity="0.1"></circle>
                                                <path d="M30 40H50M40 30V50" stroke="#58BD7D" strokeWidth="3" strokeLinecap="round"></path>
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <p className="step">Step 4</p>
                                            <Link to="#" className="title">Rebalance</Link>
                                            <p className="text">
                                                Adjust your portfolio as your goals change. Reinvest dividends automatically to compound growth.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End How It Works Section */}

                {/* Live Stock Market Data Section */}
                <section className="coin-list" style={{ background: 'var(--card-bg)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="block-text center">
                                    <h3 className="heading">Live Stock Market Data</h3>
                                    <p className="fs-20 desc">
                                        Monitor real-time market movements across major indices and popular stocks.
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
                                        src={`https://www.tradingview-widget.com/embed-widget/market-overview/?locale=en#%7B%22symbols%22%3A%5B%7B%22title%22%3A%22Indices%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22FOREXCOM%3ASPX500%22%2C%22d%22%3A%22S%26P%20500%22%7D%2C%7B%22s%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22d%22%3A%22US%20Tech%20100%22%7D%2C%7B%22s%22%3A%22FOREXCOM%3ADJI%22%2C%22d%22%3A%22Dow%2030%22%7D%2C%7B%22s%22%3A%22INDEX%3ANYA%22%2C%22d%22%3A%22NYSE%20Composite%22%7D%2C%7B%22s%22%3A%22INDEX%3AIXIC%22%2C%22d%22%3A%22Nasdaq%20Composite%22%7D%5D%7D%2C%7B%22title%22%3A%22Stocks%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22NASDAQ%3AAAPL%22%7D%2C%7B%22s%22%3A%22NASDAQ%3AMSFT%22%7D%2C%7B%22s%22%3A%22NASDAQ%3AGOOGL%22%7D%2C%7B%22s%22%3A%22NASDAQ%3AAMZN%22%7D%2C%7B%22s%22%3A%22NASDAQ%3ATSLA%22%7D%5D%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22${theme}%22%2C%22isTransparent%22%3Atrue%2C%22width%22%3A%22100%25%22%2C%22height%22%3A500%2C%22locale%22%3A%22en%22%7D`}
                                        title="Market Overview"
                                        style={{ userSelect: 'none', boxSizing: 'border-box', display: 'block', height: '100%', width: '100%' }}
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Live Stock Market Data Section */}

                {/* CTA Section */}
                <section className="section-sale">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="block-text">
                                    <h4 className="heading">Ready to Build Your Stock Portfolio?</h4>
                                    <p className="desc">
                                        Begin investing in stocks today and take advantage of the market's long-term growth potential. Start with as little as $5.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="button">
                                    <Link to="/register" className="btn-action">Start Investing Now</Link>
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

export default Stocks;
