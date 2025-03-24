// diaryActions.js: Günlük ekleme, silme ve listeleme işlemleri için API isteklerini yöneten fonksiyonlar.

import axios from "axios";
import { setEntries, addEntry, removeEntry } from "./diarySlice";
import { Bounce, toast } from "react-toastify";

const API_URL = "http://localhost:3000/api/diary";

export const fetchDiaryEntries = (date) => async (dispatch, getState) => {
  const token = getState().auth.accessToken;
  try {
    const response = await axios.get(`${API_URL}/${date}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    await dispatch(setEntries(response.data.products ?? []));
  } catch (error) {
    if (error.response?.status === 404) {
      console.warn("Diary Bulunamadi");
      await dispatch(setEntries([]));
    } else {
      console.error("Fetch diary error:", error);
    }
  }
};

export const addDiaryEntry = (entry, token) => async (dispatch, getState) => {
  try {
    const response = await axios.post(`${API_URL}/add`, entry, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response && response.data) {
      const date = getState().diary.date;
      dispatch(fetchDiaryEntries(date));
      toast.success("Ürün Başarıyla Eklendi", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      toast.error("Ürün Eklenemedi", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  } catch (error) {
    console.error("Add diary error:", error);
    toast.error("Ürün Eklenemedi", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }
};

export const deleteDiaryEntry = (entryId) => async (dispatch, getState) => {
  const token = getState().auth.accessToken;
  const date = getState().diary.date;
  try {
    await axios.delete(`${API_URL}/${entryId}/${date}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(removeEntry(entryId));
    dispatch(fetchDiaryEntries(date));
  } catch (error) {
    console.error("Delete diary error:", error);
  }
};
