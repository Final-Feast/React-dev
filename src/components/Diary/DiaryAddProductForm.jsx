import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./DiaryAddProductForm.module.css";

const DiaryAddProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();
  const location = useLocation(); // To check the current route

  const isMobile = window.innerWidth <= 768; // Check if screen width indicates mobile

  const handleRedirect = () => {
    if (isMobile) {
      // Allow redirect only if on mobile
      navigate("/add-product");
    } else {
      // Prevent navigation on non-mobile devices
      alert("This page is only accessible on mobile.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName || !amount) return;

    const newProduct = {
      productName,
      amount: Number(amount),
    };

    console.log("Product added:", newProduct);
    onAddProduct(newProduct);

    setProductName("");
    setAmount("");
  };

  useEffect(() => {
    // Recalculate on window resize for mobile check
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Handle mobile-specific logic
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          {(isMobile || location.pathname === "/add-product") && (
            <>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter product name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
              <input
                className={styles.input}
                type="number"
                placeholder="Grams"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </>
          )}
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button} type="button" onClick={handleRedirect}>
            +
          </button>
        </div>
      </form>
    </div>
  );
};

export default DiaryAddProductForm;
