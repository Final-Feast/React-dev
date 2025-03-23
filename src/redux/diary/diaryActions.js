// diaryActions.js: Günlük ekleme, silme ve listeleme işlemleri için API isteklerini yöneten fonksiyonlar.

import axios from "axios";
import { setEntries, addEntry, removeEntry } from "./diarySlice";
import { Bounce, toast } from "react-toastify";

const API_URL = "http://localhost:3000/api/diary";

export const fetchDiaryEntries = (date, token) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/${date}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(setEntries(response.data));
  } catch (error) {
    console.error("Fetch diary error:", error);
  }
};

export const addDiaryEntry = (entry, token) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/add`, entry, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response) {
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
      return;
    }
    await dispatch(addEntry(response.data.data));
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
  } catch (error) {
    console.error("Add diary error:", error);
  }
};

export const deleteDiaryEntry = (entryId, date, token) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/${entryId}/${date}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(removeEntry(entryId));
  } catch (error) {
    console.error("Delete diary error:", error);
  }
};
