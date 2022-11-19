import axios from '../../config/axios';

const API_URL = 'http://localhost:3000/orders';

const order = async (id) => {
  const response = await axios.post(API_URL, { menu_id: id });
  return response.data;
};

const orderService = {
  order,
};

export default orderService;
