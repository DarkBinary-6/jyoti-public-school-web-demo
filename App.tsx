import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Outlet, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Academics from './pages/Academics';
import Infrastructure from './pages/Infrastructure';
import Fees from './pages/Fees';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Disclosure from './pages/Disclosure';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Routes>
           {/* Admin Routes */}
           <Route path="/admin" element={<AdminLogin />} />
           <Route path="/admin/dashboard" element={<AdminDashboard />} />
           
           {/* Public Routes wrapped in Layout */}
           <Route element={<MainLayout />}>
             <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/admissions" element={<Admissions />} />
             <Route path="/academics" element={<Academics />} />
             <Route path="/infrastructure" element={<Infrastructure />} />
             <Route path="/fees" element={<Fees />} />
             <Route path="/gallery" element={<Gallery />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/disclosure" element={<Disclosure />} />
             {/* Fallback route */}
             <Route path="*" element={<Navigate to="/" replace />} />
           </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;