import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DiaryAddProductForm.module.css';

const DiaryAddProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate(); // Yönlendirme için

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName || !amount) return;

    const newProduct = {
      productName,
      amount: Number(amount),
    };

    console.log('Product added:', newProduct);
    onAddProduct(newProduct);

    setProductName('');
    setAmount('');

    // Eğer ekran genişliği 768px'ten küçükse yönlendirme yap
    if (window.innerWidth < 768) {
      navigate('/diary/products');
    }
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
        <div className={styles.buttonContainer}>
          <button className={styles.button} type="submit">+</button>
        </div>
      </form>
    </div>
  );
};

export default DiaryAddProductForm;
