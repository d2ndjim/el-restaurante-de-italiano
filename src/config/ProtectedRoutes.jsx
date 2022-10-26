import { Outlet } from 'react-router-dom';
import Login from '../pages/Login';
// import Register from '../pages/Register';

const useAuth = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    return user;
  }
  return null;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;
