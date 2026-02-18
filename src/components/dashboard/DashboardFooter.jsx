import React from 'react';
import { Link } from 'react-router-dom';

const DashboardFooter = () => {
  return (
    <>
      <footer className="footer mt-auto py-3 text-center">
        <div className="container">
          <span className="text-muted">
            Copyright © <span id="year">2026</span>
            <Link to="/dashboard" className="text-dark fw-medium">
              CopyTradeHome                </Link>.
            All rights reserved
          </span>
        </div>
      </footer>
    </>
  );
};

export default DashboardFooter;
