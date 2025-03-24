import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import DiaryNav from "../../Navigation/DiaryNav";
import DiaryForm from "../../DiaryForm/DiaryForm";
import styles from "./DiaryPage.module.css";
import Background from "../../Background/index.jsx";
import { useDispatch } from "react-redux";
import { fetchDiaryEntries } from "../../../redux/diary/diaryActions.js";
import { useSelector } from "react-redux";

const DiaryPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const diaryDate = useSelector((state) => state.diary.date);

  useEffect(() => {
    dispatch(fetchDiaryEntries(diaryDate));
  }, [diaryDate, dispatch]);

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
