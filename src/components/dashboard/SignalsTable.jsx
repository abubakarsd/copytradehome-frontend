import React from 'react';

const SignalsTable = () => {
    // Mock data based on HTML "No signals purchased yet" empty state
    // We can add some real mock data later if needed for demo
    const purchasedSignals = [];

    return (
        <div className="row">
            <div className="col-xl-12">
                <div className="card custom-card border">
                    <div className="card-header justify-content-between align-items-center">
                        <div className="card-title mb-0">Purchased Signals</div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover table-nowrap mb-0">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Signal Price</th>
                                        <th>Signal Strength</th>
                                        <th>Subscribed Amount</th>
                                        <th>Purchased At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {purchasedSignals.length > 0 ? (
                                        purchasedSignals.map((signal, index) => (
                                            <tr key={index}>
                                                <td>{signal.name}</td>
                                                <td>{signal.price}</td>
                                                <td>{signal.strength}</td>
                                                <td>{signal.amount}</td>
                                                <td>{signal.date}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="text-center py-4">
                                                No signals purchased yet.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignalsTable;
