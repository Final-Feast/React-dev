import { createAsyncThunk } from '@reduxjs/toolkit';


const URL = "http://localhost:3000"

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${URL}/api/products`);
      if (!response.ok) {
        throw new Error('Veri alınamadı');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
