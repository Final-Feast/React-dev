import React from "react";
import styles from "./DiarySummary.module.css";
import DiaryNotRecommend from "./DiaryNotRecommend";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";

const DiarySummary = ({ selectedDate }) => {
  const summary = useSelector((state) => state.diary.summary);
  const isLoading = useSelector((state) => state.diary.isLoading);

  return (
    <div className={styles.summary}>
      <div className={styles.SummaryContainer}>
        <h3 className={styles.title}>
          Summary for {selectedDate.toLocaleDateString()}
        </h3>
        <div className={styles.textContainer}>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <p className={styles.text}>
                Left{" "}
                <span>
                  {" "}
                  {summary?.left} {""}kcal
                </span>{" "}
              </p>
              <p className={styles.text}>
                Consumed{" "}
                <span>
                  {" "}
                  {summary?.consumed}
                  {""}kcal
                </span>{" "}
              </p>
              <p className={styles.text}>
                Daily rate{" "}
                <span>
                  {" "}
                  {summary?.dailyRate}
                  {""}kcal
                </span>{" "}
              </p>
              <p className={styles.text}>
                n% of normal{" "}
                <span>
                  {" "}
                  {summary?.percentOfDailyRate} {""}%
                </span>{" "}
              </p>
            </>
          )}
        </div>
      </div>
      <div className={styles.SummaryContainerAlt}>
        <DiaryNotRecommend />
      </div>
    </div>
  );
};

export default DiarySummary;
