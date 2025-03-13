import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DiaryDateCalendar from "../Diary/DiaryDateCalendar";
import DiaryAddProductForm from "../Diary/DiaryAddProductForm";
import DiaryProductsList from "../Diary/DiaryProductsList";
import styles from "./DiaryForm.module.css";

const DiaryForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // 📌 Yönlendirme için eklendi

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const formattedDate = selectedDate.toISOString().split("T")[0];
        const response = await axios.get(`/api/diary/${formattedDate}`);
        console.log("API'den gelen veri:", response.data);
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
    
    // 📌 Ürün eklenince yönlendirme yap
    navigate("/diary/products");
  };

  const handleDeleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div className={styles.diaryPageContainer}>
      {/* Sol Taraf */}
      <div className={styles.leftSection}>
        <DiaryDateCalendar onDateChange={setSelectedDate} />
        <DiaryAddProductForm onAddProduct={handleAddProduct} />
        <DiaryProductsList products={products} onDeleteProduct={handleDeleteProduct} />
      </div>

      {/* Sağ Taraf */}
      <div className={styles.rightSection}>
        <div className={styles.summaryBox}>
          <h3>Summary for {selectedDate.toLocaleDateString()}</h3>
          <p>Left: 625 kcal</p>
          <p>Consumed: 2175 kcal</p>
          <p>Daily rate: 2800 kcal</p>
          <p>% of normal: 78%</p>
        </div>
      </div>
    </div>
  );
};

export default DiaryForm;
