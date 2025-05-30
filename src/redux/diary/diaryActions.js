// diaryActions.js: Günlük ekleme, silme ve listeleme işlemleri için API isteklerini yöneten fonksiyonlar.

import axios from "axios";
import { setEntries, setSummary, removeEntry , setLoading} from "./diarySlice";
import { Bounce, toast } from "react-toastify";

const API_URL = "https://diary-list-node-api.onrender.com/api/diary";

export const fetchDiaryEntries = (date) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    if (date) {
      const token = getState().auth.accessToken;
      const response = await axios.get(`${API_URL}/${date}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Başarılı yanıt için
      await dispatch(setEntries(response.data.products ?? []));
      await dispatch(setSummary(response.data.summary ?? []));

    }
  } catch (error) {
    // Hata durumunda
    if (error.response?.status === 404) {
      console.warn("Diary Bulunamadi");
      await dispatch(setEntries([]));
      await dispatch(setSummary([]));
    } else {
      console.error("Fetch diary error:", error);
      // İsteğe bağlı: hata durumunda boş liste gönderme
      await dispatch(setEntries([]));
      await dispatch(setSummary([]));
    }
  } finally{
    dispatch(setLoading(false))
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
