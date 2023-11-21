import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './path-to-cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
