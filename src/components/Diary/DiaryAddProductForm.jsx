import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Yönlendirme için
import styles from './DiaryAddProductForm.module.css';

const DiaryAddProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [amount, setAmount] = useState('');
  const [isMobile, setIsMobile] = useState(false); // Mobil kontrolü için
  const navigate = useNavigate(); // navigate kullanarak yönlendirme yapacağız

  // Ekran boyutunu kontrol etmek için useEffect
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // 768px ve altı mobil kabul edilir
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

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

    // Eğer mobilde isek, ürün ekledikten sonra yönlendirme yap
    if (isMobile) {
      navigate('/product-page'); // Yönlendirmek istediğiniz sayfa yolunu buraya ekleyin
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
