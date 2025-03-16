import React from "react";
import styles from "./DiarySummary.module.css";
import DiaryNotRecommend from "./DiaryNotRecommend";


const DiarySummary = ({ selectedDate }) => {
  return (
    <div className={styles.summary}>
      <div  className={styles.SummaryContainer}>

      <h3 className={styles.title}>Summary for {selectedDate.toLocaleDateString()}</h3>
      <div className={styles.textContainer}>
        <p className={styles.text}>Left         <span>{""}kcal</span>        </p>
        <p className={styles.text}>Consumed <span>{""}kcal</span>   </p>
        <p className={styles.text}>Daily rate <span>{""}kcal</span>   </p>
        <p className={styles.text}>n% of normal <span>{""}%</span>   </p>
      </div>
      </div>
      <div  className={styles.SummaryContainerAlt}>

      <DiaryNotRecommend/>

      </div>
    </div>
  );
};

export default DiarySummary;
