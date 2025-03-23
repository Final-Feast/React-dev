// authSlice.js: Kullanıcının giriş/çıkış işlemleri ve token yönetimi için Redux slice’ı.

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  dailyRate: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
    },
    kcalKeeper: (state, action) => {
      state.dailyRate = action.payload.dailyRate;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { loginSuccess, logout, setUser, kcalKeeper, setIsAuthenticated } =
  authSlice.actions;
export default authSlice.reducer;
