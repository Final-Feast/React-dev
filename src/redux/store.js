// store.js: Redux store’unu ve reducer’ları birleştiren dosya.

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import diaryReducer from './diary/diarySlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    diary: diaryReducer,
  },
});

export default store; // Default export yaptık ✅
