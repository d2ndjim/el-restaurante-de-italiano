/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useContext } from 'react';
import { HiOutlinePhone } from 'react-icons/hi';
import { CiMail } from 'react-icons/ci';
// import { Modal } from 'react-bootstrap';
import { logout, reset } from '../../features/auth/authSlice';
import { CartContext } from '../../CartContext';

function Header({ handleShow }) {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const cart = useContext(CartContext);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0,
  );

  return (
    <header className="hidden lg:block">
      <div className="top-header flex justify-between text-[#A1A1A2] px-36 py-4 font-bold">
        <div className="flex gap-2 items-center">
          <HiOutlinePhone className="text-2xl font-bold" />
          <a id="phone" href="tel:09098760067">
            <p className="font-bold">+234 90 9876 0067</p>
          </a>
        </div>
        <div className="flex gap-2 items-center">
          <CiMail className="text-2xl" />
          <a id="email" href="mailto:someone@abc.com">
            elrestaurante@email.com
          </a>
        </div>
        <p>Open hours: Monday - Sunday 8:00AM - 9:00PM</p>
      </div>
      <nav className="flex justify-between items-center px-24 py-8 text-white">
        <h3 className="text-2xl font-extrabold">Feliciano</h3>
        <ul className="flex gap-x-12 text-lg font-semibold">
          {user ? (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li className="border-solid border-1 bg-[#C8A97E] px-8 py-1 self-center rounded-lg text-center">
                <button type="button" onClick={handleShow}>
                  Cart (
                  {productsCount}
                  {' '}
                  Items)
                </button>
              </li>
              <li className="border-solid border-1 bg-[#C8A97E] px-8 py-1 self-center rounded-lg text-center">
                <button type="button" onClick={onLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li className="border-solid border-1 bg-[#C8A97E] px-8 py-1 self-center rounded-lg text-center">
                <button type="button" onClick={handleShow}>
                  Cart (
                  {productsCount}
                  {' '}
                  Items)
                </button>
              </li>
              <li className="border-solid border-1 bg-[#C8A97E] px-8 py-1 self-center rounded-lg">
                <Link to="/login">Login</Link>
              </li>
              <li className="border-solid border-1 bg-[#C8A97E] px-8 py-1 self-center rounded-lg">
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
