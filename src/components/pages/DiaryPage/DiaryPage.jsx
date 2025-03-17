import React from "react";
import { useLocation } from "react-router-dom";
import DiaryNav from "../../Navigation/DiaryNav";
import DiaryForm from "../../DiaryForm/DiaryForm";
import styles from "./DiaryPage.module.css";
import Background from '../../Background/index.jsx';


const DiaryPage = () => {
  const location = useLocation();

  return (
    <div className={styles.diaryPageContainer}>
      <div className={styles.diarynav}>
        <DiaryNav isDiaryPage={location.pathname === "/diary"} />
      <Background />

      </div>
      <div className={styles.diaryform}>
        <DiaryForm />
        
      </div>
    </div>
  );
};

export default DiaryPage;
