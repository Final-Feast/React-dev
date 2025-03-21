import DiaryProductsList from "../Diary/DiaryProductsList";
import styles from "./DiaryForm.module.css";

const DiaryFormMobile = () => {

  return (
    <div className={styles.leftSection}>
        <DiaryProductsList />
    </div>
  );
};

export default DiaryFormMobile;

