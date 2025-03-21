import React, { useState } from 'react';
import styles from './DiaryAddProductForm.module.css';

const DiaryAddProductFormMobile = ({ onAddProduct }) => {
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

  return (
    <div className={styles.container}>
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
        <button className={styles.button} type="submit">
          +
        </button>
      </form>
    </div>
  );
};

export default DiaryAddProductFormMobile;

