import React from "react";
import { useLocation } from "react-router-dom";
import ProductNav from "../../Navigation/ProductNav";
import DiaryFormMobile from "../../pages/ProductPage/ProductPage";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const location = useLocation();

  return (
    <div className={styles.productPageContainer}>
      <ProductNav isproductPage={location.pathname === "/product-page"} />
      <div className={styles.leftSection}>
        <DiaryFormMobile />
      </div>
      
      
    </div>
  );
};

export default ProductPage;
