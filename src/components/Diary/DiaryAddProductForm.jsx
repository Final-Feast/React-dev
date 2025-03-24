import { useState } from "react";
import styles from "./DiaryAddProductForm.module.css";
import { useDispatch } from "react-redux";
import { filterProductsByText } from "../../redux/products/productsOperation";
import { useSelector } from "react-redux";
import { setEntries } from "../../redux/diary/diarySlice";
import { addDiaryEntry } from "../../redux/diary/diaryActions";
// import Mobile from 'DiaryAddProductFormMobile'

const DiaryAddProductForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [amount, setAmount] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // Seçilen ürünü saklama
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);

  // Redux store'dan arama sonuçlarını almak
  const { filteredItems } = useSelector((state) => state.products);
  const date = useSelector((state) => state.diary.date);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedProduct) {
      alert("Lütfen bir ürün seçin");
      return;
    }

    if (!amount || amount <= 0) {
      alert("Lütfen geçerli bir miktar girin");
      return;
    }
    if (!date) {
      alert("Lütfen geçerli bir tarih girin");
      return;
    }

    const productEntry = {
      title: selectedProduct.title,
      weight: Number(amount),
      calories: (selectedProduct.calories * amount) / 100,
      date,
    };
    await dispatch(addDiaryEntry(productEntry, accessToken));
    setSearchTerm("");
    setAmount("");
    setSelectedProduct(null);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSelectedProduct(null);

    if (value.trim().length > 2) {
      dispatch(filterProductsByText(value));
      setIsDropdownVisible(true);
    } else {
      setIsDropdownVisible(false);
    }
  };
  const handleSelectProduct = (product) => {
    setSearchTerm(product.title);
    setSelectedProduct(product);
    setIsDropdownVisible(false);
  };

  const renderNutritionInfo = () => {
    if (!selectedProduct) return null;
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.searchContainer}>
          <input
            className={styles.input}
            id="searchInput"
            type="text"
            placeholder="Enter product name"
            value={searchTerm}
            onChange={handleSearch}
            onFocus={() =>
              searchTerm.trim().length > 2 && setIsDropdownVisible(true)
            }
            onBlur={() => setTimeout(() => setIsDropdownVisible(false), 200)}
          />

          {/* Dropdown menü */}
          {isDropdownVisible && filteredItems && filteredItems.length > 0 && (
            <div className={styles.dropdown}>
              {filteredItems.map((product) => (
                <div
                  key={product._id}
                  className={styles.dropdownItem}
                  onClick={() => handleSelectProduct(product)}
                >
                  <span>{product.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {renderNutritionInfo()}

        <input
          className={styles.input}
          type="number"
          placeholder="Grams"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            type="submit"
            disabled={!selectedProduct || !amount || amount <= 0}
          >
            +
          </button>
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
