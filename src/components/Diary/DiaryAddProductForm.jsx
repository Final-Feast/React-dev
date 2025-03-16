import { useState } from 'react';
import styles from './DiaryAddProductForm.module.css';
// import Mobile from 'DiaryAddProductFormMobile'

const DiaryAddProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [amount, setAmount] = useState('');

  // Ekran boyutunu kontrol etmek için useEffect


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!productName || !amount) return;
  
    const newProduct = {
      title: productName,
      weight: Number(amount),
      date: new Date().toISOString().split('T')[0], // YYYY-MM-DD formatında tarih
    };
  
    try {
      const response = await fetch('/api/diary/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });
  
      if (!response.ok) {
        throw new Error('Ürün eklenirken hata oluştu');
      }
  
      console.log('Product added:', newProduct);
      onAddProduct(newProduct);
  
      setProductName('');
      setAmount('');
    } catch (error) {
      console.error(error);
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



// eğer DiaryAddProductFormMobile renderlanacaksa bu kod ancak sadece form geliyor 


// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from './DiaryAddProductForm.module.css';
// import Mobile from './DiaryAddProductFormMobile';

// const DiaryAddProductForm = ({ onAddProduct }) => {
//   const [productName, setProductName] = useState('');
//   const [amount, setAmount] = useState('');
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener('resize', handleResize);
    
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!productName || !amount) return;

//     const newProduct = {
//       productName,
//       amount: Number(amount),
//     };

//     console.log('Product added:', newProduct);
//     onAddProduct(newProduct);

//     setProductName('');
//     setAmount('');

//     if (isMobile) {
//       navigate('/add-product');
//     }
//   };

//   return isMobile ? (
//     <Mobile onAddProduct={onAddProduct} />
//   ) : (
//     <div className={styles.container}>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <input
//           className={styles.input}
//           type="text"
//           placeholder="Enter product name"
//           value={productName}
//           onChange={(e) => setProductName(e.target.value)}
//         />
//         <input
//           className={styles.input}
//           type="number"
//           placeholder="Grams"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//         />
//         <div className={styles.buttonContainer}>
//           <button className={styles.button} type="submit">+</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DiaryAddProductForm;
