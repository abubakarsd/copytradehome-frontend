import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSwitcher from '../components/dashboard/DashboardSwitcher';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardFooter from '../components/dashboard/DashboardFooter';
import DashboardModals from '../components/dashboard/DashboardModals';

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Set HTML attributes
        const html = document.documentElement;
        html.setAttribute('data-nav-layout', 'vertical');
        const savedTheme = localStorage.getItem('theme') || 'dark';
        html.setAttribute('data-theme-mode', savedTheme);
        html.setAttribute('data-header-styles', 'transparent');
        html.setAttribute('data-width', 'fullwidth');
        html.setAttribute('data-menu-styles', 'transparent');
        html.setAttribute('data-page-style', 'flat');
        html.setAttribute('data-vertical-style', 'defaultmenu');

        // Function to load scripts dynamically
        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                if (document.querySelector(`script[src="${src}"]`)) {
                    resolve();
                    return;
                }
                const script = document.createElement('script');
                script.src = src;
                script.className = 'dashboard-script';
                script.async = true;
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });
        };

        const loadDashboardAssets = async () => {
            try {
                // Add Dashboard CSS
                const cssFiles = [
                    '/assets/dashboard/css/bootstrap.min.css',
                    '/assets/dashboard/css/styles.css?v=3',
                    '/assets/dashboard/css/icons.css',
                    '/assets/dashboard/css/waves.min.css',
                    '/assets/dashboard/css/simplebar.min.css',
                    '/assets/dashboard/css/flatpickr.min.css',
                    '/assets/dashboard/css/nano.min.css',
                    '/assets/dashboard/css/choices.min.css',
                    '/assets/dashboard/css/autoComplete.css',
                    '/assets/dashboard/css/toastify.css',
                    '/assets/dashboard/css/swiper-bundle.min.css',
                    '/assets/dashboard/css/select2.min.css',
                    '/assets/dashboard/css/ckeditor5.css',
                    '/assets/dashboard/css/jquery.dataTables.css',
                    '/assets/dashboard/css/select2(1).min.css',
                    '/assets/dashboard/css/boxicons.min.css',
                    '/assets/dashboard/css/bootstrap-icons.css',
                    '/assets/dashboard/css/ckeditor-styles.css',
                    '/assets/dashboard/css/custom-dashboard.css',
                    '/assets/dashboard/css/overrides.css'
                ];

                cssFiles.forEach(href => {
                    if (!document.querySelector(`link[href="${href}"]`)) {
                        const link = document.createElement('link');
                        link.rel = 'stylesheet';
                        link.href = href;
                        link.className = 'dashboard-style';
                        document.head.appendChild(link);
                    }
                });

                // Load Scripts
                // JQuery and Bootstrap first
                await loadScript('/assets/js/jquery-3.6.1.min.js');
                await loadScript('/assets/js/bootstrap.bundle.min.js');

                // Core libs
                await Promise.all([
                    loadScript('/assets/dashboard/js/simplebar.min.js'),
                    loadScript('/assets/dashboard/js/waves.min.js'),
                    loadScript('/assets/dashboard/js/popper.min.js'),
                    loadScript('/assets/dashboard/js/sticky.js'),
                ]);

                // Additional libs
                await Promise.all([
                    loadScript('/assets/dashboard/js/defaultmenu.min.js'),
                    loadScript('/assets/dashboard/js/autoComplete.min.js'),
                    loadScript('/assets/dashboard/js/pickr.es5.min.js'),
                    loadScript('/assets/dashboard/js/flatpickr.min.js'),
                    loadScript('/assets/dashboard/js/apexcharts.min.js'),
                    loadScript('/assets/js/swiper-bundle.min.js'),
                    loadScript('/assets/dashboard/js/toasts.js'),
                    loadScript('/assets/dashboard/js/tv.js'),
                ]);

                // Order matters for some plugins
                await loadScript('/assets/dashboard/js/select2(2).min.js');
                await loadScript('/assets/dashboard/js/select2.js');

                setIsLoading(false);

                // Custom scripts (might rely on above)
                await loadScript('/assets/dashboard/js/custom.js');
                await loadScript('/assets/dashboard/js/custom-switcher.min.js');

            } catch (error) {
                console.error("Failed to load dashboard assets", error);
                setIsLoading(false);
            } finally {
                // Done
            }
        };

        loadDashboardAssets();

        // Global functions if needed
        window.openFullscreen = () => {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            }
        };

        return () => {
            // Cleanup attributes
            html.removeAttribute('data-nav-layout');
            // We generally don't remove styles/scripts on unmount in a chaotic way to avoid FOUC if navigating back/forth quickly, 
            // but strict cleanup helps isolation.
            document.querySelectorAll('.dashboard-style').forEach(el => el.remove());
            document.querySelectorAll('.dashboard-script').forEach(el => el.remove());

            const savedTheme = localStorage.getItem('theme') || 'dark';
            html.setAttribute('data-theme-mode', savedTheme);
        };
    }, []);

    return (
        <div className="page">
            <DashboardSwitcher />
            <DashboardHeader />
            <DashboardSidebar />
            <div className="main-content app-content">
                {/* Provide a container or just render outlet if page handles its own container */}
                {!isLoading && <Outlet />}
            </div>
            <DashboardFooter />
            <DashboardModals />
        </div>
    );
};

export default Dashboard;
