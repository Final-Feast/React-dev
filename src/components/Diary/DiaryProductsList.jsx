import { useEffect, useState } from 'react';
import styles from './DiaryProductsList.module.css';
import { useSelector } from 'react-redux'

const ProductList = () => {
  const [error, setError] = useState(null);

  const products = useSelector((state) => state.products.items)

  console.log(products)

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.productList}>
     
      <ul>
        {products?.data.map((product) => (
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
