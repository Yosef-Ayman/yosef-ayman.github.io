import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';

export default function AppLayout() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Outlet key={location.pathname} />
      </AnimatePresence>
      <Footer />
    </>
  );
}
