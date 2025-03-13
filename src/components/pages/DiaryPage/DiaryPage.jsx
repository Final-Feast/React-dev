import React from "react";
import { useLocation } from "react-router-dom";
import DiaryNav from "../../Navigation/DiaryNav";
import DiaryForm from "../../DiaryForm/DiaryForm";
import styles from "./DiaryPage.module.css";

const DiaryPage = () => {
  const location = useLocation();

  return (
    <div className={styles.diaryPageContainer}>
      <DiaryNav isDiaryPage={location.pathname === "/diary"} />
      <div className={styles.leftSection}>
        <DiaryForm />
      </div>
      
      
    </div>
  );
};

export default DiaryPage;
