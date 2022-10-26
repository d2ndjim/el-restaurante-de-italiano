import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { HiOutlinePhone } from 'react-icons/hi';
import { CiMail } from 'react-icons/ci';
import { logout, reset } from '../features/auth/authSlice';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <header className="">
      <div className="top-header hidden md:flex md:justify-between md:text-[#A1A1A2] md:px-36 md:py-4 md:font-bold">
        <div className="flex gap-2 items-center">
          <HiOutlinePhone className="text-2xl" />
          <a id="phone" href="tel:09098760067">
            <p>+234 90 9876 0067</p>
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
      <nav className="hidden md:flex md:gap-x-96 md:items-center md:px-36 md:py-8 md:text-white">
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
                <Link to="/orders">My Orders</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <button type="button" onClick={onLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div className="md:hidden">
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
                <Link to="/orders">My Orders</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <button type="button" onClick={onLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Header;