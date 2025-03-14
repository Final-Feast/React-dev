import ProductForm from "../../ProductForm/ProductForm";
import DiaryFormMobile from "../../DiaryForm/DiaryFormMobile";
import styles from "./ProductPage.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
// Mobil değilse ana sayfaya yönlendir
  const navigate = useNavigate();

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) {
      navigate("/diary"); 
    }
  }, []);

  // ---------------------------------------

  return (
    <div className={styles.productPageContainer}>
      <ProductForm />
      <div className={styles.leftSection}>
        <DiaryFormMobile />
      </div>
      
      
    </div>
  );
};

export default ProductPage;
