import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productsOperation";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  randomNotAllowedFoods: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setNotAllowedFoods: (state, action) => {
      state.randomNotAllowedFoods = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setNotAllowedFoods } = productsSlice.actions;

export default productsSlice.reducer;
