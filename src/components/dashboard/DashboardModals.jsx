import React from 'react';

const DashboardModals = () => {
  return (
    <>
      {/* Toast Container */}
      <div className="toast-container position-fixed top-0 start-50 translate-middle-x p-3">
        <div id="topcenter-Toast" className="toast colored-toast bg-primary-transparent text-primary" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000">
          <div className="toast-header">
            <img className="bd-placeholder-img rounded me-2" src="/assets/dashboard/images/toggle-dark.png" alt="..." />
            <strong className="me-auto text-white">CopyTradeHome</strong>
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div className="toast-body" id="topcenter-toast-body">
            Your toast message here.
          </div>
        </div>
      </div>

      <div className="modal fade" id="walletConnect" tabIndex="-1" aria-labelledby="topUpModalLabel" style={{ display: 'none' }} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content overflow-hidden">
            <div className="modal-header pb-0 border-0">
              <h1 className="modal-title h4" id="topUpModalLabel">Wallet Connect</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="vstack gap-8">
                <label className="form-label">Choose Connection Method</label>
                <div className="vstack gap-2">
                  <a href="#" onClick={(event) => window.showToastMessage && window.showToastMessage()} data-bs-toggle="modal" className="border rounded mb-5">
                    <label htmlFor="btnCardCheck1" className="btn btn-outline-light shadow-none border-primary-hover d-flex align-items-center p-4 text-start">
                      <img src="/assets/dashboard/images/wc-qr.png" className="w-rem-16 rounded" alt="..." />
                      <span className="ms-4 flex-fill text-muted">
                        <span className="d-block text-heading mb-1">CopyTradeHome QR Connect</span>
                        <span className="d-block text-sm">Connect Using QR Code</span>
                      </span>
                    </label>
                  </a>
                  <a href="https://copytradehome.com/connect_wallet" className="border rounded">
                    <label htmlFor="btnCardCheck2" className="btn btn-outline-light shadow-none border-primary-hover d-flex align-items-center p-4 text-start">
                      <img src="/assets/dashboard/images/wc.png" className="w-rem-16 rounded" alt="..." />
                      <span className="ms-4 flex-fill text-muted">
                        <span className="d-block text-heading mb-1">Connect Manually</span>
                        <span className="d-block text-sm">Manually connect to Wallet Connect</span>
                      </span>
                    </label>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Search Modal */}
      <div className="modal fade" id="header-responsive-search" tabIndex="-1" aria-labelledby="header-responsive-search" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="input-group">
                <input type="text" className="form-control border-end-0" placeholder="Search Anything ..." aria-label="Search Anything ..." aria-describedby="button-addon2" />
                <button className="btn btn-primary" type="button" id="button-addon2"><i className="bi bi-search"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll To Top */}
      <div className="scrollToTop" style={{ display: 'none' }}>
        <span className="arrow lh-1"><i className="bx bx-up-arrow-alt fs-18"></i></span>
      </div>
      <div id="responsive-overlay"></div>
    </>
  );
};

export default DashboardModals;
