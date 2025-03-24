import { useEffect, useState } from "react";
import styles from "./DiaryProductsList.module.css";
import { useSelector } from "react-redux";
import DiaryProductsListItem from "./DiaryProductsListItem";

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const diaryEntries = useSelector((state) => state.diary.diaryEntries);
  

  return (
    <div className={styles.productListContainer}>
      <ul className={styles.productList}>
        {diaryEntries.length === 0 ? (
          <div>Aradiginiz tarihe uygun urunleri bulamadik</div>
        ) : (
          diaryEntries?.map((diary) => (
            <DiaryProductsListItem key={diary._id} diary={diary} />
          ))
        )}
      </ul>
    </div>
  );
};

export default ProductList;
