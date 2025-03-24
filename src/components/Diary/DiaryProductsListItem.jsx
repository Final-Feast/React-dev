import { deleteDiaryEntry } from "../../redux/diary/diaryActions";
import styles from "./DiaryProductsListItem.module.css";
import { useDispatch } from "react-redux";

const DiaryProductsListItem = ({ diary }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    await dispatch(deleteDiaryEntry(diary._id));
  };

  return (
    <li className={styles.item}>
      <span className={styles.name}>{diary.title}</span>
      <span className={styles.amount}>{diary.weight} g</span>
      <span className={styles.dailyRate}>{diary.calories}kcal</span>
      <button className={styles.button} onClick={handleDelete}>
        ✖
      </button>
    </li>
  );
};

export default DiaryProductsListItem;
