import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import menuReducer from '../features/menu/menuSlice';
import orderReducer from '../features/order/orderSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    homeMenu: menuReducer,
    order: orderReducer,
  },
});

export default store;
