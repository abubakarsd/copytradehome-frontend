import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';

const MiniChart = ({ color, data }) => {
    const options = {
        chart: {
            type: 'area',
            height: 40,
            width: 80,
            sparkline: { enabled: true }
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [50, 100]
            }
        },
        colors: [color],
        tooltip: {
            fixed: { enabled: false },
            x: { show: false },
            y: { title: { formatter: () => '' } },
            marker: { show: false }
        }
    };

    const series = [{ data: data }];

    return <Chart options={options} series={series} type="area" height={40} width={80} />;
};

const CoinList = () => {
    const [activeTab, setActiveTab] = useState('crypto');

    const cryptoData = [
        { name: 'BITBOARDUSDT', unit: 'BITBOARD', price: '$0.00', change: '-5.35%', changeClass: 'down', marketCap: '$24,363,520', chartColor: '#D33535', chartData: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54] },
        { name: 'GMTUSDT', unit: 'GMT', price: '$0.01', change: '-0.55%', changeClass: 'down', marketCap: '$573,984', chartColor: '#D33535', chartData: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15] },
        { name: 'ZKCUSDT', unit: 'ZKC', price: '$0.11', change: '+3.86%', changeClass: 'up', marketCap: '$3,198,000', chartColor: '#58BD7D', chartData: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32] },
        { name: 'DOGEUSDT', unit: 'DOGE', price: '$0.11', change: '-0.05%', changeClass: 'down', marketCap: '$500,846,761', chartColor: '#D33535', chartData: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45] },
        { name: 'KAIAUSDT', unit: 'KAIA', price: '$0.06', change: '-1.64%', changeClass: 'down', marketCap: '$1,434,174', chartColor: '#D33535', chartData: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15] },
        { name: 'BTCUSDT', unit: 'BTC', price: '$83,108.24', change: '-1.06%', changeClass: 'down', marketCap: '$9,740', chartColor: '#D33535', chartData: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54] },
        { name: 'CLANKERUSDT', unit: 'CLANKER', price: '$42.24', change: '-3.34%', changeClass: 'down', marketCap: '$256', chartColor: '#D33535', chartData: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32] },
        { name: 'RVVUSDT', unit: 'RVV', price: '$0.00', change: '+9.23%', changeClass: 'up', marketCap: '$3,607,565', chartColor: '#58BD7D', chartData: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45] },
    ];

    const stockData = [
        { name: 'Texas Instruments Incorporated', unit: 'TXN', img: 'TXN.png', price: '$215.55', change: 'N/A', changeClass: '', volume: 'N/A', chartColor: '#58BD7D', chartData: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54] },
        { name: 'Caterpillar Inc.', unit: 'CAT', img: 'CAT.png', price: '$657.36', change: 'N/A', changeClass: '', volume: 'N/A', chartColor: '#58BD7D', chartData: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15] },
        { name: 'Abbott Laboratories', unit: 'ABT', img: 'ABT.png', price: '$109.30', change: 'N/A', changeClass: '', volume: 'N/A', chartColor: '#58BD7D', chartData: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32] },
        { name: 'Applied Materials, Inc.', unit: 'AMAT', img: 'AMAT.png', price: '$322.32', change: 'N/A', changeClass: '', volume: 'N/A', chartColor: '#58BD7D', chartData: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45] },
        { name: 'Intel Corporation', unit: 'INTC', img: 'INTC.png', price: '$46.47', change: 'N/A', changeClass: '', volume: 'N/A', chartColor: '#58BD7D', chartData: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15] },
        { name: 'Merck & Co., Inc.', unit: 'MRK', img: 'MRK.png', price: '$110.27', change: 'N/A', changeClass: '', volume: 'N/A', chartColor: '#58BD7D', chartData: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54] },
        { name: 'Cisco Systems, Inc.', unit: 'CSCO', img: 'CSCO.png', price: '$78.32', change: 'N/A', changeClass: '', volume: 'N/A', chartColor: '#58BD7D', chartData: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32] },
        { name: 'Procter & Gamble Company', unit: 'PG', img: 'PG.png', price: '$151.77', change: 'N/A', changeClass: '', volume: 'N/A', chartColor: '#58BD7D', chartData: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45] },
    ];

    return (
        <section className="coin-list">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="block-text">
                            <h3 className="heading">Market Update</h3>
                            <Link className="btn-action" to="/welcome/crypto">See All Markets</Link>
                        </div>

                        <div className="coin-list__main">
                            <div className="flat-tabs">
                                <ul className="menu-tab">
                                    <li className={activeTab === 'crypto' ? 'active' : ''} onClick={() => setActiveTab('crypto')}>
                                        <h6 className="fs-16">Cryptocurrency</h6>
                                    </li>
                                    <li className={activeTab === 'stocks' ? 'active' : ''} onClick={() => setActiveTab('stocks')}>
                                        <h6 className="fs-16">Stocks</h6>
                                    </li>
                                </ul>
                                <div className="content-tab">
                                    {activeTab === 'crypto' && (
                                        <div className="content-inner crypto-tab active">
                                            <div className="table-responsive">
                                                <table className="table table-borderless">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col"></th>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Last Price</th>
                                                            <th scope="col">24h %</th>
                                                            <th scope="col">Market Cap</th>
                                                            <th scope="col">Last 7 Days</th>
                                                            <th scope="col"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {cryptoData.map((coin, index) => (
                                                            <tr key={index}>
                                                                <th scope="row"><span className="ri-star-fill text-warning"></span></th>
                                                                <td>{index + 1}</td>
                                                                <td>
                                                                    <Link to="#">
                                                                        <span className="ri-money-dollar-circle-line ri-2x text-primary me-2"></span>
                                                                        <span>{coin.name}</span>
                                                                        <span className="unit">{coin.unit}</span>
                                                                    </Link>
                                                                </td>
                                                                <td className="boild">{coin.price}</td>
                                                                <td className={coin.changeClass}>{coin.change}</td>
                                                                <td className="boild">{coin.marketCap}</td>
                                                                <td><MiniChart color={coin.chartColor} data={coin.chartData} /></td>
                                                                <td><Link to="/register" className="btn">Trade</Link></td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'stocks' && (
                                        <div className="content-inner stocks-tab active">
                                            <div className="table-responsive">
                                                <table className="table table-borderless">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col"></th>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Close Price</th>
                                                            <th scope="col">24h %</th>
                                                            <th scope="col">Volume</th>
                                                            <th scope="col">Last 7 Days</th>
                                                            <th scope="col"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {stockData.map((stock, index) => (
                                                            <tr key={index}>
                                                                <th scope="row"><span className="ri-star-fill text-warning"></span></th>
                                                                <td>{index + 1}</td>
                                                                <td>
                                                                    <Link to="#" className="d-flex align-items-center">
                                                                        <img src={`/assets/images/${stock.img}`} alt={stock.unit} className="stock-logo me-2" onError={(e) => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'inline-flex'; }} />
                                                                        <span className="ri-btc-line ri-2x text-primary me-2 d-none"></span>
                                                                        <span>{stock.name}</span>
                                                                        <span className="unit">{stock.unit}</span>
                                                                    </Link>
                                                                </td>
                                                                <td className="boild">{stock.price}</td>
                                                                <td className={stock.changeClass}>{stock.change}</td>
                                                                <td className="boild">{stock.volume}</td>
                                                                <td><MiniChart color={stock.chartColor} data={stock.chartData} /></td>
                                                                <td><Link to="/register" className="btn">Trade</Link></td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoinList;
