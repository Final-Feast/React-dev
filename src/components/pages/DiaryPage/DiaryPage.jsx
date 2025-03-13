import Nav from '../../Navigation/DiaryNav.jsx';
import DiaryForm from '../../DiaryForm/DiaryForm.jsx';
import styles from "./DiaryPage.module.css";
const DairyPage = () => {
    return (
        <div className={styles.diaryPageContainer}>
        <Nav />
        <DiaryForm />
        </div>
    );
};
export default DairyPage;
