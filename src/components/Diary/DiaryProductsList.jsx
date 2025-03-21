import { useEffect, useState } from 'react';
import styles from './DiaryProductsList.module.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products'); // Backend API endpoint
        if (!response.ok) {
          throw new Error('Veriler alınamadı');
        }
        const data = await response.json();
        setProducts(data); // Gelen veriyi state'e al
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.productList}>
     
      <ul>
        {products.map((product) => (
          <li key={product._id} className={styles.productItem}>
            <h2 className={styles.productTitle}>{product.title}</h2>
            <p className={styles.productCategory}>Category: {product.categories}</p>
            <p className={styles.productWeight}>Weight: {product.weight}g</p>
            <p className={styles.productCalories}>Calories: {product.calories}</p>
            {product.groupBloodNotAllowed && (
              <p className={styles.bloodGroups}>
                Not Allowed Blood Groups:
                {product.groupBloodNotAllowed.map(
                  (isAllowed, index) =>
                    !isAllowed && (
                      <span key={index} className={styles.bloodGroup}>
                        Group {index}
                      </span>
                    )
                )}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
