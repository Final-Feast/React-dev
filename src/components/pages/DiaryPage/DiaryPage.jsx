import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import DiaryNav from "../../Navigation/DiaryNav";
import DiaryForm from "../../DiaryForm/DiaryForm";
import styles from "./DiaryPage.module.css";
import Background from "../../Background/index.jsx";
import { useDispatch } from "react-redux";
import { fetchDiaryEntries } from "../../../redux/diary/diaryActions.js";
import { useSelector } from "react-redux";
import { setNotAllowedFoods } from "../../../redux/products/productsSlice.js";
import { selectProducts } from "../../../redux/products/productsSelectors.js";

const DiaryPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const diaryDate = useSelector((state) => state.diary.date);
  const products = useSelector(selectProducts);

  const { user } = useSelector((state) => state.auth.user);

  const bloodTypes = {
    0: 4,
    AB: 3,
    B: 2,
    A: 1,
  };

  const getRandomItems = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  useEffect(() => {
    // Önce kullanıcı kan grubu ve ürün listesi var mı diye kontrol et
    if (user?.bloodType && products?.data?.length > 0) {
      const notAllowedFoods = products.data
        .filter(
          (product) =>
            product.groupBloodNotAllowed[bloodTypes[user.bloodType]] === true
        )
        .map((product) => product.title);

      const randomNotAllowedFoods = getRandomItems(notAllowedFoods, 4);

      // Rastgele yasaklı gıdalar varsa dispatch et
      if (randomNotAllowedFoods.length > 0) {
        dispatch(setNotAllowedFoods(randomNotAllowedFoods));
      }
    }
  }, [user, products]);

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
