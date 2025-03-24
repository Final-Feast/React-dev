// diarySlice.js: Günlük (diary) ile ilgili Redux state’i.

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  diaryEntries: [],
  date: null,
  summary: null,
  loading: false,
};

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    setEntries: (state, action) => {
      state.diaryEntries = action.payload;
    },
    setSummary:(state, action) => {
      state.summary = action.payload
    },
    addDate: (state, action) => {
      state.date = action.payload;
    },
    addEntry: (state, action) => {
      state.diaryEntries = [...state.diaryEntries, action.payload];
    },
    removeEntry: (state, action) => {
      state.diaryEntries = state.diaryEntries.filter(
        (entry) => entry.id !== action.payload
      );
    },
  },
});

export const { setEntries, addEntry, removeEntry, addDate, setSummary } = diarySlice.actions;
export default diarySlice.reducer;
