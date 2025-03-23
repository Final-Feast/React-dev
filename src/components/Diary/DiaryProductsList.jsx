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
    <div className={styles.productListContainer}>
     
      <ul className={styles.productList}>
        {products?.data.map((product) => (
          <li key={product._id} className={styles.productItem}>
            <h2 className={styles.title}>{product.title}</h2>
            <div className={styles.textContainer}>
            
            <p className={styles.text}>Category: {product.categories}</p>
            <p className={styles.text}>Weight: {product.weight}g</p>
            <p className={styles.text}>Calories: {product.calories}</p>
            {product.groupBloodNotAllowed && (
              <p className={styles.text}>
                Not Allowed Blood Groups:
                {product.groupBloodNotAllowed.map(
                  (isAllowed, index) =>
                    !isAllowed && (
                      <span key={index} className={styles.text}>
                        Group {index}, 
                      </span>
                    )
                )}
              </p>
            )}
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
