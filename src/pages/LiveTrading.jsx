import React, { useEffect, useRef } from 'react';

const LiveTrading = () => {
    const containerRef = useRef();

    useEffect(() => {
        if (containerRef.current) {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = JSON.stringify({
                "width": "100%",
                "height": "100%",
                "currencies": [
                    "EUR",
                    "USD",
                    "JPY",
                    "GBP",
                    "CHF",
                    "AUD",
                    "CAD",
                    "NZD",
                    "CNY"
                ],
                "isTransparent": false,
                "colorTheme": "dark",
                "locale": "en"
            });
            containerRef.current.appendChild(script);
        }

        // Cleanup function not strictly necessary for script injection as React handles unmounting,
        // but often good practice to prevent duplicates if strict mode is on. 
        // For TradingView widgets, usually clearing the container on unmount is enough or checking existence.
        // However, TradingView widgets modify the DOM significantly. 
        // In this simple case, we'll just let it mount.
        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
        }
    }, []);

    return (
        <div className="container-fluid page-container main-body-container">
            <div className="page-header-breadcrumb mb-3">
                <div className="d-flex align-center justify-content-between flex-wrap">
                    <h1 className="page-title fw-medium fs-18 mb-0">Live Trade Streaming</h1>
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                            <a href="#" onClick={(e) => e.preventDefault()}>Dashboards</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Live Trading
                        </li>
                    </ol>
                </div>
                <div className="mt-2">
                    <p className="text-muted mb-0">
                        To view LiveTrading Sessions kindly contact support.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-body" style={{ height: '520px' }}>
                            <div className="tradingview-widget-container" ref={containerRef} style={{ height: '100%', width: '100%' }}>
                                <div className="tradingview-widget-container__widget"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveTrading;
