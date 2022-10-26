import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
// import Header from './components/Header';
import ProtectedRoutes from './config/ProtectedRoutes';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Orders from './pages/Orders';

function App() {
  return (
    <>
      <Router>
        <div className="app">
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/menu" element={<Menu />} />
              <Route path="/orders" element={<Orders />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
