import React from "react";
import styles from "./DiaryNotRecommend.module.css";
import { useSelector } from "react-redux";

const DiarySummary = () => {
  const notAllowedFoods = useSelector(
    (state) => state.products.randomNotAllowedFoods
  );
  
  return (
    <div className={styles.productListContainer}>
      <h3 className={styles.title}>Food not recommended</h3>
      <div className={styles.textContainer}>
          <ul className={styles.productList} >
          {notAllowedFoods?.map((foods, index) => (
            <li key={index} className={styles.text}>
              {index + 1}. {foods}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DiarySummary;
