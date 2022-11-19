import axios from 'axios';

const API_URL = 'http://localhost:3000/signup';

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post('http://localhost:3000/login', userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
    window.location.reload();
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem('user');
  window.location.reload();
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
