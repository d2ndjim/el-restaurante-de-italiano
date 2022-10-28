import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { logout, reset } from '../features/auth/authSlice';

function MobileNav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <nav className="text-white bg-[#000000]">
        <div className="flex justify-between items-center p-4">
          <h3 className="text-2xl font-extrabold">Feliciano</h3>
          <button type="button" onClick={handleNav}>
            <AiOutlineMenu
              size={25}
              className="text-[#808291] font-extrabold"
            />
          </button>
        </div>
        {isOpen && (
          <div
            className={`${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            } ease-in-out duration-300`}
          >
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
