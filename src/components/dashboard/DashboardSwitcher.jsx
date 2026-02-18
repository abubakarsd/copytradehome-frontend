import React from 'react';

const DashboardSwitcher = () => {
    return (
        <>
            {/* Start Switcher */}
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="switcher-canvas" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header border-bottom d-block p-0">
                    <div className="d-flex align-items-center justify-content-between p-3">
                        <h5 className="offcanvas-title text-default" id="offcanvasRightLabel">Switcher</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <nav className="border-top border-block-start-dashed">
                        <div className="nav nav-tabs nav-justified" id="switcher-main-tab" role="tablist">
                            <button className="nav-link active" id="switcher-home-tab" data-bs-toggle="tab" data-bs-target="#switcher-home" type="button" role="tab" aria-controls="switcher-home" aria-selected="true">Theme Styles</button>
                            <button className="nav-link" id="switcher-profile-tab" data-bs-toggle="tab" data-bs-target="#switcher-profile" type="button" role="tab" aria-controls="switcher-profile" aria-selected="false" tabIndex="-1">Theme Colors</button>
                        </div>
                    </nav>
                </div>
                <div className="offcanvas-body">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active border-0" id="switcher-home" role="tabpanel" aria-labelledby="switcher-home-tab" tabIndex="0">
                            <div className="">
                                <p className="switcher-style-head">Theme Color Mode:</p>
                                <div className="row switcher-style gx-0">
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-light-theme">
                                                Light
                                            </label>
                                            <input className="form-check-input" type="radio" name="theme-style" id="switcher-light-theme" defaultChecked />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-dark-theme">
                                                Dark
                                            </label>
                                            <input className="form-check-input" type="radio" name="theme-style" id="switcher-dark-theme" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="switcher-style-head">Directions:</p>
                                <div className="row switcher-style gx-0">
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-ltr">
                                                LTR
                                            </label>
                                            <input className="form-check-input" type="radio" name="direction" id="switcher-ltr" defaultChecked />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-rtl">
                                                RTL
                                            </label>
                                            <input className="form-check-input" type="radio" name="direction" id="switcher-rtl" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="switcher-style-head">Navigation Styles:</p>
                                <div className="row switcher-style gx-0">
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-vertical">
                                                Vertical
                                            </label>
                                            <input className="form-check-input" type="radio" name="navigation-style" id="switcher-vertical" defaultChecked />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-horizontal">
                                                Horizontal
                                            </label>
                                            <input className="form-check-input" type="radio" name="navigation-style" id="switcher-horizontal" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="navigation-menu-styles">
                                <p className="switcher-style-head">Vertical &amp; Horizontal Menu Styles:</p>
                                <div className="row switcher-style gx-0 pb-2 gy-2">
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-menu-click">
                                                Menu Click
                                            </label>
                                            <input className="form-check-input" type="radio" name="navigation-menu-styles" id="switcher-menu-click" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-menu-hover">
                                                Menu Hover
                                            </label>
                                            <input className="form-check-input" type="radio" name="navigation-menu-styles" id="switcher-menu-hover" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-icon-click">
                                                Icon Click
                                            </label>
                                            <input className="form-check-input" type="radio" name="navigation-menu-styles" id="switcher-icon-click" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-icon-hover">
                                                Icon Hover
                                            </label>
                                            <input className="form-check-input" type="radio" name="navigation-menu-styles" id="switcher-icon-hover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sidemenu-layout-styles">
                                <p className="switcher-style-head">Sidemenu Layout Styles:</p>
                                <div className="row switcher-style gx-0 pb-2 gy-2">
                                    <div className="col-sm-6">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-default-menu">
                                                Default Menu
                                            </label>
                                            <input className="form-check-input" type="radio" name="sidemenu-layout-styles" id="switcher-default-menu" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-closed-menu">
                                                Closed Menu
                                            </label>
                                            <input className="form-check-input" type="radio" name="sidemenu-layout-styles" id="switcher-closed-menu" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-icontext-menu">
                                                Icon Text
                                            </label>
                                            <input className="form-check-input" type="radio" name="sidemenu-layout-styles" id="switcher-icontext-menu" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-icon-overlay">
                                                Icon Overlay
                                            </label>
                                            <input className="form-check-input" type="radio" name="sidemenu-layout-styles" id="switcher-icon-overlay" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-detached">
                                                Detached
                                            </label>
                                            <input className="form-check-input" type="radio" name="sidemenu-layout-styles" id="switcher-detached" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-double-menu">
                                                Double Menu
                                            </label>
                                            <input className="form-check-input" type="radio" name="sidemenu-layout-styles" id="switcher-double-menu" defaultChecked />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="switcher-style-head">Page Styles:</p>
                                <div className="row switcher-style gx-0">
                                    <div className="col-xl-3 col-6">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-regular">
                                                Regular
                                            </label>
                                            <input className="form-check-input" type="radio" name="page-styles" id="switcher-regular" />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-6">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-classic">
                                                Classic
                                            </label>
                                            <input className="form-check-input" type="radio" name="page-styles" id="switcher-classic" />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-6">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-modern">
                                                Modern
                                            </label>
                                            <input className="form-check-input" type="radio" name="page-styles" id="switcher-modern" />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-6">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-flat">
                                                Flat
                                            </label>
                                            <input className="form-check-input" type="radio" name="page-styles" id="switcher-flat" defaultChecked />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="switcher-style-head">Layout Width Styles:</p>
                                <div className="row switcher-style gx-0">
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-default-width">
                                                Default
                                            </label>
                                            <input className="form-check-input" type="radio" name="layout-width" id="switcher-default-width" />
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-full-width">
                                                Full Width
                                            </label>
                                            <input className="form-check-input" type="radio" name="layout-width" id="switcher-full-width" defaultChecked />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-boxed">
                                                Boxed
                                            </label>
                                            <input className="form-check-input" type="radio" name="layout-width" id="switcher-boxed" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="switcher-style-head">Menu Positions:</p>
                                <div className="row switcher-style gx-0">
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-menu-fixed">
                                                Fixed
                                            </label>
                                            <input className="form-check-input" type="radio" name="menu-positions" id="switcher-menu-fixed" defaultChecked />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-menu-scroll">
                                                Scrollable
                                            </label>
                                            <input className="form-check-input" type="radio" name="menu-positions" id="switcher-menu-scroll" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="switcher-style-head">Header Positions:</p>
                                <div className="row switcher-style gx-0">
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-header-fixed">
                                                Fixed
                                            </label>
                                            <input className="form-check-input" type="radio" name="header-positions" id="switcher-header-fixed" defaultChecked />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-header-scroll">
                                                Scrollable
                                            </label>
                                            <input className="form-check-input" type="radio" name="header-positions" id="switcher-header-scroll" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className="switcher-style-head">Loader:</p>
                                <div className="row switcher-style gx-0">
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-loader-enable">
                                                Enable
                                            </label>
                                            <input className="form-check-input" type="radio" name="page-loader" id="switcher-loader-enable" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-check switch-select">
                                            <label className="form-check-label" htmlFor="switcher-loader-disable">
                                                Disable
                                            </label>
                                            <input className="form-check-input" type="radio" name="page-loader" id="switcher-loader-disable" defaultChecked />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade border-0" id="switcher-profile" role="tabpanel" aria-labelledby="switcher-profile-tab" tabIndex="0">
                            <div>
                                <div className="theme-colors">
                                    <p className="switcher-style-head">Menu Colors:</p>
                                    <div className="d-flex switcher-style pb-2">
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-white" data-bs-toggle="tooltip" data-bs-placement="top" type="radio" name="menu-colors" id="switcher-menu-light" defaultChecked aria-label="Light Menu" data-bs-original-title="Light Menu" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-dark" data-bs-toggle="tooltip" data-bs-placement="top" type="radio" name="menu-colors" id="switcher-menu-dark" aria-label="Dark Menu" data-bs-original-title="Dark Menu" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-primary" data-bs-toggle="tooltip" data-bs-placement="top" type="radio" name="menu-colors" id="switcher-menu-primary" aria-label="Color Menu" data-bs-original-title="Color Menu" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-gradient" data-bs-toggle="tooltip" data-bs-placement="top" type="radio" name="menu-colors" id="switcher-menu-gradient" aria-label="Gradient Menu" data-bs-original-title="Gradient Menu" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-transparent" data-bs-toggle="tooltip" data-bs-placement="top" type="radio" name="menu-colors" id="switcher-menu-transparent" aria-label="Transparent Menu" data-bs-original-title="Transparent Menu" />
                                        </div>
                                    </div>
                                    <div className="px-4 pb-3 text-muted fs-11">Note:If you want to change color Menu dynamically change
                                        from below Theme Primary color picker</div>
                                </div>
                                <div className="theme-colors">
                                    <p className="switcher-style-head">Header Colors:</p>
                                    <div className="d-flex switcher-style pb-2">
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-white" data-bs-toggle="tooltip" data-bs-placement="top" type="radio" name="header-colors" id="switcher-header-light" aria-label="Light Header" data-bs-original-title="Light Header" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-dark" data-bs-toggle="tooltip" data-bs-placement="top" type="radio" name="header-colors" id="switcher-header-dark" aria-label="Dark Header" data-bs-original-title="Dark Header" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-primary" data-bs-toggle="tooltip" data-bs-placement="top" type="radio" name="header-colors" id="switcher-header-primary" aria-label="Color Header" data-bs-original-title="Color Header" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-gradient" data-bs-toggle="tooltip" data-bs-placement="top" type="radio" name="header-colors" id="switcher-header-gradient" aria-label="Gradient Header" data-bs-original-title="Gradient Header" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-transparent" data-bs-toggle="tooltip" data-bs-placement="top" type="radio" name="header-colors" id="switcher-header-transparent" defaultChecked aria-label="Transparent Header" data-bs-original-title="Transparent Header" />
                                        </div>
                                    </div>
                                    <div className="px-4 pb-3 text-muted fs-11">Note:If you want to change color Header dynamically
                                        change from below Theme Primary color picker</div>
                                </div>
                                <div className="theme-colors">
                                    <p className="switcher-style-head">Theme Primary:</p>
                                    <div className="d-flex flex-wrap align-items-center switcher-style">
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-primary-1" type="radio" name="theme-primary" id="switcher-primary" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-primary-2" type="radio" name="theme-primary" id="switcher-primary1" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-primary-3" type="radio" name="theme-primary" id="switcher-primary2" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-primary-4" type="radio" name="theme-primary" id="switcher-primary3" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-primary-5" type="radio" name="theme-primary" id="switcher-primary4" />
                                        </div>
                                        <div className="form-check switch-select ps-0 mt-1 color-primary-light">
                                            <div className="theme-container-primary"><button className="">nano</button></div>
                                            <div className="pickr-container-primary" onChange={(event) => window.updateChartColor(event.target.value)}><div className="pickr">

                                                <button type="button" className="pcr-button" role="button" aria-label="toggle color picker dialog" style={{ '--pcr-color': 'rgba(152, 95, 253, 1)' }}></button>

                                            </div></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="theme-colors">
                                    <p className="switcher-style-head">Theme Background:</p>
                                    <div className="d-flex flex-wrap align-items-center switcher-style">
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-bg-1" type="radio" name="theme-background" id="switcher-background" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-bg-2" type="radio" name="theme-background" id="switcher-background1" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-bg-3" type="radio" name="theme-background" id="switcher-background2" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-bg-4" type="radio" name="theme-background" id="switcher-background3" />
                                        </div>
                                        <div className="form-check switch-select me-3">
                                            <input className="form-check-input color-input color-bg-5" type="radio" name="theme-background" id="switcher-background4" />
                                        </div>
                                        <div className="form-check switch-select ps-0 mt-1 tooltip-static-demo color-bg-transparent">
                                            <div className="theme-container-background"><button>nano</button></div>
                                            <div className="pickr-container-background"><div className="pickr">

                                                <button type="button" className="pcr-button" role="button" aria-label="toggle color picker dialog" style={{ '--pcr-color': 'rgba(152, 95, 253, 1)' }}></button>

                                            </div></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu-image mb-3">
                                    <p className="switcher-style-head">Menu With Background Image:</p>
                                    <div className="d-flex flex-wrap align-items-center switcher-style">
                                        <div className="form-check switch-select menu-img-select m-2">
                                            <input className="form-check-input bgimage-input bg-img1" type="radio" name="menu-background" id="switcher-bg-img" />
                                            <div className="bg-img-container">
                                                <img src="/assets/dashboard/bg-img1.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="form-check switch-select menu-img-select m-2">
                                            <input className="form-check-input bgimage-input bg-img2" type="radio" name="menu-background" id="switcher-bg-img1" />
                                            <div className="bg-img-container">
                                                <img src="/assets/dashboard/bg-img2.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="form-check switch-select menu-img-select m-2">
                                            <input className="form-check-input bgimage-input bg-img3" type="radio" name="menu-background" id="switcher-bg-img2" />
                                            <div className="bg-img-container">
                                                <img src="/assets/dashboard/bg-img3.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="form-check switch-select menu-img-select m-2">
                                            <input className="form-check-input bgimage-input bg-img4" type="radio" name="menu-background" id="switcher-bg-img3" />
                                            <div className="bg-img-container">
                                                <img src="/assets/dashboard/bg-img4.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="form-check switch-select menu-img-select m-2">
                                            <input className="form-check-input bgimage-input bg-img5" type="radio" name="menu-background" id="switcher-bg-img4" />
                                            <div className="bg-img-container">
                                                <img src="/assets/dashboard/bg-img5.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Switcher */}
        </>
    );
};

export default DashboardSwitcher;
