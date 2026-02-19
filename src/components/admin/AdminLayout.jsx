import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import DashboardFooter from '../dashboard/DashboardFooter';
import { useAdminAuth } from '../../context/AdminAuthContext';

const AdminLayout = () => {
    const { isAuthenticated } = useAdminAuth();
    const [isLoading, setIsLoading] = useState(true);

    if (!isAuthenticated) {
        return <Navigate to="/master-key/login" replace />;
    }

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
                    loadScript('/assets/dashboard/js/select2(2).min.js'),
                    loadScript('/assets/dashboard/js/select2.js'),
                ]);

                // Load switching script last
                await loadScript('/assets/dashboard/js/custom-switcher.min.js');

            } catch (error) {
                console.error("Failed to load dashboard assets", error);
            } finally {
                setIsLoading(false);
            }
        };

        loadDashboardAssets();

        return () => {
            // Cleanup if needed, though usually better to let generic styles persist or specific cleanup
            // Removing 'dashboard-style' classes on unmount might cause FOUC if navigating between admin/dashboard
        };
    }, []);

    return (
        <div className="page">
            <AdminHeader />
            <AdminSidebar />
            <div className="main-content app-content">
                {!isLoading && <Outlet />}
            </div>
            <DashboardFooter />
        </div>
    );
};

export default AdminLayout;
