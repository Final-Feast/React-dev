import React from "react";
import styles from "./DiarySummary.module.css";

const DiarySummary = ({ selectedDate }) => {
  return (
    <div className={styles.summary}>
      <h3>Summary for {selectedDate.toLocaleDateString()}</h3>
      <p>Left: 625 kcal</p>
      <p>Consumed: 2175 kcal</p>
      <p>Daily rate: 2800 kcal</p>
      <p>% of normal: 78%</p>
    </div>
  );
};

export default DiarySummary;
