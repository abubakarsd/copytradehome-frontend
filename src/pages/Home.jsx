import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
      <Header />
      <main>
        {/* Banner Section */}
        <section className="banner">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-md-12">
                <div className="banner__content">
                  <h2 className="title">
                    A trusted and secure cryptocurrency exchange.
                  </h2>
                  <p className="fs-20 desc">
                    Join millions of users worldwide and invest in 7,000+ instruments with advanced trading tools. With our innovative CopyTrader™ technology, you can automatically copy the moves of other successful investors in real time.
                  </p>
                  <Link to="/register" className="btn-action"><span>Start Trading Now</span></Link>
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
        <Services />
        <About />
        <HowItWorks />
        <Blog />
        <Sale />
      </main>
      <Footer />
    </>
  );
};

export default Home;
