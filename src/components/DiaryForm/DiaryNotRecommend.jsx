import React from "react";
import styles from "./DiaryNotRecommend.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setNotAllowedFoods } from "../../redux/products/productsSlice.js";
import { selectProducts } from "../../redux/products/productsSelectors.js";
import { useEffect } from "react";
import Loading from "../Loading/Loading.jsx";

const DiarySummary = () => {
  const dispatch = useDispatch();
  const notAllowedFoods = useSelector(
    (state) => state.products.randomNotAllowedFoods
  );

  const products = useSelector(selectProducts);
  const bloodType = useSelector((state) => state.auth.user.bloodType);
  const isLoading = useSelector((state) => state.diary.isLoading);

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
    if (bloodType && products?.data?.length > 0) {
      const notAllowedFoods = products.data
        .filter(
          (product) =>
            product.groupBloodNotAllowed[bloodTypes[bloodType]] === true
        )
        .map((product) => product.title);

      const randomNotAllowedFoods = getRandomItems(notAllowedFoods, 4);

      // Rastgele yasaklı gıdalar varsa dispatch et
      if (randomNotAllowedFoods.length > 0) {
        dispatch(setNotAllowedFoods(randomNotAllowedFoods));
      }
    }
  }, [bloodType, products]);

  return (
    <div className={styles.productListContainer}>
      <h3 className={styles.title}>Food not recommended</h3>
      <div className={styles.textContainer}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <ul className={styles.productList}>
              {notAllowedFoods?.map((foods, index) => (
                <li key={index} className={styles.text}>
                  {index + 1}. {foods}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default DiarySummary;
