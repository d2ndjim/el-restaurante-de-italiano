import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import menuReducer from '../features/menu/menuSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    homeMenu: menuReducer,
  },
});

export default store;
