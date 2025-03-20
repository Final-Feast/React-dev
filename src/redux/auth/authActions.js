// authActions.js: Login ve register API isteklerini yöneten fonksiyonlar.

import axios from "axios";
import { loginSuccess, logout } from "./authSlice";

const API_URL = "/api/auth";

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    dispatch(
      loginSuccess({
        user: { name: response.data.name, email: response.data.email },
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      })
    );
  } catch (error) {
    console.error("Login error:", error);
  }
};

export const register = (name, email, password) => async () => {
  try {
    await axios.post(`${API_URL}/register`, { name, email, password });
  } catch (error) {
    console.error("Register error:", error);
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch(logout());
};
