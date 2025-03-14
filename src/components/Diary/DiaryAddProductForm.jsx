import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Yönlendirme için
import styles from "./DiaryAddProductForm.module.css";

const DiaryAddProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate(); // useEffect içinde tanımlamaya gerek yok

  const handleRedirect = () => {
    navigate("/add-product");
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

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
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
