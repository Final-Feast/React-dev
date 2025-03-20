import React, { useState } from 'react';
import { useEffect } from "react";
import DiaryNav from "../Navigation/DiaryNav";

import styles from './DiaryAddProductFormMobile.module.css';
import backButton from "../../assets/svg/backButton.svg";


const DiaryAddProductFormMobile = ({ onAddProduct, onClose }) => {
  const [productName, setProductName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName || !amount) return;

    const newProduct = {
      productName,
      amount: Number(amount),
    };

    onAddProduct(newProduct);

    setProductName('');
    setAmount('');
  };
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose(); 
            }
        };

        document.addEventListener("keydown", handleKeyDown); // Event listener ekle

        return () => {
            document.removeEventListener("keydown", handleKeyDown); 
        };
    }, [onClose]);

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
      <div className={styles.diarynav}>
        <DiaryNav  />

      </div>
        <div className={styles.backButtonContainer}>
                        <img src={backButton} alt="Back" width="12" height="12" className={styles.back} onClick={onClose}/> 
                    </div>
        <form className={styles.form} onSubmit={handleSubmit}>
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
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <div className={styles.buttonContainer}>
            <button className={styles.button} type="submit">
              Add
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default DiaryAddProductFormMobile;

