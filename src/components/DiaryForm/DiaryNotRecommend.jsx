import React from "react";
import styles from "./DiaryNotRecommend.module.css";
import { useSelector } from "react-redux";

const DiarySummary = () => {
  const notAllowedFoods = useSelector(
    (state) => state.products.notAllowedFoods
  );
  
  return (
    <div className={styles.summary}>
      <h3 className={styles.title}>Food not recommended</h3>
      <div className={styles.textContainer}>
        <ul>
          {notAllowedFoods?.map((foods, index) => (
            <li key={index}>
              {index + 1}. {foods}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DiarySummary;
