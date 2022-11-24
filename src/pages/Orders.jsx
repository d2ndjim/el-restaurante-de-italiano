import { Link } from 'react-router-dom';
import Order from '../components/MenuOrders/Orders';
import Header from '../components/Shared/Header';
import MobileNav from '../components/Shared/MobileNav';

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
            Your Orders
          </h1>
          <Link to="/menu" className="text-2xl text-white font-semibold">
            Menu
          </Link>
        </div>
      </div>
      <Order />
    </div>
  );
}

export default Orders;
