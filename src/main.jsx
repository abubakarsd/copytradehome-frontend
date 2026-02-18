import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import Bootstrap global css
import './assets/css/bootstrap.min.css';
import './App.css';
import './assets/css/fonts.css';
import './assets/css/swiper-bundle.min.css';
import './assets/css/magnific-popup.min.css';
// import './assets/css/styles__ltr.css'; // Checking if this is needed, likely contains general overrides
// Custom CSS will be imported in specific pages/layouts
import './assets/css/home.css';
// import './assets/css/auth.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>,
);
