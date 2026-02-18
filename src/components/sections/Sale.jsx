import React from 'react';
import { Link } from 'react-router-dom';

const Sale = () => {
    return (
        <section className="section-sale">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="block-text">
                            <h4 className="heading">Earn up to $25 worth of crypto</h4>
                            <p className="desc">
                                Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="button">
                            <Link to="/register">Create Account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sale;
