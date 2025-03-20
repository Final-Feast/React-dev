// diarySlice.js: Günlük (diary) ile ilgili Redux state’i.

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  diaryEntries: [],
  loading: false,
};

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    setEntries: (state, action) => {
      state.diaryEntries = action.payload;
    },
    addEntry: (state, action) => {
      state.diaryEntries.push(action.payload);
    },
    removeEntry: (state, action) => {
      state.diaryEntries = state.diaryEntries.filter(
        (entry) => entry.id !== action.payload
      );
    },
  },
});

export const { setEntries, addEntry, removeEntry } = diarySlice.actions;
export default diarySlice.reducer;
