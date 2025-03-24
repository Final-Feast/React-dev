import React from "react";
import styles from "./DiarySummary.module.css";
import DiaryNotRecommend from "./DiaryNotRecommend";
import { useSelector } from "react-redux";

const DiarySummary = ({ selectedDate }) => {
  const summary = useSelector((state) => state.diary.summary);

  return (
    <div className={styles.summary}>
      <div className={styles.SummaryContainer}>
        <h3 className={styles.title}>
          Summary for {selectedDate.toLocaleDateString()}
        </h3>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            Left {summary?.left} <span>{""}kcal</span>{" "}
          </p>
          <p className={styles.text}>
            Consumed {summary?.consumed}
            <span>{""}kcal</span>{" "}
          </p>
          <p className={styles.text}>
            Daily rate {summary?.dailyRate}
            <span>{""}kcal</span>{" "}
          </p>
          <p className={styles.text}>
            n% of normal {summary?.percentOfDailyRate} <span>{""}%</span>{" "}
          </p>
        </div>
      </div>
      <div className={styles.SummaryContainerAlt}>
        <DiaryNotRecommend />
      </div>
    </div>
  );
};

export default DiarySummary;
