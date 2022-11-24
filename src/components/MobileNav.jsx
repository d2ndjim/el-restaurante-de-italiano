import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { logout, reset } from '../features/auth/authSlice';

function MobileNav() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    window.location.reload();
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      <nav className="text-white bg-[#000000]">
        <div className="flex justify-between items-center p-4">
          <h3 className="text-2xl md:text-3xl font-extrabold">Feliciano</h3>
          <button type="button" onClick={handleNav}>
            <AiOutlineMenu
              size={25}
              className="text-[#808291] font-bold"
            />
          </button>
        </div>
        {isOpen && (
          <div data-aos="fade-down">
            <ul className="flex flex-col text-[#808291] gap-4 ml-4 text-lg font-medium pb-2">
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
        )}
      </nav>
    </div>
  );
}

export default MobileNav;
