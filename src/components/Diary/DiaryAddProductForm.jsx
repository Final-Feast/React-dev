import { useState } from 'react';
import styles from './DiaryAddProductForm.module.css';

const DiaryAddProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [amount, setAmount] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName || !amount) return;

    const newProduct = {
      productName,
      amount: Number(amount),
    };

    console.log('Product added:', newProduct); // Şimdilik konsola yazdırıyoruz
    onAddProduct(newProduct); // API'ye bağlandığında burayı güncelleyeceğiz

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
        placeholder="Grams"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      </form>
      <div className={styles.buttonContainer}>
        <button className={styles.button} type="submit">+</button>

      </div>

    </div>
    
  );
};

export default DiaryAddProductForm;

