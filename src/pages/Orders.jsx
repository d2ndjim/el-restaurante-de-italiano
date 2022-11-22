import { Link } from 'react-router-dom';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';

function Orders() {
  return (
    <div>
      <div className="menu">
        <Header />
        <MobileNav />
        <div
          className="mt-80 md:mt-52 flex flex-col place-items-center gap-4"
          data-aos="fade-up"
        >
          <h1 className="text-white text-5xl md:text-7xl font-extrabold">
            Contact us
          </h1>
          <Link to="/menu" className="text-2xl text-white font-semibold">
            Menu
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Orders;
