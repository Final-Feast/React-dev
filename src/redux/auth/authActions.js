// authActions.js: Login ve register API isteklerini yöneten fonksiyonlar.

import axios from "axios";
import { loginSuccess, logout, setUser } from "./authSlice";

const API_URL = "http://localhost:3000/api/auth";

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    await dispatch(
      loginSuccess({
        user: { name: response.data.name, email: response.data.email },
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      })
    );
    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
  } catch (error) {
    console.error("Login error:", error);
  }
};

export const getUser = (token) => async (dispatch) => {
  try {
    if (!token) {
      return { success: false };
    }

    const response = await axios.get(`${API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200 || response.status === 201) {
      const userData = response.data.data || response.data;
      dispatch(
        setUser({
          user: { 
            name: userData.name, 
            email: userData.email 
          },
            
        })
      );
      return { success: true };
    }
    return { success: false };
  } catch (error) {
    console.error("Kullanıcı bilgisi alma hatası:", error);
    if (error.response && error.response.status === 401) {
      dispatch(logout());
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }
    return { success: false, error };
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
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  dispatch(logout());
};
