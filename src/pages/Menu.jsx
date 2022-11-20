import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Menus from '../components/Menus';
import MobileNav from '../components/MobileNav';

function Menu() {
  return (
    <div>
      <div className="menu mb-44">
        <Header />
        <MobileNav />
        <div className="mt-80 md:mt-52 flex flex-col place-items-center gap-4">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold">
            Specialties
          </h1>
          <Link to="/" className="text-2xl text-white font-semibold">
            Home
          </Link>
        </div>
      </div>
      <Menus />
      <Footer />
    </div>
  );
}

export default Menu;
