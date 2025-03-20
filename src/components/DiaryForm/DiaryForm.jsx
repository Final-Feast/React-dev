// DiaryForm.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import DiaryDateCalendar from "../Diary/DiaryDateCalendar";
import DiaryAddProduct from "../Diary/DiaryAddProduct";

import DiaryAddProductForm from "../Diary/DiaryAddProductForm";
import DiaryProductsList from "../Diary/DiaryProductsList";
import DiarySummary from "./DiarySummary"; 
import styles from "./DiaryForm.module.css";

const DiaryForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const formattedDate = selectedDate.toISOString().split("T")[0];
        const response = await axios.get(`/api/diary/${formattedDate}`);
        setProducts(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Ürünleri çekerken hata oluştu:", error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, [selectedDate]);

  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [...prev, { id: Date.now(), ...newProduct }]);
  };

  const handleDeleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div className={styles.diaryPageContainer}>
      {/* Sol Taraf */}
      <div className={styles.leftSection}>
        <DiaryDateCalendar onDateChange={setSelectedDate} />
        <DiaryAddProduct onAddProduct={handleAddProduct} />
        <DiaryProductsList products={products} onDeleteProduct={handleDeleteProduct} />
      </div>

      {/* Sağ Taraf: DiarySummary bileşenini burada kullanıyoruz */}
      <div className={styles.rightSection}>
        <DiarySummary selectedDate={selectedDate} />
      </div>
    </div>
  );
};

export default DiaryForm;
