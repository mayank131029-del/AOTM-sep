import { Outlet, useLocation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Root() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div style={{ background: '#F5F7F0', minHeight: '100vh' }}>
      <Navbar transparent={isHome} />
      <Outlet />
      <Footer />
    </div>
  );
}
