import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import menuReducer from '../features/menu/homeMenuSlice';
import orderReducer from '../features/order/orderSlice';
import vegetarianReducer from '../features/menu/vegetarianSlice';
import nonVegetarianReducer from '../features/menu/nonVegetarianSlice';
import dessertReducer from '../features/menu/dessertSlice';
import wineReducer from '../features/menu/wineSlice';
import drinkReducer from '../features/menu/drinkSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    homeMenu: menuReducer,
    order: orderReducer,
    vegetarian: vegetarianReducer,
    nonVegetarian: nonVegetarianReducer,
    dessert: dessertReducer,
    wine: wineReducer,
    drink: drinkReducer,
  },
});

export default store;
