import { useState } from "react";
import { deleteDiaryEntry } from "../../redux/diary/diaryActions";
import styles from "./DiaryProductsListItem.module.css";
import { useDispatch } from "react-redux";
import Loading from "../Loading/Loading";

const DiaryProductsListItem = ({ diary }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await dispatch(deleteDiaryEntry(diary._id));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <li className={styles.item}>
      <span className={styles.name}>{diary.title}</span>
      <span className={styles.amount}>{diary.weight} g</span>
      <span className={styles.dailyRate}>{diary.calories}kcal</span>
      <button
        className={styles.button}
        onClick={handleDelete}
        disabled={isLoading}
      >
        {isLoading ? (
          <div style={{position:"relative"}}>
            <Loading size="md" />
          </div>
        ) : (
          "✖"
        )}
      </button>
    </li>
  );
};

export default DiaryProductsListItem;
