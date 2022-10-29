import axios from 'axios';

const API_URL = 'http://localhost:3000/home_menu';

const fetchHomeMenu = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const menuService = {
  fetchHomeMenu,
};

export default menuService;
