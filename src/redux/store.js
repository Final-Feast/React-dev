// store.js: Redux store’unu ve reducer’ları birleştiren dosya.

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import diaryReducer from './diary/diarySlice';
import productsReducer from "./products/productsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    diary: diaryReducer,
    products: productsReducer
  },
});

export default store; // Default export yaptık ✅
