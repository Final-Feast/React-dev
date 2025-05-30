import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://diary-list-node-api.onrender.com/api/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${URL}/1`);
      if (!response.ok) {
        throw new Error("Veri alınamadı");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const filterProductsByText = createAsyncThunk(
  "products/getProductsByText",
  async (searchText, thunkAPI) => {
    try {
      const response = await fetch(
        `${URL}/search?q=${encodeURIComponent(searchText)}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(errorData);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
