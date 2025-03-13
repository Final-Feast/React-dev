// DiaryProductsList.jsx

import React from 'react';
import styles from './DiaryProductsList.module.css';

const DiaryProductsList = ({ products, onDeleteProduct }) => {
  if (!Array.isArray(products) || products.length === 0) {
    return <p className={styles.emptyMessage}>Let's add some products!</p>;
  }

  return (
    <div className={styles.productList}>
      <h3>Products List</h3>
      <ul className={styles.list}>
        {products.map((product) => (
          <li key={product.id} className={styles.productItem}>
            <span>{product.productName} - {product.grams}g</span>
            <button className={styles.deleteButton} onClick={() => onDeleteProduct(product.id)}>✖</button>
          </li>
        ))}
      </ul>
      <div className={styles.summaryBox}>
        <h3>Summary</h3>
        <p>Left: 625 kcal</p>
        <p>Consumed: 2175 kcal</p>
        <p>Daily rate: 2800 kcal</p>
        <p>% of normal: 78%</p>
      </div>
    </div>
  );
};

export default DiaryProductsList;
