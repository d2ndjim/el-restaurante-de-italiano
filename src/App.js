/* eslint-disable import/no-named-as-default */
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Aos from 'aos';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoutes from './config/ProtectedRoutes';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import 'aos/dist/aos.css';
import CartProvider from './CartContext';
import CartModal from './components/Shared/CartModal';

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home handleShow={handleShow} />} />
            <Route
              path="/contact"
              element={<Contact handleShow={handleShow} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/menu" element={<Menu handleShow={handleShow} />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
      <CartModal show={show} handleClose={handleClose} />
    </CartProvider>
  );
}

export default App;
