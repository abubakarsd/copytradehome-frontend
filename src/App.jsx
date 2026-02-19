import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import AuthLayout from './components/AuthLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import VerifyEmail from './pages/VerifyEmail';
import ForgotPassword from './pages/ForgotPassword';
import About from './pages/About';
import Contact from './pages/Contact';
import HowItWorks from './pages/HowItWorks';
import CopyTrading from './pages/CopyTrading';
import Crypto from './pages/Crypto';
import Gold from './pages/Gold';
import Stocks from './pages/Stocks';
import GreenEnergy from './pages/GreenEnergy';
import Dashboard from './pages/Dashboard';
import DashboardPortfolio from './components/dashboard/DashboardPortfolio';
import DashboardCrypto from './components/dashboard/DashboardCrypto';
import DashboardCopyTrading from './components/dashboard/DashboardCopyTrading';
import DashboardCryptoTrade from './components/dashboard/DashboardCryptoTrade';
import DashboardDeposit from './components/dashboard/DashboardDeposit';
import DashboardWithdraw from './components/dashboard/DashboardWithdraw';
import DashboardWithdrawHistory from './components/dashboard/DashboardWithdrawHistory';
import DashboardCopyTradingHistory from './components/dashboard/DashboardCopyTradingHistory';
import DashboardStocks from './components/dashboard/DashboardStocks';
import DashboardStockDetails from './components/dashboard/DashboardStockDetails';
import Assets from './pages/Assets';
import Signals from './pages/Signals';
import LiveTrading from './pages/LiveTrading';
import ConnectWallet from './pages/ConnectWallet';
import ReferralLink from './pages/ReferralLink';
import ReferralTree from './pages/ReferralTree';
import Profile from './pages/Profile';
import ProfilePassword from './pages/ProfilePassword';
import ProfileNotifications from './pages/ProfileNotifications';
import ProfileWallets from './pages/ProfileWallets';

import CopyExpertPage from './pages/CopyExpertPage';
import CopyExpertDetailsPage from './pages/CopyExpertDetailsPage';

// Admin Imports
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminWallets from './pages/admin/AdminWallets';
import AdminTradeHistory from './pages/admin/AdminTradeHistory';
import AdminUsers from './pages/admin/AdminUsers';
import AdminDeposits from './pages/admin/AdminDeposits';
import AdminWithdrawals from './pages/admin/AdminWithdrawals';
import AdminCopyTrading from './pages/admin/AdminCopyTrading';
import AdminSignals from './pages/admin/AdminSignals';
import AdminLogin from './pages/admin/AdminLogin';

import { AdminAuthProvider } from './context/AdminAuthContext';
// import Faq from './pages/Faq'; // Not found
// import Terms from './pages/Terms'; // Not found
// import Privacy from './pages/Privacy'; // Not found
// import TradingRules from './pages/TradingRules'; // Not found
// import Disclosure from './pages/Disclosure'; // Not found
import Layout from './components/Layout';

import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  useEffect(() => {

    AOS.init({
      duration: 1000,
      once: true,
    });

    // Theme initialization
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('is_light');
      document.body.classList.remove('is_dark');
      document.documentElement.setAttribute('data-theme-mode', 'light');
    } else {
      // Default to dark if not set or explicitly dark
      document.body.classList.add('is_dark');
      document.body.classList.remove('is_light');
      document.documentElement.setAttribute('data-theme-mode', 'dark');
    }
  }, []);

  return (
    <BrowserRouter>
      <AdminAuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/faq" element={<Faq />} /> */}
            {/* <Route path="/terms" element={<Terms />} /> */}
            {/* <Route path="/privacy" element={<Privacy />} /> */}
            {/* <Route path="/trading-rules" element={<TradingRules />} /> */}
            {/* <Route path="/disclosure" element={<Disclosure />} /> */}

            <Route path="/copy-trading" element={<CopyTrading />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/gold" element={<Gold />} />
            <Route path="/stocks" element={<Stocks />} />
            <Route path="/green-energy" element={<GreenEnergy />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
          </Route>

          {/* Auth Routes - Isolated from site Header/Footer */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* <Route path="/reset-password" element={<ResetPassword />} /> */}

          {/* Protected User Routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardPortfolio />} />
            <Route path="crypto" element={<DashboardCrypto />} />
            <Route path="stocks" element={<DashboardStocks />} />
            <Route path="crypto-trade" element={<DashboardCryptoTrade />} />
            <Route path="deposit" element={<DashboardDeposit />} />
            <Route path="withdraw" element={<DashboardWithdraw />} />
            <Route path="withdraw/history" element={<DashboardWithdrawHistory />} />
            <Route path="copy-trading-dashboard" element={<DashboardCopyTrading />} />
            <Route path="copy-trading" element={<DashboardCopyTrading />} />
            <Route path="copy-trading/history" element={<DashboardCopyTradingHistory />} />
            <Route path="assets" element={<Assets />} />
            <Route path="signals" element={<Signals />} />
            <Route path="live-trading" element={<LiveTrading />} />
            <Route path="connect-wallet" element={<ConnectWallet />} />
            <Route path="referral" element={<ReferralLink />} />
            <Route path="referral-tree" element={<ReferralTree />} />
            <Route path="copy-experts" element={<CopyExpertPage />} />
            <Route path="copy-experts/:id" element={<CopyExpertDetailsPage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profile/password" element={<ProfilePassword />} />
            <Route path="profile/notifications" element={<ProfileNotifications />} />
            <Route path="profile/wallets" element={<ProfileWallets />} />
          </Route>

          {/* Admin Auth Route */}
          <Route path="/master-key/login" element={<AdminLogin />} />

          {/* Admin Routes */}
          <Route path="/master-key" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="wallets" element={<AdminWallets />} />
            <Route path="trade-history" element={<AdminTradeHistory />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="deposits" element={<AdminDeposits />} />
            <Route path="withdrawals" element={<AdminWithdrawals />} />
            <Route path="copy-trading" element={<AdminCopyTrading />} />
            <Route path="signals" element={<AdminSignals />} />
          </Route>
        </Routes>
      </AdminAuthProvider>
    </BrowserRouter>
  );
}

export default App;
