import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import useSmoothScroll from '../../hooks/useSmoothScroll';
import Background3D from '../3d/Background3D';

const Layout = () => {
  useSmoothScroll();

  return (
    <div className="relative min-h-screen">
      <Background3D />
      <Navbar />
      <main className="relative z-10 pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
