// DiaryForm.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Redux için import
import {
  fetchDiaryEntries,
  addDiaryEntry,
  deleteDiaryEntry,
} from "../../redux/diary/diaryActions"; // Redux actionlarını içeri aktar
import DiaryDateCalendar from "../Diary/DiaryDateCalendar";
import DiaryAddProduct from "../Diary/DiaryAddProduct";
import DiaryProductsList from "../Diary/DiaryProductsList";
import DiarySummary from "./DiarySummary";
import styles from "./DiaryForm.module.css";
import { addDate } from "../../redux/diary/diarySlice";

const DiaryForm = () => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const dispatch = useDispatch(); // Redux’a işlem göndermek için kullanılır
  const diaryEntries = useSelector((state) => state.diary.diaryEntries); // Redux'tan veri çekiyoruz

  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const formattedDate = new Date(selectedDate)
      .toLocaleDateString("tr-TR")
      .split(".")
      .reverse()
      .join("-");
    dispatch(addDate(formattedDate));
    if (accessToken) {
      dispatch(fetchDiaryEntries(formattedDate, accessToken)); // Redux ile API'den veri çek
    }
  }, [selectedDate, dispatch]);

  const handleAddProduct = async (newProduct) => {
    if (accessToken) {
      dispatch(addDiaryEntry(newProduct, accessToken)); // Redux'a yeni ürün ekleme işlemi
    }
  };

  const handleDeleteProduct = (id) => {
    const formattedDate = selectedDate.toISOString().split("T")[0];
    if (accessToken) {
      dispatch(deleteDiaryEntry(id, formattedDate, accessToken));
    }
  };

  return (
    <div className={styles.diaryPageContainer}>
      {/* Sol Taraf */}
      <div className={styles.leftSection}>
        <DiaryDateCalendar onDateChange={setSelectedDate} />
        <DiaryAddProduct onAddProduct={handleAddProduct} />
        <DiaryProductsList
          products={diaryEntries}
          onDeleteProduct={handleDeleteProduct}
        />
      </div>

      {/* Sağ Taraf: DiarySummary bileşenini burada kullanıyoruz */}
      <div className={styles.rightSection}>
        <DiarySummary selectedDate={selectedDate} />
      </div>
    </div>
  );
};

export default DiaryForm;
