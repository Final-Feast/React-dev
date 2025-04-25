import styles from "./DiaryProductsList.module.css";
import { useSelector } from "react-redux";
import DiaryProductsListItem from "./DiaryProductsListItem";
import Loading from "../Loading/Loading";

const ProductList = () => {
  const diaryEntries = useSelector((state) => state.diary.diaryEntries);
  const isLoading = useSelector((state) => state.diary.isLoading);
  console.log(isLoading);

  return (
    <div className={styles.productListContainer}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ul className={styles.productList}>
            {diaryEntries.length === 0 ? (
              <div>Aradiginiz tarihe uygun urunleri bulamadik</div>
            ) : (
              diaryEntries?.map((diary) => (
                <DiaryProductsListItem key={diary._id} diary={diary} />
              ))
            )}
          </ul>
        </>
      )}
    </div>
  );
};

export default ProductList;
