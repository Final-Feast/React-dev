import React from "react";
import styles from "./DiaryNotRecommend.module.css";

const DiarySummary = () => {
  return (
    <div className={styles.summary}>
      <h3 className={styles.title}>Food not recommended</h3>
      <div className={styles.textContainer}>
       <p className={styles.text}>Example</p>
       <p className={styles.text}>Example</p>
      </div>
      
    </div>
  );
};

export default DiarySummary;
