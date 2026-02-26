import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../assets/css/home.css';
import Services from '../components/sections/Services';
import CoinList from '../components/sections/CoinList';
import About from '../components/sections/About';
import HowItWorks from '../components/sections/HowItWorks';
import Blog from '../components/sections/Blog';
import Sale from '../components/sections/Sale';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | CopyTradeHome</title>
        <meta property="og:title" content="Home | CopyTradeHome" />
        <meta property="og:description" content="CopyTrading with the Power of Social Intelligence" />
        <meta property="og:image" content="/assets/images/banner-02.png" />
        <meta name="twitter:title" content="Home | CopyTradeHome" />
        <meta name="twitter:description" content="CopyTrading with the Power of Social Intelligence" />
        <meta name="twitter:image" content="/assets/images/banner-02.png" />
      </Helmet>
      <main>
        {/* Banner Section */}
        <section className="banner">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-md-12">
                <div className="banner__content">
                  <h2 className="title">
                    CopyTrading with the Power of Social Intelligence
                  </h2>
                  <p className="fs-20 desc">
                    Unlock the power of Copy Trading with Copytrade Home. Connect with successful traders, mirror their proven strategies in real-time, and build a diversified portfolio automatically no advanced market knowledge required.
                  </p>
                  <Link to="/register" className="btn-action"><span>Join Now</span></Link>
                </div>
              </div>
              <div className="col-xl-6 col-md-12">
                <div className="banner__image">
                  <img src="/assets/images/banner-02.png" alt="Trading Platform" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Banner Section */}

        <CoinList />

        {/* What is Copy Trading Section */}
        <section className="about">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-md-12">
                <div className="about_image">
                  <img className="img-main" src="/assets/images/about-h1.png" alt="What is Copy Trading" />
                </div>
              </div>
              <div className="col-xl-6 col-md-12">
                <div className="about__content" data-aos="fade-up" data-aos-duration="1000">
                  <h3 className="heading">What is Copy Trading?</h3>
                  <p className="fs-20 decs">
                    Copy trading is a trading method where investors replicate experienced leaders' moves. In this way, they automatically mirror the trading activities of experienced leaders - you can find them in the Leaders section - and follow their investment strategies.
                  </p>
                  <p className="fs-20 decs mt-3">
                    Copytrade Home gives you access to a dynamic community of more than 300K experienced leaders. Start copying their forex, stocks, crypto, or other financial instruments strategies today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investing Made Easy Section */}
        <section className="work">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block-text center">
                  <h3 className="heading">Investing Made Easy With CopyTrading</h3>
                  <p className="fs-20 desc">
                    Join Copytrade Home and experience copy-trading with a leading traders community. Discover experienced leaders globally and automatically copy their positions. Whether you're a beginner looking to improve your trading skills or an experienced investor seeking a straightforward solution, Copytrade Home is the place for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services / Benefits Section */}
        <section className="services mb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block-text center mb-5">
                  <h3 className="heading">Discover why copy trading with Copytrade Home is so popular</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-card" data-aos="fade-up" data-aos-duration="800">
                  <h5 className="service-title" style={{ color: "var(--primary-color)" }}>Save Time</h5>
                  <p className="service-text text-start mt-3">
                    Copy trading minimizes the time required for extensive market research and analysis. Copy traders can benefit from the skills and knowledge of Leaders to make informed trading decisions, saving time and effort.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                  <h5 className="service-title" style={{ color: "var(--primary-color)" }}>Access to Leaders</h5>
                  <p className="service-text text-start mt-3">
                    Copy Trading is a great way to learn how global markets operate. Learn from other experienced leaders who have their signals strategies with trading forex, stocks, crypto or other financial instruments.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                  <h5 className="service-title" style={{ color: "var(--primary-color)" }}>Beginner Friendly</h5>
                  <p className="service-text text-start mt-3">
                    Even if you don’t know everything about currencies, CFDs, or global markets, you can start your trading journey. Simply choose the Leaders who match your needs and risk tolerance and gain experience in the investing landscape.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                  <h5 className="service-title" style={{ color: "var(--primary-color)" }}>Diversification</h5>
                  <p className="service-text text-start mt-3">
                    Diversification is easier, allowing you to follow multiple Leaders and several financial instruments.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                  <h5 className="service-title" style={{ color: "var(--primary-color)" }}>Flexibility in Investment Size</h5>
                  <p className="service-text text-start mt-3">
                    Adjust the strategies you copy based on your account balance and risk appetite.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                  <h5 className="service-title" style={{ color: "var(--primary-color)" }}>Transparency</h5>
                  <p className="service-text text-start mt-3">
                    Track your Leaders through a leaderboard and real-time verified data.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mx-auto">
                <div className="service-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                  <h5 className="service-title" style={{ color: "var(--primary-color)" }}>Learning Opportunities</h5>
                  <p className="service-text text-start mt-3">
                    Gain valuable insights from Leaders and apply them to your trading strategies in the future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <About />
        <HowItWorks />

        <Blog />
        <Sale />
      </main>
    </>
  );
};

export default Home;
