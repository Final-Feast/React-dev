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

    console.log('Ürün eklendi:', newProduct); // Şimdilik konsola yazdırıyoruz
    onAddProduct(newProduct); // API'ye bağlandığında burayı güncelleyeceğiz

    setProductName('');
    setAmount('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter product name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        className={styles.inputGram}
        type="number"
        placeholder="Grams"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className={styles.button} type="submit">+</button>
    </form>
  );
};

export default DiaryAddProductForm;

